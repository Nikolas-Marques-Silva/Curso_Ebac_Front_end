import { screen } from '@testing-library/react'
import Header from '..'
import { renderingWithProvider } from '../../../utils/tests'

describe('Header component tests', () => {
  test('should render correctly', () => {
    renderingWithProvider(<Header />)
    expect(screen.getByText('EBAC Games')).toBeInTheDocument()
  })

  test('should render with 2 itens in the cart', () => {
    renderingWithProvider(<Header />, {
      preloadedState: {
        carrinho: {
          itens: [
            {
              id: 1,
              categoria: 'jogos',
              imagem: 'https://via.placeholder.com/150',
              preco: 300,
              precoAntigo: 150,
              titulo: 'Jogo 1',
              plataformas: ['PS5']
            },
            {
              id: 2,
              categoria: 'jogos',
              imagem: 'https://via.placeholder.com/150',
              preco: 300,
              precoAntigo: 150,
              titulo: 'Jogo 2',
              plataformas: ['XBOX', 'PC']
            }
          ]
        }
      }
    })
    expect(screen.getByTestId('qtd-carrinho').innerHTML).toContain('2 itens')
  })
})
