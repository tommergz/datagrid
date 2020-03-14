import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../actions';

const Table = ({table, sorting, dec, rnd}) => {
  return (
    <table className="table">
      <thead>
        <tr>
          <th id="rank" onClick={sorting("rank")}>Rank</th>
          <th>First Name</th>
          <th>Github</th>
          <th>Score</th>
          <th>Address</th>
          <th>Level</th>
          <th>Premium Account</th>
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