// Sample product data

export const auctionProducts = [
  {
    id: 'auction-1',
    name: 'Premium Black Truffle Collection',
    description: 'Exclusive selection of black truffles, hand-harvested from Italy',
    longDescription: 'This exquisite collection features hand-selected black truffles from the hills of northern Italy. Each truffle is carefully harvested at peak ripeness to ensure maximum flavor and aroma. Perfect for elevating any dish to gourmet status.',
    category: 'Exotic Ingredients',
    image: 'PLACEHOLDER',
    'data-image-request': 'premium black truffles elegantly arranged on a dark plate',
    currentBid: 89.00,
    timeLeft: '2 hours 15 min',
    type: 'auction',
    details: [
      { name: 'Origin', value: 'Piedmont, Italy' },
      { name: 'Weight', value: '100g' },
      { name: 'Harvest Date', value: 'October 2023' },
      { name: 'Packaging', value: 'Vacuum-sealed with humidity control' }
    ]
  },
  {
    id: 'auction-2',
    name: 'Rare Miyazaki A5 Wagyu Beef',
    description: 'The finest Japanese Wagyu beef with exceptional marbling',
    longDescription: 'Miyazaki A5 Wagyu is widely regarded as the highest quality beef in the world. With extraordinary marbling, tenderness, and flavor, this rare cut represents the pinnacle of Japanese beef production. Each piece is meticulously graded to ensure it meets the highest standards.',
    category: 'Specialty Foods',
    image: 'PLACEHOLDER',
    'data-image-request': 'raw A5 Wagyu beef with perfect marbling',
    currentBid: 245.00,
    timeLeft: '45 min',
    type: 'auction',
    details: [
      { name: 'Grade', value: 'A5 (Highest grade)' },
      { name: 'Origin', value: 'Miyazaki Prefecture, Japan' },
      { name: 'Weight', value: '300g' },
      { name: 'BMS', value: '10-12 (Exceptional marbling)' }
    ]
  },
  {
    id: 'auction-3',
    name: 'Vintage Port Wine Collection',
    description: 'Limited edition selection of vintage ports from top producers',
    longDescription: 'This exclusive collection features six bottles of exceptional vintage port from the most renowned producers in Portugal\'s Douro Valley. Each bottle has been properly aged and represents the distinctive character of its vintage year. Perfect for collectors and connoisseurs alike.',
    category: 'Wine & Spirits',
    image: 'PLACEHOLDER',
    'data-image-request': 'collection of vintage port wine bottles in a wooden case',
    currentBid: 320.00,
    timeLeft: '1 day 3 hours',
    type: 'auction',
    details: [
      { name: 'Contents', value: '6 bottles, 750ml each' },
      { name: 'Vintages', value: 'Ranging from 1985-2000' },
      { name: 'Producers', value: 'Top estates from Douro Valley' },
      { name: 'Storage', value: 'Professionally cellared since bottling' }
    ]
  },
  {
    id: 'auction-4',
    name: 'Artisanal Cheese Aging Cave Kit',
    description: 'Complete kit for aging and perfecting artisanal cheeses at home',
    longDescription: 'Transform your home into a professional cheese cave with this comprehensive kit. Includes specialized equipment for controlling temperature and humidity, plus all the tools needed to properly age and maintain various cheese types. Perfect for cheese enthusiasts looking to elevate their craft.',
    category: 'Artisanal Cheese',
    image: 'PLACEHOLDER',
    'data-image-request': 'cheese aging equipment kit with various cheeses',
    currentBid: 115.00,
    timeLeft: '4 hours 30 min',
    type: 'auction',
    details: [
      { name: 'Includes', value: 'Temperature controller, humidity regulator, cheese molds' },
      { name: 'Capacity', value: 'Up to 5kg of cheese' },
      { name: 'Material', value: 'Food-grade stainless steel and BPA-free plastic' },
      { name: 'Bonus', value: 'Includes detailed aging guide and recipes' }
    ]
  },
  {
    id: 'auction-5',
    name: 'Single-Origin Chocolate Collection',
    description: 'Rare cacao varieties from small producers around the world',
    longDescription: 'Experience the true diversity of chocolate with this curated collection of single-origin bars. Each chocolate is crafted from rare cacao varieties sourced directly from small-scale farmers in remote regions. The collection showcases the distinctive flavors that emerge from different terroirs and processing methods.',
    category: 'Specialty Foods',
    image: 'PLACEHOLDER',
    'data-image-request': 'assortment of premium chocolate bars with cacao pods',
    currentBid: 65.00,
    timeLeft: '1 day 15 hours',
    type: 'auction',
    details: [
      { name: 'Contains', value: '12 bars, 50g each' },
      { name: 'Origins', value: 'Peru, Madagascar, Venezuela, Ecuador, Vietnam, Tanzania' },
      { name: 'Cacao Percentage', value: 'Ranging from 65% to 85%' },
      { name: 'Dietary', value: 'Vegan, no additives or preservatives' }
    ]
  },
  {
    id: 'auction-6',
    name: 'Premium Saffron Collection',
    description: 'The world\'s most precious spice in its purest form',
    longDescription: 'This exclusive collection features the finest saffron from three distinct growing regions, allowing you to experience the subtle differences in flavor and aroma. Each tin contains hand-harvested saffron threads, carefully sorted and dried to preserve their exceptional quality. Presented in an elegant case with a certificate of authenticity.',
    category: 'Exotic Ingredients',
    image: 'PLACEHOLDER',
    'data-image-request': 'premium saffron threads in elegant packaging',
    currentBid: 127.00,
    timeLeft: '6 hours 45 min',
    type: 'auction',
    details: [
      { name: 'Weight', value: '3 tins of 5g each (15g total)' },
      { name: 'Origins', value: 'Kashmir, Iran, and Spain' },
      { name: 'Grade', value: 'Category I (highest grade)' },
      { name: 'Harvest', value: 'Fall 2023' }
    ]
  }
];

