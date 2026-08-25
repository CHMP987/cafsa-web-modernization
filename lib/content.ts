const IMG = "https://dyj6gt4964deb.cloudfront.net/images";

const whatsappMessage = "Hola, quisiera reservar una mesa en Lubnan.";

export const content = {
  name: "Restaurante Lubnan",
  shortName: "Lubnan",
  locationLabel: "Paseo Colón",
  tagline:
    "Desde el mediterráneo de Beirut a tu mesa. Lo mejor de la comida libanesa tradicional te espera!",
  proposalBanner: "Propuesta de WWebs — no es el sitio oficial.",
  address: "Paseo Colón, diagonal al Scotiabank, San José, Costa Rica",
  mapsUrl: "https://maps.app.goo.gl/Cdthevu3SgXHhZkB7",
  phoneDisplay: "2257 6071",
  phoneHref: "tel:+50622576071",
  whatsappDisplay: "8660 0707",
  whatsappHref: `https://wa.me/50686600707?text=${encodeURIComponent(whatsappMessage)}`,
  oddmenuUrl: "https://oddmenu.com/es/p/ilovelubnan",
  facebookUrl: "https://www.facebook.com/lubnancr",
  instagramUrl: "https://www.instagram.com/lubnancr",
  heroImage: `${IMG}/afa810da-b26e-4e6c-afbc-34529c17bc77.jpeg`,
  logoImage: `${IMG}/crop-d66c4691-24d9-471e-95f1-9cb65bf84c9d.jpeg`,
  dishes: [
    {
      name: "Hummus",
      image: `${IMG}/crop-2fedf603-7bdb-483b-a158-38e057d31536.jpeg`,
    },
    {
      name: "Kibbeh",
      image: `${IMG}/crop-5d28c3d7-8711-4b4b-9a0c-63fd8996113b.jpeg`,
    },
    {
      name: "Costillas de Cordero",
      image: `${IMG}/crop-1bfb25dd-337c-40eb-8d70-13ea1fb7163c.jpeg`,
    },
    {
      name: "Mixtura Lubnan",
      image: `${IMG}/crop-dca70e1c-3a3f-4706-865a-ae2e91a2c281.jpeg`,
    },
  ],
  hours: [
    { day: "Lunes", time: "Cerrado" },
    { day: "Martes", time: "11:00–15:00 y 18:00–21:00" },
    { day: "Miércoles", time: "11:00–15:00 y 18:00–21:00" },
    { day: "Jueves", time: "11:00–22:00" },
    { day: "Viernes", time: "11:00–15:00 y 18:00–22:00" },
    { day: "Sábado", time: "12:00–16:00 y 18:00–21:00" },
    { day: "Domingo", time: "11:00–17:00" },
  ],
} as const;
