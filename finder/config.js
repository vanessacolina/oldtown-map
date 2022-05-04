'use strict';

// eslint-disable-next-line no-unused-vars
const config = {
  style: 'mapbox://styles/mapbox/light-v10',
  accessToken:
    'pk.eyJ1IjoidmFuZXNzYWNvbGluYSIsImEiOiJja3Ntb25ucjgweHppMm9wMTYybWR1cG5uIn0.tPz87IS5OXtIg-sgztj29g',
  CSV: 'https://docs.google.com/spreadsheets/d/1W5knONqNhFpqWvaf93PnIVE80VBCRLFNkydgSje7t_Y/gviz/tq?tqx=out:csv&sheet=OTIMap',
  center: [-77.045489, 38.807313],
  zoom: 14,
  title: 'Old Town Illustrated',
  description:
    'You can search by address to sort the list below by distance. You can also filter the list by language support options, which days a location is open, and whether they have devices to use to complete the survey by phone or online.',
  sideBarInfo: ['Address', 'Illustration'],
  popupInfo: ['Address'],
  filters: [
    {
      type: 'dropdown',
      title: 'Year built: ',
      columnHeader: 'Year',
      listItems: [
        '1840',
      ],
    },
    {
      type: 'checkbox',
      title: 'Info available: ',
      columnHeader: 'Info_available', // Case sensitive - must match spreadsheet entry
      listItems: ['Portrait', 'Story'], // Case sensitive - must match spreadsheet entry; This will take up to six inputs but is best used with a maximum of three;
    },
    {
      type: 'dropdown',
      title: 'Clients: ',
      columnHeader: 'Clients',
      listItems: [
        'Adults',
        'Disabled',
        'Homeless',
        'Immigrants/Refugees',
        'Low Income',
        'Seniors',
        'Youth: Pre-teen',
        'Youth: Teen',
      ],
    },
  ],
};
