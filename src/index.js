import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { store } from './store/store'
import reportWebVitals from './reportWebVitals'

import './styles/global.css'
import './styles/main.css'

import Navbar from './components/navbar'
import Home from './components/home'
import Footer from './components/footer'

ReactDOM.render(
    <Provider store={store}>
        <div className="wrapper">
            <Navbar />
            <Home />
        </div>
        <Footer />
        <div className="circle1"></div>
        <div className="circle2"></div>
    </Provider>,
    document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
