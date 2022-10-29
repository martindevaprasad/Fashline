const product = require("../collects/Westernwear");
const newwear = require("../collects/Westernwear");

const getAllWears = async (req, res, next) => {
  let westernwears;

  try {
    westernwears = await product.find();
  } catch (err) {
    console.log(err);
  }

  if (!westernwears) {
    return res.status(404).json({ message: "no products found" });
  }
  return res.status(200).json({ westernwears });
};

const getById = async (req, res) => {
  const id = req.params.id;
  let westwear;
  try {
    westwear = await product.findById(id);
  } catch (err) {
    console.log(err);
  }
  if (!westwear) {
    return res.status(404).json({ message: "no product found" });
  }
  return res.status(200).json({ westwear });
};

const postWear = async (req, res, next) => {
  const { title, subtitle, price, discount, available,image } = req.body;

  let westwear;
  try {
    westwear = new newwear({
      title,
      subtitle,
      price,
      discount,
      available,
      image
    });

    await westwear.save();
  } catch (err) {
    console.log(err);
  }
  if (!westwear) {
    return res.status(500).json({ message: "Unable to add" });
  }
  return res.status(201).json({ westwear });
};

const updateWear = async (req, res, next) => {
  const id = req.params.id;
  const { title, subtitle, price, discount, available,image } = req.body;

  let westwear;

  try {
    westwear = await product.findByIdAndUpdate(id, {
      title,
      subtitle,
      price,
      discount,
      available,
      image
    });

    westwear = await westwear.save();
  } catch (err) {
    console.log(err);
  }

  if (!westwear) {
    return res.status(404).json({ message: "Unable to update with this id" });
  }
  return res.status(200).json({ westwear });
};

const deleteWear =async(req,res,next)=>{

  const id= req.params.id;
  let westwear;

  try{
    westwear = await product.findByIdAndRemove(id)
  }catch (err) {
    console.log(err);
  }

  if (!westwear) {
    return res.status(404).json({ message: "cant delete" });
  }
  return res.status(200).json({ westwear });
}

exports.getAllWears = getAllWears;
exports.postWear = postWear;
exports.getById = getById;
exports.updateWear = updateWear;
exports.deleteWear = deleteWear;
