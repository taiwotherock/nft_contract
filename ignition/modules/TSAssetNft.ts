// This setup uses Hardhat Ignition to manage smart contract deployments.
// Learn more about it at https://hardhat.org/ignition

import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

const AssetNftModule = buildModule("AssetNftModule", (m) => {

  const owner = m.getParameter("owner", m.getAccount(0));
  const asset = m.contract("TSAssetNft", [owner]);

  return { asset };
});

export default AssetNftModule;
