import { readFile, writeFile } from 'fs/promises';

export class FileDb {
  constructor(filePath) {
    this.path = filePath;
  }

  async _readData() {
    try {
      const content = await readFile(this.path, 'utf-8');
      return JSON.parse(content);
    } catch {
      return []; // Devuelve array vacío si el archivo no existe
    }
  }

  async create(record) {
    const db = await this._readData();
    const newRecord = { id: Date.now().toString(), ...record };
    db.push(newRecord);
    await writeFile(this.path, JSON.stringify(db, null, 2));
    return newRecord;
  }

  async read(id = null) {
    const db = await this._readData();
    if (id) {
      const record = db.find(r => r.id === id);
      if (!record) throw new Error("Registro no encontrado");
      return record;
    }
    return db;
  }

  async update(id, updatedFields) {
    const db = await this._readData();
    const index = db.findIndex(r => r.id === id);
    if (index === -1) throw new Error("Registro no encontrado");
    db[index] = { ...db[index], ...updatedFields };
    await writeFile(this.path, JSON.stringify(db, null, 2));
    return db[index];
  }

  async delete(id) {
    const db = await this._readData();
    const filtered = db.filter(r => r.id !== id);
    if (db.length === filtered.length) throw new Error("Registro no encontrado");
    await writeFile(this.path, JSON.stringify(filtered, null, 2));
    return true;
  }
}