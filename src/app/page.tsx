"use client";

import NavbarLayoutFloatingInline from '@/components/navbar/NavbarLayoutFloatingInline';
import HeroCentered from '@/components/sections/hero/HeroCentered';
import MediaAbout from '@/components/sections/about/MediaAbout';
import FeatureCardTwentyFive from '@/components/sections/feature/FeatureCardTwentyFive';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import MetricCardFourteen from '@/components/sections/metrics/MetricCardFourteen';
import TestimonialCardTen from '@/components/sections/testimonial/TestimonialCardTen';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import { Sparkles, Layers, Share2, Video, BarChart2, Image } from "lucide-react";

export default function LandingPage() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="background-highlight"
      borderRadius="pill"
      contentWidth="smallMedium"
      sizing="largeSizeMediumTitles"
      background="blurBottom"
      cardStyle="glass-depth"
      primaryButtonStyle="double-inset"
      secondaryButtonStyle="solid"
      headingFontWeight="extrabold"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingInline
          brandName="Valency"
          navItems={[
            { name: "Inicio", id: "#hero" },
            { name: "Servicios", id: "#services" },
            { name: "Portafolio", id: "#portfolio" },
            { name: "Clientes", id: "#clients" },
            { name: "Contacto", id: "#contact" }
          ]}
          button={{ text: "Trabaja con nosotros", href: "#contact" }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroCentered
          title="Transformamos ideas en diseños que venden."
          description="Tu imagen define tu valor. Diseños que capturan atención. Haz que tu marca destaque."
          background={{ variant: "sparkles-gradient" }}
          avatars={[
            { src: "http://img.b2bpic.net/free-photo/woman-portrait-with-blue-lights-visual-effects_23-2149419444.jpg", alt: "futuristic team member avatar neon" },
            { src: "http://img.b2bpic.net/free-photo/handsome-young-man-wearing-checkered-shirt-standing-night-street-illuminated-signboards-neon-lights_613910-21240.jpg", alt: "futuristic team member avatar purple neon" },
            { src: "http://img.b2bpic.net/free-photo/thoughtful-young-man-holding-tablet-computer_1262-18737.jpg", alt: "futuristic team member avatar white neon" },
            { src: "http://img.b2bpic.net/free-photo/cyberpunk-boy-illustration_23-2151728190.jpg", alt: "futuristic team member avatar blue purple" },
            { src: "http://img.b2bpic.net/free-photo/person-eyeglasses-beside-blue-neon-signage_410324-127.jpg", alt: "futuristic team member avatar pink neon" }
          ]}
          avatarText="Nuestro equipo de élite creativo."
          buttons={[
            { text: "Ver Proyectos", href: "#portfolio" },
            { text: "Solicitar Diseño", href: "#contact" }
          ]}
          buttonAnimation="slide-up"
        />
      </div>

      <div id="about" data-section="about">
        <MediaAbout
          title="Acerca de Valency: Innovación y Diseño de Vanguardia"
          description="En Valency, fusionamos la creatividad de una agencia premium con la agilidad de una startup tecnológica para ofrecerte soluciones visuales que no solo se ven bien, sino que impulsan tu éxito. Nuestra pasión es transformar tus ideas en una marca inolvidable y de alto valor."
          imageSrc="http://img.b2bpic.net/free-photo/joyful-businesswoman-talking-with-remote-friend-online-videocall_482257-77662.jpg"
          imageAlt="Modern graphic design studio with neon lights"
          useInvertedBackground={true}
        />
      </div>

      <div id="services" data-section="services">
        <FeatureCardTwentyFive
          title="Nuestros Servicios Creativos de Alto Impacto"
          description="Impulsa tu marca con soluciones visuales estratégicas y un diseño que captura la esencia de tu visión."
          animationType="depth-3d"
          textboxLayout="default"
          useInvertedBackground={false}
          features={[
            {
              title: "Diseño de Logos",              description: "Creamos identidades únicas que reflejan la esencia de tu marca con distinción y modernidad.",              icon: Sparkles,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/arrow-with-bright-neon-colors_23-2151205001.jpg", imageAlt: "Abstract geometric logo design with neon glow" },
                { imageSrc: "http://img.b2bpic.net/free-photo/3d-render-music-notes-illustration-design-pen-tool-created-clipping-path-included-jpeg-easy-composite_460848-11458.jpg", imageAlt: "3D rendered animated logo on digital screen" }
              ]
            },
            {
              title: "Branding Integral",              description: "Desarrollamos una voz visual coherente para todas tus plataformas, asegurando un reconocimiento instantáneo.",              icon: Layers,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-futuristic-computer-desk_23-2151004292.jpg", imageAlt: "Futuristic brand identity presentation on tablet" },
                { imageSrc: "http://img.b2bpic.net/free-vector/flat-minimal-technology-landing-page_23-2149065461.jpg", imageAlt: "UI UX screen showing style guide with neon palette" }
              ]
            },
            {
              title: "Diseño para Redes Sociales",              description: "Contenido cautivador que dispara el engagement y la presencia digital de tu marca en cada interacción.",              icon: Share2,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/ai-site-helping-with-software-production_1268-21626.jpg", imageAlt: "Dynamic social media graphic with glowing neon shapes" },
                { imageSrc: "http://img.b2bpic.net/free-photo/person-searching-black-friday-sales-smartphone_23-2149093534.jpg", imageAlt: "Social media posts mockups with consistent branding" }
              ]
            },
            {
              title: "Edición de Video Profesional",              description: "Producción de video dinámico para contar tu historia con un impacto visual inigualable y moderno.",              icon: Video,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/3d-render-digital-technology-background-network-communications-sound-waves_1048-13254.jpg", imageAlt: "Abstract video editing timeline on holographic screen" },
                { imageSrc: "http://img.b2bpic.net/free-photo/3d-abstract-cyber-particles-background-design_1048-16913.jpg", imageAlt: "Split screen comparing raw and graded footage with neon effects" }
              ]
            },
            {
              title: "Marketing Visual Estratégico",              description: "Estrategias gráficas innovadoras que convierten espectadores en clientes fieles y embajadores de tu marca.",              icon: BarChart2,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/modern-equipped-computer-lab_23-2149241207.jpg", imageAlt: "Infographic with vibrant neon data visualizations" },
                { imageSrc: "http://img.b2bpic.net/free-photo/empty-billboard-metropolis-city_23-2151913736.jpg", imageAlt: "Digital advertisement mockup on futuristic billboard" }
              ]
            },
            {
              title: "Portadas y Banners Impactantes",              description: "Diseños que capturan la atención desde el primer vistazo, creando una primera impresión memorable.",              icon: Image,
              mediaItems: [
                { imageSrc: "http://img.b2bpic.net/free-photo/abstract-sale-busioness-background-banner-design-multipurpose_1340-16798.jpg", imageAlt: "Sleek website banner design with dynamic neon lines" },
                { imageSrc: "http://img.b2bpic.net/free-vector/gradient-abstract-shapes-cover-collection_23-2148921571.jpg", imageAlt: "Collection of digital covers with abstract neon art" }
              ]
            }
          ]}
        />
      </div>

      <div id="portfolio" data-section="portfolio">
        <ProductCardTwo
          title="Portafolio Exclusivo: Diseños que Dejan Huella"
          description="Explora una selección de nuestros proyectos más audaces y estratégicos, donde la innovación y el arte se encuentran para definir el futuro de las marcas."
          animationType="slide-up"
          gridVariant="bento-grid"
          textboxLayout="default"
          useInvertedBackground={true}
          products={[
            {
              id: "1",              brand: "Tech Innovations",              name: "Dashboard Analítico Interactivo",              price: "Desde $2,500",              rating: 5,
              reviewCount: "25",              imageSrc: "http://img.b2bpic.net/free-photo/representation-user-experience-interface-design_23-2150169840.jpg",              imageAlt: "Futuristic analytics dashboard UI design"
            },
            {
              id: "2",              brand: "AI Genesis",              name: "Identidad de Marca Completa",              price: "Desde $3,800",              rating: 5,
              reviewCount: "18",              imageSrc: "http://img.b2bpic.net/free-photo/smartphone-displayed-within-geometric-wireframe_187299-46683.jpg",              imageAlt: "AI startup brand identity system with neon logo"
            },
            {
              id: "3",              brand: "Creative Nexus",              name: "Diseño Web Dinámico y Responsivo",              price: "Desde $4,200",              rating: 5,
              reviewCount: "30",              imageSrc: "http://img.b2bpic.net/free-vector/graphic-designer-landing-page-template_23-2150837574.jpg",              imageAlt: "Dynamic website layout design for a creative agency"
            },
            {
              id: "4",              brand: "LuxTech Devices",              name: "Campaña Publicitaria Digital Premium",              price: "Desde $2,000",              rating: 5,
              reviewCount: "12",              imageSrc: "http://img.b2bpic.net/free-photo/neon-robot-vacuum-cleaner_23-2151349216.jpg",              imageAlt: "Striking digital advertisement for a luxury tech product"
            },
            {
              id: "5",              brand: "Future Magazine",              name: "Diseño Editorial de Vanguardia",              price: "Desde $1,500",              rating: 5,
              reviewCount: "9",              imageSrc: "http://img.b2bpic.net/free-vector/flat-design-minimal-technology-annual-report_23-2149120076.jpg",              imageAlt: "Editorial design for a high-end tech magazine"
            },
            {
              id: "6",              brand: "Motion Art Studios",              name: "Secuencias de Motion Graphics Abstractos",              price: "Desde $1,800",              rating: 5,
              reviewCount: "15",              imageSrc: "http://img.b2bpic.net/free-photo/green-flame-blazing-fire_23-2147763625.jpg",              imageAlt: "Captivating motion graphics sequence thumbnail"
            }
          ]}
        />
      </div>

      <div id="metrics" data-section="metrics">
        <MetricCardFourteen
          title="Resultados Tangibles que Impulsan tu Éxito"
          tag="Nuestro Impacto"
          metricsAnimation="slide-up"
          useInvertedBackground={false}
          metrics={[
            { id: "m1", value: "150+", description: "Proyectos Completados con Éxito" },
            { id: "m2", value: "98%", description: "Índice de Satisfacción del Cliente" },
            { id: "m3", value: "+300%", description: "Crecimiento Promedio de Marca para Nuestros Clientes" },
            { id: "m4", value: "5 Estrellas", description: "Calificación de Calidad en el Servicio" },
            { id: "m5", value: "10 Años", description: "De Experiencia en Diseño de Vanguardia" }
          ]}
        />
      </div>

      <div id="clients" data-section="clients">
        <TestimonialCardTen
          title="Historias de Éxito de Nuestros Clientes"
          description="Escucha de boca de quienes ya han transformado su marca con Valency. Su éxito es nuestra mejor carta de presentación."
          textboxLayout="default"
          useInvertedBackground={true}
          testimonials={[
            {
              id: "t1",              title: "Un Diseño que Superó las Expectativas",              quote: "Valency no solo entendió nuestra visión, sino que la elevó a un nivel que jamás imaginamos. La calidad y el impacto visual son inigualables.",              name: "Elena Torres",              role: "CEO, Global Innovations",              imageSrc: "http://img.b2bpic.net/free-photo/front-view-man-posing-studio_23-2150275662.jpg",              imageAlt: "Elena Torres, CEO Global Innovations"
            },
            {
              id: "t2",              title: "Impulso Estratégico para Nuestra Marca",              quote: "El equipo de Valency es excepcional. Su enfoque estratégico en el branding nos dio la identidad que necesitábamos para destacar en un mercado competitivo.",              name: "Ricardo Mendez",              role: "CTO, Quantum Solutions",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-hacker_23-2148165932.jpg",              imageAlt: "Ricardo Mendez, CTO Quantum Solutions"
            },
            {
              id: "t3",              title: "Contenido que Realmente Conecta",              quote: "Nuestras redes sociales han cobrado vida gracias a Valency. Su diseño para social media no solo es hermoso, sino que genera un engagement real.",              name: "Sofía Castro",              role: "Directora de Marketing, Bright Future Co.",              imageSrc: "http://img.b2bpic.net/free-photo/blond-businessman-surprised-expression_1194-3809.jpg",              imageAlt: "Sofía Castro, Directora de Marketing Bright Future Co."
            },
            {
              id: "t4",              title: "Resultados Medibles y Convincentes",              quote: "Desde el primer proyecto, Valency demostró un compromiso total. Los diseños no solo son estéticos, sino que han impulsado nuestras conversiones.",              name: "Juan Pablo Ríos",              role: "Gerente de Producto, Synapse Tech",              imageSrc: "http://img.b2bpic.net/free-photo/interior-portrait-handsome-man-vaporwave-style_23-2148950798.jpg",              imageAlt: "Juan Pablo Ríos, Gerente de Producto Synapse Tech"
            },
            {
              id: "t5",              title: "La Visión Clara que Necesitábamos",              quote: "Valency nos ayudó a definir nuestra identidad visual con una claridad y un estilo que verdaderamente representa nuestro espíritu innovador y ambicioso.",              name: "Laura Guzmán",              role: "Fundadora, Astra Digital",              imageSrc: "http://img.b2bpic.net/free-photo/pleasant-looking-young-woman-wears-casual-sweater-has-hair-bun-looks-with-calm-facial-expressions-poses-against-pink-neon-space_176532-11529.jpg",              imageAlt: "Laura Guzmán, Fundadora Astra Digital"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Nuestros Aliados Estratégicos y Marcas Clientes"
          description="Colaboramos con empresas visionarias que confían en Valency para elevar su identidad visual y dominar su mercado."
          textboxLayout="default"
          useInvertedBackground={false}
          names={[
            "InnovateCorp",            "FutureTech",            "Apex Solutions",            "Visionary Labs",            "Quantum Designs",            "Stellar Dynamics",            "OmniGroup"
          ]}
          speed={40}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactSplitForm
          title="Eleva tu Marca. Colabora con Valency."
          description="Listo para transformar tu visión en una realidad visual impactante? Completa el formulario y comencemos a crear tu próximo gran proyecto."
          inputs={[
            { name: "name", type: "text", placeholder: "Tu Nombre Completo", required: true },
            { name: "email", type: "email", placeholder: "Tu Correo Electrónico", required: true },
            { name: "subject", type: "text", placeholder: "Asunto del Proyecto" }
          ]}
          textarea={{ name: "message", placeholder: "Describe tu Proyecto o Necesidad (Opcional)", rows: 5 }}
          useInvertedBackground={true}
          imageSrc="http://img.b2bpic.net/free-photo/top-view-hand-holding-key_23-2149680278.jpg"
          imageAlt="Hands typing on a holographic keyboard with neon lights"
          mediaAnimation="slide-up"
          mediaPosition="right"
          buttonText="Solicitar Diseño Ahora"
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterMedia
          logoText="Valency"
          videoSrc="http://img.b2bpic.net/free-photo/3d-abstract-background-with-flowing-particle-waves_1048-18503.jpg"
          videoAriaLabel="Abstract animated neon background"
          columns={[
            {
              title: "Servicios",              items: [
                { label: "Diseño de Logos", href: "#services" },
                { label: "Branding Integral", href: "#services" },
                { label: "Diseño para Redes Sociales", href: "#services" },
                { label: "Edición de Video", href: "#services" },
                { label: "Marketing Visual", href: "#services" }
              ]
            },
            {
              title: "Valency",              items: [
                { label: "Inicio", href: "#hero" },
                { label: "Acerca de Nosotros", href: "#about" },
                { label: "Portafolio", href: "#portfolio" },
                { label: "Testimonios", href: "#clients" }
              ]
            },
            {
              title: "Contacto",              items: [
                { label: "Trabaja con Nosotros", href: "#contact" },
                { label: "info@valency.com", href: "mailto:info@valency.com" }
              ]
            }
          ]}
          copyrightText="© 2024 Valency. Todos los derechos reservados."
        />
      </div>
    </ThemeProvider>
  );
}
