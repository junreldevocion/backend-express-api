import mysql from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const connection = mysql.createPool({
  host: process.env.REACT_APP_DB_HOST,
  user: process.env.REACT_APP_DB_USER,
  password: process.env.REACT_APP_DB_PASSWORD,
  database: process.env.REACT_APP_DB_DATABASE,
  port: parseInt(process.env.REACT_APP_DB_PORT || '3306')
});


export const createDatabaseTables = () => {
  const createUsersTableQuery = `
    CREATE TABLE IF NOT EXISTS users (
      id INT AUTO_INCREMENT PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email VARCHAR(255) NOT NULL UNIQUE
    )`;

  try {
    connection.query(createUsersTableQuery);
    console.log('Tables created successfully');
  } catch (error) {
    console.error('Error creating tables:', error);
  }
};

export default connection.promise();
