//Object constructor for creating student objects
function Student(firstName, lastName, program, currentSemester)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.program = program;
    this.currentSemester = currentSemester;
    this.createElement = function() {
        //Creating Elements
        const studentElement = document.createElement('div');
        //Adding classes to use for styling classList object and the .add() method
        studentElement.classList.add('student');

        //Adding the content with innerHTML and a template literal
        studentElement.innerHTML = 
        `
        <span class="student-name">${this.firstName} ${this.lastName}</span>
        <span class="student-program">${this.program}</span>
        <span class="student-semester">Semester ${this.currentSemester}</span>
        `

        //Return the one student element that we created. This element has all information for the current instance of the object.
        return studentElement;
    }
}

let allStudents = [
    new Student('Shawnee', 'Eden', 'Computer Support Specialist', 3),
    new Student('Micky', 'Frona', 'Data and Analytics Specialist', 1),
    new Student('Anwen', 'Giffard', 'Web and Software Developer', 4),
    new Student('Mark', 'Cai', 'Network Specialist', 2),
    new Student('Linus', 'Luana', 'Computer Support Specialist', 2),
    new Student('Linnet', 'Peder', 'Computer Support Specialist', 4),
    new Student('Anissa', 'Domnall', 'Network Specialist', 1),
    new Student('Marin', 'Shelly', 'Data and Analytics Specialist', 3),
    new Student('Krystine', 'Vin', 'Web and Software Developer', 1),
    new Student('Ainslee', 'Angie', 'Cybersecurity Specialist', 1),
    new Student('Pamela', 'Dwayne', 'Computer Support Specialist', 2),
    new Student('Julian', 'Arianne', 'Web and Software Developer', 3),
];


function exampleLoop() {

    //getting the result element to use later
    const resultElement = document.getElementById('example-result');
    //since we are adding html inside of this, I want to clear out the html so it is not holding any old values
    resultElement.innerHTML = '';


    //iterate through each student using a for loop
    //--initialization statement: set up a variable to use for the current index. This will start as 0 and go up
    //--test expression: test to see if the counter has reached the size of the array yet
    //--update statement: increment the counter by one to match the index

    for(let currentStudentIndex = 0; currentStudentIndex < allStudents.length; currentStudentIndex++)
    {
        //you can get the current student with by using the current index: allStudents[currentStudentIndex]
        //you can access properties and methods using the member access operator of . (period): allStudents[currentStudentIndex].firstName;

        //since we made a method (function in an object) to create a student element, we can call that to display a student
        const currentStudentElement = allStudents[currentStudentIndex].createElement();

        //You can then append this element to any other element. In this case, the result which we already got
        resultElement.appendChild(currentStudentElement);
    }

}





//TRY LOOPING AN OBJECT
function firstLoop() {

    //getting the result element to use later
    const firstLoopResultElement = document.getElementById('first-loop-result');
    firstLoopResultElement.innerHTML = '';

    for(let currentStudentIndex = 0; currentStudentIndex < allStudents.length; currentStudentIndex++)
    {

        //since we made a method (function in an object) to create a student element, we can call that to display a student
        const currentStudentElement = allStudents[currentStudentIndex].createElement();

        //You can then append this element to any other element. In this case, the result which we already got
        firstLoopResultElement.appendChild(currentStudentElement);
    }

}


//TRY LOOPING IT BACKWARDS
function secondLoop() {

    //getting the result element to use later
    const secondLoopResultElement = document.getElementById('second-loop-result');
    secondLoopResultElement.innerHTML = '';

    for(let currentStudentIndex = allStudents.length - 1; currentStudentIndex > 0; currentStudentIndex--)
    {

        //since we made a method (function in an object) to create a student element, we can call that to display a student
        const currentStudentElement = allStudents[currentStudentIndex].createElement();

        //You can then append this element to any other element. In this case, the result which we already got
        secondLoopResultElement.appendChild(currentStudentElement);
    }

}





//TRY WITH ANOTHER LOOP
function thirdLoop() {

    //getting the result element to use later
    const thirdLoopResultElement = document.getElementById('third-loop-result');
    thirdLoopResultElement.innerHTML = '';

    let currentStudentIndex = 0;
    while(currentStudentIndex < allStudents.length)
    {

        //since we made a method (function in an object) to create a student element, we can call that to display a student
        const currentStudentElement = allStudents[currentStudentIndex].createElement();

        //You can then append this element to any other element. In this case, the result which we already got
        thirdLoopResultElement.appendChild(currentStudentElement);
        
        currentStudentIndex++;
    }

}






function filteringLoop() {
    let resultElement = document.getElementById('sorting-result');
    resultElement.innerHTML = '';

    const selectedProgram = document.getElementById('student-program').value;
    const selectedSemester = Number(document.getElementById('student-semester').value);
    
    // Loop through all students in the array
    for (let currentStudentIndex = 0; currentStudentIndex < allStudents.length; currentStudentIndex++) 
    {
        const student = allStudents[currentStudentIndex];
        
        // Single if statement that handles all filter combinations
        if ((selectedSemester === 0 || student.currentSemester === selectedSemester) && 
            (selectedProgram === 'Any' || student.program === selectedProgram))
        {
            const currentStudentElement = student.createElement();
            resultElement.appendChild(currentStudentElement);
        }
    }
}
