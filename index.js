class ApiClient {
  constructor(baseURL) {
    this.baseURL = baseURL;
  }

  async _request(endpoint, options = {}) {
    const response = await fetch(`${this.baseURL}${endpoint}`, {
      headers: { "Content-Type": "application/json", ...options.headers },
      ...options,
    });
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return response.json();
  }

  create(endpoint, data) {
    return this._request(endpoint, { method: "POST", body: JSON.stringify(data) });
  }

  read(endpoint, id = "") {
    return this._request(`${endpoint}/${id}`);
  }

  update(endpoint, id, data) {
    return this._request(`${endpoint}/${id}`, { method: "PUT", body: JSON.stringify(data) });
  }

  delete(endpoint, id) {
    return this._request(`${endpoint}/${id}`, { method: "DELETE" });
  }
}