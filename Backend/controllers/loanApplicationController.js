import LoanApplication from "../models/LoanApplication.js";
/**
 * @route POST /api/loans
 * @desc Create Loan Application
 * @access Public
 */
export const addLoanApplicationController = async (req, res) => {

    try {
        console.log("Request Body:", req.body); // Log the request body for debugging
        const {
            name,
            email,
            phone,
            loanAmount,
            employmentType,
            monthlyIncome,
        } = req.body;

        if (
            !name ||
            !email ||
            !phone ||
            !loanAmount ||
            !employmentType ||
            !monthlyIncome
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const loanApplication = await LoanApplication.create({
            name,
            email,
            phone,
            loanAmount,
            employmentType,
            monthlyIncome,
        });

        return res.status(201).json({
            success: true,
            message: "Loan application submitted successfully",
            data: loanApplication,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};

/**
 * @route GET /api/loans
 * @desc Get All Loan Applications
 * @access Public
 */
export const getLoanApplicationController = async (req, res) => {
    try {
        const loans = await LoanApplication.find().sort({ createdAt: -1 });

        return res.status(200).json({
            success: true,
            count: loans.length,
            data: loans,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};

/**
 * @route GET /api/loans/:id
 * @desc Get Single Loan Application
 * @access Public
 */
export const getSingleLoanApplicationController = async (req, res) => {
    try {
        const loan = await LoanApplication.findById(req.params.id);

        if (!loan) {
            return res.status(404).json({
                success: false,
                message: "Loan application not found",
            });
        }

        return res.status(200).json({
            success: true,
            data: loan,
        });
    } catch (error) {
        console.error(error);

        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};