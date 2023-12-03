// router.js

import express from 'express';
import { signupuser, loginUser  } from '../Controller/controller.js';

const router = express.Router();

router.post('/signup', signupuser);
router.post('/login', loginUser );

export default router;
