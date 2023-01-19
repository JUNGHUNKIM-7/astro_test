<script lang="ts">
    let selected = 0

    export let headings: string[] = ['hello', 'world']
    export let contents: string[] = ['hello2', 'world2']
</script>

<div>
    <ul class="tabs-header">
        {#each headings as h, i}
            <button on:click|self={() => (selected = i)}>
                {h}
            </button>
        {/each}
    </ul>

    <div class="tabs-content">
        {contents[selected]}
    </div>
</div>