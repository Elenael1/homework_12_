const workers = [
    { name: "A", salary: 5000 },
    { name: "B", salary: 3000 },
    { name: "C", salary: 2000 },
    { name: "E", salary: 6000 },
    { name: "F", salary: 10000, grade: "top worker" },
    { name: "G", salary: 7000 },

];

const MIN_SALARY = 5000;
const TOP_WORKER = "F"


const highSalaryFilter = workers.filter(({ salary }) => salary >= MIN_SALARY);
const findTopWorker = workers.find(({ name }) => name === "F");

console.log('highSalaryFilter', highSalaryFilter)
console.log('findTopWorker', findTopWorker)