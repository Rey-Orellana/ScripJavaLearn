import Dexie from 'dexie';

const db = new Dexie('InventoryDatabase');
db.version(1).stores({
  items: '$$id, name, quantity'
});

export const InventoryCRUD = {
  async create(item) {
    const id = await db.items.add(item);
    return { id, ...item };
  },

  async read(id = null) {
    if (id) {
      const item = await db.items.get(id);
      if (!item) throw new Error("Item no encontrado");
      return item;
    }
    return db.items.toArray();
  },

  async update(id, updatedFields) {
    const updated = await db.items.update(id, updatedFields);
    if (!updated) throw new Error("No se pudo actualizar, ID no encontrado");
    return this.read(id);
  },

  async delete(id) {
    await db.items.delete(id);
    return true;
  }
};