const cup = (state = {}, action) => {
  switch (action.type) {
    case 'init':
      return {
        id: action.lastId,
        title: action.title,
        details: action.details,
        complete: action.complete
      }
    default:
      return state
  }
}

const cups = (state = [], action) => {
  switch (action.type) {
    case 'init':
      console.log(action)
      // action.todoItems.forEach(t => {
      //   const item = todo(t, action.todoItems)
      //   const item_state = state.filter((itm) => {
      //     return itm.id === item.id ? itm : null
      //   })
      //   item['editable'] = false
      //   item['expanded'] = item_state.hasOwnProperty('expanded') ? item_state.expanded : false
      //   return item
      // })
      return action.cups
    default:
      return state
  }
}

export default cups