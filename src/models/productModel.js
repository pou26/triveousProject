const { default: mongoose } = require("mongoose");
const ObjectId = mongoose.Schema.Types.ObjectId

const productSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    categoryId: { 
        type: ObjectId, 
        ref:'category', 
        required: true 
    },
    description: {
        type: String,
        required: true, 
        trim: true 
    },
    price: { 
        type: Number, 
        required: true, 
        trim: true 
    },
    currencyId: { 
        type: String, 
        required: true, 
        trim: true 
    },
    currencyFormat: { 
        type: String, 
        required: true, 
        trim: true, 
        default: "₹" },
    isnotavailable: { 
        type: Boolean, 
        default: false 
    },
    productImage: { 
        type: String, 
        trim: true 
    },
    availableSizes: { 
        type: [String], 
        enum: ["S", "XS", "M", "X", "L", "XXL", "XL"], 
        trim: true 
    }

}, { timestamps: true })

module.exports = mongoose.model("Product", productSchema)
