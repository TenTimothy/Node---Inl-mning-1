import { Router } from 'express'; 
import { getBlockchain, postBlockchain } from '../controllers/blockchainController.mjs';


const blockchainRouter = Router();

blockchainRouter.route('/').get(getBlockchain);
blockchainRouter.route('/mine').post(postBlockchain);


export default blockchainRouter;

