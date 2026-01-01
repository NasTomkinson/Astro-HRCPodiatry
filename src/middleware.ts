import type { MiddlewareHandler } from "astro";
import useStrapi from "@/utils/strapi"

let cachedConfig: any = null;
let lastFetched = 0;
const CACHE_TTL = 60000 * 60;

async function fetchStrapiConfig() {
    const data = useStrapi.single("configuration")
    const config = await data.find({
        populate: "*"
    })
     
    return config;
}

export const onRequest: MiddlewareHandler = async (ctx, next) => {
    const now = Date.now()

    if(!cachedConfig || now - lastFetched > CACHE_TTL) {
        cachedConfig = await fetchStrapiConfig()
        lastFetched = now
    }

    ctx.locals.config = cachedConfig

    return next()
}