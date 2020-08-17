const initialState ={ title: '', 
image: '', 
description:'', 
category: '', 
year:''
}
export default (state = initialState, action) => {

  switch(action.type) {
     case 'UPDATED_DATA':
        return action.movieFormData
     case 'RESET_FORM':
         return initialState
     
     default:
        return state; 
    }
}