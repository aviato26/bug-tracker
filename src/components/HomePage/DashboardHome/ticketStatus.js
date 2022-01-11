
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

const labels = ['New', 'Open', 'In Progess', 'Resolved'];
const nums = new Array();

nums[0] = 200;
nums[1] = 1200;
nums[2] = 300;
nums[3] = 600;
nums[4] = 10;
nums[5] = 900;
nums[6] = 20;

const data = {
  labels: labels,
  datasets: [
    {
      label: 'Ticket Status',
      //data: labels.map((c, i) => nums[i]),
      backgroundColor: 'rgba(0, 0, 255, 0.5)',
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
      text: 'Status of Tickets',
    },
  },
};


const TicketStatus = (props) =>
{

  // variables for each priority level
  let newStatus = 0;
  let open = 0;
  let inProgress = 0;
  let resolved = 0;

  for(let i = 0; i < props.tickets.length; i++)
  {
    // loop through status tickets, check status level and increment level variables depending on status
    if(props.tickets[i].status === 'New')
    {
      newStatus += 1;
    }
    else if(props.tickets[i].status === 'Open')
    {
      open += 1;
    }
    else if(props.tickets[i].status === 'In-Progress')
    {
      inProgress += 1;
    }
    else if(props.tickets[i].status === 'Resolved')
    {
      resolved += 1;
    }
  }

  // collection of all incremented ticket priority levels
  let status = [newStatus, open, inProgress, resolved];

  // add prioritys array to data sets to be displayed in graph
  data.datasets[0].data = labels.map((c, i) => status[i]);

  return(
      <Bar options={options} data={data}/>
  );
}

export default TicketStatus;
