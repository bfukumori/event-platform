import { FormEvent, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { CircleNotch } from "phosphor-react";
import { useCreateSubscriberMutation } from "../graphql/generated";
import mockImg from "../assets/mock.png";

export function Subscribe() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  const [createSubscriber, { loading }] = useCreateSubscriberMutation({
    variables: {
      name,
      email,
    },
  });

  useEffect(() => {
    setError("");
  }, [name]);

  async function handleSubscribe(event: FormEvent) {
    event.preventDefault();
    if (name.trim() === "") {
      setError("Preencha com um nome válido");
      return null;
    }
    await createSubscriber();
    navigate("/event");
  }

  return (
    <div className="min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center">
      <div className="w-full max-w-[1100px] flex flex-col md:flex-row justify-between mt-10 md:mt-20 mx-auto">
        <div className="md:max-w-[640px] px-6">
          <div className="flex justify-center md:justify-start">
            <Logo />
          </div>
          <h1 className="mt-6 text-[2.5rem] leading-tight text-center md:text-left">
            Construa uma{" "}
            <strong className="text-blue-500">aplicação completa</strong>, do
            zero, com <strong className="text-blue-500">React</strong>
          </h1>
          <p className="mt-6 mb-8 w-xs text-center md:text-left text-gray-200 leading-relaxed">
            Em apenas uma semana você vai dominar na prática uma das tecnologias
            mais utilizadas e com alta demanda para acessar as melhores
            oportunidades do mercado.
          </p>
        </div>
        <div className="p-8 bg-gray-700 border border-gray-500 rounded md:mx-6">
          <strong className="text-2xl mb-6 block">
            Inscreva-se gratuitamente
          </strong>
          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-2 w-full"
          >
            <input
              required
              className="bg-gray-900 rounded px-5 h-14 outline-none focus:ring-1 ring-green-500 invalid:ring-red-500"
              type="text"
              placeholder="Seu nome completo"
              onChange={(event) => setName(event.target.value)}
            />
            {error && <span className="text-xs text-red-500">{error}</span>}
            <input
              required
              className="bg-gray-900 rounded px-5 h-14 outline-none focus:ring-1 ring-green-500 invalid:ring-red-500"
              type="email"
              placeholder="Digite seu e-mail"
              onChange={(event) => setEmail(event.target.value)}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-4 bg-green-500 hover:bg-green-700 transition-colors uppercase py-4 rounded font-bold text-sm disabled:opacity-50 flex items-center justify-center"
            >
              {loading ? (
                <CircleNotch
                  weight="bold"
                  className="w-6 h-6 animate-spin text-gray-200"
                />
              ) : (
                "Garantir minha vaga"
              )}
            </button>
          </form>
        </div>
      </div>
      <img src={mockImg} className="mt-10" alt="Hero Image" />
    </div>
  );
}
