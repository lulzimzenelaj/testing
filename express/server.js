import express from "express";
import usersRoute from "./api/routes/usersRoute";
import getAuthToken from "./api/middlewares/getAuthToken"
import cors from "cors";
import helmet from "helmet";
import admroute from "./api/routes/admroute";

//krijojm app te expresit
const app = express( );



//i thojm degjo ne nje port te caktume
const port = process.env.PORT || 3000;

app.use(cors());
app.use(helmet());

//kjo osht mi pars bodyt e requestave per me mujt me e rujt req.body
app.use(express.urlencoded({
    extended:true
})  )
//edhe kjo per me pars bodyn
app.use(express.json());

//veq nese jon tlogum mi lon nfaqe
app.use(getAuthToken);

// munem edhe me e shti ni middle ware para se me hi te userat psh
// app.use("/users",checkIfUser, usersRoute);

app.use("/users", usersRoute);

app.use("/admroute", admroute);


app.listen(port, () => {
    console.log('api_app is listening on port '+port);
});

