import { strapi } from '@strapi/client';
import { STRAPI_URL } from "astro:env/client";
import { STRAPI_TOKEN} from "astro:env/server";

const useStrapi = strapi({
    baseURL: `${STRAPI_URL}/api`,
    auth: STRAPI_TOKEN
})

export default useStrapi