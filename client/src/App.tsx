import { useState } from "react";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./lib/queryClient";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Home from "@/pages/Home";
import ProductDetail from "@/pages/ProductDetail";

function App() {
  const [selectedProductId, setSelectedProductId] = useState<string | null>(null);

  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        {selectedProductId ? (
          <ProductDetail
            id={selectedProductId}
            onBack={() => {
              setSelectedProductId(null);
              setTimeout(() => {
                const el = document.getElementById("products");
                if (el) el.scrollIntoView({ behavior: "smooth" });
              }, 100);
            }}
          />
        ) : (
          <Home onProductClick={(id) => {
            setSelectedProductId(String(id));
            window.scrollTo({ top: 0, behavior: "smooth" });
          }} />
        )}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
