
  import { expect } from "chai";
  import {ethers} from "hardhat";

describe("TSAssetNft", function () {
  let AssetNft;
  let assetNft2 : any;
  let owner;
  let addr1 : any;

  beforeEach(async function () {
    // Get the ContractFactory and Signers
    AssetNft = await ethers.getContractFactory("TSAssetNft");
    [owner, addr1] = await ethers.getSigners();
    console.log('owner ' + owner.address)
    console.log('addr1 ' + addr1)

    // Deploy the contract
    assetNft2 = await AssetNft.deploy(owner.address);
    //await assetNft2.deployed();
  });

  it("Should mint a new NFT and set its token URI", async function () {
    const tokenId = 1;
    const tokenURI = "https://dimensionlogicltd.com/asset/token/1";

    // Mint a new NFT
    await assetNft2.safeMint(addr1.address, tokenId, tokenURI);

    // Check that the owner of the NFT is addr1
    expect(await assetNft2.ownerOf(tokenId)).to.equal(addr1.address);

    // Check that the token URI is set correctly
    expect(await assetNft2.tokenURI(tokenId)).to.equal(tokenURI);
  });

  it("Should mint", async function () {
    const tokenId = 2;
    const tokenURI = "https://dimensionlogicltd.com/asset/token/2";

    // Try to mint an NFT from a non-owner address
    await assetNft2.safeMint(addr1.address, tokenId, tokenURI);
    /*await expect(
      assetNft2.safeMint(addr1.address, tokenId, tokenURI)
      //assetNft2.connect(addr1.address).safeMint(addr1.address, tokenId, tokenURI)
    ).to.be.revertedWith("Ownable: caller is not the owner");*/

    expect(await assetNft2.tokenURI(tokenId)).to.equal(tokenURI);

  });
});