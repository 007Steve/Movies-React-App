

export const updateMovieFormData = movieFormData => {
    return{
        type: 'UPDATED_DATA',
        movieFormData
    }
}


export const resetMovieForm = () => {
    return {
        type: 'RESET_FORM'
    }
}