import type { MiddlewareHandler } from "astro";
import useStrapi from "@/utils/strapi"

let cachedConfig: any = null;
let cachedNav: any = null;
let lastFetched = 0;
const CACHE_TTL = 60000 * 60;

async function fetchStrapiConfig() {
    const data = useStrapi.single("configuration")
    const config = await data.find({
        populate: "*"
    })
     
    return config;
}

async function fetchStrapiNavs() {
    const data = useStrapi.single("navigation/render/header")
    const footerData = useStrapi.single("navigation/render/footer")
    const treatmentData = useStrapi.single("navigation/render/treatments-2")

    const config = await data.find({
        type: "TREE",
        populate: "*"
    })
    const treatmentsConfig = await treatmentData.find({
        type: "TREE",
        populate: "*"
    })
    const footerConfig = await footerData.find({
        type: "TREE",
        populate: "*"
    })

    return {
        header: config,
        footer: footerConfig,
        treatments: treatmentsConfig
    }
}

export const onRequest: MiddlewareHandler = async (ctx, next) => {
    const now = Date.now()

    // if(!cachedConfig || now - lastFetched > CACHE_TTL) {
        cachedConfig = await fetchStrapiConfig()
        cachedNav = await fetchStrapiNavs()
        lastFetched = now
    // }


    ctx.locals.config = cachedConfig
    ctx.locals.nav = cachedNav

    return next()
}