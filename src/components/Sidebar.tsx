import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { LineChart, Filter, Bell, BarChart2, Activity, DollarSign, Star, Menu, X, Lock, LogOut, User, Crown, AlertCircle, Gift } from 'lucide-react';
interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  isLoggedIn?: boolean;
  isPremium?: boolean;
}
const Sidebar = ({
  activeTab,
  setActiveTab,
  isLoggedIn = false,
  isPremium = false
}: SidebarProps) => {
  const navigate = useNavigate();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [showPremiumBadge, setShowPremiumBadge] = useState(true);
  const navItems = [{
    id: 'dashboard',
    label: 'Dashboard',
    icon: <Activity className="w-5 h-5" />,
    premium: false
  }, {
    id: 'analyzer',
    label: 'Analisador',
    icon: <LineChart className="w-5 h-5" />,
    premium: true
  }, {
    id: 'signals',
    label: 'Momentos',
    icon: <Filter className="w-5 h-5" />,
    premium: true
  }, {
    id: 'alerts',
    label: 'Alertas',
    icon: <Bell className="w-5 h-5" />,
    premium: true
  }, {
    id: 'testimonials',
    label: 'Depoimentos',
    icon: <Star className="w-5 h-5" />,
    premium: false
  }, {
    id: 'methodology',
    label: 'Metodologia',
    icon: <BarChart2 className="w-5 h-5" />,
    premium: false
  }, {
    id: 'pricing',
    label: 'Planos',
    icon: <DollarSign className="w-5 h-5" />,
    premium: false
  }];
  // Add referrals item only for logged in users
  if (isLoggedIn) {
    navItems.push({
      id: 'referrals',
      label: 'Indicações',
      icon: <Gift className="w-5 h-5" />,
      premium: false
    });
  }
  const authItems = [{
    id: 'profile',
    label: 'Meu Perfil',
    icon: <User className="w-5 h-5" />
  }, {
    id: 'logout',
    label: 'Sair',
    icon: <LogOut className="w-5 h-5" />
  }];
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  const handleNavClick = (tabId: string) => {
    if (tabId === 'login' || tabId === 'register' || tabId === 'logout') {
      // Handle auth navigation separately
      if (tabId === 'logout') {
        // Simulate logout
        navigate('/login');
        return;
      }
      navigate(`/${tabId}`);
      return;
    }
    setActiveTab(tabId);
    setMobileMenuOpen(false);
  };
  return <>
      {/* Mobile menu button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button onClick={toggleMobileMenu} className="p-2 bg-[#2d1a5a] rounded-md text-white">
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile overlay */}
      {mobileMenuOpen && <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-40" onClick={() => setMobileMenuOpen(false)}></div>}

      {/* Sidebar - desktop always visible, mobile conditionally visible */}
      <div className={`
        ${mobileMenuOpen ? 'translate-x-0' : '-translate-x-full'} 
        lg:translate-x-0 fixed lg:static top-0 left-0 z-40
        w-64 h-full bg-[#1e1145] text-white flex flex-col
        transition-transform duration-300 ease-in-out
      `}>
        <div className="p-6 border-b border-[#2d1a5a]">
          <div className="flex items-center gap-2">
            <Activity className="h-6 w-6 text-orange-500" />
            <h1 className="text-xl font-bold">Bitcoin Today</h1>
          </div>
          <p className="text-xs mt-2 text-gray-400">
            Find out when to buy Bitcoin
          </p>
        </div>

        {/* User info section */}
        {isLoggedIn ? <div className="p-4 border-b border-[#2d1a5a]">
            <div className="flex items-center gap-3">
              <div className="bg-purple-700 rounded-full w-10 h-10 flex items-center justify-center">
                <span className="font-bold">JD</span>
              </div>
              <div>
                <p className="font-medium">John Doe</p>
                <div className="flex items-center">
                  <span className={`text-xs px-2 py-0.5 rounded ${isPremium ? 'bg-gradient-to-r from-orange-600 to-red-600 text-white' : 'bg-gray-700 text-gray-300'}`}>
                    {isPremium ? 'Premium' : 'Free'}
                  </span>
                </div>
              </div>
            </div>
            {/* Premium upgrade badge */}
            {!isPremium && showPremiumBadge && <div className="mt-3 bg-[#2d1a5a] rounded-md p-2 relative animate-fade-in">
                <button className="absolute -top-2 -right-2 bg-[#1e1145] rounded-full p-0.5" onClick={() => setShowPremiumBadge(false)}>
                  <X className="w-3 h-3 text-gray-400" />
                </button>
                <div className="flex items-center gap-2">
                  <Crown className="w-4 h-4 text-orange-500" />
                  <div>
                    <p className="text-xs text-gray-300">
                      Desbloqueie recursos premium
                    </p>
                    <button onClick={() => setActiveTab('pricing')} className="text-xs text-orange-500 hover:text-orange-400 transition-colors">
                      Assinar agora →
                    </button>
                  </div>
                </div>
              </div>}
          </div> : <div className="p-4 border-b border-[#2d1a5a]">
            <div className="flex flex-col gap-2">
              <button onClick={() => handleNavClick('login')} className="bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-2 rounded-md transition-colors">
                Entrar
              </button>
              <button onClick={() => handleNavClick('register')} className="bg-[#2d1a5a] hover:bg-[#3d2a6a] text-white font-medium py-2 rounded-md transition-colors">
                Registrar
              </button>
            </div>
          </div>}

        <div className="flex flex-col flex-1 py-4 overflow-y-auto">
          {navItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className={`flex items-center gap-3 px-6 py-3 hover:bg-[#2d1a5a] transition-colors ${activeTab === item.id ? 'bg-[#2d1a5a] border-l-4 border-orange-500' : ''}`}>
              {item.icon}
              <span>{item.label}</span>
              {item.premium && !isPremium && <Lock className="w-4 h-4 ml-auto text-orange-500" />}
            </button>)}
        </div>

        {/* User account options */}
        {isLoggedIn && <div className="border-t border-[#2d1a5a]">
            {authItems.map(item => <button key={item.id} onClick={() => handleNavClick(item.id)} className={`flex items-center gap-3 px-6 py-3 w-full text-left hover:bg-[#2d1a5a] transition-colors ${activeTab === item.id ? 'bg-[#2d1a5a] border-l-4 border-orange-500' : ''}`}>
                {item.icon}
                <span>{item.label}</span>
              </button>)}
          </div>}

        
      </div>
    </>;
};
export default Sidebar;