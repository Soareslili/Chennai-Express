import { useEffect, useState } from "react";


import { Menu, X, ChefHat, ShoppingCart } from "lucide-react";
import { useCart } from "../../Context/CartContext";




const Header = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenu, setIsMobileMenu] = useState(false);
    const { totalItems, openCart } = useCart();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
       
        {name: 'Home', href: '/' },
        { name: 'Produtos', href: '/products' },
        { name: 'Combos', href: '/combos' },
    ];

    return (


        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
            ? "bg-background/95 backdrop-blur-md shadow-soft"
            : "bg-transparent"
            }`}>
            <div className="container-custom">
                <div className="flex items-center justify-around h-16 md:h-20">
                    <div className="flex items-center gap-2">
                        <div className="flex h-11 w-11 items-center justify-center rounded-md bg-primary text-primary-foreground shadow-sm">
                            <ChefHat className="h-6 w-6" strokeWidth={2.2} />
                        </div>
                        <div className="leading-tight">
                            <div className="font-display text-base font-bold text-foreground">Chennai Express</div>
                            <div className="text-[10px] uppercase tracking-widest text-muted-foreground">Restaurant & Catering</div>
                        </div>
                    </div>
                    <button
                        className="md:hidden p-2 text-foreground"
                        onClick={() => setIsMobileMenu(!isMobileMenu)}
                    >
                        {isMobileMenu ? <X size={24} /> : <Menu size={24} />}
                    </button>

                    <nav className="hidden md:flex items-center gap-8">
                        {navLinks.map((link, i) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className={`text-sm font-medium transition-colors hover:text-primary ${i === 0 ? "text-primary" : "text-foreground"
                                    }`}
                            >
                                {link.name}
                            </a>
                        ))}
                    </nav>

                    <div className="flex items-center gap-3">
                        <button
                            onClick={openCart}
                            className="relative rounded-md p-2 text-foreground cursor-pointer transition-colors hover:bg-secondary"
                            aria-label="Open cart"
                        >
                            <ShoppingCart className="h-5 w-5" />
                            {totalItems > 0 && (
                                <span className="absolute -right-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-primary text-[11px] font-bold text-primary-foreground">
                                    {totalItems}
                                </span>
                            )}
                        </button>
                        <a
                            href="#menu"
                            className="rounded-md bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-sm transition-all hover:bg-primary-hover hover:shadow-md"
                        >
                            Order Now
                        </a>
                    </div>
                </div>
            </div>


            <div
                className={`md:hidden absolute top-full left-0 right-0 bg-background border-t border-border transition-all duration-300 ${isMobileMenu
                    ? "opacity-100 visible"
                    : "opacity-0 invisible pointer-events-none"
                    }`}
            >
                <nav className="flex flex-col py-4">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="px-6 py-3 text-small text-muted-foreground hover:text-foreground hover:bg-muted transition-colors tracking-wide uppercase"
                            onClick={() => setIsMobileMenu(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                </nav>
            </div>
        </header>
    );
};

export default Header;