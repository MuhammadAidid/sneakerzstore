const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "AIR FORCE",
    price: 119,
    colors: [
      {
        code: "black",
        img: "./img/Product/air.png",
      },
      {
        code: "darkblue",
        img: "./img/Product/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "IRSHAD X IRSHAD",
    price: 179,
    colors: [
      {
        code: "lightgray",
        img: "./img/Product/IRSHAD X MAKERZ.png",
      },
      {
        code: "green",
        img: "./img/Product/IRSHAD X IRSHAD.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 109,
    colors: [
      {
        code: "lightgray",
        img: "./img/Product/blazer.png"
      },
      {
        code: "green",
        img: "./img/Product/blazer2.png"
      }
    ]
  },
  {
    id: 4,
    title: "Crater",
    price: 129,
    colors: [
      {
        code: "black",
        img: "./img/Product/crater.png"
      },
      {
        code: "lightgray",
        img: "./img/Product/crater2.png"
      }
    ]
  },
  {
    id: 5,
    title: "Hippie",
    price: 99,
    colors: [
      {
        code: "gray",
        img: "./img/Product/hippie.png"
      },
      {
        code: "black",
        img: "./img/Product/hippie2.png"
      }
    ]
  },
  {
    id: 6,
    title: "MAKERZ X IRSHAD",
    price: 234,
    colors: [
      {
        code: "gray",
        img: "./img/Product/MAKERZ X IRSHAD.png"
      },
      {
        code: "black",
        img: "./img/Product/MAKERZ X IRSHAD.png"
      }
    ]
  },
  {
   id: 7,
    title: "IRSHAD X PATEK",
    price: 4500400,
    colors: [
      {
        code: "gray",
        img: "./img/Product/IRSHAD X PATEK PHILIP.png"
      },
      {
        code: "black",
        img: "./img/Product/IRSHAD X PATEK PHILIP.png"
      }
    ]
  }
]; // Properly closed products array

let chosenProduct = products[0]; // Corrected spelling

const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    wrapper.style.transform = `translateX(${-100 * index}vw)`;
    chosenProduct = products[index];
    currentProductTitle.textContent = chosenProduct.title;
    currentProductPrice.textContent = "RW" + chosenProduct.price;
    currentProductImg.src = chosenProduct.colors[0].img;
    
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = chosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = chosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

let currentIndex = 0;

function autoSlide() {
    currentIndex = (currentIndex + 1) % products.length;
    menuItems[currentIndex].click();
}

// Start the auto slider every 4 seconds
let autoSlideInterval = setInterval(autoSlide, 2000);

// Optional: Pause auto slider on user interaction and resume after a delay
menuItems.forEach((item, index) => {
    item.addEventListener("click", () => {
        clearInterval(autoSlideInterval); // Stop auto sliding on manual click

        // Restart auto slider after 10 seconds
        setTimeout(() => {
            autoSlideInterval = setInterval(autoSlide, 2000);
        }, 2000);
    });
});