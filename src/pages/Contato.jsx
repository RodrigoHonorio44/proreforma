import React from 'react';
import { Container } from 'react-bootstrap';
import ContatoForm from '../components/ContatoForm';

export default function Contato() {
    return (
        <section
            id="contato"
            style={{ backgroundColor: '#0d6efd', color: 'white', padding: '40px 0' }}
        >
            <Container>
                <h2 className="text-center mb-4">Entre em Contato</h2>
                <p className="text-center mb-4">Envie uma mensagem ou fale direto no WhatsApp!</p>
                <ContatoForm />
            </Container>
        </section>
    );
}
