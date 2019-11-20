import { Test, TestingModule } from '@nestjs/testing';
import { JsonfetcherService } from './jsonfetcher.service';

describe('JsonfetcherService', () => {
  let service: JsonfetcherService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [JsonfetcherService],
    }).compile();

    service = module.get<JsonfetcherService>(JsonfetcherService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
