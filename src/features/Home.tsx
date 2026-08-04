import Hero from '../sections/Hero/Hero';
import Rooms from '../sections/Rooms/Rooms';
import Benefits from '../sections/Benefits/Benefits';
import Gallery from '../sections/Gallery/Gallery';
import Location from '../sections/Location/Location';
import Objections from '../sections/Objections/Objections';
import Booking from '../sections/Booking/Booking';
import Testimonials from '../sections/Testimonials/Testimonials';

export default function Home() {
  return (
    <>
      <Hero />
      <Rooms />
      <Benefits />
      <Gallery />
      <Location />
      <Objections />
      <Booking />
      <Testimonials />
    </>
  );
}