export const coBuyProducts = [
  {
    id: 'cobuy-1',
    name: 'Extra Virgin Olive Oil Collection',
    description: 'Artisanal olive oils from top Mediterranean producers',
    longDescription: 'Experience the finest olive oils the Mediterranean has to offer with this curated collection. Each bottle represents a different olive variety and region, allowing you to explore the diverse flavors and aromas that characterize exceptional olive oil. Perfect for gift-giving or your own gourmet pantry.',
    category: 'Specialty Foods',
    image: 'PLACEHOLDER',
    'data-image-request': 'collection of premium olive oil bottles in gift packaging',
    currentPrice: 84.00,
    regularPrice: 129.00,
    joinedCount: 18,
    targetCount: 25,
    remainingSpots: 7,
    discount: 35,
    type: 'co-buy',
    details: [
      { name: 'Contains', value: '6 bottles, 250ml each' },
      { name: 'Origins', value: 'Italy, Spain, Greece, and Croatia' },
      { name: 'Harvest', value: '2023 harvest, first cold press' },
      { name: 'Varieties', value: 'Arbequina, Koroneiki, Picual, and more' }
    ]
  },
  {
    id: 'cobuy-2',
    name: 'Artisanal Cheese Assortment',
    description: 'A selection of award-winning cheeses from small creameries',
    longDescription: 'This carefully curated cheese assortment brings together the finest creations from small-scale artisanal producers. From buttery soft-ripened varieties to aged hard cheeses with complex flavors, this collection offers an exceptional tasting experience. Each cheese is cut to order and shipped in temperature-controlled packaging.',
    category: 'Artisanal Cheese',
    image: 'PLACEHOLDER',
    'data-image-request': 'assortment of gourmet cheeses on wooden board with accompaniments',
    currentPrice: 68.00,
    regularPrice: 95.00,
    joinedCount: 12,
    targetCount: 20,
    remainingSpots: 8,
    discount: 28,
    type: 'co-buy',
    details: [
      { name: 'Weight', value: 'Approximately 1.2kg total' },
      { name: 'Varieties', value: '6 different styles including soft, semi-soft, and hard' },
      { name: 'Milk Types', value: 'Cow, goat, and sheep' },
      { name: 'Includes', value: 'Pairing guide and serving suggestions' }
    ]
  },
  {
    id: 'cobuy-3',
    name: 'Premium Coffee Subscription',
    description: '6-month subscription of small-batch specialty coffees',
    longDescription: 'Discover the world of premium coffee with this 6-month subscription. Each month, you'll receive two bags of exceptional single-origin coffee, freshly roasted to perfection. Our expert team sources beans directly from small farms around the world, ensuring extraordinary quality and supporting sustainable farming practices.',
    category: 'Specialty Foods',
    image: 'PLACEHOLDER',
    'data-image-request': 'premium coffee beans in packaging with brewing equipment',
    currentPrice: 110.00,
    regularPrice: 180.00,
    joinedCount: 28,
    targetCount: 40,
    remainingSpots: 12,
    discount: 39,
    type: 'co-buy',
    details: [
      { name: 'Duration', value: '6 months' },
      { name: 'Delivery', value: 'Two 250g bags monthly' },
      { name: 'Roast', value: 'Custom roast to your preference' },
      { name: 'Includes', value: 'Tasting notes and brewing guide with each shipment' }
    ]
  },
  {
    id: 'cobuy-4',
    name: 'Japanese Whisky Flight',
    description: 'Exclusive tasting set of rare Japanese whiskies',
    longDescription: 'Experience the refined elegance of Japanese whisky with this exclusive flight. Featuring five distinguished expressions from Japan\'s most revered distilleries, this collection showcases the exceptional craftsmanship and attention to detail that defines Japanese whisky-making. Each bottle is presented in a handcrafted wooden box with tasting notes.',
    category: 'Wine & Spirits',
    image: 'PLACEHOLDER',
    'data-image-request': 'premium Japanese whisky bottles in elegant gift box',
    currentPrice: 220.00,
    regularPrice: 350.00,
    joinedCount: 16,
    targetCount: 30,
    remainingSpots: 14,
    discount: 37,
    type: 'co-buy',
    details: [
      { name: 'Contents', value: '5 bottles, 200ml each' },
      { name: 'Distilleries', value: 'Selection from top Japanese producers' },
      { name: 'Age', value: 'Range from 8 to 18 years' },
      { name: 'Packaging', value: 'Handcrafted wooden presentation box' }
    ]
  },
  {
    id: 'cobuy-5',
    name: 'Luxury Caviar Sampler',
    description: 'Finest caviar selections with traditional accompaniments',
    longDescription: 'Indulge in the ultimate luxury with this exceptional caviar sampler. Featuring three varieties of premium caviar—Ossetra, Kaluga, and Beluga—this collection allows you to experience the distinctive characteristics of each type. Presented in a temperature-controlled gift box with mother-of-pearl spoons and traditional accompaniments.',
    category: 'Exotic Ingredients',
    image: 'PLACEHOLDER',
    'data-image-request': 'luxury caviar tins with mother of pearl spoons and accompaniments',
    currentPrice: 195.00,
    regularPrice: 295.00,
    joinedCount: 8,
    targetCount: 15,
    remainingSpots: 7,
    discount: 34,
    type: 'co-buy',
    details: [
      { name: 'Contents', value: '3 tins, 30g each' },
      { name: 'Varieties', value: 'Ossetra, Kaluga, and Beluga' },
      { name: 'Includes', value: 'Mother-of-pearl spoons, blinis, and crème fraîche' },
      { name: 'Sourcing', value: 'Sustainable aquaculture, highest quality grade' }
    ]
  },
  {
    id: 'cobuy-6',
    name: 'Handcrafted Ceramic Tableware Set',
    description: 'Artisanal ceramic dinnerware for elegant entertaining',
    longDescription: 'Elevate your dining experience with this stunning collection of handcrafted ceramic tableware. Each piece is individually thrown and glazed by master artisans, resulting in subtle variations that highlight their handmade character. The earthy tones and organic forms complement both casual and formal dining settings.',
    category: 'Specialty Foods',
    image: 'PLACEHOLDER',
    'data-image-request': 'elegant handmade ceramic plates, bowls and serving dishes in earth tones',
    currentPrice: 175.00,
    regularPrice: 265.00,
    joinedCount: 14,
    targetCount: 25,
    remainingSpots: 11,
    discount: 34,
    type: 'co-buy',
    details: [
      { name: 'Includes', value: '6 dinner plates, 6 salad plates, 6 bowls, 2 serving platters' },
      { name: 'Material', value: 'Stoneware ceramic with natural glazes' },
      { name: 'Care', value: 'Dishwasher and microwave safe' },
      { name: 'Craftsmanship', value: 'Handmade by master potters in small-batch production' }
    ]
  }
];

// Combine both product types for the product detail page to use
export const allProducts = [...auctionProducts, ...coBuyProducts];