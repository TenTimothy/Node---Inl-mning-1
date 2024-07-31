import { createHash } from "../utils/crypto-lib.mjs";
import Block from "./Block.mjs";

export default class Blockchain {
    constructor(chain) {
        this.chain = chain || [];
        console.log('Blockchain constructor called');

        // Skapa vårt genesis block
        !chain && this.createBlock(Date.now(), '0', '0', []);
    }

    // Metod för att lägga till ett nytt block i kedjan
    createBlock(timestamp, previousBlockHash, currentBlockHash, data) {
        const block = new Block(
            timestamp,
            this.chain.length + 1,
            previousBlockHash,
            currentBlockHash,
            data
        );

        this.chain.push(block);

        return block;
    }

    getLastBlock() {
        return this.chain.at(-1);
    }

    hashBlock(timestamp, previousBlockHash, currentBlockData, nonce) {
        const stringToHash = timestamp.toString() + previousBlockHash + JSON.stringify(currentBlockData) + nonce;
        const hash = createHash(stringToHash);
        return hash;
    }

    // Proof of work
    proofOfWork(timestamp, previousBlockHash, data) {
        let nonce = 0;
        let hash = this.hashBlock(timestamp, previousBlockHash, data, nonce);

        while (hash.substring(0, 3) !== '000') {
            nonce++;
            hash = this.hashBlock(timestamp, previousBlockHash, data, nonce);
        }

        return nonce;
    }
}

console.log('Blockchain class loaded');
