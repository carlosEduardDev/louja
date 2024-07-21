const categories = [
  { category: "MLB1039", subject: "Câmeras e Acessórios" },
  { category: "MLB1051", subject: "Celulares e Telefones" },
  { category: "MLB1071", subject: "PetShop" },
  { category: "MLB5672", subject: "Acessórios para Veículos" },
  { category: "MLB1499", subject: "Indústria e Comércio" },
  { category: "MLB1276", subject: "Esportes e Fitness" },
  { category: "MLB1196", subject: "Livros" },
  { category: "MLB1182", subject: "Instrumentos músicais" },
  { category: "MLB5726", subject: "Eletrodomésticos" },
  { category: "MLB1574", subject: "Casa, Móveis e Decoração" },
  { category: "MLB1743", subject: "Carros" },
  { category: "MLB3937", subject: "Relógios" },
];

export const randomCategory = categories.sort(() => Math.random() - 0.5);
