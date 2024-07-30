export default class Blockchain {
    constructor() {
        this.chain = [];
        console.log('Blockchain constructor called');
    }

    createBlock(previousBlockHash, currentBlockHash, data){
        const block = {
            blockIndex: this.chain.length + 1,
            previousBlockHash: previousBlockHash,
            hash: currentBlockHash,
            data,
        };

        this.chain.push(block);

        return block;
    }
}

console.log('Blockchain class loaded');
