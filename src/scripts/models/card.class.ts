export class Card {
    value;
    isSelected = false;
    isMatched = false;
    DOMelement:HTMLElement |null = null;
    state = 'Hidden';

    constructor(value: string) {
        this.value = value;
    };

}