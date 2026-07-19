import Employee from "../models/AddEmployee.js";
import { uploadToCloudinary } from "../utils/cloudinaryUpload.js";

export const addEmployeeController = async (req, res) => {
    try {
        // Destructure the request body
        // console.log(req.body);
        const { fullname, phone, emailId, password, address,designationname, joiningdate, dateofbirth, fathername, state, district, city, pincode } = req.body; 

        // Check for required fields
        if (!fullname || !phone || !emailId || !password || !address || !designationname || !joiningdate || !dateofbirth || !fathername || !state || !district || !city || !pincode ) {
            return res.status(400).json({
                message: "Please fill all the required fields"
            });
        }


        // Create a new employee
        const employee = await Employee.create({
            fullname,
            phone,
            emailId: emailId.toLowerCase(),
            password,
            address,
            designationname,
            joiningdate,
            dateofbirth: dateofbirth || "",
            fathername,
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
                employee.documents.push({ name: field, url, publicId });
              }
            }
            await employee.save();
          }
        console.log("success")

        // Respond with success
        res.status(201).json({ success: true, message: "Employee added successfully", data: employee });

    } catch (error) {
        console.error("Error adding employee:", error);
        res.status(500).json({ success: false, message: "Failed to add employee", error: error.message });
    }

};

export const getAllEmployees = async (req, res) => {
    try {
        const employees = await Employee.find();
        res.status(200).json({ success: true, data: employees });
    } catch (error) {
        res.status(500).json({ success: false, message: "Failed to fetch employees", error: error.message });
    }
};

