import {resultDisplay} from "./resDis.js";

export function editTabel(data) {
    const table = document.querySelector('.table');
    const editTable = document.querySelector('.editTable');
    let ChangeRow;
    table.addEventListener('click', function(event) {
        let target = event.target;
        if ((target.tagName != 'TD') && (target.tagName != 'DIV')) return;
        const row = event.target.closest('.data-row');
        console.log(row);
        ChangeRow = row;
        const editTableForm = `
            <form action="" class='form'>
                <p>Имя: <input type="text"></p>
                <p>Фамилия: <input type="text"></p>
                <p>Описание:
                    <textarea name="about" cols="30" rows="5"></textarea>
                </p>
                <p>Цвет глаз: <input type="text"></p>
            </form>
            <button class='btn-edit'>Редактировать</button>
            <button class='btn-close'>Отмена</button>
        `;
        editTable.innerHTML = editTableForm;
        const editForm = document.querySelector('.editTable'),
            inputs = editForm.querySelectorAll('input'),
            textarea = editForm.querySelector('textarea'),
            btnEdit = editForm.querySelector('.btn-edit'),
            btnClose = editForm.querySelector('.btn-close');

        // Находим полное about для формы редактированния данных
        let about = ''
        data.JSON.forEach((item, i, arr) => {
            if (item.id === ChangeRow.id) {
                about = data.JSON[i].about;
            }
        });

        inputs[0].value = row.cells[0].innerHTML;
        inputs[1].value = row.cells[1].innerHTML;
        textarea.value = about;
        inputs[2].value = row.cells[3].innerHTML;

        btnClose.addEventListener('click', () => {
            editTable.innerHTML = '';
        });

        btnEdit.addEventListener('click', () => {
            const editedRow = {
                id: ChangeRow.id ,
                name: {
                    firstName: inputs[0].value,
                    lastName: inputs[1].value,
                },
                phone: null,
                about: textarea.value,
                eyeColor: inputs[2].value,
            };

            console.log(ChangeRow.id);

            let editedRowIndex = 0;
            data.JSON.forEach((item, i, arr) => {
                if (item.id === ChangeRow.id) {
                    arr.splice(i, 1, editedRow);
                    editedRowIndex = i + 1;
                }
            });

            localStorage.setItem('jsonData', JSON.stringify(data));
            resultDisplay(data.JSON, data);
            editTable.innerHTML = '';


        })


    });
};


