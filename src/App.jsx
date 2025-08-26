import { useState, useEffect } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import CountUp from 'react-countup'
import { Button } from '@/components/ui/button.jsx'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card.jsx'
import { Input } from '@/components/ui/input.jsx'
import { Textarea } from '@/components/ui/textarea.jsx'
import { Phone, MapPin, Clock, Shield, DollarSign, Users, CheckCircle, Star, MessageCircle, Mail, Car, Award, Zap, Heart, Image, Play, Download } from 'lucide-react'
import hopeMoveLogo from './assets/hope-move-logo.jpeg'
import qrCodeDriver from './assets/qr-code.png'
import qrCodePassengerNew from './assets/qr-code-passenger-new.png'
import driverIcon from './assets/driver-icon.jpg'
import './App.css'

function App() {
  const [activeSection, setActiveSection] = useState('home')
  const { scrollY } = useScroll()
  const y1 = useTransform(scrollY, [0, 300], [0, 50])
  const y2 = useTransform(scrollY, [0, 300], [0, -50])

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const fadeInLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const fadeInRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.6, ease: "easeOut" } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  }

  const scaleOnHover = {
    scale: 1.05,
    transition: { duration: 0.2 }
  }

  // Intersection Observer hooks
  const [heroRef, heroInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [aboutRef, aboutInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [driverRef, driverInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [contactRef, contactInView] = useInView({ threshold: 0.3, triggerOnce: true })
  const [appRef, appInView] = useInView({ threshold: 0.3, triggerOnce: true })

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header/Navigation */}
      <motion.header 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="bg-white/95 backdrop-blur-md shadow-lg fixed w-full top-0 z-50 border-b border-blue-100"
      >
        <nav className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <motion.div 
              className="flex items-center space-x-2 sm:space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <motion.img 
                src={hopeMoveLogo} 
                alt="Hope Move" 
                className="h-8 sm:h-10 md:h-12 w-auto rounded-lg shadow-md" 
                whileHover={{ rotate: 5 }}
                transition={{ duration: 0.3 }}
              />
              <span className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-[var(--hope-blue)] to-[var(--hope-pool-blue)] bg-clip-text text-transparent">
                Hope Move
              </span>
            </motion.div>
            <div className="hidden lg:flex space-x-4 xl:space-x-6">
              {[
                { id: 'home', name: 'Início' },
                { id: 'about', name: 'Sobre' },
                { id: 'driver', name: 'Seja Motorista' },
                { id: 'contact', name: 'Contato' }
              ].map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.3 }}
                  onClick={() => scrollToSection(section.id)}
                  className={`text-gray-700 hover:text-[var(--hope-blue)] transition-all duration-300 font-medium relative text-sm xl:text-base ${
                    activeSection === section.id ? 'text-[var(--hope-blue)]' : ''
                  }`}
                  whileHover={{ y: -2 }}
                >
                  {section.name}
                  {activeSection === section.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[var(--hope-blue)]"
                    />
                  )}
                </motion.button>
              ))}
            </div>
            <motion.a 
              href="tel:+5516991847676" 
              className="bg-gradient-to-r from-[var(--hope-yellow)] to-yellow-400 text-[var(--hope-black)] px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={scaleOnHover}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="bg-gradient-to-r from-[var(--hope-yellow)] to-yellow-400 text-[var(--hope-black)] hover:from-yellow-400 hover:to-yellow-500 text-xs sm:text-sm px-2 sm:px-3 py-1 sm:py-1.5 rounded-full font-semibold shadow-lg">
                  <Phone className="mr-1 h-3 w-3 sm:h-4 sm:w-4" />
                  <span className="hidden sm:inline">(16) 99184-7676</span>
                  <span className="sm:hidden">Ligar</span>
                </Button>
            </motion.a>
          </div>
        </nav>
      </motion.header>

      {/* Hero Section */}
      <section id="home" className="pt-20 bg-gradient-to-br from-[var(--hope-blue)] via-blue-600 to-[var(--hope-pool-blue)] text-white relative overflow-hidden">
        {/* Animated background elements */}
        <motion.div 
          style={{ y: y1 }}
          className="absolute top-20 left-10 w-32 h-32 bg-white/10 rounded-full blur-xl"
        />
        <motion.div 
          style={{ y: y2 }}
          className="absolute bottom-20 right-10 w-48 h-48 bg-yellow-400/20 rounded-full blur-xl"
        />
        
        <div className="container mx-auto px-4 py-16 md:py-20" ref={heroRef}>
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={heroInView ? "visible" : "hidden"}
          >
            <motion.h1 
              variants={fadeInUp}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent leading-tight"
            >
              HOPE MOVE
            </motion.h1>
            <motion.h2 
              variants={fadeInUp}
              className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-semibold mb-3 md:mb-4 text-yellow-200 px-2"
            >
              CORRIDAS 24 HS COM MOTORISTAS CREDENCIADOS
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-base sm:text-lg md:text-xl lg:text-2xl mb-6 md:mb-8 leading-relaxed px-2"
            >
              CHEGOU O APLICATIVO QUE ATENDE VOCÊ COM TODA A RAPIDEZ E SEGURANÇA QUE VOCÊ PRECISA
            </motion.p>
            <motion.p 
              variants={fadeInUp}
              className="text-sm sm:text-base md:text-lg mb-8 md:mb-12 opacity-90 max-w-2xl mx-auto px-4"
            >
              Ligue e faça suas corridas com segurança na cidade ou na região, com todo o conforto e segurança que você precisa.
            </motion.p>
            
            {/* Diferenciais com animações */}
            <motion.div 
              variants={staggerContainer}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-8 md:mb-12 px-2"
            >
              {[
                { icon: Clock, text: "Corridas 24h", color: "text-yellow-300" },
                { icon: MapPin, text: "Sistema leva e traz para aeroportos", color: "text-green-300" },
                { icon: Shield, text: "Motoristas credenciados", color: "text-blue-300" },
                { icon: DollarSign, text: "Preços justos", color: "text-yellow-300" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  variants={fadeInUp}
                  className="flex flex-col items-center p-4 md:p-6 rounded-xl bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all duration-300 shadow-lg"
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <item.icon className={`h-10 w-10 sm:h-12 sm:w-12 mb-2 md:mb-3 ${item.color} drop-shadow-lg`} />
                  <span className="text-xs sm:text-sm font-semibold text-center leading-tight">{item.text}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>

        {/* Wave separator */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-16 fill-gray-50">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z"></path>
          </svg>
        </div>
      </section>

      {/* App Download Section */}
      <section className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative" ref={appRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={appInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--hope-black)] mb-6 md:mb-8 bg-gradient-to-r from-[var(--hope-blue)] to-[var(--hope-pool-blue)] bg-clip-text text-transparent px-2"
            >
              Baixe nosso App
            </motion.h2>
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 md:gap-12">
              <motion.div 
                variants={fadeInLeft}
                className="flex-1 max-w-sm md:max-w-md"
                whileHover={{ scale: 1.02, rotate: 1 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white p-6 md:p-8 rounded-3xl shadow-2xl border border-blue-100">
                  <motion.img 
                    src={qrCodePassengerNew} 
                    alt="QR Code para download do app Hope Move" 
                    className="mx-auto h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 rounded-2xl shadow-lg"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                  />
                  <div className="mt-4 md:mt-6 text-center">
                    <div className="inline-flex items-center px-3 md:px-4 py-2 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-semibold">
                      <Zap className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                      Escaneie para baixar o aplicativo de passageiros
                    </div>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                variants={fadeInRight}
                className="flex-1 max-w-sm md:max-w-md"
              >
                <div className="space-y-4 md:space-y-6 px-2">
                  <motion.p 
                    className="text-lg sm:text-xl md:text-2xl text-gray-700 font-semibold leading-relaxed text-center lg:text-left"
                    variants={fadeInUp}
                  >
                    Acesse o aplicativo Hope Move e solicite sua corrida em segundos.
                  </motion.p>
                  <motion.div 
                    variants={staggerContainer}
                    className="space-y-3 md:space-y-4"
                  >
                    {[
                      { icon: Zap, text: "Download instantâneo" },
                      { icon: Car, text: "Interface intuitiva" },
                      { icon: Heart, text: "Experiência premium" }
                    ].map((feature, index) => (
                      <motion.div
                        key={index}
                        variants={fadeInUp}
                        className="flex items-center space-x-3 p-3 md:p-4 rounded-lg bg-white/70 backdrop-blur-sm shadow-md hover:shadow-lg transition-all duration-300"
                      >
                        <feature.icon className="h-5 w-5 sm:h-6 sm:w-6 text-[var(--hope-blue)] flex-shrink-0" />
                        <span className="text-gray-700 font-medium text-sm sm:text-base">{feature.text}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 md:py-20 bg-white relative" ref={aboutRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="max-w-6xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={aboutInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-center text-[var(--hope-black)] mb-8 md:mb-16 bg-gradient-to-r from-[var(--hope-blue)] to-[var(--hope-pool-blue)] bg-clip-text text-transparent px-2"
            >
              Quem Somos
            </motion.h2>
            <div className="flex flex-col lg:flex-row items-center gap-8 md:gap-12">
              <motion.div 
                variants={fadeInLeft}
                className="flex-1 space-y-4 md:space-y-6"
              >
                <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed px-2 text-center lg:text-left">
                  Na Hope Move, nossa missão é conectar pessoas com conforto, confiança e segurança, 24 horas por dia. 
                  Oferecemos corridas rápidas, seguras e com preços justos, com motoristas credenciados e um sistema 
                  exclusivo de leva e traz para aeroportos.
                </p>
                <motion.div 
                  className="grid grid-cols-2 gap-3 md:gap-4 mt-6 md:mt-8 px-2"
                  variants={staggerContainer}
                >
                  {[
                    { number: "24", label: "Horas de atendimento", icon: Clock },
                    { number: "100", label: "Motoristas credenciados", icon: Users },
                    { number: "5", label: "Anos de experiência", icon: Award },
                    { number: "1000", label: "Clientes satisfeitos", icon: Heart }
                  ].map((stat, index) => (
                    <motion.div
                      key={index}
                      variants={fadeInUp}
                      className="text-center p-3 md:p-4 rounded-xl bg-gradient-to-br from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all duration-300 shadow-md"
                      whileHover={{ scale: 1.05 }}
                    >
                      <stat.icon className="h-6 w-6 sm:h-8 sm:w-8 text-[var(--hope-blue)] mx-auto mb-1 md:mb-2" />
                      <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[var(--hope-blue)]">
                        {aboutInView && <CountUp end={parseInt(stat.number)} duration={2} />}
                        {stat.number.includes('+') && '+'}
                      </div>
                      <div className="text-xs sm:text-sm text-gray-600 font-medium leading-tight">{stat.label}</div>
                    </motion.div>
                  ))}
                </motion.div>
              </motion.div>
              <motion.div 
                variants={fadeInRight}
                className="flex-1 w-full"
              >
                <motion.div 
                  className="bg-gradient-to-br from-[var(--hope-blue)] to-[var(--hope-pool-blue)] text-white p-6 md:p-8 rounded-3xl shadow-2xl relative overflow-hidden"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="absolute top-0 right-0 w-48 h-48 bg-white/10 rounded-full blur-xl" />
                  <div className="absolute bottom-0 left-0 w-48 h-48 bg-yellow-400/20 rounded-full blur-xl" />
                  <h3 className="text-3xl font-bold mb-4">Nossa Missão</h3>
                  <p className="text-lg leading-relaxed opacity-90">
                    Conectar pessoas com segurança e conforto, transformando cada viagem em uma experiência excepcional.
                  </p>
                  <div className="mt-8">
                    <h4 className="text-xl font-semibold mb-2">Nossos Valores:</h4>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Segurança em primeiro lugar</li>
                      <li>Transparência e preços justos</li>
                      <li>Conforto e qualidade no serviço</li>
                      <li>Inovação contínua</li>
                    </ul>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Driver Section */}
      <section id="driver" className="py-20 bg-gradient-to-br from-blue-50 to-blue-100 relative" ref={driverRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={driverInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl font-bold text-[var(--hope-black)] mb-8 bg-gradient-to-r from-[var(--hope-blue)] to-[var(--hope-pool-blue)] bg-clip-text text-transparent"
            >
              Junte-se à nossa equipe
            </motion.h2>
            <motion.p 
              variants={fadeInUp}
              className="text-xl text-gray-700 leading-relaxed mb-12"
            >
              Quer fazer parte da Hope Move? Torne-se motorista credenciado e leve mais pessoas com segurança ao seu destino.
            </motion.p>

            {/* Driver Icon */}
            <motion.div 
              variants={fadeInUp}
              className="driver-icon-container mb-12"
            >
              <img 
                src={driverIcon} 
                alt="Motorista e passageiro no carro" 
                className="mx-auto w-full h-auto max-w-sm rounded-lg shadow-xl"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
              <motion.div 
                variants={fadeInLeft}
                className="space-y-6 text-left"
              >
                <h3 className="text-3xl font-bold text-[var(--hope-blue)] mb-4">Passos para cadastro</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <motion.li variants={fadeInUp} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Preencha formulário de interesse</span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Envie documentos para credenciamento</span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-center space-x-3">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span>Participe do treinamento online</span>
                  </motion.li>
                </ul>
              </motion.div>
              <motion.div 
                variants={fadeInRight}
                className="space-y-6 text-left"
              >
                <h3 className="text-3xl font-bold text-[var(--hope-blue)] mb-4">Vantagens em destaque</h3>
                <ul className="space-y-4 text-lg text-gray-700">
                  <motion.li variants={fadeInUp} className="flex items-center space-x-3">
                    <Star className="h-6 w-6 text-yellow-500" />
                    <span>Flexibilidade de horários</span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-center space-x-3">
                    <Users className="h-6 w-6 text-blue-500" />
                    <span>Apoio completo da central</span>
                  </motion.li>
                  <motion.li variants={fadeInUp} className="flex items-center space-x-3">
                    <DollarSign className="h-6 w-6 text-green-500" />
                    <span>Sistema de pagamento justo</span>
                  </motion.li>
                </ul>
              </motion.div>
            </div>

            {/* QR Code for Driver App */}
            <motion.div 
              variants={fadeInUp}
              className="qr-code-card mx-auto max-w-sm mt-12"
            >
              <img 
                src={qrCodeDriver} 
                alt="QR Code para download do aplicativo do motorista Hope Move" 
              />
              <p className="text-lg">Escaneie para baixar o aplicativo do motorista</p>
            </motion.div>

            <motion.button 
              variants={fadeInUp}
              className="mt-12 bg-gradient-to-r from-[var(--hope-yellow)] to-yellow-400 text-[var(--hope-black)] hover:from-yellow-400 hover:to-yellow-500 text-xl px-12 py-6 rounded-full font-bold shadow-2xl"
              whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0,0,0,0.3)" }}
              whileTap={{ scale: 0.95 }}
            >
              Quero ser motorista
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-[var(--hope-blue)] to-[var(--hope-pool-blue)] text-white relative" ref={contactRef}>
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            variants={staggerContainer}
            initial="hidden"
            animate={contactInView ? "visible" : "hidden"}
          >
            <motion.h2 
              variants={fadeInUp}
              className="text-5xl font-bold mb-8 bg-gradient-to-r from-white to-blue-100 bg-clip-text text-transparent"
            >
              Contato
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <motion.div 
                variants={fadeInLeft}
                className="space-y-6 text-left"
              >
                <h3 className="text-3xl font-bold mb-4">Central de Atendimento</h3>
                <p className="text-xl flex items-center space-x-3">
                  <Phone className="h-6 w-6 text-[var(--hope-yellow)]" />
                  <span>(16) 99184-7676</span>
                </p>
                <h3 className="text-3xl font-bold mt-8 mb-4">Endereço</h3>
                <p className="text-xl flex items-center space-x-3">
                  <MapPin className="h-6 w-6 text-[var(--hope-yellow)]" />
                  <span>Avenida dos Pupins, 975</span>
                </p>
                <p className="text-lg opacity-90 mt-2">CNPJ: 43.456.980/0001-44</p>
              </motion.div>
              <motion.div 
                variants={fadeInRight}
                className="flex-1"
              >
                <h3 className="text-3xl font-bold mb-4">Mapa interativo</h3>
                <div className="map-container rounded-xl overflow-hidden shadow-2xl">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.600702008899!2d-47.8879899!3d-21.200222!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b9b9b9b9b9b9b9%3A0x94b9b9b9b9b9b9b9!2sAvenida%20dos%20Pupins%2C%20975!5e0!3m2!1spt-BR!2sbr!4v1678912345678!5m2!1spt-BR!2sbr"
                    width="100%"
                    height="400"
                    style={{ border: 0 }}
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[var(--hope-black)] text-white py-10">
        <div className="container mx-auto px-4 text-center text-sm opacity-80">
          <p>© Hope Move — Todos os direitos reservados</p>
          <p className="mt-2">CNPJ 43.456.980/0001-44 • Avenida dos Pupins, 975 • Tel. (16) 99184-7676</p>
        </div>
      </footer>
    </div>
  )
}

export default App


