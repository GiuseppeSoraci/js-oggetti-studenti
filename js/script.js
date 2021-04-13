/*
Descrizione
- Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età. 
Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
- Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
- Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
Una volta creato il nuovo oggetto inserirlo nell'array creato al punto 2 e mostrare alla fine il contenuto dell'array.
*/

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

});