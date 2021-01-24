import React from 'react'
import { Route,Link } from 'react-router-dom'
import Home from '../components/home';
import Users from '../components/users'
import UserChat from "../components/userChat"
import '../styles/nav.scss'

function Navigation() {
    return (
        <div>
            <div className="nav">
                <h2>Dct-ChatManager</h2>
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/users"><li>Students</li></Link>
                </ul>
            </div>
            <div>
                <Route exact path="/" component={Home} />
                <Route exact path="/users" component={Users} />
                <Route path="/users/:id" component={UserChat} />
            </div>
        </div>
    )
}

export default Navigation
