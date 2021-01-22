// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import { Venue } from "entity/sponsor-venue";
import { NextApiRequest } from "next";

const venueCollection: Venue[] = [
  {
    id: 1,
    image:
      "https://www.receptionhalls.com/media/NJ/148/park-savoy-florham-park-nj_3x2.jpg",
    title: "Park Savoy",
    location: "Florham Park, NJ",
    description:
      "Welcome to The Park Savoy. Since 1982, we have pursued a single goal: to create a setting for weddings warmed by...",
    path: "",
  },
  {
    id: 2,
    image:
      "https://www.receptionhalls.com/media/NJ/9839/naninas-in-the-park-belleville-nj_3x2.jpg",
    title: "Nanina's In The Park",
    location: "Belleville, NJ",
    description:
      "Nanina's In The Park … a magnificent New Jersey landmark, nestled in a historical park setting. Nanina’s presents...",
    path: "",
  },
  {
    id: 3,
    image:
      "https://www.receptionhalls.com/media/NJ/11753/park-chateau-estate-and-gardens-east-brunswick-nj_3x2.jpg",
    title: "Park Chateau Estate And Gardens",
    location: "East Brunswick, NJ",
    description:
      "Visualize your once in a lifetime wedding day as you might if you stepped into a classic French Romance Novel.  The...",
    path: "",
  },
  {
    id: 4,
    image:
      "https://www.receptionhalls.com/media/NJ/13137/chateau-grande-hotel-east-brunswick-nj_3x2.jpg",
    title: "Chateau Grande Hotel",
    location: "East Brunswick, NJ",
    description:
      "The Chateau Grande Hotel is a brand new, state of the art, boutique hotel in East Brunswick, NJ with a total of 108...",
    path: "",
  },
];

export function getVenue(id: number) {
  return new Promise<Venue>((resolve) => {
    setTimeout(() => resolve(venueCollection.find((v) => v.id === id)), 5000);
  });
}

export default (req: NextApiRequest, res) => {
  res.statusCode = 200;
  getVenue(parseInt(req.query.id as string)).then(res.json);
};
