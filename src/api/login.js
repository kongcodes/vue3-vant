import request from '@/utils/request';

export function login(query) {
  return request({
    url: '/api/login',
    method: 'get',
    params: query,
  });
}
