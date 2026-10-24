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

module.exports = router;