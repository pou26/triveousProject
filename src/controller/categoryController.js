const categoryModel = require("../models/categoryModel")
const aws = require("../AWS/aws")
const valid = require("../Validator/validator")

const createCategories = async function (req, res) {
    try {
        let data = req.body
        let file = req.files

        if (Object.keys(data).length == 0) { return res.status(400).send({ status: false, message: "please input some data" }) }
        let {category } = data

        if (!category)
            return res.status(400).send({ status: false, message: "category is mandatory." });

        //category validation

        if (!['MEN', 'WOMEN'].includes(category)) {
            return res.status(400).send({ status: false, message: "Invalid category" });
        }

        // Update data with category
        data.category = category;

        //creation

        const created = await categoryModel.create(data)
        return res.status(201).send({ status: true, message: "Success", data: created })

    }
    catch (err) {
        return res.status(500).send({ status: false, message: err.message })
    }
    

}

// category listing

const getCategories = async function (req, res) {
    try {
        const categories = ['men', 'women']; // Define your list of categories here

        res.status(200).send({ status: true, message: 'Success', data: categories });
    } catch (err) {
        console.log(err.message);
        res.status(500).send({ status: false, Error: err.message });
    }
};


module.exports = { createCategories, getCategories};