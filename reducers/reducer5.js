// 5.Suppose we have the following state object:

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
};

// a) write a function that will can be used to remove a given label from a given todo.
// b) use that function to remove the label "Low Priority" from todo 'ssdf77'.
// c) use that function to remove the label "Low Priority" from todo '0nf984j0d'.
// d) use that funciton to remove the label "Recurring" from todo '0nf984j0d'.
// array can have many labels
// no two labels can be the same

const removeLabel = (state, invoiceNo, label) => ({
  // ...state,
  [invoiceNo]: {
    ...state[invoiceNo],
    labels: [...state[invoiceNo].labels.filter((l) => l !== label)],
  },
});

// console.log(removeLabel(state, 'ssdf77', 'Low Priority'));
console.log(removeLabel(state, '0nf984j0d', 'Recurring'));
