const express=require('express');
const router=express.Router();

const user=require('../controllers/medicine.controller');
const family=require('../controllers/family.controller');
const allergy=require('../controllers/allergy.controller');

//Medicine Route
router.post('/user/addMedicine',user.addMedicine);
router.get('/user/getMedicines',user.getMedicines);
router.get('/user/getMedicine',user.getMedicineById);
router.delete('/user/deleteMedicine',user.deleteMedicine);

//Family membre route
router.post('/user/addFamilyMember',family.addMember);
router.delete('/user/deleteMember',family.deleteMember);

//Allergy route
router.post('/user/addAllergy',allergy.addAllergy);
router.delete('/user/deleteAllergy',allergy.deleteAllergy);

module.exports=router;