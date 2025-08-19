export interface FAQItem {
  id: number;
  question: string;
  answer: string;
}

export const faqItems: FAQItem[] = [
  {
    id: 1,
    question: "Dois-je prendre rendez-vous ?",
    answer: "Nous recommandons fortement de prendre rendez-vous pour garantir votre créneau. Vous pouvez nous appeler au +41 21 311 15 32 ou utiliser notre formulaire de contact."
  },
  {
    id: 2,
    question: "Quels sont vos tarifs ?",
    answer: "Nos tarifs varient selon le service : Coupe homme dès 35 CHF, Coupe + Barbe dès 50 CHF, Soin barbe dès 25 CHF. Tarifs préférentiels pour étudiants et enfants."
  },
  {
    id: 3,
    question: "Acceptez-vous les cartes de crédit ?",
    answer: "Oui, nous acceptons toutes les cartes de crédit principales ainsi que les paiements en espèces et par Twint."
  },
  {
    id: 4,
    question: "Combien de temps dure une coupe ?",
    answer: "Une coupe simple dure environ 45 minutes, un service coupe + barbe environ 60 minutes. Nous prenons le temps nécessaire pour un résultat parfait."
  },
  {
    id: 5,
    question: "Proposez-vous des produits de soin ?",
    answer: "Oui, nous vendons une sélection de produits premium pour l'entretien à domicile : shampoings, cires, huiles à barbe et soins hydratants."
  },
  {
    id: 6,
    question: "Y a-t-il un parking à proximité ?",
    answer: "Plusieurs parkings publics sont disponibles à proximité. Le plus proche est le parking de la Riponne, à 2 minutes à pied de notre salon."
  }
];