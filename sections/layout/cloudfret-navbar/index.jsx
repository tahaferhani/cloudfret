"use client";
import { useLocale, useTranslations } from "next-intl"
import "./style.css"
import { Fragment } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";

const CloudfretNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const t = useTranslations("Layout");
  const menuItems = t.raw("menu-items");

  const handleActiveClass = (link) => {
    return pathname == link ? "active" : "";
  }

  const switchLocale = () => {
    console.log(currentLocale)
    router.replace(pathname, { locale: currentLocale == "fr" ? "en" : "fr" });
  }

  return (
    <header id="cloudfret-navbar">
      <nav>
        <div className="container">
          <div className="logo">
            <Link href="/">
              <img src="/images/cloudfret.svg" alt="Cloudfret" />
            </Link>
          </div>
          <div className="menu">
            {
              menuItems.map((item, index) => (
                <Fragment key={index}>
                  {
                    !item.subItems ?
                      <Link href={item.link} className={handleActiveClass(item.link)}>
                        {item.title}
                      </Link>
                      :
                      <span className="menu-item has-submenu">
                        {item.title}
                        {
                          item.subItems && (
                            <div className="sub-menu">
                              {
                                item.subItems.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.link}
                                  >
                                    {subItem.title}
                                  </Link>
                                ))
                              }
                            </div>
                          )
                        }
                      </span>
                  }
                </Fragment>
              ))
            }

            {/* <a href="#" className="button">{t("Rejoingez la communauté")}</a> */}
          </div>
          
          <img
            className="locale"
            onClick={switchLocale}
            src={`/images/flags/${ currentLocale == "fr" ? "gb" : "fr" }.svg`}
            alt={ currentLocale == "fr" ? "en" : "fr" } />

          <img className="burger-menu" src="/images/icons/burger-menu.svg" alt="Burger menu" />
        </div>
      </nav>
    </header>
  )
}

export default CloudfretNavbar