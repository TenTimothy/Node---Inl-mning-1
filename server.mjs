import express from 'express';
import blockchainRouter from './routes/blockchainRoute.mjs';


const app = express();

app.use(express.json());

app.use('/api/v1/blockchain', blockchainRouter);

const PORT = 3001;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));

