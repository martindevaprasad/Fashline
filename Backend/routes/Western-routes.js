const express = require("express");
const {find} = require("../collects/Westernwear");
const Westernwear = require("../collects/Westernwear");
const data = require("../collects/Westernwear");
const router = express.Router();
const wescontroller = require("../controllers/West-controller");

const product = require("../collects/Westernwear");

// router.post("/", async (req, res, next) => {
//   let westernwears;

//   try {
//     const west = await new data({
//       title: req.body.title,
//       subtitle: req.body.subtitle,
//     });
//     const saveData = await west.save();
//     res.status(200).json(saveData)
//   } catch (err) {
//     console.log(err);
//   }
// });

router.get("/western", wescontroller.getAllWears );
router.post("/", wescontroller.postWear);
router.get("/:id",wescontroller.getById);
router.put("/:id",wescontroller.updateWear);
router.delete("/:id",wescontroller.deleteWear);

module.exports = router;
