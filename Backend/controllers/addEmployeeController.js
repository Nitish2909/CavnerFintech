import Employee from "../models/AddEmployee.js";

export const addEmployeeController = async (req, res) => {
    try {
        // Destructure the request body
        const { fullname, phone, emailId, password, address,designationname, joiningdate, dateofbirth, fathername, state, district, city, pincode, aadharfront, aadharback, pancard, selfie, signature } = req.body; 

        // Check for required fields
        if (!fullname || !phone || !emailId || !password || !address || !designationname || !joiningdate || !dateofbirth || !fathername || !state || !district || !city || !pincode || !aadharfront || !aadharback || !pancard || !selfie || !signature) {
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
            pincode: pincode || "",
            aadharfront,
            aadharback,
            pancard,
            selfie,
            signature
        });

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

