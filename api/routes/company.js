const router = require('express').Router()
const Company = require("../models/Company")



// Define Route Handler for Adding New Document
router.post("/add", async (req, res) => {
    const {_id, name, url } =
      req.body;
  
    try {
      // Create new document
      const newCompanies = new Company({
        _id,
        name,
        url,
      });
  
      // Save document to MongoDB collection
      const result = await newCompanies.save();
  
      res.status(201).json(result);
    } catch (err) {
      console.error(`Error: ${err}`);
      res.status(500).json({ error: "Server Error" });
    }
  });
  
  // Define Route Handler for Adding New Documents
  router.post("/all", async (req, res) => {
    const companies = req.body;
  
    try {
      // Create new documents
      const newCompanies = await Company.insertMany(companies);
  
      res.status(201).json(newCompanies);
    } catch (err) {
      console.error(`Error: ${err}`);
      res.status(500).json({ error: "Server Error" });
    }
  });
  

module.exports = router;
