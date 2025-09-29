import { defineMock } from 'vite-plugin-mock-dev-server';
import applications from './data/applications';

export default defineMock({
  url: '/api/applications',
  method: 'GET',
  body: {
    status: 'success',
    data: applications.value,
  },
});
