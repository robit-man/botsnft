<script>
    //Help import data from opensea <3 
    export let nftlink = 'https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/42177050677546159779710000316165471247211713436920374376455667151256854462465';
    export let nftimage = '/imgs/wind.svg';
    export let nfttitle = 'STRING #1';
    export let desc = 'Strings are a collection of unidimensional objects, pure in form, and vibrant in their variety of stochastic behavior. ';
    export let protocol = 'ERC-1155';
    export let owner = 'CA785C';
    export let ownerlink = undefined;
</script>

<div class="card-wrapper">
    
    <div class="card">
        <div class="row">
            <div class="nft-image">
                <img src="{nftimage}" alt="">
            </div>
            <!--
            <div class="links">
                <a href="{nftlink}"><img style="margin:1rem;" width="64px" height="64px" src="/imgs/external-link.svg" alt=""></a>
                <a href="{nftlink}"><img style="margin:1rem;" width="64px" height="64px" src="/imgs/external-link.svg" alt=""></a>
                <a href="{nftlink}"><img style="margin:1rem;" width="64px" height="64px" src="/imgs/external-link.svg" alt=""></a>
            </div>
            -->
        </div>
        <div class="desc">
            <h1>{nfttitle}</h1>
            <div style="margin:0.5rem 0rem;height:3px;width:4rem;margin-right:calc(100% - 4rem);background:white;border-radius:5px;"></div>
            <p>{desc}</p>
            {#if ownerlink}
                <p>OWNED BY: <a style="display:inline;" href="{ownerlink}"><b>{owner}</b></a></p>
            {/if}
            <p>PROTOCOL: <b>{protocol}</b></p>
            <slot>
            </slot>            
        </div>
    </div>

</div>

<style>
</style>