import { Module } from '@nestjs/common';
import { JsonfetcherService } from './jsonfetcher.service';

@Module({
  providers: [JsonfetcherService],
  exports: [JsonfetcherService]
})
export class JsonfetcherModule {}
