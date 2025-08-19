import React, { useState, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { MaterialIcon } from './MaterialIcon';

const LanguageSelector: React.FC = () => {
  const { i18n, t } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages = [
    { code: 'de', name: t('languages.de'), flag: 'language' },
    { code: 'en', name: t('languages.en'), flag: 'language' },
    { code: 'fr', name: t('languages.fr'), flag: 'language' }
  ];

  const currentLanguage = languages.find(lang => lang.code === i18n.language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
    setIsOpen(false);
    
    // Update URL to include language parameter
    const currentPath = window.location.pathname;
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set('lang', languageCode);
    
    const newUrl = `${currentPath}?${searchParams.toString()}`;
    window.history.replaceState({}, '', newUrl);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg hover:bg-gray-100 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
        aria-label="Select language"
      >
        <MaterialIcon name="translate" className="text-gray-600" size="small" />
        <span className="text-sm font-medium text-gray-700 hidden sm:inline">
          {currentLanguage.name}
        </span>
        <MaterialIcon 
          name={isOpen ? "expand_less" : "expand_more"} 
          className="text-gray-600" 
          size="small" 
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-xl shadow-lg border border-gray-200 py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((language) => (
            <button
              key={language.code}
              onClick={() => handleLanguageChange(language.code)}
              className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-gray-50 transition-colors duration-200 ${
                i18n.language === language.code 
                  ? 'bg-blue-50 text-blue-600 border-r-2 border-blue-600' 
                  : 'text-gray-700'
              }`}
            >
              <MaterialIcon 
                name="language" 
                className={i18n.language === language.code ? 'text-blue-600' : 'text-gray-400'} 
                size="small" 
              />
              <span className="font-medium">{language.name}</span>
              {i18n.language === language.code && (
                <MaterialIcon name="check" className="text-blue-600 ml-auto" size="small" />
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;