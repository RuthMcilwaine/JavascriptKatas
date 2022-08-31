// Activity 3: Reducer functions

// Pre-requisites:
// - all functions should be passed in a state object, they don't assume the current state.
// - all functions must not mutate the original 'state' object. 

//[reducer function always has to return a new state object. spread operator to create a new state object from the incoming state and the part we want to change. This way we ensure that the other properties that aren't touch from the incoming state object are still kept intact for the new state object.]

// - all functions should return an object that represents the new state
// - these returned objects will be what is checked for correctness
// - these functions are deterministic and good candidates for unit testing if you wanted to challenge yourself.

// 1. Reducer to update an fairly basic object

// Suppose we have this object:
const initialState = ({
	1: {
		isPaid: false,
		amountDue: 30.00,
		createdDate: '01/01/2022',
		payedDate: null
	},
});

// isPaid: false,
// amountDue: amountDue === 0,
// createdDate: '01/01/2022',
// payedDate: Date.now,

// Write a function that 'pays the invoice'. The domain considers that a paid invocie has an amountDue of 0.00 and should record a payment date. 
//[action with type and payload object]

// -=: -------------------------------------------------------------------------------------------------------------------------- :=-

// 2.
// Suppose we have the following state object:
{
	's9asgv1945': {
		isPaid: false,
		memo: ''
		amountDue: 30.00
		createdDate: '01/01/2022',
		payedDate: null
	},
	'b8dsgkopa': {
		isPaid: true,
		memo: ''
		amountDue: 0.00,
		createdDate: '30/12/2021',
		payedDate: '1/1/2022'
	}
}

// a) write a function that can be used to update the amount due for a given invoice
// b) use the function to update the memo for 's9asgv1945' invoice to 'overdue by 3 days'
// c) use the function to update the memo for 'b8dsgkopa' invoice to 'paid on time :)'

// -=: -------------------------------------------------------------------------------------------------------------------------- :=-

// 3.
// Suppose we have the following state object:
{
	'-sikdfj99s': {
		assignee: 1,
		createdDate: '01/01/2022',
		name: 'Take out the bins',
		isCompleted: false,
		labels: ["Thursdays", "Recurring"]
	},
	'9jsfd9df9': {
		assignee: 17,
		createdDate: '01/01/2022',
		name: 'Drink some water',
		isCompleted: false,
		labels: []
	},
	'2399c9': {
		assignee: 1,
		createdDate: '11/01/2022',
		name: 'Pick up Sandra from school',
		isCompleted: false,
		labels: []
	},
	'kishdfo9': {
		assignee: 22,
		createdDate: '14/01/2022',
		name: 'Text Dad',
		isCompleted: false,
		labels: []
	},
}

// a) Write a function that can be used to add a label to a given todo.
// b) Use the function you've written to add a the label "Low Priority" to the todo "-sikdfj99s"

// -=: -------------------------------------------------------------------------------------------------------------------------- :=-

4.
Suppose we have the following state object:
{
	's9asgv1945': {
		description: "Beer bottles",
		supplierId: ""
		quanityOnHand: 10,
		onOrder: 0,
		commited: 0
		createdDate: '01/01/2022',
		isBought: true,
		isSold: false,
		buyingDetails: {
			accountId: 1,
			taxCodeId: 10,
			expenseAccountId: 99,
			unitOfMeasure: "",
			numberItemsPerBuyingUnit: 6
			standardBuyPrice: 10.00
		}
		sellingDetails: null
	},
	'b8dsgkopa': {
		description: "Chardonnday",
		supplierId: "SKU-113"
		quanityOnHand: 15,
		onOrder: 85,
		commited: 10
		createdDate: '01/01/2022',
		isBought: true,
		isSold: true,
		buyingDetails: {
			accountId: 1,
			taxCodeId: 10,
			expenseAccountId: 99,
			unitOfMeasure: "",
			numberItemsPerBuyingUnit: 6
			standardBuyPrice: 10.00
		}
		sellingDetails: {
			accountId: 8,
			taxCodeId: 11,
			incomeAccountId: 91,
			standardSellPrice: 35.00
		}
	}
}

// a) write a function that can be used to update the standard buy price of a given item.
// b) use that function to update the item 's9asgv1945' with a new buy price of 20.00

// -=: -------------------------------------------------------------------------------------------------------------------------- :=-

// 5)
// Suppose we have the following state object:
{
	'0nf984j0d': {
		assignee: 1,
		createdDate: '01/01/2022',
		name: 'Take out the bins',
		isCompleted: false,
		labels: ["Thursdays", "Recurring", "Low Priority"]
	},
	'ssdf77': {
		assignee: 17,
		createdDate: '01/01/2022',
		name: 'Drink some water',
		isCompleted: false,
		labels: ["Low Priority"]
	},
	'xxsdtf5': {
		assignee: 1,
		createdDate: '11/01/2022',
		name: 'Pick up Sandra from school',
		isCompleted: false,
		labels: []
	},
	'ls0972': {
		assignee: 22,
		createdDate: '14/01/2022',
		name: 'Text Dad',
		isCompleted: false,
		labels: []
	},
}

// a) write a function that will can be used to remove a given label from a given todo.
// b) use that function to remove the label "Low Priority" from todo 'ssdf77'.
// c) use that function to remove the label "Low Priority" from todo '0nf984j0d'.

// -=: -------------------------------------------------------------------------------------------------------------------------- :=-

// 6)
// Suppose we have the following state object:
{
	'0nf984j0d': {
		assignee: 1,
		createdDate: '01/01/2022',
		name: 'Take out the bins',
		isCompleted: false,
		labels: ["Thursdays", "Recurring", "Low Priority"]
	},
	'ssdf77': {
		assignee: 17,
		createdDate: '01/01/2022',
		name: 'Drink some water',
		isCompleted: false,
		labels: ["Low Priority"]
	},
	'xxsdtf5': {
		assignee: 1,
		createdDate: '11/01/2022',
		name: 'Pick up Sandra from school',
		isCompleted: false,
		labels: []
	},
	'ls0972': {
		assignee: 22,
		createdDate: '14/01/2022',
		name: 'Text Dad',
		isCompleted: false,
		labels: []
	},
	'-sikdfj99s': {
		assignee: 1,
		createdDate: '01/01/2022',
		name: 'Arrange coffee with Tom',
		isCompleted: false,
		labels: ["Thursdays", "Recurring"]
	},
	'9jsfd9df9': {
		assignee: 17,
		createdDate: '01/01/2022',
		name: 'Washing',
		isCompleted: false,
		labels: []
	},
	'2399c9': {
		assignee: 1,
		createdDate: '11/01/2022',
		name: 'Think of a new chapter',
		isCompleted: false,
		labels: []
	},
	'kishdfo9': {
		assignee: 22,
		createdDate: '14/01/2022',
		name: 'Text Mum',
		isCompleted: false,
		labels: []
	},
}

// a) write a function that can delete a given todo
// b) use the function to delete todo 2399c9
// c) use the function to delete todo xxsdtf5
