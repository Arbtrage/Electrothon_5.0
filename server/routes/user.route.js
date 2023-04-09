const express=require('express');
const router=express.Router();

const medicine=require('../controllers/medicine.controller');
const family=require('../controllers/family.controller');
const allergy=require('../controllers/allergy.controller');
const user=require('../controllers/user.controller');
//User Route
router.get('/user/getUser',user.getUser);

//Medicine Route
router.post('/user/addMedicine',medicine.addMedicine);
router.get('/user/getMedicines',medicine.getMedicines);
router.get('/user/getMedicine',medicine.getMedicineById);
router.delete('/user/deleteMedicine',medicine.deleteMedicine);

//Family membre route
router.post('/user/addFamilyMember',family.addMember);
router.delete('/user/deleteMember',family.deleteMember);

//Allergy route
router.post('/user/addAllergy',allergy.addAllergy);
router.delete('/user/deleteAllergy',allergy.deleteAllergy);

module.exports=router;