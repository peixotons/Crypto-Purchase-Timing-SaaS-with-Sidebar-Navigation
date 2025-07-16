import React, { useEffect, useState } from 'react';
import { Clock, AlertTriangle, Crown } from 'lucide-react';
interface TrialExpirationCountdownProps {
  expirationDate: string; // ISO date string
  onRenew: () => void;
}
const TrialExpirationCountdown = ({
  expirationDate,
  onRenew
}: TrialExpirationCountdownProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    isExpired: false
  });
  const [isVisible, setIsVisible] = useState(true);
  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = new Date(expirationDate).getTime() - new Date().getTime();
      if (difference <= 0) {
        setTimeLeft({
          days: 0,
          hours: 0,
          minutes: 0,
          seconds: 0,
          isExpired: true
        });
        return;
      }
      setTimeLeft({
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor(difference / (1000 * 60 * 60) % 24),
        minutes: Math.floor(difference / 1000 / 60 % 60),
        seconds: Math.floor(difference / 1000 % 60),
        isExpired: false
      });
    };
    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, [expirationDate]);
  if (!isVisible) return null;
  const getUrgencyColor = () => {
    if (timeLeft.isExpired) return 'from-red-600 to-red-800';
    if (timeLeft.days <= 1) return 'from-red-600 to-orange-600';
    if (timeLeft.days <= 3) return 'from-orange-500 to-yellow-500';
    return 'from-blue-600 to-purple-600';
  };
  return <div className={`bg-gradient-to-r ${getUrgencyColor()} rounded-lg p-4 shadow-lg mb-6 animate-fade-in`}>
      <div className="flex items-start">
        <div className="mr-3 mt-1">
          {timeLeft.isExpired ? <AlertTriangle className="w-6 h-6 text-white" /> : <Clock className="w-6 h-6 text-white" />}
        </div>
        <div className="flex-1">
          <div className="flex justify-between items-start">
            <h3 className="text-white font-bold text-lg">
              {timeLeft.isExpired ? 'Sua assinatura expirou!' : 'Sua assinatura expira em:'}
            </h3>
            <button onClick={() => setIsVisible(false)} className="text-white/70 hover:text-white">
              <span className="text-xs">×</span>
            </button>
          </div>
          {!timeLeft.isExpired && <div className="flex space-x-3 my-2">
              <div className="bg-white/20 rounded-md px-3 py-2 text-center">
                <div className="text-2xl font-bold text-white">
                  {timeLeft.days}
                </div>
                <div className="text-xs text-white/80">Dias</div>
              </div>
              <div className="bg-white/20 rounded-md px-3 py-2 text-center">
                <div className="text-2xl font-bold text-white">
                  {timeLeft.hours}
                </div>
                <div className="text-xs text-white/80">Horas</div>
              </div>
              <div className="bg-white/20 rounded-md px-3 py-2 text-center">
                <div className="text-2xl font-bold text-white">
                  {timeLeft.minutes}
                </div>
                <div className="text-xs text-white/80">Min</div>
              </div>
              <div className="bg-white/20 rounded-md px-3 py-2 text-center">
                <div className="text-2xl font-bold text-white">
                  {timeLeft.seconds}
                </div>
                <div className="text-xs text-white/80">Seg</div>
              </div>
            </div>}
          <p className="text-white/90 text-sm mb-3">
            {timeLeft.isExpired ? 'Renove sua assinatura para continuar acessando recursos premium.' : 'Renove agora para manter acesso ininterrupto aos recursos premium.'}
          </p>
          <button onClick={onRenew} className="bg-white text-purple-900 hover:bg-white/90 font-medium py-2 px-4 rounded-md transition-colors flex items-center gap-2">
            <Crown className="w-4 h-4" />
            {timeLeft.isExpired ? 'Renovar Assinatura' : 'Renovar Agora'}
          </button>
        </div>
      </div>
    </div>;
};
export default TrialExpirationCountdown;