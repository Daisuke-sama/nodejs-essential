const CatalogItem = require('./CatalogItem');
const CatalogCategory = require('./CatalogCategory');

const sneaks = new CatalogItem('Skeaks', 55);
const grind = new CatalogItem('Gring', 100);
const boots = new CatalogItem('Boots', 50);

console.log('grind total: ', `$${boots.total}`);
boots.print();
grind.print();

const catalog_shoes = new CatalogCategory('The cat', [sneaks, grind, boots]);
catalog_shoes.print();
console.log('shoes total: ', `$${catalog_shoes.total}`);

const catalog_grocery = new CatalogCategory('Grocery', [
    new CatalogItem('Fries', 5),
    new CatalogItem('Onions', 3),
]);
catalog_grocery.print();
console.log('grocery total: ', `$${catalog_grocery.total}`);

const catalog = new CatalogCategory('General', [catalog_shoes, catalog_grocery]);
console.log(`\ncatalog total: ${catalog.total}`);
