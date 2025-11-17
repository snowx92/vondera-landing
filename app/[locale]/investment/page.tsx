"use client";

import BlurText from "@/components/BlurText";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import LightRays from "@/components/LightRays";
import { Badge } from "@/components/ui/Badge";
import { Container } from "@/components/ui/Container";
import { submitContact } from "@/lib/apis/contact";
import { motion } from "framer-motion";
import {
  ArrowRight,
  CheckCircle,
  ChevronLeft,
  ChevronRight,
  DollarSign,
  Download,
  Mail,
  PieChart,
  Rocket,
  Target,
  TrendingUp,
  Users,
} from "lucide-react";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";

export default function InvestmentPage() {
  const locale = useLocale();
  const t = useTranslations("investment");
  const isRTL = locale === "ar";

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    amount: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState("");

  // PDF viewer state
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 12;

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitError("");
    setSubmitSuccess(false);

    try {
      await submitContact({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        message: `Investment Inquiry - ${formData.amount}\n\nInvestment Amount: ${formData.amount}\nCompany: ${formData.company}\n\n${formData.message}`,
      });

      setSubmitSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        amount: "",
        message: "",
      });

      setTimeout(() => setSubmitSuccess(false), 5000);
    } catch (error: any) {
      setSubmitError(
        error?.message || "Failed to submit form. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const opportunities = [
    {
      icon: TrendingUp,
      title: t("opportunities.growth.title") || "Rapid Growth",
      description:
        t("opportunities.growth.description") ||
        "10,000+ active merchants and growing 40% MoM",
      color: "#693bbb",
    },
    {
      icon: Users,
      title: t("opportunities.market.title") || "MENA Market Leader",
      description:
        t("opportunities.market.description") ||
        "First-mover advantage in the fastest-growing e-commerce region",
      color: "#10B981",
    },
    {
      icon: Target,
      title: t("opportunities.revenue.title") || "Proven Revenue Model",
      description:
        t("opportunities.revenue.description") ||
        "Multiple revenue streams with strong unit economics",
      color: "#F59E0B",
    },
    {
      icon: Rocket,
      title: t("opportunities.vision.title") || "Clear Vision",
      description:
        t("opportunities.vision.description") ||
        "Path to becoming the next MENA unicorn",
      color: "#EC4899",
    },
  ];

  const metrics = [
    {
      value: "10,000+",
      label: t("metrics.merchants") || "Active Merchants",
      color: "#693bbb",
    },
    {
      value: "40%",
      label: t("metrics.growth") || "Monthly Growth",
      color: "#10B981",
    },
    {
      value: "$50M+",
      label: t("metrics.gmv") || "Annual GMV",
      color: "#F59E0B",
    },
    {
      value: "99.9%",
      label: t("metrics.uptime") || "Platform Uptime",
      color: "#EC4899",
    },
  ];

  return (
    <div className="min-h-screen bg-black" dir={isRTL ? "rtl" : "ltr"}>
      <Header variant="transparent" />

      <main className="min-h-screen pt-20 bg-black">
        {/* Vision Section with BlurText and LightRays */}
        <section className="py-10 md:py-16 bg-black relative">
          <div
            style={{
              width: "100%",
              height: "600px",
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              zIndex: 0,
            }}
          >
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
              <Badge className="mb-8 bg-primary-600 text-white border-none backdrop-blur-sm inline-flex items-center px-6 py-3 text-base shadow-2xl">
                <DollarSign className="w-5 h-5 mr-2" />
                {t("hero.badge") || "Investment Opportunity"}
              </Badge>

              <BlurText
                text="Join us in building the future of e-commerce in MENA. We are raising capital to scale our operations and dominate the region. Be part of Egypt's next unicorn story."
                delay={100}
                animateBy="words"
                direction="top"
                className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-relaxed mb-12"
              />
              <BlurText
                text="Take a Part of the Cake"
                delay={1500}
                animateBy="words"
                direction="top"
                className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-primary-500 leading-tight"
              />
            </div>
          </Container>
        </section>

        {/* Accelerated By Section */}
        <section className="py-12 sm:py-14 md:py-16 bg-black border-y border-gray-900">
          <Container>
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 sm:mb-10 md:mb-12"
              >
                <p className="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-2">
                  {t("acceleratedBy.badge") || "Accelerated By"}
                </p>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white px-4">
                  {t("acceleratedBy.title") || "Backed by Leading Programs"}
                </h3>
              </motion.div>

              {/* Marquee Container */}
              <div className="relative overflow-hidden">
                {/* Gradient Overlays */}
                <div className="absolute left-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-r from-black to-transparent z-10"></div>
                <div className="absolute right-0 top-0 bottom-0 w-20 md:w-32 bg-gradient-to-l from-black to-transparent z-10"></div>

                {/* Scrolling Logos */}
                <div className="flex">
                  <motion.div
                    className="flex gap-12 md:gap-16 pr-12 md:pr-16"
                    animate={{
                      x: ["0%", "-100%"],
                    }}
                    transition={{
                      duration: 30,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    {[
                      { name: "500 Startups", logo: "/500.png" },
                      { name: "AUC Venture Lab", logo: "/auc.png" },
                      { name: "Creativa Egypt", logo: "/itida.png" },
                      { name: "500 Startups", logo: "/500.png" },
                      { name: "AUC Venture Lab", logo: "/auc.png" },
                      { name: "Creativa Egypt", logo: "/itida.png" },
                    ].map((accelerator, index) => (
                      <div key={index} className="flex-shrink-0 group">
                        <div className="w-48 h-24 md:w-56 md:h-28 bg-white/5 border border-gray-800 flex items-center justify-center px-6 group-hover:border-primary-600 group-hover:bg-white/10 transition-all duration-300">
                          <img
                            src={accelerator.logo}
                            alt={accelerator.name}
                            className="object-contain max-w-full max-h-full opacity-70 group-hover:opacity-100 transition-all duration-300"
                            style={{ filter: "brightness(0) invert(1)" }}
                          />
                        </div>
                      </div>
                    ))}
                  </motion.div>
                </div>
              </div>
            </div>
          </Container>
        </section>

        {/* Investment Opportunities */}
        <section className="py-12 sm:py-16 md:py-20 bg-black">
          <Container>
            <div className="max-w-5xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-12 sm:mb-14 md:mb-16"
              >
                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4 sm:mb-6">
                  {t("opportunities.title") || "Why Invest in Vondera?"}
                </h2>
                <div className="w-16 sm:w-20 md:w-24 h-1 bg-primary-600 mx-auto mb-6 sm:mb-8"></div>
                <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto leading-relaxed">
                  {t("opportunities.subtitle") ||
                    "A unique opportunity to invest in the leading e-commerce platform in MENA"}
                </p>
              </motion.div>

              <div className="space-y-8 sm:space-y-10 md:space-y-12">
                {opportunities.map((opportunity, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="border-l-4 border-primary-600 pl-8 py-4"
                  >
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-400 text-lg md:text-xl leading-relaxed">
                      {opportunity.description}
                    </p>
                  </motion.div>
                ))}
              </div>

              {/* Key Highlights */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mt-20 text-center"
              >
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
                  <div>
                    <h4 className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">
                      10K+
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base">
                      Active Merchants
                    </p>
                  </div>
                  <div>
                    <h4 className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">
                      40%
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base">
                      Monthly Growth
                    </p>
                  </div>
                  <div>
                    <h4 className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">
                      $50M+
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base">
                      Annual GMV
                    </p>
                  </div>
                  <div>
                    <h4 className="text-5xl md:text-6xl font-bold text-primary-600 mb-2">
                      99.9%
                    </h4>
                    <p className="text-gray-400 text-sm md:text-base">Uptime</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Pitch Deck Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-black">
          <Container>
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 sm:mb-10 md:mb-12"
              >
                <Badge className="mb-4 bg-primary-600/20 text-primary-400 border border-primary-600 text-xs sm:text-sm">
                  <PieChart className="w-3 h-3 sm:w-4 sm:h-4 mr-2" />
                  {t("pitchDeck.badge") || "Pitch Deck"}
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
                  {t("pitchDeck.title") || "Our Vision & Strategy"}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                  {t("pitchDeck.subtitle") ||
                    "Explore our comprehensive pitch deck to learn more about our business model, market opportunity, and growth strategy"}
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="border border-gray-800 overflow-hidden"
              >
                {/* PDF Viewer */}
                <div className="aspect-[16/9] sm:aspect-[16/10] bg-black relative border-b border-gray-800">
                  <iframe
                    key={currentPage}
                    src={`/vondera pitch deck.pdf#page=${currentPage}`}
                    className="w-full h-full"
                    title="Vondera Pitch Deck"
                  />

                  {/* Navigation Controls */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black via-black/95 to-transparent p-3 sm:p-4 md:p-6">
                    <div className="flex items-center justify-between max-w-xs sm:max-w-md mx-auto">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage((prev) => Math.max(1, prev - 1));
                        }}
                        disabled={currentPage === 1}
                        className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed transition-all text-white border border-white/20"
                      >
                        <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>

                      <div className="text-white font-semibold text-base sm:text-lg">
                        {currentPage} / {totalPages}
                      </div>

                      <button
                        type="button"
                        onClick={(e) => {
                          e.preventDefault();
                          setCurrentPage((prev) =>
                            Math.min(totalPages, prev + 1)
                          );
                        }}
                        disabled={currentPage === totalPages}
                        className="p-2 sm:p-3 bg-white/10 hover:bg-white/20 disabled:bg-white/5 disabled:cursor-not-allowed transition-all text-white border border-white/20"
                      >
                        <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                      </button>
                    </div>
                  </div>
                </div>

                {/* Download Button */}
                <div className="p-4 sm:p-6 md:p-8 bg-black text-center border-t border-gray-800">
                  <a
                    href="/vondera pitch deck.pdf"
                    download
                    className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-black font-bold transition-all hover:bg-gray-200 text-sm sm:text-base"
                  >
                    <Download className="w-4 h-4 sm:w-5 sm:h-5" />
                    <span className="hidden sm:inline">
                      {t("pitchDeck.download") || "Download Full Pitch Deck"}
                    </span>
                    <span className="sm:hidden">
                      {t("pitchDeck.downloadShort") || "Download Deck"}
                    </span>
                  </a>
                </div>
              </motion.div>
            </div>
          </Container>
        </section>

        {/* Contact Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-black">
          <Container>
            <div className="max-w-6xl mx-auto px-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-center mb-8 sm:mb-10 md:mb-12"
              >
                <Badge className="mb-4 bg-primary-600/20 text-primary-400 border border-primary-600 text-xs sm:text-sm">
                  {t("contact.badge") || "Get in Touch"}
                </Badge>
                <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4 sm:mb-6 px-4">
                  {t("contact.title") || "Ready to Invest?"}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-gray-400 max-w-3xl mx-auto px-4">
                  {t("contact.subtitle") ||
                    "Let's discuss how you can be part of Vondera's growth story"}
                </p>
              </motion.div>

              <div className="grid lg:grid-cols-3 gap-6 sm:gap-8">
                {/* Contact Info */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-1 space-y-8"
                >
                  <div className="border-l-4 border-primary-600 pl-4 sm:pl-6">
                    <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 sm:mb-8">
                      {t("contact.info.title") || "Contact Our CEO"}
                    </h3>

                    <div className="space-y-4 sm:space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-400 mb-2 text-xs sm:text-sm uppercase tracking-wider">
                          {t("contact.info.email") || "Email CEO"}
                        </h4>
                        <a
                          href="mailto:mohamed.elshreef@vondera.app"
                          className="text-white hover:text-primary-400 transition-colors text-base sm:text-lg break-all"
                        >
                          mohamed.elshreef@vondera.app
                        </a>
                      </div>

                      <div className="pt-3 sm:pt-4 border-t border-gray-800">
                        <h4 className="font-semibold text-gray-400 mb-2 text-xs sm:text-sm uppercase tracking-wider">
                          {t("contact.info.company") || "Company"}
                        </h4>
                        <p className="text-white text-base sm:text-lg">
                          Vondera Technologies
                        </p>
                      </div>

                      <div className="pt-3 sm:pt-4 border-t border-gray-800">
                        <h4 className="font-semibold text-gray-400 mb-2 text-xs sm:text-sm uppercase tracking-wider">
                          {t("contact.info.status") || "Status"}
                        </h4>
                        <p className="text-white text-base sm:text-lg flex items-center">
                          <span className="inline-block w-2 h-2 bg-primary-600 rounded-full mr-2 sm:mr-3 animate-pulse"></span>
                          {t("contact.info.raising") || "Raising Now"}
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="border border-gray-800 p-4 sm:p-6">
                    <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                      <strong className="text-white">
                        {t("contact.info.note") || "Note:"}
                      </strong>{" "}
                      {t("contact.info.noteText") ||
                        "All investment inquiries are reviewed personally by our CEO. We typically respond within 24 hours."}
                    </p>
                  </div>
                </motion.div>

                {/* Contact Form */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="lg:col-span-2"
                >
                  <form
                    onSubmit={handleSubmit}
                    className="border border-gray-800 p-4 sm:p-6 md:p-8"
                  >
                    {submitSuccess && (
                      <div className="mb-4 sm:mb-6 p-3 sm:p-4 border-l-4 border-primary-600 bg-black/50 flex items-start gap-2 sm:gap-3">
                        <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-primary-600 flex-shrink-0 mt-0.5" />
                        <div>
                          <h4 className="font-semibold text-white mb-1 text-sm sm:text-base">
                            {t("contact.form.successTitle") ||
                              "Thank you for your interest!"}
                          </h4>
                          <p className="text-xs sm:text-sm text-gray-400">
                            {t("contact.form.successMessage") ||
                              "We've received your investment inquiry and will get back to you soon."}
                          </p>
                        </div>
                      </div>
                    )}

                    {submitError && (
                      <div className="mb-4 sm:mb-6 p-3 sm:p-4 border-l-4 border-red-600 bg-black/50">
                        <p className="text-xs sm:text-sm text-gray-400">
                          {submitError}
                        </p>
                      </div>
                    )}

                    <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
                      <div>
                        <label
                          htmlFor="name"
                          className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2"
                        >
                          {t("contact.form.name") || "Full Name"}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black border border-gray-800 focus:border-primary-600 transition-all text-white placeholder-gray-600"
                          placeholder={
                            t("contact.form.namePlaceholder") || "John Doe"
                          }
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="email"
                          className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2"
                        >
                          {t("contact.form.email") || "Email Address"}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black border border-gray-800 focus:border-primary-600 transition-all text-white placeholder-gray-600"
                          placeholder="john@company.com"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="phone"
                          className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2"
                        >
                          {t("contact.form.phone") || "Phone Number"}
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black border border-gray-800 focus:border-primary-600 transition-all text-white placeholder-gray-600"
                          placeholder="+20 123 456 7890"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="company"
                          className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2"
                        >
                          {t("contact.form.company") || "Company/Fund Name"}
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black border border-gray-800 focus:border-primary-600 transition-all text-white placeholder-gray-600"
                          placeholder={
                            t("contact.form.companyPlaceholder") ||
                            "Your Company"
                          }
                        />
                      </div>

                      <div className="sm:col-span-2">
                        <label
                          htmlFor="amount"
                          className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2"
                        >
                          {t("contact.form.amount") || "Investment Interest"}{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="amount"
                          name="amount"
                          required
                          value={formData.amount}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-black border border-gray-800 focus:border-primary-600 transition-all text-white placeholder-gray-600"
                        >
                          <option value="">
                            {t("contact.form.amountPlaceholder") ||
                              "Select investment range"}
                          </option>
                          <option value="$50K - $100K">$50K - $100K</option>
                          <option value="$100K - $250K">$100K - $250K</option>
                          <option value="$250K - $500K">$250K - $500K</option>
                          <option value="$500K - $1M">$500K - $1M</option>
                          <option value="$1M+">
                            ${t("contact.form.amountOver1M") || "1M+"}
                          </option>
                        </select>
                      </div>
                    </div>

                    <div className="mt-4 sm:mt-6">
                      <label
                        htmlFor="message"
                        className="block text-xs sm:text-sm font-semibold text-gray-300 mb-2"
                      >
                        {t("contact.form.message") ||
                          "Tell us about your investment interest"}{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={6}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-black border border-gray-800 focus:border-primary-600 transition-all resize-none text-white placeholder-gray-600 text-sm sm:text-base"
                        placeholder={
                          t("contact.form.messagePlaceholder") ||
                          "Tell us about your investment background, why you're interested in Vondera, and any questions you have..."
                        }
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="mt-4 sm:mt-6 w-full px-6 sm:px-8 py-3 sm:py-4 bg-primary-600 text-white font-bold hover:bg-primary-700 transition-all inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 sm:w-5 sm:h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                          {t("contact.form.sending") || "Sending..."}
                        </>
                      ) : (
                        <>
                          <span className="hidden sm:inline">
                            {t("contact.form.submit") ||
                              "Submit Investment Inquiry"}
                          </span>
                          <span className="sm:hidden">
                            {t("contact.form.submitShort") || "Submit Inquiry"}
                          </span>
                          <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </motion.div>
              </div>
            </div>
          </Container>
        </section>

        {/* CTA Section */}
        <section className="py-12 sm:py-16 md:py-20 bg-gradient-to-br from-primary-900 via-purple-900 to-primary-900">
          <Container>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-4xl mx-auto px-4"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 sm:mb-6">
                {t("cta.title") || "Join Us on This Journey"}
              </h2>
              <p className="text-base sm:text-lg md:text-xl text-white/90 mb-8 sm:mb-10">
                {t("cta.subtitle") ||
                  "Be part of building the future of e-commerce in MENA"}
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <a
                  href="mailto:mohamed.elshreef@vondera.app"
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white text-primary-600 font-bold hover:shadow-2xl transition-all text-sm sm:text-base md:text-lg inline-flex items-center justify-center gap-2">
                    <Mail className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    {t("cta.email") || "Email CEO"}
                  </button>
                </a>
                <a
                  href="/vondera pitch deck.pdf"
                  download
                  className="w-full sm:w-auto"
                >
                  <button className="w-full sm:w-auto px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-white/10 backdrop-blur-md text-white border-2 border-white/30 font-bold hover:bg-white/20 transition-all text-sm sm:text-base md:text-lg inline-flex items-center justify-center gap-2">
                    <Download className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
                    {t("cta.download") || "Download Deck"}
                  </button>
                </a>
              </div>
            </motion.div>
          </Container>
        </section>
      </main>

      <Footer />
    </div>
  );
}
