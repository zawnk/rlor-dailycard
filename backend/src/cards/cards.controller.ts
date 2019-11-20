import { Controller, Get, Param } from '@nestjs/common';
import { JsonfetcherService } from '../jsonfetcher/jsonfetcher.service';

@Controller('cards')
export class CardsController {
    constructor(private readonly jsonFetcherService: JsonfetcherService) {}

    @Get()
    getRandom(): string {
        return `Random card: <br /> <pre>${JSON.stringify(this.jsonFetcherService.getRandomCard(), null, 2)}</pre>`;
    }
    
    @Get(':id')
    getOneById(@Param() params): string {
        return `This action returns a #${params.id} card`;
    }

}
