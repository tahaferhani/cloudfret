import CloudfretAdvantages from "@/sections/freight-forwarding/cloudfret-advantages";
import CloudfretBenefits from "@/sections/freight-forwarding/cloudfret-benefits";
import CloudfretHero from "@/sections/layout/cloudfret-hero";
import { useTranslations } from "next-intl";

export default function TransportersPage() {
  const t = useTranslations("Freight-Forwarding");

  return (
    <main>
      <CloudfretHero
        backgroud="/images/freight-forwarding/hero.jpg"
        icon="/images/freight-forwarding/title-icon.svg"
        title={t("Freight Forwarding")}
        titleBackground="color1"
        subtitle={t("Votre Freight Forwarder de Confiance pour des Expéditions Simplifiées")}
        buttonText={t("Votre devis personnalisé gratuit en 3 minutes")}
        buttonColor="color1" />
      <CloudfretAdvantages />
      <CloudfretBenefits/>
    </main>
  );
}
