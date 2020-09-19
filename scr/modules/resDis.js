const main = document.querySelector('.main_data');
// Определяем ширину столбца about для сокращение строки
const sortAbout = document.querySelector('.about');
const aboutThLength = sortAbout.clientWidth;


// Генерация HTML кода для таблицы
function generationHTML(data, i) {
    const cutString = data.JSON[i].about.slice(0, (aboutThLength / 4 )) + '...';
    let onePeople = ``
    if (cutString.length < (aboutThLength / 4)) {
        onePeople = `
        <tr class = "data-row" id = "${data.JSON[i].id}">
            <td class='first_name' data-type='text'>${data.JSON[i].name.firstName}</td>
            <td class='last_name' data-type='text'>${data.JSON[i].name.lastName}</td>
            <td class='about' data-type='text'>${data.JSON[i].about}</td>
            <td class='eye_color' data-type='text' style="background-color: ${data.JSON[i].eyeColor}; color:${data.JSON[i].eyeColor};">${data.JSON[i].eyeColor}</td>
        </tr>
        `;
    } else {
        onePeople = `
        <tr class = "data-row" id = "${data.JSON[i].id}">
            <td class='first_name' data-type='text'>${data.JSON[i].name.firstName}</td>
            <td class='last_name' data-type='text'>${data.JSON[i].name.lastName}</td>
            <td class='about' data-type='text'>${data.JSON[i].about.slice(0, (aboutThLength / 4 )) + '...'}</td>
            <td class='eye_color' data-type='text' style="background-color: ${data.JSON[i].eyeColor}; color:${data.JSON[i].eyeColor};">${data.JSON[i].eyeColor}</td>
        </tr>
        `;
    }

    return(onePeople);
};

// Вывод данных в таблицу
export function resultDisplay(res, data) {
    let people = '';
    for (let key in res) {
        people = people + generationHTML(data, key);
    }
    main.innerHTML = people;
};