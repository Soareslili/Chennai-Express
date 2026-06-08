import { CheckCircle2, Flame, Users, PartyPopper, Sparkles } from "lucide-react";

const combos = [
  {
    icon: Flame,
    title: "Combo Chennai Especial",
    subtitle: "Ideal para 1 pessoa",
    price: "R$ 39,90",
    features: [
      "Frango Biryani",
      "Frango Masala",
      "Sobremesa de Morango",
      "Molho especial",
      "Embalagem inclusa",
    ],
    popular: false,
  },
  {
    icon: PartyPopper,
    title: "Combo Família Indiana",
    subtitle: "Serve até 3 pessoas",
    price: "R$ 64,90",
    features: [
      "2 Pratos principais",
      "2 Bebidas",
      "1 Sobremesa especial",
      "Arroz aromático",
      "Melhor custo-benefício",
    ],
    popular: true,
  },
  {
    icon: Sparkles,
    title: "Combo Sabor Picante",
    subtitle: "Para quem ama tempero",
    price: "R$ 34,90",
    features: [
      "Frango Masala",
      "Arroz basmati",
      "Bebida refrescante",
      "Molho picante",
      "Especiarias indianas",
    ],
    popular: false,
  },
];

export default function Combos() {
  return (
    <section id="offers" className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          <Flame className="h-3.5 w-3.5" />
          Special Offers
        </div>

        <h2 className="mt-4 font-serif text-4xl font-bold text-foreground sm:text-5xl">
          Combos & Promoções
        </h2>

        <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground sm:text-base">
          Combos especiais com pratos selecionados para você aproveitar o melhor do Chennai Express.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {combos.map((combo) => (
          <article
            key={combo.title}
            className={`relative flex flex-col rounded-2xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
              combo.popular
                ? "border-primary bg-primary/[0.03]"
                : "border-border bg-card"
            }`}
          >
            {combo.popular && (
              <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-primary px-4 py-1 text-[11px] font-bold uppercase tracking-wider text-primary-foreground shadow-md">
                Mais vendido
              </div>
            )}

            <div
              className={`mb-5 flex h-14 w-14 items-center justify-center rounded-xl ${
                combo.popular
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/30"
                  : "bg-primary/10 text-primary"
              }`}
            >
              <combo.icon className="h-7 w-7" />
            </div>

            <h3 className="text-xl font-bold text-foreground">
              {combo.title}
            </h3>

            <p className="mt-1 text-sm text-muted-foreground">
              {combo.subtitle}
            </p>

            <div className="mt-4 flex items-baseline gap-1">
              <span className="text-3xl font-bold text-primary">
                {combo.price}
              </span>
            </div>

            <ul className="mt-6 flex-1 space-y-3">
              {combo.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary" />
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`mt-6 w-full rounded-md px-5 py-2.5 text-sm font-bold transition-all ${
                combo.popular
                  ? "bg-primary text-primary-foreground cursor-pointer shadow-sm hover:bg-primary-hover hover:shadow-md"
                  : "border border-border bg-background cursor-pointer text-foreground hover:bg-secondary"
              }`}
            >
              Comprar Combo
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}