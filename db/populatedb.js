const pool = require("./pool");

async function main() {
  try {
    await pool.query(`
      CREATE TABLE IF NOT EXISTS messages (
        id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
        username VARCHAR(255) NOT NULL,
        text TEXT NOT NULL,
        added TIMESTAMPTZ NOT NULL DEFAULT CURRENT_TIMESTAMP
      );
    `);

    console.log("Messages table created or already exists.");

    await pool.query(`
      INSERT INTO messages (username, text)
      SELECT *
      FROM (
        VALUES
          ('Amando', 'Hi there!'),
          ('Charles', 'Hello World!')
      ) AS seed(username, text)
      WHERE NOT EXISTS (
        SELECT 1 FROM messages
      );
    `);

    console.log("Database populated successfully.");
  } catch (error) {
    console.error("Database setup failed:", error);
  } finally {
    await pool.end();
  }
}

main();