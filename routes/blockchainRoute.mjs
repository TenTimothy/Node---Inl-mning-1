import { Router } from 'express'; 
import { getBlockchain } from '../controllers/blockchainController.mjs';

const blockchainRouter = Router();

blockchainRouter.route('/').get(getBlockchain)

export default blockchainRouter;