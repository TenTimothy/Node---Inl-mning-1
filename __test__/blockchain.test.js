import { describe, it, expect, beforeEach } from 'vitest';
import Blockchain from '../models/Blockchain.mjs'
import Block from '../models/Block.mjs';

describe('Blockchain', () => {
  let blockchain;

  beforeEach(() => {
    blockchain = new Blockchain();
  });

  it('should create a new block', () => {
    const data = { productname: 'test' };
    const block = blockchain.createBlock(Date.now(), '0', '0', data);
    expect(block.data).toEqual(data);
  });

  it('should get the last block', () => {
    const data = { productname: 'test' };
    const block = blockchain.createBlock(Date.now(), '0', '0', data);
    const lastBlock = blockchain.getLastBlock();
    expect(lastBlock).toEqual(block);
  });

  it('should perform proof of work', () => {
    const data = { productname: 'test' };
    const lastBlock = blockchain.getLastBlock();
    const nonce = blockchain.proofOfWork(Date.now(), lastBlock.currentBlockHash, data);
    expect(nonce).toBeGreaterThan(0);
  });

  it('should hash a block', () => {
    const data = { productname: 'test' };
    const hash = blockchain.hashBlock(Date.now(), '0', data, 0);
    expect(hash).toHaveLength(64); 
  });
});
