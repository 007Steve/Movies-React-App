import React, { Component } from 'react'
import { connect } from 'react-redux'
import { updateMovieFormData } from '../actions/movieForm'
import { createMovie } from '../actions/movies'

class MovieForm extends Component {

   handleOnChange = event => {
       const { name, value } = event.target
       const currentMovieFormData = Object.assign({},this.props.movieFormData,{
           [name]: value
       })
       this.props.updateMovieFormData(currentMovieFormData)
   }
   handleOnSubmit = event => {
       event.preventDefault()
       this.props.createMovie(this.props.movieFormData)
       
   }
    render() { 
        // add link to nav bar 
        const { title, image, description, category, year } = this.props.movieFormData
        return (
            <div>
            <h2>Add a Movie</h2>
           <form onSubmit={this.handleOnSubmit}>
               <div>
                 <label htmlFor="title">Title</label>
                 <input type="text" onChange={this.handleOnChange} name="title" value={title}/>
               </div>

               <div>
                 <label htmlFor="image">Image</label>
                 <input type="text" onChange={this.handleOnChange} name="image" value={image}/>
               </div>

               <div>
                 <label htmlFor="description">Description</label>
                 <input type="text" onChange={this.handleOnChange} name="description" value={description}/>
               </div>
               <div>
                 <label htmlFor="category">Category</label>
                 <input type="text" onChange={this.handleOnChange} name="category" value={category}/>
             </div>
             <div>
                 <label htmlFor="year">Year</label>
                 <input type="number" onChange={this.handleOnChange} name="year" value={year}/>
             </div>

             <button type="submit">Submit</button>
           </form>
       </div> 
        );
    }
}
 const mapStateToProps = state => {
     return {
         movieFormData: state.movieFormData
     }
 }
export default connect(mapStateToProps,{ updateMovieFormData, createMovie }) ( MovieForm);
 

       