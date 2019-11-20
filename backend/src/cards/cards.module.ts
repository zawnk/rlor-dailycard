import { Module } from '@nestjs/common';
import { CardsController } from './cards.controller';
import { CardsService } from './cards.service';
import { JsonfetcherModule } from '../jsonfetcher/jsonfetcher.module';

@Module({
  imports: [JsonfetcherModule],
  controllers: [CardsController],
  providers: [CardsService]
})
export class CardsModule {}
