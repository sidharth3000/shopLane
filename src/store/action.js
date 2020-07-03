export const SIDE_DRAWER_CLOSE = 'SIDE_DRAWER_CLOSE';
export const SIDE_DRAWER_OPEN = 'SIDE_DRAWER_OPEN';

export const SHOW_MODAL = 'SHOW_MODAL'
export const HIDE_MODAL = 'HIDE_MODAL';

export const UPDATE_FNAME = 'UPDATE_FNAME'
export const UPDATE_LNAME = 'UPDATE_LNAME'
export const UPDATE_ADDRESS = 'UPDATE_ADDRESS'

export const sideDrawerClose = () => {
	return{
		type: SIDE_DRAWER_CLOSE
	}
}

export const sideDrawerOpen = () => {
	return{
		type: SIDE_DRAWER_OPEN
	}
}

export const showModal = (name, image, price) => {

	return{
		type: SHOW_MODAL,
		name:name,
		image:image,
		price: price
	}
}

export const hideModal = () => {
	return{
		type: HIDE_MODAL
	}
}

export const updateFName = (value) => {
	return{
		type: UPDATE_FNAME,
		Fvalue: value
	}
}

export const updateLName = (value) => {
	return{
		type: UPDATE_LNAME,
		Lvalue: value
	}
}

export const updateAddress = (value) => {
	return{
		type: UPDATE_ADDRESS,
		Avalue: value
	}
}

