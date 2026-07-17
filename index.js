class UserService {
  #users = new Map();

  create(user) {
    if (!user.email) throw new Error("El email es obligatorio");
    const id = crypto.randomUUID();
    const newUser = { id, ...user, createdAt: new Date() };
    this.#users.set(id, newUser);
    return newUser;
  }

  read(id) {
    if (!id) return Array.from(this.#users.values());
    const user = this.#users.get(id);
    if (!user) throw new Error(`Usuario con ID ${id} no encontrado`);
    return user;
  }

  update(id, updatedData) {
    const user = this.read(id);
    const updatedUser = { ...user, ...updatedData, updatedAt: new Date() };
    this.#users.set(id, updatedUser);
    return updatedUser;
  }

  delete(id) {
    this.read(id); // Valida si existe
    return this.#users.delete(id);
  }
}