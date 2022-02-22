import admin from '../services/firebase';

//ktu ruhet firestore i projektit tone 
const db = admin.firestore();

const UserController = {
    register: async (req, res) => {

        const { email, password } = req.body;
        
        try {
            const user = await admin.auth().createUser({
                email, password
            });
            if (email == "admin@localhost.com" && password == "test123") {
                const customClaims = { admin: true };
                await admin.auth().setCustomUserClaims(user.uid, customClaims);
                await db.collection('roles').doc(user.uid).set({
                    email: user.email,
                    role: customClaims
                })
            }
            return res.json(user);
        } catch (err) {
            console.log(err.message);
            return res.json({
                message: err.message
            })
        }
    }
}
export default UserController;