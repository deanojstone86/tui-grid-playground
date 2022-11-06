import Grid from 'tui-grid';
import 'tui-pagination/dist/tui-pagination.css';
const data = [
  {
    id: '10012',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    id: '10013',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    id: '10014',
    city: 'London',
    country: 'England',
  },
  {
    id: '10015',
    city: 'Ljubljana',
    country: 'Slovenia',
  },
  {
    id: '10016',
    city: 'Reykjavik',
    country: 'Iceland',
  },
  {
    id: '10012',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    id: '10013',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    id: '10014',
    city: 'London',
    country: 'England',
  },
  {
    id: '10015',
    city: 'Ljubljana',
    country: 'Slovenia',
  },
  {
    id: '10016',
    city: 'Reykjavik',
    country: 'Iceland',
  },
  {
    id: '10012',
    city: 'Seoul',
    country: 'South Korea',
  },
  {
    id: '10013',
    city: 'Tokyo',
    country: 'Japan',
  },
  {
    id: '10014',
    city: 'London',
    country: 'England',
  },
  {
    id: '10015',
    city: 'Ljubljana',
    country: 'Slovenia',
  },
  {
    id: '10016',
    city: 'Reykjavik',
    country: 'Iceland',
  },
];
const grid = new Grid({
  el: document.getElementById('grid'),
  data: data,
  pageOptions: {
    useClient: true,
    perPage: 10,
  },
  columns: [
    {
      header: 'id',
      name: 'id',
    },
    {
      header: 'city',
      name: 'city',
    },
    {
      header: 'country',
      name: 'country',
    },
  ],
});
