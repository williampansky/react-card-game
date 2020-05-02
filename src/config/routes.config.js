export default [
  {
    slug: '/',
    name: 'Home',
    order: 0,
    protectedRoute: false,
    meta: {
      title: '',
      description: '',
      keywords: ''
    }
  },
  {
    slug: '/about',
    name: 'About',
    order: 100,
    protectedRoute: false,
    meta: {
      title: '',
      description: '',
      keywords: ''
    }
  },
  {
    slug: '/news',
    name: 'News',
    order: 200,
    protectedRoute: false,
    meta: {
      title: '',
      description: '',
      keywords: ''
    }
  },
  {
    slug: '/store',
    name: 'Store',
    order: 300,
    protectedRoute: false,
    meta: {
      title: '',
      description: '',
      keywords: ''
    }
  },
  {
    slug: '/account',
    name: 'Account',
    order: 400,
    protectedRoute: true,
    meta: {
      title: '',
      description: '',
      keywords: ''
    }
  },
  {
    slug: '/collection',
    name: 'Your Cards',
    order: 450,
    protectedRoute: true,
    meta: {
      title: 'Your cards collection',
      description: 'Your collection of cards.',
      keywords: ''
    }
  },
  {
    slug: '/decks/new',
    name: 'New Deck',
    order: 450,
    protectedRoute: true,
    meta: {
      title: 'Create new deck',
      description: 'Create a new deck of from your card collection.',
      keywords: ''
    }
  },
  {
    slug: '/play',
    name: 'Play',
    order: 500,
    protectedRoute: true,
    meta: {
      title: '',
      description: '',
      keywords: ''
    }
  }
];
