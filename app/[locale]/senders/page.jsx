import Heading from "@/components/heading";
import CloudfretTestimonials from "@/sections/home/cloudfret-testimonials";
import CloudfretHero from "@/sections/layout/cloudfret-hero";
import CloudfretAdvantages from "@/sections/senders/cloudfret-advantages";
import CloudfretAppstore from "@/sections/senders/cloudfret-appstore";
import CloudfretFunctionalities from "@/sections/senders/cloudfret-functionalities";
import CloudfretMobile from "@/sections/senders/cloudfret-mobile";
import CloudfretRoutes from "@/sections/senders/cloudfret-routes";
import { useTranslations } from "next-intl";

export default function TransportersPage() {
  const t = useTranslations("Senders");

  return (
    <div>
      <CloudfretHero
        backgroud="/images/senders/hero.jpg"
        icon="/images/senders/title-icon.svg"
        title={t("Expéditeurs")}
        titleColor="dark"
        titleBackground="color1"
        subtitle={t("Transportez vos marchandises partout, en toute simplicité et efficacité")}
        buttonText={t("Rejoingez la communauté des chargeurs")}
        buttonColor="color1"
        isButtonDark/>
      <CloudfretAdvantages/>
      <CloudfretFunctionalities/>
      <CloudfretMobile/>
      <CloudfretRoutes/>
      <CloudfretAppstore/>
      <CloudfretTestimonials title={<Heading color="dark" highlightColor="color1" noShape secondaryFont>Retour d'expérience de nos partenaires Expéditeurs</Heading>}/>
    </div>
  );
}
