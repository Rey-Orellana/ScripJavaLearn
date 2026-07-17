const LocalStorageCRUD = {
  _getKey(id) {
    return `item_${id}`;
  },

  create(id, data) {
    if (localStorage.getItem(this._getKey(id))) {
      throw new Error("El registro ya existe.");
    }
    const payload = JSON.stringify({ ...data, createdAt: Date.now() });
    localStorage.setItem(this._getKey(id), payload);
    return { id, ...data };
  },

  read(id) {
    const data = localStorage.getItem(this._getKey(id));
    if (!data) throw new Error("Registro no encontrado.");
    return JSON.parse(data);
  },

  update(id, updatedData) {
    const current = this.read(id);
    const payload = JSON.stringify({ ...current, ...updatedData, updatedAt: Date.now() });
    localStorage.setItem(this._getKey(id), payload);
    return JSON.parse(payload);
  },

  delete(id) {
    if (!localStorage.getItem(this._getKey(id))) {
      throw new Error("Registro inexistente.");
    }
    localStorage.removeItem(this._getKey(id));
    return true;
  }
};