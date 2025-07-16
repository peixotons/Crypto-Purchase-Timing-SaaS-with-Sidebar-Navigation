import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Activity, Mail, ArrowLeft, AlertCircle, CheckCircle } from 'lucide-react';
const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (!email) {
      setError('Por favor, informe seu email.');
      return;
    }
    // Simulate password reset request - in a real app, this would call an API
    console.log('Password reset requested for:', email);
    // Show success message
    setSuccess(true);
    setError('');
  };
  return <div className="min-h-screen flex items-center justify-center bg-[#1a103c] p-4">
      <div className="bg-[#1e1145] rounded-lg p-8 shadow-lg max-w-md w-full">
        <div className="flex flex-col items-center mb-6">
          <div className="flex items-center gap-2 mb-2">
            <Activity className="h-8 w-8 text-orange-500" />
            <h1 className="text-2xl font-bold text-white">Bitcoin Today</h1>
          </div>
          <h2 className="text-xl font-bold text-white mb-2">Recuperar Senha</h2>
          <p className="text-gray-400 text-center">
            Digite seu email e enviaremos instruções para redefinir sua senha
          </p>
        </div>
        {error && <div className="mb-4 p-3 bg-red-900/30 border border-red-800 rounded-md flex items-center gap-2">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <p className="text-red-400 text-sm">{error}</p>
          </div>}
        {success ? <div className="mb-4 p-4 bg-green-900/30 border border-green-800 rounded-md flex items-start gap-3">
            <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-green-400 font-medium">Email enviado!</p>
              <p className="text-gray-400 text-sm mt-1">
                Enviamos instruções para redefinir sua senha para {email}. Por
                favor, verifique sua caixa de entrada.
              </p>
            </div>
          </div> : <form onSubmit={handleSubmit}>
            <div className="space-y-4">
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
              <button type="submit" className="w-full bg-gradient-to-r from-orange-600 to-red-600 hover:from-orange-700 hover:to-red-700 text-white font-medium py-3 rounded-md transition-colors">
                Enviar Instruções
              </button>
            </div>
          </form>}
        <div className="mt-6 text-center">
          <Link to="/login" className="text-purple-400 hover:text-purple-300 flex items-center justify-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Voltar para login
          </Link>
        </div>
        <div className="mt-6 text-center">
          <Link to="/" className="text-purple-400 hover:text-purple-300 flex items-center justify-center gap-1">
            <ArrowLeft className="h-4 w-4" />
            Voltar para a página inicial
          </Link>
        </div>
      </div>
    </div>;
};
export default ForgotPassword;