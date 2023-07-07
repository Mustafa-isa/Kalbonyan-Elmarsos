import React from "react";
import { UseData } from "../../src/context/Context";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./Product.css";
import ProductItem from "../../src/product/ProductItem";
function Product() {
  const cars = [
    {
      id:1,
      name: "Porsche 911",
      class: "Sports Car",
      description:
        "The Porsche 911 is a true icon in the sports car world, known for its sleek design, impressive performance, and superior handling. It's a two-door, two-seat coupe that's perfect for those who love to feel the wind in their hair and the road beneath their wheels.",
      seats: 2,
      luggage: 2,
      image: "../products_data/image 3.png"
    },
    {
      id:2,
      name: "BMW 7 Series",
      class: "Luxury Car",
      description:
        "The BMW 7 Series is the ultimate luxury car, offering unparalleled comfort, style, and technology. With its sleek exterior and spacious interior, this four-door sedan is perfect for those who demand the very best in automotive design and performance.",
      seats: 5,
      luggage: 3,
      image: "../products_data/car3.png"
    },
    {
      id:3,
      name: "Range Rover Sport",
      class: "SUV",
      description:
        "The Range Rover Sport is a versatile SUV that's perfect for both on and off-road adventures. With its powerful engine and advanced four-wheel drive system, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space.",
      seats: 7,
      luggage: 4,
      image: "../products_data/car3.png"
    },
    {
      id:4,
      name: "Mercedes-Benz S-Class",
      class: "Luxury Car",
      description:
        "The Mercedes-Benz S-Class is the epitome of luxury and style, with its sleek lines and advanced technology. It's a four-door sedan that's perfect for those who demand the very best in automotive design and performance.",
      seats: 5,
      luggage: 2,
      image: "../products_data/car2.png"
    },
    {
      id:5,
      name: "Tesla Model S",
      class: "Electric Car",
      description:
        "The Tesla Model S is a high-performance electric car that's perfect for those who want to combine luxury with sustainability. With its sleek design and advanced technology, this four-door sedan offers a smooth and quiet ride. It also has plenty of space for passengers and luggage.",
      seats: 5,
      luggage: 2,
      image: "../products_data/car1.png"
    },
    {
      id:6,
      name: "Bentley Bentayga",
      class: "Luxury SUV",
      description:
        "The Bentley Bentayga is the ultimate luxury SUV, offering unparalleled comfort, style, and performance. With its powerful engine and advanced technology, this vehicle can handle any terrain with ease. It's also incredibly spacious, with room for up to seven passengers and plenty of cargo space.",
      seats: 7,
      luggage: 4,
      image: "../products_data/Car.png"
    }
  ];

  return (
    <div className="container_swipper_div">
      <Swiper
        scrollbar={{ draggable: true }}
        spaceBetween={12}
        navigation
        breakpoints={{
          640: {
            slidesPerView: 2
          },
          1024: {
            slidesPerView: 4
          }
        }}
        pagination={{ clickable: true }}
      >
        {cars.map(product => (
          <SwiperSlide key={product.id}>
            <ProductItem key={product.id} data={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Product;
