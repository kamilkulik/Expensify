const address = ['1299 S Juniper Street', 'Philadelphia', 'Pennsylvania', '19147'];

console.log(`You are in ${address[1]} ${address[2]}`)


const [ street, city, state, ] = address; // items matching BY POSITION

console.log(`You are in ${city} ${state}`)

const [ , , , zip ] = address;

console.log(`${street} in ${city} has a zip code: ${zip}`)

const book = [ , 'Skin in the Game', 'Audible' ];

const [ author = 'Nassim Taleb', title ] = book;

console.log(`${author} is the author of ${title}`)

const [ , , platform ] = book;

console.log(`${title} is available on ${platform}`)

const item = [ 'Coffee (hot)', '$2.00', '$2.50', '$2.75' ];

const [ product, , medium, ] = item;

console.log(`A medium ${product} costs ${medium}`)