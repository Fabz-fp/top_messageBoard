const { Router } = require("express");

const router = Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date(),
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date(),
  },
];

router.get("/", (req, res) => {
  res.render("index", {
    title: "Mini Message Board",
    messages: messages,
  });
});

router.get("/new", (req, res) => {
  res.render("form", {
    title: "Create a New Message",
  });
});

router.post("/new", (req, res) => {
  const { author, messageText } = req.body;

  const newMessage = {
    text: messageText,
    user: author,
    added: new Date(),
  };

  messages.push(newMessage);

  res.redirect("/");
});

router.get("/message/:messageIndex", (req, res) => {
  const messageIndex = Number(req.params.messageIndex);
  const message = messages[messageIndex];

  if (!Number.isInteger(messageIndex) || !message) {
    return res.status(404).send("Message not found");
  }

  res.render("message", {
    title: "Message Details",
    message: message,
  });
});

module.exports = router;