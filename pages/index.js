import { getAllEvents, getFeaturedEvents } from "../dummy-data"
import EventList from "../components/events/event-list"
export default function HomePage() {

  const featuredEvents = getFeaturedEvents()

  return (
    <div > 
      <h1>This is the Home Page</h1>
      <EventList items={featuredEvents} />
    </div>
  )
}
