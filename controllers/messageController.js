const db = require("../db/queries");

async function messagesListGet(req, res, next) {
  try {
    const messages = await db.getAllMessages();

    res.render("index", {
      title: "Mini Message Board",
      messages: messages,
    });
  } catch (error) {
    next(error);
  }
}

async function messageCreateGet(req, res, next) {
  try {
    res.render("form", {
      title: "Create a New Message",
      errors: [],
      formData: {
        author: "",
        messageText: "",
      },
    });
  } catch (error) {
    next(error);
  }
}

async function messageCreatePost(req, res, next) {
  const author = req.body.author?.trim() || "";
  const messageText = req.body.messageText?.trim() || "";

  const errors = [];

  if (author.length === 0) {
    errors.push("Author is required.");
  } else if (author.length > 255) {
    errors.push("Author cannot exceed 255 characters.");
  }

  if (messageText.length === 0) {
    errors.push("Message cannot be empty.");
  } else if (messageText.length > 5000) {
    errors.push("Message cannot exceed 5000 characters.");
  }

  if (errors.length > 0) {
    return res.status(400).render("form", {
      title: "Create a New Message",
      errors: errors,
      formData: {
        author: author,
        messageText: messageText,
      },
    });
  }

  try {
    await db.insertMessage(author, messageText);
    res.redirect("/");
  } catch (error) {
    next(error);
  }
}

async function messageDetailGet(req, res, next) {
  const messageId = Number(req.params.messageId);

  if (!Number.isInteger(messageId) || messageId <= 0) {
    return res.status(404).send("Message not found");
  }

  try {
    const message = await db.getMessageById(messageId);

    if (!message) {
      return res.status(404).send("Message not found");
    }

    res.render("message", {
      title: "Message Details",
      message: message,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  messagesListGet,
  messageCreateGet,
  messageCreatePost,
  messageDetailGet,
};