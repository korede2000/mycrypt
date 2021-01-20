import React, {Component} from 'react';
import { Doughnut } from 'react-chartjs-2';

export default class PieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      Data: {
        labels: ['completed', 'pending', 'Others', 'Cancelled'],
        datasets: [{
          label: 'Transaction',
          data: [25, 7, 10, 15],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)'
          ],
          borderWidth: 1
        }]
      },
      
    }
  }

  render() {
    return (
      <div class="option-identity-wrapper" style={{padding:'0px'}}>
                <div class="card-header">
                    <h4 class="card-title">TRANSACTION HISTORY  CHART</h4>
                </div>
        <div class="card-body">
          <Doughnut
          data={this.state.Data}
          options={{
            
            title: {
              display: true,
              text: 'total transaction',
              fontSize: 25
            },
            legend: {
              display: true,
              position: 'bottom'
            }
          }}
        />
                </div>
      
        
      </div>
    )
  }
}