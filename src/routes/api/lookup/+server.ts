import { json } from "@sveltejs/kit";
import axios from "axios";

export async function GET({ url }: { url:URL }) {
    const id = url.searchParams.get("i");

    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php`, {
            params: {
                i: id,
            },
        });

        return json(response.data);
    } catch (error) {
        return json({ error: "Failed to fetch coctail data" }, { status: 500 });
    }
}