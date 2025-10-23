// Urutan import diubah
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster as SonnerToaster } from "@/components/ui/sonner";
import { Toaster as DefaultToaster } from "@/components/ui/toaster";

import IndexPage from "./pages/Index";
import NotFoundPage from "./pages/NotFound";
import "./index.css";

const queryClientInstance = new QueryClient();

function Application() {
  return (
    <QueryClientProvider client={queryClientInstance}>
      <TooltipProvider delayDuration={300}> {/* Ubah delay duration */}
        <DefaultToaster />
        <SonnerToaster />
        <BrowserRouter>
          <Routes>
            {/* Rute utama */}
            <Route path="/" element={<IndexPage />} />

            {/* Rute 404 - selalu terakhir */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default Application;