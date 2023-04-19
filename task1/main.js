function solveTasks(array) {
    const countTask = array[0].length;
    const countStudent = array.length;
    let resultStudentTask = Array(countStudent).fill(0);
    let rateTask = Array(countTask).fill(0);
    for (let i = 0; i < array[0].length - 1; i++) {
        for (let j = 0; j < countTask; j++) {
            rateTask[j] += array[i][j];
        }
    }
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < countTask; j++) {
            resultStudentTask[i] += array[i][j] * (countStudent + 1 - rateTask[j]);
        }
    }
    return resultStudentTask;
}

const itemArray = [[1, 0, 1, 1], [0, 0, 0, 1], [1, 1, 1, 1], [0, 0, 1, 0], [1, 0, 1, 0]];

console.log(solveTasks(itemArray));