const Family = require("../models/userFamily.model");
const User = require("../models/user.model");

module.exports = {
  addMember: async (req, res) => {
    const { userId, name, relationship } = req.body;
    const familyMember = new Family({
      name,
      userId,
      relationship,
    });
    try {
      await familyMember.save();
      const user = await User.findById(userId);
      user.family_member_ids.push(familyMember._id);
      await user.save();
      res.status(201).json({ success: true, data: familyMember });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ success: false, error: "Server error" });
    }
  },

  getMembers: async (req, res) => {
    Family.find({ userId: req.body.userId })
      .then((members) => {
        res.status(200).json({ success: true, data: members });
      })
      .catch((err) => {
        console.error(err);
        res.status(500).json({ success: false, error: "Server error" });
      });
  },
//   modifyMember: async (req, res) => {},
  deleteMember: async (req, res) => {
    const memberId = req.body.id;
    try {
      const deletedMember = await Family.findOneAndDelete({ _id: memberId });
      if (!deletedMember) {
        return res
          .status(404)
          .json({ success: false, error: "Member not found" });
      }
      const user = await User.findByIdAndUpdate(
        deletedMember.userId,
        { $pull: { familyMembers: memberId } },
        { new: true }
      );
      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ success: false, error: "Server error" });
    }
  },
};
