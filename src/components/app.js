import React from 'react'
// import TitleBar from "../containers/title-bar.js"
import UpdateButton from "../containers/update-button.js"

const App = () => (
  <div id="container">
    {/* <TitleBar /> */}
    <UpdateButton btn_text="-" />
    <UpdateButton btn_text="+" />
  </div>
)

export default App