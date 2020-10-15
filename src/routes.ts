import {Router} from 'express';
import multer from 'multer';

import uploadConfig from './config/upload';
import OrphanagesController from './controllers/OrphanagesController';

const router = Router();
const upload = multer(uploadConfig);

router.get('/orfanatos', OrphanagesController.index);
router.post('/orfanatos/:id', OrphanagesController.show);
router.post('/orfanatos', upload.array('images'),OrphanagesController.create);

export default router;
