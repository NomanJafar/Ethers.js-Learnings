// const { ethers } = require("ethers");

// const INFURA_ID = ''
// const provider = new ethers.providers.JsonRpcProvider(`https://mainnet.infura.io/v3/${INFURA_ID}`)

// const ERC20_ABI = [
//     "function name() view returns (string)",
//     "function symbol() view returns (string)",
//     "function totalSupply() view returns (uint256)",
//     "function balanceOf(address) view returns (uint)",
// ];

// const address = '0x6B175474E89094C44Da98b954EedeAC495271d0F' // DAI Contract
// const contract = new ethers.Contract(address, ERC20_ABI, provider)

// const main = async () => {
//     const name = await contract.name()
//     const symbol = await contract.symbol()
//     const totalSupply = await contract.totalSupply()

//     console.log(`\nReading from ${address}\n`)
//     console.log(`Name: ${name}`)
//     console.log(`Symbol: ${symbol}`)
//     console.log(`Total Supply: ${totalSupply}\n`)

//     const balance = await contract.balanceOf('0x6c6Bc977E13Df9b0de53b251522280BB72383700')

//     console.log(`Balance Returned: ${balance}`)
//     console.log(`Balance Formatted: ${ethers.utils.formatEther(balance)}\n`)
// }

// main()


const {ethers} = require('ethers');

const INFURA_ID='';

const provider = new ethers.providers.JsonRpcProvider(INFURA_ID);

// Call the eth_blockNumber method using the provider
const currentBlock = async()=>{
    const blockNumber = await provider.getBlockNumber();
   // const blockNumber = await provider.listAccounts();
       console.log(`Current block number: ${blockNumber}`);
   }

//  balance of a specifq account address
const getBalance = async () => {
    const balance = await provider.getBalance('0x04cc45cea9a1dbfe76f70cbfdfc42df76d188a8e');
    console.log("balance: " + ethers.utils.formatEther(balance));
}
currentBlock();
getBalance();




// 3 things are required to read a smart contract 
//1 the address of smart contract
//2 the ABI (abstract binary interface), means a json that explains what functions and args a smart contract has and what is possible 
 // to do with the smart contract
//3 third is a provider or signer function


const address ='0x6B175474E89094C44Da98b954EedeAC495271d0F';

const ERC20_ABI = [
    "function name() view returns (string)",
    "function symbol() view returns (string)",
    "function totalSupply() view returns (uint256)",
    "function balanceOf(address) view returns (uint)",
];

const contract =new ethers.Contract(address,ERC20_ABI,provider);


const contractInfo =async ()=>{
    const name = await contract.name();
    const totalSupply = await contract.totalSupply();
    const balanceOf = await contract.balanceOf('0x095D2918B03b2e86D68551DCF11302121fb626c9');


    console.log("name",name ,`\n`, ' totalSupply', totalSupply,`\n`, 'balanceOf', ethers.utils.formatEther(balanceOf));
}
contractInfo();
