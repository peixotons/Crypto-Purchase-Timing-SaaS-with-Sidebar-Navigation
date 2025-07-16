import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Analyzer from './pages/Analyzer';
import Momentos from './pages/Signals';
import Alerts from './pages/Alerts';
import Methodology from './pages/Methodology';
import Pricing from './pages/Pricing';
import Testimonials from './pages/Testimonials';
import Footer from './components/Footer';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import ForgotPassword from './pages/auth/ForgotPassword';
import ProfilePage from './pages/auth/Profile';
import PremiumFeatureOverlay from './components/PremiumFeatureOverlay';
import NotificationSystem from './components/NotificationSystem';
import Referrals from './pages/Referrals';
import PremiumFeaturesPreview from './components/PremiumFeaturesPreview';
// Layout component for the main application with sidebar
const MainLayout = ({
  children,
  activeTab,
  setActiveTab,
  isLoggedIn,
  isPremium
}) => {
  return <div className="flex flex-col lg:flex-row w-full min-h-screen bg-[#1a103c]">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} isLoggedIn={isLoggedIn} isPremium={isPremium} />
      <div className="flex-1 p-4 md:p-6 pt-16 lg:pt-6 overflow-auto">
        <div className="max-w-6xl mx-auto">
          {children}
          <Footer />
        </div>
      </div>
    </div>;
};
export function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  // Simulated authentication state
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isPremium, setIsPremium] = useState(false);
  // For demo purposes, let's add a function to toggle login and premium states
  const toggleLogin = () => {
    const newLoginState = !isLoggedIn;
    setIsLoggedIn(newLoginState);
    // Show notification for login state change
    if (newLoginState) {
      if (typeof window !== 'undefined' && (window as any).notifications) {
        ;
        (window as any).notifications.success('Login realizado com sucesso!', 'Bem-vindo de volta');
      }
    } else {
      if (typeof window !== 'undefined' && (window as any).notifications) {
        ;
        (window as any).notifications.info('Você saiu da sua conta.', 'Logout');
      }
    }
  };
  const togglePremium = () => {
    const newPremiumState = !isPremium;
    setIsPremium(newPremiumState);
    // Show notification for premium state change
    if (newPremiumState) {
      if (typeof window !== 'undefined' && (window as any).notifications) {
        ;
        (window as any).notifications.success('Sua conta agora é Premium!', 'Assinatura Ativada');
      }
    } else {
      if (typeof window !== 'undefined' && (window as any).notifications) {
        ;
        (window as any).notifications.warning('Sua assinatura Premium foi cancelada.', 'Assinatura Cancelada');
      }
    }
  };
  const renderContent = () => {
    // Premium features that need a paywall if not premium
    const premiumFeatures = ['analyzer', 'signals', 'alerts'];
    const needsPaywall = premiumFeatures.includes(activeTab) && !isPremium;
    // Base content to render
    let content;
    switch (activeTab) {
      case 'dashboard':
        content = <>
            <Dashboard />
            {!isPremium && isLoggedIn && <div className="mt-6">
                <PremiumFeaturesPreview />
              </div>}
          </>;
        break;
      case 'analyzer':
        content = <Analyzer />;
        break;
      case 'signals':
        content = <Momentos />;
        break;
      case 'alerts':
        content = <Alerts />;
        break;
      case 'testimonials':
        content = <Testimonials />;
        break;
      case 'methodology':
        content = <Methodology />;
        break;
      case 'pricing':
        content = <Pricing isPremium={isPremium} setIsPremium={setIsPremium} />;
        break;
      case 'profile':
        content = <ProfilePage isPremium={isPremium} setIsPremium={setIsPremium} />;
        break;
      case 'referrals':
        content = <Referrals />;
        break;
      default:
        content = <Dashboard />;
        break;
    }
    // If it's a premium feature and user is not premium, add overlay
    if (needsPaywall) {
      return <PremiumFeatureOverlay featureName={activeTab === 'analyzer' ? 'Analisador' : activeTab === 'signals' ? 'Momentos' : 'Alertas'} isLoggedIn={isLoggedIn}>
          {content}
        </PremiumFeatureOverlay>;
    }
    return content;
  };
  // Debug controls (for demonstration only)
  const debugControls = <div className="fixed bottom-4 right-4 bg-black bg-opacity-80 p-2 rounded-lg z-40 text-xs">
      <div className="flex flex-col gap-2">
        <button onClick={toggleLogin} className="bg-blue-600 text-white px-2 py-1 rounded">
          {isLoggedIn ? 'Simulate Logout' : 'Simulate Login'}
        </button>
        <button onClick={togglePremium} className="bg-orange-600 text-white px-2 py-1 rounded">
          {isPremium ? 'Simulate Free' : 'Simulate Premium'}
        </button>
        <button onClick={() => {
        if (typeof window !== 'undefined' && (window as any).notifications) {
          ;
          (window as any).notifications.info('Esta é uma notificação de teste', 'Teste');
        }
      }} className="bg-purple-600 text-white px-2 py-1 rounded">
          Test Notification
        </button>
      </div>
    </div>;
  return <Router>
      <Routes>
        <Route path="/" element={<MainLayout activeTab={activeTab} setActiveTab={setActiveTab} isLoggedIn={isLoggedIn} isPremium={isPremium}>
              {renderContent()}
            </MainLayout>} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
      {/* Notification system */}
      <NotificationSystem position="top-right" />
      {/* Debug controls for demonstration */}
      {debugControls}
    </Router>;
}