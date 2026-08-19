"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function formatStudent(student) {
    return `${student.id} - ${student.name} (${student.status})`;
}
const sampleStudent = {
    id: 1,
    name: "Juan Dela Cruz",
    email: "juan.delacruz@example.edu",
    status: "active"
};
console.log(formatStudent(sampleStudent));
//# sourceMappingURL=index.js.map