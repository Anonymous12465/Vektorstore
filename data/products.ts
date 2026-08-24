export interface ProductColor {
  name: string;
  hex: string;
}

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  colors: ProductColor[];
  sizes: string[]; // <-- Added sizes here
  category: string;
  image: string;
  additionalImages: string[];
  inStock: boolean;
}

export const products: Product[] = [
  {
    id: "1",
    name: "Premium Cotton Blend Hoodie",
    price: 89.99,
    description: "Elevate your everyday style with our Premium Cotton Blend Hoodie. Crafted from a luxurious mix of 80% premium cotton and 20% polyester, this hoodie offers exceptional softness and durability. The relaxed fit provides comfortable room without looking baggy, while the double-lined hood and reinforced stitching ensure long-lasting quality. Perfect for layering or wearing alone, this versatile piece transitions seamlessly from casual outings to relaxed weekends at home.",
    colors: [
      { name: "Classic Black", hex: "#1a1a1a" },
      { name: "Navy Blue", hex: "#1e3a5f" },
      { name: "Charcoal Gray", hex: "#4a4a4a" }
    ],
    sizes: ["S", "M", "L", "XL"],
    category: "Tops",
    image: '/images/products/hoodie-main.jpg',
    additionalImages: [
      "/images/products/hoodie-side.jpg",
      "/images/products/hoodie-back.jpg",
      "/images/products/hoodie-detail.jpg"
    ],
    inStock: true
  },
  {
    id: "2",
    name: "Slim Fit Chino Pants",
    price: 79.99,
    description: "Our Slim Fit Chino Pants combine modern tailoring with all-day comfort. Made from stretch cotton fabric, these pants move with you while maintaining a sharp, polished appearance. The slim cut creates a streamlined silhouette that works for both professional settings and casual occasions. Features include a classic zip fly, button closure, and slanted front pockets with welt back pockets. The wrinkle-resistant fabric keeps you looking sharp throughout the day.",
    colors: [
      { name: "Olive", hex: "#556b2f" },
      { name: "Black", hex: "#1a1a1a" }
    ],
    sizes: ["30", "32", "34", "36"],
    category: "Bottoms",
    image: '/images/products/chino-main.jpg',
    additionalImages: [
      "/images/products/chino-side.jpg"
    ],
    inStock: true
  },
   {
    id: "3",
    name: "OverSize Light Brown Hoodie",
    price: 45.99,
    description: "Elevate your streetwear rotation with this contemporary beige hoodie, designed for an effortless, relaxed fit. Crafted from a heavyweight fleece fabric, it offers both structure and premium warmth, making it an ideal layering staple.",
    colors: [
      { name: "Light brown", hex: "#D2C3A8" },
    ],
    sizes: ["M", "L", "XL"],
    category: "Tops",
    image: '/images/products/brown hoodie.jpg',
    additionalImages: [
      "/images/products/brown hoodie1.jpg"
    ],
    inStock: true
  },
  {
    id: "4",
    name: "Beige Color Premium",
    price: 54.99,
    description: "Embrace laid-back vibes with this off-white graphic hoodie, featuring a relaxed streetwear fit and a striking illustration on the back. The whimsical artwork showcases a skeleton chilling under a palm tree on a tiny island, accompanied by the bold text Crafted from cozy, soft fleece fabric with a roomy hood and ribbed trims, it combines ultimate comfort with a playful, sarcastic edge.",
    colors: [
      { name: "Beige", hex: "#F4F0E6" }
    ],
    sizes: ["S", "M", "L"],
    category: "Tops",
    image: '/images/products/Beige.webp',
    additionalImages: [
      "/images/products/beige.jpg"
    ],
    inStock: true
  },
  {
    id: "5",
    name: "Olive Color Premium Hoodie",
    price: 54.99,
    description: "Upgrade your casual wardrobe with this classic dark green oversized hoodie, designed for an effortless streetwear aesthetic. Crafted from a plush, heavyweight fleece fabric, it features a comfortable hood with adjustable drawstrings, a spacious front kangaroo pocket, and ribbed trims for a snug fit. The front is highlighted by crisp collegiate-style block lettering displaying Los Angles in a clean white finish, making it a versatile everyday staple for cool-weather styling.",
    colors: [
      { name: "Olive", hex: "#0F382B" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    category: "Tops",
    image: '/images/products/olive.jpg',
    additionalImages: [
      "/images/products/olive1.jpg"
    ],
    inStock: true
  },
  {
    id: "6",
    name: "White Color Premium Hoodie",
    price: 74.99,
    description: "Add a timeless, sporty layer to your everyday wardrobe with this crisp off-white full-zip hoodie from U.S. Polo Assn. Designed with a clean, athletic fit, it features a sturdy center zipper, an adjustable drawstring hood, split kangaroo pockets, and ribbed cuffs and hem for a secure fit. The minimalist design is elevated by matching tonal drawstrings and the brand's iconic embroidered polo player logo on the chest in contrasting dark thread, offering an effortless blend of comfort and casual sophistication.",
    colors: [
      { name: "White", hex: "#fafafa" }
    ],
    sizes: ["S", "M", "L"],
    category: "Tops",
    image: '/images/products/white.webp',
    additionalImages: [
      "/images/products/white1.jpg"
    ],
    inStock: true
  },
  {
    id: "7",
    name: "Black Oversize Shirts",
    price: 28.99,
    description: "Add a timeless, sporty layer to your everyday wardrobe with this crisp off-white full-zip hoodie from U.S. Polo Assn. Designed with a clean, athletic fit, it features a sturdy center zipper, an adjustable drawstring hood, split kangaroo pockets, and ribbed cuffs and hem for a secure fit. The minimalist design is elevated by matching tonal drawstrings and the brand's iconic embroidered polo player logo on the chest in contrasting dark thread, offering an effortless blend of comfort and casual sophistication.",
    colors: [
      { name: "White", hex: "#fafafa" }
    ],
    sizes: ["M", "L", "XL"],
    category: "Tops",
    image: '/images/products/black oversize.avif',
    additionalImages: [
      "/images/products/black.jpg"
    ],
    inStock: true
  },
  {
    id: "8",
    name: "Girls White oversize Shirt",
    price: 29.99,
    description: "Refresh your casual collection with this relaxed-fit off-white graphic t-shirt, crafted from soft, breathable cotton for everyday comfort. It features a classic crew neckline, short sleeves, and a subtle minimalist chest print that adds a modern touch to a timeless silhouette. Styled easily with loose-fit light denim jeans, it delivers an effortless, laid-back aesthetic for daily wear.",
    colors: [
      { name: "White", hex: "#F5F3ED" }
    ],
    sizes: ["XS", "S", "M", "L"],
    category: "Tops",
    image: '/images/products/white women.webp',
    additionalImages: [
      "/images/products/white women1.webp"
    ],
    inStock: true
  },
  {
    id: "9",
    name: "Shirt polo with Pocket",
    price: 29.99,
    description: "Add an effortless, refined touch to your warm-weather wardrobe with this light khaki open-collar polo shirt. Crafted from a breathable, lightweight knit fabric, it features a relaxed open V-neckline, short sleeves, a functional chest patch pocket, and a clean straight hem with side vents for ease of movement. Its versatile neutral shade makes it an easy piece to dress up with tailored trousers or keep casual with denim.",
    colors: [
      { name: "grey", hex: "#8C8B7C" },
      { name: "sand", hex: "#C8BFAB" },
    ],
    sizes: ["S", "M", "L", "XL"],
    category: "Tops",
    image: '/images/products/pocket shirt.jpg',
    additionalImages: [
      "/images/products/pocket shirt1.jpg"
    ],
    inStock: true
  },
  {
    id: "10",
    name: "Blue Shirt polo",
    price: 29.99,
    description: "Channel retro streetwear vibes with this oversized navy blue polo shirt, featuring striking contrast white trims on the collar and sleeve cuffs. Designed with a relaxed, drop-shoulder silhouette for a modern, laid-back fit, it pairs effortlessly with light-wash denim for an easygoing, stylish look.",
    colors: [
      { name: "Royal Blue", hex: "#233250" }
    ],
    sizes: ["M", "L", "XL"],
    category: "Tops",
    image: '/images/products/blue.jpg',
    additionalImages: [
      "/images/products/blue1.jpg"
    ],
    inStock: true
  },
  {
    id: "11",
    name: "White Swet Shirt Women",
    price: 34.99,
    description: "Refresh your smart-casual essentials with this crisp, clean white long-sleeve polo shirt. Designed with a classic collared neckline, a short button placket, and relaxed long sleeves with ribbed cuffs, it offers a versatile blend of comfort and polished style that transitions effortlessly through the seasons.",
    colors: [
      { name: "White", hex: "#ffffff" }
    ],
    sizes: ["S", "M", "L"],
    category: "Tops",
    image: '/images/products/wet.Avif',
    additionalImages: [
      "/images/products/wet.jpg"
    ],
    inStock: true
  },
   {
    id: "12",
    name: "Apex Division Tee Brown Color",
    price: 24.99,
    description: "Revamp your casual streetwear collection with this oversized brown and cream color-block t-shirt, inspired by a vintage motorsport aesthetic. Crafted from a soft, breathable cotton blend, it features short sleeves, a ribbed crew neckline, and striking horizontal panels detailed with bold Motorsport typography and racing-inspired graphics. Designed with a relaxed drop-shoulder silhouette, it delivers an effortless, standout look for everyday wear.",
    colors: [
      { name: "Brown", hex: "#4A2E1B" }
    ],
    sizes: ["S", "M", "L", "XL"],
    category: "Tops",
    image: '/images/products/brown.webp',
    additionalImages: [
      "/images/products/brown.jpg"
    ],
    inStock: true
  },
   {
    id: "13",
    name: "Puma Scuderia Ferrari F1 Team Black Graphic T-Shirt",
    price: 34.99,
    description: "Fuel your passion for motorsport with this sleek black Scuderia Ferrari F1 team t-shirt. Crafted from premium, breathable cotton, it features a classic crew neckline and short sleeves designed for everyday comfort. The striking design is accented with official-style sponsor logos, the iconic Puma leaping cat, and bold Ferrari lettering across the chest, complemented by Scuderia branding along the shoulders for an authentic racing look.",
    colors: [
      { name: "Black", hex: "#141414" }
    ],
    sizes: ["M", "L", "XL", "XXL"],
    category: "Tops",
    image: '/images/products/f1.webp',
    additionalImages: [
      "/images/products/f11.jpg"
    ],
    inStock: true
  },
  {
    id: "14",
    name: "Relaxed-Fit Olive Green Utility Cargo Pants",
    price: 34.99,
    description: "Upgrade your streetwear rotation with these versatile olive green utility cargo pants, designed with a relaxed, loose-fit silhouette for ultimate comfort and effortless style. Crafted from a durable yet lightweight fabric, they feature an elasticated waistband with adjustable contrast drawstrings, multiple spacious flap cargo pockets for practical storage, and a straight-leg cut that pairs seamlessly with your favorite sneakers.",
    colors: [
      { name: "beige", hex: "#5B563D" }
    ],
    sizes: ["30", "32", "34", "36"],
    category: "Bottoms",
    image: '/images/products/cargo.jpg',
    additionalImages: [
      "/images/products/Cardo.jpg"
    ],
    inStock: true
  },
  {
    id: "15",
    name: "Casual Navy Blue Fleece Cargo Sweatpants",
    price: 20.99,
    description: "Combine ultimate comfort with modern utility in these navy blue fleece cargo sweatpants. Crafted from a soft, warm fleece fabric, they feature an elasticated waistband with adjustable drawstrings, relaxed straight legs, and functional side cargo pockets for a laid-back, streetwear-inspired look.",
    colors: [
      { name: "blue", hex: "#1F2937" }
    ],
    sizes: ["S", "M", "L", "XL"],
    category: "Bottoms",
    image: '/images/products/fit.webp',
    additionalImages: [
      "/images/products/fit.jpg"
    ],
    inStock: true
  },
  {
    id: "16",
    name: "Light-Wash Straight-Leg Denim Jeans",
    price: 84.99,
    description: "Add a timeless staple to your wardrobe with these classic light-wash denim jeans. Featuring a relaxed straight-leg fit, a clean mid-rise waist, and subtle whiskering, they offer an effortless, versatile look that pairs seamlessly with casual tees and sneakers for everyday wear.",
    colors: [
      { name: "Blue", hex: "#8DACC7" }
    ],
    sizes: ["28", "30", "32", "34"],
    category: "Bottoms",
    image: '/images/products/j.webp',
    additionalImages: [],
    inStock: true
  },
    {
    id: "17",
    name: "Relaxed-Fit Washed Grey Wide-Leg Jeans",
    price: 112.99,
    description: "Embody contemporary streetwear culture with these relaxed-fit washed grey wide-leg jeans. Crafted from durable denim with a distinct vintage acid wash, they feature an ultra-roomy, slouchy silhouette that puddles effortlessly over sneakers, making them a staple piece for bold, casual styling.",
    colors: [
      { name: "Grey", hex: "#80848B" }
    ],
    sizes: ["30", "32", "34"],
    category: "Bottoms",
    image: '/images/products/g.jpg',
    additionalImages: [],
    inStock: true
  },
   {
    id: "18",
    name: "Classic Light-Wash Straight-Leg Denim Jeans",
    price: 89.99,
    description: "Perfect your casual-cool aesthetic with these classic light-wash denim jeans. Featuring a clean mid-rise waist, a tailored straight-leg fit, and subtle vintage fading, they offer a versatile look that pairs effortlessly with crisp white sneakers and everyday layers.",
    colors: [
      { name: "Blue", hex: "#97B2C9" }
    ],
    sizes: ["30", "32", "34", "36"],
    category: "Bottoms",
    image: '/images/products/gg.webp',
    additionalImages: [
      "/images/products/ggg.jpg"
    ],
    inStock: true
  },
  {
    id: "19",
    name: "High-Waisted Medium-Wash Wide-Leg Denim Jeans",
    price: 69.99,
    description: "Make a bold streetwear statement with these high-waisted, medium-wash wide-leg denim jeans. Crafted from sturdy denim with a classic blue hue and contrasting topstitching, they feature a structured high-rise waist and an exaggerated wide-leg silhouette that pools effortlessly over sneakers for a relaxed, retro-inspired aesthetic.",
    colors: [
      { name: "Blue", hex: "#4B7DA9" }
    ],
    sizes: ["26", "28", "30", "32"],
    category: "Bottoms",
    image: '/images/products/girls.webp',
    additionalImages: [],
    inStock: true
  },
  {
    id: "20",
    name: "Slim-Fit Black Cotton Casual Pants",
    price: 29.99,
    description: "Add a versatile staple to your everyday rotation with these sleek, slim-fit black cotton pants. Crafted from soft, breathable cotton with a touch of stretch for all-day comfort, they feature a clean waistband with belt loops, functional side pockets, and a tailored silhouette that transitions effortlessly between smart-casual and relaxed wear.",
    colors: [
      { name: "Black", hex: "#18181A" }
    ],
    sizes: ["30", "32", "34", "36"],
    category: "Bottoms",
    image: '/images/products/blackj.jpg',
    additionalImages: [],
    inStock: true
  },
  {
  id: "21",
  name: "Handcrafted Cowboy Ceramic Mug",
  price: 24.99,
  description: "Start your morning with a touch of the Wild West. This charming ceramic mug features a detailed, hand-crafted cowboy motif complete with a classic lasso design. Built with a sturdy, rustic pottery finish and an ergonomic handle for a comfortable grip, it's perfect for your daily coffee, tea, or any hot beverage.",
  colors: [
    { name: "Cream White", hex: "#F5F5F1" }
  ],
  sizes: [],
  category: "Home & Living",
  image: '/images/products/mug1.jpg',
  additionalImages: [
  ],
  inStock: true
},
{
  id: "22",
  name: "Pastel Heart Handle Ceramic Mugs",
  price: 22.99,
  description: "Add a touch of whimsy and charm to your coffee routine with these pastel ceramic mugs, featuring a unique, textured bubble-heart handle design. Crafted with a smooth glossy finish, they are available in soft pastel shades—ideal for cozy mornings, gifting, or elevating your home decor.",
  colors: [
    { name: "Pink", hex: "#E8A5A5" },
    { name: "Blue", hex: "#A5D6E8" },
    { name: "Purple", hex: "#C5A5E8" },
    { name: "Off-White", hex: "#F5F5F0" }
  ],
  sizes: [],
  category: "Home & Living",
  image: '/images/products/mug2.jpg',
  additionalImages: [
  ],
  inStock: true
},
{
  id: "23",
  name: "Insulated Travel Tumbler Collection",
  price: 34.99,
  description: "Upgrade your hydration game with our vibrant collection of insulated travel tumblers. Featuring top brands like Stanley, Hydro Flask, and Yeti with ergonomic handles, spill-resistant lids, and reusable straws. Engineered with double-wall vacuum insulation to keep your beverages icy cold or piping hot all day long, available in an array of stunning pastel and bold shades.",
  colors: [
    { name: "Lavender", hex: "#B4A5E8" },
    { name: "Green", hex: "#1B4D3E" },
    { name: "Pink", hex: "#F2A2C0" },
    { name: "Teal", hex: "#22B3C1" },
    { name: "Blue", hex: "#2D54CE" },
    { name: "Orange", hex: "#E8934A" },
    { name: "Black", hex: "#222222" }
  ],
  sizes: [],
  category: "Home & Living",
  image: '/images/products/tumbler.jpg',
  additionalImages: [
    "/images/products/tumbler2.jpg"
  ],
  inStock: true
},
{
  id: "24",
  name: "Handmade Speckled Ceramic Dinner Plates (Set of 6)",
  price: 48.00,
  description: "Elevate your dining experience with this gorgeous set of handmade ceramic dinner plates. Featuring a classic white speckled glaze paired with a warm, exposed terracotta rim, these plates offer a rustic yet modern aesthetic. Crafted from durable, high-quality ceramic, they are designed for everyday dining as well as special gatherings.",
  colors: [
    { name: "White Speckled", hex: "#F5F5F0" }
  ],
  sizes: [],
  category: "Home & Living",
  image: '/images/products/plate.jpg',
  additionalImages: [
  ],
  inStock: true
},
{
  id: "25",
  name: "Vintage Gold Bicycle Planter Stand",
  price: 29.99,
  description: "Add a touch of vintage elegance to your living space with this charming gold bicycle planter stand. Designed with intricate metalwork and a sleek metallic gold finish, it features an integrated pot holder that beautifully showcases your favorite small potted plants, succulents, or faux greenery. Perfect for tabletops, shelves, or consoles.",
  colors: [
    { name: "Gold", hex: "#D4AF37" }
  ],
  sizes: [],
  category: "Home & Living",
  image: '/images/products/11.jpg',
  additionalImages: [

  ],
  inStock: true
},
{
  id: "26",
  name: "Gold Coral Branch on Green Marble Base Sculpture",
  price: 45.00,
  description: "Bring a sophisticated, artistic flair to your interior decor with this stunning decorative sculpture. Featuring an intricate, branching gold coral sculpture mounted securely on a weighty, luxurious dark green marble cylindrical base. It serves as an eye-catching statement piece for coffee tables, mantelpieces, bookshelves, or entry consoles.",
  colors: [
    { name: "Gold & Green", hex: "#1A4D2E" }
  ],
  sizes: [],
  category: "Home & Living",
  image: '/images/products/111.jpg',
  additionalImages: [

  ],
  inStock: true
},
{
  id: "27",
  name: "Black & White Gold Foil Accented Decor Set",
  price: 52.00,
  description: "Transform your tabletop or vanity with this striking black and white home decor set, featuring a ribbed vase, a lidded trinket jar, and an oval tray. Each piece is artfully split in contrasting matte black and crisp white, highlighted by a shimmering gold-foil kintsugi-style seam. Perfect for holding jewelry, dried botanicals, or serving as a modern artistic accent.",
  colors: [
    { name: "Black & White with Gold", hex: "#111111" }
  ],
  sizes: [],
  category: "Home & Living",
  image: '/images/products/1111.jpg',
  additionalImages: [
  ],
  inStock: true
},
{
  id: "28",
  name: "Western Luxury Chronograph Watch",
  price: 129.99,
  description: "Make a bold statement with this premium Western luxury chronograph watch. Designed with a striking black dial, rose gold-tone accents, multi-functional sub-dials, a built-in date display, and a robust black leather strap. Engineered with precision quartz movement and a sturdy build, it combines rugged durability with sophisticated style for any occasion.",
  colors: [
    { name: "Black & Rose Gold", hex: "#1A1A1A" }
  ],
  sizes: [],
  category: "Watches",
  image: '/images/products/w1.jpg',
  additionalImages: [
  ],
  inStock: true
},
{
  id: "29",
  name: "Western Rose Gold & Brown Diver Watch",
  price: 149.99,
  description: "Elevate your wristwear with this sophisticated Western dive watch, featuring a radiant rose gold-tone stainless steel case and matching link bracelet. The textured brown wave-pattern dial is complemented by luminous markers, a rotating bezel with clear numbering, a date window at the 3 o'clock position, and a classic sweeping second hand. Combining timeless luxury with rugged functionality.",
  colors: [
    { name: "Rose Gold & Brown", hex: "#B87333" }
  ],
  sizes: [],
  category: "Watches",
  image: '/images/products/w2.webp',
  additionalImages: [
  ],
  inStock: true
},
{
  id: "30",
  name: "Louis XVI Limited Edition Silver Skeleton Watch",
  price: 179.99,
  description: "Experience exquisite craftsmanship with this Louis XVI Edition Limitée luxury watch. Featuring a stunning open-heart skeleton dial that showcases the intricate automatic mechanical movement within, paired with a polished silver-tone stainless steel case and a fine Milanese mesh strap. A true masterpiece of modern horology designed to make a statement.",
  colors: [
    { name: "Silver", hex: "#C0C0C0" }
  ],
  sizes: [],
  category: "Watches",
  image: '/images/products/w3.jpg',
  additionalImages: [
  ],
  inStock: true
},
{
  id: "31",
  name: "Western Affluence Series Rectangular Watch",
  price: 139.99,
  description: "Experience sleek minimalism with the Western Affluence Series (Model: W7004LBB010C). Featuring a distinctive rectangular black ceramic-finish case and integrated bracelet, a clean black dial with gold geometric hour markers and matching hands, a contrasting gold crown, and scratch-resistant sapphire crystal glass. Swiss-made precision meets contemporary elegance.",
  colors: [
    { name: "Matte Black & Gold", hex: "#1A1A1A" }
  ],
  sizes: [],
  category: "Watches",
  image: '/images/products/w4.webp',
  additionalImages: [
  ],
  inStock: true
},
{
  id: "32",
  name: "OLEVS Two-Tone Blue Dial Quartz Watch Set",
  price: 79.99,
  description: "Add a touch of elegance to your wrist with this stunning OLEVS quartz watch. Featuring a vibrant sunburst blue dial accented with crystal markers and Roman numerals, a faceted bezel, and a sophisticated silver and gold two-tone stainless steel link bracelet. Complete with a convenient date display and an included link-adjustment tool for a custom fit.",
  colors: [
    { name: "Silver & Gold", hex: "#C0C0C0" }
  ],
  sizes: [],
  category: "Watches",
  image: '/images/products/w5.avif',
  additionalImages: [
  ],
  inStock: true
},
{
  id: "33",
  name: "Western Bold Black & Rose Gold Chronograph Watch",
  price: 139.99,
  description: "Command attention with this ruggedly sophisticated Western chronograph watch. Designed with an aggressive black and rose gold-tone bezel featuring exposed screw details, a multi-layered textured black dial with multi-functional sub-dials, a clear date window, and a durable black textured leather strap. Built for those who appreciate bold, masculine styling.",
  colors: [
    { name: "Black & Rose Gold", hex: "#1A1A1A" }
  ],
  sizes: [],
  category: "Watches",
  image: '/images/products/w6.webp',
  additionalImages: [
  ],
  inStock: true
},
{
    id: "34",
    name: "Vektor Knit Motion Slip-On Sneaker",
    price: 64.99,
    description: "Experience featherlight comfort and effortless style with the Vektor Knit Motion Slip-On Sneaker. Engineered with a breathable stretch-knit upper that conforms to your foot like a second skin, these sneakers feature a sleek sock-like collar for easy wear without laces. The cushioned white athletic midsole absorbs impact with every step, while the textured outsole provides reliable traction for your daily walks, urban commutes, or casual weekend outings.",
    colors: [
      { name: "Core Black", hex: "#1a1a1a" },
      { name: "Pure White", hex: "#f0f0f0" },
      { name: "Slate Gray", hex: "#708090" }
    ],
    category: "Footwear",
     sizes: ["7", "8", "9", "10", "11"],
    image: "/images/products/shoes.jpg",
    additionalImages: [
      "/images/products/shoes2.jpg"
    ],
    inStock: true
  },
  {
    id: "35",
    name: "Vektor Knit Black Slip-On Sneaker",
    price: 64.99,
    description: "Experience featherlight comfort and effortless style with the Vektor Knit Motion Slip-On Sneaker. Engineered with a breathable stretch-knit upper that conforms to your foot like a second skin, these sneakers feature a sleek sock-like collar for easy wear without laces. The cushioned white athletic midsole absorbs impact with every step, while the textured outsole provides reliable traction for your daily walks, urban commutes, or casual weekend outings.",
    colors: [
      { name: "Core Black", hex: "#1a1a1a" },
      { name: "Pure White", hex: "#f0f0f0" },
      { name: "Slate Gray", hex: "#708090" }
    ],
    category: "Footwear",
    sizes: ["7", "8", "9", "10", "11"],
    image: "/images/products/shoes3.jpg",
    additionalImages: [
      "/images/products/shoes4.jpg",
    ],
    inStock: true
  },
  {
    id: "36",
  name: "Gregorio Bolt Street Sneaker",
  price: 69.99,
  description: "Make a striking statement with the Gregorio Bolt Street Sneaker. Designed for urban explorers and trendsetters, these sneakers feature an iconic lightning bolt side graphic paired with a durable, breathable textile upper. The chunky, shock-absorbing platform midsole ensures all-day walking comfort, while the reinforced outsole delivers confident traction on city streets.",
  colors: [
    { name: "Navy Blue", hex: "#1c2833" },
    { name: "Core Black", hex: "#1a1a1a" },
    { name: "Cloud White", hex: "#f5f5f5" }
  ],
  category: "Footwear",
  sizes: ["7", "8", "9", "10", "11", "12"],
  image: "/images/products/shoes5.jpg",
  additionalImages: [
    "/images/products/shoes6.jpg",
  ],
  inStock: true
},
{
  id: "37",
  name: "Vektor Verde Low-Top Casual Sneaker",
  price: 59.99,
  description: "Keep your casual rotation fresh with the Vektor Verde Low-Top Sneaker. Featuring a clean white synthetic leather upper accented by rich forest green laces, heel tab, and side branding curves, this sneaker delivers a crisp aesthetic. Built with a supportive flat rubber cupsole and a cushioned interior, it offers all-day wearability for everyday school, work, or weekend strolls.",
  colors: [
    { name: "White / Forest Green", hex: "#ffffff" },
    { name: "White / Classic Black", hex: "#1a1a1a" },
    { name: "White / Navy Blue", hex: "#1c2833" }
  ],
  category: "Footwear",
  sizes: ["7", "8", "9", "10", "11"],
  image: "/images/products/shoes7.webp",
  additionalImages: [
    "/images/products/shoes8.jpg"
  ],
  inStock: true
},
{
  id: "38",
  name: "Vektor Motion Air Sneaker - Pure White",
  price: 64.99,
  description: "Step into cloud-like comfort and striking modern aesthetics with the Vektor Motion Air Sneaker in Pure White. Featuring a breathable, lightweight knit mesh upper accented with sharp gradient side graphics and 'AIR' tongue branding, this model pairs high-end streetwear style with athletic utility. The sculpted hollow platform midsole provides exceptional impact absorption, while the segmented rubber outsole ensures reliable grip for everyday urban walking and training.",
  colors: [
    { name: "Pure White", hex: "#ffffff" },
    { name: "Core Black", hex: "#1a1a1a" },
    { name: "Slate Gray", hex: "#708090" }
  ],
  category: "Footwear",
  sizes: ["7", "8", "9", "10", "11"],
  image: "/images/products/shoes9.jpg",
  additionalImages: [
    "/images/products/sheos10.jpg"
  ],
  inStock: true
},
{
  id: "39",
  name: "Vektor Urban Explorer Waterproof Sneaker",
  price: 74.99,
  description: "Combine rugged outdoor reliability with sleek city fashion in the Vektor Urban Explorer Waterproof Sneaker. Featuring a deep navy blue synthetic upper accented with warm brown leather detailing and a signature side stripe, this shoe is built to handle changing weather conditions seamlessly. The cushioned white athletic midsole and high-traction rubber outsole ensure supreme comfort and stability on daily commutes or weekend adventures.",
  colors: [
    { name: "Navy & Tan", hex: "#1c2833" },
    { name: "Core Black", hex: "#1a1a1a" },
    { name: "Charcoal Gray", hex: "#36454f" }
  ],
  category: "Footwear",
  sizes: ["7", "8", "9", "10", "11", "12"],
  image: "/images/products/shoes11.jpg",
  additionalImages: [
    "/images/products/shoes12.jpg"
  ],
  inStock: true
},
{
  id: "40",
  name: "Vektor Trail Peak Slip-On Trekker",
  price: 68.99,
  description: "Conquer light trails and outdoor paths in complete comfort with the Vektor Trail Peak Slip-On Trekker. Designed with a durable charcoal gray synthetic upper, clean contrast stitching, and a laceless slip-on entry, it features convenient pull tabs for quick wear. The supportive white athletic midsole absorbs shock on uneven ground, while the sturdy black rubber outsole provides dependable grip during outdoor explorations and daily walks.",
  colors: [
    { name: "Charcoal Gray", hex: "#36454f" },
    { name: "Core Black", hex: "#1a1a1a" },
    { name: "Olive Green", hex: "#556b2f" }
  ],
  category: "Footwear",
  sizes: ["7", "8", "9", "10", "11"],
  image: "/images/products/shoes13.jpg",
  additionalImages: [
    "/images/products/shoes14.jpg",
  ],
  inStock: true
},
{
  id: "41",
  name: "Vektor Sky Platform Court Sneaker",
  price: 66.99,
  description: "Bring a fresh pastel aesthetic to your street style with the Vektor Sky Platform Court Sneaker. Designed with a clean white base, soft gray panels, and light sky blue overlays, this retro-inspired court shoe features distinctive side accents and a textured chunky platform sole embossed with 'AIR' branding. The perforated toe box and cushioned interior offer lasting everyday comfort and timeless cool.",
  colors: [
    { name: "White / Sky Blue", hex: "#add8e6" },
    { name: "White / Classic Black", hex: "#1a1a1a" },
    { name: "White / Pale Pink", hex: "#ffb6c1" }
  ],
  category: "Footwear",
  sizes: ["6", "7", "8", "9", "10"],
  image: "/images/products/shoes14.jpg",
  additionalImages: [
    "/images/products/shoes15.webp",
  ],
  inStock: true
},
{
  id: "42",
  name: "Vektor Diva Chunky Platform Sneaker",
  price: 72.99,
  description: "Elevate your streetwear look with the Vektor Diva Chunky Platform Sneaker. Designed with a pristine white mesh and synthetic leather upper featuring wavy side zig-zag detailing and subtle metallic shimmer accents, this sneaker delivers bold height and standout style. The chunky, lugged platform sole provides maximum cushioning and stability, making it a versatile go-to for effortless everyday fashion.",
  colors: [
    { name: "Optic White", hex: "#ffffff" },
    { name: "Cream & Silver", hex: "#f5f5f5" },
    { name: "Soft Blush", hex: "#fff0f5" }
  ],
  category: "Footwear",
  sizes: ["5", "6", "7", "8", "9", "10"],
  image: "/images/products/shoes16.jpg",
  additionalImages: [
    "/images/products/shoes17.jpg"
  ],
  inStock: true
},
{
  id: "43",
  name: "Vektor Artisan Stripe Dinner Plate",
  price: 76.99,
  description: "Bring a warm, earthy aesthetic to your dining table with the Vektor Artisan Stripe Dinner Plate. Crafted from durable glazed stoneware, this individual plate features a rich beige base accented by bold, hand-painted brushstroke stripes in deep brown, caramel, and cream. Microwave and dishwasher safe, it is designed for both everyday meals and cozy hosting occasions.",
  colors: [
    { name: "Earth Stripe", hex: "#8b5a2b" },
    { name: "Solid Beige", hex: "#d2b48c" },
    { name: "Deep Mocha", hex: "#4a3b32" }
  ],
  category: "Kitchen Appliances",
  sizes: ["Standard (10.5 inch)"],
  image: "/images/products/crock1.jpg",
  additionalImages: [
    "/images/products/crock2.jpg"
  ],
  inStock: true
},
{
  id: "44",
  name: "Vektor Speckled Minimalist Dinnerware Set",
  price: 120.00,
  description: "Transform your dining experience with the Vektor Speckled Minimalist Dinnerware Set. Featuring a sophisticated combination of textured, speckled light gray-beige exteriors and deep charcoal interiors, this modern set brings understated elegance to any table. Crafted from durable, high-quality stoneware, each piece is fully microwave and dishwasher safe, striking the perfect balance between modern aesthetics and everyday durability.",
  colors: [
    { name: "Speckled Gray & Charcoal", hex: "#708090" },
    { name: "Matte Black", hex: "#1a1a1a" },
    { name: "Cream White", hex: "#f5f5f5" }
  ],
  category: "Kitchen Appliances",
  sizes: ["16-Piece Set"],
  image: "/images/products/crock3.jpg",
  additionalImages: [
    "/images/products/crock4.jpg"
  ],
  inStock: true
},
{
  id: "45",
  name: "Vektor Azure Speckled Dinner Plate",
  price: 68.99,
  description: "Elevate your culinary presentation with the Vektor Azure Speckled Dinner Plate. Featuring a rich, mottled blue reactive glaze with subtle dark speckles and a refined dark rim, this ceramic plate brings handcrafted artisan charm to your dining space. Durable, scratch-resistant, and microwave-safe, it is ideal for both upscale dinner parties and everyday meals.",
  colors: [
    { name: "Azure Speckled Blue", hex: "#4682b4" },
    { name: "Deep Navy", hex: "#1c2833" },
    { name: "Slate Gray", hex: "#708090" }
  ],
  category: "Kitchen Appliances",
  sizes: ["Standard (10 inch)"],
  image: "/images/products/crock5.webp",
  additionalImages: [
    "/images/products/crock6.jpg"
  ],
  inStock: true
},
{
  id: "46",
  name: "Vektor Terracotta Fluted Dinner Plate",
  price: 37.99,
  description: "Add warmth and texture to your table setting with the Vektor Terracotta Fluted Dinner Plate. Crafted from durable ceramic with a rich terracotta finish, this plate features a distinctive fluted rim pattern that offers an elegant, tactile grip and visual depth. Microwave and dishwasher safe, it brings a cozy, organic aesthetic to everyday dining and special gatherings alike.",
  colors: [
    { name: "Terracotta Clay", hex: "#c85a32" },
    { name: "Warm Ochre", hex: "#cc7722" },
    { name: "Matte Sage", hex: "#87a96b" }
  ],
  category: "Kitchen Appliances",
  sizes: ["Standard (10 inch)"],
  image: "/images/products/crock7.jpg",
  additionalImages: [
    "/images/products/crock8.jpg"
  ],
  inStock: true
},
{
  id: "47",
  name: "Vektor Ocean Waves Hand-Painted Dinner Plate",
  price: 49.99,
  description: "Infuse coastal elegance into your dining collection with the Vektor Ocean Waves Hand-Painted Dinner Plate. Featuring a crisp ivory ceramic base complemented by a stunning teal and sea-green brushstroke pattern reminiscent of rolling ocean scales, this artisan piece brings artistic charm to any meal. Microwave and dishwasher safe, it is perfect for both everyday dining and statement table settings.",
  colors: [
    { name: "Teal & Ivory", hex: "#008080" },
    { name: "Deep Ocean Blue", hex: "#1f456e" },
    { name: "Soft Sage", hex: "#87a96b" }
  ],
  category: "Kitchen Appliances",
  sizes: ["Standard (10 inch)"],
  image: "/images/products/crock9.jpg",
  additionalImages: [
    "/images/products/crock10.jpg"
  ],
  inStock: true
},
{
  id: "48",
  name: "Vektor Pro Freestyle BMX Bike",
  price: 219.99,
  description: "Conquer the streets and the skatepark with the Vektor Pro Freestyle BMX Bike. Built with a robust raw-finish steel frame, a striking 5-spoke mag front wheel paired with a classic spoked rear wheel, and high-rise handlebars, this BMX delivers uncompromising durability and style. Designed for responsive handling, stunts, and aggressive urban riding.",
  colors: [
    { name: "Raw Steel & Black", hex: "#71797e" },
    { name: "Matte Black", hex: "#1a1a1a" },
    { name: "Chrome Silver", hex: "#e0e0e0" }
  ],
  category: "Cycling",
  sizes: ["20-inch Wheel"],
  image: "/images/products/b1.jpg",
  additionalImages: [
    "/images/products/b2.jpg"
  ],
  inStock: true
},
{
  id: "49",
  name: "Vektor Trailblazer Action BMX Bike",
  price: 299.99,
  description: "Designed for high-energy performance on pump tracks, dirt paths, and urban trails, the Vektor Trailblazer Action BMX Bike combines a lightweight high-tensile steel frame with vibrant neon yellow graphic accents. Equipped with high-traction tires, reliable responsive braking, and top-tier stunt durability, it delivers ultimate control and agility for riders pushing their limits outdoors.",
  colors: [
    { name: "Gloss Black & Neon Yellow", hex: "#1a1a1a" },
    { name: "Matte Charcoal & Orange", hex: "#333333" },
    { name: "Raw Steel & Green", hex: "#556b2f" }
  ],
  category: "Cycling",
  sizes: ["20-inch Wheel"],
  image: "/images/products/b3.jpg",
  additionalImages: [
    "/images/products/b4s.jpg"
  ],
  inStock: true
},
{
  id: "50",
  name: "Vektor Ghost Rider Freestyle BMX Bike",
  price: 399.99,
  description: "Hit the pavement in style with the Vektor Ghost Rider Freestyle BMX Bike. Featuring a clean gloss white frame paired with contrasting black forks, white-rimmed wheels, chrome handlebars, and a gleaming gold chain, this bike offers both striking visual contrast and elite street performance. Engineered for agility, durability, and smooth freestyle riding.",
  colors: [
    { name: "Gloss White & Black", hex: "#ffffff" },
    { name: "Matte White & Chrome", hex: "#f8f8f8" },
    { name: "Stealth Black", hex: "#1a1a1a" }
  ],
  category: "Cycling",
  sizes: ["20-inch Wheel"],
  image: "/images/products/b5.webp",
  additionalImages: [
    "/images/products/b6.jpg"
  ],
  inStock: true
},
{
  id: "51",
  name: "Vektor Multi-Function 4-in-1 Juicer and Blender System",
  price: 149.99,
  description: "Simplify your kitchen routine with the Vektor Multi-Function 4-in-1 Juicer and Blender System. This all-in-one appliance combines a powerful juice extractor, a large-capacity smoothie blender jar, a multi-purpose food grinding cup, and a blending attachment into a sleek, solid-state white housing unit. Built for optimal motor performance and versatility, it handles everything from morning fresh juices to grinding coffee beans and pureeing soups with ease.",
  colors: [
    { name: "Clean White", hex: "#ffffff" },
    { name: "Silver & White", hex: "#e0e0e0" }
  ],
  category: "Kitchen Appliances",
  sizes: ["Standard 4-Piece Set"],
  image: "/images/products/j1.jpg",
  additionalImages: [
    "/images/products/j2.jpg",
  ],
  inStock: true
},
{
  id: "52",
  name: "Vektor Luxe 4-Slice Toaster",
  price: 89.99,
  description: "Elevate your countertop aesthetic with the Vektor Luxe 4-Slice Toaster. Featuring a sophisticated matte black finish paired with striking polished gold accents, dual independent browning controls, and convenient defrost, reheat, and cancel settings. Designed to deliver evenly toasted bread while adding a touch of modern luxury to your morning routine.",
  colors: [
    { name: "Matte Black & Gold", hex: "#1a1a1a" },
    { name: "Stainless Steel & Chrome", hex: "#e0e0e0" },
    { name: "Cream & Rose Gold", hex: "#fdfbf7" }
  ],
  category: "Kitchen Appliances",
  sizes: ["4-Slice"],
  image: "/images/products/j3.jpg",
  additionalImages: [
    "/images/products/j4.jpg"
  ],
  inStock: true
},
{
id: "53",
  name: "Vektor Professional Heavy-Duty Citrus Press",
  price: 69.99,
  description: "Extract every last drop of fresh juice effortlessly with the Vektor Professional Heavy-Duty Citrus Press. Built from solid cast metal with a polished chrome finish and a comfortable leverage handle, this commercial-grade manual juicer handles oranges, grapefruits, lemons, and pomegranates with maximum efficiency and minimal effort. Durable, stable, and a stylish addition to any modern kitchen countertop.",
  colors: [
    { name: "Polished Chrome", hex: "#e0e0e0" },
    { name: "Matte Black", hex: "#1a1a1a" },
    { name: "Brushed Steel", hex: "#8c92ac" }
  ],
  category: "Kitchen Appliances",
  sizes: ["Standard Commercial Size"],
  image: "/images/products/j5.jpg",
  additionalImages: [
    "/images/products/j6.jpg"
  ],
  inStock: true
},
{
id: "54",
  name: "Vektor BrewMaster Automatic Turkish Coffee Maker",
  price: 129.99,
  description: "Experience authentic, traditional coffee brewing with a modern twist using the Vektor BrewMaster Automatic Turkish Coffee Maker. Styled in sophisticated matte black with elegant rose gold accents, it features one-touch operation, smart anti-overflow detection, and rapid heating to brew rich, velvety coffee with a perfect layer of foam every time.",
  colors: [
    { name: "Matte Black & Rose Gold", hex: "#1a1a1a" },
    { name: "Cream & Gold", hex: "#fdfbf7" },
    { name: "Stainless Steel", hex: "#e0e0e0" }
  ],
  category: "Kitchen Appliances",
  sizes: ["Standard 4-Cup Capacity"],
  image: "/images/products/j7.jpg",
  additionalImages: [
    "/images/products/j8.jpg"
  ],
  inStock: true
},
{
  id: "55",
  name: "Vektor CrispyAir Digital Air Fryer",
  price: 99.99,
  description: "Achieve deliciously crispy, golden results with up to 90% less fat using the Vektor CrispyAir Digital Air Fryer. Designed in a sleek white finish with a contrasting copper-accented handle and a smart digital touchscreen control panel, it offers rapid 360° air circulation technology to fry, roast, bake, and grill your favorite meals to perfection.",
  colors: [
    { name: "White & Copper", hex: "#ffffff" },
    { name: "Matte Black & Rose Gold", hex: "#1a1a1a" },
    { name: "Stainless Steel", hex: "#e0e0e0" }
  ],
  category: "Kitchen Appliances",
  sizes: ["Large 5.8-Quart Capacity"],
  image: "/images/products/j9.jpg",
  additionalImages: [
    "/images/products/j10.jpg"
  ],
  inStock: true
},
{
    id: "56",
    name: "Handcrafted Striped Wooden Utensil Holder & Cooking Set",
    price: 49.99,
    description: "Add rustic elegance and natural warmth to your kitchen countertop with this Handcrafted Striped Wooden Utensil Holder and matching culinary tool set. Skillfully built from a vibrant combination of contrasting domestic hardwoods, the durable holder keeps your essential cooking spoons, spatulas, and servers organized and within easy reach. Complete with a versatile set of ergonomically carved wooden utensils featuring a slotted spoon, salad fork, and mixing paddles.",
  colors: [
    { name: "Natural Hardwood Multi", hex: "#d4a373" },
    { name: "Walnut & Maple", hex: "#8c6239" }
  ],
  category: "Kitchen Appliances",
  sizes: ["Standard Countertop Size"],
  image: "/images/products/k1.jpg",
  additionalImages: [
    "/images/products/k2.jpg"
  ],
  inStock: true
}
];

export function getProductById(id: string): Product | undefined {
  return products.find(product => product.id === id);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(product => product.category === category);
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(product => 
    product.name.toLowerCase().includes(lowerQuery) ||
    product.category.toLowerCase().includes(lowerQuery) ||
    product.description.toLowerCase().includes(lowerQuery)
  );
}

export function getAllCategories(): string[] {
  return Array.from(new Set(products.map(product => product.category)));
}