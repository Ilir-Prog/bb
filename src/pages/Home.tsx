import React from 'react';
import { Link } from 'react-router-dom';
import { AnimatedSection } from '../components/AnimatedSection';
import { MaterialIcon } from '../components/MaterialIcon';

const Home: React.FC = () => {
  const features = [
    {
      icon: 'content_cut',
      title: 'Coupes Modernes',
      description: 'Styles contemporains et classiques adaptés à votre personnalité'
    },
    {
      icon: 'face',
      title: 'Soins Barbe',
      description: 'Taille, modelage et soins premium pour votre barbe'
    },
    {
      icon: 'schedule',
      title: 'Service Rapide',
      description: 'Rendez-vous flexibles et service efficace'
    },
    {
      icon: 'star',
      title: 'Expertise',
      description: 'Plus de 10 ans d\'expérience dans l\'art de la coiffure masculine'
    }
  ];

  const stats = [
    { number: '500+', label: 'Clients Satisfaits' },
    { number: '10+', label: 'Années d\'Expérience' },
    { number: '3', label: 'Barbiers Experts' },
    { number: '15+', label: 'Services Proposés' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: 'url("https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop")',
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        ></div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              Barber
              <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                Metropole
              </span>
            </h1>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={200}>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto leading-relaxed">
              L'art de la coiffure masculine à Lausanne. Style, tradition et modernité 
              dans un cadre professionnel et chaleureux.
            </p>
          </AnimatedSection>
          
          <AnimatedSection animation="fadeInUp" delay={400}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href="tel:+41213111532"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-blue-500/25 flex items-center space-x-2"
              >
                <MaterialIcon name="phone" />
                <span>Réserver Maintenant</span>
              </a>
              <Link
                to="/services"
                className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-gray-900 transition-all duration-300 flex items-center space-x-2"
              >
                <MaterialIcon name="visibility" />
                <span>Nos Services</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <div className="w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{ animationDelay: '2s' }}>
          <div className="w-32 h-32 bg-indigo-500/20 rounded-full blur-xl"></div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Pourquoi Nous Choisir ?
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Une expérience unique alliant savoir-faire traditionnel et techniques modernes
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MaterialIcon name={feature.icon} className="text-white" size="large" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <AnimatedSection key={index} animation="scaleIn" delay={index * 100}>
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stat.number}</div>
                  <div className="text-blue-100 font-medium">{stat.label}</div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt pour un Nouveau Style ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Prenez rendez-vous dès aujourd'hui et découvrez l'excellence de nos services
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+41213111532"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
              >
                <MaterialIcon name="phone" />
                <span>+41 21 311 15 32</span>
              </a>
              <Link
                to="/contact"
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MaterialIcon name="location_on" />
                <span>Nous Trouver</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Home;