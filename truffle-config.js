const path = require("path");

module.exports = {
  // See <http://truffleframework.com/docs/advanced/configuration>
  // to customize your Truffle configuration!
  // contracts_build_directory: path.join(__dirname, "client/src/contracts"),
  contracts_build_directory: path.resolve(__dirname, "truffleContracts/"),
  networks: {
    ganache: {
      host: "127.0.0.1",     // Localhost (default: none)
      port: 9494,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
    },

    cloud: {
      host: "10.1.1.1",     // Localhost (default: none)
      port: 9494,            // Standard Ethereum port (default: none)
      network_id: "*",       // Any network (default: none)
      websockets: true
    },
  }
};
