import { useEffect, useState } from "react";
import {
  MapPin,
  Phone,
  Mail,
  Instagram,
  Clock,
  Star,
  Diamond,
  Crown,
  Menu,
  X,
} from "lucide-react";
import Image from "next/image";

function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const date = new Date().getFullYear();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -100px 0px",
        threshold: 0.0,
      }
    );

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen overflow-hidden">
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-gradient-to-r from-[#242424]/80 to-black/80 backdrop-blur-lg border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <div className="flex items-center">
              <Crown className="h-10 w-10 text-yellow-400" />
              <span className="ml-2 max-[530px]:text-lg text-2xl font-bold text-white">
                S.P CNC JEWELLERS
              </span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                <a
                  href="#home"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Home
                </a>
                <a
                  href="#collections"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Collections
                </a>
                <a
                  href="#about"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  About
                </a>
                <a
                  href="#contact"
                  className="text-white hover:text-yellow-400 transition-colors duration-300"
                >
                  Contact
                </a>
              </div>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="text-white p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-gradient-to-b from-[#1f1f1f] to-black/95 backdrop-blur-lg">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a
                href="#home"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                Home
              </a>
              <a
                href="#collections"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                Collections
              </a>
              <a
                href="#about"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                About
              </a>
              <a
                href="#contact"
                className="block px-3 py-2 text-white hover:text-yellow-400 transition-colors duration-300"
              >
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center overflow-hidden"
      >
        <div className="absolute inset-0">
          <div
            className="absolute   inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1584302179602-e4c3d3fd629d?auto=format&fit=crop&q=80)",
              filter: "brightness(0.3)",
            }}
          ></div>
          <div className="absolute inset-0 hero-gradient mix-blend-overlay"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-transparent to-black/50"></div>
        </div>
        <div className="relative z-10 text-center text-white max-w-4xl px-4">
          <div className="flex justify-center mb-6 animate-bounce-slow">
            <Crown className="w-16 h-16 text-yellow-400" />
          </div>
          <h1 className="text-5xl max-[530px]:text-lg  font-bold mb-6 animate-fade-in bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 to-yellow-400">
            S.P CNC JEWELLERS
          </h1>
          <p className="text-2xl animate-fade-in-delay text-gray-200">
            Jewels That Tell a Story of Elegance & Grace
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="py-16 px-4  bg-[#1b1b1b]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              icon: Diamond,
              title: "Finest Quality",
              desc: "Handpicked premium gems",
            },
            {
              icon: Star,
              title: "Expert Craftsmanship",
              desc: "Masterfully designed pieces",
            },
            {
              icon: Crown,
              title: "Luxury Service",
              desc: "Personal styling consultation",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="animate-on-scroll opacity-0 translate-y-10 bg-white/5 backdrop-blur-sm p-8 rounded-2xl border shadow-sm border-white/10 hover:bg-white/10 transition-all duration-300"
            >
              <feature.icon className="w-12 h-12 text-yellow-400 mb-4" />
              <h3 className="text-xl font-bold mb-2 text-white">
                {feature.title}
              </h3>
              <p className="text-transparent  bg-clip-text bg-gradient-to-r from-yellow-200 to-yellow-400">
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Collection Section */}
      <section id="collections" className="py-20 px-4 md:px-8 bg-[#1b1b1b] ">
        <h2 className="text-5xl font-bold text-center mb-4 text-white">
          Our Collections
        </h2>
        <p className="text-center text-gray-300 mb-16 max-w-2xl mx-auto">
          Discover our exquisite pieces, each telling its own story of beauty
          and sophistication
        </p>
        <div className="grid grid-cols-1  md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {[
            {
              title: "Diamond Collection",
              image:
                "https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?auto=format&fit=crop&q=80",
            },
            {
              title: "Gold Series",
              image:
                "https://images.unsplash.com/photo-1603561591411-07134e71a2a9?auto=format&fit=crop&q=80",
            },
            {
              title: "Pearl Essence",
              image:
                "https://images.unsplash.com/photo-1599643478518-a784e5dc4c8f?auto=format&fit=crop&q=80",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="animate-on-scroll  opacity-0 translate-y-10  p-1 transition-all duration-700 ease-out group"
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl aspect-[3/4]">
                <Image
                  loading="lazy"
                  fill
                  src={item.image}
                  alt={item.title}
                  className="absolute w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex flex-col justify-end p-8">
                  <h3 className="text-white text-2xl font-semibold">
                    {item.title}
                  </h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Location & Contact Section */}
      <section id="contact" className="py-20 bg-[#1b1b1b]  text-white">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="animate-on-scroll opacity-0 translate-x-[-50px]">
              <h2 className="text-4xl font-bold mb-8">Visit Our Boutique</h2>
              <div className="space-y-8 text-lg">
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <MapPin className="w-8 h-8 text-yellow-400" />
                  <p>
                    {" "}
                    S.P CNC JEWELLERS Shop No. 1, Shastri Nagar, Neoli Kalan,
                    Hisar, Haryana 125001
                  </p>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Phone className="w-8 h-8 text-yellow-400" />
                  <div className="flex flex-col">
                    <a href="tel:+91 81682 79274">+91 81682 79274</a>
                    <a href="tel:+91 94663 35874">+91 94663 35874</a>
                  </div>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Mail className="w-8 h-8 text-yellow-400" />

                  <a href="mailto:ps7082226@gmail.com">ps7082226@gmail.com</a>
                </div>
                <div className="flex items-center gap-4 p-4 bg-white/10 rounded-xl backdrop-blur-sm">
                  <Clock className="w-8 h-8 text-yellow-400" />
                  <div>
                    <p className="font-semibold mb-1">Opening Hours</p>
                    <p>
                      Mon-Sat: 10AM - 8PM
                      <br />
                      Sun: 12PM - 6PM
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex gap-6 mt-8">
                <a
                  href="https://www.instagram.com/parmod_soni_dhansu"
                  target="_Blank"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                >
                  <Instagram className="w-6 h-6" />
                </a>
                {/* <a
                  href="#"
                  className="p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors duration-300"
                >
                  <Facebook className="w-6 h-6" />
                </a> */}
              </div>
            </div>
            <div className="animate-on-scroll opacity-0 translate-x-[50px]">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3484.007922218558!2d75.7239227!3d29.1644388!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3912331c85c30305%3A0xcbee750d61ba2c0e!2sS.K.N%20JEWELLERS!5e0!3m2!1sen!2sin!4v1740383610249!5m2!1sen!2sin"
                  width="100%"
                  height="450"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="grayscale hover:grayscale-0 transition-all duration-300"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className=" bg-[#1f1f1f]  text-white py-12">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center mb-6">
                <Crown className="h-8 w-8 text-yellow-400" />
                <span className="ml-2 text-xl font-bold">
                  {" "}
                  S.P CNC JEWELLERS
                </span>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#home"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="#collections"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Collections
                  </a>
                </li>
                <li>
                  <a
                    href="#about"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Collections</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Diamond Collection
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Gold Series
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Pearl Essence
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-gray-400 hover:text-yellow-400 transition-colors"
                  >
                    Custom Design
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/10 text-center text-gray-400">
            <p>&copy; {date} S.P CNC JEWELLERS. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Home;
