import { useRouter } from "next/router";
import Layout from "component/layout";
import VenueCard from "component/venue-card";
import { Venue } from "entity/sponsor-venue";
import { useEffect, useState } from "react";
import { getVenue } from "request/sponsor";

export default function Detail() {
  const { query } = useRouter();
  const [venue, setVenue] = useState<Venue>(null);

  useEffect(() => {
    if (!query.id) return;
    getVenue(query.id as string).then(setVenue);
  }, [query]);

  return (
    <Layout title={venue ? venue.title : "LOADING"}>
      {venue && (
        <div style={{ width: 500 }}>
          <VenueCard {...venue} />
        </div>
      )}
      {!venue && <span>LOADING...</span>}
    </Layout>
  );
}
