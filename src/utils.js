//import { web3resolver } from './web3resolver.js'
import { ethers } from 'ethers';
import { 
    web3Loaded,
    address,
    contract,
    provider,
    network,
    nfts,
    etherLoading,
    balances,
    totalSupply,
    maxSupply,
    price
    } from './store.js';
import { get } from 'svelte/store'
import abi from './abis/nft.json';

const NFT_CONTRACT_ADDRESS = '0x9fE46736679d2D9a65F0992F2272dE9f3c7fa6e0'
export async function initProvider(app, reconnect = false) {
    var signer, addr, p;
    try {
        p = new ethers.providers.Web3Provider(window.ethereum);
        await window.ethereum.send("eth_requestAccounts", []);

        signer = await p.getSigner();
        addr = await signer.getAddress();
    }
    catch (error) {
        console.log(error)
        throw new Error('Provider not connected.');
    }

    var nid = await p.getNetwork()
    var nftContract = new ethers.Contract(NFT_CONTRACT_ADDRESS, abi, signer);
    var total = await nftContract.totalSupply();
    var supply = await nftContract.maxSupply();
    var mintPrice = await nftContract.price();

    totalSupply.set(total)
    address.set(addr)
    contract.set(nftContract);
    network.set(nid.chainId);
    provider.set(p);
    maxSupply.set(supply);
    price.set(mintPrice);
    
    app = app;
    total = parseInt(total.toString())
    var iterate = [...Array(total).keys()]
    var bals = [];
    
    var each = iterate.forEach( async i => {
        var owner
        try {
            owner = await nftContract.ownerOf(i+1)
        }
        catch(err) {
            console.log(err)
        }
        if(owner == addr) {
            bals.push(resp[i])
            balances.set(bals);
        }
    })
    
    subscribeToTransferEvent(window.ethereum, nftContract)
    // Subscribe to accounts change
    window.ethereum.on("accountsChanged", onAccountsChanged);
    window.ethereum.on("chainChanged", onChainChanged);
    window.ethereum.on("connect", onConnect);
    window.ethereum.on("disconnect", onDisconnect);

    web3Loaded.set(1);
}

export async function mint(quantity) {
    const p = get(provider);
    const nftContract = get(contract)
    const mintPrice = get(price)
    try {
        console.log("Mint")
        etherLoading.set(true);
        const resp = await nftContract.mint({ value: mintPrice.mul(quantity) });
        console.log("Loading");
        await resp.wait().then(
            receipt => {
                console.log(receipt);
            },
            error => {
                throw new Error('Mint Failed: ' + error);
            })
    } catch (e) {
        console.log(e)
        etherLoading.set(false);
        return false;
    }
    etherLoading.set(false);
    supply = await contract.totalSupply();
    totalSupply.set(supply);
}

function setProviderWithLocal(q) {
    if (isWeb3 == 1) {
        provider = new ethers.providers.JsonRpcProvider();
    } else {
        provider = new ethers.providers.Web3Provider(q)
    }
}
function onAccountsChanged() {
    address.set(undefined)
    nfts.set(undefined)
    console.log("onAccountsChanged");
}

function onChainChanged() {
    address.set(undefined)
    nfts.set(undefined)    
    console.log("Chain Changed");
}

function onConnect() {
    console.log("onConnect");
}

function onDisconnect() {
    address.set(undefined)
    nfts.set(undefined)    
    console.log("onDisconnect");
}

export async function subscribeToTransferEvent(provider) {
    var nftContract = get(contract);
    var address = get(address);
    nftContract.on("Transfer", async (from, to, nftid) => {
        var nftContract = get(contract);
        var total = await nftContract.totalSupply();
        totalSupply.set(total)
        var resp = await fetch('/.netlify/functions/get_gallery', {
            method: 'POST',
            body: JSON.stringify({})
        })
        resp = await (await (resp).json())
        nfts.set(resp);
    });

  }

  export function amountFormatter(amount, baseDecimals = 18, displayDecimals = 3, useLessThan = true) {
    if (baseDecimals > 18 || displayDecimals > 18 || displayDecimals > baseDecimals) {
      throw Error(`Invalid combination of baseDecimals '${baseDecimals}' and displayDecimals '${displayDecimals}.`)
    }
  
    // if balance is falsy, return undefined
    if (!amount) {
      return undefined
    }
    // if amount is 0, return
    else if (amount.toString() == '0') {
      return '0'
    }
    // amount > 0
    else {
      // amount of 'wei' in 1 'ether'
      const baseAmount = ethers.BigNumber.from(10)
      .pow(ethers.BigNumber.from(baseDecimals))
  
      const minimumDisplayAmount = baseAmount.div(
        ethers.BigNumber.from(10)
        .pow(ethers.BigNumber.from(displayDecimals))
      )
  
      // if balance is less than the minimum display amount
      if (amount.lt(minimumDisplayAmount)) {
        return useLessThan
          ? `<${ethers.utils.formatUnits(minimumDisplayAmount, baseDecimals)}`
          : `${ethers.utils.formatUnits(amount, baseDecimals)}`
      }
      // if the balance is greater than the minimum display amount
      else {
        const stringAmount = ethers.utils.formatUnits(amount, baseDecimals)
  
        // if there isn't a decimal portion
        if (!stringAmount.match(/\./)) {
          return stringAmount
        }
        // if there is a decimal portion
        else {
          const [wholeComponent, decimalComponent] = stringAmount.split('.')
          const roundUpAmount = minimumDisplayAmount.div(ethers.constants.Two)
          const roundedDecimalComponent = ethers
            .BigNumber.from(decimalComponent.padEnd(baseDecimals, '0'))
            .add(roundUpAmount)
            .toString()
            .padStart(baseDecimals, '0')
            .substring(0, displayDecimals)
  
          // decimals are too small to show
          if (roundedDecimalComponent === '0'.repeat(displayDecimals)) {
            return wholeComponent
          }
          // decimals are not too small to show
          else {
            return `${wholeComponent}.${roundedDecimalComponent.toString().replace(/0*$/, '')}`
          }
        }
      }
    }
}