// const checkIfAuthenticated = async(req, res, next) => {
//     const { authToken } = req;
//     try {
//         const user =await admin.auth().verifIdToken(authToken);
//         req.authId=user.uid;
//     } catch (err) {
//         return res.status(401).json({ message: 'You are not authenticated' });
//     }

//     return next();
// }
// export default checkIfAuthenticated; 
var admin = require('firebase-admin');

//per app tonin gati si spo duhet se vet te listing nuk e len me hi aty te router/index.js i vue.js jo ktu ne api
const checkIfAuthenticated = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const user = await admin.auth().verifyIdToken(authorization);
        //qekjo sdi pse   
        // req.user=user;
    } catch (err) {
        return res.status(401).json({ message: 'You are not authenticated' });
    }
    return next();
}
export default checkIfAuthenticated;