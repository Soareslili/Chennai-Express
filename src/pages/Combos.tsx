import { CheckCircle2, Flame, Users, PartyPopper, Sparkles, ArrowLeft, Percent, Gift } from "lucide-react";

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

    <>

     {/* OFFERS */}
      <section className=" bg-[#15110D] relative overflow-hidden mt-20">
        <div className="pointer-events-none absolute inset-0 opacity-20">
          <div className="absolute -left-20 top-10 h-72 w-72 rounded-full bg-primary blur-3xl" />
          <div className="absolute -right-20 bottom-10 h-72 w-72 rounded-full bg-primary/70 blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
          <div className="mb-12 text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-3.5 w-3.5" />
             Tempo limitado
            </div>
            <h2 className="mt-4 font-serif text-4xl font-bold sm:text-5xl text-background">Ofertas Especiais</h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm text-white/70 sm:text-base">
           Aproveite nossas ofertas escolhidas a dedo - perfeitas para jantares em família, almoços e festas de fim de semana.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            {[
              {
                icon: Percent,
                tag: "20% OFF",
                title: "Desconto no primeiro pedido",
                desc: "Ganhe 20% de desconto em seu primeiro pedido online. Use o código WELCOME20 na finalização da compra.",
                cta: "Encomende agora",
                badge: "Novo cliente",
              },
              {
                icon: Flame,
                tag: "Combo Deal",
                title: "Pacote Família Biryani",
                desc: "Quaisquer 2 Biryanis + 2 Mango Lassi + 1 Gulab Jamun – economize até $ 12.",
                cta: "Combinação de agarrar",
                badge: "Melhor valor",
              },
              {
                icon: Gift,
                tag: "Free Delivery",
                title: "Pedidos acima de $ 40",
                desc: "Entrega gratuita ao domicílio para todos os pedidos acima de R$ 40 em um raio de 10km.",
                cta: "Cardápio da Loja",
                badge: "Dias da semana",
              },
            ].map((offer) => (
              <article
                key={offer.title}
                className="group relative flex flex-col overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-6 backdrop-blur-sm transition-all hover:-translate-y-1 hover:border-primary/60 hover:bg-white/[0.07]"
              >
                <div className="absolute right-4 top-4 rounded-full bg-primary/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-primary">
                  {offer.badge}
                </div>
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary text-primary-foreground shadow-lg shadow-primary/30">
                  <offer.icon className="h-7 w-7" />
                </div>
                <div className="font-serif text-3xl font-bold text-primary">{offer.tag}</div>
                <h3 className="mt-2 text-xl font-bold text-white">{offer.title}</h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-white/70">{offer.desc}</p>
                <a
                  href="#menu"
                  className="mt-6 inline-flex w-fit items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground transition-all hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/40"
                >
                  {offer.cta}
                  <ArrowLeft className="h-4 w-4 rotate-180" />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

     <section id="offers" className="mx-auto max-w-7xl px-4 py-20 mt-12 sm:px-6 lg:px-8">
      <div className="mb-12 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-primary">
          <Flame className="h-3.5 w-3.5" />
         Ofertas Especiais
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
                  : "border border-border bg-background cursor-pointer text-foreground hover:bg-text hover:text-background hover:shadow-sm"
              }`}
            >
              Comprar Combo
            </button>
          </article>
        ))}
      </div>
    </section>

    </>
   
  );
}