import CloudfretAdvantages from "@/sections/green/cloudfret-advantages";
import CloudfretBenefits from "@/sections/green/cloudfret-benefits";
import CloudfretForm from "@/sections/green/cloudfret-form";
import CloudfretPartners from "@/sections/green/cloudfret-partners";
import CloudfretSuperchargers from "@/sections/green/cloudfret-superchargers";
import CloudfretTrucks from "@/sections/green/cloudfret-trucks";
import CloudfretHero from "@/sections/layout/cloudfret-hero";
import { useTranslations } from "next-intl";

const GreenPage = () => {
  const t = useTranslations("Green");

  return (
    <main>
      <CloudfretHero
        backgroud="/images/green/hero.jpg"
        icon="/images/green/title-icon.svg"
        title={t("Cloudfret Green")}
        titleBackground="color2"
        subtitle={t("Votre Partenaire pour des Solutions de Transport Durables")} />
      <CloudfretAdvantages />
      <CloudfretTrucks/>
      <CloudfretSuperchargers/>
      <CloudfretBenefits/>
      <CloudfretPartners/>
      <CloudfretForm/>
    </main>
  );
}

export default GreenPage;