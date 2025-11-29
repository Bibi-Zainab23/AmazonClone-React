import React from "react";
import ShopBox from "./ShopBox";

export default function Shop() {
  const items = [
    {
      title: "Deals on Electronics",
      img: "/media/box4.jpg",
      link: "/products",
    },
    {
      title: "Shop Fashion for less",
      img: "/media/box2.jpg",
      link: "/products",
    },
    {
      title: "Home Decor",
      img: "/media/box3.jpg",
      link: "/products",
    },
    {
      title: "Personal Care",
      img: "/media/home.jpg",
      link: "/products",
    },
    {
      title: "Best Sellers in Books",
      img: "/media/box5.jpg",
      link: "/products",
    },
    {
      title: "Kitchen Appliance",
      img: "/media/box6.jpg",
      link: "/products",
    },
    {
      title: "iPad & Accessories",
      img: "/media/box7.jpg",
      link: "/products",
    },
    {
      title: "Accent Furnitures",
      img: "/media/box8.jpg",
      link: "/products",
    },
  ];

  return (
    <div className="shop">
      {items.map((box, index) => (
        <ShopBox
          key={index}
          title={box.title}
          img={box.img}
          link={box.link}
        />
      ))}
    </div>
  );
}
