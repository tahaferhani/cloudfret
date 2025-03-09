import CloudfretNetwork from "@/sections/home/cloudfret-network";
import CloudfretAdvantages from "@/sections/home/cloudfret-advantages";
import CloudfretMobile from "@/sections/home/cloudfret-mobile";
import CloudfretTestimonials from "@/sections/home/cloudfret-testimonials";
import Heading from "@/components/heading";
import CloudfretIso from "@/sections/home/cloudfret-iso";
import Cloudfretblog from "@/sections/home/cloudfret-blog";
import CloudfretPartners from "@/sections/home/cloudfret-partners";
import CloudfretHomeHero from "@/sections/home/cloudfret-home-hero";

export default function Home() {
  return (
    <div>
      <CloudfretHomeHero/>
      <CloudfretNetwork/>
      <CloudfretAdvantages/>
      <CloudfretPartners/>
      <CloudfretMobile/>
      <CloudfretTestimonials title={<Heading color="dark" highlightColor="color2" noShape secondaryFont>Ce que nos partenaires disent de Cloudfret</Heading>}/>
      <CloudfretIso/>
      <Cloudfretblog/>
    </div>
  );
}
