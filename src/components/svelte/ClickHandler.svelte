<script lang="ts">
    import logos from '/framework-logos.png'
    import logosSmall from '/framework-logos-small.png'

    export let toggle: boolean
</script>

<button on:click={() => (toggle = !toggle)}>toggle</button>

{#if toggle}
    <div class="showcase-img">
        <img class="logos" src={logos} alt="" />
        <img class="logos-small" src={logosSmall} alt="" />
    </div>
    <p class="showcase-demo">
        <small>
            This is a demo website used for the YouTube crash course
        </small>
    </p>
{/if}

<style>
    .showcase-img {
        text-align: center;
    }
    .showcase-img img {
        border-radius: 10px;
        margin: auto;
    }
    .showcase-demo {
        color: #fff;
        text-align: center;
        font-weight: 300;
    }
</style>
