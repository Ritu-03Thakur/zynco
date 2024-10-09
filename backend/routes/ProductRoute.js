import express from "express";
import {Product} from "../models/Product.js";

const productRouter = express.Router();

productRouter.get("/products", async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export {productRouter};