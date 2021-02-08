interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
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

const studentsList = [
    student1,
    student2
]

const table = document.createElement('table')
studentsList.forEach((student) => {
    let row = table.insertRow()
    for (let [k, v] of Object.entries(student)) {
        if (k === 'firstName' || k === 'location') {
            let cell = row.insertCell()
            let text = document.createTextNode(v)
            cell.appendChild(text)
        }
    }
})
document.body.appendChild(table)
