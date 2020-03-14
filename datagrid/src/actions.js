export const sorting = (type) => ({
  type: 'SORT',
  payload: type
});

export const dec = () => ({type: 'DEC'});

export const rnd = () => {
  return {
    type: 'RND',
    payload: Math.floor(Math.random()*10)
  };
};
