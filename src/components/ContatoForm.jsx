import React, { useState } from 'react';

const whatsappNumber = '5521975966330';

export default function ContatoForm() {
    const [formData, setFormData] = useState({
        nome: '',
        email: '',
        telefone: '',
        observacoes: '',
    });

    const [errors, setErrors] = useState({});
    const [sucesso, setSucesso] = useState('');

    const validarEmail = (email) => /\S+@\S+\.\S+/.test(email);
    const validarTelefone = (tel) => /^\d{10,11}$/.test(tel.replace(/\D/g, ''));

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const enviarFormulario = async (e) => {
        e.preventDefault();

        let erros = {};

        if (!formData.nome.trim()) erros.nome = 'Nome é obrigatório.';
        if (!validarEmail(formData.email)) erros.email = 'Email inválido.';
        if (!validarTelefone(formData.telefone)) erros.telefone = 'Telefone inválido. Use apenas números (10 ou 11 dígitos).';
        if (!formData.observacoes.trim()) erros.observacoes = 'Observações são obrigatórias.';

        setErrors(erros);
        setSucesso('');

        if (Object.keys(erros).length === 0) {
            const mensagem = `Olá! Tenho um novo contato:\n\nNome: ${formData.nome}\nEmail: ${formData.email}\nTelefone: ${formData.telefone}\nObservações: ${formData.observacoes}`;
            const linkWhats = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(mensagem)}`;
            window.open(linkWhats, '_blank');

            try {
                await fetch('https://formsubmit.co/YOUR_EMAIL@email.com', {
                    method: 'POST',
                    headers: { 'Content-Type': 'application/json' },
                    body: JSON.stringify({
                        Nome: formData.nome,
                        Email: formData.email,
                        Telefone: formData.telefone,
                        Observacoes: formData.observacoes,
                    }),
                });

                setSucesso('Formulário enviado com sucesso!');
                setFormData({ nome: '', email: '', telefone: '', observacoes: '' });
            } catch (error) {
                setErrors({ submit: 'Erro ao enviar formulário. Tente novamente mais tarde.' });
            }
        }
    };

    return (
        <form onSubmit={enviarFormulario} style={{ maxWidth: '600px', margin: '0 auto' }} noValidate>
            <div className="mb-3">
                <label htmlFor="nome" className="form-label">Nome</label>
                <input
                    type="text"
                    className={`form-control ${errors.nome ? 'is-invalid' : ''}`}
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                />
                {errors.nome && <div className="invalid-feedback">{errors.nome}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="email" className="form-label">E-mail</label>
                <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                />
                {errors.email && <div className="invalid-feedback">{errors.email}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="telefone" className="form-label">Telefone</label>
                <input
                    type="tel"
                    className={`form-control ${errors.telefone ? 'is-invalid' : ''}`}
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleChange}
                    placeholder="Somente números"
                    required
                />
                {errors.telefone && <div className="invalid-feedback">{errors.telefone}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="observacoes" className="form-label">Observações</label>
                <textarea
                    className={`form-control ${errors.observacoes ? 'is-invalid' : ''}`}
                    id="observacoes"
                    name="observacoes"
                    rows="4"
                    value={formData.observacoes}
                    onChange={handleChange}
                    required
                />
                {errors.observacoes && <div className="invalid-feedback">{errors.observacoes}</div>}
            </div>

            {errors.submit && <div className="alert alert-danger">{errors.submit}</div>}
            {sucesso && <div className="alert alert-success">{sucesso}</div>}

            <button type="submit" className="btn btn-light w-100">Enviar</button>
        </form>
    );
}
