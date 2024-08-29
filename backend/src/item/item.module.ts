import { Module } from '@nestjs/common';
import { ItemsController } from './item.controller';
import { ItemsService } from './item.service';

@Module({
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
