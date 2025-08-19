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
    name: "Walter Ferrari",
    role: "Client régulier",
    content: "Very efficient barber with a warm welcome, and a good price for a cut of CHF 25.- Ideal if you're looking for good value for money     in the center of Lausanne.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjUuwHljpOP57ZtJSpQlFyMdDBWC6ymoUgGLOKXVmrGuuIa1FzGA=w90-h90-p-rp-mo-ba4-br100"
  },
  {
    id: 1,
    name: "Trey Davis",
    role: "Client régulier",
    content: "The gentleman is very friendly and the atmosphere is good. The haircut was a success!",
    rating: 5,
    image: ""
  },
  {
    id: 3,
    name: "Christinat Axel",
    role: "Client régulier",
    content: "Fast pick-up without reservation, impeccable and tailor-made cut! The barber team is super cool. I recommend",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjV8zI4SO72a-cJlcasp0XTqL37d9-5o87ibFC3GMAAVRsA7XqE=w90-h90-p-rp-mo-br100"
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
    id: 1,
    name: "Trey Davis",
    role: "Client régulier",
    content: "The gentleman is very friendly and the atmosphere is good. The haircut was a success!",
    rating: 5,
    image: ""
  },
  {
    id: 1,
    name: "Daniel Cardoso",
    role: "Client régulier",
    content: "Top notch, friendly barbers. Top notch service.",
    rating: 5,
    image: "https://lh3.googleusercontent.com/a-/ALV-UjVNtSJ2ywm2i6j2z6Q4Z5HhRTkYxeXdRdLWZtUKEKYpHMZ0j2lU=w90-h90-p-rp-mo-br100"
  },
  
];