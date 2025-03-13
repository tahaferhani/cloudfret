"use client";
import { routing } from "@/i18n/routing";
import { usePathname } from "next/navigation";
import "./not-found.css";
import Link from "next/link";

const translations = {
  fr: {
    title: "Page Introuvable",
    description: "Désolé, la page que vous recherchez n'existe pas.",
    buttonText: "Aller à la page d'accueil"
  },
  en: {
    title: "Page Not Found",
    description: "Sorry, the page you are looking for does not exist.",
    buttonText: "Go to homepage"
  }
};

const NotFound = () => {
  const pathname = usePathname();
  let locale = pathname.split("/")[1];
  locale = routing.locales.includes(locale) ? locale : routing.defaultLocale;

  return (
    <section id="not-found">
      <div className="container">
        <div className="logo-title">
          <Link href="/">
            <img className="logo" src="/images/cloudfret-light.svg" alt="Cloudfret" />
          </Link>
          <span className="separator"></span>
          <h1 className="title">{translations[locale].title}</h1>
        </div>
        <p className="desc">{translations[locale].description}</p>
        <Link href="/" className="button">
          <img src="/images/icons/arrow-right.svg" alt="Arrow right icon" width={19} height={19} />
          {translations[locale].buttonText}
        </Link>
      </div>
    </section>
  )
}

export default NotFound
