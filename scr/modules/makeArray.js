import {resultDisplay} from "./resDis.js";
import {sorting} from "./sort.js";

// Создаем многомерный массив со страницами по 10 записей
export function makeArray(data) {
    let i = 0;
    let page = [];
    let pages = [];
    if (data.JSON.length > 10) {
        for (let key in data.JSON) {
            page.push(data.JSON[key]);
            i = i + 1;
            if (i < 10) {
                continue;
            } else {
                pages.push(page);
                page = [];
                i = 0;
            }
        }
    }
    return(pages);
}

// Создаем кнопки по количеству страниц
function makeButton(data) {
    const btnPages = document.querySelector('.pages');
    const pages = makeArray(data);
    let allBtn = '';
    if (pages.length > 1) {
        let numPage = 0;
        while (numPage < pages.length) {
            let btn = '';
            btn = `<button class='btn-page-${numPage + 1}' id = "${numPage + 1}">${numPage + 1}</button>`
            allBtn = allBtn + btn;
            numPage++;
        }
        btnPages.innerHTML = allBtn;
    } else {
        btnPages.innerHTML = '';
    }
    return(pages)
}

// Обработчик кнопок страниц с выводом нужной страницы на экран
// Тут же в обработчике каждой кнопки страницы настраиваем сортировку для данной страницы
// Первоначально запускаеться 1 страница
export function displayPages(data) {
    let pages = makeButton(data);
    resultDisplay(pages[0]);
    sorting(pages[0]);
    const titlePage = document.querySelector('.numPage');
    titlePage.innerHTML = 'Страница 1';

    const btn1 = document.querySelector('.btn-page-1'),
        btn2 = document.querySelector('.btn-page-2'),
        btn3 = document.querySelector('.btn-page-3'),
        btn4 = document.querySelector('.btn-page-4'),
        btn5 = document.querySelector('.btn-page-5')

    btn1.addEventListener('click', () => {
        resultDisplay(pages[0]);
        sorting(pages[0]);
        titlePage.innerHTML = 'Страница 1';
    });
    btn2.addEventListener('click', () => {
        resultDisplay(pages[1]);
        sorting(pages[1]);
        titlePage.innerHTML = 'Страница 2';
    });
    btn3.addEventListener('click', () => {
        resultDisplay(pages[2]);
        sorting(pages[2]);
        titlePage.innerHTML = 'Страница 3';
    });
    btn4.addEventListener('click', () => {
        resultDisplay(pages[3]);
        sorting(pages[3]);
        titlePage.innerHTML = 'Страница 4';
    });
    btn5.addEventListener('click', () => {
        resultDisplay(pages[4]);
        sorting(pages[4]);
        titlePage.innerHTML = 'Страница 5';
    });
}

