
const userSubmit = require("../models/UserSubmit");

const createSubmit = async (req, res) => {
   const { name, email, phone, adress, orders } = req.body;

   try {
      const newSubmit = await new userSubmit({
         name,
         email,
         phone,
         adress,
         orders,
      });
      await newSubmit.save();
      res.status(201).json(newSubmit);
   } catch (error) {
      res.status(409).json({ message: error.message });
   }
};

module.exports = {
  createSubmit
};
