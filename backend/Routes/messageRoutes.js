const express = require("express");
const protect = require("../middleware/authMiddleware.");
const {
  sendMessageController,
  allMessagesController,
} = require("../controllers/messageControllers");

const router = express.Router();

router.route("/").post(protect, sendMessageController);

router.route("/:chatId").get(protect, allMessagesController);

module.exports = router;
