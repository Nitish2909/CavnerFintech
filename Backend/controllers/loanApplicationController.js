import LoanApplication from "../models/LoanApplication.js";

/**
 * @name addLoanApplicationController
 * @route POST /api/loans/
 * @description Submit a new loan application
 * @access Public
 */
export const addLoanApplicationController = async (req, res) => {
    try {
        // 1. Destructure the request body
        const { name, email, phone, loanAmount, employmentType, monthlyIncome } = req.body;

        // 2. Validate the required fields
        if (!name || !email || !phone || !loanAmount || !employmentType || !monthlyIncome) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // 3. Create and save the loan application in one step
        const savedLoanApplication = await LoanApplication.create({
            name,
            email,
            phone,
            loanAmount,
            employmentType,
            monthlyIncome
        });

        // 4. Send a success response
        return res.status(201).json({
            success: true,
            message: "Loan application submitted successfully",
            data: savedLoanApplication
        });

    } catch (error) {
        console.error("Error in addLoanApplicationController:", error);
        
        // Fixed the 'eror' typo here
        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error"
        });
    }
};

export const getLoanApplcationController = async (req, res) => {
    try {

    } catch (error) {

    }
}