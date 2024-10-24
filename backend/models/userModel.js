import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true
    },
    cart: [
        {
            bookId: {
                type: mongoose.Schema.Types.ObjectId, ref: 'Book'
            }
        }
    ],
    purchaseHistory: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: 'Order'
        }
    ]
})