import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Sparkles, Heart, Phone, Instagram, MapPin, ChevronRight, Check } from 'lucide-react';

const App = () => {
    const whatsappNumber = "5541998654151";
    const whatsappLink = `https://wa.me/${whatsappNumber}`;

    return (
        <div className="artemis-spa">
            {/* Header */}
            <nav className="glass-card" style={{ position: 'fixed', top: '20px', left: '50%', transform: 'translateX(-50%)', width: '90%', maxWidth: '1100px', zIndex: 1000, padding: '15px 30px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="logo" style={{ fontSize: '1.5rem', fontWeight: 'bold', fontFamily: 'var(--font-serif)', color: 'var(--primary)' }}>Artemis Spa</div>
                <div style={{ display: 'flex', gap: '30px', fontWeight: '500' }}>
                    <a href="#services">Serviços</a>
                    <a href="#about">Holístico</a>
                    <a href="#contact">Contato</a>
                </div>
                <a href={whatsappLink} target="_blank" className="btn-premium" style={{ padding: '10px 20px', fontSize: '0.9rem' }}>Agendar Agora</a>
            </nav>

            {/* Hero Section */}
            <header style={{ height: '100vh', display: 'flex', alignItems: 'center', position: 'relative', overflow: 'hidden', padding: '0 5%' }}>
                <div style={{ flex: 1, zIndex: 1 }}>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                        style={{ fontSize: '4.5rem', lineHeight: '1.1', marginBottom: '20px' }}
                    >
                        Beleza que <br /><span style={{ color: 'var(--primary)', fontStyle: 'italic' }}>floresce</span> por dentro.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '500px', marginBottom: '40px' }}
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
                <div style={{ flex: 1, position: 'relative', height: '80%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1 }}
                        style={{ width: '100%', height: '100%', borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', overflow: 'hidden', border: '10px solid white', boxShadow: '20px 20px 60px rgba(0,0,0,0.1)' }}
                    >
                        <img src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&fit=crop&q=80&w=1000" alt="Spa Vibe" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    </motion.div>
                </div>
            </header>

            {/* Subscription Highlight */}
            <section id="services" style={{ padding: '100px 5%', backgroundColor: 'white' }}>
                <div className="container">
                    <div style={{ textAlign: 'center', marginBottom: '60px' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '15px' }}>Estética por Assinatura</h2>
                        <p style={{ color: 'var(--text-light)' }}>O seu cuidado mensal garantido com o melhor custo-benefício.</p>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
                        <motion.div whileHover={{ y: -10 }} className="glass-card" style={{ padding: '40px', border: '1px solid #FFE4E6', boxShadow: '0 20px 40px rgba(0,0,0,0.05)' }}>
                            <div style={{ color: 'var(--primary)', marginBottom: '20px' }}><Sparkles size={40} /></div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Plano Lipo Sem Corte</h3>
                            <ul style={{ marginBottom: '30px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}><Check size={18} color="var(--primary)" /> 4 Sessões de Lipo sem corte</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}><Check size={18} color="var(--primary)" /> 4 Sessões de Massagem Modeladora</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}><Check size={18} color="var(--primary)" /> 4 Sessões de Termoterapia</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}><Check size={18} color="var(--primary)" /> 4 Sessões de Crioterapia</li>
                            </ul>
                            <div style={{ marginBottom: '30px' }}>
                                <span style={{ fontSize: '1rem', color: 'var(--text-light)' }}>Mensalidade por apenas</span>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--primary)' }}>R$ 199,99</div>
                            </div>
                            <a href={whatsappLink} target="_blank" className="btn-premium" style={{ width: '100%', textAlign: 'center' }}>Quero Garantir Minha Vaga</a>
                        </motion.div>

                        <motion.div whileHover={{ y: -10 }} className="glass-card" style={{ padding: '40px', backgroundColor: 'var(--bg-cream)', border: '2px solid var(--secondary)' }}>
                            <div style={{ color: 'var(--secondary)', marginBottom: '20px' }}><Leaf size={40} /></div>
                            <h3 style={{ fontSize: '1.8rem', marginBottom: '20px' }}>Beauty Friday - Especial</h3>
                            <p style={{ marginBottom: '20px' }}>Pele renovada, macia e iluminada por um preço imperdível.</p>
                            <ul style={{ marginBottom: '30px' }}>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}><Check size={18} color="var(--secondary)" /> Limpeza de Pele</li>
                                <li style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px' }}><Check size={18} color="var(--secondary)" /> Peeling de Diamante</li>
                            </ul>
                            <div style={{ marginBottom: '30px' }}>
                                <span style={{ fontSize: '1rem', color: 'var(--text-light)', textDecoration: 'line-through' }}>De R$ 150,00</span>
                                <div style={{ fontSize: '2.5rem', fontWeight: 'bold', color: 'var(--secondary)' }}>R$ 99,99</div>
                            </div>
                            <a href={whatsappLink} target="_blank" className="btn-premium" style={{ width: '100%', textAlign: 'center', backgroundColor: 'var(--secondary)' }}>Aproveitar Agora</a>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Holistic Power Section */}
            <section id="about" style={{ padding: '100px 5%', position: 'relative' }}>
                <div className="container" style={{ display: 'flex', gap: '60px', alignItems: 'center', flexWrap: 'wrap' }}>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <img src="https://images.unsplash.com/photo-1512290923902-8a9f81dc2069?auto=format&fit=crop&q=80&w=1000" alt="Skin Care" style={{ width: '100%', borderRadius: '20px', boxShadow: '0 30px 60px rgba(0,0,0,0.1)' }} />
                    </div>
                    <div style={{ flex: 1, minWidth: '300px' }}>
                        <h2 style={{ fontSize: '3rem', marginBottom: '30px' }}>O Poder da <span style={{ color: 'var(--primary)' }}>Hidratação</span></h2>
                        <p style={{ marginBottom: '30px', color: 'var(--text-light)', fontSize: '1.1rem' }}>Receber uma limpeza de pele profunda não só previne o envelhecimento como oxigena as células. O cuidado com a pele é um ato de saúde.</p>

                        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                            {[
                                "Impede descamação",
                                "Evita envelhecimento",
                                "Controla a oleosidade",
                                "Protege da poluição",
                                "Previne manchas",
                                "Toque aveludado"
                            ].map((text, i) => (
                                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                                    <Heart size={16} color="var(--primary)" fill="var(--primary)" />
                                    <span>{text}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Footer / Contact */}
            <footer id="contact" style={{ padding: '80px 5% 40px', backgroundColor: '#2D2D2D', color: 'white' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '50px', marginBottom: '60px' }}>
                    <div>
                        <h3 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--primary)', fontFamily: 'var(--font-serif)' }}>Artemis Spa</h3>
                        <p style={{ opacity: 0.7 }}>Estimulando seu autoconhecimento e cuidado pessoal através da estética holística.</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Onde Estamos</h4>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.7, marginBottom: '10px' }}><MapPin size={18} /> Curitiba, Paraná</p>
                        <p style={{ display: 'flex', alignItems: 'center', gap: '10px', opacity: 0.7 }}><Phone size={18} /> (41) 99865-4151</p>
                    </div>
                    <div>
                        <h4 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>Siga-nos</h4>
                        <div style={{ display: 'flex', gap: '20px' }}>
                            <a href="https://www.instagram.com/artemisholisticaspa" target="_blank" style={{ color: 'white', opacity: 0.7 }}><Instagram size={24} /></a>
                            <a href={whatsappLink} target="_blank" style={{ color: 'white', opacity: 0.7 }}><Phone size={24} /></a>
                        </div>
                    </div>
                </div>
                <div style={{ textAlign: 'center', paddingTop: '40px', borderTop: '1px solid rgba(255,255,255,0.1)', opacity: 0.5, fontSize: '0.9rem' }}>
                    &copy; 2025 Artemis Spa. Todos os direitos reservados.
                </div>
            </footer>
        </div >
    );
};

export default App;
