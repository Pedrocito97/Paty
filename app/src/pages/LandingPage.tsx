import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const LandingPage: React.FC = () => {
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({
    section1: false,
    section2: false,
    section3: false
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section[data-animate]');
      sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const isInView = rect.top <= window.innerHeight * 0.75;
        if (isInView) {
          setIsVisible(prev => ({ ...prev, [section.id]: true }));
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <section className="hero">
        <div className="hero-shape shape-circle"></div>
        <div className="hero-shape shape-dots"></div>
        <h1>Transformez votre corps avec <span className="text-shine">iPaty</span></h1>
        <p>La plateforme d'entraînement personnalisé qui s'adapte à vos objectifs, votre emploi du temps et votre niveau.</p>
        <Link to="/subscribe" className="btn btn-lg btn-rounded">Commencer maintenant</Link>
      </section>
      
      <main className="container">
        {/* Section Avantages */}
        <section id="section1" data-animate className={isVisible.section1 ? 'animate-fadeIn' : ''} style={{ marginBottom: '5rem', opacity: isVisible.section1 ? 1 : 0, transition: 'opacity 0.6s ease-out' }}>
          <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '1rem' }}>Pourquoi choisir iPaty ?</h2>
          <p className="lead text-center">Notre approche unique combine technologie avancée et expertise humaine pour vous offrir une expérience fitness inégalée.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div className="feature-box animate-float" style={{ animationDelay: '0.1s' }}>
              <div className="feature-box-icon">👟</div>
              <h3>Programmes personnalisés</h3>
              <p>Des programmes d'entraînement adaptés à vos objectifs, votre niveau et vos contraintes.</p>
            </div>
            
            <div className="feature-box animate-float" style={{ animationDelay: '0.3s' }}>
              <div className="feature-box-icon">📊</div>
              <h3>Suivi de progression</h3>
              <p>Visualisez vos progrès en temps réel et restez motivé pour atteindre vos objectifs.</p>
            </div>
            
            <div className="feature-box animate-float" style={{ animationDelay: '0.5s' }}>
              <div className="feature-box-icon">🥗</div>
              <h3>Conseils nutritionnels</h3>
              <p>Des plans nutritionnels adaptés pour optimiser vos résultats et votre bien-être.</p>
            </div>
            
            <div className="feature-box animate-float" style={{ animationDelay: '0.7s' }}>
              <div className="feature-box-icon">👩‍🏫</div>
              <h3>Accompagnement expert</h3>
              <p>Un suivi personnalisé par des coachs qualifiés pour vous guider pas à pas.</p>
            </div>
          </div>
        </section>
        
        <div className="divider"></div>
        
        {/* Section Comment ça marche */}
        <section id="section2" data-animate className={isVisible.section2 ? 'animate-fadeIn' : ''} style={{ marginBottom: '5rem', opacity: isVisible.section2 ? 1 : 0, transition: 'opacity 0.6s ease-out' }}>
          <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '1rem' }}>Comment ça marche</h2>
          <p className="lead text-center">Commencez votre parcours de transformation en seulement quelques étapes simples.</p>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3rem', marginTop: '3rem' }}>
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
              <div style={{ flex: '1 1 300px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-15px', 
                  left: '-15px', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--primary-color)', 
                  color: 'white', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 2 
                }}>1</div>
                <div className="card card-glass" style={{ marginLeft: '20px', transform: 'translateY(0)', transition: 'transform 0.5s' }}>
                  <h3>Inscrivez-vous</h3>
                  <p>Choisissez la formule qui correspond à vos besoins et créez votre compte en quelques clics.</p>
                  <div className="badge">Simple</div>
                  <div className="badge">Rapide</div>
                  <Link to="/subscribe" className="btn btn-outline" style={{ marginTop: '1rem' }}>Voir les formules</Link>
                </div>
              </div>
              
              <div style={{ flex: '1 1 300px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-15px', 
                  left: '-15px', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--primary-color)', 
                  color: 'white', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 2
                }}>2</div>
                <div className="card card-glass" style={{ marginLeft: '20px', transform: 'translateY(0)', transition: 'transform 0.5s' }}>
                  <h3>Complétez le questionnaire</h3>
                  <p>Répondez à quelques questions pour nous permettre de personnaliser votre programme.</p>
                  <div className="badge">Personnalisé</div>
                  <div className="badge">Précis</div>
                  <Link to="/questionnaire" className="btn btn-outline" style={{ marginTop: '1rem' }}>Voir le questionnaire</Link>
                </div>
              </div>
            </div>
            
            <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '2rem' }}>
              <div style={{ flex: '1 1 300px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-15px', 
                  left: '-15px', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--primary-color)', 
                  color: 'white', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 2
                }}>3</div>
                <div className="card card-glass" style={{ marginLeft: '20px', transform: 'translateY(0)', transition: 'transform 0.5s' }}>
                  <h3>Recevez votre programme</h3>
                  <p>Accédez à votre programme personnalisé d'entraînement et de nutrition.</p>
                  <div className="badge">Sur mesure</div>
                  <div className="badge">Adaptatif</div>
                </div>
              </div>
              
              <div style={{ flex: '1 1 300px', position: 'relative' }}>
                <div style={{ 
                  position: 'absolute', 
                  top: '-15px', 
                  left: '-15px', 
                  width: '50px', 
                  height: '50px', 
                  borderRadius: '50%', 
                  backgroundColor: 'var(--primary-color)', 
                  color: 'white', 
                  display: 'flex', 
                  justifyContent: 'center', 
                  alignItems: 'center', 
                  fontSize: '1.5rem', 
                  fontWeight: 'bold', 
                  boxShadow: 'var(--shadow-md)',
                  zIndex: 2
                }}>4</div>
                <div className="card card-glass" style={{ marginLeft: '20px', transform: 'translateY(0)', transition: 'transform 0.5s' }}>
                  <h3>Suivez vos progrès</h3>
                  <p>Visualisez votre progression et ajustez votre programme en fonction de vos résultats.</p>
                  <div className="badge">Mesurable</div>
                  <div className="badge">Motivant</div>
                  <Link to="/dashboard" className="btn btn-outline" style={{ marginTop: '1rem' }}>Voir le tableau de bord</Link>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <div className="divider"></div>
        
        {/* Témoignages */}
        <section id="section3" data-animate className={isVisible.section3 ? 'animate-fadeIn' : ''} style={{ marginBottom: '4rem', opacity: isVisible.section3 ? 1 : 0, transition: 'opacity 0.6s ease-out' }}>
          <h2 className="text-gradient" style={{ textAlign: 'center', marginBottom: '1rem' }}>Ce que nos membres disent</h2>
          <p className="lead text-center">Découvrez les histoires de réussite de personnes comme vous.</p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
            <div className="testimonial">
              <div className="testimonial-content">
                "Grâce à iPaty, j'ai perdu 10kg en 3 mois. Le programme personnalisé et le suivi m'ont vraiment aidé à rester motivée."
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">SC</div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Sophie C.</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Membre depuis 6 mois</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                "En tant que débutant, je ne savais pas par où commencer. iPaty m'a guidé pas à pas et maintenant je me sens en pleine forme !"
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">TM</div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Thomas M.</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Membre depuis 3 mois</div>
                </div>
              </div>
            </div>
            
            <div className="testimonial">
              <div className="testimonial-content">
                "Les conseils nutritionnels ont complètement transformé mon rapport à l'alimentation. Je me sens plus énergique et en meilleure santé."
              </div>
              <div className="testimonial-author">
                <div className="testimonial-avatar">LB</div>
                <div>
                  <div style={{ fontWeight: 'bold' }}>Laura B.</div>
                  <div style={{ fontSize: '0.9rem', color: 'var(--text-light)' }}>Membre depuis 8 mois</div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section style={{ marginBottom: '3rem' }}>
          <div style={{ 
            background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1) 0%, rgba(79, 70, 229, 0.2) 100%)', 
            padding: '3rem 2rem', 
            borderRadius: 'var(--radius-lg)', 
            textAlign: 'center', 
            boxShadow: 'var(--shadow-md)',
            position: 'relative',
            overflow: 'hidden'
          }}>
            <div style={{ 
              position: 'absolute', 
              width: '300px', 
              height: '300px', 
              borderRadius: '50%', 
              background: 'linear-gradient(135deg, rgba(79, 70, 229, 0.1), rgba(79, 70, 229, 0.3))', 
              top: '-150px', 
              right: '-150px', 
              zIndex: 0 
            }}></div>
            <div style={{ position: 'relative', zIndex: 1 }}>
              <h2 className="text-shine">Prêt à commencer votre transformation ?</h2>
              <p style={{ maxWidth: '600px', margin: '1rem auto 2rem', fontSize: '1.125rem' }}>Rejoignez des milliers de personnes qui ont déjà transformé leur corps et leur vie grâce à iPaty.</p>
              <Link to="/subscribe" className="btn btn-lg btn-rounded animate-pulse" style={{ padding: '1rem 2.5rem', fontSize: '1.1rem' }}>Je commence maintenant</Link>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default LandingPage;

