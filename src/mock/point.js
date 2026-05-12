const DESCRIPTIONS = [
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
  'Cras aliquet varius magna, non porta ligula feugiat eget.',
  'Fusce tristique felis at fermentum pharetra.',
  'Aliquam id orci ut lectus varius viverra.',
  'Nullam nunc ex, convallis sed finibus eget, sollicitudin eget ante.',
];

const destinations = [
  {
    id: 1,
    description: DESCRIPTIONS.slice(0, 3).join(' '),
    name: 'Amsterdam',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=11',
        description: 'Amsterdam city view',
      },
    ],
  },
  {
    id: 2,
    description: DESCRIPTIONS.slice(1, 5).join(' '),
    name: 'Chamonix',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=22',
        description: 'Chamonix landscape',
      },
      {
        src: 'https://loremflickr.com/248/152?random=23',
        description: 'Chamonix mountain view',
      },
    ],
  },
  {
    id: 3,
    description: DESCRIPTIONS.slice(2).join(' '),
    name: 'Geneva',
    pictures: [
      {
        src: 'https://loremflickr.com/248/152?random=33',
        description: 'Geneva city view',
      },
    ],
  },
];

const offers = [
  {
    id: 1,
    type: 'taxi',
    title: 'Order Uber',
    price: 20,
  },
  {
    id: 2,
    type: 'flight',
    title: 'Add luggage',
    price: 50,
  },
  {
    id: 3,
    type: 'flight',
    title: 'Switch to comfort',
    price: 80,
  },
  {
    id: 4,
    type: 'flight',
    title: 'Add meal',
    price: 15,
  },
  {
    id: 5,
    type: 'flight',
    title: 'Choose seats',
    price: 5,
  },
  {
    id: 6,
    type: 'drive',
    title: 'Rent a car',
    price: 200,
  },
];

const points = [
  {
    id: 1,
    basePrice: 20,
    dateFrom: '2019-03-18T10:30:00',
    dateTo: '2019-03-18T11:00:00',
    destination: 1,
    isFavorite: true,
    offers: [1],
    type: 'taxi',
  },
  {
    id: 2,
    basePrice: 160,
    dateFrom: '2019-03-18T12:25:00',
    dateTo: '2019-03-18T13:35:00',
    destination: 2,
    isFavorite: false,
    offers: [2, 3],
    type: 'flight',
  },
  {
    id: 3,
    basePrice: 160,
    dateFrom: '2019-03-18T14:30:00',
    dateTo: '2019-03-18T16:05:00',
    destination: 2,
    isFavorite: true,
    offers: [6],
    type: 'drive',
  },
];

function getDestinations() {
  return destinations;
}

function getOffers() {
  return offers;
}

function getPoints() {
  return points;
}

export {getDestinations, getOffers, getPoints};
