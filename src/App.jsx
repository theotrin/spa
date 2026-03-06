import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sparkles, Heart, Phone, Instagram, MapPin, ChevronRight, Check } from 'lucide-react';

const App = () => {
    const whatsappNumber = "5541998654151";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="artemis-spa">
            {/* Header */}
            <nav className="glass-card nav-container">
                <div className="logo">Artemis Spa</div>
                <div className="nav-links">
                    <a href="#services">Serviços</a>
                    <a href="#about">Holístico</a>
                    <a href="#contact">Contato</a>
                </div>
                <a href={whatsappLink} target="_blank" className="btn-premium nav-cta">Agendar Agora</a>
            </nav>

            {/* Hero Section */}
            <header className="hero-section">
                <div className="hero-content">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        Beleza que <br /><span className="highlight-text">floresce</span> por dentro.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="hero-description"
                    >
                        Estúdio de beleza e bem-estar físico, emocional e mental. Estimulando seu autoconhecimento e cuidado pessoal!
                    </motion.p>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <a href="#services" className="btn-premium">Descobrir Tratamentos</a>
                    </motion.div>
                </div>
                <div className="hero-image-wrapper">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        className="hero-blob-image"
                    >
                        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000" alt="Spa Vibe" />
                    </motion.div>
                </div>
            </header>

            {/* Subscription Highlight */}
            <section id="services" className="section-padding white-bg">
                <div className="container">
                    <div className="section-header">
                        <h2>Estética por Assinatura</h2>
                        <p>O seu cuidado mensal garantido com o melhor custo-benefício.</p>
                    </div>

                    <div className="pricing-grid">
                        <motion.div whileHover={{ y: -10 }} className="glass-card pricing-card">
                            <div className="card-icon primary-color"><Sparkles size={40} /></div>
                            <h3>Plano Lipo Sem Corte</h3>
                            <ul className="feature-list">
                                <li><Check size={18} /> 4 Sessões de Lipo sem corte</li>
                                <li><Check size={18} /> 4 Sessões de Massagem Modeladora</li>
                                <li><Check size={18} /> 4 Sessões de Termoterapia</li>
                                <li><Check size={18} /> 4 Sessões de Crioterapia</li>
                            </ul>
                            <div className="price-info">
                                <span className="price-label">Mensalidade por apenas</span>
                                <div className="price-value">R$ 199,99</div>
                            </div>
                            <a href={whatsappLink} target="_blank" className="btn-premium card-btn">Quero Garantir Minha Vaga</a>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="glass-card pricing-card secondary-card">
                            <div className="card-icon secondary-color"><Leaf size={40} /></div>
                            <h3>Beauty Friday - Especial</h3>
                            <p className="card-desc">Pele renovada, macia e iluminada por um preço imperdível.</p>
                            <ul className="feature-list">
                                <li><Check size={18} /> Limpeza de Pele</li>
                                <li><Check size={18} /> Peeling de Diamante</li>
                            </ul>
                            <div className="price-info">
                                <span className="old-price">De R$ 150,00</span>
                                <div className="price-value secondary-text">R$ 99,99</div>
                            </div>
                            <a href={whatsappLink} target="_blank" className="btn-premium card-btn secondary-btn">Aproveitar Agora</a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Holistic Power Section */}
            <section id="about" className="section-padding">
                <div className="container about-container">
                    <div className="about-image">
                        <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=1000" alt="Skin Care" />
                    </div>
                    <div className="about-content">
                        <h2>O Poder da <span className="highlight-text">Hidratação</span></h2>
                        <p className="about-description">Receber uma limpeza de pele profunda não só previne o envelhecimento como oxigena as células. O cuidado com a pele é um ato de saúde.</p>

                        <div className="benefits-grid">
                            {[
                                "Impede descamação",
                                "Evita envelhecimento",
                                "Controla a oleosidade",
                                "Protege da poluição",
                                "Previne manchas",
                                "Toque aveludado"
                            ].map((text, i) => (
                                <div key={i} className="benefit-item">
                                    <Heart size={16} />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" className="footer">
                <div className="container footer-grid">
                    <div className="footer-brand">
                        <h3>Artemis Spa</h3>
                        <p>Estimulando seu autoconhecimento e cuidado pessoal através da estética holística.</p>
                    </div>
                    <div className="footer-location">
                        <h4>Onde Estamos</h4>
                        <p><MapPin size={18} /> Curitiba, Paraná</p>
                        <p><Phone size={18} /> (41) 99865-4151</p>
                    </div>
                    <div className="footer-social-wrapper">
                        <h4>Siga-nos</h4>
                        <div className="footer-social">
                            <a href="https://www.instagram.com/artemisholisticaspa" target="_blank"><Instagram size={24} /></a>
                            <a href={whatsappLink} target="_blank"><Phone size={24} /></a>
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    &copy; 2025 Artemis Spa. Todos os direitos reservados.
                </div>
            </footer>
        </div>
    );
};

export default App;
