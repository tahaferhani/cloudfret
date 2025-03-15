"use client";
import { useLocale, useTranslations } from "next-intl"
import "./style.css"
import { Fragment, useEffect, useState } from "react";
import { Link, usePathname, useRouter } from "@/i18n/navigation";
import clsx from "clsx";

const CloudfretNavbar = () => {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = useLocale();

  const [menuOpen, setMenuOpen] = useState(false);
  const [openSubMenuIndex, setOpenSubMenuIndex] = useState(null);

  useEffect(() => {
    setMenuOpen(false);
    setOpenSubMenuIndex(null);
  }, [pathname])

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
          <div className={clsx("menu", { open: menuOpen })}>
            <img
              className="close-menu"
              src="/images/icons/close-white.svg"
              alt="Close"
              onClick={() => setMenuOpen(false)} />

            {
              menuItems.map((item, index) => (
                <Fragment key={index}>
                  {
                    !item.subItems ?
                      <Link href={item.link} className={handleActiveClass(item.link)}>
                        {item.title}
                      </Link>
                      :
                      <span className={clsx("menu-item has-submenu", { open: index == openSubMenuIndex })} onClick={() => setOpenSubMenuIndex(index == openSubMenuIndex ? null : index)}>
                        <span>{item.title}</span>
                        {
                          item.subItems && (
                            <div className="sub-menu">
                              {
                                item.subItems.map((subItem, subIndex) => (
                                  <Link
                                    key={subIndex}
                                    href={subItem.link}
                                    className={handleActiveClass(subItem.link)}
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
            src={`/images/flags/${currentLocale == "fr" ? "gb" : "fr"}.svg`}
            alt={currentLocale == "fr" ? "en" : "fr"} />

          <img
            className="burger-menu"
            src="/images/icons/burger-menu.svg"
            alt="Burger menu"
            onClick={() => setMenuOpen(true)} />
        </div>
      </nav>
    </header>
  )
}

export default CloudfretNavbar