import mongoose, { Schema } from "mongoose";
const todoSchema = new mongoose.Schema({
        title: {
            type: String,
            required: true
        },

        description: {
            type: String,
            required: true
        },

        status: {
            type: String,
            required: true
        }
})


mongoose.model("todo", todoSchema)