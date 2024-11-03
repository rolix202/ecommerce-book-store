import images from "./bookImages"
const [image1,image2,image3,image4, homeImg_1, homeImg_2, homeImg_3, homeImg_4, homeImg_5, homeImg_6, homeImg_7, homeImg_8] = images

const bookData = [
  {
    image: image1,
    title: "Chain of Iron: Volume 2",
    author: "Cassandra Clare",
    price: 1500.00,  
    loveIcon: true
  },
  {
    image: image2,
    title: "Chain of Thorns",
    author: "Cassandra Clare",
    price: 2500.00, 
    loveIcon: false
  },
  {
    image: image3,
    title: "City of Fallen Angels",
    author: "Cassandra Clare",
    price: 1800.00,  
    loveIcon: true
  },
  {
    image: image4,
    title: "Chain of Thorns",
    author: "Cassandra Clare",
    price: 2200.00, 
    loveIcon: false
  },
  {
    image: image4,
    title: "Clockwork Princess",
    author: "Cassandra Clare",
    price: 1700.00,  
    loveIcon: false
  },
  {
    image: image2,
    title: "Chain of Thorns",
    author: "Cassandra Clare",
    price: 2100.00, 
    loveIcon: false
  },
  {
    image: image1,
    title: "City of Fallen Angels",
    author: "Cassandra Clare",
    price: 1600.00,  
    loveIcon: true
  },
  {
    image: image4,
    title: "Chain of Thorns",
    author: "Cassandra Clare",
    price: 2400.00, 
    loveIcon: false
  },
  {
    image: image2,
    title: "City of Fallen Angels",
    author: "Cassandra Clare",
    price: 1900.00, 
    loveIcon: true
  },
  {
    image: image4,
    title: "Chain of Thorns",
    author: "Cassandra Clare",
    price: 2300.00, 
    loveIcon: false
  },
  {
    image: image1,
    title: "City of Fallen Angels",
    author: "Cassandra Clare",
    price: 2500.00,  
    loveIcon: true
  },
  {
    image: image1,
    title: "City of Fallen Angels",
    author: "Cassandra Clare",
    price: 2000.00,  
    loveIcon: true
  }
];


export default bookData;

export const selected_for_you = [
  {
    pic: homeImg_4,
    book_name: "Financial Feminist",
    author: "Tori Dunlap",
    amount: 2000.00
  },
  {
    pic: homeImg_3,
    book_name: "No More Police",
    author: "Williams Roland",
    amount: 1999.99
  },
  {
    pic: image3,
    book_name: "Chain of Iron: Volume 2",
    author: "Cassandra Clare",
    amount: 299.99
  },
  {
    pic: homeImg_1,
    book_name: "Nona the Ninth",
    author: "Tamsyn Muir",
    amount: 7999.99
  },
  {
    pic: image3,
    book_name: "Chain of Iron: Volume 2",
    author: "Cassandra Clare",
    amount: 299.99
  },
  {
    pic: homeImg_1,
    book_name: "Nona the Ninth",
    author: "Tamsyn Muir",
    amount: 7999.99
  }
]

export const must_buy_it_now  = [
  {
    pic: homeImg_5,
    book_name: "Book Lovers",
    author: "Emily Henry",
    amount: 599.99
  },
  {
    pic: homeImg_6,
    book_name: "Harlem Shuffle",
    author: "Colson Whitehead",
    amount: 1249.99
  },
  {
    pic: homeImg_7,
    book_name: "Two Old Women",
    author: "Velma Walls",
    amount: 95.99
  },
  {
    pic: homeImg_8,
    book_name: "Carrie Soto Is Back",
    author: "Taylor Jenkins Red",
    amount: 3999.99
  },
  {
    pic: homeImg_6,
    book_name: "Chain of Iron: Volume 2",
    author: "Cassandra Clare",
    amount: 249.99
  },
  {
    pic: homeImg_1,
    book_name: "Nona the Ninth",
    author: "Tamsyn Muir",
    amount: 359.99
  }
]