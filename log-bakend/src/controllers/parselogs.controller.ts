import { Request, Response } from 'express'
import processLogStrings from '../utils/processlogstrings';

interface MulterRequest extends Request {
    file: any;
};

const parseLog = async (req: Request, res: Response) => {
    try {
        let logsBufferString = String((req as MulterRequest).file.buffer);
        let requiredLogs = processLogStrings(logsBufferString);
        setTimeout(() => {
            res.send(requiredLogs);
        }, 5000);
    } catch (error) {
        console.log(error)
        res.statusCode = 500;
        res.json({ error: "Something went wrong" });
    }
}

export default parseLog;