import CloudfretNetwork from "@/sections/home/cloudfret-network";
import CloudfretAdvantages from "@/sections/home/cloudfret-advantages";
import CloudfretMobile from "@/sections/home/cloudfret-mobile";
import CloudfretTestimonials from "@/sections/home/cloudfret-testimonials";
import Heading from "@/components/heading";
import CloudfretIso from "@/sections/home/cloudfret-iso";
import Cloudfretblog from "@/sections/home/cloudfret-blog";
import CloudfretClients from "@/sections/home/cloudfret-clients";
import CloudfretHomeHero from "@/sections/home/cloudfret-home-hero";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";

export default function Home({ params }) {
  if (!routing.locales.includes(params.locale)) {
    notFound();
  }

  return (
    <main>
      <CloudfretHomeHero />
      <CloudfretNetwork />
      <CloudfretAdvantages />
      <CloudfretClients />
      <CloudfretMobile />
      <CloudfretTestimonials title={<Heading color="dark" highlightColor="color2" noShape secondaryFont>Ce que nos partenaires disent de Cloudfret</Heading>} />
      <CloudfretIso />
      <Cloudfretblog />
    </main>
  );
}
