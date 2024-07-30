import fs from "fs";
import path from "path";
import { fileURLToPath } from 'url';
import Blockchain from "../models/Blockchain.mjs";

export const getBlockchain = (req, res, next) => {
    const blockchain = new Blockchain();
    res.status(200).json({success: true, statusCode: 200, data: blockchain})
};

export const postBlockchain = (req, res, next) => { 
    const {name} = req.body;
    if(!name){
        return res.status(400).json({success: true, statusCode: 400, err:'Namn saknas'})
    } 
    fs.appendFileSync(path.join(path.dirname(fileURLToPath(import.meta.url)),'log.json'), JSON.stringify({name}));
    res.status(200).json({success: true, statusCode: 200, data:`Post block working ${name}!`})
};
