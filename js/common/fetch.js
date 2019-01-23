

export default class MyFetch {
  getRepositories (url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }
  post (url, data) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'content-type': 'application/json'
        },
        body: JSON.stringify(data)
      })
        .then(res => res.json())
        .then(res => resolve(res))
        .catch(err => reject(err))
    })
  }
}