const cart = [
    {
        namme: "banh",
        quantity: 2,
        price: 5000

    },
    {
        namme: "keo",
        quantity: 3,
        price: 3000

    },
    {
        namme: "kem",
        quantity: 1,
        price: 1000

    },
]
const sum = cart.reduce((pre,curr)=>{
    return pre + curr.quantity * curr.price;
}, 0)
console.log(sum);