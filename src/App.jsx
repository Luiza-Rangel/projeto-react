
import Alunos from '../src/components/Alunos/Alunos.jsx'
import Botao from './components/Button/Button.jsx'

function App() {


  return (
    <>
      <Alunos nome= {'Cauã'} Idade={17} ativo={true} />
      <Alunos nome= {'Luiza'} Idade={18} />
      <Alunos nome= {'Alex'} Idade={40} ativo={true} />
      <Botao nome={'Teste'} />
      <Botao nome={'Etset'} />

    </>
  )
}

export default App
