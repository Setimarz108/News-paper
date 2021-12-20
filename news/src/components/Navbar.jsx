
import React, { Component } from 'react'
import { Nav } from 'react-bootstrap'

export default class Navbar extends Component {


    render() {
        return (
            <div>
                 <header className="blog-header py-3">
            <div className="row flex-nowrap justify-content-between align-items-center">
                <div className="col-4 pt-1">
                    <a className="text-muted" href="#">Subscribe</a>
                </div>
                <div className="col-4 text-center">
                    <a className="blog-header-logo text-dark" href="#">Large</a>
                </div>
                <div className="col-4 d-flex justify-content-end align-items-center">
                    <a className="text-muted" href="#">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor"
                            stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="mx-3" role="img"
                            viewBox="0 0 24 24" focusable="false">
                            <title>Search</title>
                            <circle cx="10.5" cy="10.5" r="7.5" />
                            <path d="M21 21l-5.2-5.2" />
                        </svg>
                    </a>
                    <a className="btn btn-sm btn-outline-secondary" href="#">Sign up</a>
                </div>
            </div>
        </header>

        <div className="nav-scroller py-1 mb-2">
            <nav className="nav d-flex justify-content-between">
                <a className="p-2 text-muted" href="#">World</a>
                <a className="p-2 text-muted" href="#">U.S.</a>
                <a className="p-2 text-muted" href="#">Technology</a>
                <a className="p-2 text-muted" href="#">Design</a>
                <a className="p-2 text-muted" href="#">Culture</a>
                <a className="p-2 text-muted" href="#">Business</a>
                <a className="p-2 text-muted" href="#">Politics</a>
                <a className="p-2 text-muted" href="#">Opinion</a>
                <a className="p-2 text-muted" href="#">Science</a>
                <a className="p-2 text-muted" href="#">Health</a>
                <a className="p-2 text-muted" href="#">Style</a>
                <a className="p-2 text-muted" href="#">Travel</a>
            </nav>
        </div>

                
            </div>
        )
    }
}
