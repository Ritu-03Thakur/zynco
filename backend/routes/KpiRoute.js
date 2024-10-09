import express from "express";
import {Kpi} from "../models/Kpi.js";

const kpiRouter = express.Router();

kpiRouter.get("/kpis", async (req, res) => {
    try {
        const kpis = await Kpi.find();
        res.status(200).json(kpis);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
});

export {kpiRouter};
