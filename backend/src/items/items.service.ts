import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';
const db = require('../../db.js');

@Injectable()
export class ItemsService {
  async create(createItemDto: CreateItemDto): Promise<Item> {
    const [newItem] = await db('items')
      .insert({
        name: createItemDto.name,
        description: createItemDto.description,
      })
      .returning('*');
    return newItem;
  }

  async findAll(): Promise<Item[]> {
    return await db('items').select('*');
  }

  async findOne(id: number): Promise<Item> {
    const item = await db('items').where({ id }).first();
    if (!item) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
    return item;
  }

  async update(id: number, updateItemDto: UpdateItemDto): Promise<Item> {
    const count = await db('items').where({ id }).update({
      name: updateItemDto.name,
      description: updateItemDto.description,
    });

    if (count === 0) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }

    return await db('items').where({ id }).first();
  }

  async remove(id: number): Promise<void> {
    const count = await db('items').where({ id }).del();
    if (count === 0) {
      throw new NotFoundException(`Item with ID ${id} not found`);
    }
  }
}
