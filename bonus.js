/*
const student = {
    name: 'nur nahar',
    id: 121,
    address: 'movie cinema',
    isSingle: true,
    friend: ['nila', 'shila', 'bila', 'kila', 'pila'],
    car: {
        brand: 'supra',
        price: 12111229.71,
        year: 2030,
        manufacturer: {
            name: 'toyota',
            ceo: 'Akio Toyoda',
            country: 'India',
        },
    },
    movies: [{name: 'no. 1', year: 2024}, {name: 'king khan', year: 2340}],
    act: function() {
        console.log('acting like sakib khan')
    }
}
console.log(student);
console.log(student.act);
student.act();

const products = [
    {name: 'phone', price: 12000},
    {name: 'laptop', price: 32000},
]
console.log(products[0])
console.log(products[1])
function add(num1, num2) {
    console.log(num1, num2);
    console.log(arguments);
    console.log(arguments[3])       //array like object bole aitake. shudhu function er bhitore kaj kore
}
add(23, 34, 34, 97, 98);    */

const products = [
    {id: 1, name: 'walton Phone', price: 12000},
    {id: 2, name: 'xiami phone', price: 12000},
    {id: 3, name: 'mac book', price: 12000},
    {id: 4, name: 'lenova yoga laptop', price: 12000},
    {id: 5, name: 'dell laptop', price: 12000},
    {id: 6, name: 'samsung Phone', price: 12000},
    {id: 7, name: 'nokia phone', price: 12000},
    {id: 8, name: 'iphone Phone', price: 12000},
    {id: 9, name: 'vivo phone', price: 12000},
]
function matchedProducts(products, search) {
    const matched = []
    for(const product of products) {
        if(product.name.toLowerCase().includes(search.toLowerCase())) {
            matched.push(product);
        }
    }
    return matched
}
const result = matchedProducts(products, 'Phone');
console.log(result)