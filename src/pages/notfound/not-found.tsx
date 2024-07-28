import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <section className="lg:py-16 lg:px-28 md:px-18 sm:px-8 px-4">
      <h1 className="text-lg mb-4">
        A página que você tentou acessar não existe...
      </h1>
      <Button className="text-base">
        <Link to="/">Voltar para o início</Link>
      </Button>
    </section>
  );
};

export default ErrorPage;
