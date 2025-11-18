import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Container } from '@/components/ui/Container';
import ChromaGrid from '@/components/ChromaGrid';
import BlurText from '@/components/BlurText';
import LightRays from '@/components/LightRays';
import { useTranslations } from 'next-intl';

export default function AboutPage() {
  const t = useTranslations('aboutPage');
  const teamMembers = [
    {
      image: "/ceo.webp",
      title: "Mohamed Elshreef",
      subtitle: "CEO & Co-Founder",
      bio: "Tech-driven entrepreneur with a passion for solving real-world problems through innovation. Mohamed Elshreef is the Co-Founder & CEO of Vondera, bringing 8+ years of experience in AI, e-commerce, and startup leadership. Dedicated to empowering merchants across emerging markets, he blends technical expertise with visionary execution to build scalable digital infrastructure for commerce.",
      responsibility: "Oversees product strategy, growth operations, and fundraising. Leads cross-functional teams to align business goals with technology, while forging strategic partnerships to accelerate Vondera's impact in the region.",
      funFact: "Loves unwinding with a competitive game of League of Legends — main role: mid-laner!",
      borderColor: "#693bbb",
      gradient: "linear-gradient(145deg, #693bbb, #000)",
      url: "https://www.linkedin.com/in/snowx92/"
    },
    {
      image: "/cto.webp",
      title: "Shreif El Sayed",
      subtitle: "CTO & Founder",
      bio: "Full-stack developer with expertise in Node.js, Flutter, Firebase, and Google Cloud Functions, specializing in real-time apps, scalable Firestore queries, and cross-platform architecture. I've built systems ranging from matchmaking platforms to e-commerce engines with promo logic and analytics. Strong focus on performance, clean architecture, and end-to-end product delivery.",
      responsibility: "Technical architecture, development team leadership, and platform scalability. Ensures Vondera's technology can handle rapid growth while maintaining code quality and system reliability.",
      funFact: "I love BoJack Horseman",
      borderColor: "#10B981",
      gradient: "linear-gradient(180deg, #10B981, #000)",
      url: "https://www.linkedin.com/in/shreif-el-sayed-84a1b91b8/"
    },
    {
      image: "/coo.webp",
      title: "Marko Awad",
      subtitle: "COO & Co-Founder",
      bio: "Operations strategist with 12+ years in e-commerce and logistics, Marko specializes in scaling operations, optimizing fulfillment workflows, and building resilient merchant ecosystems. At Vondera, he ensures seamless execution across departments, from onboarding and support to partner relations and logistics integration. A strong believer in process automation and data-backed decisions to drive growth and retention.",
      responsibility: "Operations strategy, logistics optimization, and cross-departmental coordination. Ensures seamless execution from merchant onboarding to fulfillment workflows.",
      funFact: "I love creating stuff with CNC",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #000)",
      url: "https://www.linkedin.com/in/marco-awad-a16b88250/"
    },
    {
      image: "/front.webp",
      title: "Youssef Hussein",
      subtitle: "Frontend Engineer",
      bio: "Frontend Engineer specializing in building dynamic and scalable web applications with React.js and Next.js. Passionate about UI/UX design, I transform complex ideas into intuitive, high-performance, and visually appealing user interfaces. Committed to writing clean, maintainable code and continuously enhancing user experiences, I thrive in collaborative environments to deliver impactful digital solutions.",
      responsibility: "Frontend development, UI implementation, and user experience optimization. Transforms designs into high-performance, responsive web applications.",
      funFact: "I love making tattoos",
      borderColor: "#EC4899",
      gradient: "linear-gradient(160deg, #EC4899, #000)",
      url: "https://www.linkedin.com/in/youssefhussein919/"
    },
    {
      image: "/sales.jpg",
      title: "Zeyad Ahmed",
      subtitle: "Sales Specialist",
      bio: "I'm Zeyad, working in the sales team at Vondera. I help business owners understand how Vondera can make their work easier — from selling online to managing their business tools. I enjoy talking to people, understanding what they need, and showing them how Vondera can help. I connect with small and medium business owners every day, explaining Vondera's services in a simple way and helping them get started.",
      responsibility: "Sales strategy, client acquisition, and relationship building. Helps business owners understand and adopt Vondera's solutions while building trust and delivering real value.",
      funFact: "Once built a full personal rehab system to reset his mental, physical, emotional, and financial life — all while working 10-hour shifts and hitting the gym!",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(155deg, #06B6D4, #000)",
      url: "https://www.linkedin.com/in/zeyad-ahmed-377ab0206"
    },
        {
      image: "/sales2.jpg",
      title: "Yousif Mahmoud",
      subtitle: "Sales Specialist",
      bio: "As a Vondera Advisor, you support new and existing merchants to help them get the most out of the platform. Your role focuses on guiding users through setup, understanding their business needs, offering solutions, and ensuring they launch and grow successfully using Vondera’s tools.",
      responsibility: "Sales strategy, client acquisition, and relationship building. Helps business owners understand and adopt Vondera's solutions while building trust and delivering real value.",
      funFact: "Your daily routine is basically: work → follow-ups → gym → repeat.!",
      borderColor: "#06B6D4",
      gradient: "linear-gradient(155deg, #06B6D4, #000)",
      url: "https://www.linkedin.com/in/zeyad-ahmed-377ab0206"
    },
    {
      image: "/eyad.webp",
      title: "Eyad Mohamed",
      subtitle: "Flutter Developer",
      bio: "Flutter Developer specializing in building mobile applications with Flutter. Passionate about UI/UX design, I transform complex ideas into intuitive, high-performance, and visually appealing user interfaces. Committed to writing clean, maintainable code and continuously enhancing user experiences, I thrive in collaborative environments to deliver impactful digital solutions.",
      responsibility: "Flutter development, UI implementation, and user experience optimization. Transforms designs into high-performance, responsive mobile applications.",
      funFact: "N/A",
      borderColor: "#EF4444",
      gradient: "linear-gradient(140deg, #EF4444, #000)",
      url: "https://www.linkedin.com/in/eyad-gomaa/"
    }
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen pt-20 bg-black">
        {/* Vision Section with BlurText */}
        <section className="py-10 md:py-16 bg-black relative">
          <div style={{ width: '100%', height: '600px', position: 'absolute', top: 0, left: 0, right: 0, zIndex: 0 }}>
            <LightRays
              raysOrigin="top-center"
              raysColor="#662ad6ff"
              raysSpeed={1.5}
              lightSpread={0.8}
              rayLength={1.2}
              followMouse={true}
              mouseInfluence={0.1}
              noiseAmount={0.1}
              distortion={0.05}
              className="custom-rays"
            />
          </div>
          <Container className="relative z-10">
            <div className="max-w-7xl mx-auto text-center">
              <BlurText
                text={t('vision.text1')}
                delay={100}
                animateBy="words"
                direction="top"
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-relaxed mb-12"
              />
              <BlurText
                text={t('vision.text2')}
                delay={1500}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-500 leading-tight"
              />
            </div>
          </Container>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-black">
          <Container className="max-w-7xl px-6 md:px-12">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                {t('team.title')}
              </h2>
              <p className="text-xl md:text-2xl text-gray-400 max-w-3xl mx-auto">
                {t('team.subtitle')}
              </p>
            </div>
            <div style={{ minHeight: '800px', position: 'relative' }}>
              <ChromaGrid 
                items={teamMembers}
                radius={300}
                columns={3}
                damping={0.45}
                fadeOut={0.6}
                ease="power3.out"
              />
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
