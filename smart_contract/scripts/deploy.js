const fs = require('fs');
const path = require('path');

async function main() {
  if (network.name === 'hardhat') {
    console.warn(
      'You are trying to deploy a contract to the Hardhat Network, which' +
        'gets automatically created and destroyed every time. Use the Hardhat' +
        " option '--network localhost'"
    );
  }

  const [deployer] = await ethers.getSigners();
  console.log('Deploying with:', await deployer.getAddress());

  console.log(
    'Account balance:',
    (await deployer.getBalance()).toString(),
    '\n'
  );

  const Transactions = await ethers.getContractFactory('Transactions');
  const transactions = await Transactions.deploy();

  await transactions.deployed();

  console.log('Transactions deployed to:', transactions.address);

  saveFrontendFiles({
    Transactions: transactions,
  });
}

function saveFrontendFiles(contracts) {
  const contractsDir = path.resolve(__dirname, '../../client/src/contracts');

  if (!fs.existsSync(contractsDir)) {
    fs.mkdirSync(contractsDir);
  }

  for (key in contracts) {
    fs.writeFileSync(
      path.resolve(contractsDir, key + '-contract-address.json'),
      JSON.stringify({ [key]: contracts[key].address }, undefined, 2)
    );

    const ContractArtifact = artifacts.readArtifactSync(key);
    fs.writeFileSync(
      path.resolve(contractsDir, key + '.json'),
      JSON.stringify(ContractArtifact, null, 2)
    );
  }
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
