import { config } from "dotenv";
config();
import { ethers } from "ethers";

async function main() {
  const provider = new ethers.JsonRpcProvider("https://eth-sepolia.public.blastapi.io");
  const wallet = new ethers.Wallet(process.env.TESTNET_PRIVATE_KEY!, provider);

  const abi = ["function mint(address to)"];
  const contractAddress = "0xbfd523641d9c2Ae0F41C09490bCFc28407806b9D";
  const contract = new ethers.Contract(contractAddress, abi, wallet);

  console.log("Minting NFT...");
  const tx = await contract.mint(wallet.address);
  console.log("Tx hash:", tx.hash);
  const receipt = await tx.wait();
  console.log("Minted at block:", receipt.blockNumber);
}

main().catch(console.error);
