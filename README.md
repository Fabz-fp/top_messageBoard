# Mini message Board

A simple message board built with Node.js, Express and EJS as part of The Odin Project.

## Live Demo
[View the live application](https://top-messageboard.onrender.com/)

## Features

- View messages on home page
- Submit new message through a form
- View individual message details
- Display message authors, content and timestamps

## Technologies

- Node.js
- Express
- EJS
- pnpm

## Getting Started

### Prerequisites

- Node.js
- pnpm

### Installation

Clone the repository and enter the project directory:
```
git clone https://github.com/Fabz-fp/top_messageBoard
cd top_messageBoard
```

Install dependencies:
```
pnpm install
```

Create a .env file in the project root:
```
PORT=3000
```

### Run the application

Development mode:
```
pnpm dev
```

Production mode:
```
pnpm start
```
Open http://localhost:3000 in your browser.

## Project Structure

```
.
├── public/
│   └── styles.css
├── routes/
│   └── indexRouter.js
├── views/
│   ├── form.ejs
│   ├── index.ejs
│   └── message.ejs
├── .gitignore
├── app.js
├── package.json
└── README.md
```

## Notes

Messages are stored in memory, so newly submitted messages are lost when the server restarts.

## License
Created for educational purposes as part of The Odin Project.