import React from 'react';
import { Link } from 'react-router-dom';
import { MaterialIcon } from '../components/MaterialIcon';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center px-4">
      <div className="text-center">
        <div className="mb-8">
          <MaterialIcon name="search_off" className="text-white mx-auto mb-4" size="large" />
          <h1 className="text-6xl md:text-8xl font-bold text-white mb-4">404</h1>
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Page Non Trouvée
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-md mx-auto">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/"
            className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center space-x-2"
          >
            <MaterialIcon name="home" />
            <span>Retour à l'Accueil</span>
          </Link>
          
          <Link
            to="/contact"
            className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center space-x-2"
          >
            <MaterialIcon name="phone" />
            <span>Nous Contacter</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;