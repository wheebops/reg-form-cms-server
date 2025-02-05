import express, { Router } from "express";
import { createForm, foo, getForms, updateForm } from "../controllers/FormController";
import { getRegistrations, register } from "../controllers/RegistrationController";

const router: Router = express.Router();

router.get("/", foo);
router.post("/forms", getForms);
router.post("/create-form", createForm);
router.patch("/update-form/:slug", updateForm);

router.get("/register/:slug", getRegistrations);
router.post("/register/:slug", register);

export { router };
