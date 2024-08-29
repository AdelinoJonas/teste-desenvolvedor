import { Module } from '@nestjs/common';
import { ItemsModule } from './item/item.module';

@Module({
  imports: [
    ItemsModule,
  ],
})
export class AppModule {}

