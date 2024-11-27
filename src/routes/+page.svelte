<script lang="ts">
    import { onMount } from "svelte";
    import axios from "axios";

    import QueryButton from "$lib/QueryButton.svelte";

    interface Drink {
        idDrink: string;
        strDrink: string;
    }

    let drinks: Drink[] = [];
    let queryParam: string = "a";

    async function fetchDrinks() {
        try {
            const response = await axios.get(`/api/search?f=${queryParam}`);
            drinks = await response.data.drinks; 
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    function updateQuery(param: string) {
        queryParam = param;
        fetchDrinks();
    }

    onMount(fetchDrinks);
</script>

<QueryButton 
    options={["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k"]}
    onQueryChanges={updateQuery}
/>

{#if drinks.length > 0}
    <ul>
        {#each drinks as drink}
            <li>
                <strong><a href={`/drink/${drink.idDrink}`}>{drink.idDrink}</a></strong> {drink.strDrink}
            </li>
        {/each}
    </ul>
{:else}
    <p>Loading...</p>
{/if}
