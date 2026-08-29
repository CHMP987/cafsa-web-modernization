const IMG = "https://dyj6gt4964deb.cloudfront.net/images";

const whatsappMessage = "Hola, quisiera reservar una mesa en Lubnan.";

// Reused across the dish grid and the narrative section.
const mixturaImage = `${IMG}/dca70e1c-3a3f-4706-865a-ae2e91a2c281.jpeg`;

export type Dish = {
  name: string;
  image: string;
};

export type HourRow = {
  day: string;
  time: string;
};

export type Narrative = {
  image: string;
  imageAlt: string;
  phrases: readonly string[];
};

export type RestaurantSite = {
  name: string;
  shortName: string;
  locationLabel: string;
  tagline: string;
  proposalBanner: string;
  address: string;
  mapsUrl: string;
  phoneDisplay: string;
  phoneHref: string;
  whatsappDisplay: string;
  whatsappHref: string;
  oddmenuUrl: string;
  facebookUrl: string;
  instagramUrl: string;
  tripadvisorUrl: string;
  heroImage: string;
  logoImage: string;
  dishes: readonly Dish[];
  narrative: Narrative;
  hours: readonly HourRow[];
};

export const content: RestaurantSite = {
  name: "Restaurante Lubnan",
  shortName: "Lubnan",
  locationLabel: "Paseo Colón",
  tagline:
    "Desde el mediterráneo de Beirut a tu mesa. Lo mejor de la comida libanesa tradicional te espera!",
  proposalBanner: "Así se vería el sitio oficial de Lubnan — una propuesta Lubnan Website.",
  address: "Paseo Colón, diagonal al Scotiabank, San José, Costa Rica",
  mapsUrl: "https://maps.app.goo.gl/Cdthevu3SgXHhZkB7",
  phoneDisplay: "2257 6071",
  phoneHref: "tel:+50622576071",
  whatsappDisplay: "8660 0707",
  whatsappHref: `https://wa.me/50686600707?text=${encodeURIComponent(whatsappMessage)}`,
  oddmenuUrl: "https://oddmenu.com/es/p/ilovelubnan",
  facebookUrl: "https://www.facebook.com/lubnancr",
  instagramUrl: "https://www.instagram.com/lubnancr",
  tripadvisorUrl:
    "https://www.tripadvisor.com/Restaurant_Review-g309293-d778018-Reviews-Lubnan-San_Jose_San_Jose_Metro_Province_of_San_Jose.html",
  heroImage: `${IMG}/afa810da-b26e-4e6c-afbc-34529c17bc77.jpeg`,
  logoImage: `${IMG}/d66c4691-24d9-471e-95f1-9cb65bf84c9d.jpeg`,
  dishes: [
    { name: "Hummus", image: `${IMG}/2fedf603-7bdb-483b-a158-38e057d31536.jpeg` },
    { name: "Kibbeh", image: `${IMG}/5d28c3d7-8711-4b4b-9a0c-63fd8996113b.jpeg` },
    { name: "Costillas de Cordero", image: `${IMG}/1bfb25dd-337c-40eb-8d70-13ea1fb7163c.jpeg` },
    { name: "Mixtura Lubnan", image: mixturaImage },
  ],
  narrative: {
    image: mixturaImage,
    imageAlt: "Mixtura Lubnan",
    phrases: [
      "Desde el mediterráneo de Beirut",
      "a tu mesa",
      "Lo mejor de la comida libanesa tradicional",
    ],
  },
  hours: [
    { day: "Lunes", time: "Cerrado" },
    { day: "Martes", time: "11:00–15:00 y 18:00–21:00" },
    { day: "Miércoles", time: "11:00–15:00 y 18:00–21:00" },
    { day: "Jueves", time: "11:00–22:00" },
    { day: "Viernes", time: "11:00–15:00 y 18:00–22:00" },
    { day: "Sábado", time: "12:00–16:00 y 18:00–21:00" },
    { day: "Domingo", time: "11:00–17:00" },
  ],
};
