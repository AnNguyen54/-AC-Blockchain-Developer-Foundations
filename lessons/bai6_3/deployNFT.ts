import { ethers } from "hardhat";

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying MyNFT with account:", deployer.address);

  const MyNFT = await ethers.getContractFactory("MyNFT");
  const myNFT = await MyNFT.deploy();
  await myNFT.waitForDeployment();

  const contractAddress = await myNFT.getAddress();
  console.log("MyNFT deployed to:", contractAddress);

  // Mint 1 NFT cho deployer
  const tx = await myNFT.mint(deployer.address);
  await tx.wait();

  // Kiểm tra owner của tokenId 0
  const owner = await myNFT.ownerOf(0);
  console.log("Owner of tokenId 0:", owner);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
