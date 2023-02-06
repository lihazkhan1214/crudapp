import express from "express";
const router=express.Router();
import {addUser,getUsers,getUser,editUser,deleteUser} from"../controller/user-controller.js";

router.post("/add",addUser);
router.get("/all",getUsers);
router.get("/edit/:id",getUser);
router.put("/edit/:id",editUser);
router.delete("/:id",deleteUser);
export default router;