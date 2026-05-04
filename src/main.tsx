import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@radix-ui/react-tooltip";
import { PeopleProvider } from "./context/PeopleContext.tsx";

const queryClient = new QueryClient();


createRoot(document.getElementById("root")!).render(

<QueryClientProvider client={queryClient}>
    <TooltipProvider>
    <PeopleProvider>

    <App  />
    </PeopleProvider>
    </TooltipProvider>
</QueryClientProvider>

);
