const lunchMenu = ['Greek Salad', 'Open Sandwich', 'Parsnip Soup', 'Flatbread and Dip'];
const dinnerMenu = ['Lasagne', 'Strogonoff', 'Tagine', 'Katsu Curry'];
const sweetMenu = ['Mixed Berry Ice Cream', 'Chocolate Brownie', 'Orange Cheesecake'];

/* console.log(...lunchMenu);
console.log(lunchMenu);
 */

const eventMenu = [...lunchMenu, ...dinnerMenu, ...sweetMenu];

console.log(eventMenu);