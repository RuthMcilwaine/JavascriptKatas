const initialState = {
  isPaid: false,
  amountDue: 30.0,
  createdDate: '01/01/2022',
  payedDate: null,
};

const actions = {
  type: 'payInvoice',
};

const invoiceReducer = (state, action) => {
  switch (action.type) {
    case 'payInvoice':
      return {
        ...state,
        isPaid: true,
        amountDue: 0.0,
        createdDate: '01/01/2022',
        payedDate: new Date().toDateString(),
      };
    default:
      return state;
  }
};

console.log(invoiceReducer(initialState, actions));
