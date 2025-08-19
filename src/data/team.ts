export interface TeamMember {
  id: number;
  name: string;
  role: string;
  experience: string;
  specialties: string[];
  image: string;
  bio: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alessandro Rossi",
    role: "Maître Barbier",
    experience: "12 ans d'expérience",
    specialties: ["Coupes classiques", "Barbe traditionnelle", "Rasage à l'ancienne"],
    image: "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    bio: "Formé dans les meilleures écoles de barberie italiennes, Alessandro apporte son expertise traditionnelle."
  },
  {
    id: 2,
    name: "Kevin Müller",
    role: "Barbier Styliste",
    experience: "8 ans d'expérience",
    specialties: ["Coupes modernes", "Dégradés", "Styles jeunes"],
    image: "https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    bio: "Spécialiste des tendances actuelles, Kevin crée des styles uniques adaptés à chaque client."
  },
  {
    id: 3,
    name: "David Laurent",
    role: "Barbier Senior",
    experience: "10 ans d'expérience",
    specialties: ["Barbe artistique", "Soins premium", "Conseils style"],
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=300&h=400&fit=crop",
    bio: "Expert en soins masculins, David offre des conseils personnalisés pour un style parfait."
  }
];