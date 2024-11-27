<script lang="ts">
    export let options: string[];
    export let onQueryChanges: (param: string) => void;

    function handleClick(param: string) {
        onQueryChanges(param);
    }
</script>

<div class="flex space-x-2">
    {#each options as option}
        <button on:click={() => handleClick(option)}>
            {option.toUpperCase()}
        </button>
    {/each}
</div>