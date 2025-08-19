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
    name: "Abdellatif ROUCHDI",
    role: "Client régulier",
    content: "Best barber in Lausanne. Quick and always with smile!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXx00GKpcwIhBQu-qZJxih_1zyEp9BynbXDTZyQrz14-XlllfWlZg=w90-h90-p-rp-mo-br100"
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