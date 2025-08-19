import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { MaterialIcon } from '../components/MaterialIcon';

const Services: React.FC = () => {
  const services = [
    {
      icon: 'content_cut',
      title: 'Coupe Homme',
      description: 'Coupe moderne ou classique adaptée à votre style et morphologie',
      features: ['Consultation personnalisée', 'Shampoing inclus', 'Finition précise'],
      price: 'dès 35 CHF',
      image: 'https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: 'face',
      title: 'Taille de Barbe',
      description: 'Modelage et entretien professionnel de votre barbe',
      features: ['Taille précise', 'Soin hydratant', 'Conseils d\'entretien'],
      price: 'dès 25 CHF',
      image: 'https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: 'spa',
      title: 'Rasage Traditionnel',
      description: 'Rasage à l\'ancienne avec serviette chaude et produits premium',
      features: ['Serviette chaude', 'Rasoir traditionnel', 'Soin après-rasage'],
      price: 'dès 40 CHF',
      image: 'https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: 'auto_awesome',
      title: 'Service Complet',
      description: 'Coupe + barbe + soins pour un look parfait',
      features: ['Coupe personnalisée', 'Taille de barbe', 'Soins premium'],
      price: 'dès 50 CHF',
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: 'school',
      title: 'Tarif Étudiant',
      description: 'Coupe spéciale pour étudiants avec carte valide',
      features: ['Prix préférentiel', 'Même qualité', 'Styles modernes'],
      price: 'dès 25 CHF',
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: 'child_care',
      title: 'Coupe Enfant',
      description: 'Coupe adaptée aux plus jeunes dans un environnement bienveillant',
      features: ['Approche douce', 'Styles adaptés', 'Parents bienvenus'],
      price: 'dès 20 CHF',
      image: 'https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    }
  ];

  const additionalServices = [
    { icon: 'local_mall', title: 'Produits de Soin', description: 'Vente de produits premium pour l\'entretien à domicile' },
    { icon: 'card_giftcard', title: 'Cartes Cadeaux', description: 'Offrez une expérience unique à vos proches' },
    { icon: 'event', title: 'Événements', description: 'Services à domicile pour mariages et événements spéciaux' },
    { icon: 'group', title: 'Groupes', description: 'Tarifs préférentiels pour les groupes et entreprises' }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nos Services
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Découvrez notre gamme complète de services de coiffure masculine, 
              alliant tradition et modernité pour un résultat exceptionnel.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative h-48 overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                      <MaterialIcon name={service.icon} className="text-blue-600" size="large" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                      {service.price}
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <MaterialIcon name="check_circle" className="text-green-500 mr-2" size="small" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="tel:+41213111532"
                      className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-200 flex items-center justify-center space-x-2 group-hover:scale-105"
                    >
                      <MaterialIcon name="phone" size="small" />
                      <span>Réserver</span>
                    </a>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Services Additionnels
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complétez votre expérience avec nos services supplémentaires
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className="group text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MaterialIcon name={service.icon} className="text-white" size="large" />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Notre Processus
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Une approche méthodique pour un résultat parfait
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Consultation', description: 'Analyse de vos besoins et conseils personnalisés' },
              { step: '02', title: 'Préparation', description: 'Shampoing et préparation avec produits premium' },
              { step: '03', title: 'Réalisation', description: 'Coupe et soins avec techniques professionnelles' },
              { step: '04', title: 'Finition', description: 'Styling final et conseils d\'entretien' }
            ].map((process, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 150}>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 text-2xl font-bold text-white">
                    {process.step}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{process.title}</h3>
                  <p className="text-gray-300">{process.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Réservez Votre Rendez-vous
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour bénéficier de nos services professionnels
            </p>
            <a
              href="tel:+41213111532"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <MaterialIcon name="phone" />
              <span>+41 21 311 15 32</span>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;