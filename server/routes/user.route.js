const express=require('express');
const router=express.Router();

const user=require('../controllers/medicine.controller');

router.post('/user/addMedicine',user.addMedicine);
router.get('/user/getMedicines',user.getMedicines);
router.get('/user/getMedicine',user.getMedicineById);

module.exports=router;