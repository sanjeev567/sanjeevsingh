// const express = require("express");
// const cors = require("cors");
// const mongoose = require("mongoose");

// const app = express();

// // middleware
// app.use(cors());
// app.use(express.json());

// // Establish connection to MongoDB
// mongoose
//   .connect("mongodb://localhost/my_database", {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => console.log("MongoDB Connected"))
//   .catch((err) => console.log(`MongoDB Connection Error: ${err}`));


// // Define schema for the Ads collection
// const adsSchema = new mongoose.Schema({
//   _id: Number,
//   companyId: Number,
//   primaryText: String,
//   headline: String,
//   description: String,
//   CTA: String,
//   imageUrl: String,
// });

// // Define schema for the Company collection
// const companySchema = new mongoose.Schema({
//   _id: Number,
//   name: String,
//   url: String
// });

// // Define Models for MongoDB Collections
// const Company = mongoose.model("Company", companySchema);
// const Ad = mongoose.model("Ad", adsSchema);

// // Define Route Handler
// app.get("/", async (req, res) => {
//   const { q } = req.query;

//   try {
//     const results = await Ad.aggregate([
//       {
//         $lookup: {
//           from: "companies",
//           localField: "companyId",
//           foreignField: "_id",
//           as: "company",
//         },
//       },
//       {
//         $unwind: "$company",
//       },
//       {
//         $match: {
//           $or: [
//             { "company.name": { $regex: q, $options: "i" } },
//             { primaryText: { $regex: q, $options: "i" } },
//             { headline: { $regex: q, $options: "i" } },
//           ],
//         },
//       },
//       {
//         $project: {
//           _id: 0,
//           companyId: 1,
//           primaryText: 1,
//           headline: 1,
//           description: 1,
//           CTA: 1,
//           imageUrl: 1,
//           "company.name": 1,
//           "company.url": 1,
//         },
//       },
//     ]);

//     res.json(results);
//   } catch (err) {
//     console.error(`Error: ${err}`);
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // Define Route Handler for Adding New Document
// app.post("/ads/add", async (req, res) => {
//   const {_id, companyId, primaryText, headline, description, CTA, imageUrl } =
//     req.body;

//   try {
//     // Create new document
//     const newAds = new Ad({
//       _id,
//       companyId,
//       primaryText,
//       headline,
//       description,
//       CTA,
//       imageUrl,
//     });

//     // Save document to MongoDB collection
//     const result = await newAds.save();

//     res.status(201).json(result);
//   } catch (err) {
//     console.error(`Error: ${err}`);
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // Define Route Handler for Adding New Document
// app.post("/ads/add", async (req, res) => {
//   const {_id, companyId, primaryText, headline, description, CTA, imageUrl } =
//     req.body;

//   try {
//     // Create new document
//     const newAds = new Ad({
//       _id,
//       companyId,
//       primaryText,
//       headline,
//       description,
//       CTA,
//       imageUrl,
//     });

//     // Save document to MongoDB collection
//     const result = await newAds.save();

//     res.status(201).json(result);
//   } catch (err) {
//     console.error(`Error: ${err}`);
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // Define Route Handler for Adding New Documents
// app.post("/ads/all", async (req, res) => {
//   const ads = req.body;

//   try {
//     // Create new documents
//     const newAds = await Ad.insertMany(ads);

//     res.status(201).json(newAds);
//   } catch (err) {
//     console.error(`Error: ${err}`);
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // Define Route Handler for Adding New Document
// app.post("/company/add", async (req, res) => {
//   const {_id, name, url } =
//     req.body;

//   try {
//     // Create new document
//     const newCompanies = new Company({
//       _id,
//       name,
//       url,
//     });

//     // Save document to MongoDB collection
//     const result = await newCompanies.save();

//     res.status(201).json(result);
//   } catch (err) {
//     console.error(`Error: ${err}`);
//     res.status(500).json({ error: "Server Error" });
//   }
// });

// // Define Route Handler for Adding New Documents
// app.post("/company/all", async (req, res) => {
//   const companies = req.body;

//   try {
//     // Create new documents
//     const newCompanies = await Company.insertMany(companies);

//     res.status(201).json(newCompanies);
//   } catch (err) {
//     console.error(`Error: ${err}`);
//     res.status(500).json({ error: "Server Error" });
//   }
// });


// // Define Route handler for company 

// app.listen(8800, () => {
//   console.log(`Backend is running at port 8800`);
// });


