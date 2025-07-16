import React from 'react';
import { Gift, TrendingUp, Clock, CalendarClock, AlertCircle } from 'lucide-react';
import ReferralSystem from '../components/ReferralSystem';
const Referrals = () => {
  return <div className="space-y-6">
      <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg">
        <div className="flex items-center gap-3 mb-4">
          <div className="bg-purple-900/30 p-2 rounded-lg">
            <Gift className="w-6 h-6 text-purple-400" />
          </div>
          <div>
            <h2 className="text-xl font-bold text-white">
              Programa de Indicação
            </h2>
            <p className="text-gray-400">
              Indique amigos e ganhe meses grátis de assinatura Premium
            </p>
          </div>
        </div>
        {/* Feature Coming Soon Overlay */}
        <div className="bg-[#1e1145] border border-[#2d1a5a] rounded-lg p-8 shadow-lg">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-4 rounded-full mb-4 shadow-lg shadow-blue-900/30">
              <CalendarClock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">Em Breve</h2>
            <p className="text-gray-400 mb-6">
              O Programa de Indicação está em desenvolvimento e será lançado em
              breve.
            </p>
            <div className="bg-[#2d1a5a]/50 p-4 rounded-lg mb-6 w-full">
              <div className="flex items-start">
                <div className="bg-blue-900/30 p-2 rounded-lg mr-3">
                  <Gift className="w-5 h-5 text-blue-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-white mb-1">
                    Recursos Planejados
                  </h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-400" />
                      Compartilhe seu código de referência com amigos
                    </li>
                    <li className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-400" />
                      Seus amigos ganharão 30 dias de acesso Premium grátis
                    </li>
                    <li className="flex items-center gap-1">
                      <Clock className="w-3 h-3 text-blue-400" />
                      Para cada 3 amigos que assinarem, você ganhará 1 mês
                      grátis
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-4 w-full mb-6">
              <div className="flex items-center gap-3">
                <AlertCircle className="w-5 h-5 text-blue-300" />
                <p className="text-white text-sm">
                  Estamos trabalhando para lançar esta funcionalidade em breve.
                </p>
              </div>
            </div>
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-medium py-3 px-6 rounded-md transition-colors flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Receber Notificação de Lançamento
            </button>
            <p className="text-xs text-gray-400 mt-4">
              Cadastre-se para ser notificado quando o Programa de Indicação for
              lançado.
            </p>
          </div>
        </div>
      </div>
    </div>;
};
export default Referrals;