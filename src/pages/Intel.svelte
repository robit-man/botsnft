<script>
    import { onMount } from "svelte";
    import { slide } from 'svelte/transition';
    import { Router, Link, Route } from "svelte-routing"; 
    export let droidNumber = '73'
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
     
@media only screen and (max-width: 900px) {
    
    .img-box > img{width:auto;height:auto;}
         .text-area{text-align:left;margin-left:0rem;display:flex;flex-flow:column;justify-content: space-between;}

    .mint-box{width:auto;height: min-content;margin:auto;display:flex;flex-flow:column;max-height: 100%;overflow-y:auto;overflow-x:hidden;}

}
 </style>
 