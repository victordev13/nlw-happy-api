import {Router} from 'express';
import OrphanagesController from './controllers/OrphanagesController';

const router = Router();


router.get('/orfanatos', OrphanagesController.index);
router.post('/orfanatos/:id', OrphanagesController.show);
router.post('/orfanatos', OrphanagesController.create);

export default router;
