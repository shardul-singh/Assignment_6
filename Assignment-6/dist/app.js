"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const todo_1 = __importDefault(require("./routes/todo"));
const app = express_1.default();
app.use(express_1.default.json());
app.use('/todo', todo_1.default);
// app.use((req:Request,res:Response,next:NextFunction)=>{
// })
app.listen(4000);
