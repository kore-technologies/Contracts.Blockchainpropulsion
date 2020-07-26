var BlockchainPropulsionToken = artifacts.require("BlockchainPropulsionToken");

module.exports = function(deployer) {
  deployer.deploy(BlockchainPropulsionToken,'TestToken','TTK',13);
};
