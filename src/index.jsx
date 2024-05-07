/* @refresh reload */
import { render } from 'solid-js/web'
import { Router, Route } from "@solidjs/router"

// import './index.css'
import News from './news'
import Single from './single'

import Layout from './layout'

function App() {
    return (
        <>
            <Router root={Layout}>
                <Route path="/" component={News} />
                <Route path="/:id" component={Single} />
            </Router>
        </>
    );
}

const root = document.getElementById('root')

render(() => <App />, root)
