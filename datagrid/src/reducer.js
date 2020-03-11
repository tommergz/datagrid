
const reducer = (state = [{"id":701,"firstName":"Carla","lastName":"Devine","email":"JPachler@consectetur.net","phone":"(266)971-4101","address":{"streetAddress":"8695 Libero Ln","city":"Altoona","state":"OR","zip":"81945"},"description":"sit ante pulvinar sed turpis sed rutrum libero sapien quis elementum sagittis et et massa ipsum sagittis at magna in vitae lacus convallis odio vestibulum non magna ante scelerisque lacus lectus donec"},{"id":742,"firstName":"Lorenz","lastName":"Hunt","email":"THickey@tellus.ly","phone":"(323)831-8684","address":{"streetAddress":"6514 Id Ct","city":"Lockport","state":"MS","zip":"39305"},"description":"magna placerat lacus nec vel neque nullam placerat sit libero sed ac pretium sapien molestie vestibulum sed velit adipiscing porttitor at curabitur dolor quis amet rutrum at curabitur massa velit pharetra etiam"},{"id":910,"firstName":"Bridgette","lastName":"Bunch","email":"RForenda@sed.gov","phone":"(905)339-0324","address":{"streetAddress":"6452 Lacus Ln","city":"Streamwood","state":"ME","zip":"53445"},"description":"nec donec odio nec sed placerat lacus tortor sed sit pulvinar mi etiam quis tincidunt eget dolor sollicitudin tortor egestas nunc quis ipsum hendrerit non tempor donec hendrerit amet mattis odio dolor"},{"id":563,"firstName":"Ira","lastName":"Traverse","email":"LFrutos@ac.net","phone":"(968)727-1174","address":{"streetAddress":"523 Pulvinar Ln","city":"Zionsville","state":"MD","zip":"59524"},"description":"amet sollicitudin dolor dolor lacus pharetra egestas velit vel sed adipiscing tortor neque elementum vitae sagittis vitae sollicitudin et turpis eros consectetur sapien egestas lacus placerat nunc aliquam consectetur tempor tortor placerat"}], action) => {
  switch (action.type) {
    case 'RND':
      return state + action.payload;

    case 'INC':
      return state + 1;

    case 'DEC': 
      return state -1;  
    
    default: 
      return state;  
  }
};

export default reducer;