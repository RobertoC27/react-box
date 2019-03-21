


# React Truffle Box modified 

This box comes with everything you need to start using smart contracts from a react app. This is as barebones as it gets, so nothing stands in your way.
## Modifications ✏️
1. Added a convenience script that extracts ABI and address of each contract and puts them on `client/src/utils/contractsInfo.js`
### Truffle-config.js 🔍
2. Configuration for ganache running on port 9494 with network id 5777
3. Configuration for remote private network with websockets

### client/src/utils/getWeb3.js 🔍
4. If no provider is injected added fallback to search provider locally (Ganache) and remotely (cloud private network)
## Standalone Installation

As with the truffle box, **make sure you are in an empty folder**
1. Clone the repo
   ```
   git clone https://github.com/RobertoC27/react-box .
   ```
2. Install packages for the React frontend
    Choose the one that fits your package manager
   ```javascript
   cd client && yarn install
   cd client && npm install
   ```
### As boilerplate for a new repo
1. Create new empty repo and initialize it
```
mkdir newrepo && cd newrepo
git init
git remote add origin https://github.com/RobertoC27/<newrepo>.git
```
2. Clone the template git
```
git clone https://github.com/RobertoC27/react-box
cd react-box
mv * ../ #moves everything to the repo
cd .. && rm -r react-box
```

3. Install dependencies
   `yarn install` inside the main folder to install open zeppelin contracts
    Choose the one that fits your package manager
   ```javascript
   cd client && yarn install
   cd client && npm install
   ```

4. Commit to your new repo
```
echo "# tmp" >> README.md
git add .
git commit -m "first commit"
git push -u origin master
```

## Developing
1. Run the development console.
    ```javascript
    truffle develop
    ```

2. Compile and migrate the smart contracts. Note inside the development console we don't preface commands with `truffle`.
    ```javascript
    compile
    migrate
    ```

3. In the `client` directory, we run the React app. Smart contract changes must be manually recompiled and migrated.
    ```javascript
    // in another terminal (i.e. not in the truffle develop prompt)
    cd client
    npm run start
    ```

4. Truffle can run tests written in Solidity or JavaScript against your smart contracts. Note the command varies slightly if you're in or outside of the development console.
    ```javascript
    // inside the development console.
    test

    // outside the development console..
    truffle test
    ```

5. Jest is included for testing React components. Compile your contracts before running Jest, or you may receive some file not found errors.
    ```javascript
    // ensure you are inside the client directory when running this
    npm run test
    ```

6. To build the application for production, use the build script. A production build will be in the `client/build` folder.
    ```javascript
    // ensure you are inside the client directory when running this
    npm run build
    ```

## FAQ

* __How do I use this with the Ganache-CLI?__

    It's as easy as modifying the config file! [Check out our documentation on adding network configurations](http://truffleframework.com/docs/advanced/configuration#networks). Depending on the port you're using, you'll also need to update line 29 of `client/src/utils/getWeb3.js`.

* __Where is my production build?__

    The production build will be in the `client/build` folder after running `npm run build` in the `client` folder.

* __Where can I find more documentation?__

    This box is a marriage of [Truffle](http://truffleframework.com/) and a React setup created with [create-react-app](https://github.com/facebookincubator/create-react-app/blob/master/packages/react-scripts/template/README.md). Either one would be a great place to start!
