import db from "../config/db";

export interface User {
  id: number;
  name: string;
  email: string;
}

export const getUsers = async (): Promise<User[]> => {
  const [rows] = await db.query('SELECT * FROM users');
  return rows as User[];
}

export const getUserById = async (id: number): Promise<User | null> => {
  const [rows] = await db.query('SELECT * FROM users WHERE id = ?', [id]);
  return (rows as User[])[0] || null;
}

export const createUser = async (name: string, email: string): Promise<void> => {
  await db.query('INSERT INTO users (name, email) VALUES (?, ?)', [name, email]);
}

export const updateUser = async (id: number, name: string, email: string): Promise<void> => {
  await db.query('UPDATE users SET name = ?, email = ? WHERE id = ?', [name, email, id]);
}

export const deleteUser = async (id: number): Promise<void> => {
  await db.query('DELETE FROM users WHERE id = ?', [id]);
}

