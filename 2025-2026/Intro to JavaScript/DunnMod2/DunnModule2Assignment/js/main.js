// Class notation
// - Syntactic sugar for constructor functions
class Student {
    static nextId = 1; // simple auto-incrementing ID

    constructor(fname, lname, program, edate) {
        this.id = Student.nextId++; // give each student a unique ID
        this.fname = fname;
        this.lname = lname;
        this.program = program;
        this.edate = edate;
    }

    alertInfo() {
        alert(`The student's name is ${this.fname} ${this.lname}. They enrolled on ${this.edate} to the ${this.program} with an ID of ${this.id}.`);
        console.log(this);
    }
}

// store all Student objects
const students = [];

// --- Simple centralized IPO logger ---
function logIPO(stage, data) {
    console.log(`IPO | ${stage}:`, data); // references for turning console logging into a function https://www.w3schools.com/js/js_string_templates.asp
}

// --- Main form submit handler ---
function addStudent() {
    // INPUT
    const fname = document.getElementById('student-first-name').value;
    const lname = document.getElementById('student-last-name').value;
    const program = document.getElementById('student-program').value;
    const edate = new Date(document.getElementById('student-edate').value).toLocaleDateString('en-US');
    logIPO('Input', { fname, lname, program, edate });

    // create student object
    const studentToAdd = new Student(fname, lname, program, edate);
    students.push(studentToAdd);
    logIPO('Process', { added: studentToAdd, total: students.length });

    // show the Enrolled Students card upon first addition
    if (students.length === 1) {
        const enrolledCard = document.getElementById('student-card2');
        enrolledCard.hidden = false;
    }

    // build card
    const studentEle = document.getElementById('students');
    const newStudentEle = document.createElement('div');
    newStudentEle.classList.add('student');
    newStudentEle.dataset.id = studentToAdd.id;

    // clicking the card shows info
    newStudentEle.onclick = function () {
        studentToAdd.alertInfo();
    };

    // card content + delete button
    newStudentEle.innerHTML = `
        <h3>${studentToAdd.fname} ${studentToAdd.lname}</h3>
        <em>${studentToAdd.program}</em><br/>
        <em>${studentToAdd.edate}</em>
        <div>
            <button type="button" class="delete-btn">Delete</button>
        </div>
    `;

    // delete button removes from array + DOM
    const deleteBtn = newStudentEle.querySelector('.delete-btn');
    deleteBtn.onclick = function (e) {
        e.stopPropagation(); // prevent alert from firing
        deleteStudent(studentToAdd.id);
    };

    studentEle.append(newStudentEle);
    logIPO('Output', { action: 'rendered student', total: students.length });

    // reset form
    document.getElementById('student-form').reset();
}

// --- Delete student by ID ---
function deleteStudent(id) {
    const i = students.findIndex(s => s.id === id);
    if (i !== -1) {
        students.splice(i, 1);
    }

    const card = document.querySelector(`.student[data-id="${id}"]`);
    if (card) card.remove();

    // hide the Enrolled Students card if empty again
    if (students.length === 0) {
        const enrolledCard = document.getElementById('student-card2');
        enrolledCard.hidden = true;
    }

    logIPO('Delete', { removedId: id, remaining: students.length });
}
