require("@nomicfoundation/hardhat-toolbox");

require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    goerli: {
      url: process.env.INFURA_URL_GOERLI,
      accounts: [
        process.env.WALLET_SECRET
      ],
    }
  },
  etherscan: {
    apiKey: process.env.ETHERSCAN_KEY,

  }
};

