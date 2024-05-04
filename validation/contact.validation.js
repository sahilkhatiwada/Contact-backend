import * as Yup from "yup";

export const contactRegSchema = Yup.object({
  name: Yup.string().required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.number()
    .required("Phone is required")
    .test("len", "Invalid phone number", (val) => val.toString().length === 10),

  message: Yup.string()
    .required("Message is required")
    .max(500, "Message must be less than 500 characters"),
});
