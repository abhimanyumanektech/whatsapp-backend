import Message from "../model/Message.js";
import Conversation from "../model/Conversation.js";

export const newMessage = async (req, res) => {
  try {
    const newMessage = new Message(req.body);
    await newMessage.save();
    await Conversation.findByIdAndUpdate(req.body.conversationId, {
      message: req.body.message,
    });
    return res
      .status(200)
      .send({ message: "Message has been sent successfully..!!" });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};

export const getMessages = async (req, res) => {
  try {
    const messages = await Message.find({ conversationId: req.params.id });
    return res.status(200).send({ data: messages });
  } catch (error) {
    return res.status(500).send({ message: error });
  }
};
