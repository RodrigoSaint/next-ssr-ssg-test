import Layout from "component/layout";
import VenueCard from "component/venue-card";
import { Venue } from "entity/sponsor-venue";
import { NextPageContext } from "next";

export async function getServerSideProps(context: NextPageContext) {
  const { getVenue } = await import("../../api/venue/[id]");

  const venue = await getVenue(parseInt(context.query.id as string));

  return {
    props: { venue },
  };
}

interface DetailSSRProps {
  venue: Venue;
}

export default function DetailSSR({ venue }: DetailSSRProps) {
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
