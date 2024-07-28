const Footer = () => {
  return (
    <section className="bg-primary text-background text-center sm:py-8 py-4">
      <p className="sm:text-xl sm:mb-2 mb-1">
        Louja&reg; - Alguns direitos reservados
      </p>

      <p className="sm:text-lg text-[14px]">
        Feito por Carlos Eduado -{" "}
        <a
          href="https://github.com/carlosEduardDev/louja"
          className="underline"
          target="_blank"
        >
          Visite o repositório
        </a>
      </p>
    </section>
  );
};

export default Footer;
