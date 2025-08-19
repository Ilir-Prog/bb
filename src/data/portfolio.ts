export interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
}

export const portfolioItems: PortfolioItem[] = [
  {
    id: 1,
    title: "Coupe Moderne Dégradée",
    category: "Coupe Homme",
    image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description: "Coupe moderne avec dégradé progressif et finition précise"
  },
  {
    id: 2,
    title: "Style Barbe Classique",
    category: "Barbe",
    image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description: "Taille et modelage de barbe avec soin hydratant"
  },
  {
    id: 3,
    title: "Coupe Business",
    category: "Coupe Homme",
    image: "https://images.pexels.com/photos/1040880/pexels-photo-1040880.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description: "Style professionnel élégant pour homme d'affaires"
  },
  {
    id: 4,
    title: "Style Jeune Moderne",
    category: "Coupe Étudiant",
    image: "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description: "Coupe tendance adaptée aux jeunes"
  },
  {
    id: 5,
    title: "Barbe Hipster",
    category: "Barbe",
    image: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description: "Style barbe longue avec modelage artistique"
  },
  {
    id: 6,
    title: "Coupe + Barbe Premium",
    category: "Service Complet",
    image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
    description: "Service complet avec coupe et soin de barbe"
  }
];