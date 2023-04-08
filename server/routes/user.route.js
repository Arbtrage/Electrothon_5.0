const express=require('express');
const router=express.Router();

const user=require('../controllers/medicine.controller');
const family=require('../controllers/family.controller');


router.post('/user/addMedicine',user.addMedicine);
router.get('/user/getMedicines',user.getMedicines);
router.get('/user/getMedicine',user.getMedicineById);


router.post('/user/addFamilyMember',family.addMember);
router.delete('/user/deleteMember',family.deleteMember);

module.exports=router;