export const BASE_URL = 'https://api.dating.com'

export const register = ({ email, password }) => {
  return fetch(`${BASE_URL}/identity`, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    body: JSON.stringify({ email, password }),
  }).then(checkResponseStatus)
}

function checkResponseStatus(res) {
  if (res.ok) {
    return res.json()
  }
  return Promise.reject(`Error: ${res.status}`)
}
