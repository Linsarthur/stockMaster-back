
import { Router } from 'express';
import { getUsers } from '../controller/index.js';

const router = Router();

router.get('/users', async (req, res) => {
    res.send(await getUsers());

});

export { router as userRoutes }