import request from '../utils/request';

export function fetch() {
  return request(`/api/todoitems`);
}

export function remove(id) {
  return request(`/api/todoitems/${id}`, {
    method: 'DELETE',
  });
}

export function update(id, title, checked) {
  return request(`/api/todoitems/${id}`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `title=${title}&checked=${checked}`
  });
}

export function create(title, checked) {
  return request('/api/todoitems', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    },
    body: `title=${title}&checked=${checked}`
  });
}