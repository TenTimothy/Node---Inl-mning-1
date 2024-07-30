import { createHash } from "../utils/crypto-lib.mjs";
import Block from "./Block.mjs";

export default class Blockchain {
    constructor() {
        this.chain = [];
        console.log('Blockchain constructor called');

        // Skapa vår genesis block
        this.createBlock('0', '0', []);
    }

    createBlock(previousBlockHash, currentBlockHash, data) {
        const block = new Block(this.chain.length + 1, previousBlockHash, currentBlockHash, data);
        this.chain.push(block);

        return block;
    }

    hashBlock(previousBlockHash, currentBlockData) {
        const stringToHash = previousBlockHash + JSON.stringify(currentBlockData);
        const hash = createHash(stringToHash);
        return hash;
    }
}

console.log('Blockchain class loaded');
