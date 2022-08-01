// let web3 = new Web3(Web3.givenProvider || "ws://localhost:8545");
const Web3 = require("web3");
const http = require("http");
var web3 = new Web3("http://localhost:8545");
var Web3HttpProvider = require("web3-providers-http");

// console.log("This is modules", Web3.modules);
// console.log("This is eth", web3.eth);
// console.log("This is version", web3.version);
// console.log("This is utils", web3.utils);
// console.log("This is providers", web3.providers);
// console.log("This is Web3HttpProvider", Web3HttpProvider);
// var options = {
//   keepAlive: true,
//   withCredentials: false,
//   timeout: 20000, // ms
//   headers: [
//     {
//       name: "Access-Control-Allow-Origin",
//       value: "*",
//     },
//     {},
//   ],
//   agent: {
//     http: http.Agent(),
//     baseUrl: "",
//   },
// };
// var provider = new Web3HttpProvider("http://localhost:8545", options);
// console.log("This is provider", provider);
// web3.eth
//   .sendTransaction({
//     from: "0x123...",
//     data: "0x4325372547838e2387423edt82r842",
//   })
//   .once("sending", function (payload) {
//     console.log("sending");
//   })
//   .once("sent", function (payload) {
//     console.log("sent");
//   })
//   .once("transactionHash", function (hash) {
//     console.log("transactionHash");
//   })
//   .once("receipt", function (receipt) {
//     console.log("receipt");
//   })
//   .on("confirmation", function (confNumber, receipt, latestBlockHash) {
//     console.log("confirmation");
//   })
//   .on("error", function (error) {
//     console.log("error");
//   })
//   .then(function (receipt) {
//     // will be fired once the receipt is mined
//   });
