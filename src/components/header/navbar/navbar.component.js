import React from 'react'
import './navbar.styles.scss'
export default function Navbar() {
    return (
        <nav class="top-nav">
          <div class="container">
            <div class="row">
              <div class="col-md-2"><img class="top-nav__logo" src="img/mylogo.png"/></div>
              <div class="col-md-offset-1 col-md-8">
                <ul class="top-nav__menu nav">
                  <li><a href="#">HOME</a></li>
                  <li><a href="#">ABOUT ME</a></li>
                  <li><a href="#">SKILLS</a></li>
                  <li><a href="#">RESUME</a></li>
                  <li><a href="#">TESTIMONIALS</a></li>
                  <li><a href="#">PORFOLIO</a></li>
                  <li><a href="#">CONTACT</a></li>
                </ul>
              </div>
            </div>
          </div>
        </nav>
    )
}
