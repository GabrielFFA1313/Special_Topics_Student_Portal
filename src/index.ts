//Part 5
// Student Model
interface Student {
  id: number;
  name: string;
  email: string;
  status: "active" | "inactive";
}

// part 6
// API
interface ApiResponse<T> {
  success: boolean;
  data: T;
}

//Part 5
function formatStudent(student: Student): string {
  return `${student.id} - ${student.name} (${student.status})`;
}
// Sample for Student
const sampleStudent: Student = {
  id: 3,
  name: "Gabriel Francis Araneta",
  email: "s.araneta.gabrielfrancis@cmu.edu.ph",
  status: "active"
};

// part 6
// Usage of the API
console.log(formatStudent(sampleStudent));

const singleResponse: ApiResponse<Student> = {
  success: true,
  data: sampleStudent
};

const listResponse: ApiResponse<Student[]> = {
  success: true,
  data: [
    sampleStudent,
    { id: 2, name: "Maria Santos", email: "maria.santos@example.edu", status: "inactive" }
  ]
};

console.log(singleResponse);
console.log(listResponse);

// Part 7
function isStudent(value: unknown): value is Student {
  if (typeof value !== "object" || value === null) {
    return false;
  }

  const obj = value as Record<string, unknown>;

  return (
    typeof obj.id === "number" &&
    typeof obj.name === "string" &&
    typeof obj.email === "string" &&
    (obj.status === "active" || obj.status === "inactive")
  );
}
const validCandidate: unknown = {
  id: 1,
  name: "Ana Reyes",
  email: "ana.reyes@example.edu",
  status: "active",
};

const invalidId: unknown = {
  id: "three", // wrong type: should be number
  name: "Carlos Lim",
  email: "carlos.lim@example.edu",
  status: "active",
};

const missingName: unknown = {
  id: 4,
  email: "missing.name@example.edu",
  status: "inactive",
  // name is missing entirely
};

console.log("Valid object:", isStudent(validCandidate)); // true
console.log("Invalid id:", isStudent(invalidId)); // false
console.log("Missing name:", isStudent(missingName)); // false

// Part 8
