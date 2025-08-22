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
      <div className="absolute inset-0 bg-gradient-to-br from-jarvis-cyan/20 via-transparent to-jarvis-cyan-bright/10 animate-glow-pulse" />
      
      {/* Additional Neon Glow Effect */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-jarvis-cyan/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/3 right-1/3 w-64 h-64 bg-jarvis-cyan-bright/15 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-jarvis-cyan/20 rounded-full blur-xl animate-glow-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* ElevenLabs Conversational AI Widget */}
      <elevenlabs-convai agent-id="NDxnOzy0Su1Z9IlFAg7I"></elevenlabs-convai>
    </main>
  );
};

export default Index;
