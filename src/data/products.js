import outfit1 from "../assets/colths/images.jpeg";
import outfit2 from "../assets/colths/images (1).jpeg";
import outfit3 from "../assets/colths/2024-actor-adobe-art-19791932.avif";
import outfit4 from "../assets/colths/2024-4k-video-actor-adobe-19791645.avif";
import outfit5 from "../assets/colths/2024-4k-video-actor-adobe-19791643.avif";
import bag1 from "../assets/bags/1598-39-719886-product-1.webp";
import bag2 from "../assets/bags/51y4mjrXzbL.jpg";
import bag3 from "../assets/bags/81sNMpZnPQL.jpg";
import bag4 from "../assets/bags/Bags_for_collection_2.jpg";
import bag5 from "../assets/bags/ChatGPT_Image_Sep_17_2026_10_17_50_AM.webp";
import bag6 from "../assets/bags/images (2).jpeg";
import bag7 from "../assets/bags/LY-SHARK-Genuine-Leather-Bag-Ladies-Handbag-Women-Shoulder-Bag-Women-Messenger-Bag-Female-Crossbody-Bag.jpg_640x640_6f8d8250-06d5-4090-9e05-ee2bc7033131_1600x.jpg";
import trouser1 from "../assets/Trousers/2PCSTCSV984T_999_2.webp";
import trouser2 from "../assets/Trousers/images (3).jpeg";
import trouser3 from "../assets/Trousers/images (4).jpeg";
import trouser4 from "../assets/Trousers/jlt-26-8092-b_5e0a7cac-d307-49b7-b7d1-65d601e044a2 - Copy.webp";
import trouser5 from "../assets/Trousers/jlt-26-8092-b_5e0a7cac-d307-49b7-b7d1-65d601e044a2.webp";
import trouser6 from "../assets/Trousers/laces-embellished-cotton-palazzo-white-pt25.webp";
import trouser7 from "../assets/Trousers/Untitled-2_0007_MTB03594_bee09497-77f1-4283-b09b-114b13be620b.webp";

export const categories = [
  { id: "dresses", name: "Dresses and suits", note: "Premium fabrics, flawless stitching" },
  { id: "bags", name: "Bags", note: "Latest imported styles" },
  { id: "winter", name: "Winter wear", note: "Coats, sweaters, shawls" },
  { id: "trousers", name: "Trousers", note: "Everyday fits" },
  { id: "sneakers", name: "Sneakers", note: "Comfort with style" },
];

export const products = [
  { id: 9, name: "Pearl grey embroidered suit", category: "dresses", price: 6800, image: outfit1 },
  { id: 10, name: "Midnight embroidered two-piece", category: "dresses", price: 5200, image: outfit2 },
  { id: 11, name: "New season suit 03", category: "dresses", price: 6400, image: outfit3 },
  { id: 12, name: "New season suit 04", category: "dresses", price: 7200, image: outfit4 },
  { id: 13, name: "New season suit 05", category: "dresses", price: 5900, image: outfit5 },
  { id: 14, name: "Sage charm handbag", category: "bags", price: 7500, image: bag1 },
  { id: 15, name: "Taupe braided-handle tote", category: "bags", price: 6200, image: bag2 },
  { id: 16, name: "Turquoise structured tote", category: "bags", price: 6800, image: bag3 },
  { id: 17, name: "Burgundy and cocoa tote set", category: "bags", price: 7900, image: bag4 },
  { id: 18, name: "Ivory croc-effect tote", category: "bags", price: 8500, image: bag5 },
  { id: 19, name: "Caramel mini crossbody", category: "bags", price: 4800, image: bag6 },
  { id: 20, name: "Forest green contrast tote", category: "bags", price: 7200, image: bag7 },
  { id: 21, name: "Black embroidered palazzo", category: "trousers", price: 3900, image: trouser1 },
  { id: 22, name: "Sage embroidered trousers", category: "trousers", price: 3600, image: trouser2 },
  { id: 23, name: "Lilac pearl-detail trousers", category: "trousers", price: 4200, image: trouser3 },
  { id: 24, name: "Ivory floral-hem trousers", category: "trousers", price: 4100, image: trouser4 },
  { id: 25, name: "Ivory floral palazzo", category: "trousers", price: 4100, image: trouser5 },
  { id: 26, name: "White lace-trim palazzo", category: "trousers", price: 3800, image: trouser6 },
  { id: 27, name: "White contrast-trim trousers", category: "trousers", price: 3500, image: trouser7 },
];

export const formatPrice = (n) => "Rs. " + n.toLocaleString("en-PK");
