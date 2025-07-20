import React from 'react';
import { Container } from 'react-bootstrap';

export default function Sobre() {
    return (
        <section id="sobre" style={{ padding: '60px 0', backgroundColor: '#e9ecef' }}>
            <Container>
                <h2 className="text-center mb-4">Sobre Nós</h2>
                <p className="text-center lead">
                    Somos uma empresa dedicada a oferecer serviços de alta qualidade em elétrica, pintura, hidráulica e reformas.
                    Nossa missão é garantir a satisfação dos clientes com profissionalismo, agilidade e segurança.
                </p>
                <p className="text-center">
                    Com anos de experiência no mercado, contamos com uma equipe qualificada e comprometida em transformar seu ambiente
                    com soluções práticas e eficientes.
                </p>
            </Container>
        </section>
    );
}
