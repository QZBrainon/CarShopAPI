import { Router } from 'express';
import CarController from '../Controllers/CarController';

const router = Router();

router.post('/', (req, res, next) => new CarController(req, res, next).create());

router.put('/:id', (req, res, next) => new CarController(req, res, next).updateById());
router.get('/:id', (req, res, next) => new CarController(req, res, next).findById());
router.get('/', (req, res, next) => new CarController(req, res, next).find());

export default router;