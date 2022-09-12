// 2; Suppose we have the following state object:
// a) write a function that can be used to update the amount due for a given invoice
// b) use the function to update the memo for 's9asgv1945' invoice to 'overdue by 3 days'
// c) use the function to update the memo for 'b8dsgkopa' invoice to 'paid on time :)'

const initialState = {
  s9asgv1945: {
    isPaid: false,
    memo: '',
    amountDue: 30.0,
    createdDate: '01/01/2022',
    paidDate: null,
  },
  b8dsgkopa: {
    isPaid: true,
    memo: '',
    amountDue: 0.0,
    createdDate: '30/12/2021',
    paidDate: '1/1/2022',
  },
};

function updateMemo(invoiceNo, memo) {
  return {
    ...initialState,
    [invoiceNo]: {
      ...initialState[invoiceNo],
      memo,
    },
  };
}

console.log(updateMemo('s9asgv1945', 'overdue by 3 days'));
//console.log(updateMemo(initialState, 'b8dsgkopa', 'paid on time :'));
