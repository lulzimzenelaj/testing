import admin from "../services/firebase";

const checkIfAdmin=async(req,res,next)=>{
    //kjo authToken osht = req.AuthToken
    const {authToken}=req;
    try{
    const user = await admin.auth().verifyIdToken(authToken);
    }catch(err){
        return res.status(401).json({message:"Cannot verify right now"})
    }
    if(user.admin){
        req.authId=user.uid;
    }
    else{
        return res.status(401).json({message:"Not an admin"})
    }
    next();
}

export default checkIfAdmin;
 