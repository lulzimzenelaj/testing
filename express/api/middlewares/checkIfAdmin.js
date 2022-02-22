import admin from "../services/firebase";

const checkIfAdmin=async(req,res,next)=>{
    //kjo authToken osht = req.AuthToken
    const {authToken}=req;
    try{
<<<<<<< HEAD


        //czxczx


=======
>>>>>>> a7140a34991310c7d79b149a6395360a28ed7bbe
    const user = await admin.auth().verifyIdToken(authToken);
    }catch(err){
        return res.status(401).json({message:"Cannot verify right now"})
    }
    if(user.admin){
<<<<<<< HEAD
        req.authId=null;
=======
        req.authId=user.uid;
>>>>>>> a7140a34991310c7d79b149a6395360a28ed7bbe
    }
    else{
        return res.status(401).json({message:"Not an admin"})
    }
    next();
}

export default checkIfAdmin;
 