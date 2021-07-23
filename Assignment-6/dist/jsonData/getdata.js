"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.saveData = exports.getData = void 0;
const fs_1 = __importDefault(require("fs"));
function getData() {
    const rawdata = fs_1.default.readFileSync(`${__dirname}/data.json`, { encoding: "utf-8" });
    return JSON.parse(rawdata.toString());
}
exports.getData = getData;
function saveData(data) {
    const datas = JSON.stringify(data);
    fs_1.default.writeFile(`${__dirname}/data.json`, datas, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log("file Saved");
        }
    });
}
exports.saveData = saveData;
