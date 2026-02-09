import { useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 grid-tactical opacity-20" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
      
      <div className="text-center relative z-10 px-4">
        <h1 className="mb-2 text-8xl font-black text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent" style={{ fontFamily: 'Orbitron' }}>
          404
        </h1>
        <div className="w-24 h-1 bg-primary mx-auto mb-6 rounded-full" />
        
        <h2 className="mb-4 text-2xl font-bold text-foreground uppercase tracking-widest">
          Sector Not Found
        </h2>
        
        <p className="mb-8 text-muted-foreground max-w-md mx-auto">
          The tactical coordinates you are trying to access do not exist or have been classified.
        </p>
        
        <a 
          href="/" 
          className="inline-flex items-center gap-2 px-8 py-3 bg-primary/10 border border-primary/50 text-primary font-bold uppercase tracking-wider hover:bg-primary hover:text-white transition-all duration-300 clip-tactical-sm group"
        >
          <span>Return to Base</span>
          <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default NotFound;
