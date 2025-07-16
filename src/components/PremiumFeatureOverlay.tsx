import React, { useState } from 'react';
import { Lock, Crown, Check, ArrowRight } from 'lucide-react';
interface PremiumFeatureOverlayProps {
  children: React.ReactNode;
  featureName: string;
  isLoggedIn: boolean;
}
const PremiumFeatureOverlay = ({
  children,
  featureName,
  isLoggedIn
}: PremiumFeatureOverlayProps) => {
  const [showDetails, setShowDetails] = useState(false);
  return <div className="relative w-full h-full min-h-[500px]">
      {/* Blurred content behind */}
      <div className="filter blur-sm pointer-events-none">{children}</div>
      {/* Premium overlay */}
      <div className="absolute inset-0 flex items-center justify-center p-4">
        <div className="bg-[#1e1145] border border-[#2d1a5a] rounded-lg p-6 md:p-8 max-w-md w-full shadow-xl animate-fade-in">
          <div className="flex flex-col items-center text-center">
            <div className="bg-gradient-to-r from-orange-600 to-red-600 p-4 rounded-full mb-4 shadow-lg shadow-orange-900/30">
              <Lock className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-2xl font-bold text-white mb-2">
              Recurso Premium
            </h2>
            <p className="text-gray-400 mb-6">
              O recurso{' '}
              <span className="text-orange-500 font-medium">{featureName}</span>{' '}
              está disponível apenas para assinantes do plano Premium.
            </p>
            <div className="bg-[#2d1a5a]/50 p-4 rounded-lg mb-6 w-full">
              <div className="flex items-start">
                <div className="bg-orange-900/30 p-2 rounded-lg mr-3">
                  <Crown className="w-5 h-5 text-orange-500" />
                </div>
                <div className="text-left">
                  <h4 className="font-medium text-white mb-1">
                    Benefícios Premium
                  </h4>
                  <ul className="text-gray-400 text-sm space-y-1">
                    <li className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-400" />
                      Acesso ao Analisador de Thresholds
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-400" />
                      Identificação de Momentos de Compra
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-400" />
                      Alertas personalizados
                    </li>
                    <li className="flex items-center gap-1">
                      <Check className="w-3 h-3 text-green-400" />
                      Atualização de dados a cada 5 minutos
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            {isLoggedIn ? <div className="space-y-3 w-full">
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-3 rounded-md flex items-center justify-center gap-2 transition-colors shadow-lg shadow-orange-900/20">
                  <Crown className="w-5 h-5" />
                  Assinar Plano Premium
                </button>
                <button onClick={() => setShowDetails(!showDetails)} className="text-purple-400 hover:text-purple-300 text-sm flex items-center justify-center gap-1 w-full mt-2">
                  {showDetails ? 'Esconder detalhes' : 'Ver detalhes do plano'}
                  <ArrowRight className={`w-3 h-3 transition-transform ${showDetails ? 'rotate-90' : ''}`} />
                </button>
                {showDetails && <div className="mt-4 bg-[#2d1a5a]/30 p-4 rounded-lg text-left animate-fade-in">
                    <h5 className="text-white font-medium mb-2">
                      Plano Premium inclui:
                    </h5>
                    <div className="space-y-2 text-sm">
                      <div className="flex justify-between">
                        <span className="text-gray-400">Preço:</span>
                        <span className="text-white">R$ 29,90/mês</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Período:</span>
                        <span className="text-white">
                          Mensal (cancele a qualquer momento)
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-400">Garantia:</span>
                        <span className="text-white">
                          7 dias de garantia de devolução
                        </span>
                      </div>
                    </div>
                  </div>}
              </div> : <div className="space-y-3 w-full">
                <button className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-3 rounded-md transition-colors shadow-lg shadow-orange-900/20">
                  Entrar na sua conta
                </button>
                <button className="w-full bg-[#2d1a5a] hover:bg-[#3d2a6a] text-white font-medium py-3 rounded-md transition-colors">
                  Criar uma conta
                </button>
              </div>}
          </div>
        </div>
      </div>
    </div>;
};
export default PremiumFeatureOverlay;