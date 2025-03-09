import { Link } from "@/i18n/navigation"
import clsx from "clsx"
import "./style.css"

/**
 * Button component
 * @typedef {"gradient" | "color1" | "color2"} HighlightColor
 * @typedef { "dark" | "light" } TextColor
 *
 * @param {object} props - The props object
 * @param {string} [props.href] - The link to redirect to
 * @param {HighlightColor} [props.color] - The color of the button
 * @param {TextColor} [props.textColor] - The color of the text
 * @param {boolean} [props.center] - Whether the button should be centered
 * @param {boolean} [props.small] - Whether the button should be small
 * @param {boolean} [props.full] - Whether the button should take full width
 * @param {boolean} [props.noArrow] - Whether the button should not have an arrow
 * @param {string} [props.className] - The css class of the button
 * @param {React.ReactNode} props.children - The content inside the button
 */
const Button = ({ href = "#", delay, className, color, textColor, center, small, full, noArrow, children }) => {
  return (
    <div className={clsx("button-container", { full, center })}>
      <Link href={href} className={clsx("button", color, textColor, { full, small }, className)}>
        {children}
        {!noArrow && <img src="/images/icons/arrow-right.svg" alt="Arrow right icon" width={19} height={19} />}
      </Link>
    </div>
  )
}

export default Button