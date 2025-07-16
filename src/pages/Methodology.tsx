import React from 'react';
import { BarChart2, AlertTriangle } from 'lucide-react';
const Methodology = () => {
  // Calculate the date range dynamically
  const startDate = new Date(2020, 0, 1); // January 1, 2020
  const today = new Date();
  const formattedStartDate = startDate.toLocaleDateString('pt-BR');
  const formattedEndDate = today.toLocaleDateString('pt-BR');
  // Calculate days between dates
  const diffTime = Math.abs(today.getTime() - startDate.getTime());
  const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
  return <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-4">
        <BarChart2 className="w-5 h-5 text-purple-400" />
        <h2 className="text-xl font-bold text-white">Metodologia de Análise</h2>
      </div>
      <p className="text-gray-400 mb-6">
        Dados desde {formattedStartDate} até {formattedEndDate} • {diffDays}{' '}
        pontos de dados
      </p>
      <div className="space-y-6">
        <div>
          <h3 className="text-lg font-medium text-white mb-2">
            Mayer Multiple
          </h3>
          <p className="text-gray-400">
            O Mayer Multiple é calculado dividindo o preço atual do Bitcoin pela
            sua média móvel de 200 dias. Valores abaixo de 1.0 historicamente
            indicam que o Bitcoin está sendo negociado abaixo de sua tendência
            de longo prazo, sugerindo uma oportunidade de compra.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-2">
            Fear and Greed Index
          </h3>
          <p className="text-gray-400">
            O índice varia de 0 (medo extremo) a 100 (ganância extrema) e
            combina diversos fatores como volatilidade, volume de negociação,
            mídia social e pesquisas de mercado para medir o sentimento geral do
            mercado. Valores baixos indicam oportunidades de compra quando o
            mercado está pessimista.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-2">
            Estratégia de Análise Dinâmica
          </h3>
          <p className="text-gray-400">
            Esta ferramenta permite definir thresholds personalizados para
            identificar momentos históricos em que as condições de mercado
            atenderam aos critérios especificados. A análise calcula a
            performance de cada momento de compra até o presente, fornecendo
            estatísticas detalhadas sobre a eficácia da estratégia.
          </p>
        </div>
        <div>
          <h3 className="text-lg font-medium text-white mb-2">
            Dados Analisados
          </h3>
          <ul className="text-gray-400 list-disc pl-5 space-y-1">
            <li>Dados de preços históricos de Bitcoin</li>
            <li>Indicadores de sentimento de mercado</li>
            <li>
              Período: {formattedStartDate} a {formattedEndDate} ({diffDays}{' '}
              dias de dados)
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-8 p-4 border border-yellow-600 bg-yellow-900/20 rounded-lg">
        <div className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-yellow-400" />
          <p className="text-yellow-400">
            Este site não constitui aconselhamento financeiro.
          </p>
        </div>
      </div>
    </div>;
};
export default Methodology;