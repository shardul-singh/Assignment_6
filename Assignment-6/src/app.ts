import express,{Request,Response,NextFunction} from "express";

import todoRoutes from "./routes/todo"
const app = express();

app.use(express.json());
app.use('/todo',todoRoutes);
// app.use((req:Request,res:Response,next:NextFunction)=>{

// })

app.listen(4000);
