import { HSL } from "../global/interface"

interface PreviewProp {
  hsl: HSL
}

export function Preview({ hsl }: PreviewProp) {
  const hslString = `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`
  const hslaString = `hsla(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%, 0.91)`
  
  return (
    <div className="preview">
      <div
        className="preview__color"
        style={{
          backgroundColor: hslString,
          boxShadow: `0px 0px 53px 13px ${hslaString}`,
        }}
      ></div>
    </div>
  )
}
