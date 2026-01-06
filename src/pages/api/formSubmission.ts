import type { APIRoute } from "astro";
import useStrapi from "@/utils/strapi"

export const POST: APIRoute = async ({ request }) => {
 
    const formData = await request.formData();
    
    const data: Record<string, any> = {};

    for (const [key, value] of formData.entries()) {
        if (typeof value === "string") {
            data[key] = value;
        }
    }

    const submissonResponse = await useStrapi.collection("form-submissions").create(data)

    return new Response(JSON.stringify({success: true}))
}