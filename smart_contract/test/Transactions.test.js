const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Transactions', function () {
  let owner, otherSigner;
  let transactions;

  beforeEach(async function () {
    [owner, otherSigner] = await ethers.getSigners();

    const Transactions = await ethers.getContractFactory('Transactions', owner);
    transactions = await Transactions.deploy();

    await transactions.deployed();
  });

  it('Should have correct initial values', async function () {
    const transactionHistory = await transactions.getTransactionHistory();

    expect(transactionHistory).to.be.empty;
  });

  it('Should transfer ETH correctly', async function () {
    const ethAmount = 10000;

    await expect(() =>
      transactions.addTransaction(
        otherSigner.getAddress(),
        'My message!',
        'keyword',
        {
          value: ethAmount,
        }
      )
    ).to.changeEtherBalances([owner, otherSigner], [-ethAmount, ethAmount]);
  });

  it('Should add new transaction to history', async function () {
    const ethAmount = 10000;
    const message = 'My message!';
    const keyword = 'keyword';

    await transactions.addTransaction(
      otherSigner.getAddress(),
      message,
      keyword,
      {
        value: ethAmount,
      }
    );
    let transactionHistory = await transactions.getTransactionHistory();

    expect(transactionHistory.length).to.equal(1);
    expect(transactionHistory[0].sender).to.equal(await owner.getAddress());
    expect(transactionHistory[0].reciever).to.equal(
      await otherSigner.getAddress()
    );
    expect(transactionHistory[0].amount).to.equal(ethAmount);
    expect(transactionHistory[0].message).to.equal(message);
    expect(transactionHistory[0].keyword).to.equal(keyword);
  });

  it('Should emit TransactionAdded event', async function () {
    const ethAmount = 10000;

    await expect(
      transactions.addTransaction(
        otherSigner.getAddress(),
        'My message!',
        'keyword',
        {
          value: ethAmount,
        }
      )
    ).to.emit(transactions, 'TransactionAdded');
  });
});
