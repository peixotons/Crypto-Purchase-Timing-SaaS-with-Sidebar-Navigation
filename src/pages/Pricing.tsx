import React from 'react';
import { Check, Zap, Shield, Star, Crown } from 'lucide-react';
import FeatureComparisonTable from '../components/FeatureComparisonTable';
interface PricingTierProps {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  buttonText?: string;
  onSubscribe?: () => void;
  isCurrentPlan?: boolean;
}
const PricingTier = ({
  name,
  price,
  description,
  features,
  highlighted = false,
  buttonText = 'Assinar Agora',
  onSubscribe,
  isCurrentPlan = false
}: PricingTierProps) => {
  return <div className={`rounded-lg p-6 ${highlighted ? 'bg-gradient-to-br from-purple-900 to-blue-900 border-2 border-blue-400' : 'bg-[#1e1145]'}`}>
      <div className="mb-4">
        {highlighted && <span className="bg-blue-600 text-white text-xs px-2 py-1 rounded-full uppercase font-medium mb-2 inline-block">
            Mais Popular
          </span>}
        <h3 className="text-xl font-bold text-white">{name}</h3>
        <div className="mt-2">
          <span className="text-3xl font-bold text-white">{price}</span>
          {price !== 'Grátis' && <span className="text-gray-400">/mês</span>}
        </div>
        <p className="text-gray-400 mt-2">{description}</p>
      </div>
      <div className="space-y-3 mb-6">
        {features.map((feature, index) => <div key={index} className="flex items-start">
            <Check className="w-5 h-5 text-green-400 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-gray-300">{feature}</span>
          </div>)}
      </div>
      <button onClick={onSubscribe} disabled={isCurrentPlan} className={`w-full py-3 rounded-md font-medium transition-colors ${isCurrentPlan ? 'bg-green-700 text-white cursor-default flex items-center justify-center gap-2' : highlighted ? 'bg-blue-600 hover:bg-blue-700 text-white' : 'bg-[#2d1a5a] hover:bg-[#3d2a6a] text-white'}`}>
        {isCurrentPlan ? <>
            <Crown className="h-5 w-5" />
            Plano Atual
          </> : buttonText}
      </button>
    </div>;
};
interface PricingProps {
  isPremium?: boolean;
  setIsPremium?: (value: boolean) => void;
}
const Pricing = ({
  isPremium = false,
  setIsPremium
}: PricingProps) => {
  const handleSubscribe = (planName: string) => {
    if (planName === 'Pro' || planName === 'Premium') {
      if (setIsPremium) setIsPremium(true);
      alert(`Parabéns! Você assinou o plano ${planName} com sucesso!`);
    }
  };
  const pricingTiers = [{
    name: 'Básico',
    price: 'Grátis',
    description: 'Para investidores iniciantes',
    features: ['Acesso ao dashboard principal', 'Indicadores em tempo real', 'Atualização a cada 30 minutos', 'Sem análise histórica'],
    isCurrentPlan: isPremium ? false : true,
    onSubscribe: () => handleSubscribe('Básico')
  }, {
    name: 'Pro',
    price: 'R$ 29,90',
    description: 'Para investidores ativos',
    features: ['Todos os recursos do plano Básico', 'Análise histórica completa', 'Configuração de thresholds personalizados', '1 alerta por email por dia', 'Atualização a cada 5 minutos'],
    highlighted: true,
    isCurrentPlan: isPremium,
    onSubscribe: () => handleSubscribe('Pro')
  }, {
    name: 'Premium',
    price: 'R$ 79,90',
    description: 'Para investidores profissionais',
    features: ['Todos os recursos do plano Pro', 'Alertas ilimitados por email e WhatsApp', 'API para integração com outras plataformas', 'Suporte prioritário', 'Atualização em tempo real'],
    isCurrentPlan: false,
    onSubscribe: () => handleSubscribe('Premium')
  }];
  return <div className="space-y-8">
      <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          Planos de Assinatura
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Escolha o plano que melhor atende às suas necessidades de investimento
          em Bitcoin. Cancele a qualquer momento sem compromisso.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {pricingTiers.map((tier, index) => <PricingTier key={index} {...tier} />)}
      </div>
      <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold text-white mb-6">
          Comparação de Recursos
        </h3>
        <FeatureComparisonTable />
      </div>
      <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg">
        <h3 className="text-xl font-bold text-white mb-4">
          Por que assinar o Bitcoin Today?
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex items-start">
            <div className="bg-blue-900/30 p-2 rounded-lg mr-3">
              <Zap className="w-6 h-6 text-blue-400" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">
                Decisões Inteligentes
              </h4>
              <p className="text-gray-400 text-sm">
                Tome decisões baseadas em dados e indicadores técnicos
                comprovados.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-purple-900/30 p-2 rounded-lg mr-3">
              <Shield className="w-6 h-6 text-purple-400" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">Redução de Riscos</h4>
              <p className="text-gray-400 text-sm">
                Minimize riscos ao comprar Bitcoin nos momentos estatisticamente
                mais favoráveis.
              </p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="bg-orange-900/30 p-2 rounded-lg mr-3">
              <Star className="w-6 h-6 text-orange-400" />
            </div>
            <div>
              <h4 className="font-medium text-white mb-1">
                Resultados Superiores
              </h4>
              <p className="text-gray-400 text-sm">
                Histórico de performance superior comparado a estratégias de
                compra regulares.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-r from-blue-900 to-purple-900 rounded-lg p-6 shadow-lg text-center">
          <h3 className="text-xl font-bold text-white mb-2">
            Satisfação Garantida
          </h3>
          <p className="text-gray-300 mb-4">
            Se você não estiver satisfeito com o serviço, devolvemos seu
            dinheiro.
          </p>
          <button className="bg-white text-purple-900 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors">
            Experimente sem Compromisso
          </button>
        </div>
        <div className="bg-gradient-to-r from-orange-900 to-red-900 rounded-lg p-6 shadow-lg text-center">
          <h3 className="text-xl font-bold text-white mb-2">Assine Agora</h3>
          <p className="text-gray-300 mb-4">
            Acesso imediato a todos os recursos premium para melhorar seus
            investimentos.
          </p>
          <button className="bg-white text-red-900 hover:bg-gray-100 font-medium py-3 px-6 rounded-md transition-colors flex items-center justify-center gap-2 mx-auto">
            <Crown className="w-5 h-5" />
            Começar Agora
          </button>
        </div>
      </div>
    </div>;
};
export default Pricing;