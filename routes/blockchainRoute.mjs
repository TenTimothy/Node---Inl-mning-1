import { Router } from 'express'; 
import { getBlockchain, postBlockchain, getBlockByIndex } from '../controllers/blockchainController.mjs';

const blockchainRouter = Router();

blockchainRouter.route('/').get(getBlockchain);
blockchainRouter.route('/mine').post(postBlockchain);
blockchainRouter.route('/blocks/:index').get(getBlockByIndex);  

export default blockchainRouter;
