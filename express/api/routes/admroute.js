import express from 'express';
import admController from '../Controllers/admController';
import checkIfAuthenticated from '../middlewares/checkIfAuthenticated';

const admroute=express.Router();

//npostman pe nal a ne browser po qet error
admroute.use(checkIfAuthenticated);

//psh me dasht me add admin
admroute.post('/addadmin',admController.addAdmin);
// admroute.get('/list',admController.list);

export default admroute;