import Blockchain from "./models/Blockchain.mjs";
import blockchainDB from "./data/blockchainDB.json" assert { type: 'json'};

export let blockchain = new Blockchain(); 

console.log(blockchainDB);

if(Object.keys(blockchainDB).length > 0){
    blockchain = new Blockchain(blockchainDB.chain);
}; 