// const adData = [
//     {
//         "_id": 1,
//         "companyId": 3,
//         "primaryText": "The world's leading CRM",
//         "headline": "Salesforce for Small Business",
//         "description": "",
//         "CTA": "Sign Up",
//         "imageUrl": "https://drive.google.com/file/d/17huYmoSHdbgcNqfoO4yYYGIFf8X1243T/view?usp=sharing"
//     },
//     {
//         "_id": 2,
//         "companyId": 1,
//         "primaryText": "We like where you’re going with this.",
//         "headline": "Relaxed Fit Men's Jeans",
//         "description": "",
//         "CTA": "Shop Now",
//         "imageUrl": "https://drive.google.com/file/d/17kQiqGnkLEZZmnzLlWG7ZIlN6XbwAVfb/view?usp=sharing"
//     },
//     {
//         "_id": 3,
//         "companyId": 6,
//         "primaryText": "Teva x Cotopaxi is back! Celebrate eternal summer with limited-edition Teva x Cotopaxi Original Universal sandals in bold new colors.",
//         "headline": "Made With Recycled Plastic",
//         "description": "Shop Back to School",
//         "CTA": "Sign Now",
//         "imageUrl": "https://drive.google.com/open?id=17nXWIFT-63JLfEvBEuQiyDYmA2dckCmq&authuser=rohit103%40gmail.com&usp=drive_fs"
//     },
//     {
//         "_id": 4,
//         "companyId": 7,
//         "primaryText": "The Emmy-nominated Netflix comedy special from the late Norm Macdonald is his last gift to the world of comedy he helped shape.",
//         "headline": "Norm Macdonald's Nothing Special gives one last dose of the late comic",
//         "description": "",
//         "CTA": "Learn More",
//         "imageUrl": "https://drive.google.com/file/d/17o3sgN_A6GKPwgZsEpneBYODhRs9tKga/view?usp=sharing"
//     },
//     {
//         "_id": 5,
//         "companyId": 9,
//         "primaryText": "Visit Valentino.com, discover the new products and shop now!",
//         "headline": "Valentino Hexagonal Metal Frame With Crystal Studs",
//         "description": "",
//         "CTA": "Shop Now",
//         "imageUrl": "https://drive.google.com/file/d/17sz2UuPNcoHXz-U27EYcwmhkI1ZQUmPZ/view?usp=sharing"
//     },
//     {
//         "_id": 6,
//         "companyId": 11,
//         "primaryText": "Say ‘goodnight’ to sleeping hot 🔥 with Purple products—designed to dissipate heat.",
//         "headline": "Cooler Summers Start Here",
//         "description": "Shop Purple products, designed to help you sleep cool.",
//         "CTA": "Shop Now",
//         "imageUrl": "https://drive.google.com/file/d/17vrlQMchymHqlN35p4os23jYqQjFiUNq/view?usp=sharing"
//     },
//     {
//         "_id": 7,
//         "companyId": 10,
//         "primaryText": "Dark spots. Breakouts. Rosacea. Dull skin. Fine lines. Our formulas are custom-mixed for YOUR skin concerns.",
//         "headline": "Personalized skincare for dark spots, acne, and more.",
//         "description": "Personalized skincare for dark spots, acne, and more. Results may vary.",
//         "CTA": "Order Now",
//         "imageUrl": "https://drive.google.com/file/d/17vzdu8jSulXgzk9rkJaHP7W1940pQaAV/view?usp=sharing"
//     }
// ]

// module.exports = adData;


// const companyData = [
//     {
//         "_id": 1,
//         "name": "Levi's",
//         "url": "http://levis.com/"

//     },
//     {
//         "_id": 2,
//         "name": "Puma",
//         "url": "puma.com"

//     },
//     {
//         "_id": 3,
//         "name": "Salesforce",
//         "url": "salesforce.com"

//     },
//     {
//         "_id": 4,
//         "name": "Adidas",
//         "url": "http://adidas.com/"

//     },
//     {
//         "_id": 5,
//         "name": "Nike",
//         "url": "nike.com"

//     },
//     {
//         "_id": 6,
//         "name": "Cotopaxi",
//         "url": "http://cotopaxi.com/"

//     },
//     {
//         "_id": 7,
//         "name": "Netflix",
//         "url": "http://netflix.com/"

//     },
//     {
//         "_id": 8,
//         "name": "Colgate",
//         "url": "colgate.com"

//     },
//     {
//         "_id": 9,
//         "name": "Valentino",
//         "url": "valentino.com"

//     },
//     {
//         "_id": 10,
//         "name": "Curology",
//         "url": "http://curology.com/"

//     },
//     {
//         "_id": 11,
//         "name": "Purple",
//         "url": "http://purple.com/"

//     },

// ]

// module.exports = companyData;