import { Router } from "express";
import {Request,Response} from "express";
import { getData, saveData } from "../jsonData/getdata";

const router = Router();

//get data
router.get('/',(req:Request, res:Response)=>{
    const data=getData();
    res.json(data);

});

//editData
router.put('/:id',(req:Request,res:Response)=>{
    
    const userid = req.params.id;
    const user=getData();
    let getUser = false;
    
    let j=0;
    for(let i=0;i<user.length;i++){
        if(user[i].id==userid){
            getUser=true;
            j=i;
            break;
        }
    }

    if(!getUser){
        res.status(400).json({message:'No user found'});
    }else{
        user[j].FirstName=req.body.FirstName;
        user[j].MiddleName=req.body.MiddleName;
        user[j].LastName=req.body.LastName;
        user[j].Email=req.body.Email;
        user[j].Phone=req.body.Phone;
        user[j].Address=req.body.Address;

        saveData(user);

        res.status(200).json({message:"Update the Data"});


    }

});

router.delete('/:id',(req:Request,res:Response)=>{
    
    const userid = req.params.id;
    const user=getData();
    let getUser = false;
    
    let j=0;
    for(let i=0;i<user.length;i++){
        if(user[i].id==userid){
            getUser=true;
            j=i;
            break;
        }
    }

    if(!getUser){
        res.status(400).json({message:'No user found'});
    }else{
        user.splice(j,1);
        saveData(user);
        res.status(200).json({message:"Deleted the Data"});


    }

});


export default router;