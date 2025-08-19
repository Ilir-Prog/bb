export interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
  image: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Marc Dubois",
    role: "Client régulier",
    content: "Service exceptionnel ! L'équipe est très professionnelle et l'ambiance est parfaite. Je recommande vivement.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 2,
    name: "Thomas Weber",
    role: "Étudiant EPFL",
    content: "Excellent rapport qualité-prix pour les étudiants. Coupe moderne et service rapide. Parfait !",
    rating: 5,
    image: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  },
  {
    id: 3,
    name: "Jean-Pierre Martin",
    role: "Homme d'affaires",
    content: "Barbier de confiance depuis 3 ans. Toujours satisfait du résultat. Service haut de gamme.",
    rating: 5,
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];