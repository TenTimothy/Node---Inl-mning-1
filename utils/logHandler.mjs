import fs from 'fs';
import path from 'path';

const logError = (err) => {
    const logFile = path.join(__appdir, 'logs', 'error.log');
    const logMessage = `${new Date().toISOString()} - ${err.stack}\n`;

    if (!fs.existsSync(path.join(__appdir, 'logs'))) {
        fs.mkdirSync(path.join(__appdir, 'logs'));
    }

    fs.appendFileSync(logFile, logMessage, 'utf8');
};

export { logError };
