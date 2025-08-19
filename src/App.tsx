import React, { useState, useEffect } from 'react';
import { AnimatedSection } from './components/AnimatedSection';
import { MaterialIcon } from './components/MaterialIcon';
import { testimonials } from './data/testimonials';
import { portfolioItems } from './data/portfolio';
import { teamMembers } from './data/team';
import { blogPosts } from './data/blog';
import { faqItems } from './data/faq';

// Enhanced translations with all new sections
const translations = {
  fr: {
    meta: {
      title: 'Barber Metropole Lausanne - Coiffeur Barbier Professionnel',
      description: 'Salon de coiffure masculin professionnel à Lausanne. Coupe homme, barbe, services étudiants. Rue des Terreaux 25. Prenez rendez-vous: +41 21 311 15 32'
    },
    nav: {
      home: 'Accueil',
      about: 'À Propos',
      services: 'Services',
      portfolio: 'Portfolio',
      team: 'Équipe',
      testimonials: 'Témoignages',
      blog: 'Blog',
      faq: 'FAQ',
      pricing: 'Tarifs',
      contact: 'Contact'
    },
    hero: {
      badge: 'Barbier Professionnel depuis 2015',
      title: 'L\'Excellence en Coiffure Masculine',
      subtitle: 'Barber Metropole Lausanne',
      description: 'Découvrez l\'art traditionnel de la barberie dans un cadre moderne au cœur de Lausanne. Notre équipe de maîtres barbiers vous offre une expérience unique alliant savoir-faire ancestral et techniques contemporaines.',
      cta: 'Réserver Maintenant',
      cta2: 'Découvrir nos Services',
      stats: [
        { number: '2000+', label: 'Clients Satisfaits' },
        { number: '8+', label: 'Années d\'Expérience' },
        { number: '5★', label: 'Note Moyenne' }
      ]
    },
    about: {
      title: 'Pourquoi Choisir Metropole ?',
      subtitle: 'L\'excellence au service de votre style',
      description: 'Depuis 2015, Barber Metropole Lausanne s\'est imposé comme la référence en matière de coiffure masculine dans la région. Notre passion pour l\'art de la barberie et notre engagement envers l\'excellence nous permettent d\'offrir à nos clients une expérience unique et personnalisée.',
      features: [
        {
          icon: 'military_tech',
          title: 'Expertise Reconnue',
          description: 'Nos barbiers certifiés maîtrisent les techniques classiques et modernes'
        },
        {
          icon: 'person_pin',
          title: 'Service Personnalisé',
          description: 'Chaque coupe est adaptée à votre morphologie et votre style de vie'
        },
        {
          icon: 'star',
          title: 'Produits Premium',
          description: 'Nous utilisons exclusivement des produits haut de gamme pour votre bien-être'
        },
        {
          icon: 'schedule',
          title: 'Flexibilité Horaire',
          description: 'Horaires étendus pour s\'adapter à votre emploi du temps'
        }
      ]
    },
    services: {
      title: 'Nos Services Premium',
      subtitle: 'Des prestations d\'exception pour l\'homme moderne',
      items: [
        {
          name: 'Coupe Homme',
          description: 'Coupe personnalisée selon votre style et morphologie. Consultation incluse.',
          price: 'dès 35 CHF',
          duration: '45 min',
          popular: false,
          features: ['Consultation style', 'Shampoing inclus', 'Finition précise']
        },
        {
          name: 'Coupe + Barbe',
          description: 'Service complet : coupe moderne + taille et soin de barbe professionnel.',
          price: 'dès 50 CHF',
          duration: '60 min',
          popular: true,
          features: ['Service complet', 'Soin hydratant', 'Conseils entretien']
        },
        {
          name: 'Soin Barbe',
          description: 'Taille précise, modelage et soin hydratant pour une barbe impeccable.',
          price: 'dès 25 CHF',
          duration: '30 min',
          popular: false,
          features: ['Taille précise', 'Huile nourrissante', 'Modelage expert']
        },
        {
          name: 'Rasage Traditionnel',
          description: 'Rasage à l\'ancienne avec serviette chaude et produits premium.',
          price: 'dès 40 CHF',
          duration: '45 min',
          popular: false,
          features: ['Serviette chaude', 'Rasoir traditionnel', 'Soin après-rasage']
        }
      ]
    },
    portfolio: {
      title: 'Notre Portfolio',
      subtitle: 'Découvrez nos réalisations',
      categories: ['Tous', 'Coupe Homme', 'Barbe', 'Service Complet', 'Coupe Étudiant']
    },
    team: {
      title: 'Notre Équipe',
      subtitle: 'Des professionnels passionnés à votre service',
      specialties: 'Spécialités'
    },
    testimonials: {
      title: 'Ce que disent nos clients',
      subtitle: 'Témoignages authentiques de satisfaction'
    },
    blog: {
      title: 'Blog & Conseils',
      subtitle: 'Actualités et conseils d\'experts',
      readMore: 'Lire la suite',
      readTime: 'min de lecture'
    },
    faq: {
      title: 'Questions Fréquentes',
      subtitle: 'Trouvez rapidement les réponses à vos questions'
    },
    pricing: {
      title: 'Nos Tarifs',
      subtitle: 'Transparence et qualité garanties',
      student: 'Tarif Étudiant/Enfant',
      studentDesc: 'Tarif préférentiel pour étudiants et enfants jusqu\'à 25 ans (sur présentation d\'une pièce justificative)',
      studentPrice: 'dès 25 CHF'
    },
    contact: {
      title: 'Prenez Rendez-vous',
      subtitle: 'Contactez-nous pour réserver votre créneau',
      form: {
        title: 'Réservation en Ligne',
        name: 'Nom Complet *',
        email: 'Email *',
        phone: 'Téléphone',
        service: 'Service Souhaité',
        date: 'Date Préférée',
        message: 'Message Complémentaire',
        submit: 'Envoyer la Demande',
        success: 'Demande envoyée ! Nous vous recontacterons rapidement.',
        selectService: 'Choisissez un service'
      },
      info: {
        title: 'Informations Pratiques',
        hours: 'Horaires d\'Ouverture',
        hoursDetail: [
          'Lundi - Vendredi: 9h00 - 19h00',
          'Samedi: 9h00 - 18h00',
          'Dimanche: Fermé'
        ],
        location: 'Notre Adresse'
      }
    },
    footer: {
      rights: 'Tous droits réservés.',
      followUs: 'Suivez-nous',
      quickLinks: 'Liens Rapides',
      services: 'Services',
      contact: 'Contact'
    }
  },
  en: {
    meta: {
      title: 'Barber Metropole Lausanne - Professional Men\'s Barber Shop',
      description: 'Professional men\'s barbershop in Lausanne. Haircuts, beard services, student rates. Rue des Terreaux 25. Book now: +41 21 311 15 32'
    },
    nav: {
      home: 'Home',
      about: 'About',
      services: 'Services',
      portfolio: 'Portfolio',
      team: 'Team',
      testimonials: 'Testimonials',
      blog: 'Blog',
      faq: 'FAQ',
      pricing: 'Pricing',
      contact: 'Contact'
    },
    hero: {
      badge: 'Professional Barber since 2015',
      title: 'Excellence in Men\'s Grooming',
      subtitle: 'Barber Metropole Lausanne',
      description: 'Discover the traditional art of barbering in a modern setting in the heart of Lausanne. Our team of master barbers offers you a unique experience combining ancestral know-how and contemporary techniques.',
      cta: 'Book Now',
      cta2: 'Discover our Services',
      stats: [
        { number: '2000+', label: 'Happy Clients' },
        { number: '8+', label: 'Years Experience' },
        { number: '5★', label: 'Average Rating' }
      ]
    },
    about: {
      title: 'Why Choose Metropole?',
      subtitle: 'Excellence at the service of your style',
      description: 'Since 2015, Barber Metropole Lausanne has established itself as the reference in men\'s grooming in the region. Our passion for the art of barbering and our commitment to excellence allow us to offer our clients a unique and personalized experience.',
      features: [
        {
          icon: 'military_tech',
          title: 'Recognized Expertise',
          description: 'Our certified barbers master both classic and modern techniques'
        },
        {
          icon: 'person_pin',
          title: 'Personalized Service',
          description: 'Every cut is tailored to your face shape and lifestyle'
        },
        {
          icon: 'star',
          title: 'Premium Products',
          description: 'We exclusively use high-end products for your well-being'
        },
        {
          icon: 'schedule',
          title: 'Flexible Hours',
          description: 'Extended hours to fit your schedule'
        }
      ]
    },
    services: {
      title: 'Our Premium Services',
      subtitle: 'Exceptional services for the modern man',
      items: [
        {
          name: 'Men\'s Haircut',
          description: 'Personalized cut according to your style and face shape. Consultation included.',
          price: 'from 35 CHF',
          duration: '45 min',
          popular: false,
          features: ['Style consultation', 'Shampoo included', 'Precise finishing']
        },
        {
          name: 'Haircut + Beard',
          description: 'Complete service: modern cut + professional beard trimming and care.',
          price: 'from 50 CHF',
          duration: '60 min',
          popular: true,
          features: ['Complete service', 'Moisturizing care', 'Maintenance advice']
        },
        {
          name: 'Beard Care',
          description: 'Precise trimming, shaping and moisturizing treatment for perfect beard.',
          price: 'from 25 CHF',
          duration: '30 min',
          popular: false,
          features: ['Precise trimming', 'Nourishing oil', 'Expert shaping']
        },
        {
          name: 'Traditional Shave',
          description: 'Old-fashioned shave with hot towel and premium products.',
          price: 'from 40 CHF',
          duration: '45 min',
          popular: false,
          features: ['Hot towel', 'Traditional razor', 'After-shave care']
        }
      ]
    },
    portfolio: {
      title: 'Our Portfolio',
      subtitle: 'Discover our work',
      categories: ['All', 'Men\'s Cut', 'Beard', 'Complete Service', 'Student Cut']
    },
    team: {
      title: 'Our Team',
      subtitle: 'Passionate professionals at your service',
      specialties: 'Specialties'
    },
    testimonials: {
      title: 'What our clients say',
      subtitle: 'Authentic testimonials of satisfaction'
    },
    blog: {
      title: 'Blog & Tips',
      subtitle: 'News and expert advice',
      readMore: 'Read more',
      readTime: 'min read'
    },
    faq: {
      title: 'Frequently Asked Questions',
      subtitle: 'Find answers to your questions quickly'
    },
    pricing: {
      title: 'Our Pricing',
      subtitle: 'Transparency and quality guaranteed',
      student: 'Student/Child Rate',
      studentDesc: 'Preferential rate for students and children up to 25 years old (with valid ID)',
      studentPrice: 'from 25 CHF'
    },
    contact: {
      title: 'Book Appointment',
      subtitle: 'Contact us to reserve your slot',
      form: {
        title: 'Online Booking',
        name: 'Full Name *',
        email: 'Email *',
        phone: 'Phone',
        service: 'Desired Service',
        date: 'Preferred Date',
        message: 'Additional Message',
        submit: 'Send Request',
        success: 'Request sent! We will contact you shortly.',
        selectService: 'Choose a service'
      },
      info: {
        title: 'Practical Information',
        hours: 'Opening Hours',
        hoursDetail: [
          'Monday - Friday: 9:00 AM - 7:00 PM',
          'Saturday: 9:00 AM - 6:00 PM',
          'Sunday: Closed'
        ],
        location: 'Our Address'
      }
    },
    footer: {
      rights: 'All rights reserved.',
      followUs: 'Follow us',
      quickLinks: 'Quick Links',
      services: 'Services',
      contact: 'Contact'
    }
  },
  de: {
    meta: {
      title: 'Barber Metropole Lausanne - Professioneller Herrenfriseur',
      description: 'Professioneller Herrenfriseur in Lausanne. Haarschnitte, Bartpflege, Studententarife. Rue des Terreaux 25. Jetzt buchen: +41 21 311 15 32'
    },
    nav: {
      home: 'Startseite',
      about: 'Über Uns',
      services: 'Dienstleistungen',
      portfolio: 'Portfolio',
      team: 'Team',
      testimonials: 'Bewertungen',
      blog: 'Blog',
      faq: 'FAQ',
      pricing: 'Preise',
      contact: 'Kontakt'
    },
    hero: {
      badge: 'Professioneller Barbier seit 2015',
      title: 'Exzellenz in der Herrenpflege',
      subtitle: 'Barber Metropole Lausanne',
      description: 'Entdecken Sie die traditionelle Kunst des Barbierhandwerks in modernem Ambiente im Herzen von Lausanne. Unser Team von Meisterbarbieren bietet Ihnen ein einzigartiges Erlebnis, das traditionelles Können mit zeitgenössischen Techniken verbindet.',
      cta: 'Jetzt Buchen',
      cta2: 'Unsere Services Entdecken',
      stats: [
        { number: '2000+', label: 'Zufriedene Kunden' },
        { number: '8+', label: 'Jahre Erfahrung' },
        { number: '5★', label: 'Durchschnittsbewertung' }
      ]
    },
    about: {
      title: 'Warum Metropole Wählen?',
      subtitle: 'Exzellenz im Dienste Ihres Stils',
      description: 'Seit 2015 hat sich Barber Metropole Lausanne als Referenz in der Herrenpflege in der Region etabliert. Unsere Leidenschaft für die Kunst des Barbierhandwerks und unser Engagement für Exzellenz ermöglichen es uns, unseren Kunden ein einzigartiges und personalisiertes Erlebnis zu bieten.',
      features: [
        {
          icon: 'military_tech',
          title: 'Anerkannte Expertise',
          description: 'Unsere zertifizierten Barbiere beherrschen klassische und moderne Techniken'
        },
        {
          icon: 'person_pin',
          title: 'Persönlicher Service',
          description: 'Jeder Schnitt wird an Ihre Gesichtsform und Ihren Lebensstil angepasst'
        },
        {
          icon: 'star',
          title: 'Premium Produkte',
          description: 'Wir verwenden ausschließlich hochwertige Produkte für Ihr Wohlbefinden'
        },
        {
          icon: 'schedule',
          title: 'Flexible Zeiten',
          description: 'Erweiterte Öffnungszeiten für Ihren Zeitplan'
        }
      ]
    },
    services: {
      title: 'Unsere Premium Services',
      subtitle: 'Außergewöhnliche Dienstleistungen für den modernen Mann',
      items: [
        {
          name: 'Herrenhaarschnitt',
          description: 'Personalisierter Schnitt nach Ihrem Stil und Ihrer Gesichtsform. Beratung inklusive.',
          price: 'ab 35 CHF',
          duration: '45 Min',
          popular: false,
          features: ['Stilberatung', 'Shampoo inklusive', 'Präzise Vollendung']
        },
        {
          name: 'Haarschnitt + Bart',
          description: 'Komplettservice: moderner Schnitt + professionelle Bartpflege und -schnitt.',
          price: 'ab 50 CHF',
          duration: '60 Min',
          popular: true,
          features: ['Komplettservice', 'Feuchtigkeitspflege', 'Pflegeberatung']
        },
        {
          name: 'Bartpflege',
          description: 'Präziser Schnitt, Formung und Feuchtigkeitsbehandlung für den perfekten Bart.',
          price: 'ab 25 CHF',
          duration: '30 Min',
          popular: false,
          features: ['Präziser Schnitt', 'Nährendes Öl', 'Expertenformung']
        },
        {
          name: 'Traditionelle Rasur',
          description: 'Altmodische Rasur mit heißem Handtuch und Premium-Produkten.',
          price: 'ab 40 CHF',
          duration: '45 Min',
          popular: false,
          features: ['Heißes Handtuch', 'Traditioneller Rasierer', 'After-Shave Pflege']
        }
      ]
    },
    portfolio: {
      title: 'Unser Portfolio',
      subtitle: 'Entdecken Sie unsere Arbeit',
      categories: ['Alle', 'Herrenschnitt', 'Bart', 'Komplettservice', 'Studentenschnitt']
    },
    team: {
      title: 'Unser Team',
      subtitle: 'Leidenschaftliche Profis zu Ihren Diensten',
      specialties: 'Spezialitäten'
    },
    testimonials: {
      title: 'Was unsere Kunden sagen',
      subtitle: 'Authentische Zufriedenheitszeugnisse'
    },
    blog: {
      title: 'Blog & Tipps',
      subtitle: 'Neuigkeiten und Expertenrat',
      readMore: 'Weiterlesen',
      readTime: 'Min Lesezeit'
    },
    faq: {
      title: 'Häufig Gestellte Fragen',
      subtitle: 'Finden Sie schnell Antworten auf Ihre Fragen'
    },
    pricing: {
      title: 'Unsere Preise',
      subtitle: 'Transparenz und Qualität garantiert',
      student: 'Student/Kind Tarif',
      studentDesc: 'Vorzugstarif für Studenten und Kinder bis 25 Jahre (mit gültigem Ausweis)',
      studentPrice: 'ab 25 CHF'
    },
    contact: {
      title: 'Termin Buchen',
      subtitle: 'Kontaktieren Sie uns für Ihre Reservierung',
      form: {
        title: 'Online Buchung',
        name: 'Vollständiger Name *',
        email: 'E-Mail *',
        phone: 'Telefon',
        service: 'Gewünschter Service',
        date: 'Bevorzugtes Datum',
        message: 'Zusätzliche Nachricht',
        submit: 'Anfrage Senden',
        success: 'Anfrage gesendet! Wir werden Sie bald kontaktieren.',
        selectService: 'Service wählen'
      },
      info: {
        title: 'Praktische Informationen',
        hours: 'Öffnungszeiten',
        hoursDetail: [
          'Montag - Freitag: 9:00 - 19:00',
          'Samstag: 9:00 - 18:00',
          'Sonntag: Geschlossen'
        ],
        location: 'Unsere Adresse'
      }
    },
    footer: {
      rights: 'Alle Rechte vorbehalten.',
      followUs: 'Folgen Sie uns',
      quickLinks: 'Schnelllinks',
      services: 'Dienstleistungen',
      contact: 'Kontakt'
    }
  }
};

