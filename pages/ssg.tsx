import Layout from "component/layout";
import VenueDisplay from "component/venue-display";
import { Venue } from "entity/sponsor-venue";

export async function getStaticProps() {
  const { getSponsorVenues } = await import("./api/venue");
  const venueCollection = await getSponsorVenues();

  return {
    props: {
      venueCollection,
    },
  };
}

interface SSGProps {
  venueCollection: Venue[];
}

export default function SSG({ venueCollection }: SSGProps) {
  return (
    <Layout title="Static Site Generation">
      <VenueDisplay title="Sponsor Venues" venueCollection={venueCollection} />
    </Layout>
  );
}
