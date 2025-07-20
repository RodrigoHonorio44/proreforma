import React from 'react';
import Navbar from './components/Navbar';
import WhatsAppButton from './components/WhatsAppButton';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Vantagens from './pages/VantagensBeneficios';
import Servicos from './pages/Servicos';
import Contato from './pages/Contato';

export default function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Sobre />
      <Vantagens />
      <Servicos />
      <Contato />
      <WhatsAppButton />

      {/* Seção acima do footer com fundo preto e conteúdo dividido */}
      <div
        style={{
          backgroundColor: '#000',
          color: '#fff',
          padding: '2rem',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '2rem',
        }}
      >
        {/* Lado esquerdo: informações */}
        <div style={{ flex: 1, minWidth: '250px', textAlign: 'center' }}>
          <p><strong>Telefone:</strong> (11) 99999-9999</p>
          <p><strong>Email:</strong> contato@proreforma.com</p>
          <p><strong>Endereço:</strong> Rua Exemplo, 123 - Bairro - Cidade - UF</p>
        </div>

        {/* Lado direito: logo */}
        <div style={{ flex: 1, textAlign: 'center', minWidth: '250px' }}>
          <img
            src="/logo3.png"
            alt="ProReforma Logo"
            style={{ maxWidth: '150px', height: 'auto' }}
          />
          <p style={{ marginTop: '0.5rem', fontStyle: 'italic' }}>Transformando seu espaço com qualidade e confiança.</p>
        </div>
      </div>

      {/* Rodapé */}
      <footer
        style={{
          backgroundColor: '#212529',
          color: 'white',
          textAlign: 'center',
          padding: '1rem 0',
        }}
      >
        &copy; {new Date().getFullYear()} ProReforma. Todos os direitos reservados.
      </footer>
    </>
  );
}
