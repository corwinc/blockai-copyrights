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

export function handleSearchInput(e) {
  return {
    type: 'ON_SEARCH_INPUT',
    input: e.target.value
  }
}

export function handleSearchSubmit() {
  return {
    type: 'ON_SEARCH_SUBMIT',
    activePage: 1,
  }
}
