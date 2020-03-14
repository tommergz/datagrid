import faker from 'faker';

const makeFake = (idx) => {
  return {
    "id": 11523 + idx,
    "rank": 0,
    "name": faker.name.findName(),
    "githubId": faker.internet.email(),
    "totalScore": Math.floor(Math.random() *1000),
    "locationName": faker.address.city(),
    "taskResults": Math.floor(Math.random() *10),
    "isActive": faker.random.boolean()  
  };
};

let data = [...new Array(1000)].map((_, idx) => makeFake(idx));

data.sort(function(a, b) { return b.totalScore - a.totalScore; });
data.forEach((el, idx) => {
  el.rank = idx + 1;
});

export default data;