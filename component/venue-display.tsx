import { Venue } from "entity/sponsor-venue";
import VenueCard from "./venue-card";

interface VenueDisplayProps {
  title: string;
  venueCollection: Venue[];
}

export default function VenueDisplay({
  title,
  venueCollection,
}: VenueDisplayProps) {
  return (
    <div className="venueDisplay">
      <div className="level is-hidden-mobile">
        <div className="level-left">
          <div className="level-item">
            <h2 className="title is-6 has-text-left">{title}</h2>
          </div>
        </div>
      </div>
      {!venueCollection && <span className="title is-12">Is Loading....</span>}
      <div className="columns is-multiline">
        {venueCollection &&
          venueCollection.map((v) => (
            <div
              className="column is-12-mobile is-6-tablet is-3-desktop"
              key={v.path}
            >
              <VenueCard {...v} />{" "}
            </div>
          ))}
      </div>
      <style jsx>
        {`
          .venueDisplay {
            background-color: #f7f7f7;
            margin-bottom: 4em;
            padding: 2em;
            border-radius: 0.5em;
          }
        `}
      </style>
    </div>
  );
}
