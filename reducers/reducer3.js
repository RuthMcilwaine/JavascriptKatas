// 3.Suppose we have the following state object:
const state = {
  '-sikdfj99s': {
    assignee: 1,
    createdDate: '01/01/2022',
    name: 'Take out the bins',
    isCompleted: false,
    labels: ['Thursdays', 'Recurring'],
  },
  '9jsfd9df9': {
    assignee: 17,
    createdDate: '01/01/2022',
    name: 'Drink some water',
    isCompleted: false,
    labels: [],
  },
  '2399c9': {
    assignee: 1,
    createdDate: '11/01/2022',
    name: 'Pick up Sandra from school',
    isCompleted: false,
    labels: [],
  },
  kishdfo9: {
    assignee: 22,
    createdDate: '14/01/2022',
    name: 'Text Dad',
    isCompleted: false,
    labels: [],
  },
};

// a) Write a function that can be used to add a label to a given todo.
// b) Use the function you've written to add a the label "Low Priority" to the todo "-sikdfj99s"

function addLabel(state, invoiceNo, text) {
  return {
    ...state,
    [invoiceNo]: {
      ...state[invoiceNo],
      labels: [...state[invoiceNo].labels, text],
    },
  };
}

console.log(addLabel(state, '-sikdfj99s', 'Low Priority'));
console.log(state);
