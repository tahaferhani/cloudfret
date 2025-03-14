import Heading from "@/components/heading";
import CloudfretFAQ from "@/sections/fuel/cloudfret-faq";
import CloudfretFuel from "@/sections/fuel/cloudfret-fuel";
import CloudfretOffers from "@/sections/fuel/cloudfret-offers";
import CloudfretSteps from "@/sections/fuel/cloudfret-steps";
import CloudfretHero from "@/sections/layout/cloudfret-hero";
import CloudfretAppstore from "@/sections/transporters/cloudfret-appstore";
import { useTranslations } from "next-intl";

const FuelPage = () => {
  const t = useTranslations("Fuel");

  return (
    <main>
      <CloudfretHero
        backgroud="/images/fuel/hero.jpg"
        icon="/images/fuel/title-icon.svg"
        title={t("Offre Carburant Cloudfret")}
        subtitle={t.raw("Conduisez plus loin, dépensez moins !")}
        buttonColor="color1" />
      <CloudfretFuel />
      <CloudfretOffers />
      <CloudfretSteps/>
      <CloudfretAppstore title={<Heading highlightColor="color1">L'offre Carburant CloudFret vous facilite la vie !</Heading>}/>
      <CloudfretFAQ/>
    </main>
  );
}

export default FuelPage;
