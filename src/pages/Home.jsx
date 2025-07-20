import React from 'react';

export default function Home() {
    return (
        <section
            id="home"
            style={{
                width: '100vw',           // largura total da viewport
                height: '500px',          // altura maior para destaque
                paddingTop: '80px',
                paddingBottom: '40px',
                backgroundImage: "url('https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=1470&q=80')",
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                color: 'white',
                position: 'relative',
                textShadow: '2px 2px 6px rgba(0,0,0,0.8)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',    // centraliza verticalmente
                alignItems: 'center',        // centraliza horizontalmente
                boxSizing: 'border-box',
            }}
        >
            {/* Overlay escuro para melhorar legibilidade */}
            <div
                style={{
                    position: 'absolute',
                    top: 0, left: 0, right: 0, bottom: 0,
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    zIndex: 1,
                }}
            />
            <div style={{ position: 'relative', zIndex: 2, maxWidth: '900px', textAlign: 'center', padding: '0 20px' }}>
                <h1 style={{ fontWeight: '700', fontSize: '3rem', marginBottom: '1rem' }}>
                    Serviços de Qualidade em Sua Casa
                </h1>
                <p style={{ fontSize: '1.25rem', maxWidth: '700px', margin: '0 auto' }}>
                    Profissionais qualificados em elétrica, pintura, hidráulica e pequenas reformas.
                </p>
            </div>
        </section>
    );
}