function App() {
  const [currentLang, setCurrentLang] = useState('fr');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    date: '',
    message: ''
  });
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [portfolioFilter, setPortfolioFilter] = useState('Tous');
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const t = translations[currentLang as keyof typeof translations];

  // Scroll to top on page load
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Update document title and meta description for SEO
  useEffect(() => {
    document.title = t.meta.title;
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', t.meta.description);
    document.documentElement.lang = currentLang;
  }, [currentLang, t.meta]);

  // Scroll spy for active navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'team', 'testimonials', 'blog', 'faq', 'pricing', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
    setTimeout(() => setFormSubmitted(false), 5000);
    setFormData({ name: '', email: '', phone: '', service: '', date: '', message: '' });
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const filteredPortfolio = portfolioFilter === 'Tous' || portfolioFilter === 'All' || portfolioFilter === 'Alle'
    ? portfolioItems
    : portfolioItems.filter(item => item.category === portfolioFilter);

  return (
    <div className="min-h-screen bg-white">
      {/* Enhanced Header */}
      <header className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-md border-b border-gray-100 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            <div className="flex items-center space-x-4">
              <img 
                src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=198,fit=crop,q=95/AzG8MM0DWGu7eykq/nb-removebg-preview-mp8644ePn4iy67wm.png" 
                alt="Barber Metropole Lausanne Logo" 
                className="h-12 w-auto"
              />
              <div>
                <div className="font-bold text-xl text-gray-900">Barber Metropole</div>
                <div className="text-sm text-gray-600">Lausanne</div>
              </div>
            </div>

            {/* Enhanced Desktop Navigation */}
            <nav className="hidden lg:flex space-x-6">
              {[
                { key: 'home', label: t.nav.home },
                { key: 'about', label: t.nav.about },
                { key: 'services', label: t.nav.services },
                { key: 'portfolio', label: t.nav.portfolio },
                { key: 'team', label: t.nav.team },
                { key: 'testimonials', label: t.nav.testimonials },
                { key: 'blog', label: t.nav.blog },
                { key: 'faq', label: t.nav.faq },
                { key: 'pricing', label: t.nav.pricing },
                { key: 'contact', label: t.nav.contact }
              ].map(({ key, label }) => (
                <button 
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`relative font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                    activeSection === key 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {label}
                  {activeSection === key && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-1 h-1 bg-blue-600 rounded-full" />
                  )}
                </button>
              ))}
            </nav>

            {/* Language Switcher & Mobile Menu */}
            <div className="flex items-center space-x-4">
              <div className="relative">
                <select 
                  value={currentLang} 
                  onChange={(e) => setCurrentLang(e.target.value)}
                  className="appearance-none bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 pr-10 text-sm font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent cursor-pointer"
                >
                  <option value="fr">🇫🇷 FR</option>
                  <option value="en">🇬🇧 EN</option>
                  <option value="de">🇩🇪 DE</option>
                </select>
                <MaterialIcon name="language" className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 pointer-events-none" size="small" />
              </div>
              
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="lg:hidden p-2 rounded-lg text-gray-700 hover:text-blue-600 hover:bg-gray-50 transition-colors"
              >
                <MaterialIcon name={isMenuOpen ? 'close' : 'menu'} />
              </button>
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Navigation */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
              {[
                { key: 'home', label: t.nav.home },
                { key: 'about', label: t.nav.about },
                { key: 'services', label: t.nav.services },
                { key: 'portfolio', label: t.nav.portfolio },
                { key: 'team', label: t.nav.team },
                { key: 'testimonials', label: t.nav.testimonials },
                { key: 'blog', label: t.nav.blog },
                { key: 'faq', label: t.nav.faq },
                { key: 'pricing', label: t.nav.pricing },
                { key: 'contact', label: t.nav.contact }
              ].map(({ key, label }) => (
                <button 
                  key={key}
                  onClick={() => scrollToSection(key)}
                  className={`block w-full text-left py-3 px-4 rounded-lg font-medium transition-colors ${
                    activeSection === key 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        )}
      </header>

      {/* Enhanced Hero Section with Animation */}
      <section id="home" className="pt-20 bg-gradient-to-br from-slate-900 via-gray-900 to-slate-800 text-white overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/10 to-purple-600/10"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <AnimatedSection className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-blue-500/20 border border-blue-500/30 rounded-full text-blue-300 text-sm font-medium">
                <MaterialIcon name="star" size="small" className="mr-2" />
                {t.hero.badge}
              </div>
              
              <div>
                <h1 className="text-4xl lg:text-6xl font-bold mb-4 leading-tight">
                  {t.hero.title}
                </h1>
                <h2 className="text-2xl lg:text-3xl text-blue-400 font-semibold mb-6">
                  {t.hero.subtitle}
                </h2>
                <p className="text-xl text-gray-300 leading-relaxed max-w-2xl">
                  {t.hero.description}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="btn-primary"
                >
                  <MaterialIcon name="event" size="small" className="mr-2" />
                  {t.hero.cta}
                </button>
                <button 
                  onClick={() => scrollToSection('services')}
                  className="btn-secondary border-white text-white hover:bg-white hover:text-gray-900"
                >
                  <MaterialIcon name="explore" size="small" className="mr-2" />
                  {t.hero.cta2}
                </button>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-700">
                {t.hero.stats.map((stat, index) => (
                  <AnimatedSection key={index} delay={index * 200} className="text-center">
                    <div className="text-2xl lg:text-3xl font-bold text-blue-400">{stat.number}</div>
                    <div className="text-sm text-gray-400 mt-1">{stat.label}</div>
                  </AnimatedSection>
                ))}
              </div>
            </AnimatedSection>

            <AnimatedSection animation="fadeInRight" className="relative">
              <div className="relative z-10 animate-float">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=198,fit=crop,q=95/AzG8MM0DWGu7eykq/nb-removebg-preview-mp8644ePn4iy67wm.png" 
                  alt="Barber Metropole Lausanne Logo" 
                  className="h-64 lg:h-80 w-auto mx-auto filter drop-shadow-2xl"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Enhanced About Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.about.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t.about.subtitle}</p>
            <p className="text-gray-700 max-w-4xl mx-auto leading-relaxed">{t.about.description}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.about.features.map((feature, index) => (
              <AnimatedSection key={index} delay={index * 150} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 text-center group card-hover">
                <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-200 transition-colors">
                  <MaterialIcon name={feature.icon} className="text-blue-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed">{feature.description}</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.services.subtitle}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {t.services.items.map((service, index) => (
              <AnimatedSection key={index} delay={index * 150} className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 group border-2 card-hover ${
                service.popular ? 'border-blue-200 ring-4 ring-blue-100' : 'border-gray-100 hover:border-blue-200'
              }`}>
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Populaire
                    </span>
                  </div>
                )}
                
                <div className="text-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transition-colors ${
                    service.popular ? 'bg-blue-100 group-hover:bg-blue-200' : 'bg-gray-100 group-hover:bg-blue-100'
                  }`}>
                    <MaterialIcon name="content_cut" className={`transition-colors ${
                      service.popular ? 'text-blue-600' : 'text-gray-600 group-hover:text-blue-600'
                    }`} />
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{service.name}</h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                  
                  <div className="space-y-4">
                    <div className="text-2xl font-bold text-blue-600">{service.price}</div>
                    <div className="flex items-center justify-center text-sm text-gray-500">
                      <MaterialIcon name="schedule" size="small" className="mr-1" />
                      {service.duration}
                    </div>
                    
                    <div className="space-y-2 pt-4 border-t border-gray-100">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm text-gray-600">
                          <MaterialIcon name="check_circle" size="small" className="text-green-500 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* New Portfolio Section */}
      <section id="portfolio" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.portfolio.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.portfolio.subtitle}</p>
          </AnimatedSection>

          {/* Portfolio Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {t.portfolio.categories.map((category, index) => (
              <button
                key={index}
                onClick={() => setPortfolioFilter(category)}
                className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  portfolioFilter === category
                    ? 'bg-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-700 hover:bg-blue-50 hover:text-blue-600 shadow-md'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Portfolio Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPortfolio.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 100} className="group cursor-pointer">
                <div className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 card-hover">
                  <div className="relative overflow-hidden">
                    <img 
                      src={item.image} 
                      alt={item.title}
                      className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute bottom-4 left-4 right-4 text-white">
                        <span className="inline-block bg-blue-600 px-3 py-1 rounded-full text-sm font-medium mb-2">
                          {item.category}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* New Team Section */}
      <section id="team" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.team.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.team.subtitle}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {teamMembers.map((member, index) => (
              <AnimatedSection key={member.id} delay={index * 150} className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden card-hover">
                <div className="relative">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-80 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                    <p className="text-blue-300 font-medium">{member.role}</p>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-4">
                    <MaterialIcon name="work" size="small" className="mr-2" />
                    {member.experience}
                  </div>
                  <p className="text-gray-600 mb-4">{member.bio}</p>
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-2">{t.team.specialties}:</h4>
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

      {/* New Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.testimonials.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.testimonials.subtitle}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <AnimatedSection key={testimonial.id} delay={index * 150} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 card-hover">
                <div className="flex items-center mb-6">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-gray-600 text-sm">{testimonial.role}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <MaterialIcon key={i} name="star" className="text-yellow-400" size="small" />
                  ))}
                </div>
                <p className="text-gray-700 leading-relaxed italic">"{testimonial.content}"</p>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* New Blog Section */}
      <section id="blog" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.blog.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.blog.subtitle}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <AnimatedSection key={post.id} delay={index * 150} className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden card-hover group cursor-pointer">
                <div className="relative overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center text-sm text-gray-500 mb-3">
                    <MaterialIcon name="person" size="small" className="mr-1" />
                    {post.author}
                    <span className="mx-2">•</span>
                    <MaterialIcon name="schedule" size="small" className="mr-1" />
                    {post.readTime} {t.blog.readTime}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{post.excerpt}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{post.date}</span>
                    <button className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center">
                      {t.blog.readMore}
                      <MaterialIcon name="arrow_forward" size="small" className="ml-1" />
                    </button>
                  </div>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* New FAQ Section */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.faq.title}</h2>
            <p className="text-xl text-gray-600">{t.faq.subtitle}</p>
          </AnimatedSection>

          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <AnimatedSection key={item.id} delay={index * 100} className="bg-white rounded-2xl shadow-lg overflow-hidden">
                <button
                  onClick={() => setOpenFAQ(openFAQ === item.id ? null : item.id)}
                  className="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                >
                  <h3 className="text-lg font-semibold text-gray-900">{item.question}</h3>
                  <MaterialIcon 
                    name={openFAQ === item.id ? 'expand_less' : 'expand_more'} 
                    className="text-gray-500 transition-transform duration-200"
                  />
                </button>
                {openFAQ === item.id && (
                  <div className="px-8 pb-6">
                    <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                  </div>
                )}
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* New Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.pricing.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.pricing.subtitle}</p>
          </AnimatedSection>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {t.services.items.map((service, index) => (
              <AnimatedSection key={index} delay={index * 150} className={`bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 text-center border-2 card-hover ${
                service.popular ? 'border-blue-200 ring-4 ring-blue-100' : 'border-gray-100'
              }`}>
                {service.popular && (
                  <div className="bg-gradient-to-r from-blue-500 to-blue-600 text-white px-4 py-2 rounded-full text-sm font-bold mb-6 inline-block">
                    Populaire
                  </div>
                )}
                <h3 className="text-xl font-bold text-gray-900 mb-4">{service.name}</h3>
                <div className="text-3xl font-bold text-blue-600 mb-2">{service.price}</div>
                <div className="text-gray-500 mb-6">{service.duration}</div>
                <ul className="space-y-3">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center text-sm text-gray-600">
                      <MaterialIcon name="check" size="small" className="text-green-500 mr-2" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </AnimatedSection>
            ))}
          </div>

          {/* Student Pricing */}
          <AnimatedSection className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 text-center">
            <div className="max-w-2xl mx-auto">
              <MaterialIcon name="school" className="text-blue-600 mb-4" size="large" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">{t.pricing.student}</h3>
              <p className="text-gray-600 mb-6">{t.pricing.studentDesc}</p>
              <div className="text-3xl font-bold text-blue-600">{t.pricing.studentPrice}</div>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* Enhanced Contact Section */}
      <section id="contact" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedSection className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">{t.contact.title}</h2>
            <p className="text-xl text-gray-600">{t.contact.subtitle}</p>
          </AnimatedSection>

          <div className="grid lg:grid-cols-2 gap-16">
            {/* Enhanced Contact Form */}
            <AnimatedSection className="bg-white rounded-2xl shadow-xl p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.contact.form.title}</h3>
              
              {formSubmitted && (
                <div className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl mb-8 flex items-center">
                  <MaterialIcon name="check_circle" className="text-green-600 mr-3" />
                  {t.contact.form.success}
                </div>
              )}

              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t.contact.form.name}
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t.contact.form.email}
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t.contact.form.phone}
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      {t.contact.form.service}
                    </label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">{t.contact.form.selectService}</option>
                      {t.services.items.map((service, index) => (
                        <option key={index} value={service.name}>{service.name}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.contact.form.date}
                  </label>
                  <input
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-3">
                    {t.contact.form.message}
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full btn-primary"
                >
                  <MaterialIcon name="send" size="small" className="mr-2" />
                  {t.contact.form.submit}
                </button>
              </form>
            </AnimatedSection>

            {/* Enhanced Contact Info & Map */}
            <div className="space-y-8">
              <AnimatedSection animation="fadeInRight" className="bg-white rounded-2xl shadow-xl p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-8">{t.contact.info.title}</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <MaterialIcon name="phone" className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Téléphone</div>
                      <a href="tel:+41213111532" className="text-gray-600 hover:text-blue-600 transition-colors">
                        +41 21 311 15 32
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <MaterialIcon name="email" className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">Email</div>
                      <a href="mailto:newbarber@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
                        newbarber@gmail.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <MaterialIcon name="location_on" className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{t.contact.info.location}</div>
                      <div className="text-gray-600">Rue des Terreaux 25<br />1003 Lausanne, Switzerland</div>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-4">
                    <div className="bg-blue-100 p-3 rounded-xl">
                      <MaterialIcon name="schedule" className="text-blue-600" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900 mb-2">{t.contact.info.hours}</div>
                      <div className="space-y-1">
                        {t.contact.info.hoursDetail.map((hours, index) => (
                          <div key={index} className="text-gray-600 text-sm">{hours}</div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-8 border-t border-gray-200">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">{t.footer.followUs}</h4>
                  <div className="flex space-x-4">
                    <a 
                      href="https://www.facebook.com/p/New-Barber-100078212907511/?paipv=0&eav=AfY_WIGqVa2YdokDVozGbNnK08Pwjr8UA-Xv2GapPv7B_N7rHdJrPOMnYSr-koDuQNM&_rdr" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-blue-600 hover:bg-blue-700 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <MaterialIcon name="facebook" />
                    </a>
                    <a 
                      href="https://www.instagram.com/newbaarber/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="bg-pink-600 hover:bg-pink-700 text-white p-4 rounded-xl transition-all duration-300 transform hover:scale-105"
                    >
                      <MaterialIcon name="camera_alt" />
                    </a>
                  </div>
                </div>
              </AnimatedSection>

              {/* Enhanced Map */}
              <AnimatedSection animation="fadeInRight" delay={200} className="bg-white rounded-2xl shadow-xl overflow-hidden">
                <div className="p-6 border-b border-gray-200">
                  <h3 className="text-xl font-bold text-gray-900">Notre Localisation</h3>
                </div>
                <div className="h-80">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2745.7261088445494!2d6.6273!3d46.5197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x478c2e2f8b7a5b7d%3A0x1234567890abcdef!2sRue%20des%20Terreaux%2025%2C%201003%20Lausanne%2C%20Switzerland!5e0!3m2!1sen!2sus!4v1629123456789!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen={true}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Barber Metropole Lausanne Location"
                  />
                </div>
              </AnimatedSection>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="md:col-span-2">
              <div className="flex items-center space-x-4 mb-6">
                <img 
                  src="https://assets.zyrosite.com/cdn-cgi/image/format=auto,w=198,fit=crop,q=95/AzG8MM0DWGu7eykq/nb-removebg-preview-mp8644ePn4iy67wm.png" 
                  alt="Barber Metropole Lausanne Logo" 
                  className="h-12 w-auto"
                />
                <div>
                  <div className="font-bold text-xl">Barber Metropole Lausanne</div>
                  <div className="text-gray-400">L'art de la coiffure masculine</div>
                </div>
              </div>
              <p className="text-gray-400 leading-relaxed max-w-md mb-6">
                Découvrez l'excellence dans l'art de la coiffure masculine au cœur de Lausanne. 
                Notre équipe de barbiers expérimentés vous offre des services de qualité supérieure.
              </p>
              <div className="flex space-x-4">
                <a 
                  href="https://www.facebook.com/p/New-Barber-100078212907511/?paipv=0&eav=AfY_WIGqVa2YdokDVozGbNnK08Pwjr8UA-Xv2GapPv7B_N7rHdJrPOMnYSr-koDuQNM&_rdr" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <MaterialIcon name="facebook" />
                </a>
                <a 
                  href="https://www.instagram.com/newbaarber/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  <MaterialIcon name="camera_alt" />
                </a>
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t.footer.quickLinks}</h4>
              <div className="space-y-3">
                {[
                  { key: 'home', label: t.nav.home },
                  { key: 'about', label: t.nav.about },
                  { key: 'services', label: t.nav.services },
                  { key: 'portfolio', label: t.nav.portfolio },
                  { key: 'contact', label: t.nav.contact }
                ].map(({ key, label }) => (
                  <button 
                    key={key}
                    onClick={() => scrollToSection(key)}
                    className="block text-gray-400 hover:text-white transition-colors"
                  >
                    {label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <h4 className="font-bold text-lg mb-6">{t.footer.contact}</h4>
              <div className="space-y-3 text-gray-400">
                <div className="flex items-center">
                  <MaterialIcon name="location_on" size="small" className="mr-2" />
                  <div>
                    <div>Rue des Terreaux 25</div>
                    <div>1003 Lausanne</div>
                  </div>
                </div>
                <div className="flex items-center">
                  <MaterialIcon name="phone" size="small" className="mr-2" />
                  +41 21 311 15 32
                </div>
                <div className="flex items-center">
                  <MaterialIcon name="email" size="small" className="mr-2" />
                  newbarber@gmail.com
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 mb-4 md:mb-0">
              © 2024 Barber Metropole Lausanne. {t.footer.rights}
            </div>
            
            <div className="flex items-center space-x-4">
              <span className="text-gray-400 text-sm">Made with</span>
              <MaterialIcon name="favorite" className="text-red-500" size="small" />
              <span className="text-gray-400 text-sm">in Lausanne</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;