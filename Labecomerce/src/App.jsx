import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Header } from './Componentes/Header/Header'
import { GlobalStyle } from './GlobalStyles'
import { Main } from './Componentes/Main/Main'
import { PopUp } from './Componentes/PopUp/PopUp.jsx'
import { PopUpFilter } from './Componentes/PopUpFilter/PopUpFIlter'
import { Carrinho } from './Componentes/Carrinho/Carrinho'

function App() {


  const produtos = [
    {
      nome: "EXPLORER 1",
      img: "https://terramagna.com.br/wp-content/uploads/2022/09/aparelho-imagens-de-satelite-espaco-terra.jpg",
      preco: 1000000,
      descricao: "Os Estados Unidos lançaram seu primeiro satélite, que chegou à órbita da Terra em 31 de janeiro de 1958. A maior façanha do Explorer 1 foi confirmar a existência dos cinturões de Van Allen, que são zonas de partículas carregadas que armazenam a radiação na magnetosfera.",
      id: 1
    },
    {
      nome: "SPUTNIK",
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Sputnik_asm.jpg/800px-Sputnik_asm.jpg",
      preco: 200000,
      descricao: "O pontapé da corrida espacial foi dado pela União Soviética ao colocar com segurança o primeiro satélite artificial na órbita da Terra. O lançamento ocorreu em 4 de outubro de 1957 a partir de uma base no Cazaquistão, local que até hoje é usado para lançamentos espaciais russos. O Sputnik coletou dados sobre a densidade de camadas atmosféricas superiores, além de medir a qualidade dos sinais de rádio na ionosfera.",
      id: 2
    },
    {
      nome: "EXPLORER 6",
      img: "https://uploads.jovemnerd.com.br/wp-content/uploads/2022/02/satelite-capa.jpg",
      preco: 550000,
      descricao: "As principais funções do Explorer 6, lançado em agosto de 1959, eram estudar a radiação das camadas superiores e determinar a frequência com que micrometeoritos penetravam nossa atmosfera. Uma missão paralela fez a primeira imagem da Terra vista do espaço: um fotografia do México.",
      id: 3
    },
    {
      nome: "TIROS-1",
      img: 'https://images7.alphacoders.com/807/807182.jpg',
      preco: 460000,
      descricao: "Esse satélite foi o primeiro a ter funções meteorológicas, com duas câmeras acopladas que tiravam fotografias das nuvens sobre a Terra e enviavam os sinais via ondas de TV.",
      id: 4
    },
    {
      nome: "VOSTOK-1",
      img: 'https://wallpaperaccess.com/full/309407.jpg',
      preco: 290000,
      descricao: 'Em 1961, a União Soviética lançou o primeiro satélite com um homem a bordo. A frase "A Terra é azul!", de Yuri Gagarin, entrou para a história. O lançamento, em 12 de abril, foi visto como o ápice da corrida espacial, mas hoje é celebrado como o pontapé das jornadas espaciais. Até o momento, mais de 500 pessoas já foram ao espaço.',
      id: 5
    },
    {
      nome: "LUNA-10",
      img: 'https://wallpaperaccess.com/full/1581974.jpg',
      preco: 100000,
      descricao: "Em 1966, a União Soviética também foi a primeira a colocar um satélite na órbita da Lua. O Luna 10 mediu o campo magnético, a radiação, a gravidade e outras funções de nosso satélite natural. Um espectrômetro de raios gama também coletou informações sobre a composição do solo de lá. Na sequência dos marcos, a Apollo 8 foi a primeira a colocar humanos na órbita da Lua, em 1968, enquanto a Apollo 11 foi a histórica missão que pousou na Lua em 20 de julho de 1969.",
      id: 6
    },
    {
      nome: "MARINER-9",
      img: 'https://fractalsponge.net/wp/wp-content/uploads/2015/01/asd79.jpg',
      preco: 790000,
      descricao: "A NASA pretendia colocar duas sondas na órbita de Marte, mas a Mariner 8 fracassou. Assim, coube à Mariner 9 chegar sozinha ao Planeta Vermelho em 14 de novembro de 1971. Ela trabalhou dobrado, conseguiu cumprir as missões de ambas e mapeou 70% do solo marciano.",
      id: 7
    },
    {
      nome: "HUBBLE",
      img: 'https://img.ibxk.com.br/2020/10/09/09002822516488.jpg?ims=704x',
      preco: 2000000,
      descricao: "Apesar de não ter sido o primeiro telescópio espacial lançado, o Hubble marcou uma nova era na pesquisa espacial, incluindo estudos de longo prazo. Ele foi lançado em 1990 e registrou algumas das mais famosas imagens do Universo, como a dos Pilares da Criação, na nebulosa da Águia. Após 3 décadas, ele segue operante.",
      id: 8
    },
    {
      nome: "GALILEO",
      img: 'https://energiainteligenteufjf.com.br/wp-content/uploads/2020/09/qual-tamanho-satelite-tricurioso.jpg',
      preco: 127000,
      descricao: "Depois de outras sondas fazerem voos diretos a Júpiter, Galileo foi a primeira a orbitar o maior planeta do Sistema Solar, em 1995. Ele pesquisou a história geológica e as luas do gigante gasoso.",
      id: 9
    }
  ]


  const [showPopUp, setShowPopUp] = useState(false)
  const [clickId, setClickId] = useState("")
  const [showFiltro, setShowFiltro] = useState(false)
  const [valorMax, setValorMax] = useState(0)
  const [getValorMax, setGetValorMax] = useState(0)
  const [valorMin, setValorMin] = useState(0)
  const [getValorMin, setGetValorMin] = useState(0)
  const [buscaNome, setBuscaNome] = useState("")
  const [getBuscaNome, setGetBuscaNome] = useState("")
  const [showCarrinho, setShowCarrinho] = useState(false)
  const [carrinho, setCarrinho] = useState([])
  const [valorTotal, setValorTotal] = useState(0)
  const [contador, setContador] = useState(0);

  useEffect(() => {
    if (carrinho.length > 0) {
      localStorage.setItem("itensCarrinho", JSON.stringify(carrinho))
      localStorage.setItem("contador", JSON.stringify(contador))
    }
  }, [carrinho])

  useEffect(() => {
    const itensCarrinho = JSON.parse(localStorage.getItem("itensCarrinho"))
    const contadorGuardado = JSON.parse(localStorage.getItem("contador"))
    if (itensCarrinho) {
      setCarrinho(itensCarrinho)
      setContador(contadorGuardado)
    }
  }, [])

  useEffect(() => {
    if (valorTotal > 0) {
      localStorage.setItem("valorCarrinho", JSON.stringify(valorTotal))
    }
  }, [valorTotal])

  useEffect(() => {
    const valorCarrinho = JSON.parse(localStorage.getItem("valorCarrinho"))
    if (valorCarrinho) {
      setValorTotal(valorCarrinho)
    }
  }, [])

  // const valorTotalHandler = () => {
  //   for(i=0;i<carrinho.length;i++){
  //     setValorTotal(valorTotal+carrinho[i].preco)
  //   }
  // }



  const removerCarrinho = (id) => {

    setCarrinho(carrinho.filter((satelite) => {
      if (satelite.id !== id) {
        return satelite
      }
      else{
        setValorTotal(valorTotal - satelite.preco)
        console.log(valorTotal)
      }
    }))
    if(contador>0){
    setContador(contador-1)
    }
  }

  const adicionarCarrinho = (item) => {
    const clicado = produtos.filter((satelite) => (satelite.id == clickId))[0];
    clicado.id = Date.now()
    setCarrinho([...carrinho, clicado]);
    setValorTotal(valorTotal + clicado.preco)
    setContador(contador+1)
    console.log(contador)


  }

  // No Iphone se eu adiciono várias vezes no carrinho ele adiciona a mais

  // const adicionarCarrinho = (item) => {
  //   const clicado = produtos.filter((satelite)=>(satelite.id == clickId))[0];
  //   if(clicado.id != carrinho.filter((satelite)=>(satelite.id==clicado.id))[0].id){
  //     clicado.quantidade = 1; // Inicialmente, a quantidade é 1
  //     setCarrinho([...carrinho, clicado]);
  //   }
  //   else{
  //     clicado.quantidade++
  //   }

  //   console.log(carrinho);
  // }

  // const adicionarCarrinho = () => {
  //   const clicado = produtos.filter((satelite) => (satelite.id == clickId))[0];

  //   let itemExiste = false;
  //   const novoCarrinho = carrinho.map((item) => {
  //     if (item.id === clicado.id) {
  //       itemExiste = true;
  //       return {
  //         ...item,
  //         quantidade: item.quantidade + 1,
  //       };
  //     }
  //     return item;
  //   });

  //   if (!itemExiste) {
  //     novoCarrinho.push({ ...clicado, quantidade: 1 });
  //   }

  //   setCarrinho(novoCarrinho);
  //   console.log(carrinho);
  // };




  const buscaNomeHandler = (event) => {
    setBuscaNome(event.target.value)
    console.log(buscaNome)
  }

  const valorMaxHandler = (event) => {
    setValorMax(event.target.value)
    console.log(valorMax)
  }

  const valorMinHandler = (event) => {
    setValorMin(event.target.value)
    console.log(valorMin)
  }

  const valoresHandler = () => {
    setGetValorMax(valorMax)
    setGetValorMin(valorMin)
    setGetBuscaNome(buscaNome)
    console.log(getBuscaNome)
  }

  const resetValores = () => {
    setGetValorMax(0)
    setValorMax(0)
    setValorMin(0)
    setBuscaNome("")
  }

  const showCarrinhoHandler = () => {
    setShowCarrinho(!showCarrinho)
    console.log(showCarrinho)
  }

  const filterHandler = () => {
    setShowFiltro(!showFiltro)
  }

  const clickIdHandler = (event) => {
    setClickId(event.target.value)
  }

  const popUpHandler = (id) => {
    setShowPopUp(!showPopUp);
    setClickId(id)
    console.log(showPopUp)
    console.log(clickId)
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header showCarrinhoHandler={showCarrinhoHandler} contador={contador}/>
      {showPopUp && <PopUp produtos={produtos} clickId={clickId} adicionarCarrinho={adicionarCarrinho} />}
      {showFiltro && <PopUpFilter valorMax={valorMax} valorMaxHandler={valorMaxHandler} getValorMax={valorMax} valoresHandler={valoresHandler} resetValores={resetValores} valorMin={valorMin} valorMinHandler={valorMinHandler} buscaNome={buscaNome} buscaNomeHandler={buscaNomeHandler} />}
      {showCarrinho && <Carrinho carrinho={carrinho} removerCarrinho={removerCarrinho} setCarrinho={setCarrinho} valorTotal={valorTotal} />}
      <Main produtos={produtos} popUpHandler={popUpHandler} filterHandler={filterHandler} valorMax={getValorMax} valorMin={getValorMin} buscaNome={getBuscaNome} />
    </div>
  )
}

export default App
