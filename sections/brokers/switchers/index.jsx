import { useTranslations } from "next-intl"
import "./style.css"
import clsx from "clsx"

function Switchers({right}) {
  const t = useTranslations("Brokers")

  return (
    <div className="switcher">
      <p className="title">{t("Changer de rôle en")}</p>
      <div className={clsx("toggle-container", {right})}>
        <span>{t("Transporteur")}</span>
        <span className="toggle"></span>
        <span>{t("Chargeur")}</span>
      </div>
    </div>
  )
}

export default Switchers