import Layout from "component/layout";
import VenueDisplay from "component/venue-display";
import { Venue } from "entity/sponsor-venue";
import { useEffect, useState } from "react";
import { getSponsorVenues } from "request/sponsor";

export default function Home() {
  const [venueCollection, setVenueCollection] = useState<Venue[]>(null);

  useEffect(() => {
    getSponsorVenues().then(setVenueCollection);
  }, []);

  return (
    <Layout title="Client Request">
      <VenueDisplay title="Sponsor Venues" venueCollection={venueCollection} />
    </Layout>
  );
}
