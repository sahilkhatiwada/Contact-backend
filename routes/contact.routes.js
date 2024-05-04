import express from "express";

import { validateReqBody } from "../controllers/validation.middleware.js";
import { contactRegSchema } from "../validation/contact.validation.js";
import Contact from "../models/contactModel.js";

const router = express.Router();

router.post(
  "/send/messages",
  validateReqBody(contactRegSchema),
  async (req, res) => {
    const newContact = req.body;

    //    check if user with provided email already exists
    const existingContact = await Contact.findOne({ email: newContact.email });
    //    if yes, return error
    if (existingContact) {
      return res
        .status(400)
        .send({ message: "Contact with provided email already exists" });
    }
    //    if no, create new user
    await Contact.create(newContact);
    //    send success response
    return res.status(201).send({ message: "Contact created successfully" });
  }
);

export default router;
