

CREATE TABLE EnrollmentStatus (
    StatusCode CHAR(1) PRIMARY KEY,
    StatusDescription VARCHAR(50)
);

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);

CREATE TABLE Instructors (
    InstructorID INT PRIMARY KEY,
    FirstName VARCHAR(50),
    LastName VARCHAR(50)
);

CREATE TABLE Courses (
    CourseNumber VARCHAR(10) PRIMARY KEY,
    CourseTitle VARCHAR(100)
);

CREATE TABLE Sections (
    SectionID INT IDENTITY(1,1) PRIMARY KEY,
    CourseNumber VARCHAR(10),
    Semester VARCHAR(20),
    StartDate DATE,
    EndDate DATE,
    Location VARCHAR(50),
    InstructorID INT
);

CREATE TABLE Enrollments (
    StudentID INT,
    SectionID INT,
    StatusCode CHAR(1),
    PRIMARY KEY (StudentID, SectionID)
);

INSERT INTO EnrollmentStatus VALUES ('E', 'Enrolled');
INSERT INTO EnrollmentStatus VALUES ('D', 'Dropped');
INSERT INTO EnrollmentStatus VALUES ('W', 'Withdrawn');

INSERT INTO Instructors VALUES (107, 'Marilyn', 'Frantzen');
INSERT INTO Instructors VALUES (101, 'Fernand', 'Hanks');
INSERT INTO Instructors VALUES (104, 'Gary', 'Pertez');
INSERT INTO Instructors VALUES (108, 'Charles', 'Lowry');

INSERT INTO Courses VALUES ('25', 'Intro to Programming');
INSERT INTO Courses VALUES ('204', 'Intro to SQL');

INSERT INTO Sections VALUES ('25', '2020_FA', '2020-08-15', '2020-12-09', 'M311', 107);
INSERT INTO Sections VALUES ('25', '2020_SP', '2020-02-01', '2020-05-24', 'L507', 101);
INSERT INTO Sections VALUES ('204', '2020_SP', '2020-02-01', '2020-05-24', 'L210', 104);
INSERT INTO Sections VALUES ('25', '2020_SU', '2020-06-10', '2020-08-09', 'L210', 108);

INSERT INTO Students VALUES (143, 'Gerard', 'Biers');
INSERT INTO Students VALUES (159, 'Thomas', 'Edwards');
INSERT INTO Students VALUES (237, 'Rommell', 'Frost');
INSERT INTO Students VALUES (238, 'Roger', 'Snow');
INSERT INTO Students VALUES (246, 'Meryl', 'Owens');
INSERT INTO Students VALUES (107, 'Catherine', 'Mierzwa');
INSERT INTO Students VALUES (121, 'Sean', 'Pineda');
INSERT INTO Students VALUES (122, 'Julita', 'Lippen');
INSERT INTO Students VALUES (123, 'Pierre', 'Radicola');
INSERT INTO Students VALUES (124, 'Daniel', 'Wicelinski');
INSERT INTO Students VALUES (254, 'Melvina', 'Chammnonkool');
INSERT INTO Students VALUES (256, 'Lorrane', 'Velasco');
INSERT INTO Students VALUES (227, 'Bessie', 'Heedles');
INSERT INTO Students VALUES (200, 'George', 'Kocka');
INSERT INTO Students VALUES (102, 'Fred', 'Crocitto');
INSERT INTO Students VALUES (108, 'Judy', 'Sethi');
INSERT INTO Students VALUES (211, 'Jenny', 'Goldsmith');
INSERT INTO Students VALUES (212, 'Barbara', 'Robichaud');
INSERT INTO Students VALUES (217, 'Jeffrey', 'Citron');
INSERT INTO Students VALUES (230, 'George', 'Kocka');

INSERT INTO Enrollments VALUES (143, 1, 'E');
INSERT INTO Enrollments VALUES (159, 1, 'E');
INSERT INTO Enrollments VALUES (237, 1, 'E');
INSERT INTO Enrollments VALUES (238, 1, 'E');
INSERT INTO Enrollments VALUES (246, 1, 'E');

INSERT INTO Enrollments VALUES (107, 2, 'E');
INSERT INTO Enrollments VALUES (121, 2, 'E');
INSERT INTO Enrollments VALUES (122, 2, 'E');
INSERT INTO Enrollments VALUES (123, 2, 'E');
INSERT INTO Enrollments VALUES (124, 2, 'D');

INSERT INTO Enrollments VALUES (254, 3, 'E');
INSERT INTO Enrollments VALUES (256, 3, 'W');
INSERT INTO Enrollments VALUES (227, 3, 'E');
INSERT INTO Enrollments VALUES (121, 3, 'E');
INSERT INTO Enrollments VALUES (143, 3, 'D');
INSERT INTO Enrollments VALUES (200, 3, 'E');

INSERT INTO Enrollments VALUES (102, 4, 'E');
INSERT INTO Enrollments VALUES (108, 4, 'E');
INSERT INTO Enrollments VALUES (211, 4, 'E');
INSERT INTO Enrollments VALUES (212, 4, 'E');
INSERT INTO Enrollments VALUES (217, 4, 'E');
INSERT INTO Enrollments VALUES (230, 4, 'E');


DROP TABLE Enrollments;
DROP TABLE Sections;
DROP TABLE Courses;
DROP TABLE Instructors;
DROP TABLE Students;
DROP TABLE EnrollmentStatus;