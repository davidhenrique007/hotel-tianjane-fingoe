import Hero from '../sections/Hero/Hero';
import About from '../sections/About/About';
import Rooms from '../sections/Rooms/Rooms';
import Services from '../sections/Services/Services';
import Benefits from '../sections/Benefits/Benefits';
import Gallery from '../sections/Gallery/Gallery';
import Location from '../sections/Location/Location';
import Testimonials from '../sections/Testimonials/Testimonials';
import Objections from '../sections/Objections/Objections';
import Booking from '../sections/Booking/Booking';
import FAQ from '../sections/FAQ/FAQ';

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Rooms />
      <Services />
      <Benefits />
      <Gallery />
      <Location />
      <Testimonials />
      <Objections />
      <Booking />
      <FAQ />
    </>
  );
}
