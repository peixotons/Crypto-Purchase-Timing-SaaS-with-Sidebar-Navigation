import React, { useState } from 'react';
import { ChevronRight, Crown, Sparkles, LineChart, Bell, Filter, Lock } from 'lucide-react';
interface PreviewFeature {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  image: string;
}
const PremiumFeaturesPreview = () => {
  const [activeFeature, setActiveFeature] = useState<string>('analyzer');
  const features: PreviewFeature[] = [{
    id: 'analyzer',
    title: 'Analisador de Thresholds',
    description: 'Configure valores limite personalizados para identificar os melhores momentos de compra baseados em indicadores históricos.',
    icon: <LineChart className="w-5 h-5 text-blue-400" />,
    image: 'https://images.unsplash.com/photo-1642790551116-18e150f248e5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }, {
    id: 'moments',
    title: 'Momentos de Compra',
    description: 'Visualize os momentos históricos ideais para compra de Bitcoin com base nos thresholds definidos e veja a performance de cada entrada.',
    icon: <Filter className="w-5 h-5 text-purple-400" />,
    image: 'https://images.unsplash.com/photo-1605792657660-596af9009e82?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }, {
    id: 'alerts',
    title: 'Alertas Personalizados',
    description: 'Receba notificações por email quando as condições ideais de compra forem atingidas, sem precisar monitorar o mercado constantemente.',
    icon: <Bell className="w-5 h-5 text-yellow-400" />,
    image: 'https://images.unsplash.com/photo-1621761191319-c6fb62004040?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80'
  }];
  const activeFeatureData = features.find(f => f.id === activeFeature);
  return <div className="bg-[#1e1145] rounded-lg overflow-hidden shadow-lg">
      <div className="p-6 border-b border-[#2d1a5a]">
        <div className="flex items-center gap-2">
          <Crown className="w-6 h-6 text-orange-500" />
          <h3 className="text-xl font-bold text-white">Recursos Premium</h3>
        </div>
        <p className="text-gray-400 mt-1">
          Conheça os recursos exclusivos disponíveis para assinantes Premium
        </p>
      </div>
      <div className="flex flex-col md:flex-row">
        {/* Feature selector sidebar */}
        <div className="w-full md:w-64 border-b md:border-b-0 md:border-r border-[#2d1a5a]">
          {features.map(feature => <button key={feature.id} onClick={() => setActiveFeature(feature.id)} className={`w-full text-left p-4 flex items-center gap-3 transition-colors ${activeFeature === feature.id ? 'bg-[#2d1a5a] border-l-4 border-orange-500' : 'hover:bg-[#2d1a5a]/50'}`}>
              {feature.icon}
              <div>
                <h4 className="text-white font-medium">{feature.title}</h4>
                <p className="text-gray-400 text-xs">Exclusivo Premium</p>
              </div>
              <ChevronRight className={`w-4 h-4 ml-auto text-gray-500 ${activeFeature === feature.id ? 'text-orange-500' : ''}`} />
            </button>)}
        </div>
        {/* Feature preview content */}
        <div className="flex-1 p-6">
          {activeFeatureData && <div className="space-y-4">
              <div className="flex items-center gap-2 mb-2">
                {activeFeatureData.icon}
                <h3 className="text-xl font-bold text-white">
                  {activeFeatureData.title}
                </h3>
              </div>
              <p className="text-gray-300">{activeFeatureData.description}</p>
              <div className="relative rounded-lg overflow-hidden group">
                <img src={activeFeatureData.image} alt={activeFeatureData.title} className="w-full h-64 object-cover rounded-lg" />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1e1145] to-transparent opacity-60"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#1e1145]/80 backdrop-blur-sm p-4 rounded-lg transform transition-transform group-hover:scale-105">
                    <div className="flex items-center gap-2">
                      <Lock className="w-5 h-5 text-orange-500" />
                      <span className="text-white font-medium">
                        Recurso Premium
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center pt-4">
                <div className="flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-yellow-400" />
                  <span className="text-white">Desbloqueie agora</span>
                </div>
                <button className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-2 px-4 rounded-md transition-colors flex items-center gap-2">
                  <Crown className="w-4 h-4" />
                  Assinar Premium
                </button>
              </div>
            </div>}
        </div>
      </div>
    </div>;
};
export default PremiumFeaturesPreview;