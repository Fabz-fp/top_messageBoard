# Mini message Board

A simple message board built with Node.js, Express, EJS and PostgreSQL as part of The Odin Project.

## Live Demo
[View the live application](https://top-messageboard.onrender.com/)

## Features

- View all messages on home page
- Submit new message through a form
- View individual message details
- Display message authors, content and timestamps
- Persistent message storage using PostgreSQL
- Server-side form validation
- Database queries using parameterized SQL statements

## Technologies

- Node.js
- Express
- EJS
- PostgreSQL
- Neon (hosted PostgreSQL database)
- node-postgres (pg)
- pnpm

## Getting Started

### Prerequisites

- Node.js (v22 or later recommended)
- pnpm
- A PostgreSQL database (this project uses Neon)

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
### Database Setup

This application uses PostgreSQL to store messages.

1. Create a PostgreSQL database. You can use Neon to create a free hosted database.
2. Copy your database connection string.
3. Create a .env file in the project root.
4. Add your database connection information:
```
PORT=3000
DATABASE_URL="your_postgresql_connection_string"
```
Replace the placeholder with your actual PostgreSQL connection string.
**Important:** Never commit your .env file or expose your database credentials. It is already included in .gitignore.

## Populate the Database

Run the database setup script:
```
node --env-file-if-exists=.env db/populatedb.js
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

## Deployment

The application is deployed on Render and uses Neon for PostgreSQL hosting.

To deploy your own instance:

1. Push your project to GitHub.
2. Create a new Web Service on Render and connect your repository.
3. Configure the DATABASE_URL environment variable in Render using your Neon connection string.
4. Set the build command to pnpm install.
5. Set the start command to pnpm start.
6. Deploy the application.

Render automatically provides the PORT environment variable.

## Project Structure

```
.
├── controllers/
│   └── messageController.js
├── db/
│   ├── pool.js
│   ├── queries.js
│   └── populatedb.js
├── public/
│   └── styles.css
├── routes/
│   └── indexRouter.js
├── views/
│   ├── form.ejs
│   ├── index.ejs
│   └── message.ejs
├── .env.example
├── .gitignore
├── app.js
├── package.json
├── pnpm-lock.yaml
└── README.md
```

## License
Created for educational purposes as part of The Odin Project.