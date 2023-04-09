const Medicine = require("../models/userMedicine.model");
const User = require("../models/user.model");
const schedule=require('../models/schedule.model');

module.exports = {
  addMedicine: async (req, res) => {
    const { userId,name, dosage, frequency,number } = req.body;

    const newMedicine = new Medicine({

      name,
      dosage,
      frequency,
      userId,
    });
    const newSchedule=new schedule({
      userId,
      name,
      whatsAppNumber:number,
      medTimings:frequency,
      medDuration:dosage
    })
    try {
      await newSchedule.save();
      await newMedicine.save();
      const user = await User.findById(userId);
      user.medication_ids.push(newMedicine._id);
      await user.save();
      res.status(201).json({ success: true, data: newMedicine });
    } catch (error) {
      console.error(error.message);
      res.status(500).json({ success: false, error: "Server error" });
    }
  },
  getMedicines: async (req, res) => {
    Medicine.find({ userId: req.body.userId })
      .then((medicines) => {
        res.status(200).json({ success: true, data: medicines });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, error: "Server error" });
      });
  },
  getMedicineById: async (req, res) => {
    const medicineId = req.body.medicineId;
    
    Medicine.findById(medicineId)
      .then((medicine) => {
        if (!medicine) {
          return res.status(404).json({ success: false, error: "Medicine not found" });
        }

        res.status(200).json({ success: true, data: medicine });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, error: "Server error" });
      });
  },
  deleteMedicine: async (req, res) => {
    const medicineId = req.body.id;
    try {
      const deletedMedicine = await Medicine.findOneAndDelete({ _id: medicineId });
      if (!deletedMedicine) {
        return res
          .status(404)
          .json({ success: false, error: "Medicine not found" });
      }
      const user = await User.findByIdAndUpdate(
        deletedMedicine.userId,
        { $pull: { Medicine: medicineId } },
        { new: true }
      );
      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ success: false, error: "Server error" });
    }
  },
  updateMedicine: async (req, res) => {
    const medicineId = req.body.medicineId;

    const { name, dosage, frequency } = req.body;

    Medicine.findByIdAndUpdate(
      medicineId,
      { name, dosage, frequency },
      { new: true }
    )
      .then((medicine) => {
        if (!medicine) {
          return res.status(404).json({ success: false, error: "Medicine not found" });
        }

        res.status(200).json({ success: true, data: medicine });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, error: "Server error" });
      });
  },
};
