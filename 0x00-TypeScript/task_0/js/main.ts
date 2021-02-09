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

const table:HTMLTableElement = document.createElement('table')
studentsList.forEach((student) => {
    const row:HTMLTableRowElement = table.insertRow()
    for (const [k, v] of Object.entries(student)) {
        if (k === 'firstName' || k === 'location') {
            const cell:HTMLTableCellElement = row.insertCell();
            const text:Text = document.createTextNode(v);
            cell.appendChild(text);
        }
    }
})
document.body.appendChild(table)
