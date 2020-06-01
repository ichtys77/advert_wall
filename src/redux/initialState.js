export const initialState = {
  posts: {
    data: [
      {
        id: 0,
        name: 'Dhomigor sell PS4',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email: 'john.doe@email.com',
        published: '29.05.2020',
        updated: '29.05.2020',
        status: 'published',
      },
      {
        id: 1,
        name: 'Books for free',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email: 'adoe@gmail.com',
        published: '29.05.2020',
        updated: '30.05.20200',
        status: 'published',
      },
      {
        id: 2,
        name: 'Looking for old computer parts',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
        email: 'lmazurkiewicz@outlook.com',
        published: '30.05.2020',
        updated: '30.05.2020',
        status: 'published',
      },
    ],
  },
  loading: {
    active: false,
    error: false,
  },
  userLogged: true,
};
