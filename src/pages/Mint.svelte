<script>
    import { Link } from "svelte-routing";
    import { fade } from 'svelte/transition';
    import { address, contract, provider, alreadyMinted, etherLoading, totalSupply, maxSupply } from '../store';
    import { onMount, getContext} from 'svelte';
    import { 
        initProvider,
        mintPepe,
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
      await mintPepe(contract, provider);
    }
</script>

    <div class="wrapper">

      <div class="area">
       <div class="mint-box">
         <div class="img-box">
           <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5bPzhGi7YN02AYZ7jXEXCMAV2A5F0xzc_k3TIN7vu9zMUPcssZkCW_ta-VJBOimriCA8&usqp=CAU" alt="">
          </div>
          <div class="text-row">
            <p>GURA DROID</p>
            <p><b>1.0 ETH</b></p>
          </div>
          {#if !$address}
          <button on:click={connect} class="mint-button"><p>Connect Wallet</p></button>
        {:else}
          <button on:click={mint} class="mint-button"><p>Mint A Droid</p></button>
          <br><br>{addressDisplay}  
        {/if} 
       </div>
      </div>

    </div>
    


<style>
  
.mint-button{
	margin:auto;
  width:100%;
	min-width:150px;
	cursor:pointer;
  border:1px solid #656565;
  transition:all 0.2s ease;
  border-radius:unset!important;
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
    .img-box{width:350px;height:350px;}
    .img-box > img{width:100%;height:100%;}
    .text-row{display:flex;flex-flow:row;justify-content: space-between;}

	@media screen and (max-width:900px){
	.wrapper{position:relative;margin:2rem auto!important;top:auto!important;height:auto!important;}
	}
	
</style>
