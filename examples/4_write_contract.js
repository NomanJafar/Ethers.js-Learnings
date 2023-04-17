// const { ethers } = require("ethers");

// const INFURA_ID = ''
// const provider = new ethers.providers.JsonRpcProvider(`https://kovan.infura.io/v3/${INFURA_ID}`)

// const account1 = '0xE463c204b551CFF565f2527B4EEc093346bb31eF' // Your account address 1
// const account2 = '0xE463c204b551CFF565f2527B4EEc093346bb31eF' // Your account address 2

// const privateKey1 = '536963843c53c302cb6ff71e2cf8c8cf717b996dd303db391415a90b70a6e1c4' // Private key of account 1
// const wallet = new ethers.Wallet(privateKey1, provider)

// const ERC20_ABI = [
//     "function balanceOf(address) view returns (uint)",
//     "function transfer(address to, uint amount) returns (bool)",
// ];

// // const erc20Abi = [
// //     // ERC20 standard methods
// //     "function name() view returns (string)",
// //     "function symbol() view returns (string)",
// //     "function decimals() view returns (uint8)",
// //     "function totalSupply() view returns (uint256)",
// //     "function balanceOf(address account) view returns (uint256)",
// //     "function transfer(address recipient, uint256 amount) returns (bool)",
// //     "function allowance(address owner, address spender) view returns (uint256)",
// //     "function approve(address spender, uint256 amount) returns (bool)",
// //     "function transferFrom(address sender, address recipient, uint256 amount) returns (bool)",
// //     // Events
// //     "event Transfer(address indexed from, address indexed to, uint256 value)",
// //     "event Approval(address indexed owner, address indexed spender, uint256 value)",
// //   ];

// const address = ''
// const contract = new ethers.Contract(address, ERC20_ABI, provider)

// const main = async () => {
//     const balance = await contract.balanceOf(account1)

//     console.log(`\nReading from ${address}\n`)
//     console.log(`Balance of sender: ${balance}\n`)

//     const contractWithWallet = contract.connect(wallet)

//     const tx = await contractWithWallet.transfer(account2, balance)
//     await tx.wait()

//     console.log(tx)

//     const balanceOfSender = await contract.balanceOf(account1)
//     const balanceOfReciever = await contract.balanceOf(account2)

//     console.log(`\nBalance of sender: ${balanceOfSender}`)
//     console.log(`Balance of reciever: ${balanceOfReciever}\n`)
// }

// main()

const { ethers, constants } = require("ethers");



const provider = new ethers.providers.JsonRpcProvider(INFURA_ID);

const account1 = "0xE463c204b551CFF565f2527B4EEc093346bb31eF"; // Your account address 1
const account2 = "0x06198e0b078F2ab856890C341eB233188D73910D"; // Your account address 2

const privateKey1 =''; // Private key of account 1

const wallet = new ethers.Wallet(privateKey1, provider);

const erc20Abi = [
  // ERC20 standard methods
  "function name() view returns (string)",
  "function symbol() view returns (string)",
  "function decimals() view returns (uint8)",
  "function totalSupply() view returns (uint256)",
  "function balanceOf(address account) view returns (uint256)",
  "function transfer(address recipient, uint256 amount) returns (bool)",
  "function allowance(address owner, address spender) view returns (uint256)",
  "function approve(address spender, uint256 amount) returns (bool)",
  "function transferFrom(address sender, address recipient, uint256 amount) returns (bool)",
  // Events
  "event Transfer(address indexed from, address indexed to, uint256 value)",
  "event Approval(address indexed owner, address indexed spender, uint256 value)",
];

const contractAddress = "0x514910771AF9Ca656af840dff83E8264EcF986CA";
const contract = new ethers.Contract(contractAddress, erc20Abi, wallet);

const main = async () => {
  const balanceSenderBefore = await contract.balanceOf(account1);
  const balanceReceiverBefore = await contract.balanceOf(account2);
  console.log("balance of account 1 : ", balanceSenderBefore);
  console.log("balance of account 2 : ", balanceReceiverBefore);

//   const connected = contract.connect(wallet);
  const transaction = await contract.transfer(account2, ethers.utils.parseUnits("1", 18));
  await transaction.wait();
  console.log(transaction);

  const balanceSenderAfter = await contract.balanceOf(account1);
  const balanceReceiverAfter = await contract.balanceOf(account2);
  console.log("balance of account 1 : ", balanceSenderAfter);
  console.log("balance of account 2 : ", balanceReceiverAfter);
};

main();
