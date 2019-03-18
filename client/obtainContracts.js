const fs = require('fs');
const path = require('path')

const contractsPath = path.resolve(__dirname, '..', 'truffleContracts');
const outPath = path.resolve(__dirname, 'src', 'utils', 'contractsInfo.js');

// remove old file to for mental health
try {
    fs.unlinkSync(outPath);
} catch (error) {
    console.log('old file did not exist');
}

let contractContent, compiled, cPath;
let contractInfo = {}
let createdContracts = false;
fs.readdirSync(contractsPath).forEach(file => {
    if (!file.startsWith('Migrations.json')) {
        cPath = path.resolve(contractsPath, file);
        createdContracts = true;

        contractContent = fs.readFileSync(cPath);
        compiled = JSON.parse(contractContent);
        contractInfo[file.substr(0, file.indexOf('.json'))] = { addr: compiled.networks[5777].address, abi: compiled.abi }
    }
})
if (createdContracts) {
    const varName = 'contractsInfo';
    const result = `const ${varName} = ${JSON.stringify(contractInfo)} \nexport default ${varName}; \n`
    fs.writeFileSync(outPath, result);
}
