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

    case 'SORT':
      return {
        ...state,
        data: sortFunction(state.data, action.payload)
      }

    default: 
      return state;  
  }
};

export default reducer;