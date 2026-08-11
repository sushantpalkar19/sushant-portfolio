import { Suspense, lazy, useCallback, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import { SectionSkeleton } from "@/components/common/section-skeleton";
import WelcomeIntro from "@/components/WelcomeIntro";
import HomePage from "@/pages/HomePage";

const NotFoundPage = lazy(() => import("@/pages/NotFoundPage"));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<HomePage />} />
        <Route
          path="*"
          element={
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.24, ease: "easeOut" }}
            >
              <NotFoundPage />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

function AppContent() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SectionSkeleton />}>
        <AnimatedRoutes />
      </Suspense>
    </BrowserRouter>
  );
}

export default function App() {
  const [showIntro, setShowIntro] = useState(true);
  const introCompletedRef = useRef(false);

  const handleIntroComplete = useCallback(() => {
    if (introCompletedRef.current) {
      return;
    }
    introCompletedRef.current = true;
    setShowIntro(false);
  }, []);

  return (
    <>
      {showIntro ? (
        <WelcomeIntro key="welcome-intro" onComplete={handleIntroComplete} />
      ) : null}
      <AppContent />
    </>
  );
}
