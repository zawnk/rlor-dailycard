import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';
import { JsonfetcherModule } from './jsonfetcher/jsonfetcher.module';

@Module({
  imports: [CardsModule, JsonfetcherModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
