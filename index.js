import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

export const ProductService = {
  async create(data) {
    return prisma.product.create({ data });
  },

  async read(id = null) {
    if (id) {
      return prisma.product.findUniqueOrThrow({ where: { id: Number(id) } });
    }
    return prisma.product.findMany();
  },

  async update(id, data) {
    return prisma.product.update({
      where: { id: Number(id) },
      data,
    });
  },

  async delete(id) {
    return prisma.product.delete({
      where: { id: Number(id) },
    });
  }
};