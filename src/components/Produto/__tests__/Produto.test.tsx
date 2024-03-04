import Produto from '..'
import { renderingWithProvider } from '../../../utils/tests'
import { screen, fireEvent } from '@testing-library/react'

const jogo = {
  id: 1,
  categoria: 'jogos',
  imagem: 'https://via.placeholder.com/150',
  preco: 300,
  precoAntigo: 150,
  titulo: 'Jogo 1',
  plataformas: ['PS5']
}

describe('Produto component tests', () => {
  test('should render correctly', () => {
    renderingWithProvider(<Produto game={jogo} />)
    expect(screen.getByText('Jogo 1')).toBeInTheDocument()
  })

  test('should add a item to the cart', () => {
    const { store } = renderingWithProvider(<Produto game={jogo} />)
    fireEvent.click(screen.getByTestId('btn-comprar'))
    expect(store.getState().carrinho.itens).toHaveLength(1)
  })
})
