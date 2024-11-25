import React from 'react';
import { Sun, Coffee, UtensilsCrossed, Music2, MapPin, Phone } from 'lucide-react';

function NavBar() {
  return (
    <nav className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center">
            <Sun className="h-8 w-8 text-yellow-500" />
            <span className="ml-2 text-2xl font-bold text-gray-800">Sol y Vida</span>
          </div>
          <div className="hidden md:flex space-x-8">
            {['Inicio', 'Menú', 'Eventos', 'Contacto'].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="text-gray-700 hover:text-yellow-500 transition-colors px-3 py-2"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <div className="relative h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>
      <div className="relative h-full flex items-center justify-center text-center">
        <div className="max-w-3xl px-4">
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
            Bienvenidos a Sol y Vida
          </h1>
          <p className="text-xl text-white/90 mb-8">
            Donde la tradición española cobra vida en cada momento
          </p>
          <button className="bg-yellow-500 text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-yellow-600 transition-colors">
            Reservar Mesa
          </button>
        </div>
      </div>
    </div>
  );
}

function Features() {
  const features = [
    {
      icon: <Coffee className="h-8 w-8" />,
      title: "Café & Tapas",
      description: "Auténtico café español y tapas tradicionales"
    },
    {
      icon: <UtensilsCrossed className="h-8 w-8" />,
      title: "Cocina Tradicional",
      description: "Platos preparados con recetas ancestrales"
    },
    {
      icon: <Music2 className="h-8 w-8" />,
      title: "Música en Vivo",
      description: "Flamenco y música española en directo"
    }
  ];

  return (
    <div className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12">
          {features.map((feature, index) => (
            <div
              key={index}
              className="text-center p-6 rounded-xl hover:shadow-xl transition-shadow duration-300"
            >
              <div className="inline-flex items-center justify-center p-3 bg-yellow-100 rounded-full text-yellow-600 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Gallery() {
  const images = [
    "https://images.unsplash.com/photo-1515443961218-a51367888e4b?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80",
    "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&q=80"
  ];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
          Nuestra Experiencia
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative h-64 rounded-xl overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <img
                src={image}
                alt={`Gallery ${index + 1}`}
                className="w-full h-full object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="bg-white py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Encuéntranos
            </h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-yellow-500 mr-3" />
                <span className="text-gray-600">Calle del Sol 123, Madrid</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-yellow-500 mr-3" />
                <span className="text-gray-600">+34 912 345 678</span>
              </div>
            </div>
          </div>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Nombre"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <textarea
              placeholder="Mensaje"
              rows={4}
              className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
            />
            <button className="w-full bg-yellow-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-yellow-600 transition-colors">
              Enviar Mensaje
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center">
              <Sun className="h-8 w-8 text-yellow-500" />
              <span className="ml-2 text-2xl font-bold">Sol y Vida</span>
            </div>
            <p className="mt-4 text-gray-400">
              Trayendo lo mejor de España a tu mesa desde 1995
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Horario</h3>
            <p className="text-gray-400">Lunes - Jueves: 12:00 - 23:00</p>
            <p className="text-gray-400">Viernes - Domingo: 12:00 - 00:00</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Síguenos</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Instagram
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Facebook
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                Twitter
              </a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>© 2024 Sol y Vida. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
}

function App() {
  return (
    <div className="min-h-screen">
      <NavBar />
      <Hero />
      <Features />
      <Gallery />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;