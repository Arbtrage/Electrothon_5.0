const Allergy = require("../models/allergies.model");
const User = require("../models/user.model");

module.exports = {
  addAllergy: async (req, res) => {
    const { userId, name, severity } = req.body;
    const allergy = new Allergy({
      name,
      userId,
      severity,
    });
    try {
      await allergy.save();
      const user = await User.findById(userId);
      user.allergy_ids.push(allergy._id);
      await user.save();
      res.status(201).json({ success: true, data: allergy });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ success: false, error: "Server error" });
    }
  },
//   modifyMember: async (req, res) => {},
  deleteAllergy: async (req, res) => {
    const allergyId = req.body.id;
    try {
      const deletedAllergy = await Allergy.findOneAndDelete({ _id: allergyId });
      if (!deletedAllergy) {
        return res
          .status(404)
          .json({ success: false, error: "Allergy not found" });
      }
      const user = await User.findByIdAndUpdate(
        deletedAllergy.userId,
        { $pull: { allergy: allergyId } },
        { new: true }
      );
      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ success: false, error: "Server error" });
    }
  },
};
