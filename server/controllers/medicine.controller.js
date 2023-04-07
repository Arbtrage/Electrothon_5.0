const Medicine = require("../models/userMedicine.model");

module.exports = {
  addMedicine: async (req, res) => {
    const { name, dosage, frequency } = req.body;

    const newMedicine = new Medicine({
      name,
      dosage,
      frequency,
      userId: req.body.userId,
    });

    newMedicine
      .save()
      .then((medicine) => {
        res.status(201).json({ success: true, data: medicine });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, error: "Server error" });
      });
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
    const medicineId = req.body.medicineId;

    Medicine.findByIdAndDelete(medicineId)
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
