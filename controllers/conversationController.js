import Conversation from "../model/Conversation.js";

export const newConversation = async (req, res) => {
  try {
    const senderId = req.body.senderId;
    const receiverId = req.body.receiverId;

    const exist = await Conversation.findOne({
      members: { $all: [receiverId, senderId] },
    });

    if (exist) {
      return res
        .status(200)
        .send({ message: "Conversation already exists.", _id: exist?._id });
    }

    const newConversation = new Conversation({
      members: [senderId, receiverId],
    });

    let data = await newConversation.save();

    return res
      .status(200)
      .send({ message: "Conversation saved successfully.", _id: data?._id });
  } catch (error) {
    return res.status(500).send(error);
  }
};

// export const getConversation = async (req, res) => {
//   try {
//     const senderId = req.body.senderId;
//     const receiverId = req.body.receiverId;

//     let conversation = await Conversation.findOne({
//       members: { $all: [receiverId, senderId] },
//     });

//     return res.status(200).send({ conversation });
//   } catch (error) {
//     return res.status(500).send(error);
//   }
// };
