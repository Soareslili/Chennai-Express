import { ChefHat, Leaf, Star, Truck } from "lucide-react";



const Packeges = () => {
    
    return(

    
      <section id="about" className="border-y border-border bg-[#FAFBFC]">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 md:grid-cols-4 lg:px-8">
          {[
            { icon: Leaf, title: "Ingredientes Frescos", desc: "Obtido diariamente nos mercados locais" },
            { icon: Truck, title: "Entrega Rápida", desc: "Quente na sua porta em 30 minutos" },
            { icon: ChefHat, title: "Receitas Caseiras", desc: "Receitas familiares tradicionais" },
            { icon: Star, title: "Melhor Qualidade de Comida", desc: "Avaliado com 5 estrelas por 2k+ clientes" },
          ].map((f) => (
            <div key={f.title} className="flex flex-col items-center text-center py-4 px-4 border border-primary/60 rounded-lg transition-all hover:-translate-y-1 hover:border-accentl hover:bg-white/[0.07]">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                <f.icon className="h-7 w-7" />
              </div>
              <h3 className="text-base font-bold text-foreground">{f.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>


    )
}
export default Packeges;