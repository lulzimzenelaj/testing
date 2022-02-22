import admin from "../services/firebase";

const checkIfAdmin=async(req,res,next)=>{
    //kjo authToken osht = req.AuthToken
    const {authToken}=req;
    try{


<<<<<<< HEAD
=======
        //czxczx


>>>>>>> 12821afa80463eb76706ab8b557512b39dd560d4
    const user = await admin.auth().verifyIdToken(authToken);
    }catch(err){
        return res.status(401).json({message:"Cannot verify right now"})
    }
    if(user.admin){
        req.authId=null;
<<<<<<< HEAD
=======
        
>>>>>>> 12821afa80463eb76706ab8b557512b39dd560d4
    }
    else{
        return res.status(401).json({message:"Not an admin"})
    }
    next();
}

export default checkIfAdmin;
 