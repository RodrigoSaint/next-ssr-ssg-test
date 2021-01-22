import { Venue } from "entity/sponsor-venue";

export function getSponsorVenues(): Promise<Venue[]> {
  return fetch(`/api/venue`).then((c) => c.json());
}

export function getVenue(id: string): Promise<Venue> {
  return fetch(`/api/venue/${id}`).then((c) => c.json());
}
