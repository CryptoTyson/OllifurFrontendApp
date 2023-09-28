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
        id: '0',
        name: 'Crematoriums',
        link: '/crematoriums',
        desc: 'Browse all available Crematoriums near you',
      },
      {
        id: '1',
        name: 'Digital Memorial',
        link: '/online-memorials',
        desc: 'Create, publish and share a Digital Memorial for your pet.',
      },
      {
        id: '2',
        name: 'Pre-Plan',
        link: '#',
        desc: 'Pre-plan a cremation with care and thoughtfulness today',
      },
    ],
  },
  {
    id: 'id_3',
    name: 'Resoucres',
    child: [
      {
        id: '3',
        name: 'Blog',
        link: '#',
        desc: 'Everything you need to know about Pet Cremations and more',
      },
      {
        id: '4',
        name: 'About Us',
        link: '#',
        desc: 'Our story, mission and what drives us forward.',
      },
      {
        id: '5',
        name: 'Help and support',
        link: '#',
        desc: 'Learn, fix a problem, and get answers to your questions.',
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
