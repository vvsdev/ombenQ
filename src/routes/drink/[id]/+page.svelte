<script lang="ts">
    import { page } from '$app/stores';
    import { onMount } from "svelte";
    import axios from "axios";

    interface Drink {
        idDrink: string;
        strDrink: string;
        strCategory: string;
    }

    let drinkId: string;
    let drink: Drink;

    $: drinkId = $page.params.id;

    async function fetchDrink() {
        try {
            const response = await axios.get(`/api/lookup?i=${drinkId}`);
            drink = await response.data.drinks[0];
        } catch (error) {
            console.error("Error fetching data: ", error);
        }
    }

    onMount(fetchDrink);
</script>

{#if drink}
    <ul>
        <li>{drink.idDrink}</li>
        <li>{drink.strDrink}</li>
        <li>{drink.strCategory}</li>
    </ul>
{:else}
    <p>Loading...</p>
{/if}
