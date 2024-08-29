import { Controller, Get, Post, Body, Param, Delete, Put } from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';
import { Item } from './entities/item.entity';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  async create(@Body() createItemDto: CreateItemDto): Promise<Item> {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  async findAll(): Promise<Item[]> {
    return this.itemsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Item> {
    return this.itemsService.findOne(id);
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateItemDto: UpdateItemDto): Promise<Item> {
    return this.itemsService.update(id, updateItemDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.itemsService.remove(id);
  }
}
