import User from "../model/User.js";

export const homeScreen = async (req, res) => {
  try {
    return res.status(200).json({ message: "Hello World!" });
  } catch (error) {
    return res.status(500).send(error);
  }
};

export const addUser = async (req, res) => {
  console.log(req.body);
  try {
    let exist = await User.findOne({ sub: req.body.sub });
    if (exist) {
      res.status(200).json({
        message: "User already exists",
      });
      return;
    }
    const NewUser = new User(req.body);
    await NewUser.save();
    return res.status(200).json(NewUser);
  } catch (error) {
    // console.log(error);
    return res.status(500).json(error);
  }
};

export const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send({ users });
  } catch (error) {
    return res.status(500).send(error);
  }
};
