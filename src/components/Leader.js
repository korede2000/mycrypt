import React, { Component } from 'react';

import Leaderboard from './Leaderboard';

class Leader extends Component {
  constructor(props) {
  super(props);
  this.state = {
    users:
      [
        { name: "Tj", score: 1, fees: '20%', mdd: '10%', totalReturn: '+28.04%' },
        {name: "Chris", score: 69, fees: '20%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Dave", score: 17, fees: '20%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Ben", score: 11, fees: '20%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Caty", score: 21, fees: '20%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Miller", score: 33, fees: '20%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Zack", score: 88, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Sam", score: 42, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Nicky", score: 22, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Cheyenne", score: 55, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Adela", score: 72, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Wongo", score: 35, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Brett", score: 98, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Gina", score: 4, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Allen", score: 7, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Matt", score: 46, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Amanda", score: 31, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Jamie", score: 100, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        {name: "Sarah", score: 56, fees: '10%', mdd: '10%', totalReturn:'+28.04%'},
        { name: "Owen", score: 45, fees: '10%', mdd: '10%', totalReturn: '+28.04%' }
      ],
    paginate: 5
  };
}
  render() {
    return (
      <div className="">
        <Leaderboard users={this.state.users} paginate={this.state.paginate}/>
      </div>
    );
  }
}

export default Leader;