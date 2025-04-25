import { NextFunction, Request, Response } from "express";
import { createUserToDB, getUserByIdFromDB, getUsersFromDB } from "./user.service";
import { IUser } from "./user.interface";
import { v4 as uuidv4 } from "uuid";
import mongoose from "mongoose";
export const createUser = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
    const data:IUser =req.body
  
    const user = await createUserToDB(data); 
  
    res.status(200).json({
      status: "success",
      data: user,
    });
  };
export const getUsers = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
   
  const response = await getUsersFromDB()
    console.log("🚀 ~ response:", response)
    res.status(200).json({
      status: "success",
      data: response
    });
  };
export const getUserById = async (
    req: Request,
    res: Response,
    next: NextFunction
  ) => {
   const {id} = req.params
   console.log("🚀 ~ req.params:", req.params)
  const response = await getUserByIdFromDB(id)
    console.log("🚀 ~ response:", response)
    res.status(200).json({
      status: "success",
      data: response
    });
  };