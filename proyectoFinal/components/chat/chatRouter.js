import { Router } from "express";
import chatController from './chatController.js';

const chatRouter = new Router();

chatRouter.get('/chat', chatController.getMessages);

chatRouter.get('/chat/admin', chatController.getUserMessages);

chatRouter.get('/chat/:email', chatController.adminView);

chatRouter.get('/chat/admin/:id', chatController.adminGetMessage);

chatRouter.post('/chat/admin/:id', chatController.adminRespondeMessage);

export default chatRouter;

