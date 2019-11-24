export interface Card {
    associatedCards: string[];
    associatedCardRefs: string[];
    assets: AssetsEntity[];
    region: string;
    regionRef: string;
    attack: number;
    cost: number;
    health: number;
    description: string;
    descriptionRaw: string;
    levelupDescription: string;
    levelupDescriptionRaw: string;
    flavorText: string;
    artistName: string;
    name: string;
    cardCode: string;
    keywords: string[];
    keywordRefs: string[];
    spellSpeed: string;
    spellSpeedRef: string;
    rarity: string;
    rarityRef: string;
    subtype: string;
    supertype: string;
    type: string;
    collectible: boolean;
  }
export interface AssetsEntity {
  gameAbsolutePath: string;
  fullAbsolutePath: string;
}

const cardType = <const> ['Champion', 'Spell', 'Unit', 'Ability']
export type CardType = typeof cardType[number]