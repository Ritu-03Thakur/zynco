import express from "express"
import dotenv from "dotenv"
import cors from "cors"
import mongoose from "mongoose"
import bodyParser from "body-parser"
import helmet from "helmet"
import morgan from "morgan"
import { kpiRouter } from "./routes/KpiRoute.js"
import { productRouter } from "./routes/ProductRoute.js"
import { transactionRouter } from "./routes/TransactionRoute.js"
import connectDB from "./db.js"

// import { Kpi } from "./models/Kpi.js" 
// import { Product } from "./models/Product.js"
// import { Transaction } from "./models/Transaction.js"
// import { kpis, products, transactions } from "./Data.js"

dotenv.config({
    path: "./.env"
})
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({ policy: "cross-origin" }));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());



app.use("/kpi", kpiRouter);
app.use("/product", productRouter);
app.use("/transaction", transactionRouter);



connectDB()
  .then(async () => {
    app.listen(process.env.PORT, () =>
      console.log(`MongoDB Connection Successfully Port : ${process.env.PORT}`)
    );

    
    // try {
    //   await mongoose.connection.db.collection('kpis').deleteMany({});
    //   await mongoose.connection.db.collection('products').deleteMany({});
    //   await mongoose.connection.db.collection('transactions').deleteMany({});

    //   await Kpi.insertMany(kpis);
    //   await Product.insertMany(products);
    //   await Transaction.insertMany(transactions);
    // } catch (error) {
    //   console.error("Error resetting collections: ", error);
    // }
  })
  .catch((error) => {
    console.error(`MongoDB connection failed : ${error}`);
  });