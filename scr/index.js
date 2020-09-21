// иморт нужных функций
import {readFile} from "./modules/getData.js";
import {editTabel} from "./modules/editTable.js";
import {displayPages} from "./modules/makeArray.js";

// получаем данные из json и делаем все нужные махинации
readFile("./dataBase/dataBase.json", function(text) {
    const data = JSON.parse(text);
    editTabel(data);
    // сортировка происходит по странице и вызываеться в модуле makeArray
    displayPages(data);
});





