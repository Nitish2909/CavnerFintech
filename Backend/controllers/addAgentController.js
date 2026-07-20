import Agent from "../models/AddAgents.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";

export const addAgentController = async (req, res) => {
    try {
        // Destructure the request body
        // console.log(req.body);
        const { fullname, phone, emailId, password, address, designationname, joiningdate, dateofbirth, fathername, residenceaddress, state, district, city, pincode } = req.body;

        // Check for required fields
        if (!fullname || !phone || !emailId || !password || !address || !designationname || !joiningdate || !dateofbirth || !fathername || !residenceaddress || !state || !district || !city || !pincode) {
            return res.status(400).json({
                message: "Please fill all the required fields"
            });
        }


        // Create a new agent
        const agent = await Agent.create({
            fullname,
            phone,
            emailId: emailId.toLowerCase(),
            password,
            address,
            designationname,
            joiningdate,
            dateofbirth: dateofbirth || "",
            fathername,
            residenceaddress,
            state,
            district,
            city,
            pincode: pincode || ""
        });

        if (req.files) {
            const docFields = ["aadharfront", "aadharback", "pancard", "selfie", "signature"];
            for (const field of docFields) {
                const files = req.files[field];
                if (!files) continue;
                const fileList = Array.isArray(files) ? files : [files];
                for (const file of fileList) {
                    if (!file.tempFilePath) {
                        console.error(`Missing tempFilePath for field: ${field}. Ensure useTempFiles is enabled.`);
                        continue;
                    }
                    const { url, publicId } = await uploadToCloudinary(file.tempFilePath);
                    agent.documents.push({ name: field, url, publicId });
                }
            }
            await agent.save();
        }
        console.log("success")

        // Respond with success
        res.status(201).json({ success: true, message: "Agent added successfully", data: agent });

    } catch (error) {
        console.error("Error adding agent:", error);
        res.status(500).json({ success: false, message: "Failed to add agent", error: error.message });
    }

};

export const getAllAgents = async (req, res) => {
    try {
        const agent = await Agent.find();
        res.status(200).json({ success: true, data: agent });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch agent", error: error.message });
    }
};



