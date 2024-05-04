import cors from "cors";
import dotenv from "dotenv";
import express from "express";
import connectDB from "./dbConfig/connect.db.js";

dotenv.config();

const app = express();

// to make app understand json
app.use(express.json());

// using cors
app.use(cors());

// connect database
await connectDB();

// import routes
app.post("/send/message", (req, res) => {
  const { name, email, phone, message } = req.body;
  // Process the form data and store it in a database or send an email
  console.log(
    `Name: ${name}, Email: ${email}, Phone: ${phone}, Message: ${message}`
  );
  res.send("Form submitted successfully");
});

// listen to server
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
