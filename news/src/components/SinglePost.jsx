import React, { Component } from 'react'
import { format } from "date-fns"

export default class SinglePost extends Component {
    render() {
        return (
            <div>
               <h2 className="blog-post-title">{this?.props?.article?.title}</h2>
                    <p className="blog-post-meta">
                        {format(new Date(this?.props?.article?.publishedAt), "MMM dd")} <a href="#">{this?.props?.article?.author}</a>
                    </p>

                    <p>
                        {this?.props?.article?.description}
                    </p>
                    <hr />
                    <p>
                    {this?.props?.article?.content}
                    </p>
                    {/* <blockquote>
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
                    </p>  */}
            </div>
        )
    }
}
