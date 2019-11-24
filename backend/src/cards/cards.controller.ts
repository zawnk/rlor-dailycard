import { Controller, Get, Param } from '@nestjs/common';
import { JsonfetcherService } from '../jsonfetcher/jsonfetcher.service';
import { Card, CardType } from './cards.interface';
import { CardsService } from './cards.service';
import { Intro, Outro } from './cards.constants';

@Controller('card')
export class CardsController {
    constructor(
        private readonly jsonFetcherService: JsonfetcherService,
        private readonly cardsService: CardsService
    ) {}

    @Get()
    getRandom(): string {
        let randomCard: Card  = this.jsonFetcherService.getRandomCard()
        let cardType: CardType = this.cardsService.getCardType(randomCard)
        let introText: string = Intro
        let outroText: string = Outro.replace(/%CARDNAME%/g, randomCard.name)
        let cardBodyText: string = this.cardsService.formatBodyByCardtype(randomCard, cardType)
        return `Copy baby (${randomCard.name} | ${randomCard.cardCode}): <br /> <pre>${introText + cardBodyText + outroText}</pre>`;
    }
    
    @Get(':id')
    getOneById(@Param() params): string {
        return `This action returns a #${params.id} card`;
    }
}
