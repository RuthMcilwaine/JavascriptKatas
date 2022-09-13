//4.Suppose we have the following state object:
const state = {
  s9asgv1945: {
    description: 'Beer bottles',
    supplierId: '',
    quanityOnHand: 10,
    onOrder: 0,
    commited: 0,
    createdDate: '01/01/2022',
    isBought: true,
    isSold: false,
    buyingDetails: {
      accountId: 1,
      taxCodeId: 10,
      expenseAccountId: 99,
      unitOfMeasure: '',
      numberItemsPerBuyingUnit: 6,
      standardBuyPrice: 10.0,
    },
    sellingDetails: null,
  },
  b8dsgkopa: {
    description: 'Chardonnday',
    supplierId: 'SKU-113',
    quanityOnHand: 15,
    onOrder: 85,
    commited: 10,
    createdDate: '01/01/2022',
    isBought: true,
    isSold: true,
    buyingDetails: {
      accountId: 1,
      taxCodeId: 10,
      expenseAccountId: 99,
      unitOfMeasure: '',
      numberItemsPerBuyingUnit: 6,
      standardBuyPrice: 10.0,
    },
    sellingDetails: {
      accountId: 8,
      taxCodeId: 11,
      incomeAccountId: 91,
      standardSellPrice: 35.0,
    },
  },
};

// a) write a function that can be used to update the standard buy price of a given item.
// b) use that function to update the item 's9asgv1945' with a new buy price of 20.00

function updatePrice(state, invoiceNo, standardBuyPrice) {
  return {
    ...state,
    [invoiceNo]: {
      ...state[invoiceNo],

      buyingDetails: {
        ...state[invoiceNo].buyingDetails,
        standardBuyPrice,
      },
    },
  };
}

console.log(updatePrice(state, 's9asgv1945', 20.0));
