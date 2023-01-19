<script lang="ts">
    let selected = 0
    let pages = ['body1', 'body2', 'body3']
</script>

{#each pages as p, i}
    <div>
        {p}
        <button on:click={() => (selected = i)}>select</button>
    </div>
{/each}