import React from 'react';
import { useTranslation } from 'react-i18next';
import { AnimatedSection } from '../components/AnimatedSection';
import { MaterialIcon } from '../components/MaterialIcon';

const Services: React.FC = () => {
  const { t } = useTranslation();

  const services = [
    {
      icon: 'content_cut',
      title: t('services.haircut.title'),
      description: t('services.haircut.description'),
      features: [
        t('services.haircut.features.consultation'),
        t('services.haircut.features.shampoo'),
        t('services.haircut.features.precision')
      ],
      price: t('services.haircut.price'),
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=720,h=720,fit=crop,trim=100;0;0;0/AzG8MM0DWGu7eykq/cb-m5K2VvbWlJfGGKv6.jpg'
    },
    {
      icon: 'face',
      title: t('services.beard.title'),
      description: t('services.beard.description'),
      features: [
        t('services.beard.features.precision'),
        t('services.beard.features.care'),
        t('services.beard.features.advice')
      ],
      price: t('services.beard.price'),
      image: 'https://images.unsplash.com/photo-1635273051839-003bf06a8751?ixid=M3wzOTE5Mjl8MHwxfHNlYXJjaHwxM3x8YmFyYmVyfGVufDB8fHx8MTcwMTY4NzA2Mnww&ixlib=rb-4.0.3&auto=format&fit=crop&w=656&h=630'
    },
    {
      icon: 'auto_awesome',
      title: t('services.complete.title'),
      description: t('services.complete.description'),
      features: [
        t('services.complete.features.haircut'),
        t('services.complete.features.beard'),
        t('services.complete.features.premium')
      ],
      price: t('services.complete.price'),
      image: 'https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: 'school',
      title: t('services.student.title'),
      description: t('services.student.description'),
      features: [
        t('services.student.features.price'),
        t('services.student.features.quality'),
        t('services.student.features.modern')
      ],
      price: t('services.student.price'),
      image: 'https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop'
    },
    {
      icon: 'child_care',
      title: t('services.child.title'),
      description: t('services.child.description'),
      features: [
        t('services.child.features.gentle'),
        t('services.child.features.adapted'),
        t('services.child.features.parents')
      ],
      price: t('services.child.price'),
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=720,h=720,fit=crop,trim=0;0;24.94061757719715;0/AzG8MM0DWGu7eykq/enfnt-AR076JyoDXcJoPDb.jpg'
    },
    {
      icon: 'water_drop',
      title: 'Shampoo + Styling',
      description: 'Professional hair wash and styling service',
      features: [
        'Premium shampoo',
        'Professional styling',
        'Quick service'
      ],
      price: 'from 15 CHF',
      image: 'https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=656,h=630,fit=crop/AzG8MM0DWGu7eykq/barbe-YKba5JN8vjUEGa1w.jpg'
    }
  ];

  const additionalServices = [
    { icon: 'local_mall', title: t('services.additional.products.title'), description: t('services.additional.products.description') },
    { icon: 'card_giftcard', title: t('services.additional.gifts.title'), description: t('services.additional.gifts.description') },
    { icon: 'event', title: t('services.additional.events.title'), description: t('services.additional.events.description') },
    { icon: 'group', title: t('services.additional.groups.title'), description: t('services.additional.groups.description') }
  ];

  return (
    <div className="pt-16">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <AnimatedSection animation="fadeInUp">
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
              {t('services.hero.title')}
            </h1>
            <p className="text-xl text-blue-100 max-w-3xl mx-auto">
              {t('services.hero.subtitle')}
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
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm p-3 rounded-xl">
                      <MaterialIcon name={service.icon} className="text-blue-600" size="large" />
                    </div>
                    <div className="absolute bottom-4 right-4 bg-blue-600 text-white px-4 py-2 rounded-lg font-bold">
                      {service.price}
                    </div>
                  </div>
                  
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">{service.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{service.description}</p>
                    
                    <ul className="space-y-2 flex-grow">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center text-gray-700">
                          <MaterialIcon name="check_circle" className="text-green-500 mr-2" size="small" />
                          {feature}
                        </li>
                      ))}
                    </ul>
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
                {t('services.additional.title')}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {t('services.additional.subtitle')}
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
                {t('services.process.title')}
              </h2>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                {t('services.process.subtitle')}
              </p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { icon: 'psychology', title: t('services.process.consultation.title'), description: t('services.process.consultation.description') },
              { icon: 'spa', title: t('services.process.preparation.title'), description: t('services.process.preparation.description') },
              { icon: 'content_cut', title: t('services.process.execution.title'), description: t('services.process.execution.description') },
              { icon: 'auto_awesome', title: t('services.process.finishing.title'), description: t('services.process.finishing.description') }
            ].map((process, index) => (
              <AnimatedSection key={index} animation="fadeInUp" delay={index * 150}>
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-indigo-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <MaterialIcon name={process.icon} className="text-white" size="large" />
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
              {t('services.cta.title')}
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              {t('services.cta.subtitle')}
            </p>
            <a
              href="tel:+41213111532"
              className="inline-flex items-center space-x-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-2xl"
            >
              <MaterialIcon name="phone" />
              <span>{t('common.phone')}</span>
            </a>
          </AnimatedSection>
        </div>
      </section>
    </div>
  );
};

export default Services;