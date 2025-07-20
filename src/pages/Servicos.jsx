import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';

export default function Servicos() {
    return (
        <section id="servicos" style={{ paddingBottom: '60px', paddingTop: '60px' }}>
            <Container>
                <h2 className="text-center mb-5">Nossos Serviços</h2>
                <Row className="g-4">
                    <Col xs={12} md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/eletrecistas.jpg"
                                alt="Elétrica Residencial"
                            />
                            <Card.Body>
                                <Card.Title>Elétrica Residencial</Card.Title>
                                <Card.Text>Instalações e manutenções elétricas com segurança.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xs={12} md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/encanadore.jpg"
                                alt="Hidráulica e Reparos"
                            />
                            <Card.Body>
                                <Card.Title>Hidráulica e Reparos</Card.Title>
                                <Card.Text>Vazamentos, torneiras e manutenção.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>


                    <Col xs={12} md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/pintura.jpg"
                                alt="Pintura de Interiores"
                            />
                            <Card.Body>
                                <Card.Title>Pintura de Interiores</Card.Title>
                                <Card.Text>Pintura com acabamento profissional.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>

                    <Col xs={12} md={3}>
                        <Card>
                            <Card.Img
                                variant="top"
                                src="/tiler-trabalhando-na-renovacao-apartamento.jpg"
                                alt="Pequenas Reformas"
                            />
                            <Card.Body>
                                <Card.Title>Pequenas Reformas</Card.Title>
                                <Card.Text>Reformas rápidas e eficientes.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
