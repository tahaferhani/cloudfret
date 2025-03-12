import CloudfretAdvantages from "@/sections/insurance/cloudfret-advantages";
import CloudfretAssistance from "@/sections/insurance/cloudfret-assistance";
import CloudfretForm from "@/sections/insurance/cloudfret-form";
import CloudfretTransportersAdvantages from "@/sections/insurance/cloudfret-transporters-advantages";
import CloudfretHero from "@/sections/layout/cloudfret-hero";
import { useTranslations } from "next-intl";

export default function TransportersPage() {
  const t = useTranslations("Insurance");

  return (
    <div>
      <CloudfretHero
        backgroud="/images/insurance/hero.jpg"
        icon="/images/insurance/title-icon.svg"
        title={t("Assurance")}
        titleColor="dark"
        titleBackground="color4"
        subtitle={t.raw("Protégez votre flotte avec notre assurance automobile exclusive")}
        buttonText={t("Profitez de tarifs avantageux dès maintenant")}
        buttonColor="color1" />
      <CloudfretAdvantages />
      <CloudfretAssistance/>
      <CloudfretTransportersAdvantages/>
      <CloudfretForm/>
    </div>
  );
}
