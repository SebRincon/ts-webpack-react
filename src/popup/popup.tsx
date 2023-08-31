import React from 'react'
import ReactDOM from 'react-dom'
import './popup.css'


const image = <img src="icon.png" />
const root = document.createElement('div')

const test = <img src="icon.png"/>


document.body.appendChild(root)
ReactDOM.render(image, root)

