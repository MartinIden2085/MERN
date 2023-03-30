import User from "../models/user";

export const createConnectAccount=async (req,res)=>{
    const user=await User.findById(req.user._id).exec()
    console.log("USER ==> ",user);
};
