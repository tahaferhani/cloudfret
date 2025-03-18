import CloudfretSwiching from "@/sections/brokers/cloudfret-switching";
import CloudfretHero from "@/sections/layout/cloudfret-hero";
import CloudfretFunctionalities from "@/sections/brokers/cloudfret-functionalities";
import CloudfretAppstore from "@/sections/transporters/cloudfret-appstore";
import { useTranslations } from "next-intl";
import CloudfretTestimonials from "@/sections/home/cloudfret-testimonials";
import Heading from "@/components/heading";

const FuelPage = () => {
  const t = useTranslations("Brokers");

  return (
    <main>
      <CloudfretHero
        backgroud="/images/brokers/hero.jpg"
        icon="/images/brokers/title-icon.svg"
        title={t("Commissionnaires")}
        subtitle={t.raw("Des camions pour vos chargements et des chargements pour vos camions en toute simplicité")}
        titleColor="dark"
        titleBackground="color1"
        buttonText={t("Rejoingez la communauté des commissionnaires")}
        buttonColor="color1"
        isButtonDark />
      <CloudfretSwiching />
      <CloudfretFunctionalities/>
      <CloudfretTestimonials lightBg title={<Heading color="dark" highlightColor="color1" noShape secondaryFont>Retour d'expérience de nos partenaires commissionnaires</Heading>}/>
      <CloudfretAppstore style2 />
    </main>
  );
}

export default FuelPage;
