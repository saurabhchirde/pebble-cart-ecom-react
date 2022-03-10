import uuid from "react-uuid";
import {
  lens85mm,
  actionCamera,
  cameraCanon,
  canon6dCamera,
  lensForMobile,
  polaroidCamera,
  sonyAlphaCamera,
  sonySmallCamera,
} from "../Img/Products/ProductImages";

const allProductList = [
  {
    id: uuid(),
    category: "camera",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 10999,
    rating: 4,
    totalRating: 13,
    wishlist: false,
    src: sonySmallCamera,
    inStock: true,
    newestArrival: true,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "canon",
    title: "Canon EOS 1500D 24.1 Digital SLR Camera EF S18-55 is II Lens",
    price: 35100,
    rating: 4.5,
    totalRating: 40,
    wishlist: false,
    src: canon6dCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "lens",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 10999,
    rating: 4,
    totalRating: 13,
    wishlist: false,
    src: lens85mm,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "lens",
    brand: "papa",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 540,
    rating: 2,
    totalRating: 25,
    wishlist: false,
    src: lensForMobile,
    inStock: false,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "polaroid",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 12999,
    rating: 4.3,
    totalRating: 14,
    wishlist: false,
    src: polaroidCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 180400,
    rating: 4.7,
    totalRating: 34,
    wishlist: false,
    src: sonyAlphaCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "canon",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 18999,
    rating: 2,
    totalRating: 30,
    wishlist: false,
    src: cameraCanon,
    inStock: false,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "gopro",
    title: "GoPro HERO10 Black - Front LCD and Touch Rear Screens,23MP.",
    price: 35400,
    rating: 4.5,
    totalRating: 103,
    wishlist: false,
    src: actionCamera,
    inStock: true,
    newestArrival: true,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 10999,
    rating: 4,
    totalRating: 13,
    wishlist: false,
    src: sonySmallCamera,
    inStock: false,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "canon",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 35100,
    rating: 4.5,
    totalRating: 40,
    wishlist: false,
    src: canon6dCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "lens",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 10999,
    rating: 4,
    totalRating: 13,
    wishlist: false,
    src: lens85mm,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "lens",
    brand: "papa",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 540,
    rating: 2,
    totalRating: 25,
    wishlist: false,
    src: lensForMobile,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "polaroid",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 12999,
    rating: 4.3,
    totalRating: 14,
    wishlist: false,
    src: polaroidCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 180400,
    rating: 4.7,
    totalRating: 34,
    wishlist: false,
    src: sonyAlphaCamera,
    inStock: true,
    newestArrival: true,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "canon",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 18999,
    rating: 2,
    totalRating: 30,
    wishlist: false,
    src: cameraCanon,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "gopro",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 35400,
    rating: 4.5,
    totalRating: 103,
    wishlist: false,
    src: actionCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 10999,
    rating: 4,
    totalRating: 13,
    wishlist: false,
    src: sonySmallCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "canon",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 35100,
    rating: 4.5,
    totalRating: 40,
    wishlist: false,
    src: canon6dCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "lens",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 10999,
    rating: 4,
    totalRating: 13,
    wishlist: false,
    src: lens85mm,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "lens",
    brand: "papa",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 540,
    rating: 2,
    totalRating: 25,
    wishlist: false,
    src: lensForMobile,
    inStock: false,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "polaroid",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 12999,
    rating: 4.3,
    totalRating: 14,
    wishlist: false,
    src: polaroidCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 180400,
    rating: 4.7,
    totalRating: 34,
    wishlist: false,
    src: sonyAlphaCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "canon",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 18999,
    rating: 2,
    totalRating: 30,
    wishlist: false,
    src: cameraCanon,
    inStock: true,
    newestArrival: true,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "gopro",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 35400,
    rating: 4.5,
    totalRating: 103,
    wishlist: false,
    src: actionCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 10999,
    rating: 4,
    totalRating: 13,
    wishlist: false,
    src: sonySmallCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "canon",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 35100,
    rating: 4.5,
    totalRating: 40,
    wishlist: false,
    src: canon6dCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "lens",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 10999,
    rating: 4,
    totalRating: 13,
    wishlist: false,
    src: lens85mm,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "lens",
    brand: "papa",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 540,
    rating: 2,
    totalRating: 25,
    wishlist: false,
    src: lensForMobile,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "polaroid",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 12999,
    rating: 4.3,
    totalRating: 14,
    wishlist: false,
    src: polaroidCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "sony",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 180400,
    rating: 4.7,
    totalRating: 34,
    wishlist: false,
    src: sonyAlphaCamera,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "canon",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 18999,
    rating: 2,
    totalRating: 30,
    wishlist: false,
    src: cameraCanon,
    inStock: true,
    newestArrival: false,
  },
  {
    id: uuid(),
    category: "camera",
    brand: "gopro",
    title: "Sony DSC W830 Cyber-Shot 20.1 MP Point & Shoot Camera",
    price: 35400,
    rating: 4.5,
    totalRating: 103,
    wishlist: false,
    src: actionCamera,
    inStock: true,
    newestArrival: true,
  },
];

export { allProductList };
