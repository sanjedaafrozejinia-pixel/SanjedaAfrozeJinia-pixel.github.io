const data = {
  drinks: {
    title: "Cold Drinks",
    items: [
      ["assets/cold-drinks.jpg","Bebidas frías"],
      ["assets/cold-drinks.jpg","Refrescos"],
      ["assets/cold-drinks.jpg","Agua y zumos"]
    ]
  },
  chips: {
    title: "Chips & Snacks",
    items: [
      ["assets/chips-snacks.jpg","Patatas y chips"],
      ["assets/chips-snacks.jpg","Snacks"],
      ["assets/chips-snacks.jpg","Productos para picar"]
    ]
  },
  alcohol: {
    title: "Bebidas alcohólicas · 18+",
    items: [
      ["assets/alcoholic-drinks.jpg","Vino"],
      ["assets/alcoholic-drinks.jpg","Cerveza"],
      ["assets/alcoholic-drinks.jpg","Licores"]
    ]
  }
};
const gallery=document.getElementById("gallery");
const title=document.getElementById("galleryTitle");
const items=document.getElementById("galleryItems");
document.querySelectorAll(".category-card").forEach(card=>{
  card.addEventListener("click",()=>{
    const section=data[card.dataset.gallery];
    title.textContent=section.title;
    items.innerHTML=section.items.map(item=>`<div class="gallery-item"><img src="${item[0]}" alt="${item[1]}"><p>${item[1]}</p></div>`).join("");
    gallery.hidden=false;
    gallery.scrollIntoView({behavior:"smooth",block:"start"});
  });
});
document.getElementById("closeGallery").addEventListener("click",()=>{gallery.hidden=true;});
