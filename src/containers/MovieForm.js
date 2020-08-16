import React, { Component } from 'react'

class MovieForm extends Component {
    state = {  }  
    render() { 
        // add link to nav bar 
        return (
            <div>
             <h2>Add a Movie</h2>
             
            <form onSubmit={this.handleOnSubmit}>
                <div>
                  <label htmlFor="title">Title</label>
                  <input type="text" onChange={this.handleOnChange} name="title" />
                </div>

                <div>
                  <label htmlFor="image">Image</label>
                  <input type="text" onChange={this.handleOnChange} name="image"/>
                </div>

              <button type="submit">Submit</button>
            </form>
            */
        </div>
        );
    }
}

export default MovieForm;
 