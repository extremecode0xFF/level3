function DataTable(config, data) {
    let table = document.createElement("table");
    let thead = document.createElement("thead");
    let tbody = document.createElement("tbody");
    let tr = document.createElement("tr");

    let usersTable = document.getElementById("usersTable");
    let readyTable = usersTable.appendChild(table);

    let head = readyTable.appendChild(thead).appendChild(tr);
    config.columns.forEach((attr) => {
        let column = document.createElement("th");
        column.innerHTML = attr.title;
        head.appendChild(column);
    })

    let body = readyTable.appendChild(tbody);
    data.forEach((attr) => {
        let tr = document.createElement("tr");
        body.appendChild(tr);

        for (let i of config.columns) {
            let td = document.createElement("td");
            td.innerHTML = attr[i.value];
            tr.appendChild(td);
            // console.log(attr[i.value]);
        }
    })
}

const config1 = {
    parent: '#usersTable',
    columns: [
        {title: 'Имя', value: 'name'},
        {title: 'Фамилия', value: 'surname'},
        {title: 'Возраст', value: 'age'},
    ]
};

const users = [
    {id: 30050, name: 'Вася', surname: 'Пупкин', age: 12},
    {id: 30051, name: 'Геннадий', surname: 'Василенко', age: 15},
    {id: 30052, name: 'Елисей', surname: 'Евдокимов', age: 19},
    {id: 30053, name: 'Зинаида', surname: 'Федотова', age: 48},
    {id: 30054, name: 'Таисия', surname: 'Алексеева', age: 25},
    {id: 30055, name: 'Ярослав', surname: 'Миклашевский', age: 30},
    {id: 30055, name: 'Цветелина', surname: 'Щербак', age: 17},
    {id: 30055, name: 'Шушана', surname: 'Трясило', age: 35},
    {id: 30055, name: 'Захар', surname: 'Игнатьев', age: 29},
];

DataTable(config1, users);
