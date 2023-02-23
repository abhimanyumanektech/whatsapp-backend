import express from "express";
import {
  newConversation,
  //   getConversation,
} from "../controllers/conversationController.js";
import { getMessages, newMessage } from "../controllers/messageController.js";
import { addUser, getUsers } from "../controllers/userController.js";

const route = express.Router();

route.post("/add", addUser);
route.get("/users", getUsers);
route.post("/conversation/add", newConversation);
route.post("/message/add", newMessage);
route.get("/message/get/:id", getMessages);

export default route;
