
import React from 'react';
import './DashboardCSS/graph-styles.css';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const labels = ['None', 'Low', 'Medium', 'High'];

const options = {
  responsive: true,
  plugins: {
    legend: {
      //position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Priority Tickets',
    },
  },
};


const data = {
  labels: labels,
  datasets: [
    {
      //label: 'Priority Tickets',
      //data: labels.map((c, i) => nums[i]),
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
  ],
};

const TicketsByPriority = (props) =>
{
  // variables for each priority level
  let none = 0;
  let low = 0;
  let medium = 0;
  let high = 0;

  for(let i = 0; i < props.tickets.length; i++)
  {
    // loop through priority tickets, check priority level and increment level variables depending on priority
    if(props.tickets[i].priority === 'High')
    {
      high += 1;
    }
    else if(props.tickets[i].priority === 'Low')
    {
      low += 1;
    }
    else if(props.tickets[i].priority === 'None')
    {
      none += 1;
    }
    else if(props.tickets[i].priority === 'Medium')
    {
      medium += 1;
    }
  }

  // collection of all incremented ticket priority levels
  let prioritys = [none, low, medium, high];

  // add prioritys array to data sets to be displayed in graph
  data.datasets[0].data = labels.map((c, i) => prioritys[i]);


  return(
      <Bar options={options} data={data}/>
  )
}

export default TicketsByPriority;
