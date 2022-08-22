// Let's suppose we're building a todo app. Let's suppose todo's have:
// - a created date
// - a description
// - an id
// - a completed status
// - they can have some labels
// - an assignee

// 1. Define how you would like to represent a todo in javascript.
// Draft out an example as the answer to this question, along with any thoughts / assumptions you're making to explain your answer

var todo = {
  createDate: '01/01/2022',
  todoId: 1,
  todoLabel: [],
  todoItem: 'take out bins',
  todoDescription: '',
  todoCompleted: false,
  anAssignee: 'Ruth',
};

// 2. Write a function that creates a todo for you.
function createTodo({ createDate, todoItem, todoDescription, anAssignee }) {
  return {
    createDate: createDate,
    todoId: Math.floor(Math.random() * 1000) + 1,
    todoLabel: [],
    todoItem: todoItem,
    todoDescription: todoDescription,
    todoCompleted: false,
    anAssignee: anAssignee,
  };
}

// 3. Use the function from (2) to build a list of ~10 todos

var todoList = [];
const todo1 = {
  createDate: '01/01/2022',
  todoId: null,
  todoLabel: '',
  todoItem: 'take out bins',
  todoDescription: '',
  todoCompleted: false,
  anAssignee: 'Ruth',
};
var result = createTodo(todo1);
todoList.push(result);

const todo2 = {
  createDate: '03/01/2022',
  todoId: null,
  todoLabel: '',
  todoItem: 'laundry',
  todoDescription: 'darks and lights',
  todoCompleted: false,
  anAssignee: '',
};
var result = createTodo(todo2);
todoList.push(result);

const todo3 = {
  createDate: '05/01/2022',
  todoId: null,
  todoLabel: '',
  todoItem: 'dishwasher',
  todoDescription: '',
  todoCompleted: false,
  anAssignee: '',
};
var result = createTodo(todo3);
todoList.push(result);

const todo4 = {
  createDate: '07/01/2022',
  todoId: null,
  todoLabel: '',
  todoItem: 'dinner',
  todoDescription: '',
  todoCompleted: false,
  anAssignee: '',
};
var result = createTodo(todo4);
todoList.push(result);

var todo5 = {
  createDate: '09/01/2022',
  todoId: null,
  todoLabel: '',
  todoItem: 'school run',
  todoDescription: '',
  todoCompleted: false,
  anAssignee: '',
};
var result = createTodo(todo5);
todoList.push(result);
//console.log(todoList);

// 4. Write a function that could ensure every todo in your list of ~10 todos describes itself using 'Pascal Case'
const toPascalCase = todoList.map(
  ({
    createDate,
    todoId,
    todoLabel,
    todoItem,
    todoDescription,
    todoCompleted,
    anAssignee,
  }) => ({
    CreateDate: createDate,
    TodoId: todoId,
    TodoLabel: todoLabel,
    TodoItem: todoItem,
    TodoDescription: todoDescription,
    TodoCompleted: todoCompleted,
    AnAssignee: anAssignee,
  })
);
//console.log(toPascalCase);

// 5. Sort todos by Alphabetical description order

todoList.sort((a, b) => {
  if (a.todoItem < b.todoItem) {
    return -1;
  }
  if (a.todoItem > b.todoItem) {
    return 1;
  }
  return 0;
});

var result = todoList.sort();
//console.log(result);

// 6. Write a function to search for todos description description based on a search term. Document any assumptions you make

const searchObject = todoList.find(
  (todo) => todo.todoDescription == 'darks and lights'
);

//console.log(`${searchObject.todoItem}`);
