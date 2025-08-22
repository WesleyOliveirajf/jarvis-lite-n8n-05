import { useEffect } from 'react';

// Declare the custom element for TypeScript
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'elevenlabs-convai': {
        'agent-id': string;
        style?: React.CSSProperties;
      }
    }
  }
}

const Index = () => {
  useEffect(() => {
    // Set SEO metadata
    document.title = 'Interface Neon - Design Futurístico com AI';
    
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', 'Interface futurística com efeito neon azul pulsante e assistente de voz AI integrado via ElevenLabs.');
    }
  }, []);

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/66967bc9-0957-49c8-a7f9-3ccc66210814.png')`
        }}
      />
      
      {/* Neon Blue Overlay with Slow Pulse */}
      <div className="absolute inset-0 bg-gradient-to-br from-jarvis-cyan/20 via-transparent to-jarvis-cyan-bright/10 animate-electric-arc" />
      
      {/* Tech Grid Lines */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-jarvis-cyan/40 to-transparent h-px top-1/4 animate-cyber-blink" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-jarvis-cyan/40 to-transparent h-px top-3/4 animate-neon-flicker" style={{ animationDelay: '1.2s' }} />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jarvis-cyan/40 to-transparent w-px left-1/4 animate-tech-pulse" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-jarvis-cyan/40 to-transparent w-px right-1/4 animate-electric-arc" style={{ animationDelay: '0.7s' }} />
      </div>
      
      {/* Additional Neon Glow Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-jarvis-cyan/10 rounded-full blur-3xl animate-tech-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-jarvis-cyan-bright/15 rounded-full blur-2xl animate-electric-arc" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-jarvis-cyan/20 rounded-full blur-xl animate-neon-flicker" style={{ animationDelay: '2s' }} />
        
        {/* Tech Neon Lines */}
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-jarvis-cyan to-transparent animate-cyber-blink opacity-30" />
        <div className="absolute top-1/3 left-0 w-full h-px bg-gradient-to-r from-transparent via-jarvis-cyan-bright to-transparent animate-neon-flicker opacity-40" style={{ animationDelay: '1.5s' }} />
        <div className="absolute bottom-0 right-1/3 w-px h-full bg-gradient-to-t from-transparent via-jarvis-cyan to-transparent animate-electric-arc opacity-25" style={{ animationDelay: '0.8s' }} />
        
        {/* Pulsing Corner Elements */}
        <div className="absolute top-4 left-4 w-3 h-3 bg-jarvis-cyan rounded-full animate-tech-pulse neon-glow" />
        <div className="absolute top-4 right-4 w-3 h-3 bg-jarvis-cyan-bright rounded-full animate-cyber-blink neon-glow" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-4 left-4 w-3 h-3 bg-jarvis-cyan rounded-full animate-neon-flicker neon-glow" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-4 right-4 w-3 h-3 bg-jarvis-cyan-bright rounded-full animate-electric-arc neon-glow" style={{ animationDelay: '0.5s' }} />
      </div>

      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai agent-id="NDxnOzy0Su1Z9IlFAg7I"></elevenlabs-convai>
    </main>
  );
};

export default Index;
