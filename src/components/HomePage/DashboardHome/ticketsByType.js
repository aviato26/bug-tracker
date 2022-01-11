
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ['Error', 'Task', 'Sub-Task'],
  datasets: [
    {
      label: '# of Votes',
      //data: [],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
        'rgba(153, 102, 255, 0.2)',
        'rgba(255, 159, 64, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
        'rgba(153, 102, 255, 1)',
        'rgba(255, 159, 64, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const options = {
  responsive: true,
  plugins: {
    legend: {
      //position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Tickets by Type',
    },
  },
};


const TicketsByType = (props) => {
  // variables for each priority level
  let error = 0;
  let task = 0;
  let subTask = 0;

  for(let i = 0; i < props.tickets.length; i++)
  {
    // loop through priority tickets, check priority level and increment level variables depending on priority
    if(props.tickets[i].type === 'Error')
    {
      error += 1;
    }
    else if(props.tickets[i].type === 'Task')
    {
      task += 1;
    }
    else if(props.tickets[i].type === 'Sub-Task')
    {
      subTask += 1;
    }
  }

  let ticketType = [error, task, subTask];

  data.datasets[0].data = ticketType;

  return(
      <Doughnut options={options} data={data} />
  );
}

export default TicketsByType;
