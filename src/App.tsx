import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import Index from "./pages/Index";
import Teams from "./pages/Teams";
import Services from "./pages/Services";
import Portfolio from "./pages/Portfolio";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";
import Contact from "./pages/Contact";
import Career from "./pages/Career";

// subpages
import Betalyzer from "./pages/sub_pages/Betalyzer"
import Emailmarket from "./pages/sub_pages/Emailmarket"
import Bettingsystem from "./pages/sub_pages/Bettingsystem"
import Realestatescrapper from "./pages/sub_pages/Realestatescrapper"
import ScrollToTop from "@/components/ScrollToTop";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <ThemeProvider defaultTheme="light" storageKey="codifyrs-theme">
        <Toaster />
        <Sonner />
        <BrowserRouter>
         <ScrollToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/services" element={<Services />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/career" element={<Career />} />
            <Route path="/portfolio/betalyzer" element={<Betalyzer />} />
            <Route path="/portfolio/email_market" element={<Emailmarket />} />
            <Route path="/portfolio/betting_system" element={<Bettingsystem />} />
            <Route path="/portfolio/realestate_scrapper" element={<Realestatescrapper />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;