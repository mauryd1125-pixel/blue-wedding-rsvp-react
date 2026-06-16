import Hero from './components/sections/Hero.jsx';
import Countdown from './components/sections/Countdown.jsx';
import InvitationDetails from './components/sections/InvitationDetails.jsx';
import RSVPSection from './components/sections/RSVPSection.jsx';
import GuestInformation from './components/sections/GuestInformation.jsx';
import GiftSection from './components/sections/GiftSection.jsx';
import DrinksSection from './components/sections/DrinksSection.jsx';
import Guestbook from './components/sections/Guestbook.jsx';
import WhatsAppAssistant from './components/sections/WhatsAppAssistant.jsx';
import Interactions from './components/sections/Interactions.jsx';
import GalleryPreview from './components/sections/GalleryPreview.jsx';
import FooterBar from './components/layout/FooterBar.jsx';

export default function App() {
  return (
    <main className="font-poppins text-textDark">
      <Hero />
      <Countdown />
      <InvitationDetails />
      <RSVPSection />
      <GuestInformation />
      <GiftSection />
      <DrinksSection />
      <Guestbook />
      <WhatsAppAssistant />
      <Interactions />
      <GalleryPreview />
      <FooterBar />
    </main>
  );
}
