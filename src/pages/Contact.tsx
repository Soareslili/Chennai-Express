import { useState } from "react";
import { Send } from "lucide-react";
import heroBanner from "../assets/heroBanner.png";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
 
    console.log("Form submitted:", formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding bg-[#F6F4EF py-20">
         <img
            src={heroBanner}
            alt="Authentic Indian cuisine"
            width={1920}
            height={800}
            className="h-[280px] w-full object-cover sm:h-[360px] md:h-[420px]"
          />
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
        
          <div className="text-center mb-12">
            <h2 className="heading-section text-primary-foreground text-2xl mt-10 font-Cormorant font-bold mb-4">Entre em contato</h2>
            <p className="text-body text-muted-foreground font-InterA">
             Conheça nossos cardapio. Estamos aqui para servir o melhor para nossos clientes.
            </p>
          </div>

       
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-small font-medium text-accent-foreground mb-2"
                >
                 Nome
                </label>
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="Seu Nome"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-small font-medium text-accent-foreground mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                  className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200"
                  placeholder="seu@email.com"
                  required
                />
              </div>
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-small font-medium text-accent-foreground mb-2"
              >
                Mensagem
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none"
                placeholder="Como podemos ajudá-lo?"
                required
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                className=" w-full bg-accent py-2 px-4 text-foreground font-Inter rounded-2xl cursor-pointer inline-flex items-center justify-center gap-2 hover:bg-teal-950/80 transform hover:scale-105 transition-all duration-200"
              >
                <Send size={18} 
                className="text-foreground text-center"
                />
              Enviar Mensagem
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;