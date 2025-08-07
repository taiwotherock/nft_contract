import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from 'dotenv';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    base_sepolia: {
      url: 'https://sepolia.base.org',
      accounts: {
        mnemonic: process.env.MNEMONIC ?? '',
      },
    },
    sepolia: {
      url: process.env.RPC_URL ?? '',
      accounts: {
        mnemonic: process.env.MNEMONIC ?? '',
      },
    },
  },
  
};

export default config;
