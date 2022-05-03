const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Transactions', function () {
  let ownerAddr, otherAddr;
  let transactions;

  beforeEach(async function () {
    [ownerAddr, otherAddr] = await ethers.getSigners();

    const Transactions = await ethers.getContractFactory(
      'Transactions',
      ownerAddr
    );
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
      transactions.addTransaction(otherAddr.address, 'My message!', 'keyword', {
        value: ethAmount,
      })
    ).to.changeEtherBalances([ownerAddr, otherAddr], [-ethAmount, ethAmount]);
  });

  it('Should add new transaction to history', async function () {
    const ethAmount = 10000;
    const message = 'My message!';
    const keyword = 'keyword';

    await transactions.addTransaction(otherAddr.address, message, keyword, {
      value: ethAmount,
    });
    let transactionHistory = await transactions.getTransactionHistory();

    expect(transactionHistory.length).to.equal(1);
    expect(transactionHistory[0].sender).to.equal(ownerAddr.address);
    expect(transactionHistory[0].reciever).to.equal(otherAddr.address);
    expect(transactionHistory[0].amount).to.equal(ethAmount);
    expect(transactionHistory[0].message).to.equal(message);
    expect(transactionHistory[0].keyword).to.equal(keyword);
  });

  it('Should emit TransactionAdded event', async function () {
    const ethAmount = 10000;

    await expect(
      transactions.addTransaction(otherAddr.address, 'My message!', 'keyword', {
        value: ethAmount,
      })
    ).to.emit(transactions, 'TransactionAdded');
  });
});
