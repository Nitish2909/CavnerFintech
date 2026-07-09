
import Agent from "../models/AddAgents.js";

const AddAgentController = async (req, res) => {
    try {
        // destructure 
        const { fullname, phone, emailId, password, address, residenceaddress, designationname, joiningdate, dateofbirth, fathername, state, district, district, city, pincode, aadharfront, aadharback, pancard, selfie, signature } = req.body;

        //check
        if (!fullname || !phone || !emailId || !password || !address || !residenceaddress || !designationname || !joiningdate || !dateofbirth || !fathername || !state || !district || !district || !city || !pincode || !aadharfront || !aadharback || !pancard || !selfie || !signature) {
            return res.status(400).json({
                message: "Please fill all the required field"
            })
        }

        const agent = await Agent.create({
            fullname,
            phone,
            emailId: emailId.toLowerCase(),
            password,
            address,
            residenceaddress,
            designationname,
            joiningdate,
            dateofbirth: dateofbirth || "",
            fathername,
            state,
            district,
            district,
            city,
            pincode: pincode || "",
            aadharfront,
            aadharback,
            pancard,
            selfie,
            signature
        })

    } catch (error) {
        console.error("Error adding agent:", error);
        res.status(500).json({ success: false, message: "Failed to add agent", error: error.message });
    }
}

const getAllAgents = async (req, res) => {
    try {
        const agents = await Agent.find();
        res.status(200).json({ success: true, data: agents });

    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch agents", error: error.message });
    }

}

export default { AddAgentController, getAllAgents };

