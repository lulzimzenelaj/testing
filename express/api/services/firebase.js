import admin from "firebase-admin";

//pathi i credentialit
import serviceAccount from "../../credintials/fireblogsyt-49885-firebase-adminsdk-jinjz-d02429777b.json";

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://u-express-52da6-default-rtdb.europe-west1.firebasedatabase.app"
});

export default admin;