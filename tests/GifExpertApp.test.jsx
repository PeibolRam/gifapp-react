import { render, screen } from "@testing-library/react"
import GifExpertApp from "../src/GifExpertApp"

describe('Pruebas en e l componente <GifExpertApp />', () => {
  test('should first', () => {
    render(<GifExpertApp />)
    screen.debug()
  })
})