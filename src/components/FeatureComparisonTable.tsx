import React from 'react';
import { Check, X, HelpCircle, Crown } from 'lucide-react';
interface Feature {
  name: string;
  description: string;
  free: boolean | string;
  pro: boolean | string;
  premium: boolean | string;
  highlight?: boolean;
}
const FeatureComparisonTable = () => {
  const features: Feature[] = [{
    name: 'Dashboard Básico',
    description: 'Visualização do preço atual do Bitcoin e indicadores básicos',
    free: true,
    pro: true,
    premium: true
  }, {
    name: 'Atualização de Dados',
    description: 'Frequência de atualização dos dados',
    free: 'A cada 30 minutos',
    pro: 'A cada 5 minutos',
    premium: 'Em tempo real',
    highlight: true
  }, {
    name: 'Analisador de Thresholds',
    description: 'Configure valores limite para identificar sinais de compra históricos',
    free: false,
    pro: true,
    premium: true,
    highlight: true
  }, {
    name: 'Momentos de Compra',
    description: 'Identificação de momentos ideais para comprar Bitcoin',
    free: false,
    pro: true,
    premium: true,
    highlight: true
  }, {
    name: 'Alertas Personalizados',
    description: 'Receba notificações quando condições específicas forem atendidas',
    free: false,
    pro: true,
    premium: true
  }, {
    name: 'Alertas por Email',
    description: 'Receba alertas diretamente em seu email',
    free: false,
    pro: '1 por dia',
    premium: 'Ilimitados'
  }, {
    name: 'Alertas por WhatsApp',
    description: 'Receba alertas instantâneos no WhatsApp',
    free: false,
    pro: false,
    premium: true
  }, {
    name: 'Histórico de Dados',
    description: 'Acesso ao histórico completo de dados',
    free: '30 dias',
    pro: 'Ilimitado',
    premium: 'Ilimitado'
  }, {
    name: 'Suporte Técnico',
    description: 'Acesso ao suporte técnico',
    free: 'Email (24h)',
    pro: 'Email e Chat (6h)',
    premium: 'Email e Chat (1h)'
  }, {
    name: 'API para Integração',
    description: 'Integre com outras plataformas',
    free: false,
    pro: false,
    premium: true
  }];
  return <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr>
            <th className="text-left p-4 bg-[#2d1a5a] rounded-tl-lg">
              <span className="text-white font-bold">Recursos</span>
            </th>
            <th className="p-4 bg-[#2d1a5a] w-[120px]">
              <span className="text-white font-bold">Básico</span>
              <div className="text-gray-400 text-xs mt-1">Grátis</div>
            </th>
            <th className="p-4 bg-gradient-to-r from-orange-600 to-red-600 w-[120px]">
              <div className="flex items-center justify-center gap-1">
                <Crown className="w-4 h-4 text-white" />
                <span className="text-white font-bold">Pro</span>
              </div>
              <div className="text-white/80 text-xs mt-1">R$ 29,90/mês</div>
            </th>
            <th className="p-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-tr-lg w-[120px]">
              <div className="flex items-center justify-center gap-1">
                <Crown className="w-4 h-4 text-white" />
                <span className="text-white font-bold">Premium</span>
              </div>
              <div className="text-white/80 text-xs mt-1">R$ 79,90/mês</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {features.map((feature, index) => <tr key={index} className={`border-b border-[#2d1a5a] ${feature.highlight ? 'bg-[#2d1a5a]/30' : ''}`}>
              <td className="p-4">
                <div className="flex items-start gap-2">
                  <div>
                    <div className="text-white font-medium">{feature.name}</div>
                    <div className="text-gray-400 text-sm">
                      {feature.description}
                    </div>
                  </div>
                </div>
              </td>
              <td className="p-4 text-center">
                {typeof feature.free === 'boolean' ? feature.free ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-500 mx-auto" /> : <span className="text-gray-300 text-sm">{feature.free}</span>}
              </td>
              <td className="p-4 text-center">
                {typeof feature.pro === 'boolean' ? feature.pro ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-500 mx-auto" /> : <span className="text-white text-sm">{feature.pro}</span>}
              </td>
              <td className="p-4 text-center">
                {typeof feature.premium === 'boolean' ? feature.premium ? <Check className="w-5 h-5 text-green-500 mx-auto" /> : <X className="w-5 h-5 text-gray-500 mx-auto" /> : <span className="text-white text-sm">{feature.premium}</span>}
              </td>
            </tr>)}
        </tbody>
        <tfoot>
          <tr>
            <td className="p-4 rounded-bl-lg bg-[#1e1145]"></td>
            <td className="p-4 bg-[#1e1145]">
              <button className="w-full py-2 px-4 bg-[#2d1a5a] hover:bg-[#3d2a6a] text-white font-medium rounded-md transition-colors text-sm">
                Plano Atual
              </button>
            </td>
            <td className="p-4 bg-[#1e1145]">
              <button className="w-full py-2 px-4 bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium rounded-md transition-colors text-sm">
                Assinar Pro
              </button>
            </td>
            <td className="p-4 rounded-br-lg bg-[#1e1145]">
              <button className="w-full py-2 px-4 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium rounded-md transition-colors text-sm">
                Assinar Premium
              </button>
            </td>
          </tr>
        </tfoot>
      </table>
    </div>;
};
export default FeatureComparisonTable;