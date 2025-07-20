import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { BsCashStack, BsHouseCheck, BsShieldCheck } from 'react-icons/bs';

export default function VantagensBeneficios() {
    return (
        <section id="vantagens" style={{ padding: '60px 0', backgroundColor: '#f8f9fa' }}>
            <Container>
                <h2 className="text-center mb-4">Por que nos escolher?</h2>
                <p className="text-center mb-5">Oferecemos soluções de qualidade com preços acessíveis para sua reforma.</p>
                <Row className="g-4">
                    <Col md={4}>
                        <Card className="text-center h-100">
                            <Card.Body>
                                <BsShieldCheck size={48} className="mb-3 text-primary" />
                                <Card.Title>Profissionais Qualificados</Card.Title>
                                <Card.Text>Equipe experiente e comprometida com resultados de excelência.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center h-100">
                            <Card.Body>
                                <BsCashStack size={48} className="mb-3 text-success" />
                                <Card.Title>Preços Acessíveis</Card.Title>
                                <Card.Text>Orçamentos justos e serviços de alto custo-benefício.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={4}>
                        <Card className="text-center h-100">
                            <Card.Body>
                                <BsHouseCheck size={48} className="mb-3 text-danger" />
                                <Card.Title>Reformas Residenciais</Card.Title>
                                <Card.Text>Transformamos sua casa com agilidade, qualidade e atenção aos detalhes.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </section>
    );
}
