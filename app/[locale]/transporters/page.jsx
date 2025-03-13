import Heading from "@/components/heading";
import CloudfretTestimonials from "@/sections/home/cloudfret-testimonials";
import CloudfretHero from "@/sections/layout/cloudfret-hero";
import CloudfretAdvantages from "@/sections/transporters/cloudfret-advantages";
import CloudfretAppstore from "@/sections/transporters/cloudfret-appstore";
import CloudfretFunctionalities from "@/sections/transporters/cloudfret-functionalities";
import CloudfretMobile from "@/sections/transporters/cloudfret-mobile";
import CloudfretRoutes from "@/sections/transporters/cloudfret-routes";
import { useTranslations } from "next-intl";

const TransportersPage = () => {
  const t = useTranslations("Transporters");

  return (
    <div>
      <CloudfretHero
        backgroud="/images/transporters/hero.jpg"
        icon="/images/transporters/title-icon.svg"
        title={t("Transporteurs")}
        titleColor="dark"
        titleBackground="color1"
        subtitle={t("Choisissez le chargement adéquat et garantissez votre paiement")}
        buttonText={t("Rejoingez la communauté des transporteurs")}
        buttonColor="color1"
        isButtonDark/>
      <CloudfretAdvantages/>
      <CloudfretFunctionalities/>
      <CloudfretMobile/>
      <CloudfretRoutes/>
      <CloudfretAppstore/>
      <CloudfretTestimonials title={<Heading color="dark" highlightColor="color1" noShape secondaryFont>Retour d'expérience de nos partenaires transporteurs</Heading>}/>
    </div>
  );
}

export default TransportersPage;