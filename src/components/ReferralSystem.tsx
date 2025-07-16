import React, { useState, Component } from 'react';
import { Share2, Copy, Check, Twitter, Mail, Facebook, Users, Crown } from 'lucide-react';
interface ReferralSystemProps {
  referralCode: string;
  referralUrl: string;
  referralCount?: number;
  rewardsEarned?: number;
}
const ReferralSystem = ({
  referralCode,
  referralUrl,
  referralCount = 0,
  rewardsEarned = 0
}: ReferralSystemProps) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => {
    navigator.clipboard.writeText(referralUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  const shareViaTwitter = () => {
    const text = `Estou usando o Bitcoin Today para identificar os melhores momentos para comprar Bitcoin. Use meu código de referência e ganhe 30 dias grátis: ${referralCode}`;
    const url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(referralUrl)}`;
    window.open(url, '_blank');
  };
  const shareViaFacebook = () => {
    const url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(referralUrl)}`;
    window.open(url, '_blank');
  };
  const shareViaEmail = () => {
    const subject = 'Convite para o Bitcoin Today';
    const body = `Olá,\n\nEstou usando o Bitcoin Today para identificar os melhores momentos para comprar Bitcoin.\n\nUse meu código de referência e ganhe 30 dias grátis: ${referralCode}\n\nAcesse: ${referralUrl}\n\nAbraços!`;
    const mailtoUrl = `mailto:?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoUrl;
  };
  return <div className="bg-[#1e1145] rounded-lg p-6 shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <div className="bg-purple-900/30 p-2 rounded-lg">
          <Share2 className="w-6 h-6 text-purple-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">
            Programa de Referência
          </h3>
          <p className="text-gray-400">
            Convide amigos e ganhe benefícios exclusivos
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div className="bg-[#2d1a5a]/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Users className="w-5 h-5 text-blue-400" />
            <h4 className="text-white font-medium">Amigos Convidados</h4>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {referralCount}
          </div>
          <p className="text-gray-400 text-sm">
            Cada amigo que se inscrever usando seu código ganha 30 dias de
            acesso Premium gratuitamente.
          </p>
        </div>
        <div className="bg-[#2d1a5a]/50 rounded-lg p-4">
          <div className="flex items-center gap-2 mb-3">
            <Crown className="w-5 h-5 text-orange-400" />
            <h4 className="text-white font-medium">Suas Recompensas</h4>
          </div>
          <div className="text-3xl font-bold text-white mb-1">
            {rewardsEarned} {rewardsEarned === 1 ? 'mês' : 'meses'}
          </div>
          <p className="text-gray-400 text-sm">
            Para cada 3 amigos que assinarem o plano Premium, você ganha 1 mês
            grátis.
          </p>
        </div>
      </div>
      <div className="bg-[#2d1a5a]/50 rounded-lg p-4 mb-6">
        <h4 className="text-white font-medium mb-3">
          Seu código de referência
        </h4>
        <div className="flex items-center gap-2">
          <div className="bg-[#1e1145] border border-[#3d2a6a] rounded-md px-4 py-3 flex-1 text-center">
            <span className="text-white font-mono font-bold tracking-wider">
              {referralCode}
            </span>
          </div>
          <button onClick={handleCopy} className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-md transition-colors">
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div className="mb-6">
        <h4 className="text-white font-medium mb-3">Compartilhe seu link</h4>
        <div className="flex items-center gap-2 mb-4">
          <div className="bg-[#1e1145] border border-[#3d2a6a] rounded-md px-4 py-3 flex-1 overflow-hidden">
            <p className="text-gray-400 text-sm truncate">{referralUrl}</p>
          </div>
          <button onClick={handleCopy} className={`${copied ? 'bg-green-600' : 'bg-purple-600 hover:bg-purple-700'} text-white p-3 rounded-md transition-colors`}>
            {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
          </button>
        </div>
      </div>
      <div>
        <h4 className="text-white font-medium mb-3">
          Compartilhe nas redes sociais
        </h4>
        <div className="flex flex-wrap gap-3">
          <button onClick={shareViaTwitter} className="flex items-center gap-2 bg-[#1DA1F2] hover:bg-[#1a94df] text-white px-4 py-2 rounded-md transition-colors">
            <Twitter className="w-5 h-5" />
            <span>Twitter</span>
          </button>
          <button onClick={shareViaFacebook} className="flex items-center gap-2 bg-[#1877F2] hover:bg-[#166fe0] text-white px-4 py-2 rounded-md transition-colors">
            <Facebook className="w-5 h-5" />
            <span>Facebook</span>
          </button>
          <button onClick={shareViaEmail} className="flex items-center gap-2 bg-[#2d1a5a] hover:bg-[#3d2a6a] text-white px-4 py-2 rounded-md transition-colors">
            <Mail className="w-5 h-5" />
            <span>Email</span>
          </button>
        </div>
      </div>
    </div>;
};
export default ReferralSystem;