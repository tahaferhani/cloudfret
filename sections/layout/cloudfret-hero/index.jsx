import Button from "@/components/button"
import clsx from "clsx"
import { Fade } from "react-awesome-reveal"
import parse from "html-react-parser"
import "./style.css"

/**
 * CloudfretHero component
 * @typedef { "dark" | "light" } TitleColor
 * @typedef { "color1" | "color2" | "color4" } BackgroundColor
 * @param {object} props - The props object
 * @param {String} props.backgroud - The background image
 * @param {String} props.title - The title of the hero section
 * @param {TitleColor} [props.titleColor] - The title color
 * @param {BackgroundColor} [props.titleBackground] - The title background color
 * @param {String} props.icon - The title icon
 * @param {String} props.subtitle - The subtitle of the hero section
 * @param {String} [props.buttonText] - The text of the button
 * @param {BackgroundColor} [props.buttonColor] - The color of the button
 * @param {Boolean} [props.isButtonDark] - Whether the button text should be dark
 */
const CloudfretHero = ({ backgroud, title, titleColor, titleBackground, icon, subtitle, buttonText, buttonColor, isButtonDark }) => {
  return (
    <section id="cloudfret-hero" style={{ backgroundImage: `url(${backgroud})` }}>
      <div className="container">
        <Fade direction="up" triggerOnce cascade>
          <h1 className={clsx("title", titleColor, titleBackground)}>
            <img src={icon} alt="icon" />
            {title}
          </h1>
          <p className="subtitle">{parse(subtitle)}</p>
          {
            buttonText && (
              <Button color={buttonColor} textColor={isButtonDark && "dark"}>{buttonText}</Button>
            )
          }
        </Fade>
      </div>
    </section>
  )
}

export default CloudfretHero