import Layout from "component/layout";
import VenueCard from "component/venue-card";
import { Venue } from "entity/sponsor-venue";

export async function getStaticPaths() {
  const { getSponsorVenues } = await import("../api/venue");
  const venueCollection = await getSponsorVenues();

  return {
    paths: venueCollection.map(({ id }) => ({
      params: { id: id.toString() },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context) {
  const { getVenue } = await import("../api/venue/[id]");

  const venue = await getVenue(parseInt(context.params.id as string));

  return {
    props: { venue },
  };
}

interface DetailSSGProps {
  venue: Venue;
}

export default function DetailSSG({ venue }: DetailSSGProps) {
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
