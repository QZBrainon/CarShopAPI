import { Router } from 'express';
import MotorcycleController from '../Controllers/MotorcycleController';

const router = Router();

router.post('/', (req, res, next) => new MotorcycleController(req, res, next).create());

router.put('/:id', (req, res, next) => new MotorcycleController(req, res, next).updateById());

router.get('/:id', (req, res, next) => new MotorcycleController(req, res, next).findById());

router.get('/', (req, res, next) => new MotorcycleController(req, res, next).find());

export default router;