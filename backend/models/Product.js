import mongoose , {Schema} from "mongoose";
import { loadType } from "mongoose-currency";

loadType(mongoose);

const productSchema = new Schema({
    price: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
    expense: {
        type: mongoose.Types.Currency,
        currency: "USD",
        get: (v) => v / 100,
    },
    transactions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Transaction",
        },
    ],

} , 
{
    timestamps: true , 
    toJSON : {getters : true }
})


export const Product = mongoose.model("product" , productSchema)