// This is the card model. Every card has 5 properties: Attack, Defense, Health, Cost and Ressources.
// there ist a constructor for each card

export class CardModel {
    attack: number;
    defense: number;
    health: number;
    cost: number;
    resources: number;
    constructor(attack: number, defense: number, health: number, cost: number, resources: number) {
        this.attack = attack;
        this.defense = defense;
        this.health = health;
        this.cost = cost;
        this.resources = resources;
    }
}

