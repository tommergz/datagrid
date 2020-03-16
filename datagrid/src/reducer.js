import students from './api/students';

const initialState = {
  data: students,
}

const sortFunction = (state, type) => {
  let t = tableHeadObj;
  function light(type, num) {
    let els = document.getElementsByClassName('img-wrapp');
    Array.from(els).forEach((el) => el.style.backgroundColor = "white");
    document.getElementById(type).childNodes[num].style.backgroundColor = "aqua";
  }
  if (t[type] === null ||t[type] === false ) {
    t[type] = true;
    light(type, 1);
    if (type === "rank" || type === "totalScore" || type === "taskResults") {
      return state.data.sort(function(a, b) { return b[type] - a[type]; });
    }
    else {
      return state.data.sort(function(a, b) {   
        if (a[type] > b[type]) {
          return 1;
        }
        if (a[type] < b[type]) {
          return -1;
        }
        return 0; 
      });
    }
  }
  else if (t[type] === true) {
    t[type] = false;
    light(type, 2);
    if (type === "rank" || type === "totalScore" || type === "taskResults") {
      return state.data.sort(function(a, b) { return a[type] - b[type]; });
    }
    else {
      return state.data.sort(function(a, b) {   
        if (a[type] < b[type]) {
          return 1;
        }
        if (a[type] > b[type]) {
          return -1;
        }
        return 0; 
      });
    }
  }
  
  
}

let tableHeadObj = {
  rank: null,
  name: null,
  totalScore: null,
  locationName: null,
  taskResults: null
}

const reducer = (state = initialState, action) => {
  switch (action.type) {

    case 'SORT':
      return {
        ...state,
        data: sortFunction(state, action.payload)
      }

    default: 
      return state;  
  }
};

export default reducer;