import sample from './sample-pages';

const defaultChild = (id) => [
  {
    name: '1Vivamus Condimentum',
    link: '#',
  },
  {
    id: 'id_' + id,
    name: 'Lorem 2',
    child: [
      {
        name: 'Vivamus Condimentum ',
        link: '#',
      },
      {
        name: 'Vivamus Condimentum 2',
        link: '#',
      },
    ],
  },
  {
    name: '3Eu Rhoncus Odio',
    link: '#',
  },
  {
    name: '4Praesent Tristique',
    link: '#',
  },
];

const multiple = [
  {
    name: 'Home',
    link: '/',
  },
  {
    id: 'id_2',
    name: 'Services',
    child: [
      {
        name: 'Crematoriums',
        link: '/crematoriums',
        desc: '',
      },
      {
        name: 'Digital Memorial',
        link: '#',
        desc: '',
      },
      {
        name: 'Pre-Plan',
        link: '#',
        desc: '',
      },
    ],
  },
  {
    id: 'id_3',
    name: 'Resoucres',
    child: [
      {
        id: 'id_3_1',
        name: 'Blog',
        link: '#',
        desc: '',
      },
      {
        id: 'id_3_3',
        name: 'Help and support',
        link: '#',
        desc: '',
      },
    ],
  },
  {
    id: 'id_4',
    name: 'Contact us',
    link: '/contact-us',
  },
];

export default multiple;
