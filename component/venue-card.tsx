import "bulma/css/bulma.min.css";
import { Venue } from "entity/sponsor-venue";

interface VenueCardProps extends Venue {}

export default function VenueCard(props: VenueCardProps) {
  return (
    <div className="card is-slightly-rounded">
      <div className="card-image">
        <figure className="image">
          <img src={props.image} />
        </figure>
      </div>
      <div className="card-content">
        <div className="content">
          <p>
            <span className="title is-4 is-capitalized has-text-black">
              {props.title}
            </span>
            <br />
            <span className="m-t-tiny block">{props.location}</span>
          </p>
          <p className="venue-data-sm">{props.description}</p>
        </div>
      </div>
    </div>
  );
}
