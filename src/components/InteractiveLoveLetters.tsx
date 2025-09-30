import React, { useState, useRef, useEffect } from 'react';
import { Heart, Mail, Sparkles, Star, Gift } from 'lucide-react';

interface Letter {
  id: number;
  title: string;
  content: string;
  author: string;
  date: string;
  color: string;
  surprise?: string;
  animation?: string;
}

export const InteractiveLoveLetters: React.FC = () => {
  const [flippedCards, setFlippedCards] = useState<Set<number>>(new Set());
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  const letters: Letter[] = [
    {
      id: 1,
      title: 'Para Minha Linda Fernanda 🌼',
      content: 'Fer oque eu posso dizer(só uma palinha)é que nunca me senti tão bem. Você além de linda( e bota linda em mds)é perfeitinha demais, tudo em você é perfeito. Eu te admiro demais e me inspiro a ser melhor, olhando como você é uma mulher dedicada, focada, inteligente e forte. Eu sou a pessoa mais feliz do mundo por ter conquistado essa pessoa maravilhosa que tu é.Quero que você conte comigo a partir de hoje. Quero estar presente não só na sua alegria, mas na sua tristeza também. Tem algo em você que, desde quando começamos a conversar, tudo, absolutamente TUDO, tem dado certo na minha vida. Fernanda, você com toda a certeza é o amor da minha vida e a pessoa que venho pedindo a Deus. Eu tinha desistido do amor, pensei em focar na minha vida profissional, mas você chegou com seu jeitinho e simplesmente balançou demais meu coração. Não me canso de ouvir sua risada, de ver seu sorriso. Ver você estando feliz perto de mim é a melhor coisa desse mundo. Sempre fico com um sorriso bobo perto de você e a cada dia que passa quero te conquistar cada vez mais.Tem muita coisa a acontecer ainda na nossa vida como você falou "somos voce e eu" quero cuidar de voce quero te proteger e sempre quero te apoiar em tudo oque tu for fazer. Sua reação foi genuína como você falou hoje, foi tudo muito bom todos os nossos momentos até agora foram simplesmente perfeitos e até quando for dormir vou repassar nossos momento em minha cabeça mas para finalizar "você não é a República Francesa, mas me fez perder a cabeça"Akkakakkaa eu te amo demais, minha mesomorfozinha❤️',
      author: 'Yan',
      date: '25/06/2024',
      color: 'from-purple-300 to-lavender-400',
      surprise: '🌸 Você faz cada dia parecer uma caminhada por um campo de margaridas!',
      animation: 'heartbeat'
    },
    {
      id: 2,
      title: 'Minha Doce Fernanda 💜',
      content: 'Não há palavras suficientes para expressar o quanto você significa para mim, mas vamos lá. Você é uma pessoa dedicada, esforçada e obstinada, sempre buscando o melhor em tudo o que faz, tanto nos estudos como em qualquer coisa que faça. Sua beleza é extraordinária, não apenas pela aparência, mas também por quem tu é por dentro. A maneira como você pensa é diferente e por incrivel que pareça somos meio parecidos nessa parte, você é uma pessoa muito mente aberta admiro isso em você também. Sua personalidade observadora é algo que me encanta profundamente. Você percebe os detalhes que passam despercebidos por outros. Essa habilidade não só demonstra sua sensibilidade, mas também a profundidade do seu entendimento sobre as pessoas e o mundo. Seus olhos são verdadeiramente encantadores. Eles são como dois faróis radiantes, sempre brilhando com uma luz que revela tanto a sua essência quanto a profundidade do seu ser. Cada olhar seu tem a capacidade de tocar minha alma e aquecer meu coração de uma maneira indescritível. E o seu cabelo cacheado, com cada cacho perfeitamente formado, é lindo e perfeito. Ele é como uma cascata de ondas suaves, moldando seu rosto com uma beleza única e autêntica. Admiro como os cachos caem de maneira tão natural e exuberante, refletindo a sua própria vivacidade e charme. Sua timidez é uma das qualidades mais adoráveis que encontro em você. Quando você sorri de forma genuína e balança o seu corpo, meu coração se derrete. Seu jeito espontâneo de falar e dançar traz uma alegria contagiante aos meus dias e me faz apaixonar ainda mais por você. O amor profundo e sincero que você me oferece é um tesouro que valorizo mais do que qualquer outra coisa. Seu coração bondoso e generoso é um farol que ilumina a vida de todos ao seu redor, sempre pronto para ajudar e apoiar. Não consigo parar de pensar em você. Mesmo quando a distância nos separa, sua presença é constante em meus pensamentos, e sempre me lembro do quanto você é especial e dos momentos que tivemos juntos. Amar você é a coisa mais natural e maravilhosa do mundo. Você é perfeita em todos os sentidos, e eu sou eternamente grato por ter você ao meu lado.',
      author: 'Yan',
      date: '28/07/2024',
      color: 'from-lavender-300 to-purple-400',
      surprise: '🌿 Nossa história de amor floresce como o mais belo jardim!',
      animation: 'float'
    },
    {
      id: 3,
      title: 'Para Minha Pequena Margarida 🌼',
      content: 'Hoje faz três meses que estamos juntos, mais um mês que passou voando ao seu lado. Acho muito louco que, desde que você chegou, os dias estão mais leves e divertidos. Você é uma mulher incrível, sabia? Tipo, você é completa mesmo, meu amor. A cada mês que passa, eu só tenho mais certeza de que te amo muito. E é louco também o impacto que você teve na minha vida só ao chegar nela. Além de os meus dias estarem mais leves, eu estou mais feliz do que antes e querendo dar o meu melhor, tanto no trabalho quanto na faculdade, para que, no futuro, nossa vida seja mais fácil e confortável. Mas, Fernanda, eu acredito que fomos feitos um para o outro de verdade, porque nunca senti algo tão forte por alguém. E parece realmente que a gente se completa. Ultimamente, estou percebendo que você está mais radiante, brilhando mesmo. Para mim, que conheci uma versão sua mais introspectiva, é muito bom ver você assim, sorrindo com leveza, fazendo mais piadas e brincadeiras. Você realmente parece brilhar enquanto vive agora, amor, e é tão bom ver essa sua versão. Acho que ela sempre esteve aí, mas você a guardou, e agora a libertou. Estou amando ainda mais você por mostrar essas versões suas. Agora que fizemos três meses juntos, te conheço bem melhor que antes, mas, mesmo assim, já era o que eu pensava de qualquer jeito, e estou te amando cada dia mais e mais. Enrolei muito nessa carta, meu Deus! Mas agora vamos aos momentos desse mês. Esse mês foi mais parado em relação aos outros, mas aconteceram coisas inesperadas, como a gente fazer uma entrevista de emprego juntos e quase morrer de rir depois que a entrevista acabou. E também, nesse mesmo dia, eu te dei a primeira rosa. Queria dar um buquê, mas resolvi começar com uma rosa, pensei eu. Então dei uma rosa com um chocolatinho. Gostei muito da sua reação e de como você usou a rosa para fazer o quadro. Fiquei muito feliz mesmo. Depois teve o dia em que assistimos filmes juntos, foram "Barbie", "Harry Potter" (meu Deus, assistimos HP juntos, fiquei feliz demais) e "Diário de uma Paixão". Foi um dia diferente para mim, mas gostei muito, sério. Depois foi o dia em que você veio conhecer a casa do meu pai. Foi um dia muito bom para mim também, porque consegui passar o dia com você. Almoçamos e tudo mais. Ficamos na rede, o que foi um momento muito gostoso. Mais à noite, você foi no meu computador, onde compramos jogos para jogarmos. Esse dia foi muito bom e importante para mim. E depois, o mais inesperado: eu finalmente dormi na sua casa. Fiquei quase o dia inteiro com você e ainda dormi lá. Esse dia foi simplesmente maravilhoso, sério mesmo. Tivemos um momento de leitura, assistimos filmes, seu irmão chegou, brincamos com a Alice, dormimos juntos quase, e no outro dia eu fiquei até tarde lá. Tivemos muito tempo juntos e eu realmente gostei muito desse dia, que vai ficar na minha memória. Também vimos nossas alianças de namoro. Não compramos ainda, mas pelo menos já vimos, e espero que no futuro, quando eu ler essa carta, eu me lembre de tudo. Resumindo, foi isso que aconteceu nesse mês. Mas, meu amor, só sei que eu quero ficar com você para o resto da minha vida. Você é muito importante para mim, minha Ferzinha. Sei que é cedo para falar isso, mas eu realmente quero casar com você, porque sei que você é a pessoa certa para mim. TE AMO MUITO, MINHA GATA! Espero que goste dessa carta.',
      author: 'Yan',
      date: '25/10/2024',
      color: 'from-green-200 to-yellow-300',
      surprise: '🌻 Seis meses de pura magia, como um jardim em eterna primavera!',
      animation: 'sparkle'
    },
    {
      id: 4,
      title: 'Para Minha Gatinha 🌸',
      content: 'Amor, não estou conseguindo dormir. Não sei por quê, mas simplesmente não consigo. Agora são 2h06 da manhã, estou escrevendo algo que veio de repente à minha mente. É nesses momentos que começo a refletir sobre a vida, sobre tudo o que acontece comigo. Como já te disse uma vez, acho que tudo o que acontece na vida tem uma razão, seja para aprendizado ou para nos dar oportunidades de crescer. Sempre há algo para tirar de lição. Antigamente, eu queria muito voltar ao passado. Não estava contente com minha vida, e não sei exatamente o motivo, mas parecia que tudo era mais fácil antes. Ser criança, ou até mesmo adolescente, era mais tranquilo, e por isso eu vivia preso nas lembranças do passado. Mas, ultimamente, percebo que apenas relembro o passado sem me apegar tanto a ele como antes. E há uma razão para isso: você, meu amor. Você chegou e mudou minha vida para melhor. Até meus pensamentos mudaram. Agora, eu só consigo pensar no futuro, nas conquistas que quero alcançar, desejo muito que essas conquistas sejam ao seu lado, para comemorarmos juntos. Não quero vibrar apenas pelas minhas conquistas, mas também pelas suas. Quero estar presente em todos os seus momentos e comemorar ao seu lado. Parei para pensar agora há pouco: meu Deus, tenho muita sorte na vida. Mesmo que ja tenha acontecido coisas ruins, minha vida é muito boa. Afinal, coisas ruins fazem parte, infelizmente, mas percebo que, desde que você chegou, tudo ficou mais leve, mais feliz e com mais sentido. Também pensei na possibilidade de te perder do nada, e só de imaginar isso, fico arrasado. Não quero te perder nunca. Vou fazer de tudo para que a gente sempre fique juntos, porque você é a pessoa que eu sempre quis. Quero cuidar de você e te fazer feliz. Sei que agora não posso fazer muito, mas, no futuro, quero fazer ainda mais, porque você merece muito mais do que o que consigo oferecer hoje. Por favor, não entenda mal. Não estou desmerecendo o que já faço. É só que eu realmente acho que você merece muito mais, e vou trabalhar para alcançar isso. Você é a mulher mais linda que já vi, com as melhores conversas, as melhores reações... Eu te acho incrível em todos os sentidos. Não poderia encontrar alguém melhor que você, porque essa pessoa é inexistente. Você é perfeita. Às vezes me pego pensando na sorte que tenho de te ter na minha vida. Você é uma mulher forte. Mesmo sendo sensível, você enfrenta as adversidades da vida de cabeça erguida, e eu tenho muito orgulho de você. Amo o fato de você sempre tentar ver o lado bom nas pessoas, mesmo elas não sedo muito boas tu ainda tem fé na mudança. Eu admiro isso demais em você. Também percebo o quanto você é diferente. Você é única e especial. É mente aberta, engraçada, tem um humor incrível e é tão espontânea. Amo tudo em você: seus áudios cantando kkkkkkkk, suas fotos fazendo careta, nossas conversas aleatórias e nossos momentos juntos. Eu amo tudo isso. Escrevi o que veio à mente, então pode parecer um pouco confuso ou mal estruturado, mas escrevi com o coração. Só de pensar na possibilidade de não te ter mais na minha vida, meus olhos se enchem de lágrimas. Resumindo, meu amor, eu te amo demais. O "efeito Fernanda" na minha vida foi transformador. Eu sou muito mais feliz com você. Amo o seu abraço, que é tão aconchegante e acolhedor. Amo seu olhar, que parece brilhar o tempo todo. Seus cílios, e seu cabelo é lindo não importa como esteja, sempre acho incrível. E o seu sorriso? Meu Deus, que sorriso lindo! Quando você sorri eu me derreto demais ou quando você dá um sorriso envergonhado por eu te elogiar do nada é muito bom ou por simplesmente chorar de rir e começar a rir igual chaleira kkkkkk eu amo ouvir sua risada é a melhor coisas q poderia ressoar pelos meus ouvidos. Acho que vou dormir agora kakakakak. Eu te amo demais, Fernanda. Você é tudo para mim e a melhor pessoa deste mundo, eu vejo o quão incrível você é.',
      author: 'Yan',
      date: '25/11/2024',
      color: 'from-white to-lavender-200',
      surprise: '🏡 Você é meu lar, meu jardim, tudo que é belo!',
      animation: 'glow'
    },
    {
      id: 5,
      title: 'Te Amo Minha Ferzinha 🌻',
      content: 'Feliz 8 meses, meu amor! Eu te amo demais. Sei que não fiz as cartinhas de 6 e 7 meses, mas sinto que não pode ser algo forçado, elas têm que vir do coração mesmo. Então, queria dizer que, a cada momento que passamos juntos, fico cada vez mais abismado com o amor que sinto por você. Vejo que você é a melhor pessoa com quem posso passar o resto da minha vida e percebo que sua personalidade é única: uma combinação perfeita de gentileza, autenticidade e força. Você tem uma sensibilidade que me toca e transforma simples momentos em experiências inesquecíveis. Seu sorriso e seu olhar são as coisas mais belas que já vi, e sua risada, contagiante, faz o mundo parecer um lugar melhor, fazendo-me apaixonar cada vez que a ouço. Gosto de fazer minhas palhaçadas para ver você rir, porque é muito bom mesmo. A forma como você se dedica às pessoas que ama e sempre encontra forças para oferecer apoio nos momentos difíceis não é algo que qualquer pessoa conseguiria; é preciso ser forte e ter muita empatia, e você tem tudo isso. Acho incrível como você sempre tenta ajudar as pessoas à resolve os problemas delas como se fossem seus. Sua autenticidade é algo raro e precioso; você é verdadeira consigo mesma e com os outros. Amo pequenos detalhes, como sua carinha quando está brava, que é extremamente fofa, seu abraço que me faz sorrir de forma genuína e o jeito como você descansa a cabeça no meu peito, como se você estivesse em casa. Adoro seu jeito tagarela, suas histórias sobre o dia e tudo mais, e amo quando a gente se sintoniza a ponto de parecer que somos dois loucos. Resumindo, eu amo você e sempre vou amar seu jeitinho. Te amo muito, minha linda!',
      author: 'Yan',
      date: '25/03/2025',
      color: 'from-yellow-200 to-green-300',
      surprise: '🌅 Um brinde a uma vida inteira florescendo juntos no jardim do amor!',
      animation: 'rotate'
    },
    {
      id: 6,
      title: 'Sempre e Para Sempre 💜',
      content: 'Meu amor, Você transformou meu mundo da maneira mais bela, como quem faz florescer um campo árido, trazendo cor, vida e esperança onde antes havia silêncio. Cada dia ao seu lado é um presente embrulhado em pétalas de carinho, e cada momento contigo é um tesouro mais precioso que a mais rara das flores. Seu amor me mostrou que é possível encontrar paz no meio do caos, que dois corações podem se alinhar como se sempre tivessem batido juntos. Somos como duas flores que compartilham o mesmo solo, crescendo lado a lado, se fortalecendo com o mesmo sol. E desde que te encontrei, entendi que “para sempre” não é tempo suficiente quando se está com a pessoa certa. Eu te amo além das palavras, além do tempo, além de tudo que floresce, porque você é o meu florescer',
      author: 'Yan',
      date: '01/10/2025',
      color: 'from-lavender-400 to-white',
      surprise: '♾️ Meu amor por você é infinito como um campo de flores eternas!',
      animation: 'pulse'
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        setMousePosition({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const toggleCard = (id: number) => {
    setFlippedCards(prev => {
      const newSet = new Set(prev);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  };

  const getAnimationClass = (animation: string) => {
    switch (animation) {
      case 'heartbeat': return 'animate-pulse';
      case 'float': return 'animate-bounce';
      case 'sparkle': return 'animate-ping';
      case 'glow': return 'animate-pulse';
      case 'rotate': return 'animate-spin';
      case 'pulse': return 'animate-pulse';
      default: return '';
    }
  };

  return (
    <section 
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-rose-900 via-purple-900 to-indigo-900 relative overflow-hidden"
    >
      {/* Interactive background */}
      <div 
        className="absolute w-96 h-96 bg-gradient-radial from-pink-500/15 to-transparent rounded-full blur-3xl transition-all duration-500"
        style={{
          left: mousePosition.x - 200,
          top: mousePosition.y - 200,
          transform: `scale(${1 + Math.sin(Date.now() * 0.002) * 0.3})`
        }}
      />
      
      {/* Floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 15 }).map((_, i) => (
          <div
            key={i}
            className="absolute animate-float opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${4 + Math.random() * 4}s`
            }}
          >
            {i % 4 === 0 ? (
              <Heart className="w-4 h-4 text-pink-400" />
            ) : i % 4 === 1 ? (
              <Star className="w-3 h-3 text-purple-400" />
            ) : i % 4 === 2 ? (
              <Sparkles className="w-5 h-5 text-blue-400" />
            ) : (
              <Gift className="w-4 h-4 text-rose-400" />
            )}
          </div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center mb-6 sm:mb-8 bg-gradient-to-r from-pink-300 via-purple-300 to-blue-300 bg-clip-text text-transparent px-4">
          Cartas de Amor Como Pétalas
        </h2>
        
        <p className="text-base sm:text-lg md:text-xl text-purple-200 text-center mb-12 sm:mb-16 max-w-3xl mx-auto px-4">
          Palavras de amor escritas como poesia em pétalas de flores, seladas com beijos e sonhos
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto px-4">
          {letters.map((letter) => (
            <div
              key={letter.id}
              className="relative h-80 sm:h-96 perspective-1000 cursor-pointer group touch-manipulation"
              onClick={() => toggleCard(letter.id)}
              onMouseEnter={() => setHoveredCard(letter.id)}
              onMouseLeave={() => setHoveredCard(null)}
              onTouchStart={() => setHoveredCard(letter.id)}
              onTouchEnd={() => setTimeout(() => setHoveredCard(null), 2000)}
            >
              <div
                className={`relative w-full h-full transform-style-preserve-3d transition-all duration-1000 ${
                  flippedCards.has(letter.id) 
                    ? 'rotate-y-180' 
                    : ''
                } ${hoveredCard === letter.id && !flippedCards.has(letter.id) && window.innerWidth > 768 ? 'scale-105' : ''}`}
                style={{
                  transformStyle: 'preserve-3d'
                }}
              >
                {/* Front of card */}
                <div 
                  className={`absolute inset-0 backface-hidden bg-gradient-to-br ${letter.color} rounded-2xl sm:rounded-3xl shadow-2xl flex flex-col items-center justify-center p-4 sm:p-6 md:p-8 border border-white/20 overflow-hidden`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  {/* Animated background pattern */}
                  <div className="absolute inset-0 opacity-10">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <Heart
                        key={i}
                        className={`absolute text-white ${getAnimationClass(letter.animation || 'pulse')}`}
                        style={{
                          left: `${Math.random() * 100}%`,
                          top: `${Math.random() * 100}%`,
                          animationDelay: `${i * 0.2}s`,
                          fontSize: `${Math.random() * 20 + 10}px`
                        }}
                      />
                    ))}
                  </div>
                  
                  <div className="relative z-10 text-center">
                    <Mail className="w-12 h-12 sm:w-16 sm:h-16 text-white mb-4 sm:mb-6 mx-auto animate-bounce" />
                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 sm:mb-4 font-cursive px-2">
                      {letter.title}
                    </h3>
                    <p className="text-white/80 text-sm sm:text-base md:text-lg mb-4 sm:mb-6">Clique para abrir e ler</p>
                    <div className="flex items-center justify-center space-x-2">
                      <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white animate-pulse" />
                      <span className="text-white font-semibold text-sm sm:text-base">{letter.date}</span>
                      <Heart className="w-4 h-4 sm:w-6 sm:h-6 text-white animate-pulse" />
                    </div>
                  </div>
                  
                  {/* Sparkle effects on hover */}
                  {hoveredCard === letter.id && (
                    <div className="absolute inset-0 pointer-events-none">
                      {Array.from({ length: 8 }).map((_, i) => (
                        <Sparkles
                          key={i}
                          className="absolute w-6 h-6 text-white animate-ping"
                          style={{
                            left: `${20 + i * 10}%`,
                            top: `${20 + (i % 3) * 30}%`,
                            animationDelay: `${i * 0.2}s`
                          }}
                        />
                      ))}
                    </div>
                  )}
                </div>
                
                {/* Back of card */}
                <div 
                  className="absolute inset-0 backface-hidden rotate-y-180 bg-gradient-to-br from-white to-purple-50 rounded-2xl sm:rounded-3xl shadow-2xl p-4 sm:p-6 border border-purple-200 overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  {/* Decorative elements */}
                  <div className="absolute top-4 right-4 opacity-20">
                    <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-purple-400" />
                  </div>
                  <div className="absolute bottom-4 left-4 opacity-20">
                    <Star className="w-6 h-6 sm:w-10 sm:h-10 text-pink-400" />
                  </div>
                  
                  <div className="h-full flex flex-col relative z-10">
                    <div className="text-xs sm:text-sm text-purple-600 mb-3 sm:mb-4 font-semibold">
                      {letter.date}
                    </div>
                    
                    <div className="flex-1 overflow-y-auto custom-scrollbar">
                      <p className="text-purple-800 leading-relaxed text-xs sm:text-sm font-medium italic mb-3 sm:mb-4">
                        "{letter.content}"
                      </p>
                    </div>
                    
                    <div className="mt-3 sm:mt-4 text-right">
                      <p className="text-purple-700 font-bold font-cursive text-sm sm:text-base md:text-lg">
                        Com todo meu amor,<br />
                        {letter.author} 💕
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Floating hearts on card hover */}
              {hoveredCard === letter.id && !flippedCards.has(letter.id) && (
                <div className="absolute inset-0 pointer-events-none z-20">
                  {Array.from({ length: 6 }).map((_, i) => (
                    <Heart
                      key={i}
                      className="absolute w-3 h-3 sm:w-4 sm:h-4 text-pink-400 animate-bounce opacity-70"
                      style={{
                        left: `${10 + i * 15}%`,
                        top: `${10 + (i % 3) * 30}%`,
                        animationDelay: `${i * 0.3}s`,
                        animationDuration: '2s'
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};