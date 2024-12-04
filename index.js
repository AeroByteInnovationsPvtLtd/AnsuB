const express = require('express');
const app = express();
const port = 3000;

// Products Data
const products = {
  'men': {
    't-shirt' : [
    { id: 1,
      title: "Men's Irregular Geometric Pattern and Alphabet Print Sports Collar Tshirt (Rizim Temu Print Polo-Black)",
      price: 449,
      image:'public/image/ts-1',
      brand : 'Generic'
     },
     { id: 2,
      title: "'LEOTUDE Men's Full Sleeve Regular Fit Tshirt, Round Neck Cottonblend T-Shirt (Color Multicolor)",
      price: 599,
      image:'public/image/ts-2',
      brand:'Leotude'
     },
      { id: 3,
       title: 'Lymio Men T-Shirt || T-Shirt for Men || Polo T Shirt || T-Shirt (polo-30-33)',
       price: 399,
       image:'public/image/ts-3',
       brand : 'Lymio'
      },
      { id: 4, title: 'AUSK Men Hoodies T-Shirt || T-Shirt for Mens || Hoodies for Men',
         price: 677,
         image:'public/image/ts-4',
         brand : 'AUSK'},

      { id: 5, 
        title: 'Noble Monk Half Sleeve Polo T-Shirt for Mens | Collar Tshirt |Casual T-Shirt for Men',
        price: 339,
        image:'public/image/ts-5',
        brand :'Noble Monk'
      },
      { id: 6,
         title: "Lymio Men's Solid Regular Fit T-Shirt",
         price: 599,
         image:'public/image/ts-6',
        brand :'Greciilooks'}
    ],
    'shirt' : [
      { id: 7,
        title:'Majestic Man Men Small Checkered Slim Fit Cotton Casual Shirt',
        price: 869,
        image:'public/image/s-1',
        brand:'Tommy Hilfiger'
      },
      { id: 8, 
        title: "IndoPrimo Men's Cotton Casual Regular Fit Green Checks Shirt for Men Full Sleeves - Harley", 
        price: 1179,
        image:'public/image/s-2',
        brand:'Van Heusen'
      },
      { id: 9,
         title: 'Lymio Casual Shirt for Men|| Shirt for Men|| Men Stylish Shirt (Rib-Shirt)',
          price: 949,
           image:'public/image/s-3',
           brand :'Tommy Hilfiger'
        },
      { id: 10,
         title: 'Majestic Man Men Box Checkered Slim Fit Cotton Casual Shirt',
          price: 1330,
           image:'public/image/s-4',
           brand :"Levi's"
          },
      { id: 11,
         title: "Allen Solly Men's Slim Fit Shirt",
          price: 469,
           image:'public/image/s-5',
           brand :'Nike'
          },
      { id: 12, 
        title: "Miraan Men's Casual Denim Regular Fit Shirt (SIGDENIMM)",
         price: 590,
          image:'public/image/s-6',
          brand :'Van Heusen'
        }
    ],
    'jeans'  : [
      { id: 13,
         title: 'Peter England Men Regular Fit Jeans',
         price: 659,
         image:'public/image/j-1',
          brand :'Diesel'
        },
      { id: 14,
         title: "INKD Men's Regular Fit Jeans - Mid-Rise | Cotton Blend | Stretchable Fabric ",
         price: 899,
         image:'public/image/j-2',
          brand :'Calvin Klein Jeans'
        },
      { id: 15,
         title: 'Jack & Jones Mens Ray Boot Cut High-Rise Jeans',
          price: 999,
          image:'public/image/j-3',
           brand :'Calvin Klein Jeans'
          },
      { id: 16,
         title: "Jack & Jones Men's Skinny Fit Low Rise Jeans",
          price: 1099,
          image:'public/image/j-4',
           brand :'Peter England'
          },
      { id: 17, 
        title: 'DENIMLOOK Men Relaxed Straight Fit Mid Rise Baggy Light Blue Jeans, Denim Look101',
         price: 879,
         image:'public/image/j-5',
          brand :' DENIMLOOK'
        },
      { id: 18,
         title: 'Lymio Men Jeans || Jeans for Men || Jogger Jeans (Jeans-11-12)',
          price: 960,
          image:'public/image/j-6',
          brand :'Diesel'}

    ],
    'jacket' : [
      { id: 19,
         title: "Men's Jacket",
          price: 1399,
           image:'public/image/jk-1',
           brand :'VOXATI'},
      { id: 20,
         title: "Men's Jacket",
          price: 1599,
           image:'public/image/jk-2',
           brand :'VOXATI'},
      { id: 21,
         title: "jacket for men",
          price: 1129,
           image:'public/image/jk-3',
           brand :'Denim'},
      { id: 22,
         title: "Urbano Fashion Men's Regular Fit Washed Full Sleeve",
          price: 1099,
           image:'public/image/jk-4',
           brand :'Denim'},
      { id: 23,
         title: "Campus Sutra Men's Cotton Colour-Blocked Denim Jacket with Hoodie",
          price: 999,
           image:'public/image/jk-5',
           brand :'Denim'},
      { id: 24,
         title: "Urbano Fashion Men's Regular Fit",
          price: 1890,
           image:'public/image/jk-6',
           brand :'VOXATI'}
    ],
    'watch' : [
      { id: 25,
         title: "Sonata Analog Champagne Dial Men's Watch-NN77049YM01/NP77049YM01",
          price: 899,
           image:'public/image/w-1',
           brand :'Sonata'},
      { id: 26,
         title: "Fastrack Fastfit Quartz Analog Grey Dial Silicone Strap Unisex Watch-NS68011PP08",
          price: 945,
           image:'public/image/w-2',
           brand :'Fastrack'},
      { id: 27,
         title: "Titan Men's Timeless Style Analog Watch: Refined Black Dial and Metal Strap-1806NM01",
          price: 929,
           image:'public/image/w-3',
           brand :'Titan'},
      { id: 28,
         title: "LOUIS DEVIN WT005 Stainless Steel Chain Analog Wrist Watch for Men",
          price: 1099,
           image:'public/image/w-4',
           brand :'LOUIS DEVIN'},
      { id: 29,
         title: "LOUIS DEVIN Mesh Steel Chain Analog Wrist Watch for Men (LD-G042)",
          price: 1999,
           image:'public/image/w-5',
           brand :'LOUIS DEVIN'},
      { id: 30,
         title: "Casio Enticer Analog White Dial Men's Watch (MTP-V300L-7AUDF, A1177, Silver)",
          price: 1890,
           image:'public/image/w-6',
           brand :'Casio'}
    ],
    'shoes' : [
      { id: 31,
         title: "AADI Men's Black Mesh Outdoor Casual Shoes",
          price: 699,
           image:'public/image/sh-1',
           brand :'AADI'},
      { id: 32,
         title: "Lancer Men's Sports Running Shoes Indus-251",
          price: 899,
           image:'public/image/sh-2',
           brand :' LANCER'},
      { id: 33,
         title: "Exclusive Trendy Sports Running Shoes | Casual Shoe | Sneakers for Men's & Boy's",
          price: 429,
           image:'public/image/jk-3',
           brand :'BRUTON'},
      { id: 34,
         title: "Bata 8216 Boss-Grip Black Derby Shoes for Men|Birthday Parties|Family Gatherings",
          price: 760,
           image:'public/image/sh-4',
           brand :'Bata'},
      { id: 35,
         title: "Men Sport Shoes | Running Shoes | Casual Walking Shoes | Sneakers",
          price: 499,
           image:'public/image/sh-5',
           brand :'BRUTON'},
      { id: 36,
         title: "Sports,Gym, Trending, Stylish Running Shoes for Men (White)",
          price: 1474,
           image:'public/image/sh-6',
           brand :'BERSACHE '}
    ]
  },
//=========================================================================
  'women': {
    't-shirt' : [
      { id: 37,
         title: "Women's Camouflage Half Sleeve Boyfriend/Loose Fit T-Shirt",
          price: 289,
           image:'public/image/gt-5',
            brand:"LEOTUDE"
          },
      { id: 38,
         title: "Stripe Printed Short Sleeve Regular Fit Top for Women ",
          price: 349,
           image:'public/image/gt-6' ,
            brand:'TOPLOT'
          },
      { id: 39,
         title: "Beige Printed Loose Fit Crew-Neck Crop T-Shirt for Women",
          price: 299,
           image:'public/image/gt-4',
            brand:'HELLCAT'
          },
      { id: 40,
         title: "Combo of Plain Color Stylish Up and Down Cotton Tshirt for Women ",
          price: 388,
           image:'public/image/gt-3',
           brand:'Fabricorn'
          },
      { id: 41,
        
        title: " Allen Solly Women's Regular fit T-Shirt",
          price: 399,
          image:'public/image/gt-2',
         brand:'Allen'
        },
      { id: 42,
         title: " Women's Round Neck Solid Lounge T-Shirts | Relaxed Fit,Terry Modal & Half-Sleeve Tshirt", price: 599,
         image:'public/image/gt-1' ,
        brand:'Bummer'

      }
    ],
    'shirt' : [
      { id: 43, 
        title: "Shirt for Women | Women Shirt | Long Shirt for Women | Korean Shirt Tops for Women ", 
        price: 469,
         image:'public/image/gs-1'  ,
        brand:'Leriya Fashion'

      },
      { id: 44,
         title: " Women's Plus Size Casual Longline Cotton Shirts (2XL to 7XL)",
         price: 850,
         image:'public/image/gs-2' ,
        brand:'Indietoga'

      },
      { id: 45,
         title: " Cotton Linen Long Sleeve Trendy Stylish Casual Formal Shirt for Women | Girl(Large) Pink", 
        price: 256,
         image:'public/image/gs-3' ,
        brand:'Generic'

      },
      { id: 46,
         title: "Women & Girls Beige Solid Color Button Front Texture Long Sleeve Slim Fit Shirt (Wshirts 144) ",
         price: 496,
         image:'public/image/gs-4' ,
        brand:'Shasmi'
      },
      { id: 47, 
        title: "FUNDAY FASHION Women Regular Fit Solid V Collered Casual Shirt ",
         price: 359,
         image:'public/image/gs-5' ,
        brand:'FUNDAY FASHION'
      },
      { id: 48,
         title: " GRECIILOOKS Shirt for Women | Women Shirt | Long Shirt for Women | Shirt Tops for Women ", price: 549,
         image:'public/image/gs-6' ,
        brand:'GRECIILOOKS'
      }
    ],
    'jeans'  : [
      { id: 49, title: "Women's Straight fit Jeans (High Rise | Full Length) ", price: 879, image:'public/image/gj-1' ,brand:'Symbol Premium'},
      { id: 50, title: "AKA CHIC Women's Slim Jeans | Jeans Pant for Women ", price: 534, image:'public/image/gj-2' ,brand:'AKA CHIC'},
      { id: 51, title: "AKA CHIC Women's Straight Jeans | Baggy Jeans for Women ", price: 978, image:'public/image/gj-3' ,brand:'AKA CHIC'},
      { id: 52, title: "Jeans for Women || Bootcut Jeans for Women || Wide Leg Jeans Women || Bell Bottom Jeans for Women ", price: 599, image:'public/image/gj-4' ,brand:'Ben Martin'},
      { id: 53, title: "Womens Solid High Rise Cotton Lycra Blend Relaxed Fit Ankle Length Jeans", price: 599, image:'public/image/gj-5' ,brand:'KOTTY'},
      { id: 54, title: " Regular Fit Jeans for Women | Jeans Pant for Women | Baggy Jeans for Women ", price: 799, image:'public/image/gj-6' ,brand:'GRECIILOOKS'}
    ],
    'jacket' : [
      { id: 55, title: " Jacket For Women Biker (Black)", price: 1235, image:'public/image/gjk-1', brand:'Generic'},
      { id: 56, title: " Women's Denim Blend Standard Length Jacket", price: 534, image:'public/image/gjk-2' , brand:'FUNDAY FASHION'},
      { id: 57, title: "Casual Jacket,White Jacket,Women Winter Jacket,Stylish Jacket,Light Weight", price: 667, image:'public/image/gjk-3' , brand:'PERFECT PRODUCTIONS'},
      { id: 58, title: "Women's Polyester Solid Color Long Sleeve Zip Up Bomber Casual Baseball Spring & Autumn Solid Texture Baseball Collar Jacket", price: 599, image:'public/image/gjk-4' , brand:'Shasmi'},
      { id: 59, title: "Women's Windcheater Jacket - Lightweight Polyester Zipper Closure | Full Sleeve Jacket For Winter Season", price: 489, image:'public/image/gjk-5' , brand:'MAYKR'},
      { id: 60, title: "Women Solid Loose fit Denim Jacket", price: 359, image:'public/image/gjk-6' , brand:'FUNDAY FASHION'}
    ],
    'watch' : [
      { id: 62, title: "Rose Gold Plated Mesh Chain Analog Wrist Watch for Women (Black/Blue/Rose Gold Dial) | RG162", price: 569, image:'public/image/gw-1' , brand:'LOUIS DEVIN'},
      { id: 67, title: "Karishma Metal Analog Champagne Dial Women's Watch -Nm2598Ym01", price: 1869,image:'public/image/gw-2' , brand:'Titan'},
      { id: 63, title: "Vyb Aurora Quartz Analog Sea Green Dial Gold Alloy Strap Watch for Women-FV60052YM01W", price: 1694, image:'public/image/gw-3' , brand:'Fastrack'},
      { id: 64, title: "Vyb Showstopper Quartz Analog Khaki Dial Khaki Chain Bracelet Strap Watch for Women-Fv60042Qm01W", price: 1995, image:'public/image/gw-4' , brand:'Fastrack'},
      { id: 65, title: "Women's Rose Gold Watches Black Dial Heart Diamond Japanese Quartz Movement Girls Ladies Wristwatch", price: 2970, image:'public/image/gw-5' , brand:'OLEVS'},
      { id: 66, title: "Premium Brand Digital 4 Colours Square Dial Unisex Wrist Watch for Men Women ", price: 380, image:'public/image/gw-6' , brand:'Acnos'},
     
    ],
    'shoes' : [
      { id: 67, title: "Women's SUPERFLY-02 Sports Running,Walking & Gym Shoes with Lightweight Soleflex", price: 769, image:'public/image/gsh-1' , brand:'ASIAN'},
      { id: 68, title: "Women's Firefly-111 Sports Walking,Running,Gym Shoes Slip-On with Breathable Light Weight", price: 34, image:'public/image/gsh-2' , brand:'ASIAN'},
      { id: 69, title: "Women's Firefly-10 Sports Running,Walking,Gym,Training,Casual Slip-On ", price: 679, image:'public/image/gsh-3' , brand:'Doctor Walk'},
      { id: 70, title: "Women's Stylish Hook & Loop Sneakers for Outdoor|Embellished|Casual", price: 989, image:'public/image/gsh-4' , brand:'FAUSTO'},
      { id: 71, title: "Women's Walking Shoe", price: 325, image:'public/image/gsh-5' , brand:'Campus'},
      { id: 72, title: "Slippers For Women Winter Sandals Casual Flats Home Footwear Man Girls Sliders Flip Flops", price: 499, image:'public/image/gsh-6' , brand:'DRUNKEN'}
    ]
  }
}



