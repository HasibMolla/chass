import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getFarmingAdvice } from '../services/geminiService';
import { Send, User, Bot, AlertTriangle } from 'lucide-react';

interface Message {
  id: number;
  text: string;
  sender: 'user' | 'bot';
}

const Advisory = () => {
  const { t, language } = useLanguage();
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: 1, text: language === 'bn' ? "নমস্কার! আমি চাষাবাদ এআই। আপনার ফসল বা কৃষি বিষয়ক যেকোনো প্রশ্ন করতে পারেন।" : "Hello! I am Chasabbad AI. Ask me anything about your crops or farming.", sender: 'bot' }
  ]);
  const [loading, setLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(scrollToBottom, [messages]);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg: Message = { id: Date.now(), text: input, sender: 'user' };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setLoading(true);

    try {
      const response = await getFarmingAdvice(userMsg.text, language);
      const botMsg: Message = { 
        id: Date.now() + 1, 
        text: response || (language === 'bn' ? "দুঃখিত, আমি বুঝতে পারিনি।" : "Sorry, I couldn't understand."), 
        sender: 'bot' 
      };
      setMessages(prev => [...prev, botMsg]);
    } catch (error) {
      setMessages(prev => [...prev, { id: Date.now() + 1, text: t('error'), sender: 'bot' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col h-[calc(100vh-140px)] md:h-[calc(100vh-100px)]">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">{t('askAdvisor')}</h2>
      
      {/* Warning Banner */}
      <div className="bg-yellow-50 p-2 rounded-lg mb-2 text-xs text-yellow-800 flex items-center border border-yellow-200">
        <AlertTriangle size={14} className="mr-2" />
        AI advice is experimental. Consult a local agriculture officer for critical decisions.
      </div>

      <div className="flex-1 overflow-y-auto bg-white rounded-xl shadow-sm border border-gray-200 p-4 space-y-4">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex items-start max-w-[80%] ${msg.sender === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${msg.sender === 'user' ? 'bg-primary ml-2' : 'bg-secondary mr-2'}`}>
                {msg.sender === 'user' ? <User size={16} className="text-white" /> : <Bot size={16} className="text-white" />}
              </div>
              <div className={`p-3 rounded-2xl text-sm ${msg.sender === 'user' ? 'bg-primary text-white rounded-tr-none' : 'bg-gray-100 text-gray-800 rounded-tl-none'}`}>
                {msg.text}
              </div>
            </div>
          </div>
        ))}
        {loading && (
          <div className="flex justify-start">
            <div className="bg-gray-100 p-3 rounded-2xl rounded-tl-none text-sm text-gray-500 animate-pulse">
              Typing...
            </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <div className="mt-4 flex space-x-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          placeholder={t('advisorPlaceholder')}
          className="flex-1 p-3 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-primary shadow-sm"
        />
        <button
          onClick={handleSend}
          disabled={loading || !input.trim()}
          className="bg-primary text-white p-3 rounded-full hover:bg-emerald-700 disabled:opacity-50 transition-colors shadow-sm"
        >
          <Send size={20} />
        </button>
      </div>
    </div>
  );
};

export default Advisory;