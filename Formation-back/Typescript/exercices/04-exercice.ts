abstract class Logger<T> {
    abstract log(obj: T, action: string): void;
}

class UserLogger extends Logger<{ firstName: string; lastName: string }> {
    log(user: { firstName: string; lastName: string }, action: string): void {
        console.log(`L'utilisateur ${user.firstName} ${user.lastName} viens de ${action}`);
    }
}

class StudentLogger extends Logger<{ firstName: string; lastName: string; course: string }> {
    log(student: { firstName: string; lastName: string; course: string }, action: string): void {
        console.log(`L'étudiant ${student.firstName} ${student.lastName} en cours de ${student.course} viens d'envoyé ${action}`);
    }
}

const userLogger = new UserLogger();
const studentLogger = new StudentLogger();

const user = { firstName: "John", lastName: "Doe" };
const student = { firstName: "John", lastName: "Doe", course: "Math" };

userLogger.log(user, "se connecté");
studentLogger.log(student, "un devoir");
