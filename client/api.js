import axios from 'axios';

export function textLink(phoneNumber) {
  return axios.post('/api/text', {
    phoneNumber,
  });
}