// Routes
app.get('/', (req, res) => {
  res.send('Welcome to the Product API!');
});
 app.get('/products' , (req, res)=>{
  res.json(products)
 })

 //==========================================

app.get('/products/men', (req, res) => {
  res.json(products.men);
});
app.get('/products/men/t-shirt', (req, res)=>{
  res.json(products.men['t-shirt'])
})
app.get('/products/men/shirt', (req, res)=>{
  res.json(products.men['shirt'])
})
app.get('/products/men/jeans', (req, res)=>{
  res.json(products.men['jeans'])
})
app.get('/products/men/jacket', (req, res)=>{
  res.json(products.men['jacket'])
})
app.get('/products/men/watch', (req, res)=>{
  res.json(products.men['watch'])
})
app.get('/products/men/shoes', (req, res)=>{
  res.json(products.men['shoes'])
})

//  ================================================

app.get('/products/women', (req, res) => {
  res.json(products.women);
});

app.get('/products/women/bracelet', (req, res) => {
  res.json(products.women['bracelet']);
});
app.get('/products/women/ring', (req, res) => {
  res.json(products.women['ring']);
});
app.get('/products/women/necklace', (req, res) => {
  res.json(products.women['necklace']);
});
app.get('/products/wowen/earing', (req, res) => {
  res.json(products.women['earing']);
});











// Start Server
app.listen(port, () => {
  console.log(`API is running on http://localhost:${port}`);
});
