// 1. Reducer to update an fairly basic object
// Write a function that 'pays the invoice'. The domain considers that a paid invocie has an amountDue of
// 0.00 and should record a payment date.
//[action with type and payload object]

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
