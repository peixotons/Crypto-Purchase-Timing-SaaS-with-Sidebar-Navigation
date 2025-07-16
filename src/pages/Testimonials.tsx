import React from 'react';
import { Star, TrendingUp, Award } from 'lucide-react';
interface TestimonialProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  profit?: string;
  image: string;
}
const TestimonialCard = ({
  name,
  role,
  content,
  rating,
  profit,
  image
}: TestimonialProps) => {
  return <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg flex flex-col">
      <div className="flex items-center mb-4">
        <div className="mr-4">
          <img src={image} alt={name} className="w-14 h-14 rounded-full object-cover border-2 border-orange-500" />
        </div>
        <div>
          <h3 className="text-white font-bold">{name}</h3>
          <p className="text-gray-400 text-sm">{role}</p>
        </div>
      </div>
      <div className="mb-4 flex">
        {[...Array(5)].map((_, i) => <Star key={i} className={`w-4 h-4 ${i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-500'}`} />)}
      </div>
      <p className="text-gray-300 mb-4 flex-grow">{content}</p>
      {profit && <div className="bg-green-900/20 border border-green-700 rounded-md p-3 flex items-center mt-2">
          <TrendingUp className="text-green-500 w-5 h-5 mr-2" />
          <span className="text-green-400 font-medium">{profit}</span>
        </div>}
    </div>;
};
const SuccessMetric = ({
  icon,
  title,
  value,
  description
}: any) => {
  return <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg">
      <div className="flex items-center mb-3">
        {icon}
        <h3 className="text-white font-bold ml-2">{title}</h3>
      </div>
      <div className="text-3xl font-bold text-white mb-2">{value}</div>
      <p className="text-gray-400 text-sm">{description}</p>
    </div>;
};
const Testimonials = () => {
  const testimonials = [{
    name: 'Carlos Silva',
    role: 'Investidor desde 2019',
    content: 'Depois de usar o Bitcoin Today por 6 meses, consegui identificar os melhores momentos para comprar. Os indicadores são precisos e as notificações são extremamente úteis.',
    rating: 5,
    profit: '+127% de lucro em 8 meses',
    image: 'https://images.unsplash.com/photo-1564564321837-a57b7070ac4f?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }, {
    name: 'Ana Ferreira',
    role: 'Trader de criptomoedas',
    content: 'O Bitcoin Today me ajudou a entender melhor os ciclos de mercado do Bitcoin. As análises baseadas no Mayer Multiple e no Fear & Greed Index são incrivelmente precisas.',
    rating: 5,
    profit: '+89% de lucro em 5 meses',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }, {
    name: 'Roberto Mendes',
    role: 'Investidor institucional',
    content: 'Como gestor de um pequeno fundo, preciso de dados confiáveis para tomar decisões. O Bitcoin Today se tornou uma ferramenta essencial no meu arsenal de análise.',
    rating: 4,
    profit: '+215% de lucro em 14 meses',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }, {
    name: 'Juliana Costa',
    role: 'Investidora iniciante',
    content: 'Comecei a investir em Bitcoin há apenas 3 meses, mas com a ajuda do Bitcoin Today consegui evitar comprar nos topos e aproveitar as quedas para acumular.',
    rating: 5,
    profit: '+42% de lucro em 3 meses',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }, {
    name: 'Marcelo Alves',
    role: 'Analista de criptomoedas',
    content: 'Recomendo o Bitcoin Today para todos os meus clientes. A plataforma simplifica dados complexos e torna a análise acessível para qualquer nível de conhecimento.',
    rating: 5,
    profit: '+156% de lucro em 11 meses',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }, {
    name: 'Patricia Gomes',
    role: 'Investidora de longo prazo',
    content: 'Estou usando o Bitcoin Today para construir minha reserva de Bitcoin. Os alertas me ajudam a comprar nos melhores momentos sem precisar ficar monitorando o mercado.',
    rating: 4,
    profit: '+78% de lucro em 7 meses',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80'
  }];
  return <div className="space-y-8">
      <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg text-center">
        <h2 className="text-2xl font-bold text-white mb-3">
          Histórias de Sucesso
        </h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Veja como nossos usuários estão aproveitando o Bitcoin Today para
          tomar decisões inteligentes de investimento e maximizar seus retornos.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <SuccessMetric icon={<Award className="w-6 h-6 text-orange-500" />} title="Retorno Médio" value="104%" description="Retorno médio dos usuários que seguiram nossos sinais nos últimos 12 meses" />
        <SuccessMetric icon={<Star className="w-6 h-6 text-yellow-400" />} title="Satisfação" value="97%" description="Taxa de satisfação dos usuários com nossos indicadores e alertas" />
        <SuccessMetric icon={<TrendingUp className="w-6 h-6 text-green-500" />} title="Sinais Precisos" value="89%" description="Taxa de precisão dos sinais de compra nos últimos 24 meses" />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial, index) => <TestimonialCard key={index} {...testimonial} />)}
      </div>
      <div className="bg-gradient-to-br from-purple-900 to-blue-900 rounded-lg p-6 shadow-lg text-center">
        <h3 className="text-xl font-bold text-white mb-3">
          Resultados Comprovados
        </h3>
        <p className="text-gray-200 mb-6">
          Nossos usuários consistentemente superam o mercado seguindo os sinais
          do Bitcoin Today. Junte-se a eles e comece a maximizar seus resultados
          hoje mesmo.
        </p>
        <button className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors">
          Comece Agora
        </button>
      </div>
    </div>;
};
export default Testimonials;