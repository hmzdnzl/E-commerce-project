import hero1 from './assets/headerslider/hero-1.png';
import hero2 from './assets/headerslider/hero-2.png';
import men from './assets/categories/men.jpg';
import women from './assets/categories/women.jpg';
import kids from './assets/categories/kids.jpg';
import accessories from './assets/categories/accesories.jpg';
import productCard1 from './assets/products/img-1.jpg';
import productCard2 from './assets/products/img-2.jpg';
import productCard3 from './assets/products/img-3.jpg';
import productCard4 from './assets/products/img-4.jpg';
import productCard5 from './assets/products/img-5.jpg';
import productCard6 from './assets/products/img-6.jpg';
import productCard7 from './assets/products/img-7.jpg';
import productCard8 from './assets/products/img-8.jpg';
import person1 from './assets/productSlider/person-1.png';
import person2 from './assets/productSlider/person-2.png';
import advicedImg from './assets/advicedProduct/adviced.png';
import featuredimg1 from './assets/featuredProducts/featured-1.jpg';
import featuredimg2 from './assets/featuredProducts/featured-2.jpg';
import featuredimg3 from './assets/featuredProducts/featured-3.jpg';
import categoriesCard1 from './assets/shopCategories/card-cover1.jpg';
import categoriesCard2 from './assets/shopCategories/card-cover2.jpg';
import categoriesCard3 from './assets/shopCategories/card-cover3.jpg';
import categoriesCard4 from './assets/shopCategories/card-cover4.jpg';
import categoriesCard5 from './assets/shopCategories/card-cover5.jpg';


export const Data = {
  sliderSection: {
    herofirst: {
      id: 1,
      image: hero1,
      title: 'Summer 2025',
      subtitle: 'NEW COLLECTION',
      description: "We know how large objects will act, but things on a small scale.",
    },
    herosecond: {
      id: 2,
      image: hero2,
      title: 'Fall 2025',
      subtitle: 'NEW COLLECTION',
      description: "We know how large objects will act, but things on a small scale.",
    },
  },
  categorySection: [
    { id: 1, image: men },
    { id: 2, image: women },
    { id: 3, image: kids },
    { id: 4, image: accessories },
  ],
  productCards: [
    { id: 1, image: productCard1, name: "Graphic Design", name2: "English Department", price1: "$16.48", price2:"$6.48" },
    { id: 2, image: productCard2, name: "Graphic Design", name2: "English Department", price1: "$16.48", price2:"$6.48" },
    { id: 3, image: productCard3, name: "Graphic Design", name2: "English Department", price1: "$16.48", price2:"$6.48" },
    { id: 4, image: productCard4, name: "Graphic Design", name2: "English Department", price1: "$16.48", price2:"$6.48" },
    { id: 5, image: productCard5, name: "Graphic Design", name2: "English Department", price1: "$16.48", price2:"$6.48" },
    { id: 6, image: productCard6, name: "Graphic Design", name2: "English Department", price1: "$16.48", price2:"$6.48" },
    { id: 7, image: productCard7, name: "Graphic Design", name2: "English Department", price1: "$16.48", price2:"$6.48" },
    { id: 8, image: productCard8, name: "Graphic Design", name2: "English Department", price1: "$16.48", price2:"$6.48" },
  ],
  productSlider: [
    { id: 1, image: person1, price: "$16.48", title: "FALL 2025", title2: "Vita Classic Product", description: "We know how large objects will act, We know how are objects will act, We know" },
    { id: 2, image: person2, price: "$16.48", title: "WINTER 2025", title2: "Vita Classic Product", description: "We know how large objects will act, We know how are objects will act, We know" },
  ],
  advicedProduct: {
    id: 1,
    image: advicedImg,
    title: "FALL 2025",
    title2: "Part of the Neural Universe",
    description: "We know how large objects will act, but things on a small scale.",
  },
  featuredProducts: [{ id: 1, image: featuredimg1, tab1:"Google", tab2:"Trending", tab3:"New", title: "Loudest à la Madison #1 (L'integral)", 
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date:"22 September 2025", comments: "10 Comments" },
    { id: 2, image: featuredimg2, tab1:"Google", tab2:"Trending", tab3:"New", title: "Loudest à la Madison #1 (L'integral)", 
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date:"22 September 2025", comments: "10 Comments" },
    { id: 3, image: featuredimg3, tab1:"Google", tab2:"Trending", tab3:"New", title: "Loudest à la Madison #1 (L'integral)", 
    description: "We focus on ergonomics and meeting you where you work. It's only a keystroke away.", date:"22 September 2025", comments: "10 Comments" },
],
  shopCategories: [
    { id: 1, image: categoriesCard5, title: "CLOTHS", item:"5 Items"},
    { id: 2, image: categoriesCard4, title: "CLOTHS", item:"5 Items"},
    { id: 3, image: categoriesCard3, title: "CLOTHS", item:"5 Items"},
    { id: 4, image: categoriesCard2, title: "CLOTHS", item:"5 Items"},
    { id: 5, image: categoriesCard1, title: "CLOTHS", item:"5 Items"},
  ],
}