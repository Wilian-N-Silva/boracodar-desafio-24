import { HSL } from "../global/interface"

interface PickerProps {
  value: number
  isHue: boolean
  hsl: HSL,
  iconPath: string,
  handleChange: (ev: React.ChangeEvent<HTMLInputElement>) => void
}

export function Picker({ value, isHue, iconPath, hsl, handleChange }: PickerProps) {
  const hslString = `hsl(${hsl.hue}, ${hsl.saturation}%, ${hsl.lightness}%)`

  return (
    <div className={`picker ${isHue ? "picker--hue" : ""}`}>
      <img src={iconPath} alt="" />
      <input
        type="range"
        min={0}
        max={isHue ? 360 : 100}
        step={1}
        value={value}
        onChange={handleChange}
        style={
          {
            "--hue-thumb-color": `${hslString}`,
          } as React.CSSProperties
        }
      />
    </div>
  )
}
