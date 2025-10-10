import { ethers } from "hardhat";
import { expect } from "chai";

describe("MyToken", function () {
  it("Should mint total supply to deployer", async function () {
    const [owner] = await ethers.getSigners();
    const MyToken = await ethers.getContractFactory("MyToken");
    const token = await MyToken.deploy();
    await token.waitForDeployment();

    const balance = await token.balanceOf(owner.address);
    const totalSupply = await token.totalSupply();

    expect(balance).to.equal(totalSupply);
  });
});
