const hre = require("hardhat");

async function main() {
    await hre.run("verify:verify", {
        address: '0x274822d4237dC4c8C9cc874a0D05Ccaa3A43f314',
        constructorArguments: [],
      });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

