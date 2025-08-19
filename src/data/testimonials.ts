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
    id: 2,
    name: "Gauthier R",
    role: "Client régulier",
    content: "I asked for a gradual fade, and they gradually faded my hair… Luckily, Non Stop Gym was just a stone's throw away, so I was able       to wipe away the last drops of water that hadn't fallen from my eyes. I can't wait to be judged by my in-laws tonight. I don't recommend it      unless you like wearing a 2mm layer that goes all the way up your head… The hairdresser is still friendly, though.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjWkPeNdzyCDW11O4Y5TrMb00SsA74te0dvIEOOAgf_qgxVgbfBi=w90-h90-p-rp-mo-ba3-br100"
  },
  {
    id: 1,
    name: "Abdellatif ROUCHDI",
    role: "Client régulier",
    content: "Best barber in Lausanne. Quick and always with smile!",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjXx00GKpcwIhBQu-qZJxih_1zyEp9BynbXDTZyQrz14-XlllfWlZg=w90-h90-p-rp-mo-br100"
  },
  {
    id: 3,
    name: "Christinat Axel",
    role: "Client régulier",
    content: "Fast pick-up without reservation, impeccable and tailor-made cut! The barber team is super cool. I recommend",
    rating: 5,
    image: "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
  }
];