import { useState } from "react"
import { Preview } from "./components/Preview"
import { Picker } from "./components/Picker"
import { HSL } from "./global/interface"

import HueIcon from "./assets/color.svg"
import SaturationIcon from "./assets/contrast.svg"
import LightnessIcon from "./assets/brightness.svg"

function App() {
  const [hsl, setHsl] = useState<HSL>({
    hue: 272,
    saturation: 98,
    lightness: 50,
  })

  const handleHueChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target
    setHsl({ ...hsl, hue: parseInt(value) })
  }
  const handleSaturationChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target
    setHsl({ ...hsl, saturation: parseInt(value) })
  }
  const handleLightnessChange = (ev: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = ev.target
    setHsl({ ...hsl, lightness: parseInt(value) })
  }

  return (
    <div id="app">
      <Preview hsl={hsl} />
      <h1>Ajustes de Iluminação</h1>
      <div className="container">
        <Picker
          isHue={true}
          value={hsl["hue"]}
          iconPath={HueIcon}
          hsl={hsl}
          handleChange={handleHueChange}
        />
        <Picker
          iconPath={LightnessIcon}
          isHue={false}
          value={hsl["lightness"]}
          hsl={hsl}
          handleChange={handleLightnessChange}
        />
        <Picker
          iconPath={SaturationIcon}
          isHue={false}
          value={hsl["saturation"]}
          hsl={hsl}
          handleChange={handleSaturationChange}
        />
      </div>
    </div>
  )
}

export default App
