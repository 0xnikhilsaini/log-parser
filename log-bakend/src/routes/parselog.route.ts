import express from 'express';
import parseLog from '../controllers/parselogs.controller'
import upload from '../middleware/upload.middleware'

const router = express.Router();


router.post('/parselogs', upload.single("uploaded_file"), parseLog)

export = router;