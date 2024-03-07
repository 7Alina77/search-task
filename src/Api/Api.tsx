//export const API_URL: string = 'https://dummyjson.com/users';
// Взяла другой апи с данными, тк dummyjson не открывается(
export const API_URL: string = 'https://reqres.in/api/users/';

interface ApiClientOptions {
  url: string;
}

class Api {
  _url: string;
  _headers: Record<string, string>;

  constructor(options: ApiClientOptions) {
    this._url = options.url;
    this._headers = {
      'Content-Type': 'application/json'
    }
  }

  _checkResponse(res: Response) {
    if (res.ok) {
      return res.json();
    } else {
      return Promise.reject(`Ошибка: ${res.status}`);
    }
  }

  getUsers() {
    return fetch(`${this._url}`)
      .then(this._checkResponse)
  }
}

export const NewApi = new Api({url: API_URL});