export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  readTime: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Les Tendances Coiffure Homme 2024",
    excerpt: "Découvrez les coupes et styles qui feront sensation cette année.",
    content: "Les tendances coiffure masculine évoluent constamment...",
    image: "https://images.pexels.com/photos/1319460/pexels-photo-1319460.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    author: "Alessandro Rossi",
    date: "15 Mars 2024",
    category: "Tendances",
    readTime: "5 min"
  },
  {
    id: 2,
    title: "Comment Entretenir sa Barbe au Quotidien",
    excerpt: "Conseils d'experts pour une barbe toujours impeccable.",
    content: "L'entretien quotidien de la barbe nécessite quelques gestes simples...",
    image: "https://images.pexels.com/photos/1043473/pexels-photo-1043473.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    author: "David Laurent",
    date: "8 Mars 2024",
    category: "Conseils",
    readTime: "7 min"
  },
  {
    id: 3,
    title: "L'Art du Rasage Traditionnel",
    excerpt: "Redécouvrez les techniques ancestrales du rasage à l'ancienne.",
    content: "Le rasage traditionnel est un art qui se transmet de génération en génération...",
    image: "https://images.pexels.com/photos/1570807/pexels-photo-1570807.jpeg?auto=compress&cs=tinysrgb&w=400&h=250&fit=crop",
    author: "Alessandro Rossi",
    date: "1 Mars 2024",
    category: "Techniques",
    readTime: "6 min"
  }
];