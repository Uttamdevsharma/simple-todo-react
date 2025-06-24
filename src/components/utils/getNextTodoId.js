
export default function getNextTodoId(todos){

    const maxId = todos.reduce((maxId , todo) => Math.max(maxId,todo.id),0)

    return maxId + 1;


}