import React from 'react'
import ReactDOM from 'react-dom'
const test = React.createElement('p', null, 'Hello Worlds')
const root = document.createElement('div')

document.body.appendChild(root)
ReactDOM.render(test, root)
