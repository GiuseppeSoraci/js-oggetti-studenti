$(document).ready(function () {

    // Object student
    var student = {
        name: "Dwayne",
        surname: "Onfroy",
        age: "21",
    }

    for (var key in student) {
        console.log(key, student[key]);
    }

    // Array object students
    var students = [
        {
            name: "John",
            surname: "Lennon",
            age: 40,
        }, {
            name: "Kurt",
            surname: "Cobain",
            age: 27,
        }, {
            name: "Jimi",
            surname: "Hendrix",
            age: 27,
        }
    ]

    for (var i = 0; i < students.length; i++) {
        console.log(students[i].name, students[i].surname);
    }

    // User interaction
    var user = {
        name: prompt("Enter name"),
        surname: prompt("Enter surname"),
        age: parseInt(prompt("Enter age")),
    }

    students.push(user);
    console.log(students);

});