import exppress from 'express';
import { addproduct, getproducts } from '../controller/productcontroller.js';
import upload from '../middlewares/multer.js';

const productRouter = exppress.Router();

productRouter.post('/addproduct', upload.single('image'), addproduct)

productRouter.get('/getproduct',getproducts);

export default productRouter;