
export class Card {
    word: string;
    type: CardType;
    state: CardState;
}

export enum CardState {
    UNKNOWN,
    REVEALED
}

export enum CardType {
    BLUE_AGENT,
    RED_AGENT,
    CIVILIST,
    ASSASSIAN
}