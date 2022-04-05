const { Blockchain, Transaction } = require('./blockchain')
const EC = require('elliptic').ec;
const ec = new EC('secp256k1');

const myKey = ec.keyFromPrivate('c9ac2a24be625ebedcfc0cdc62ab71583c801e8968f0fd9bbe44536f440f3a38');
const myWalletAddress = myKey.getPublic('hex');

const BugaCoin = new Blockchain();

const tx1 = new Transaction(myWalletAddress, 'receiver public key goes here', 10)
tx1.signTransaction(myKey)
BugaCoin.addTransaction(tx1)

console.log('\nStarting the miner...');
BugaCoin.minePendingTransactions(myWalletAddress)

console.log('\nBalance of rashid is', BugaCoin.getBalanceOfAddress(myWalletAddress));
