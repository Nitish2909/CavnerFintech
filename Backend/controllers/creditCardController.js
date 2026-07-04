import CreditCard from "../models/CreditCard.js";

const addCreditCardController = async (req, res) => {
    try {
        const {
            name,
            email,
            phone,  
            pannumber,
            revenueStream,
            monthlyIncome,
        } = req.body;   

        if (
            !name ||
            !email ||   
            !phone ||
            !pannumber ||
            !revenueStream ||
            !monthlyIncome  
        ) { 
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const creditCard = await CreditCard.create({
            name,
            email,  
            phone,
            pannumber,
            revenueStream,
            monthlyIncome,
        });

        return res.status(201).json({
            success: true,
            message: "Credit card application submitted successfully",
            data: creditCard,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }   
}

const getAllCreditCardsController = async (req, res) => {
    try {
        const creditCards = await CreditCard.find();

    }catch (error) {
        
    }
    
  }
    


export default {addCreditCardController,getAllCreditCardsController};