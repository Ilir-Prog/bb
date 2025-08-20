import React from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { MaterialIcon } from '../components/MaterialIcon';
import { teamMembers } from '../data/team';
import { testimonials } from '../data/testimonials';

const About: React.FC = () => {
  const values = [
    {
      icon: 'star',
      title: 'Excellence',
      description: 'Nous visons l\'excellence dans chaque coupe, chaque service, chaque interaction avec nos clients.'
    },
    {
      icon: 'handshake',
      title: 'Confiance',
      description: 'Nous construisons des relations durables basées sur la confiance et la satisfaction client.'
    },
    {
      icon: 'psychology',
      title: 'Innovation',
      description: 'Nous restons à la pointe des tendances tout en respectant les techniques traditionnelles.'
    },
    {
      icon: 'favorite',
      title: 'Passion',
      description: 'Notre passion pour l\'art de la coiffure masculine guide chacune de nos actions.'
    }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-blue-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
                À Propos de
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
                  Barber Metropole
                </span>
              </h1>
              <p className="text-xl text-gray-300 mb-8 leading-relaxed">
                Depuis plus de 10 ans, nous perpétuons l'art de la coiffure masculine à Lausanne, 
                alliant savoir-faire traditionnel et techniques modernes pour offrir une expérience unique.
              </p>
              <div className="flex items-center space-x-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">10+</div>
                  <div className="text-gray-400">Années</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">500+</div>
                  <div className="text-gray-400">Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400">3</div>
                  <div className="text-gray-400">Experts</div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInRight">
              <div className="relative">
                <img 
                  src="https://plus.unsplash.com/premium_photo-1677444205097-de9282585eec?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  alt="Barber Metropole Salon"
                  className="rounded-2xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 bg-blue-600 p-6 rounded-2xl shadow-xl">
                  <MaterialIcon name="content_cut" className="text-white" size="large" />
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <img 
                src="https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=600&h=500&fit=crop"
                alt="Notre Histoire"
                className="rounded-2xl shadow-lg"
              />
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInRight">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Notre Histoire
              </h2>
              <div className="space-y-6 text-gray-600 leading-relaxed">
                <p>
                  Barber Metropole a vu le jour en 2014 avec une vision simple : créer un espace 
                  où l'art traditionnel de la barberie rencontre les exigences modernes de style et de service.
                </p>
                <p>
                  Situé au cœur de Lausanne, rue des Terreaux 25, notre salon est devenu une référence 
                  pour les hommes soucieux de leur apparence. Nous avons bâti notre réputation sur 
                  l'excellence de nos services et la qualité de notre accueil.
                </p>
                <p>
                  Aujourd'hui, notre équipe de barbiers expérimentés continue d'innover tout en 
                  préservant les techniques ancestrales qui font la richesse de notre métier.
                </p>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Nos Valeurs
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Les principes qui guident notre travail au quotidien
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className="group text-center p-8 bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                    <MaterialIcon name={value.icon} className="text-white" size="large" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{value.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{value.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Notre Équipe
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Des professionnels passionnés à votre service
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} animation="fadeInUp" delay={index * 100}>
                <div className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative h-80 overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-xl font-bold">{member.name}</h3>
                      <p className="text-blue-200">{member.role}</p>
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <p className="text-gray-600 mb-4">{member.bio}</p>
                    <div className="mb-4">
                      <span className="text-sm font-semibold text-blue-600">{member.experience}</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {member.specialties.map((specialty, idx) => (
                        <span key={idx} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                          {specialty}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-indigo-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Ce Que Disent Nos Clients
              </h2>
              <p className="text-xl text-blue-100 max-w-3xl mx-auto">
                Leur satisfaction est notre plus belle récompense
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} animation="fadeInUp" delay={index * 100}>
                <div className="bg-white/10 backdrop-blur-sm p-8 rounded-2xl border border-white/20">
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <MaterialIcon key={i} name="star" className="text-yellow-400" size="small" />
                    ))}
                  </div>
                  <p className="text-white mb-6 leading-relaxed">"{testimonial.content}"</p>
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4"
                    />
                    <div>
                      <h4 className="text-white font-semibold">{testimonial.name}</h4>
                      <p className="text-blue-200 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Location Section */}
      <section className="py-20 bg-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection animation="fadeInLeft">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Nous Trouver
              </h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MaterialIcon name="location_on" className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Adresse</h3>
                    <p className="text-gray-300">Rue des Terreaux 25<br />1003 Lausanne, Suisse</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MaterialIcon name="schedule" className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Horaires</h3>
                    <p className="text-gray-300">
                      Lun-Ven: 9h00 - 19h00<br />
                      Samedi: 8h00 - 17h00<br />
                      Dimanche: Fermé
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-4">
                  <div className="bg-blue-600 p-3 rounded-lg">
                    <MaterialIcon name="phone" className="text-white" />
                  </div>
                  <div>
                    <h3 className="text-white font-semibold mb-1">Téléphone</h3>
                    <a href="tel:+41213111532" className="text-blue-400 hover:text-blue-300 transition-colors">
                      +41 21 311 15 32
                    </a>
                  </div>
                </div>
              </div>
            </AnimatedSection>
            
            <AnimatedSection animation="fadeInRight">
              <div className="bg-gray-800 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-white mb-6">Réservez Maintenant</h3>
                <p className="text-gray-300 mb-6">
                  Contactez-nous pour prendre rendez-vous et découvrir l'excellence de nos services.
                </p>
                <a
                  href="tel:+41213111532"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <MaterialIcon name="phone" />
                  <span>Appeler Maintenant</span>
                </a>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;