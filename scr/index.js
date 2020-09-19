import {resultDisplay} from "./modules/resDis.js";
import {sorting} from "./modules/sort.js";
import {readFile} from "./modules/getData.js";
import {editTabel} from "./modules/editTable.js";

readFile("./dataBase/dataBase.json", function(text) {
    const data = JSON.parse(text);
    resultDisplay(data.JSON, data);
    sorting(data);
    editTabel(data);
});





