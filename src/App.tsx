import Header from './components/Header/Header';
/*import AnnouncementBar from './components/AnnouncementBar/AnnouncementBar';*/
import Hero from './components/Hero/Hero';
import HighlightTicker from './components/HighlightTicker/HighlightTicker';
import About from './components/About/About';
import Services from './components/Services/Services';
import AdditionalServices from './components/AdditionalServices/AdditionalServices';
import Booking from './components/Booking/Booking';
import ScheduleLocation from './components/ScheduleLocation/ScheduleLocation';
import Testimonials from './components/Testimonials/Testimonials';
import CTABanner from './components/CTABanner/CTABanner';
import Footer from './components/Footer/Footer';
import WhatsAppFloatingButton from './components/WhatsAppFloatingButton/WhatsAppFloatingButton';


function App() {
  return (
    <>
      <Header />
      <main>
        {/* <AnnouncementBar /> */}
        <Hero />
        <HighlightTicker />
        <About />
        <Services />
        <AdditionalServices />
        <Booking />
        <ScheduleLocation />
        <Testimonials />
        <CTABanner />
      </main>
      <Footer />
      <WhatsAppFloatingButton />
    </>
  );
}

export default App;