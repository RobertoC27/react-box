import Web3 from "web3";

const getWeb3 = () =>
  new Promise((resolve, reject) => {
    // Wait for loading completion to avoid race conditions with web3 injection timing.
    window.addEventListener("load", async () => {
      // Modern dapp browsers...
      if (window.ethereum) {
        const web3 = new Web3(window.ethereum);
        try {
          // Request account access if needed
          await window.ethereum.enable();

          console.log('🆕 🦊 Metamask new style');

          // Acccounts now exposed
          resolve(web3);
        } catch (error) {
          reject(error);
        }
      }
      // Legacy dapp browsers...
      else if (window.web3) {
        // Use Mist/MetaMask's provider.
        const web3 = window.web3;
        console.log('🗝️ 🦊 Metamask old style');
        resolve(web3);
      }
      // Fallback to localhost; or private cloud network
      else {
        let provider = new Web3.providers.HttpProvider('http://127.0.0.1:9494');
        let web3 = new Web3(provider);
        try {
          await web3.eth.net.getId();
          console.log('💻 Local Ganache network');

        } catch (error) {
          provider = new Web3.providers.WebsocketProvider('ws://35.165.129.25:7878');
          web3 = new Web3(provider);
          console.log('☁️ Private cloud network');

        }
        // const provider = new Web3.providers.HttpProvider(
        //   "http://127.0.0.1:9494"
        // );
        // const web3 = new Web3(provider);
        // console.log("No web3 instance injected, using Local web3.");
        resolve(web3);
      }
    });
  });

export default getWeb3;
