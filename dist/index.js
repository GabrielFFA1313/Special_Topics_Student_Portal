"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStudentStatusLabel = getStudentStatusLabel;
//Part 5
function formatStudent(student) {
    return `${student.id} - ${student.name} (${student.status})`;
}
// Sample for Student
const sampleStudent = {
    id: 3,
    name: "Gabriel Francis Araneta",
    email: "s.araneta.gabrielfrancis@cmu.edu.ph",
    status: "active",
};
// part 6
// Usage of the API
console.log(formatStudent(sampleStudent));
const singleResponse = {
    success: true,
    data: sampleStudent,
};
const listResponse = {
    success: true,
    data: [
        sampleStudent,
        {
            id: 2,
            name: "Maria Santos",
            email: "maria.santos@example.edu",
            status: "inactive",
        },
    ],
};
console.log(singleResponse);
console.log(listResponse);
// Part 7
function isStudent(value) {
    if (typeof value !== "object" || value === null) {
        return false;
    }
    const obj = value;
    return (typeof obj.id === "number" &&
        typeof obj.name === "string" &&
        typeof obj.email === "string" &&
        (obj.status === "active" || obj.status === "inactive"));
}
const validCandidate = {
    id: 1,
    name: "Ana Reyes",
    email: "ana.reyes@example.edu",
    status: "active",
};
const invalidId = {
    id: "three", // wrong type: should be number
    name: "Carlos Lim",
    email: "carlos.lim@example.edu",
    status: "active",
};
const missingName = {
    id: 4,
    email: "missing.name@example.edu",
    status: "inactive",
    // name is missing entirely
};
console.log("Valid object:", isStudent(validCandidate)); // true
console.log("Invalid id:", isStudent(invalidId)); // false
console.log("Missing name:", isStudent(missingName)); // false
function getStudentStatusLabel(status) {
    if (status === "active") {
        return "Active Student";
    }
    return "Inactive Student";
}
console.log(getStudentStatusLabel("active")); // "Active Student"
console.log(getStudentStatusLabel("inactive")); // "Inactive Student"
// console.log(getStudentStatusLabel("suspended"));  // "Unknown Status" (safe handling)
//# sourceMappingURL=index.js.map