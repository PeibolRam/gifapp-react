import { render, screen } from "@testing-library/react"
import { GifGrid } from "../../src/components/GifGrid"
import { useFetchGifs } from "../../src/hooks/useFetchGifs"


jest.mock('../../src/hooks/useFetchGifs')


describe('Pruebas en GifGrid', () => {
  const category = 'One punch'
  test('debe de mostrar el loading inicialmente', () => {

    useFetchGifs.mockReturnValue({
      images: [],
      isLoading: true
    })

    render(<GifGrid category={category} />)
    // screen.debug()

    expect(screen.getByText('Cargando...'))

  })

  test('Debe de mostrar items cuando se cargan las imagenes mediante useFetchGifs', () => {

    const gifs = [
      {
        id: 'abc',
        title: 'Saitama',
        url: 'https://localhost/saitama.jgp'
      },
      {
        id: 'abcd',
        title: 'Goku',
        url: 'https://localhost/Goku.jgp'
      }
    ]

    useFetchGifs.mockReturnValue({
      images: gifs,
      isLoading: false
    })


    render(<GifGrid category={category} />)

    expect( screen.getAllByRole('img').length).toBe(2)

  })
})