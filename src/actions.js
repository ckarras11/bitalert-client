export const TOGGLE_MODAL = 'TOGGLE_MODAL';
export const toggleModal = (modalContent, alertPrice) => ({
    type: TOGGLE_MODAL,
    modalContent,
    alertPrice,
})

export const GET_PRICE = 'GET_PRICE';
export const getPrice = () => ({
    type: GET_PRICE,
})