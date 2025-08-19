import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { MaterialIcon } from './MaterialIcon';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const quickLinks = [
    { name: t('nav.home'), path: '/' },
    { name: t('nav.services'), path: '/services' },
    { name: t('nav.about'), path: '/about' },
    { name: t('nav.pricing'), path: '/pricing' },
    { name: t('nav.contact'), path: '/contact' },
  ];

  const services = [
    'Coupe Homme',
    'Taille de Barbe',
    'Rasage Traditionnel',
    'Service Complet',
    'Coupe Étudiant',
    'Coupe Enfant'
  ];

  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=198,fit=crop,q=95/AzG8MM0DWGu7eykq/nb-removebg-preview-mp8644ePn4iy67wm.png"
                alt="Barber Metropole Lausanne"
                className="h-10 w-auto"
              />
              <span className="text-xl font-bold">Barber Metropole</span>
            </div>
            <p className="text-gray-300 leading-relaxed">
              L'art de la coiffure masculine à Lausanne. Style, tradition et modernité 
              dans un cadre professionnel et chaleureux.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <MaterialIcon name="facebook" size="large" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <MaterialIcon name="instagram" size="large" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200">
                <MaterialIcon name="twitter" size="large" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link 
                    to={link.path}
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-bold mb-4">Nos Services</h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <span className="text-gray-300">{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MaterialIcon name="location_on" className="text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>Rue des Terreaux 25</p>
                  <p>1003 Lausanne, Suisse</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <MaterialIcon name="phone" className="text-blue-400" />
                <a 
                  href="tel:+41213111532"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  +41 21 311 15 32
                </a>
              </div>
              
              <div className="flex items-center space-x-3">
                <MaterialIcon name="email" className="text-blue-400" />
                <a 
                  href="mailto:info@barber-metropole.ch"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@barber-metropole.ch
                </a>
              </div>
              
              <div className="flex items-start space-x-3">
                <MaterialIcon name="schedule" className="text-blue-400 mt-1" />
                <div className="text-gray-300">
                  <p>Lun-Ven: 9h00 - 19h00</p>
                  <p>Sam: 8h00 - 17h00</p>
                  <p>Dim: Fermé</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 Barber Metropole Lausanne. Tous droits réservés.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Politique de confidentialité
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors duration-200">
              Conditions d'utilisation
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;