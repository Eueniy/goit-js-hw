"use strict";

const task03 = document.querySelector(".task03");
task03.style.display = "block";

const images = [
  {
    url:
      "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url:
      "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url:
      "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
];

const galleryList = document.querySelector("#gallery");
galleryList.style.listStyle = "none";

function createGalleryList() {
  let list = [];
  images.forEach(el => {
    const li = `<li><img src="${el.url}" alt="${el.alt}" style="height: 150px;"></li>`;
    list.push(li);
  });
  return list;
}

const listWithImages = String(createGalleryList()).split(",").join(" ");
galleryList.insertAdjacentHTML("afterbegin", listWithImages);
