// const { ethers } = require("ethers");

// const INFURA_ID = ''
// const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

// const address = '0x73BCEb1Cd57C711feaC4224D062b0F6ff338501e'

// const main = async () => {
//     const balance = await provider.getBalance(address)
//     console.log(`\nETH Balance of ${address} --> ${ethers.utils.formatEther(balance)} ETH\n`)
// }

// main()


const {ethers} = require('ethers');

// Create a new instance of the JsonRpcProvider class and connect to the Infura node
const provider = new ethers.providers.JsonRpcProvider('');


// Call the eth_blockNumber method using the provider
const currentBlock = async()=>{
 const blockNumber = await provider.getBlockNumber();
// const blockNumber = await provider.listAccounts();
    console.log(`Current block number: ${blockNumber}`);
}



//  balance of a specific account address
const getBalance = async () => {
    const balance = await provider.getBalance('0x04cc45cea9a1dbfe76f70cbfdfc42df76d188a8e');
    console.log("balance: " + ethers.utils.formatEther(balance));
}
currentBlock();
getBalance();

