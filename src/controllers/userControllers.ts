import { Request, Response } from "express";

import { createUser, deleteUser, getUserById, getUsers, updateUser } from "../models/userModel";

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
  try {
    const users = await getUsers();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching users', error });
  }
}

export const getUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    const user = await getUserById(parseInt(id));

    if (!user) {
      res.status(404).json({ message: 'User not found' });
      return
    }
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error fetching user', error });
  }
}

export const addUser = async (req: Request, res: Response): Promise<void> => {
  const { name, email } = req.body;
  try {
    await createUser(name, email);
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error creating user', error });
  }
}

export const editUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  const { name, email } = req.body;
  try {
    await updateUser(parseInt(id), name, email);
    res.status(200).json({ message: 'User updated successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error updating user', error });
  }
}

export const removeUser = async (req: Request, res: Response): Promise<void> => {
  const { id } = req.params;
  try {
    await deleteUser(parseInt(id));
    res.status(200).json({ message: 'User deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error deleting user', error });
  }
}
