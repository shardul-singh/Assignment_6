import fs from 'fs';
import path from 'path';

export function getData(){
    const rawdata = fs.readFileSync(`${__dirname}/data.json`,{encoding:"utf-8"});
    return JSON.parse(rawdata.toString());
}

export function saveData(data:any){
    const datas=JSON.stringify(data);
    fs.writeFile(`${__dirname}/data.json`,datas,(err)=>{
        if(err){
            console.log(err);
        }else{
            console.log("file Saved");
        }
    })
}