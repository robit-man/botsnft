<script>
    import { onMount } from "svelte";
    import { slide } from 'svelte/transition';
    import { Router, Link, Route } from "svelte-routing"; 
    export let droidNumber = '73'
    export let Owner = '0x01f801ea803'
    export let Creator = '0x897808970896'
    export let Price = '1.3'
    export let Type = 'Transparent Mask'
    export let Rarity = '10%'
    export let MintDate = '2021-10-09'
    export let Location = 'The etherlands'
    </script>
    

    <div class="wrapper">
        <div class="mint-box">
          <div class="img-box">
            <img src="/imgs/bot.png" alt="">
           </div>
           <div class="text-area">
               <div class="nft-title-area">
                    <p style="font-size:2rem;margin:unset;"><b>GURAⓇ</b> Droid {droidNumber}</p>
                    <p><b>Buy Now</b> / Make Offer</p>
                    <p class="light">Share Link</p>
               </div>
                <div class="bottom-intel-constraint">
                    <div class="nft-owner-area">
                        <p>Owned by <b>{Owner}</b></p>
                        <p>Current Price <b>{Price}</b> ETH</p>
                        <p>Type <b>{Type}</b> / Rarity: {Rarity}</p>
                    </div>

                    <div class="nft-author-area">
                        <p>Creator <b>{Creator}</b></p>
                        <p>Mint Date: <b>{MintDate}</b></p>
                        <p>Location <b>{Location}</b></p>
                    </div>
                </div>
           </div>
        </div>
     </div>
     
 
 
 <style>
     .mint-box{width:auto;height: min-content;margin:auto;display:flex;flex-flow:row;}
     .img-box{width:auto;height:auto;}
     .img-box > img{width:512px;height:512px;}
     .text-area{text-align:left;margin-left:4rem;display:flex;flex-flow:column;justify-content: space-between;}
     .wrapper{    
       position: absolute;
       margin:auto;
       left: 0px;
       width:100vw;display:flex;flex-flow:row;justify-content:center;
       top:calc(4rem + 100px);
       height:calc(100vh - 150px - 4rem);
     }
     .nft-title-area > p{
	margin:auto 0rem;
     }
     .nft-author-area > p{
	margin:auto 0rem;
     }
     .nft-owner-area > p{
	margin:auto 0rem;
     }
     .nft-owner-area{
         margin-bottom:2rem;
     }
     
@media only screen and (max-width: 900px) {
    
    .img-box > img{width:auto;height:auto;}
         .text-area{text-align:left;margin-left:0rem;display:flex;flex-flow:column;justify-content: space-between;}

    .mint-box{width:auto;height: min-content;margin:auto;display:flex;flex-flow:column;max-height: 100%;overflow-y:auto;overflow-x:hidden;}

}
 </style>
 