"use client";

import FuzzyText from "@/components/FuzzyText";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function MapSection() {
  const t = useTranslations("map");
  return (
    <section className="relative w-full max-w-full overflow-x-hidden overflow-y-visible bg-white pb-12 sm:pb-16 md:pb-20">
      {/* Top Shadow Overlay for Text - Long Fog Style */}
      <div
        className="absolute top-0 left-0 right-0 h-48 sm:h-56 md:h-64 lg:h-80 xl:h-96 z-10 pointer-events-none"
        style={{
          background:
            "linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(255, 255, 255, 0.9) 30%, rgba(255, 255, 255, 0.6) 60%, transparent 100%)",
        }}
      />

      {/* Header */}
      <div className="relative z-20 py-8 sm:py-10 md:py-12 lg:py-16 pb-6 sm:pb-8 px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center flex flex-col items-center justify-center max-w-full"
        >
          <div className="flex flex-col items-center gap-3 sm:gap-4 max-w-full">
            <div className="overflow-visible w-full text-center">
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900">
                <FuzzyText
                  fontSize="clamp(2rem, 7vw, 4rem)"
                  fontWeight={700}
                  color="#111827"
                  enableHover={false}
                  baseIntensity={0.15}
                >
                  {t("title")}
                </FuzzyText>
              </div>
            </div>
            <div className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-gray-900 flex-wrap justify-center max-w-full px-4">
              <span>{t("from")}</span>
              <span className="bg-gradient-to-r from-violet-600 to-purple-600 bg-clip-text text-transparent">
                {t("egypt")}
              </span>
              <span className="whitespace-nowrap">{t("toMiddleEast")}</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Map Background Container */}
      <div className="relative w-full max-w-full overflow-hidden">
        {/* Shadow overlay on top of map to blend with text area */}
        <div
          className="absolute top-0 left-0 right-0 h-32 sm:h-40 md:h-48 lg:h-64 xl:h-80 z-10 pointer-events-none"
          style={{
            background:
              "linear-gradient(to bottom, rgba(255, 255, 255, 0.95) 0%, rgba(255, 255, 255, 0.7) 20%, rgba(255, 255, 255, 0.4) 40%, transparent 100%)",
          }}
        />

        {/* Map Image - Full Width Background */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[800px] xl:h-[1000px]">
          <Image
            src="/Map.png"
            alt="Middle East Map showing Vondera's reach"
            fill
            className="object-cover object-center w-full"
            sizes="100vw"
            priority
          />
        </div>

        {/* Bottom Shadow Overlay */}
        <div className="absolute bottom-0 left-0 right-0 h-24 sm:h-32 md:h-40 lg:h-48 bg-gradient-to-t from-white via-white/80 to-transparent z-10 pointer-events-none" />
      </div>
    </section>
  );
}
