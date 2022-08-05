import EventBoxLeft from "./EventBoxLeft";
import EventBoxRight from "./EventBoxRight";
import Heading from "./Heading";

export default function UpcomingEvents() {
  return (
    <div className="isolate">
      <Heading />
      <div className="flex flex-col gap-8 p-8 justify-center items-center">
        <EventBoxLeft />
        <EventBoxRight />
        <EventBoxLeft />
      </div>
    </div>
  );
}
