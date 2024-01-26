import { ChakraProvider } from "@chakra-ui/react";
import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import ProjectsSection from "./components/ProjectsSection";
import ContactMeSection from "./components/ContactMeSection";
import Footer from "./components/Footer";
import { AlertProvider } from "./context/alertContext";
import Alert from "./components/Alert";

import './tailwind.css'; // Import the generated Tailwind CSS file
import TechnologySection from "./components/Technologies";
import CertificateSection from "./components/CertificateSection";
import ScrollToTopArrow from "./components/ScrollToTopArrow";


function App() {
  return (
    <ChakraProvider>
      <AlertProvider>
        <main>
          <Header />
          <LandingSection />
          <ProjectsSection />
          <TechnologySection />
          <CertificateSection/>
          <ContactMeSection />
          <ScrollToTopArrow/>
          <Footer />
          <Alert />
        </main>
      </AlertProvider>
    </ChakraProvider>
  );
}

export default App;
