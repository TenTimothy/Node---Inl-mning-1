import fs from "fs";
import path from "path";
import { blockchain } from "../startup.mjs";

console.log('Imported blockchain instance:', blockchain);
console.log('Available methods on blockchain:', Object.keys(blockchain));

// Get db from blockchain 

export const getBlockchain = (req, res, next) => {
    res.status(200).json({ success: true, statusCode: 200, data: blockchain });
};

// minde block

export const postBlockchain = (req, res, next) => {
    const lastBlock = blockchain.getLastBlock();
    const lastBlockHash = lastBlock.currentBlockHash;
    const data = req.body;
    const timestamp = Date.now();
    const nonce = blockchain.proofOfWork(timestamp, lastBlock.currentBlockHash, data);
    const currentBlockHash = blockchain.hashBlock(timestamp, lastBlockHash, data, nonce);
    const block = blockchain.createBlock(timestamp, lastBlockHash, currentBlockHash, data);

    fs.writeFileSync(path.join(__appdir, 'data', 'blockchainDB.json'), JSON.stringify(blockchain, null, 2));

    res.status(201).json({ success: true, statusCode: 201, data: block });
};

// Ny funktion för att hämta ett specifikt block
export const getBlockByIndex = (req, res, next) => {  
    const index = parseInt(req.params.index);
    const block = blockchain.chain.find(b => b.blockIndex === index);

    if (!block) {
        return res.status(404).json({ success: false, statusCode: 404, message: 'Block not found' });
    }

    res.status(200).json({ success: true, statusCode: 200, data: block });
};
