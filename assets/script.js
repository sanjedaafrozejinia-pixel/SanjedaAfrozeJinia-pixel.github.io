const products={
drinks:{title:"BEBIDAS FRÍAS",subtitle:"Refrescos, agua, zumos y bebidas energéticas",icon:"🥤",items:[
["coca-cola.jpg","Coca-Cola"],["coca-cola-zero.jpg","Coca-Cola Zero"],["fanta-orange.jpg","Fanta Naranja"],["fanta-lemon.jpg","Fanta Limón"],["sprite.jpg","Sprite"],["7up.jpg","7UP"],["pepsi.jpg","Pepsi"],["pepsi-max.jpg","Pepsi Max"],["schweppes.jpg","Schweppes"],["nestea.jpg","Nestea"],["aquarius.jpg","Aquarius"],["redbull.jpg","Red Bull"],["monster.jpg","Monster Energy"],["burn.jpg","Burn"],["agua-mineral.jpg","Agua Mineral"],["agua-con-gas.jpg","Agua con Gas"],["agua-coco.jpg","Agua de Coco"],["zumo-naranja.jpg","Zumo de Naranja"]
]},
snacks:{title:"CHIPS Y SNACKS",subtitle:"Patatas, aperitivos, frutos secos y galletas",icon:"🍟",items:[
["lays-original.jpg","Lay's Original"],["lays-sal.jpg","Lay's Sal"],["doritos.jpg","Doritos"],["doritos-picante.jpg","Doritos Picante"],["cheetos.jpg","Cheetos"],["takis.jpg","Takis"],["pringles-original.jpg","Pringles Original"],["pringles-paprika.jpg","Pringles Paprika"],["ruffles.jpg","Ruffles"],["frutos-secos.jpg","Frutos Secos"],["cacahuetes.jpg","Cacahuetes"],["galletas.jpg","Galletas"]
]},
alcohol:{title:"ALCOHOL",subtitle:"Bebidas alcohólicas · Venta exclusivamente a mayores de 18 años",icon:"🍷",items:[
["cerveza-01.jpg","Cerveza"],["cerveza-02.jpg","Cerveza"],["cerveza-03.jpg","Cerveza"],["cerveza-lata-01.jpg","Cerveza en lata"],["vino-tinto.jpg","Vino Tinto"],["vino-blanco.jpg","Vino Blanco"],["vino-rosado.jpg","Vino Rosado"],["whisky-01.jpg","Whisky"],["vodka-01.jpg","Vodka"],["ron-01.jpg","Ron"]
]}};

const area=document.getElementById("productArea");
const buttons=document.querySelectorAll(".category");

function render(category){
 const d=products[category];
 const warning=category==="alcohol"?'<div class="warning">🔞 Venta de alcohol exclusivamente a mayores de 18 años y conforme a la normativa aplicable.</div>':"";
 area.innerHTML=`<div class="panel"><h3>${d.icon} ${d.title}</h3><p>${d.subtitle}</p>${warning}<div class="grid">${d.items.map(([file,name])=>`<article class="card"><img src="assets/${category}/${file}" alt="${name}" loading="lazy"><h4>${name}</h4><span>Disponible en tienda</span></article>`).join("")}</div></div>`;
}
buttons.forEach(b=>b.addEventListener("click",()=>{buttons.forEach(x=>x.classList.remove("active"));b.classList.add("active");render(b.dataset.category)}));
render("drinks");