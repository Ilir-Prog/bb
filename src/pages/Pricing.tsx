import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { MaterialIcon } from '../components/MaterialIcon';

const Pricing: React.FC = () => {
  const pricingPlans = [
    {
      name: 'Essentiel',
      price: '35',
      description: 'Parfait pour un look soigné au quotidien',
      features: [
        'Coupe homme personnalisée',
        'Shampoing inclus',
        'Finition précise',
        'Conseils de style'
      ],
      icon: 'content_cut',
      popular: false,
      color: 'from-gray-600 to-gray-700'
    },
    {
      name: 'Premium',
      price: '50',
      description: 'L\'expérience complète pour un style parfait',
      features: [
        'Coupe homme premium',
        'Taille et modelage de barbe',
        'Shampoing et soins',
        'Finition à chaud',
        'Conseils personnalisés',
        'Produits premium'
      ],
      icon: 'auto_awesome',
      popular: true,
      color: 'from-blue-600 to-indigo-600'
    },
    {
      name: 'Luxe',
      price: '75',
      description: 'Le summum du raffinement masculin',
      features: [
        'Service complet premium',
        'Rasage traditionnel',
        'Soins du visage',
        'Massage relaxant',
        'Produits haut de gamme',
        'Boisson offerte',
        'Durée: 90 minutes'
      ],
      icon: 'diamond',
      popular: false,
      color: 'from-purple-600 to-pink-600'
    }
  ];

  const additionalServices = [
    { service: 'Taille de barbe seule', price: '25', icon: 'face' },
    { service: 'Rasage traditionnel', price: '40', icon: 'spa' },
    { service: 'Coupe enfant (-12 ans)', price: '20', icon: 'child_care' },
    { service: 'Coupe étudiant (avec carte)', price: '25', icon: 'school' },
    { service: 'Soins du visage', price: '35', icon: 'face_retouching_natural' },
    { service: 'Shampoing + coiffage', price: '15', icon: 'water_drop' }
  ];

  const packages = [
    {
      name: 'Carte 5 Coupes',
      originalPrice: '175',
      discountPrice: '150',
      savings: '25',
      description: 'Économisez sur vos coupes régulières',
      validity: '6 mois'
    },
    {
      name: 'Carte 10 Coupes',
      originalPrice: '350',
      discountPrice: '280',
      savings: '70',
      description: 'Le meilleur rapport qualité-prix',
      validity: '12 mois'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Nos Tarifs
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Des prix transparents pour des services d'exception. 
              Choisissez la formule qui vous correspond le mieux.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Main Pricing Plans */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden ${
                  plan.popular ? 'ring-4 ring-blue-500 ring-opacity-50' : ''
                }`}>
                  {plan.popular && (
                    <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-center py-2 font-semibold">
                      ⭐ Plus Populaire
                    </div>
                  )}
                  
                  <div className={`p-8 ${plan.popular ? 'pt-12' : ''}`}>
                    <div className={`bg-gradient-to-r ${plan.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6`}>
                      <MaterialIcon name={plan.icon} className="text-white" size="large" />
                    </div>
                    
                    <h3 className="text-2xl font-bold text-gray-900 text-center mb-2">{plan.name}</h3>
                    <p className="text-gray-600 text-center mb-6">{plan.description}</p>
                    
                    <div className="text-center mb-8">
                      <span className="text-5xl font-bold text-gray-900">{plan.price}</span>
                      <span className="text-xl text-gray-600 ml-1">CHF</span>
                    </div>
                    
                    <ul className="space-y-4 mb-8">
                      {plan.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center">
                          <MaterialIcon name="check_circle" className="text-green-500 mr-3" size="small" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <a
                      href="tel:+41213111532"
                      className={`w-full py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-2 ${
                        plan.popular 
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white hover:from-blue-700 hover:to-indigo-700 shadow-lg' 
                          : 'border-2 border-gray-300 text-gray-700 hover:border-blue-500 hover:text-blue-600'
                      }`}
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
                Services à la Carte
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Complétez votre expérience avec nos services additionnels
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {additionalServices.map((service, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 50}>
                <div className="group bg-gray-50 p-6 rounded-xl hover:bg-white hover:shadow-lg transition-all duration-300">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-12 h-12 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <MaterialIcon name={service.icon} className="text-white" />
                      </div>
                      <span className="font-semibold text-gray-900">{service.service}</span>
                    </div>
                    <span className="text-2xl font-bold text-blue-600">{service.price} CHF</span>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Package Deals */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Cartes Avantages
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Économisez avec nos formules d'abonnement
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {packages.map((pkg, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20 hover:bg-white/20 transition-all duration-300">
                  <div className="text-center mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{pkg.name}</h3>
                    <p className="text-gray-300">{pkg.description}</p>
                  </div>
                  
                  <div className="text-center mb-6">
                    <div className="flex items-center justify-center space-x-4">
                      <span className="text-2xl text-gray-400 line-through">{pkg.originalPrice} CHF</span>
                      <span className="text-4xl font-bold text-white">{pkg.discountPrice} CHF</span>
                    </div>
                    <div className="bg-green-500 text-white px-4 py-1 rounded-full text-sm font-semibold mt-2 inline-block">
                      Économie: {pkg.savings} CHF
                    </div>
                  </div>
                  
                  <div className="text-center mb-6">
                    <span className="text-gray-300">Validité: {pkg.validity}</span>
                  </div>
                  
                  <a
                    href="tel:+41213111532"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-3 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2"
                  >
                    <MaterialIcon name="phone" size="small" />
                    <span>Commander</span>
                  </a>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Special Offers */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <AnimatedSection animation="fadeInUp">
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <MaterialIcon name="school" className="text-white mb-4" size="large" />
                <h3 className="text-xl font-bold text-white mb-2">Étudiants</h3>
                <p className="text-blue-100">-30% sur présentation de la carte étudiant</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={100}>
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <MaterialIcon name="group" className="text-white mb-4" size="large" />
                <h3 className="text-xl font-bold text-white mb-2">Groupes</h3>
                <p className="text-blue-100">Tarifs préférentiels pour 3 personnes et plus</p>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInUp" delay={200}>
              <div className="text-center bg-white/10 backdrop-blur-sm p-6 rounded-xl">
                <MaterialIcon name="card_giftcard" className="text-white mb-4" size="large" />
                <h3 className="text-xl font-bold text-white mb-2">Cartes Cadeaux</h3>
                <p className="text-blue-100">Le cadeau parfait pour vos proches</p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Prêt à Réserver ?
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Contactez-nous dès maintenant pour prendre rendez-vous et bénéficier de nos tarifs attractifs
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:+41213111532"
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-2xl flex items-center justify-center space-x-2"
              >
                <MaterialIcon name="phone" />
                <span>+41 21 311 15 32</span>
              </a>
              <a
                href="mailto:info@barber-metropole.ch"
                className="border-2 border-blue-500 text-blue-400 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-500 hover:text-white transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <MaterialIcon name="email" />
                <span>Email</span>
              </a>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Pricing;