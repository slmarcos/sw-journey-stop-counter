export const mockStarshipsResponsePageOne = () => ({
  count: 36,
  next: 'http://swapi.dev/api/starships/?page=2',
  previous: null,
  results: [
    {
      name: 'Millennium Falcon',
      model: 'YT-1300 light freighter',
      manufacturer: 'Corellian Engineering Corporation',
      cost_in_credits: '100000',
      length: '34.37',
      max_atmosphering_speed: '1050',
      crew: '4',
      passengers: '6',
      cargo_capacity: '100000',
      consumables: '2 months',
      hyperdrive_rating: '0.5',
      MGLT: '75',
      starship_class: 'Light freighter',
      pilots: [
        'http://swapi.dev/api/people/13/',
        'http://swapi.dev/api/people/14/',
        'http://swapi.dev/api/people/25/',
        'http://swapi.dev/api/people/31/'
      ],
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/'
      ],
      created: '2014-12-10T16:59:45.094000Z',
      edited: '2014-12-20T21:23:49.880000Z',
      url: 'http://swapi.dev/api/starships/10/'
    },
    {
      name: 'Y-wing',
      model: 'BTL Y-wing',
      manufacturer: 'Koensayr Manufacturing',
      cost_in_credits: '134999',
      length: '14',
      max_atmosphering_speed: '1000km',
      crew: '2',
      passengers: '0',
      cargo_capacity: '110',
      consumables: '1 week',
      hyperdrive_rating: '1.0',
      MGLT: '80',
      starship_class: 'assault starfighter',
      pilots: [],
      films: [
        'http://swapi.dev/api/films/1/',
        'http://swapi.dev/api/films/2/',
        'http://swapi.dev/api/films/3/'
      ],
      created: '2014-12-12T11:00:39.817000Z',
      edited: '2014-12-20T21:23:49.883000Z',
      url: 'http://swapi.dev/api/starships/11/'
    }
  ]
})

export const mockStarshipsResponsePageEnd = () => ({
  count: 36,
  next: null,
  previous: 'http://swapi.dev/api/starships/?page=2',
  results: [
    {
      name: 'Naboo star skiff',
      model: 'J-type star skiff',
      manufacturer: 'Theed Palace Space Vessel Engineering Corps/Nubia Star Drives, Incorporated',
      cost_in_credits: 'unknown',
      length: '29.2',
      max_atmosphering_speed: '1050',
      crew: '3',
      passengers: '3',
      cargo_capacity: 'unknown',
      consumables: 'unknown',
      hyperdrive_rating: '0.5',
      MGLT: 'unknown',
      starship_class: 'yacht',
      pilots: [
        'http://swapi.dev/api/people/10/',
        'http://swapi.dev/api/people/35/'
      ],
      films: [
        'http://swapi.dev/api/films/6/'
      ],
      created: '2014-12-20T19:55:15.396000Z',
      edited: '2014-12-20T21:23:49.948000Z',
      url: 'http://swapi.dev/api/starships/64/'
    },
    {
      name: 'Scimitar',
      model: 'Star Courier',
      manufacturer: 'Republic Sienar Systems',
      cost_in_credits: '55000000',
      length: '26.5',
      max_atmosphering_speed: '1180',
      crew: '1',
      passengers: '6',
      cargo_capacity: '2500000',
      consumables: '30 days',
      hyperdrive_rating: '1.5',
      MGLT: 'unknown',
      starship_class: 'Space Transport',
      pilots: [
        'http://swapi.dev/api/people/44/'
      ],
      films: [
        'http://swapi.dev/api/films/4/'
      ],
      created: '2014-12-20T09:39:56.116000Z',
      edited: '2014-12-20T21:23:49.922000Z',
      url: 'http://swapi.dev/api/starships/41/'
    }
  ]
})
