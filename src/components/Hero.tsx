import eu from '../assets/images/eu.jpg'

function Hero(params:type) {
  return (
  <header className="flex flex-col items-center gap-4 py-10 text-center"> 
  <img src={eu} alt="Minha foto"
  className="w-40 rounded-3xl border-4 border-[#cba6f7]"/>
<h1 className="text-4xl font-bold text-[#cba6f7]">Vitor Hugo</h1>
      <p className="max-w-xl text-[#cdd6f4]">Estudantes de Programação - C, java,python,Rust(começando), Linux(NixOS)</p>
  </header>
  )
} 
export default Hero
