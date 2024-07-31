import path from "path";
import { fileURLToPath } from 'url';
import express from 'express';
import blockchainRouter from './routes/blockchainRoute.mjs';
import { errorHandler } from './middlewares/errorHandler.mjs';  // Korrekt importväg

global.__appdir = path.dirname(fileURLToPath(import.meta.url));
console.log(__appdir);

const app = express();

app.use(express.json());

app.use('/api/v1/blockchain', blockchainRouter);

// Använd felhanteringsmiddleware sist, efter alla andra routes
app.use(errorHandler);

const PORT = 3001;

app.listen(PORT, () => console.log(`Server is running on ${PORT}`));
