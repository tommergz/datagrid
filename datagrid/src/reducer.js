import students from './api/students';

const initialState = {
  data: students
}

const sortFunction = (data, type) => {
  console.log(type);
  return data;
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'RND':
      return state + action.payload;

    case 'SORT':
      return {
        ...state,
        data: sortFunction(state.data, action.payload)
      }

    case 'DEC': 
      return state -1;  
    
    default: 
      return state;  
  }
};

export default reducer;