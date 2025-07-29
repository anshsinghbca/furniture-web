
let bagItems = JSON.parse(localStorage.getItem("bagItems")) || [];


const bagCount = document.getElementById("bagCount");
bagCount.innerText = bagItems.length;








document.querySelectorAll(".addBag").forEach((btn) => {
  btn.addEventListener("click", () => {
    const box = btn.closest(".box");
    const itemName = box.querySelector(".item-name").innerText;
    const brandName = box.querySelector("#brand-name").innerText;
    const price = box.querySelector("#currprice").innerText;
    const img = box.querySelector(".box-img").style.backgroundImage;

    const item = {
      name: itemName,
      brand: brandName,
      price: price,
      image: img.slice(5, -2) // "url(" aur ")" remove
    };

    // Array me push + LocalStorage update
    bagItems.push(item);
    localStorage.setItem("bagItems", JSON.stringify(bagItems));

    // Bag count update
    bagCount.innerText = bagItems.length;
    alert(`${itemName} Added to Bag!`);
  });
});

// Bag icon par click → Cart page par redirect
document.querySelector(".bag").addEventListener("click", () => {
  window.location.href = "cart.html";
});
