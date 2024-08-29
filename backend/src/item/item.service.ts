import { Injectable, NotFoundException } from '@nestjs/common';
const db = require('../../db.js');

@Injectable()
export class ItemsService {
  async create(name: string, description: string): Promise<any> {
    return db('items').insert({ name, description }).returning('*');
  }

  async findAll(): Promise<any[]> {
    return db('items').select('*');
  }

  async findOne(id: number): Promise<any> {
    const item = await db('items').where({ id }).first();
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
  }

  async update(id: number, name: string, description: string): Promise<any> {
    const item = await this.findOne(id);
    await db('items').where({ id }).update({ name, description });
    return this.findOne(id);
  }

  async remove(id: number): Promise<void> {
    await this.findOne(id);
    await db('items').where({ id }).del();
  }
}
