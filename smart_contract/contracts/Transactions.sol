// SPDX-License-Identifier: MIT

pragma solidity ^0.8.0;

contract Transactions {
    event TransactionAdded(
        address sender,
        address reciever,
        uint256 amount,
        string message,
        string keyword
    );

    struct Transcation {
        address sender;
        address reciever;
        uint256 amount;
        string message;
        string keyword;
    }

    Transcation[] transactionHistory;

    function addTransaction(
        address payable _reciever,
        string memory message,
        string memory keyword
    ) public payable {
        _reciever.transfer(msg.value);
        transactionHistory.push(
            Transcation(msg.sender, _reciever, msg.value, message, keyword)
        );
        emit TransactionAdded(
            msg.sender,
            _reciever,
            msg.value,
            message,
            keyword
        );
    }

    function getTransactionHistory()
        public
        view
        returns (Transcation[] memory)
    {
        return transactionHistory;
    }
}
