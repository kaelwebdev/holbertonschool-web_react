interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
}

const student1: Student = {
    firstName: 'Carlos',
    lastName: 'Cortez',
    age: 25,
    location: 'Colombia'
}

const student2: Student = {
    firstName: 'Pepito',
    lastName: 'Perez',
    age: 30,
    location: 'Francia'
}

const studentsList:Array<Student> = [
    student1,
    student2
]

const table:HTMLTableElement = document.createElement('table');
const thead: HTMLTableSectionElement = document.createElement('thead');
const tbody: HTMLTableSectionElement = document.createElement('tbody');
const tr_thead: HTMLTableRowElement = document.createElement('tr');
const td1_tr_thead: HTMLTableCellElement = document.createElement('td');
const td2_tr_thead: HTMLTableCellElement = document.createElement('td');

td1_tr_thead.innerHTML = 'firstName';
td2_tr_thead.innerHTML = 'location';

table.append(thead);
table.append(tbody);
thead.append(tr_thead);
tr_thead.append(td1_tr_thead);
tr_thead.append(td2_tr_thead);

studentsList.forEach((student) => {
    const row:HTMLTableRowElement = table.insertRow();
    tbody.append(row);
    for (const [k, v] of Object.entries(student)) {
        if (k === 'firstName' || k === 'location') {
            const cell:HTMLTableCellElement = row.insertCell();
            const text:Text = document.createTextNode(v);
            cell.appendChild(text);
        }
    }
})
document.body.appendChild(table)
