import { Router } from 'express'; 
import { getBlockchain, postBlockchain } from '../controllers/blockchainController.mjs';


const blockchainRouter = Router();

blockchainRouter.route('/').get(getBlockchain).post(postBlockchain)


export default blockchainRouter;

