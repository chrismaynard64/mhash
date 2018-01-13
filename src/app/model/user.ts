export interface User {
    id: number;
    name: string;
    email: string;
    imaqgeUrl: string;
    connections: any[];
    gallery: any[];
  }

  export const UserDefault: User = {
      id: 0,
      name: 'No one',
      email: 'noone@test.com',
      imaqgeUrl: '',
      connections: [],
      gallery: []

  }