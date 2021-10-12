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

    function connectWallet(event) {
        connectEthProvider(false);
    }    

    async function mint(event) {
      await mintPepe(contract, provider);
    }
</script>

    <div class="wrapper">
       
    </div>
    


<style>
    .wrapper{    
      position: absolute;
      margin:auto;
      width:100vw;display:flex;flex-flow:row;justify-content:center;
      top:calc(4rem + 100px);
      height:calc(100vh - 150px - 4rem);
    }
</style>
