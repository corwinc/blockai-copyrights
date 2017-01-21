const initialState = {
  copyrights: ['test'],
  activePage: 1,
  total: null,
  searchInput: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'GET_COPYRIGHTS_SUCCESS':
      return Object.assign({}, state, {
        copyrights: action.copyrights
      })
  	case 'ON_PAGE_SELECT':
      return Object.assign({}, state, {
        activePage: action.page
      })
  	case 'ON_SEARCH_INPUT':
      return Object.assign({}, state, {
        searchInput: action.input
      })
  	case 'ON_SEARCH_SUBMIT':
      return Object.assign({}, state, {
        activePage: action.activePage
      })
    default:
      return state
  }
}

