import { Venue } from "entity/sponsor-venue";

export function getSponsorVenues(baseUrl: string = ""): Promise<Venue[]> {
  return fetch(`${baseUrl}/api/venue`).then((c) => c.json());
}
