import React, { Component } from 'react'
import Aside from './Aside'

export default class SinglePost extends Component {
    render() {
        return (

            <div>
    
        <div class="row">
                <div className="col-md-8 blog-main">
                <h3 className="pb-4 mb-4 font-italic border-bottom">From the Firehose</h3>

                <div className="blog-post">
                    <h2 className="blog-post-title"></h2>
                    <p className="blog-post-meta">
                        January 1, 2014 by <a href="#">Mark</a>
                    </p>

                    <p>
                        This blog post shows a few different types of content that’s
                        supported and styled with Bootstrap. Basic typography, images, and
                        code are all supported.
                    </p>
                    <hr />
                    <p>
                        Cum sociis natoque penatibus et magnis
                        <a href="#">dis parturient montes</a>, nascetur ridiculus mus.
                        Aenean eu leo quam. Pellentesque ornare sem lacinia quam venenatis
                        vestibulum. Sed posuere consectetur est at lobortis. Cras mattis
                        consectetur purus sit amet fermentum.
                    </p>
                    <blockquote>
                        <p>
                            Curabitur blandit tempus porttitor.
                            <strong>Nullam quis risus eget urna mollis</strong> ornare vel
                            eu leo. Nullam id dolor id nibh ultricies vehicula ut id elit.
                        </p>
                    </blockquote>
                    <p>
                        Etiam porta <em>sem malesuada magna</em> mollis euismod. Cras
                        mattis consectetur purus sit amet fermentum. Aenean lacinia
                        bibendum nulla sed consectetur.
                    </p>
                   
                   </div>
                  </div>
                    <Aside/>
                 </div>
         </div>

                
         

               
               
        )
    }
}
