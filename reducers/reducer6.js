// 6. Suppose we have the following state object:
const state = {
  '0nf984j0d': {
    assignee: 1,
    createdDate: '01/01/2022',
    name: 'Take out the bins',
    isCompleted: false,
    labels: ['Thursdays', 'Recurring', 'Low Priority'],
  },
  ssdf77: {
    assignee: 17,
    createdDate: '01/01/2022',
    name: 'Drink some water',
    isCompleted: false,
    labels: ['Low Priority'],
  },
  xxsdtf5: {
    assignee: 1,
    createdDate: '11/01/2022',
    name: 'Pick up Sandra from school',
    isCompleted: false,
    labels: [],
  },
  ls0972: {
    assignee: 22,
    createdDate: '14/01/2022',
    name: 'Text Dad',
    isCompleted: false,
    labels: [],
  },
  '-sikdfj99s': {
    assignee: 1,
    createdDate: '01/01/2022',
    name: 'Arrange coffee with Tom',
    isCompleted: false,
    labels: ['Thursdays', 'Recurring'],
  },
  '9jsfd9df9': {
    assignee: 17,
    createdDate: '01/01/2022',
    name: 'Washing',
    isCompleted: false,
    labels: [],
  },
  '2399c9': {
    assignee: 1,
    createdDate: '11/01/2022',
    name: 'Think of a new chapter',
    isCompleted: false,
    labels: [],
  },
  kishdfo9: {
    assignee: 22,
    createdDate: '14/01/2022',
    name: 'Text Mum',
    isCompleted: false,
    labels: [],
  },
};

// a) write a function that can delete a given todo
// b) use the function to delete todo 2399c9
// c) use the function to delete todo xxsdtf5
const removeTodo = (state, todoNo) => ({
  ...state,
  [todoNo]: delete state[todoNo],
});

//console.log(removeTodo(state, '2399c9'));
console.log(removeTodo(state, 'xxsdtf5'));
