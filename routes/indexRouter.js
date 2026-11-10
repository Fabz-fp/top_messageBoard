const { Router } = require("express");
const messageController = require("../controllers/messageController");

const router = Router();

router.get("/", messageController.messagesListGet);
router.get("/new", messageController.messageCreateGet);
router.post("/new", messageController.messageCreatePost);
router.get("/message/:messageId", messageController.messageDetailGet);

module.exports = router;