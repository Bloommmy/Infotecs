import {resultDisplay} from "./resDis.js";

// Сортировка в алфавитном порядке
function sortName(items, criterion) {
    switch (criterion) {
        case 'lastName':
            items.sort(( a, b ) => a.name.lastName > b.name.lastName);
            break;
        case 'firstName':
            items.sort(( a, b ) => a.name.firstName > b.name.firstName);
            break;
        case 'about':
            items.sort(( a, b ) => a.about > b.about);
            break;
        case 'eyeColor':
            items.sort(( a, b ) => a.eyeColor > b.eyeColor);
            break;
    }
    return(items);
};
// Сортировка в обратном порядке
function reversed(items, criterion) {
    switch (criterion) {
        case 'lastName':
            items.sort(( a, b ) => a.name.lastName < b.name.lastName);
            break;
        case 'firstName':
            items.sort(( a, b ) => a.name.firstName < b.name.firstName);
            break;
        case 'about':
            items.sort(( a, b ) => a.about < b.about);
            break;
        case 'eyeColor':
            items.sort(( a, b ) => a.eyeColor < b.eyeColor);
            break;
    }
    return(items);
};
// Вывод результата на экран
function sortCrit(page, button, criterion) {
    let items = page;
    let flag = 0;
    button.addEventListener('click', () => {
        if (flag == 0) {
            resultDisplay(sortName(items, criterion));
            flag = 1;
        } else {
            resultDisplay(reversed(items, criterion));
            flag = 0;
        }
    })
};

// Обработчик кнопок сортировки для каждого столбца
export function sorting(data) {

    const sortFirstName = document.querySelector('.first_name');
    const sortLastName = document.querySelector('.last_name');
    const sortAbout = document.querySelector('.about');
    const sortEyeColor = document.querySelector('.eye_color');

    sortCrit(data, sortFirstName, 'firstName');
    sortCrit(data, sortLastName, 'lastName');
    sortCrit(data, sortAbout, 'about');
    sortCrit(data, sortEyeColor, 'eyeColor');
};

