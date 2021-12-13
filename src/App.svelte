<script>
    import { Router, Route, Link } from "svelte-routing";
    import Home from "./pages/Home.svelte";
    import Mint from "./pages/Mint.svelte";
    import Intel from "./pages/Intel.svelte";
    import Four from "./pages/Four.svelte";
    import { fly, fade, slide } from 'svelte/transition';
    import Gallery from "./pages/Gallery.svelte"
    export let url = '';
    import { address, contract, provider, nfts, balances } from './store';
    import { setContext } from 'svelte';
    import { writable } from 'svelte/store';
    import { Audio, Video } from 'svelte-audio-video'
    import { 
        initProvider,
        mintPepe,
    } from './utils.js';
  const track = {
    attach: (element, _track) => {
      // when fired, do whatever is needed to attach the track
      // Note: `this` refers to the `track` object
    },
 
    detach: (element, _track) => {
      // when fired, do whatever is needed to detach the track
      // Note: `this` refers to the `track` object
    },
  }
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
    const app = writable({});
    //export const innerHeight = writable(1000)
    //export const innerWidth = writable(1000) Any use for these
    setContext('app', app);
    console.log(window.location.href);

    function toggle(event){
      document.getElementById("sidebar").classList.toggle('active');
      document.getElementById("window").classList.toggle('active2');
      document.getElementById("menu1").classList.toggle('active3');
      document.getElementById("menu2").classList.toggle('active4');
    }
</script>

<div class="main">
    <Audio controls={false}>
        <source
          src="/"
          type="audio/mp3" />
      </Audio>
      <div class="menu" on:click={toggle} style="position: fixed;z-index: 10;transition: all 0.34s;position: relative;width: 45px;height: 45px;border-radius: 100%;cursor: pointer;"><div class="menu_part" id="menu1" style=""></div><div class="menu_part" id="menu2" style=""></div></div>
    <Router url="{url}">
      <header id="sidebar">
        <div class="left-box">
                  <Link to="/"><img src="/imgs/impossible-triangle.svg" width="100px" height="100px" alt=""></Link>
        </div>
        <nav>
          <Link to="mint"><p transition:fade="{{ y: 200, duration: 2000 }}" style="font-size:1.8rem;margin:0rem 1rem;">Mint</p></Link>
          <Link to="gallery"><p transition:fade="{{ y: 300, duration: 2000 }}" style="font-size:1.8rem;margin:0rem 1rem;">Gallery</p></Link>
          <Link to="intel"><p transition:fade="{{ y: 400, duration: 2000 }}" style="font-size:1.8rem;margin:0rem 1rem;">Intel</p></Link>
        </nav>
        <div class="right-box">
          {#if !$address}
          <button on:click={connect} class="mint-button"></button>
        {:else}
        <a href="/mint"><button class="mint-button"><p>Go To Mint</p></button></a>
        {/if} 
        </div>
      </header>
	    <div class="router-window" id="window">
        <Route path="/"><Home /></Route>
        <Route path="/mint" component={Mint}><Mint /></Route>
        <Route path="/mint"><Mint /></Route>
        <Route path="/intel" component={Intel}><Intel /></Route>
        <Route path="/gallery" component={Gallery}></Route>
        <Route path="/*"><Four /></Route>
      </div>
    </Router>

    <script type="text/javascript" src="/script.js"></script>
    <footer>
    </footer>
</div>
<style>
	.main {
		text-align: center;
		padding: 0rem;
		margin: 0 auto;
    max-width:100vw;
    overflow-x:hidden;
    
	}
  .router-window{
    left:-164px;transition:all 0.2s ease;
    top:0px;position:fixed;
  }
.mint-button{
	margin:auto;
  width:100px;
	min-width:auto;
	cursor:pointer;
  height:100px;
  border-radius:4px;
  border:0px solid black;
  transition:all 0.2s ease;
  font-weight:100;
  box-shadow:unset;
  padding:16px;
  background-image:url('/imgs/wallet(1).svg');
}
.mint-button > p{
  transition:all 0.2s ease;
}
.mint-button:hover{
  background-image:url('/imgs/wallet(2).svg');
  background-color:transparent;  
  border:0px solid white;

}
  
  nav{display:flex;
    flex-flow:row-reverse;
    justify-content:space-evenly;
    height:auto;
    transform:rotate(-90deg);
    margin:unset;
    text-transform:uppercase;
}
button{margin:1rem;}
#sidebar{
  top:0px;
  z-index:5;
  position:fixed;
  display:flex;
  width:100px;
  flex-flow:column;
  background:white;
  justify-content: space-between;
  padding: 2rem;
  height: calc(100vh - 4rem);
}


#sidebar{left:-164px;transition:all 0.2s ease;}
#window{width:100vw;} 
@media only screen and (max-width: 900px) {
   .main-title{
  margin-top:unset;}
  .footer-text{font-size:0.6rem;}
}

</style>
