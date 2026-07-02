import mongoose from "mongoose"

const contactQuerySchema = mongoose.Schema({
    name:{
        type:"String",
        required:true,
    },
    email:{
        type:"String",
        required:true,
    },
    phone:{
        type:"String",
        required: true,
    },
    subject:{
        type:"String",
        required:true
    },
    message:{
        type:"String",
        required:true,
    },
    status:{
        type:"String",
        required:true
    }
},{
    timestamps:true
})

const ContactQuery = mongoose.model("ContactQuery", contactQuerySchema);

export default ContactQuery;