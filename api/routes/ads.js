const router = require("express").Router();
const Ad = require('../models/Ad')


// Define Route Handler
router.get("/search", async (req, res) => {
  const { q } = req.query;

  try {
    const results = await Ad.aggregate([
      {
        $lookup: {
          from: "companies",
          localField: "companyId",
          foreignField: "_id",
          as: "company",
        },
      },
      {
        $unwind: "$company",
      },
      {
        $match: {
          $or: [
            { "company.name": { $regex: q, $options: "i" } },
            { primaryText: { $regex: q, $options: "i" } },
            { headline: { $regex: q, $options: "i" } },
          ],
        },
      },
      {
        $project: {
          _id: 1,
          companyId: 1,
          primaryText: 1,
          headline: 1,
          description: 1,
          CTA: 1,
          imageUrl: 1,
          "company.name": 1,
          "company.url": 1,
        },
      },
    ]);

    res.json(results);
  } catch (err) {
    console.error(`Error: ${err}`);
    res.status(500).json({ error: "Server Error" });
  }
});

// Define Route Handler for Adding New Document
router.post("/add", async (req, res) => {
  const { _id, companyId, primaryText, headline, description, CTA, imageUrl } =
    req.body;

  try {
    // Create new document
    const newAds = new Ad({
      _id,
      companyId,
      primaryText,
      headline,
      description,
      CTA,
      imageUrl,
    });

    // Save document to MongoDB collection
    const result = await newAds.save();

    res.status(201).json(result);
  } catch (err) {
    console.error(`Error: ${err}`);
    res.status(500).json({ error: "Server Error" });
  }
});



// Define Route Handler for Adding New Documents
router.post("/all", async (req, res) => {
  const ads = req.body;

  try {
    // Create new documents
    const newAds = await Ad.insertMany(ads);

    res.status(201).json(newAds);
  } catch (err) {
    console.error(`Error: ${err}`);
    res.status(500).json({ error: "Server Error" });
  }
});

module.exports = router;