export function getCopyrightsSuccess(data, total) {
  return {
    type: 'GET_COPYRIGHTS_SUCCESS',
    data,
    total,
  }
}

export function onPageSelect(page) {
  return {
    type: 'ON_PAGE_SELECT',
    page,
  }
}

export function handleSearchInput(input) {
  return {
    type: 'HANDLE_SEARCH_INPUT',
    input,
  }
}

export function handleSearchSubmit() {
  return {
    type: 'HANDLE_SEARCH_SUBMIT',
    activePage: 1,
  }
}
