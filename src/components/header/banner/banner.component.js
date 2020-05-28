import React from 'react'
import './banner.styles.scss'
export default function Banner() {
    return (
    <section className="banner">
        <div className="container">
          <div className="row">
            <div className="col">
              <div className="banner__image">
                <div className="banner__content">
                  <h1 className="banner__title">WEB & GRAPHIC DESIGNER</h1>
                  <button className="btn btn-primary" type="button">LEARN MORE</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    </section>
    )
}
