import { Injectable, Logger } from '@nestjs/common';
import * as fs from 'fs';
import { Card } from 'src/cards/cards.interface';

@Injectable()
export class JsonfetcherService {
    private readonly logger = new Logger(JsonfetcherService.name);

    getRandomCard(): Card {
        let allCards: any[] = this.parseJsonFiles()
        return allCards[Math.floor(Math.random()*allCards.length)]
    }

    private parseJsonFiles(): any[] {
        let cardFileNames: string[]

        try {
            cardFileNames = fs.readdirSync('./cards')
        } catch (err) {
            this.logger.error(`Error in parseJsonFiles`, err)
        }

        let currentCards: any[] = []
        for (let file of cardFileNames) {
            let currentFileContent
            try {
                currentFileContent = JSON.parse(fs.readFileSync('./cards/' + file, { encoding: 'utf8' }))
            } catch (err) {
                this.logger.error(`Error in parseJsonFiles`, err)
            }
            currentCards = currentCards.concat(currentFileContent)
        }
        return currentCards
    }
}
