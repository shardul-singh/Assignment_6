"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getdata_1 = require("../jsonData/getdata");
const router = express_1.Router();
//get data
router.get('/', (req, res) => {
    const data = getdata_1.getData();
    res.json(data);
});
//editData
router.put('/:id', (req, res) => {
    const userid = req.params.id;
    const user = getdata_1.getData();
    let getUser = false;
    let j = 0;
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == userid) {
            getUser = true;
            j = i;
            break;
        }
    }
    if (!getUser) {
        res.status(400).json({ message: 'No user found' });
    }
    else {
        user[j].FirstName = req.body.FirstName;
        user[j].MiddleName = req.body.MiddleName;
        user[j].LastName = req.body.LastName;
        user[j].Email = req.body.Email;
        user[j].Phone = req.body.Phone;
        user[j].Address = req.body.Address;
        getdata_1.saveData(user);
        res.status(200).json({ message: "Update the Data" });
    }
});
router.delete('/:id', (req, res) => {
    const userid = req.params.id;
    const user = getdata_1.getData();
    let getUser = false;
    let j = 0;
    for (let i = 0; i < user.length; i++) {
        if (user[i].id == userid) {
            getUser = true;
            j = i;
            break;
        }
    }
    if (!getUser) {
        res.status(400).json({ message: 'No user found' });
    }
    else {
        user.splice(j, 1);
        getdata_1.saveData(user);
        res.status(200).json({ message: "Deleted the Data" });
    }
});
exports.default = router;
