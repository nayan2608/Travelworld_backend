
import express from "express";
import { 
     createUser, 
     deleteUser,
     getAllUser, 
     getSingleUser, 
     updateUser 
} from "../controllers/userController.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


// create new user
router.post('/', verifyUser, createUser)

// update user
router.put('/:id', verifyUser, updateUser)

// delete user
router.delete('/:id', verifyUser, deleteUser)

// get single user
router.get('/:id', verifyUser, getSingleUser)

// get All tour
router.get('/', verifyAdmin ,getAllUser)


export default router;