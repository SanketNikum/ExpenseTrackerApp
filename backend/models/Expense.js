import mongoose from "mongoose";

const ExpenseSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    icon: {
        type: String,
        required: false
    },
    category: {
        type: String,
        required: true // e.g., "Food", "Travel", "Rent"
    },
    amount: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    }
}, {
    timestamps: true // adds createdAt and updatedAt fields
});

export default mongoose.model("Expense", ExpenseSchema);
