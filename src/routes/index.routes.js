import {Router} from 'express';
import { testController } from '../controllers/index.controller.js';

const router = Router()

router.get("/ping", testController)

export default router;