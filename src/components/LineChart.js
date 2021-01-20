import React, {Component} from 'react';
import { Line } from 'react-chartjs-2';

export default class LineChart extends Component{
    constructor(props) {
        super(props);
        this.state = {
            Data: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'],
                datasets: [
                    {
                    label: 'Account Balance',
                    fill: true,
                    // lineTension: 0.9,
                    backgroundColor: 'rgba(75,192,192,0.4)',
                    borderColor: 'rgba(75,192,192,1)',
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: 'rgba(75,192,192,1)',
                    pointBackgroundColor: '#fff',
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: 'rgba(75,192,192,1)',
                    pointHoverBorderColor: 'rgba(220,220,220,1)',
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [3.343, 3.495, 5.864, 7.463, 6.463, 6.981, 9.453, 10.437, 13.463, 9.456, 14.754, 19.210]
                    }
                ]
            }
        }
    }

    render() {
    return (
      <div>
        <Line
          data={this.state.Data}
          options={{
            
            title: {
              display: true,
              text: 'Montly Account Balance',
              fontSize: 25
            },
            legend: {
              display: true,
              position: 'bottom'
            }
          }}
        />
      </div>
    )
  }
}