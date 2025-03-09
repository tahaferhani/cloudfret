"use client";
import { useTranslations } from "next-intl"
import "./style.css"
import { Fragment } from "react";
import { Link, usePathname } from "@/i18n/navigation";

const CloudfretNavbar = () => {
  const pathname = usePathname();
  const t = useTranslations("Layout");
  const menuItems = t.raw("menu-items");

  const handleActiveClass = (link) => {
    return pathname == link ? "active" : "";
  }

  return (
    <header id="cloudfret-navbar">
      <div className="logo-container">
        <div className="container">
          <Link href="/">
            <img src="/images/cloudfret.svg" alt="Cloudfret" />
          </Link>
        </div>
      </div>

      <nav>
        <div className="container">
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

                  <span className="separator"></span>
                </Fragment>
              ))
            }

            <a href="#" className="button">{t("Rejoingez la communauté")}</a>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default CloudfretNavbar