export class Card {
    value;
    isSelected = false;
    isMatched = false;
    DOMelement:HTMLElement |null = null;

    constructor(value: string) {
        this.value = value;
    };

}