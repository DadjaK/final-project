/* Code for buy page */

const monopoliser = {
    name: 'Monopoliser Game',
    expansion: '1 Set',
    prefix: 'FG000234',
    start_number: 258456,
    price: 25.99
}

const no_clue = {
    name: 'No Clue Game',
    expansion: '2 Sets',
    prefix: 'FG000235',
    start_number: 852654,
    price: 27.99
}

const terminal_fantasy = {
    name: 'Terminal Fantasy',
    expansion: '3 Sets',
    prefix: 'RPG100123',
    start_number: 951357,
    price: 32.99
}

const land_of_the_unknown = {
    name: 'Land of The Unknown',
    expansion: '4 Sets',
    prefix: 'RPG100124',
    start_number: 753159,
    price: 34.99
}

const the_game_of_existence = {
    name: 'The Game of Existence',
    expansion: '4 Sets',
    prefix: 'SG009153',
    start_number: 753159,
    price: 43.99
}

const risky_business = {
    name: 'Risky Business',
    expansion: 'SG009154',
    prefix: 'VB801',
    start_number: 753159,
    price: 40.99
}


const custom = {
    custom_avatar_pieces: 5,
    custom_dice: 3,
    one_expansion_set: 2,
    two_expansion_set: 4,
    three_expansion_set: 6,
    four_expansion_set: 8,
    five_expansion_set: 10
}

const tax = 0.07;
let total = 0;
let tax_amount = 0;

let expansion_style = document.getElementById('game-section');
let custom_label = document.getElementById('custom-label');
let custom_section = document.getElementById('custom-options');
let purchase = document.getElementById('btn-purchase');
let order = document.getElementById('order-show');

function changeImage() {
    let img_sel = document.getElementById('game-style').value;
    let img_src = '/images/' + img_sel + '.png';

    const img = document.getElementById('game');
    img.src = img_src;

    displayElement(expansion_style, 'inline');
    displayElement(custom_label, 'block');
    displayElement(custom_section,'flex');
}

window.onload = function() {
    displayElement(expansion_style, 'none');
    displayElement(order, 'none');
    displayElement(custom_label, 'none');
    displayElement(custom_section, 'none');
    displayElement(purchase, 'none');
}

function displayElement(my_element, type) {
    my_element.style.display = type;
}

function addOrder(game) {
    displayElement(order, 'flex');
    document.getElementById('rec-game').innerHTML = game.name;
    document.getElementById('rec-game-price').innerHTML = '$'+game.price;
    total = game.price;
    
    document.getElementById('rec-expansion').innerHTML = 'Frame expansion: '+game.expansion;
    let price_expansion;
    if(game.expansion == '1 Set'){
        price_expansion = custom.one_expansion_set;
    } else if(game.expansion == '2 Sets'){
        price_expansion = custom.two_expansion_set;
    } else if(game.expansion == '3 Sets'){
        price_expansion = custom.three_expansion_set;
    } else if(game.expansion == '4 Sets'){
        price_expansion = custom.four_expansion_set;
    } else if(game.expansion == '5 Sets'){
        price_expansion = custom.five_expansion_set;
    } else {
        price_expansion = 0;
    }
    total += price_expansion;
    document.getElementById('rec-expansion-price').innerHTML = '$'+price_expansion;
    document.getElementById('rec-serial').innerHTML = 'Serial #'+game.prefix + (++game.start_number);

    calculateSub();    
}

function calculateSub() {
    document.getElementById('rec-subtotal').innerHTML = '$'+total;
    calculateTax();
    calculateTotal();
}

function calculateTax() {
    tax_amount = (total * tax).toFixed(2);
    document.getElementById('rec-tax').innerHTML = '$'+tax_amount;
}

function calculateTotal() {
    let finished = total + Number.parseFloat(tax_amount);
    document.getElementById('rec-total').innerHTML = '$'+finished.toFixed(2);
}

function updateOrder() {
    let game = document.getElementById('game-style').value;
    let expansion = document.getElementById('game-expansion-style').value;
    switch(game) {
        case 'monopoliser':
            monopoliser['expansion'] = expansion;
            addOrder(monopoliser);
        break;
        case 'noclue':
            no_clue['expansion'] = expansion;
            addOrder(no_clue);
        break;
        case 'terminalfantasy':
            terminal_fantasy['expansion'] = expansion;
            addOrder(terminal_fantasy);
        break;
        case 'landoftheunknown':
            land_of_the_unknown['expansion'] = expansion;
            addOrder(land_of_the_unknown);
        break;
        case 'thegameofexistence':
            the_game_of_existence['expansion'] = expansion;
            addOrder(the_game_of_existence);
        break;
        case 'riskybusinesss':
            risky_business['expansion'] = expansion;
            addOrder(risky_business);
        break;
    }
    displayElement(purchase, 'inline');
}

function customDice() {
    let dice = document.querySelector('#dice');   
    
    if(dice.checked) {
        document.getElementById('rec-dice').innerHTML = dice.value;
        document.getElementById('rec-dice-price').innerHTML = custom.custom_dice;
        total += custom.custom_dice;
    } else {
        document.getElementById('rec-dice').innerHTML = '';
        document.getElementById('rec-dice-price').innerHTML = '';
        total -= custom.custom_dice;
    }
    calculateSub();
}

function customAvatarPieces() {
    let avatar_pieces = document.querySelector('#avatar-pieces');
    if(avatar_pieces.checked) {
        document.getElementById('rec-avatar-pieces').innerHTML = avatar_pieces.value;
        document.getElementById('rec-avatar-pieces-price').innerHTML = custom.custom_avatar_pieces;
        total += custom.custom_avatar_pieces;
    } else {
        document.getElementById('rec-avatar-pieces').innerHTML = '';
        document.getElementById('rec-avatar-pieces-price').innerHTML = '';
        total -= custom.custom_avatar_pieces;
    }
    calculateSub();
}

function reserveOrder() {
    let step1 = 'Thank you for shopping with us';
    alert('Your game is been reserved. We will notify you when it is ready to be picked up.\n'+
    step1 );
}