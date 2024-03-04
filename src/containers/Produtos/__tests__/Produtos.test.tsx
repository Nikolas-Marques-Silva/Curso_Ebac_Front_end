import { screen, waitFor } from '@testing-library/react'
import { rest } from 'msw'
import { setupServer } from 'msw/node'

import Produtos from '../Produtos'
import { renderingWithProvider } from '../../../utils/tests'

const mocks = [
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
    plataformas: ['PS5']
  },
  {
    id: 3,
    categoria: 'jogos',
    imagem: 'https://via.placeholder.com/150',
    preco: 300,
    precoAntigo: 150,
    titulo: 'Jogo 3',
    plataformas: ['PS5']
  },
  {
    id: 4,
    categoria: 'jogos',
    imagem: 'https://via.placeholder.com/150',
    preco: 300,
    precoAntigo: 150,
    titulo: 'Jogo 4',
    plataformas: ['PS5']
  },
  {
    id: 5,
    categoria: 'jogos',
    imagem: 'https://via.placeholder.com/150',
    preco: 300,
    precoAntigo: 150,
    titulo: 'Jogo 5',
    plataformas: ['PS5']
  }
]

const server = setupServer(
  rest.get('http://localhost:4000/produtos', (req, res, ctx) => {
    return res(ctx.json(mocks))
  })
)

describe('Produtos component tests', () => {
  beforeAll(() => server.listen())

  afterEach(() => server.resetHandlers())

  afterAll(() => server.close())

  test('should render correctly with loading', () => {
    renderingWithProvider(<Produtos />)
    expect(screen.getByText('Carregando...')).toBeInTheDocument()
  })

  test('should render correctly with data', async () => {
    renderingWithProvider(<Produtos />)

    await waitFor(() => {
      expect(screen.getByText('Jogo 1')).toBeInTheDocument()
    })
  })
})
