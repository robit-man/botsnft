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
       <div class="mint-box">
         <div class="img-box">
           <img src="/imgs/droid.gif" alt="">
          </div>
          <div class="text-row">
            <p>GURA DROID</p>
            <p><b>1.0 ETH</b></p>
          </div>
          {#if !$address}
          <button on:click={connect} style="margin-left:unset;" class="button-padding">CONNECT WALLET</button>
        {:else}
          <button on:click={mint} style="margin-left:unset;" class="button-padding">MINT A VIEW</button>
          <br />{addressDisplay}  
        {/if}            
       </div>
    </div>
    


<style>
    .mint-box{width:350px;height: min-content;margin:auto;}
    .img-box{width:350px;height:350px;}
    .text-row{display:flex;flex-flow:row;justify-content: space-between;}
    .wrapper{    
      position: absolute;
      margin:auto;
      left: 0px;
      width:100vw;display:flex;flex-flow:row;justify-content:center;
      top:calc(4rem + 100px);
      height:calc(100vh - 150px - 4rem);
    }
</style>
