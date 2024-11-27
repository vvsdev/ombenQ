import { json } from "@sveltejs/kit";
import axios from "axios";

export async function GET({ url }: { url:URL }) {
    const firstLetter = url.searchParams.get("f");

    try {
        const response = await axios.get(`https://www.thecocktaildb.com/api/json/v1/1/search.php`, {
            params: {
                f: firstLetter,
            },
        });

        // console.log("r: ", response.data);

        return json(response.data);
    } catch (error) {
        return json({ error: "Failed to fetch coctail data" }, { status: 500 });
    }
}