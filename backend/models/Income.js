import mongoose from "mongoose";

const IncomeSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },
    icon: {
        type: String, 
        required: false
    },
    source: {
        type: String,
        required: true
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
    timestamps: true // adds createdAt and updatedAt
});

export default mongoose.model("Income", IncomeSchema);
