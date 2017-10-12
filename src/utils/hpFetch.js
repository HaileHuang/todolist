function hpFetch(url, options) {
  let xhr = new XMLHttpRequest();
  return new Promise((resolve, reject) => {
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        resolve(xhr);
      }
    };
    if (!options) {
      options = {method: 'GET'};
    }
    xhr.open(options.method, url);
    if (options.method === 'GET' || options.method === 'DELETE') {
      xhr.send();
    } else if (options.method === 'POST' || options.method === 'PUT') {
      const headers = options.headers;
      Object.keys(headers).forEach((key) => {
        xhr.setRequestHeader(key, headers[key]);
      })
      xhr.send(options.body);
    }
  });
}

export default hpFetch;