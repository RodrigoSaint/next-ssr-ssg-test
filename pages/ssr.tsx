import Layout from "component/layout";
import VenueDisplay from "component/venue-display";
import { Venue } from "entity/sponsor-venue";

export async function getServerSideProps() {
  const { getSponsorVenues } = await import("./api/venue");
  const venueCollection = await getSponsorVenues();
  return {
    props: {
      venueCollection,
    },
  };
}

interface SSRProps {
  venueCollection: Venue[];
}

export default function SSR({ venueCollection }: SSRProps) {
  return (
    <Layout title="Server Side Rendering">
      <VenueDisplay title="Sponsor Venues" venueCollection={venueCollection} />
    </Layout>
  );
}
