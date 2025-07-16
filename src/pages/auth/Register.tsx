import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Activity, User, Mail, Lock, ArrowRight, AlertCircle, Check } from 'lucide-react';
const Register = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [acceptTerms, setAcceptTerms] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError('Por favor, preencha todos os campos.');
      return;
    }
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    if (!acceptTerms) {
      setError('Você precisa aceitar os termos de uso.');
      return;
    }
    // Simulate registration - in a real app, this would call an API
    console.log('Registration attempt:', {
      name,
      email,
      password
    });
    // Redirect to dashboard after successful registration
    navigate('/');
  };
  return <div className="min-h-screen flex items-center justify-center bg-[#1a103c] p-4">
      <div className="bg-[#1e1145] rounded-lg p-8 shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-white">Bitcoin Today</h1>
          </div>
          <p className="text-gray-400 text-center">
            Crie sua conta para acessar todos os recursos
          </p>
        </div>
        {error && <div className="mb-4 p-3 bg-red-900/30 border border-red-800 rounded-md flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>}
        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-400 mb-1">
                Nome Completo
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-500" />
                </div>
                <input id="name" type="text" value={name} onChange={e => setName(e.target.value)} className="w-full bg-[#2d1a5a] text-white pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="Seu Nome" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-400 mb-1">
                Email
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-500" />
                </div>
                <input id="email" type="email" value={email} onChange={e => setEmail(e.target.value)} className="w-full bg-[#2d1a5a] text-white pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="seu@email.com" />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="block text-gray-400 mb-1">
                Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input id="password" type="password" value={password} onChange={e => setPassword(e.target.value)} className="w-full bg-[#2d1a5a] text-white pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="********" />
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-gray-400 mb-1">
                Confirmar Senha
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-500" />
                </div>
                <input id="confirmPassword" type="password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} className="w-full bg-[#2d1a5a] text-white pl-10 pr-4 py-3 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600" placeholder="********" />
              </div>
            </div>
            <div className="flex items-center">
              <input id="terms" type="checkbox" checked={acceptTerms} onChange={e => setAcceptTerms(e.target.checked)} className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-700 rounded" />
              <label htmlFor="terms" className="ml-2 block text-sm text-gray-400">
                Eu aceito os{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  Termos de Serviço
                </a>{' '}
                e a{' '}
                <a href="#" className="text-purple-400 hover:text-purple-300">
                  Política de Privacidade
                </a>
              </label>
            </div>
            <button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-3 rounded-md flex items-center justify-center gap-2 transition-colors">
              Criar Conta
              <ArrowRight className="h-5 w-5" />
            </button>
            <div className="relative flex items-center justify-center">
              <div className="border-t border-[#2d1a5a] flex-grow"></div>
              <span className="mx-4 text-gray-500 text-sm">ou</span>
              <div className="border-t border-[#2d1a5a] flex-grow"></div>
            </div>
            <button type="button" className="w-full bg-white text-gray-800 font-medium py-3 rounded-md flex items-center justify-center gap-2">
              <svg className="h-5 w-5" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
              </svg>
              Registrar com Google
            </button>
          </div>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray-400">
            Já tem uma conta?{' '}
            <Link to="/login" className="text-purple-400 hover:text-purple-300">
              Entrar
            </Link>
          </p>
        </div>
        <div className="mt-6 text-center">
          <Link to="/" className="text-purple-400 hover:text-purple-300 flex items-center justify-center gap-1">
            <ArrowRight className="h-4 w-4 rotate-180" />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>;
};
export default Register;