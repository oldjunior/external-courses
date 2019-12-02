function polyFetch(url, options) {
  const initOptions = options && options instanceof Object ? options : { method: 'GET', headers: null, body: null};
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    function handleResponse() {
      const response = {
        status: this.status,
        statusText: this.statusText,
        ok: this.status <= 200 && this.status < 300 ? true : false,
        headers: this.getAllResponseHeaders(),
        body: this.responseText,
        text: () => this.responseText,
        json: () => JSON.parse(this.responseText),
        blob: () => new Blob([this.responseText])
      };
      resolve(response);
      xhr.removeEventListener('load', handleResponse);
    }
    function handleError() {
      reject(`Something went wrong (${xhr.status}: ${xhr.statusText})`);
    }
    xhr.open(initOptions.method, url);
    if (initOptions.headers !== null && initOptions.headers instanceof Object) {
      for (const name in initOptions.headers) {
        if (initOptions.headers.hasOwnProperty(name)) {
          xhr.setRequestHeader(name, initOptions.headers[name]);
        }
      }
    }
    if (initOptions.body === null) {
      xhr.send()
    } else {
      xhr.send(initOptions.body);
    }
    xhr.addEventListener('load', handleResponse);
    xhr.addEventListener('error', handleError);
  });
}

const formDataRequest = new FormData();
formDataRequest.append('shout', 'Marco');
polyFetch('https://www.oldjun.fun/pseudofetch/check.json', { method: 'POST', body: formDataRequest })
  .then(res => res.json())
  .then(receivedData => console.log(receivedData.response))
  .catch(err => console.log(err));