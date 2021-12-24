import React, { Component } from 'react'

export default class Aside extends Component {
    render() {
        return (
            <>  
          <div className="p-4 mb-3 bg-light rounded">
              <h4 className="font-italic">About</h4>
              <p className="mb-0">
                  Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                  mattis consectetur purus sit amet fermentum. Aenean lacinia
                  bibendum nulla sed consectetur.
              </p>
          </div>

          <div className="p-4">
              <h4 className="font-italic">Archives</h4>
              <ol className="list-unstyled mb-0">
              {
              this.props.months.map(month=>
                  (<li><a className="p-2 text-muted" key={month.id}  >{month}</a></li>
                  )

              )
          }

                
              </ol>
          </div>

          <div className="p-4">
              <h4 className="font-italic">Elsewhere</h4>
              <ol className="list-unstyled">
                  <li><a href="#">GitHub</a></li>
                  <li><a href="#">Twitter</a></li>
                  <li><a href="#">Facebook</a></li>
              </ol>
          </div>
      
            </>
        )
    }
}
