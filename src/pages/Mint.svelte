<script>
    import { Link } from "svelte-routing";
    import { fade } from 'svelte/transition';
    import { address, contract, provider, alreadyMinted, etherLoading, totalSupply, maxSupply } from '../store';
    import { onMount, getContext} from 'svelte';
    import { 
        initProvider,
        mintHex,
    } from '../utils.js';

    const app = getContext('app');
    var addressDisplay = ''
    async function connectEthProvider(reconnect=false) {
        if(!$address) {
            await initProvider(app, reconnect);
            addressDisplay = String($address).slice(0,10)+"...";
            $address = $address;
        }
    }

    function connect(event) {
        connectEthProvider(false);
    }    

    async function mint(event) {
      await mintHex(contract, provider);
    }
</script>

    <div class="wrapper">
      <Link to="roadmap"><div class="mint-button-cta-box" style=""><h1>ROADMAP ▶</h1></div></Link>

      <div class="area">
       <div class="mint-box">
         <div class="img-box">
           <img src="/imgs/Hexels_20.png" alt="">
          </div>
          <div class="text-row">
            <p>HEXELZ</p>
            <p><b>0.55 ETH</b></p>
          </div>
          {#if !$address}
          <button on:click={connect} class="mint-button"><p>Connect Wallet</p></button>
        {:else}
          <button on:click={mint} class="mint-button"><p>Mint Hexelz</p></button>
          <br><br>{addressDisplay}  
        {/if} 
       </div>
      </div>

    </div>
    


<style>
   .wrapper{display: flex;
flex-flow: column;
justify-content: center;}
.mint-button{
	margin:auto;
  width:100%;
	min-width:150px;
	cursor:pointer;border-radius:4px;
  border:1px solid #656565;
  transition:all 0.2s ease;
  border-radius:4px!important;
}
.mint-button > p{
  transition:all 0.2s ease;
  font-size:1rem;letter-spacing:2px;
}
.mint-button:hover{
  background-color:#656565;
}
.mint-button:hover > p {color:#d8d7da;}
    .mint-box{width:350px;height: min-content;margin:auto;}
    .img-box{border-radius:4px;width:350px;height:350px;}
    .img-box > img{width:100%;height:100%;}
    .text-row{display:flex;flex-flow:row;justify-content: space-between;}

	@media screen and (max-width:900px){
	.wrapper{position:relative;margin:2rem auto!important;top:auto!important;height:auto!important;}
	}
	
</style>
