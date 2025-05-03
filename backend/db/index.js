// First, we're importing a helpful tool called 'pg' (think of it as a Swiss Army knife for working with PostgreSQL databases)
import pg from "pg";
const { Pool } = pg;

// We're creating a 'pool' of database connections
// Think of this like a group of friendly assistants ready to help us talk to the database
// It's much faster than hiring a new assistant every time we need something!
// Note: Pool automaticaly finds our environment variables in .env to establish the connection
const pool = new Pool();

// Here's where we create our own special way to ask questions to the database
// It's like setting up a telephone hotline for database queries
export const query = (text, params, callback) => {
  // When someone calls our hotline (query function), we pass their question to one of our assistants (pool)
  // text: the question we're asking (in SQL language)
  // params: any specific details for the question
  // callback: what to do when we get an answer
  console.log("Hello from your yelp db!");
  return pool.query(text, params, callback);
};