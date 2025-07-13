import User from "../models/User.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import { OAuth2Client } from "google-auth-library";

const client=new OAuth2Client(process.env.GOOGLE_CLIENT_ID)