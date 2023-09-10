const { default: mongoose } = require("mongoose");

const categorySchema = new mongoose.Schema({

    category:{
        type: [String], 
        enum: ["MEN", "WOMEN"], 
        required: true
    }
    
}, { timestamps: true })

module.exports = mongoose.model("Category", categorySchema)