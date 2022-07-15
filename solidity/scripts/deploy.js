const hre = require("hardhat");

async function main() {
  const Bots = await hre.ethers.getContractFactory("bots");
  const bots = await Bots.deploy();
  await bots.deployed();
  await bots.mint({value:hre.ethers.utils.parseEther('0.3')})
  let uri = await bots.tokenURI(1);
  console.log(uri)
  console.log("bots Deployed to: ", bots.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
