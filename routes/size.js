import * as size from '../controller/size.js';
import express from 'express';

const server = express();
const size_router = express.Router();

size_router.get('/getallsizes', size.get_all_size)
    .post('/addsize', size.add_size)
    .put('/updatesize', size.update_size)
    .delete('/deletesize', size.delete_size)
    .get('/getsizebyid/', size.get_size_by_id);

export { size_router as size_router};
