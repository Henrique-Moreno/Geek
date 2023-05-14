import { Router} from 'express';
import multer from 'multer';

import { CreateUserController } from './controller/user/CreateUserController';
import { AuthUserController } from './controller/user/AuthUserController';
import { DeitailUserController } from './controller/user/DeitailUserController';

import { CreateCategoryController } from './controller/category/CreateCategoryController';
import { ListCategoryController } from './controller/category/ListCategoryController';

import { CreateProductController } from './controller/product/CreateProductController';
import { ListByCategoryController } from './controller/product/ListByCategoryController';
import { ExcluiProdtctController } from './controller/product/ExcluiProdtctController'; 
import { EditProductController } from './controller/product/EditProductController'; 
import { ListAllProductController } from './controller/product/ListAllProductController';

import { ContactController } from './controller/contact/ContactController';

import { isAuthenticated } from './middleware/isAuthenticated';

import uploadConfig from './config/multer';

const router = Router();

const upload = multer(uploadConfig.upload("./tmp"))

// Rotas User
router.post('/users', new CreateUserController().handle)
router.post('/session', new AuthUserController().handle)
router.get('/me', isAuthenticated, new DeitailUserController().handle)

// Rotas Category
router.post('/category', isAuthenticated, new CreateCategoryController().handle)
router.get('/category', new ListCategoryController().handle)

// Rotas Product
router.post('/product', isAuthenticated, upload.single('file'), new CreateProductController().handle)
router.get('/category/product', new ListByCategoryController().handle)
router.delete('/excluir/produt', isAuthenticated, new ExcluiProdtctController().handle)
router.patch('/edit/product', isAuthenticated, new EditProductController().handle)
router.get('/list/product', isAuthenticated, new ListAllProductController().handle)

// Rotas Contact
router.post('/contact', new ContactController().handle)

export { router }