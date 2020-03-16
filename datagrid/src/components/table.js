import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';
import './table.css';
import sortUp from '../assets/images/sort-up.png';
import sortDown from '../assets/images/sort-up.png';

const Table = ({table, sorting, dec, rnd}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th onClick={() => sorting("rank")}><div id="rank" className="th pointer"><span>Rank</span><div className="img-wrapp"><img className="img-up" src={sortUp} alt="up"/></div><div className="img-wrapp"><img className="img-down" src={sortDown} alt="down"/></div></div></th>
          <th onClick={() => sorting("name")}><div id="name" className="th pointer"><span>Name</span><div className="img-wrapp"><img className="img-up" src={sortUp} alt="up"/></div><div className="img-wrapp"><img className="img-down" src={sortDown} alt="down"/></div></div></th>
          <th><div id="github" className="th"><span>Github</span></div></th>
          <th onClick={() => sorting("totalScore")}><div id="totalScore" className="th pointer"><span>Score</span><div className="img-wrapp"><img className="img-up" src={sortUp} alt="up"/></div><div className="img-wrapp"><img className="img-down" src={sortDown} alt="down"/></div></div></th>
          <th onClick={() => sorting("locationName")}><div id="locationName" className="th pointer"><span>Adress</span><div className="img-wrapp"><img className="img-up" src={sortUp} alt="up"/></div><div className="img-wrapp"><img className="img-down" src={sortDown} alt="down"/></div></div></th>
          <th onClick={() => sorting("taskResults")}><div id="taskResults" className="th pointer"><span>Level</span><div className="img-wrapp"><img className="img-up" src={sortUp} alt="up"/></div><div className="img-wrapp"><img className="img-down" src={sortDown} alt="down"/></div></div></th>
          <th><div id="isActive" className="th"><span>Premium Account</span></div></th>
        </tr>
      </thead>
      <tbody>
        {table.data.map(item => (
            <tr key={item.id}>
                <td>{item.rank}</td>
                <td>{item.name}</td>
                <td>{item.githubId}</td>
                <td>{item.totalScore}</td>
                <td>{item.locationName}</td>
                <td>{item.taskResults}</td>
                <td>{item.isActive ? '+' : '-'}</td>
            </tr>
        ))}
      </tbody>
    </table>
  );
};

const mapStateToProps = (state) => {
  return {
    table: state
  }
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actions, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(Table);