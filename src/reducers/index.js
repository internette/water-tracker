import { combineReducers } from 'redux'
import cups from './water'
// import latestStats from './get_latest'
// import menuStatus from './menu'

const waterTrackerApp = combineReducers({
  cups
})

export default waterTrackerApp