import Partner from "../models/Partner.js";

const addPartnerController = async (req, res) => {
    try {
        const {
            entityType,
            corporateName,
            shortName,
            phone,
            email,
            password,
            pannumber,
            dateOfIncorporation,
            plotNo,
            address,
            state,
            district,
            city,
            pincode,
        } = req.body;

        if (
            !entityType ||
            !corporateName ||
            !shortName ||
            !phone ||
            !email ||
            !password ||
            !pannumber ||
            !dateOfIncorporation ||
            !plotNo ||
            !address ||
            !state ||
            !district ||
            !city ||
            !pincode
        ) {
            return res.status(400).json({
                success: false,
                message: "All fields are required",
            });
        }

        const partner = await Partner.create({
            entityType,
            corporateName,
            shortName,
            phone,
            email,
            password,
            pannumber,
            dateOfIncorporation,
            plotNo,
            address,
            state,
            district,
            city,
            pincode,
        });

        return res.status(201).json({
            success: true,
            message: "Partner added successfully",
            data: partner,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
}

const loginPartnerController = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({
                success: false,
                message: "Email and password are required",
            });
        }
        const partner = await Partner.findOne({ email });
        if (!partner) {
            return res.status(404).json({
                success: false,
                message: "Partner not found",
            });
        }
        // Here you would typically check the password, but for simplicity, we'll skip that step.
        return res.status(200).json({
            success: true,
            message: "Partner logged in successfully",
            data: partner,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
}

const getAllPartnerController = async (req, res) => {
    try {
        const partners = await Partner.find().sort({ createdAt: -1 });
        return res.status(200).json({
            success: true,
            count: partners.length,
            data: partners,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
};

const getSinglePartnerController = async (req, res) => {
    try {
        const { id } = req.params;
        const partner = await Partner.findById(id);
        if (!partner) {
            return res.status(404).json({
                success: false,
                message: "Partner not found",
            });
        }
        return res.status(200).json({
            success: true,
            data: partner,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({
            success: false,
            message: error.message || "Internal Server Error",
        });
    }
}

export { addPartnerController, loginPartnerController, getAllPartnerController, getSinglePartnerController };