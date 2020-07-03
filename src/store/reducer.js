import * as actionTypes from './action';

const initialState = {
	showSideDrawer : false,
	showModal : false,
	i:0,
	image:null,
	name:null,
	price: null,	
	firstName: null,
	lastName: null,
	address: null,
	deliveryMethod: null
	
}

const reducer = (state = initialState, action) => {
	switch(action.type) {
		case actionTypes.SIDE_DRAWER_CLOSE:
		return {
			...state,
			showSideDrawer:false
		}

		case actionTypes.SIDE_DRAWER_OPEN:
		return{
			...state,
			showSideDrawer:true

		}

		case actionTypes.SHOW_MODAL:
		return{
			...state,
			showModal: true,
			name: action.name,
			image: action.image,
			price: action.price
			
		}

		case actionTypes.HIDE_MODAL:
		return{
			...state,
			showModal: false
		}

		case actionTypes.UPDATE_FNAME:
		return{
			...state,
			firstName: action.Fvalue
		}

		case actionTypes.UPDATE_LNAME:
		return{
			...state,
			lastName: action.Lvalue
		}

		case actionTypes.UPDATE_ADDRESS:
		return{
			...state,
			address: action.Avalue
		}

		default:
			return state;
	}
};

export default reducer;