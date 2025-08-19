import React, { useState } from 'react';
import { AnimatedSection } from '../components/AnimatedSection';
import { MaterialIcon } from '../components/MaterialIcon';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: 'location_on',
      title: 'Adresse',
      details: ['Rue des Terreaux 25', '1003 Lausanne, Suisse'],
      action: 'https://maps.google.com/?q=Rue+des+Terreaux+25,+1003+Lausanne'
    },
    {
      icon: 'phone',
      title: 'Téléphone',
      details: ['+41 21 311 15 32'],
      action: 'tel:+41213111532'
    },
    {
      icon: 'email',
      title: 'Email',
      details: ['info@barber-metropole.ch'],
      action: 'mailto:info@barber-metropole.ch'
    },
    {
      icon: 'schedule',
      title: 'Horaires',
      details: ['Lun-Ven: 9h00 - 19h00', 'Sam: 8h00 - 17h00', 'Dim: Fermé'],
      action: null
    }
  ];

  const services = [
    'Coupe Homme',
    'Taille de Barbe',
    'Rasage Traditionnel',
    'Service Complet',
    'Coupe Étudiant',
    'Coupe Enfant',
    'Autre'
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              Contactez-Nous
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              Prenez rendez-vous ou contactez-nous pour toute question. 
              Notre équipe est à votre disposition pour vous offrir le meilleur service.
            </p>
          </AnimatedSection>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {contactInfo.map((info, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className="group bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                  <div className="bg-gradient-to-r from-blue-600 to-indigo-600 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <MaterialIcon name={info.icon} className="text-white" size="large" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 text-center mb-3">{info.title}</h3>
                  <div className="text-center space-y-1">
                    {info.details.map((detail, idx) => (
                      <p key={idx} className="text-gray-600">{detail}</p>
                    ))}
                  </div>
                  {info.action && (
                    <div className="mt-4 text-center">
                      <a
                        href={info.action}
                        target={info.action.startsWith('http') ? '_blank' : undefined}
                        rel={info.action.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-200"
                      >
                        <span className="mr-1">
                          {info.icon === 'location_on' && 'Voir sur la carte'}
                          {info.icon === 'phone' && 'Appeler'}
                          {info.icon === 'email' && 'Envoyer un email'}
                        </span>
                        <MaterialIcon name="arrow_forward" size="small" />
                      </a>
                    </div>
                  )}
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Map */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <AnimatedSection animation="fadeInLeft">
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-gray-900 mb-6">
                  Demande de Rendez-vous
                </h2>
                <p className="text-gray-600 mb-8">
                  Remplissez ce formulaire et nous vous recontacterons rapidement pour confirmer votre rendez-vous.
                </p>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="Votre nom"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                        placeholder="+41 XX XXX XX XX"
                      />
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                        Service souhaité
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      >
                        <option value="">Sélectionnez un service</option>
                        {services.map((service) => (
                          <option key={service} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                      Message
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Précisez vos préférences, créneaux souhaités..."
                    ></textarea>
                  </div>
                  
                  <button
                    type="submit"
                    className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white py-4 rounded-xl font-bold text-lg hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
                  >
                    <MaterialIcon name="send" />
                    <span>Envoyer la Demande</span>
                  </button>
                </form>
              </div>
            </AnimatedSection>

            {/* Map & Quick Contact */}
            <AnimatedSection animation="fadeInRight">
              <div className="space-y-8">
                {/* Map Placeholder */}
                <div className="h-64 rounded-2xl overflow-hidden shadow-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2744.8234567890123!2d6.6322!3d46.5197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e2f8b9a1234%3A0x5678901234567890!2sRue%20des%20Terreaux%2025%2C%201003%20Lausanne%2C%20Switzerland!5e0!3m2!1sen!2sch!4v1234567890123!5m2!1sen!2sch"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Barber Metropole Location - Rue des Terreaux 25, 1003 Lausanne"
                  ></iframe>
                </div>

                {/* Quick Contact */}
                <div className="bg-gradient-to-r from-blue-600 to-indigo-600 p-8 rounded-2xl text-white">
                  <h3 className="text-2xl font-bold mb-4">Besoin d'un Rendez-vous Urgent ?</h3>
                  <p className="mb-6 text-blue-100">
                    Appelez-nous directement pour une prise de rendez-vous immédiate ou pour toute question.
                  </p>
                  <a
                    href="tel:+41213111532"
                    className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 inline-flex items-center space-x-2"
                  >
                    <MaterialIcon name="phone" />
                    <span>+41 21 311 15 32</span>
                  </a>
                </div>

                {/* Opening Hours */}
                <div className="bg-gray-50 p-8 rounded-2xl">
                  <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                    <MaterialIcon name="schedule" className="mr-2 text-blue-600" />
                    Horaires d'Ouverture
                  </h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Lundi - Vendredi</span>
                      <span className="text-gray-600">9h00 - 19h00</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-gray-200">
                      <span className="font-semibold text-gray-700">Samedi</span>
                      <span className="text-gray-600">8h00 - 17h00</span>
                    </div>
                    <div className="flex justify-between items-center py-2">
                      <span className="font-semibold text-gray-700">Dimanche</span>
                      <span className="text-red-600 font-semibold">Fermé</span>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection animation="fadeInUp">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
                Questions Fréquentes
              </h2>
              <p className="text-xl text-gray-600">
                Trouvez rapidement les réponses à vos questions
              </p>
            </div>
          </AnimatedSection>

          <div className="space-y-6">
            {[
              {
                question: "Dois-je prendre rendez-vous ?",
                answer: "Nous recommandons fortement de prendre rendez-vous pour garantir votre créneau. Vous pouvez nous appeler ou utiliser notre formulaire de contact."
              },
              {
                question: "Acceptez-vous les cartes de crédit ?",
                answer: "Oui, nous acceptons toutes les cartes de crédit principales, les paiements en espèces et Twint."
              },
              {
                question: "Combien de temps dure une coupe ?",
                answer: "Une coupe simple dure environ 45 minutes, un service complet environ 60-90 minutes selon vos besoins."
              },
              {
                question: "Y a-t-il un parking à proximité ?",
                answer: "Plusieurs parkings publics sont disponibles à proximité, notamment le parking de la Riponne à 2 minutes à pied."
              }
            ].map((faq, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 100}>
                <div className="bg-white p-6 rounded-xl shadow-lg">
                  <h3 className="text-lg font-bold text-gray-900 mb-3 flex items-center">
                    <MaterialIcon name="help_outline" className="mr-2 text-blue-600" />
                    {faq.question}
                  </h3>
                  <p className="text-gray-600 leading-relaxed pl-8">{faq.answer}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;