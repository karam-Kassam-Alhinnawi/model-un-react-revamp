import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import About from "./pages/About";
import Impact from "./pages/Impact";
import Programs from "./pages/Programs";
import LearnModelUN from "./pages/LearnModelUN";
import TakeAction from "./pages/TakeAction";
import VolunteerTranslators from "./pages/VolunteerTranslators";
import GeneralAssembly from "./pages/GeneralAssembly";
import Crisis from "./pages/Crisis";
import Awards from "./pages/Awards";
import Languages from "./pages/Languages";
import Masterclass from "./pages/Masterclass";
import Fellowship from "./pages/Fellowship";
import Donate from "./pages/Donate";
import Reports from "./pages/Reports";
import OurPeople from "./pages/OurPeople";
import NotFound from "./pages/NotFound";
import LearningPathDashboard from "./pages/LearningPathDashboard";
import SecurityCouncilBriefing from "./pages/InteractiveModule";
import AIModel from "./pages/AIModel";


const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about" element={<About />} />
          <Route path="/impact" element={<Impact />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/chapters" element={<Programs />} />
          <Route path="/learn-model-un" element={<LearnModelUN />} />
          <Route path="/written-guides" element={<LearnModelUN />} />
          <Route path="/take-action" element={<TakeAction />} />
          <Route path="/volunteer-translators" element={<VolunteerTranslators />} />
          <Route path="/general-assembly" element={<GeneralAssembly />} />
          <Route path="/crisis" element={<Crisis />} />
          <Route path="/awards" element={<Awards />} />
          <Route path="/languages" element={<Languages />} />
          <Route path="/masterclass" element={<Masterclass />} />
          <Route path="/fellowship" element={<Fellowship />} />
          <Route path="/donate" element={<Donate />} />
          <Route path="/reports" element={<Reports />} />
          <Route path="/start-a-chapter" element={<Programs />} />
          <Route path="/our-people" element={<OurPeople />} />
          <Route path="/learningpath" element={<LearningPathDashboard/>} />
          <Route path="/module" element={<SecurityCouncilBriefing/>} />
          <Route path="/model" element={<AIModel/>} />
          // {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
