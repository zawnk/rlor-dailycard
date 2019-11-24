import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { Card, CardType } from './cards.interface';

@Injectable()
export class CardsService {
    getCardType(card: Card): CardType {
        if (card.type === 'Spell') {
            return 'Spell'
        } else if (card.type === 'Ability') {
            return 'Ability'
        } else if (card.type === 'Unit') {
            if (card.supertype === '') {
                return 'Unit'
            } else if (card.supertype === 'Champion') {
                return 'Champion'
            }
        }
        throw new InternalServerErrorException(`Unknown Unit Type - CardID: ${card.cardCode}`)
    }

    formatBodyByCardtype(card: Card, cardType: CardType): string {
        switch (cardType) {
            case 'Unit':
                return this.formatUnitBody(card)
            case 'Spell':
                return this.formatSpellBody(card)
            case 'Champion':
                return this.formatChampionBody(card)
            case 'Ability':
                return this.formatAbilityBody(card)
            default:
                throw new InternalServerErrorException(`Error formatting the card body for type ${cardType}`)
        }
    }

    private formatChampionBody(card: Card): string {
        return ''
    }

    private formatAbilityBody(card: Card): string {
        return ''
    }

    private formatSpellBody(card: Card): string {
        let bodyTable: string = `Card | ${card.name} // ‎[Card](https://runeterra-library.net/en_us/img/cards/${card.cardCode}.png)\n` +
            `---|---\n` +
            `**Rarity** | ${card.rarity}\n` +
            `**Region** | ${card.region}\n` +
            `**Card Type** | Spell\n` +
            `**Mana Cost** | ${card.cost}\n` +
            `**Spell Speed** | *${card.spellSpeed}*\n` +
            `**Card Text** | ${card.description}\n` +
            `**Flavor Text** | *${card.flavorText.replace(/\n/g, ' ')}*\n`
        return bodyTable
    }

    private formatUnitBody(card: Card): string {
        let bodyTable: string = `Card | ${card.name} // ‎[Card](https://runeterra-library.net/en_us/img/cards/${card.cardCode}.png)  // [Full Art](https://runeterra-library.net/en_us/img/cards/${card.cardCode}-full.png)\n` +
            `---|---\n` +
            `**Rarity** | ${card.rarity}\n` +
            `**Region** | ${card.region}\n` +
            `**Card Type** | Unit - Follower\n` +
            `**Mana Cost** | ${card.cost}\n` +
            `**Attack** | ${card.attack}\n` +
            `**Health** | ${card.health}\n` +
            `**Keywords** |*${card.keywords.join(', ') || 'None.'}*\n` +
            `${card.descriptionRaw ? `**Card Text** | ${card.descriptionRaw}\n` : ``}` +
            `**Effect Speed** | *Burst*\n` +
            `**Flavor Text** | *${card.flavorText.replace(/\n/g, ' ')}*\n`
        return bodyTable
    }
}
