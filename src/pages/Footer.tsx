import { ChefHat } from 'lucide-react';
import { FaXTwitter, FaFacebook, FaInstagram } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-[#15110D] text-white">
            <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-12 sm:px-6 md:grid-cols-4 lg:px-8">
                <div>
                    <div className="flex items-center gap-2">
                        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
                            <ChefHat className="h-6 w-6" strokeWidth={2.2} />
                        </div>
                        <div className="leading-tight">
                            <div className="font-display text-base font-bold text-background">Chennai Express</div>
                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Restaurant & Catering</div>
                        </div>
                    </div>
                    <p className="mt-4 text-sm text-white/60">
                        Sabores indianos autênticos elaborados com amor. Da nossa cozinha para a sua mesa.
                    </p>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Contate-nos</h4>
                    <ul className="mt-4 space-y-2 text-sm text-white/70">
                        <li>+1 (555) 123-4567</li>
                        <li>hello@chennaiexpress.com</li>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Sobre</h4>
                    <ul className=" flex flex-col mt-4 space-y-2 text-sm text-white/70">
                        <Link to="/products" className="hover:text-primary">Produtos</Link>
                        <Link to="/contact" className="hover:text-primary">Contato</Link>
                    </ul>
                </div>
                <div>
                    <h4 className="text-sm font-bold uppercase tracking-wider text-primary">Localização</h4>
                    <p className="mt-4 text-sm text-white/70">
                        1410 Av. Paulista<br /> São Paulo, SP 01310-100
                    </p>
                    <div className="grid grid-cols-3 w-[150px] mt-4 gap-4 ">
                        <a href="#" className="text-accent transform transition hover:scale-110" >
                            <FaInstagram size={28} />
                        </a>
                        <a href="#" className="text-indigo-500 transform transition hover:scale-110" >
                            <FaFacebook size={28} />
                        </a>
                        <a href="#" className="text-gray-500 transform transition hover:scale-110" >
                            <FaXTwitter size={28} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="border-t border-white/10">
                <div className="mx-auto max-w-7xl px-4 py-5 text-center text-xs text-white/50 sm:px-6 lg:px-8">
                    © {new Date().getFullYear()} Chennai Express. Todos os direitos reservados.
                </div>
            </div>
        </footer>
    )
}

export default Footer;
