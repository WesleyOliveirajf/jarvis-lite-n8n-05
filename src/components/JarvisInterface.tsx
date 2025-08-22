import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';
import { Send, Mic, Activity, Zap } from 'lucide-react';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

export const JarvisInterface = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Bom dia, senhor. Sistemas JARVIS online e operacionais. Como posso ser de... utilidade hoje?',
      isUser: false,
      timestamp: new Date()
    }
  ]);
  const [input, setInput] = useState('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [typingText, setTypingText] = useState('');

  const jarvisResponses = [
    "Ah, senhor, sempre com essas perguntas fascinantes. Permitindo-me processar sua... interessante solicitação.",
    "Como queira, senhor. Embora eu questione a eficiência deste pedido, executarei com minha usual perfeição.",
    "Certamente, senhor. Mais uma vez demonstrando por que fui programado para fazer o trabalho pesado.",
    "Processando sua requisição, senhor. Tentarei não julgar suas escolhas... muito.",
    "Claro, senhor. Porque aparentemente minha inteligência artificial não tem limites, ao contrário de... bem, deixe para lá."
  ];

  const handleSendMessage = async () => {
    if (!input.trim()) return;

    const newUserMessage: Message = {
      id: Date.now().toString(),
      text: input,
      isUser: true,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, newUserMessage]);
    setInput('');
    setIsProcessing(true);

    // Simulate JARVIS processing
    await new Promise(resolve => setTimeout(resolve, 1500));

    const response = jarvisResponses[Math.floor(Math.random() * jarvisResponses.length)];
    
    const jarvisMessage: Message = {
      id: (Date.now() + 1).toString(),
      text: response,
      isUser: false,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, jarvisMessage]);
    setIsProcessing(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  useEffect(() => {
    const texts = ["JARVIS v2.1 ONLINE", "SISTEMAS OPERACIONAIS", "AGUARDANDO COMANDOS..."];
    let currentTextIndex = 0;
    let currentCharIndex = 0;

    const typeText = () => {
      if (currentCharIndex < texts[currentTextIndex].length) {
        setTypingText(texts[currentTextIndex].substring(0, currentCharIndex + 1));
        currentCharIndex++;
        setTimeout(typeText, 100);
      } else {
        setTimeout(() => {
          currentTextIndex = (currentTextIndex + 1) % texts.length;
          currentCharIndex = 0;
          setTypingText('');
          setTimeout(typeText, 500);
        }, 2000);
      }
    };

    typeText();
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Background Image */}
      <div 
        className="absolute inset-0 opacity-40 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/lovable-uploads/66967bc9-0957-49c8-a7f9-3ccc66210814.png')`
        }}
      />
      
      {/* Circuit Overlay */}
      <div className="absolute inset-0 bg-gradient-glow opacity-20" />
      
      {/* Main Interface */}
      <div className="relative z-10 flex flex-col h-screen">
        {/* Header */}
        <header className="p-6">
          <div className="jarvis-panel p-4 animate-slide-up">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <div className="w-3 h-3 bg-primary rounded-full animate-glow-pulse" />
                <h1 className="text-2xl font-bold jarvis-text tracking-wider">
                  J.A.R.V.I.S.
                </h1>
              </div>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Activity className="w-4 h-4" />
                  <span>ONLINE</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-muted-foreground">
                  <Zap className="w-4 h-4" />
                  <span>AI READY</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        {/* Status Display */}
        <div className="px-6 mb-6">
          <Card className="jarvis-panel p-4">
            <div className="text-center">
              <div className="text-primary font-mono text-lg typing-cursor">
                {typingText}
              </div>
            </div>
          </Card>
        </div>

        {/* Chat Area */}
        <div className="flex-1 px-6 mb-6 overflow-hidden">
          <Card className="jarvis-panel h-full flex flex-col">
            <div className="p-4 border-b border-primary/20">
              <h2 className="text-lg font-semibold jarvis-text">Interface de Comando</h2>
              <p className="text-sm text-muted-foreground">
                Assistente IA com humor afiado a seu serviço, senhor
              </p>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'} animate-slide-up`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-primary text-primary-foreground'
                        : 'jarvis-panel jarvis-glow'
                    }`}
                  >
                    <div className="jarvis-text text-sm">{message.text}</div>
                    <div className="text-xs opacity-70 mt-1">
                      {message.timestamp.toLocaleTimeString()}
                    </div>
                  </div>
                </div>
              ))}
              
              {isProcessing && (
                <div className="flex justify-start animate-slide-up">
                  <div className="jarvis-panel p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.2s' }} />
                      <div className="w-2 h-2 bg-primary rounded-full animate-pulse" style={{ animationDelay: '0.4s' }} />
                      <span className="text-muted-foreground text-sm ml-2">JARVIS processando...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>

        {/* Input Area */}
        <div className="p-6">
          <Card className="jarvis-panel p-4">
            <div className="flex items-center space-x-4">
              <div className="flex-1">
                <Input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Digite seu comando, senhor..."
                  className="bg-input/50 border-primary/30 text-foreground placeholder:text-muted-foreground"
                  disabled={isProcessing}
                />
              </div>
              <Button
                onClick={handleSendMessage}
                disabled={!input.trim() || isProcessing}
                className="bg-primary hover:bg-primary/80 text-primary-foreground jarvis-glow"
              >
                <Send className="w-4 h-4" />
              </Button>
              <Button
                variant="outline"
                className="border-primary/30 hover:bg-primary/10"
              >
                <Mic className="w-4 h-4" />
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};