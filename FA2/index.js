const qiymet = document.getElementById('highestPrice');



// 1

// const productsPriceValue = document.getElementById('productsPriceValue');
// const productName = document.getElementById('productName');
// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         let highPrice = 0;
//         let produchighPrice = 0;

//         data.forEach(item => {
//             if (item.unitPrice > highPrice) {
//                 highPrice = item.unitPrice;
//                 produchighPrice = item;
//             }
//         });

        // productsPriceValue.textContent = `${highPrice}`; 
//         productName.textContent = produchighPrice .name;
//     });




// 2
// const average = document.getElementById('average')
// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         const stocks = data.map(item => item.unitsInStock); 
//         const Stockcemi = stocks.reduce((total, stock) => total + stock, 0);
//         const averageStock = Stockcemi/ stocks.length; 

//         average.textContent= `${averageStock}`

//     })


// // 3

// const names = document.getElementById('names')

// fetch('https://northwind.vercel.app/api/products')
//     .then(res => res.json())
//     .then(data => {
//         const adlar = data.map(product => product.name); 
//         const adlariyaz =adlar.filter(name => name.startsWith('C'));
//         names.textContent = `${adlariyaz}`
//     })
   
// 4

// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//        const london = data.filter(item => item.address.city === "London");
//        london.forEach(item => {
//             console.log(item.contactName);
//        });
//     });




// 5

// const sayilar = document.getElementById('sayilar')

// fetch('https://northwind.vercel.app/api/customers')
//     .then(res => res.json())
//     .then(data => {
//         const sayi = data.filter(item =>item.address.region === "NULL")
//         sayilar.textContent = `umumi sayi:${sayi.length}`
//     })

// 6

// const sayilar = document.getElementById('sayilar')

// fetch('https://jsonplaceholder.typicode.com/posts')
//     .then(res => res.json())
//     .then(data => {
//         const sayi = data.filter(item =>item.userId === 1)
//         sayilar.textContent = `umumi sayi:${sayi.length}`
//     })





