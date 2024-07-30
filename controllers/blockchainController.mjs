import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import { blockchain } from "../startup.mjs";
import { log } from "console";

console.log('Imported blockchain instance:', blockchain);
console.log('Available methods on blockchain:', Object.keys(blockchain));

export const getBlockchain = (req, res, next) => {
    res.status(200).json({ success: true, statusCode: 200, data: blockchain });
};

export const postBlockchain = (req, res, next) => {
    const lastBlockHash = '0000';
    const data = req.body;
    console.log(data);

    const currentBlockHash = blockchain.hashBlock(lastBlockHash, data);
    const block = blockchain.createBlock(lastBlockHash, currentBlockHash, data);

    res.status(201).json({ success: true, statusCode: 201, data: block });
    
    /*const {name} = req.body;
    if(!name){
        return res.status(400).json({success: true, statusCode: 400, err:'Namn saknas'})
    } 
    fs.appendFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)),'log.json'), JSON.stringify({name}));
    res.status(200).json({success: true, statusCode: 200, data:`Post block working ${name}!`})*/
};
