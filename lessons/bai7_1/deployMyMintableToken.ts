const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying contract with account:", deployer.address);

  // Deploy contract
  const MyMintableToken = await hre.ethers.getContractFactory("MyMintableToken");
  const token = await MyMintableToken.deploy();
  await token.waitForDeployment();

  console.log("Token deployed to:", await token.getAddress());

  // Mint 1000 token cho deployer
  const amount = hre.ethers.parseUnits("1000", 18);
  const tx = await token.mint(deployer.address, amount);
  await tx.wait();

  // In balance
  const balance = await token.balanceOf(deployer.address);
  console.log(`Balance of deployer: ${hre.ethers.formatUnits(balance, 18)} MMT`);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
