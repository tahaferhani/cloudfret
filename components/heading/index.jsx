import clsx from "clsx"
import { useTranslations } from "next-intl";
import "./style.css"

/**
 * Heading component
 * @typedef {"dark" | "light"} Color
 * @typedef {"white" | "color1" | "color2"} HighlightColor
 * 
 * @param {object} props - The props object
 * @param {boolean} [props.center] - Whether the heading should be centered
 * @param {boolean} [props.small] - Whether the heading should be small
 * @param {Color} [props.color] - The color of the heading
 * @param {HighlightColor} [props.highlightColor] - The color of the highlight
 * @param {boolean} [props.shapeLeft] - Whether the highlight shape should be on the left
 * @param {boolean} [props.noShape] - Whether the heading contains the highlight shape
 * @param {boolean} [props.secondaryFont] - Whether the heading should use the secondary font
 * @param {string} props.className - The css class of the heading
 * @param {string} props.children - The content inside the heading
 */
const Heading = ({ className, center = true, small, color, highlightColor, shapeLeft, noShape, children }) => {
  const t = useTranslations("Headings");

  return (
    <h2 className={clsx("heading", color, highlightColor, { center, small, className })}>
      {
        t.rich(children, {
          mark: text => <mark className={clsx("highlight", highlightColor, { shapeLeft, noShape })}>{text}</mark>,
          br: () => <br />
        })
      }
    </h2>
  )
}

export default Heading