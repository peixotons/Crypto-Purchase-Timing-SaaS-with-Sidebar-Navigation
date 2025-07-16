import React, { useState } from 'react';
import { User, Mail, Shield, CreditCard, Bell, Edit, Save, ArrowLeft, Crown } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
const ProfilePage = ({
  isPremium = false,
  setIsPremium = (val: boolean) => {}
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [userData, setUserData] = useState({
    name: 'John Doe',
    email: 'john.doe@example.com',
    phone: '+55 11 98765-4321',
    notifications: {
      priceAlerts: true,
      weeklyReport: true,
      marketNews: false
    }
  });
  const [formData, setFormData] = useState({
    ...userData
  });
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {
      name,
      value,
      type,
      checked
    } = e.target;
    if (type === 'checkbox') {
      setFormData({
        ...formData,
        notifications: {
          ...formData.notifications,
          [name]: checked
        }
      });
    } else {
      setFormData({
        ...formData,
        [name]: value
      });
    }
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setUserData(formData);
    setIsEditing(false);
  };
  const subscriptionDetails = {
    plan: isPremium ? 'Pro' : 'Básico',
    price: isPremium ? 'R$ 29,90/mês' : 'Grátis',
    startDate: '15/01/2025',
    nextBilling: isPremium ? '15/02/2025' : '-',
    status: 'Ativo'
  };
  return <div className="bg-[#1e1145] rounded-lg shadow-lg">
      <div className="p-6 border-b border-[#2d1a5a]">
        <div className="flex items-center gap-3">
          <a href="/" className="text-gray-400 hover:text-white transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </a>
          <h2 className="text-xl font-bold text-white">Meu Perfil</h2>
        </div>
      </div>
      <div className="p-6">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left column: User info */}
          <div className="flex-1">
            <div className="flex items-center gap-4 mb-6">
              <div className="bg-purple-700 rounded-full w-16 h-16 flex items-center justify-center text-2xl font-bold text-white">
                {userData.name.split(' ').map(n => n[0]).join('')}
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">
                  {userData.name}
                </h3>
                <div className="flex items-center mt-1">
                  <span className={`text-xs px-2 py-0.5 rounded ${isPremium ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
                    {isPremium ? 'Premium' : 'Free'}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-[#2d1a5a]/50 rounded-lg p-5 mb-6">
              <div className="flex justify-between items-center mb-4">
                <h4 className="text-white font-medium flex items-center gap-2">
                  <User className="w-4 h-4 text-purple-400" />
                  Informações Pessoais
                </h4>
                {!isEditing ? <button onClick={() => setIsEditing(true)} className="text-purple-400 hover:text-purple-300 flex items-center gap-1 text-sm">
                    <Edit className="w-4 h-4" />
                    Editar
                  </button> : <button onClick={handleSubmit} className="text-green-400 hover:text-green-300 flex items-center gap-1 text-sm">
                    <Save className="w-4 h-4" />
                    Salvar
                  </button>}
              </div>
              {isEditing ? <form onSubmit={handleSubmit}>
                  <div className="space-y-4">
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Nome
                      </label>
                      <input type="text" name="name" value={formData.name} onChange={handleInputChange} className="w-full bg-[#1e1145] border border-[#3d2a6a] text-white px-3 py-2 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Email
                      </label>
                      <input type="email" name="email" value={formData.email} onChange={handleInputChange} className="w-full bg-[#1e1145] border border-[#3d2a6a] text-white px-3 py-2 rounded-md" />
                    </div>
                    <div>
                      <label className="block text-gray-400 text-sm mb-1">
                        Telefone
                      </label>
                      <input type="text" name="phone" value={formData.phone} onChange={handleInputChange} className="w-full bg-[#1e1145] border border-[#3d2a6a] text-white px-3 py-2 rounded-md" />
                    </div>
                  </div>
                </form> : <div className="space-y-3">
                  <div>
                    <p className="text-gray-400 text-sm">Nome</p>
                    <p className="text-white">{userData.name}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Email</p>
                    <p className="text-white">{userData.email}</p>
                  </div>
                  <div>
                    <p className="text-gray-400 text-sm">Telefone</p>
                    <p className="text-white">{userData.phone}</p>
                  </div>
                </div>}
            </div>
            <div className="bg-[#2d1a5a]/50 rounded-lg p-5">
              <h4 className="text-white font-medium flex items-center gap-2 mb-4">
                <Bell className="w-4 h-4 text-purple-400" />
                Preferências de Notificação
              </h4>
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <label className="text-gray-300">Alertas de preço</label>
                  <input type="checkbox" name="priceAlerts" checked={isEditing ? formData.notifications.priceAlerts : userData.notifications.priceAlerts} onChange={handleInputChange} disabled={!isEditing} className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-700 rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-gray-300">Relatório semanal</label>
                  <input type="checkbox" name="weeklyReport" checked={isEditing ? formData.notifications.weeklyReport : userData.notifications.weeklyReport} onChange={handleInputChange} disabled={!isEditing} className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-700 rounded" />
                </div>
                <div className="flex items-center justify-between">
                  <label className="text-gray-300">Notícias do mercado</label>
                  <input type="checkbox" name="marketNews" checked={isEditing ? formData.notifications.marketNews : userData.notifications.marketNews} onChange={handleInputChange} disabled={!isEditing} className="h-4 w-4 text-orange-600 focus:ring-orange-500 border-gray-700 rounded" />
                </div>
              </div>
            </div>
          </div>
          {/* Right column: Subscription info */}
          <div className="flex-1">
            <div className="bg-[#2d1a5a]/50 rounded-lg p-5 mb-6">
              <h4 className="text-white font-medium flex items-center gap-2 mb-4">
                <Crown className="w-4 h-4 text-orange-500" />
                Detalhes da Assinatura
              </h4>
              <div className="space-y-3 mb-4">
                <div className="flex justify-between">
                  <span className="text-gray-400">Plano atual:</span>
                  <span className={`font-medium ${isPremium ? 'text-orange-500' : 'text-gray-300'}`}>
                    {subscriptionDetails.plan}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Preço:</span>
                  <span className="text-white">
                    {subscriptionDetails.price}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Data de início:</span>
                  <span className="text-white">
                    {subscriptionDetails.startDate}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Próxima cobrança:</span>
                  <span className="text-white">
                    {subscriptionDetails.nextBilling}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-400">Status:</span>
                  <span className="text-green-400">
                    {subscriptionDetails.status}
                  </span>
                </div>
              </div>
              {isPremium ? <div className="space-y-3">
                  <button onClick={() => setIsPremium(false)} className="w-full bg-[#1e1145] border border-[#3d2a6a] text-white font-medium py-2 rounded-md hover:bg-[#2d1a5a] transition-colors">
                    Cancelar Assinatura
                  </button>
                  <button className="w-full bg-[#1e1145] border border-[#3d2a6a] text-white font-medium py-2 rounded-md hover:bg-[#2d1a6a] transition-colors">
                    Alterar Forma de Pagamento
                  </button>
                </div> : <button onClick={() => setIsPremium(true)} className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-2 rounded-md transition-colors flex items-center justify-center gap-2">
                  <Crown className="w-4 h-4" />
                  Upgrade para Premium
                </button>}
            </div>
            <div className="bg-[#2d1a5a]/50 rounded-lg p-5">
              <h4 className="text-white font-medium flex items-center gap-2 mb-4">
                <CreditCard className="w-4 h-4 text-purple-400" />
                Histórico de Pagamentos
              </h4>
              {isPremium ? <div className="space-y-3">
                  <div className="flex justify-between items-center p-3 bg-[#1e1145] rounded-md">
                    <div>
                      <p className="text-white">15/01/2025</p>
                      <p className="text-gray-400 text-sm">
                        Plano Pro - Mensal
                      </p>
                    </div>
                    <span className="text-white font-medium">R$ 29,90</span>
                  </div>
                  <div className="flex justify-between items-center p-3 bg-[#1e1145] rounded-md">
                    <div>
                      <p className="text-white">15/12/2024</p>
                      <p className="text-gray-400 text-sm">
                        Plano Pro - Mensal
                      </p>
                    </div>
                    <span className="text-white font-medium">R$ 29,90</span>
                  </div>
                </div> : <div className="text-center py-4">
                  <p className="text-gray-400">Nenhum pagamento realizado</p>
                </div>}
            </div>
          </div>
        </div>
      </div>
    </div>;
};
export default ProfilePage;