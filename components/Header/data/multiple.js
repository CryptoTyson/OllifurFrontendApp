import sample from './sample-pages';

const defaultChild = id => [
  {
    name: '1Vivamus Condimentum',
    link: '#'
  },
  {
    id: 'id_' + id,
    name: 'Lorem 2',
    child: [
      {
        name: 'Vivamus Condimentum ',
        link: '#'
      },
      {
        name: 'Vivamus Condimentum 2',
        link: '#'
      },
    ]
  },
  {
    name: '3Eu Rhoncus Odio',
    link: '#'
  },
  {
    name: '4Praesent Tristique',
    link: '#'
  }
];

const multiple = [
  {
    name: 'Home',
    link: '#'
  },
  {
    id: 'id_2',
    name: 'Services',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        link: '#'
      },
      {
        id: 'id_2_1',
        name: 'In Lorem',
        child: defaultChild('2_1_1')
      },
      {
        id: 'id_2_2',
        name: 'Eu Rhoncus Odio',
        child: defaultChild('2_2_1')
      },
      {
        id: 'id_2_3',
        name: 'Praesent Tristique',
        child: defaultChild('2_3_1')
      }
    ]
  },
  {
    id: 'id_3',
    name: 'Resoucres',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        link: '#'
      },
      {
        id: 'id_3_1',
        name: 'In Lorem',
        child: defaultChild('3_1_1')
      },
      {
        id: 'id_3_2',
        name: 'Eu Rhoncus Odio',
        child: defaultChild('3_2_1')
      },
      {
        id: 'id_3_3',
        name: 'Praesent Tristique',
        child: defaultChild('3_3_1')
      }
    ]
  },
  {
    id: 'id_4',
    name: 'About',
    child: [
      {
        name: 'Eu Rhoncus Odio',
        link: '#'
      },
      {
        id: 'id_4_1',
        name: 'In Lorem',
        child: defaultChild('4_1_1')
      },
      {
        id: 'id_4_2',
        name: 'Eu Rhoncus Odio',
        child: defaultChild('4_2_1')
      },
      {
        id: 'id_4_3',
        name: 'Praesent Tristique',
        child: defaultChild('4_3_1')
      }
    ]
  },
  {
    name: 'inner Pages',
    child: sample
  }
];

export default multiple;
