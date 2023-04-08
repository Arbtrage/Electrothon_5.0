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
      res.status(201).json({ success: true, data: familyMember });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ success: false, error: "Server error" });
    }
  },
  modifyMember:async(req,res)=>{
    
  },
  deleteMember: async (req, res) => {
    const memberId = req.body.id;
    try {
      const deletedMember = await Family.findOneAndDelete({ _id: memberId });
      if (!deletedMember) {
        return res
          .status(404)
          .json({ success: false, error: "Member not found" });
      }
      res.status(200).json({ success: true });
    } catch (err) {
      console.error(err.message);
      res.status(500).json({ success: false, error: "Server error" });
    }
  },
};
