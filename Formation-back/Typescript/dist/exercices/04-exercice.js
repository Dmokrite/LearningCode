"use strict";
class Logger {
}
class UserLogger extends Logger {
    log(user, action) {
        console.log(`L'utilisateur ${user.firstName} ${user.lastName} viens de ${action}`);
    }
}
class StudentLogger extends Logger {
    log(student, action) {
        console.log(`L'étudiant ${student.firstName} ${student.lastName} en cours de ${student.course} viens d'envoyé ${action}`);
    }
}
const userLogger = new UserLogger();
const studentLogger = new StudentLogger();
const user = { firstName: "John", lastName: "Doe" };
const student = { firstName: "John", lastName: "Doe", course: "Math" };
userLogger.log(user, "se connecté");
studentLogger.log(student, "un devoir");
