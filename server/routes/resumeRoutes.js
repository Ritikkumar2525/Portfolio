import express from 'express';
import { notifyResumeDownload } from '../controllers/resumeController.js';

const router = express.Router();

// POST /api/resume/notify — silently called when visitor downloads resume
router.post('/notify', notifyResumeDownload);

export default router;
