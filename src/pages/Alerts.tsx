import React from 'react';
import { Bell, Mail, MessageSquare, Star } from 'lucide-react';
const Alerts = () => {
  return <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <Bell className="w-5 h-5 text-yellow-400" />
        <h2 className="text-xl font-bold text-white">
          Alertas de Oportunidade
        </h2>
      </div>
      <div className="flex items-center gap-2 mb-6">
        <span className="bg-yellow-600 text-yellow-200 text-xs px-2 py-1 rounded">
          Em Breve
        </span>
        <p className="text-gray-400">
          Seja notificado quando as condições ideais de compra forem atingidas
        </p>
      </div>
      <div className="bg-[#2d1a5a] rounded-lg p-6 mb-6">
        <div className="flex items-center gap-2 mb-4">
          <Star className="w-5 h-5 text-yellow-400" />
          <h3 className="text-lg font-medium text-white">
            Funcionalidade em Desenvolvimento
          </h3>
        </div>
        <p className="text-gray-400 mb-6">
          Estamos desenvolvendo um sistema de alertas inteligente que irá
          notificá-lo automaticamente quando os indicadores atingirem os
          thresholds que você definir.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-[#1e1145] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <Mail className="w-4 h-4 text-blue-400" />
              <h4 className="text-white">Alertas por Email</h4>
            </div>
            <p className="text-xs text-gray-400">
              Receba notificações detalhadas por email quando as condições de
              compra forem atingidas
            </p>
          </div>
          <div className="bg-[#1e1145] p-4 rounded-lg">
            <div className="flex items-center gap-2 mb-2">
              <MessageSquare className="w-4 h-4 text-green-400" />
              <h4 className="text-white">Alertas por WhatsApp</h4>
            </div>
            <p className="text-xs text-gray-400">
              Receba alertas instantâneos no seu WhatsApp para não perder
              oportunidades
            </p>
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h3 className="text-white font-medium">
          Cadastre-se para ser notificado quando lançarmos:
        </h3>
        <div>
          <label className="block text-gray-400 mb-2">
            Email para notificações
          </label>
          <input type="email" placeholder="seu@email.com" className="w-full bg-[#2d1a5a] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
        </div>
        <div>
          <label className="block text-gray-400 mb-2">
            WhatsApp (opcional)
          </label>
          <input type="tel" placeholder="+55 11 99999-9999" className="w-full bg-[#2d1a5a] text-white px-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" />
        </div>
        <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-3 rounded-md flex items-center justify-center gap-2 transition-colors">
          <Bell className="w-5 h-5" />
          Cadastrar para Alertas (Em Breve)
        </button>
        <p className="text-xs text-center text-gray-400">
          Esta funcionalidade estará disponível em breve. Cadastre-se para ser
          um dos primeiros a usar!
        </p>
      </div>
    </div>;
};
export default Alerts;