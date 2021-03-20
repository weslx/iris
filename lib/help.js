// NÃO REMOVA OS CREDITOS POR FAVOR, LEVOU MUITO TEMPO PRA SE FAZER UM BOT ASSIM!
// SEGUNDO A LICENÇA MIT, REMOVER OS CREDITOS É CRIME, DÊ OS DIREITOS AO CRIADOR!
const config = require('./config/config.json')
const prefix = config.prefix
exports.help = help()
function help() {
	return `   *☾ Meus comandos ☽*

_ℹ️🍀-🍀Grupo oficial do programador deste bot! */Legiao*
_❌❌❌Se quiser colocar o bot no  seu grupo !join link do grupo❌❌.
_ℹ️ - * O limite de grupos para esse bot é 10 *

*0🍀-🍀${prefix}help (mensagem)*
_Informe erros para os responsáveis da Íris._

*1🍀-🍀${prefix}iris (mensagem)*
_Quer conversar um pouco?_

*2🍀-🍀${prefix}sticker*
_Faço suas imagens virarem sticker rapidinho!_

*3🍀-🍀${prefix}gif*
_Com isso você pode fazer stickers com gifs também!_

*4🍀-🍀${prefix}donate*
_Ajude-me a comprar um "café" @.@_

*5🍀-🍀${prefix}speak <mensagem>*
_Vamos conversar por voz?_

*6🍀-🍀${prefix}criador*
_Conheça o carinha legal que me construiu.._

*7🍀-🍀${prefix}dog*
_Você adora cachorrinhos? Pois eu amo!_

*8🍀-🍀${prefix}ping*
_Bem, isso é pra medir o quão rápida eu estou._

*9🍀-🍀${prefix}tts (sigla de idioma) [frase]*
_Eu também posso fazer mimica! Por voz!_

*10🍀-🍀${prefix}Idiomas*
_Isso e para usar com o comando de cima._

*11🍀-🍀${prefix}groupinfo*
_Veja algumas informações desse grupo._

*12🍀-🍀${prefix}anime [nome]*
_Com isso você pesquisa um anime._

*13🍀-🍀${prefix}loli*
_Lolis são pra dar amor e carinho..._

*14🍀-🍀${prefix}waifu*
_Com isso eu mando foto de waifus lindas._

*15🍀-🍀${prefix}neko*
_Bom...uma neko as vezes cai bem né?_

*16🍀-🍀${prefix}Frase*
_Nesse comando eu te envio frases inspiradoras._

*17🍀-🍀${prefix}randomAnime*
_Envie isso e eu enviarei de volta fotos aleatorias de anime._

*18🍀-🍀${prefix}getmeme*
_Por que não curtir uns memes né?_

*19🍀-🍀${prefix}Husb*
_Essa e a mesma coisa da waifu, mas em versão homem._

*20🍀-🍀${prefix}Light <Frase>*
_Uma logo de neon em luz._

*21🍀-🍀${prefix}Wallpaper (Nome)*
_Quer obter uns wallpapers? Deixe comigo!_

*22🍀-🍀${prefix}quote*
_Que tal criar sua propria frase inspiradora?_

*23🍀-🍀${prefix}search (digite numa foto)*
_Com isso você pode pesquisar fotos para achar o nome do anime._

*24🍀-🍀${prefix}randomwall*
_Mais wallpapers de anime, mas desse vez são de personagens._

*25🍀-🍀${prefix}botstat*
_Eu coloco aqui diversas informações minhas sobre mensagens._

*26🍀-🍀${prefix}marcar*
_Peça para a bot marcar você (serve pra copiar e marcar a si mesmo)._

*27🍀-🍀${prefix}StickerNoBG*
_Isso é pra fazer stickers sem aquela parte do fundo._

*28🍀-🍀${prefix}ownerGroup*
_Quer conhecer o dono do grupo mas tem preguica de anotar os números? Use isso!_

*29🍀-🍀${prefix}link*
_Se quiser obter o link do grupo, é só usar este comando._

*30🍀-🍀${prefix}adms*
_Com isso eu chamo e te mostro quem são os ADMS do grupo._

*31🍀-🍀${prefix}pokemon*
_Quer ver fotos de pokemons?_

*32🍀-🍀${prefix}flip <cara/coroa> <valor>*
_Aposte no cara ou coroa._

*33🍀-🍀${prefix}Roll*
_Esse é o famoso jogo do par ou impar, ou seja, dados._

*34🍀-🍀${prefix}poll*
_Verifique enquentes ativas._

*35🍀-🍀${prefix}vote (número)*
_Vote numa enquete, se estiver tendo uma..._

*36🍀-🍀${prefix}newpoll (nome)*
_Crie uma enquete para os outros votarem._

*37🍀-🍀${prefix}ins (nome)*
_Adicione opções de voto na enquete._

*38🍀-🍀${prefix}dva*
_Isso e pra obter fotos da DVA do OverWatch._

*39🍀-🍀${prefix}hug*
_É aqui que eu boto fotos fofinhas que tem um abraço entre personagens de anime._

*40🍀-🍀${prefix}Baguette*
_Já é hora do meu pãozinho?!_

*41🍀-🍀${prefix}Yuri*
_Caso você goste de algo mais lesbico em anime, aqui está._

*42🍀-🍀${prefix}kiss @marque_uma_Pessoa*
_Vou fazer você e sua pessoa querida se beijarem!_

*43🍀-🍀${prefix}girl*
_Caso você seja feio, pode obter fotos de garotas bonitas por aqui._

*94🍀-🍀${prefix}Math <expressão>*
_Realiza calculos matematicos._

*45🍀-🍀${prefix}screenshot*
_Tem medo de acessar sites? Use isso e eu mostro pra você o que tem dentro!_

*46🍀-🍀${prefix}Life*
_Que tal se a gente stalkear alguém aleatorio do mundo hoje?_

*47🍀-🍀${prefix}Fox*
_Raposinhas bonitas, e não, eu não estou falando do Kurama, e sim das de verdade!_

*48🍀-🍀${prefix}ID*
_Adquire a ID do chat._

*49🍀-🍀${prefix}Random <assunto>*
_Se usar isso, vou escolher alguém aleatorio do grupo._

*50🍀-🍀${prefix}image <nome>*
_Está sem internet fora do WhatsApp? Posso ajudar mandando fotos do pinterest._

*51🍀-🍀${prefix}gato*
_Gatos velho, simplesmente gatos._

*52🍀-🍀${prefix}msg <frase>*
_Vamos brincar de mimica por texto?_

*53🍀-🍀${prefix}make <frase>*
_Caso você queira escrever no meu diario ~Death Note~ use isso._

*54🍀-🍀${prefix}slogan <Nome>*
_Posso fazer uns slogans bonitinhos para você._

*55🍀-🍀${prefix}img <marque um sticker>*
_Se quiser pegar a foto de um sticker, posso converte-la para você._

*56🍀-🍀${prefix}Giphy <Link do site giphy>*
_Faça stickers por link usando o site giphy, ele é muito bom._

*57🍀-🍀${prefix}send <link de imagem>* 
_Caso queira, posso enviar as fotos de um link._

*58🍀-🍀${prefix}slap @marque_alguém*
_Irei de ajudar a descer um tapasso nos outros._

*59🍀-🍀${prefix}sip <Digite um IP>*
_Posso conseguir algumas informações de um IP._

*60🍀-🍀${prefix}scep <Digite o CEP>*
_Se quiser pode me pedir pra pesquisar sobre um CEP._

*61🍀-🍀${prefix}ship <@pessoa @pessoa>*
_Quer saber o quanto seus amigos combinam?_

*62🍀-🍀${prefix}Mac <número do MAC>*
_Com isso eu irei pesquisar de onde é o MAC._

*63🍀-🍀${prefix}Macaco*
_Pegue umas fotos de macacos aqui._

*64🍀-🍀${prefix}Gender <nome>*
_Se quiser saber sobre o nome de alguém use isso._

*65🍀-🍀${prefix}Death <nome>*
_Calcularei a idade que você vai morrer baseando-me nas ultimas mortes registradas._

*66🍀-🍀${prefix}simg <Use numa foto>*
_Posso pesquisar imagens na internet usando esse comando._

*67🍀-🍀${prefix}upimg <Use numa foto>*
_Se usar esse comando, irei fazer upload de suas imagens com duração de 1 dia._

*68🍀-🍀${prefix}store <nome>*
_Obter informações de apps da PlayStore? Com isso eu posso te ajudar._

*69🍀-🍀${prefix}contar <mensagem>*
_Quer contas as letras que tem em um texto?_

*70🍀-🍀${prefix}inverter <frase>*
_Se quiser inverter as palavras temos isso._

*71🍀-🍀${prefix}Google <termo>*
_Pesquise coisas no Google._

*72🍀-🍀${prefix}baka*
_"Bakaaa!"_

*73🍀-🍀${prefix}ball*
_8 Ball de frases aleatorias._

*74🍀-🍀${prefix}cocegas*
_Hmmm, cocegas em anime eu acho..._

*75🍀-🍀${prefix}Lizard*
_Fotinhas de lagarto nerr._

*76🍀-🍀${prefix}feed*
_Eventos que tem haver com comida em animes._

*77🍀-🍀${prefix}quack*
_Ui ui, vai uns patos ~gansos~ ou sei la...?_

*78🍀-🍀${prefix}poke*
_Tome uns petelecos!_

*79🍀-🍀${prefix}cafune*
_Todos amamos cafune..._

*80🍀-🍀${prefix}Kisu*
_Umas fotinhas de beijo..._

*81🍀-🍀${prefix}Tapa*
_Fotos de tapinhas!_

*82🍀-🍀${prefix}Truth*
_Algumas verdades sobre o universo dos animes._

*83🍀-🍀${prefix}Icon*
_Icones para por no perfil._

*84🍀-🍀${prefix}Resposta <frase>*
_Adicione respostas na Íris._

*85🍀-🍀${prefix}Face*
_Icon do rosto de garotas de anime._

*86🍀-🍀${prefix}Yaoi*
_Yaoi sem hentai._

*87🍀-🍀${prefix}Look*
_Olhos na tela eheheh_

*88🍀-🍀${prefix}Holo*
_Fotinhas da personagem Holo._

*89🍀-🍀${prefix}pornhub <texto 1 | texto 2>*
_Crie sua propria logo do PornHub._

*90🍀-🍀${prefix}3D <texto>*
_Crie textos em 3D._

*91🍀-🍀${prefix}Logo <nome>*
_Crie logos em preto e pink._

*92🍀-🍀${prefix}gaming <nome>*
_Crie logos de jogador._

*93🍀-🍀${prefix}brainly <pergunta>*
_Pesquise no brainly._

*94🍀-🍀${prefix}ttp <frase>*
_Transforme frases em stickers._

*95🍀-🍀${prefix}Neon <Frase1|Frase2|Frase3>*
_Uma logo de neon estilo hackerman._

*96🍀-🍀${prefix}Fogareu <Nick>*
_Crie logos do fogo gratuito._

*96🍀-🍀${prefix}Thunder <frase>*
_Uma logo do céu com trovões._

*97🍀-🍀${prefix}Wolf <Frase1|Frase2>*
_Logo de Lobos._

*98🍀-🍀${prefix}Light <Frase>*
_Uma logo de neon em luz._

*99🍀-🍀${prefix}moddroid <nome>*
_Busque aplicativos de android na moddroid._

*100🍀-🍀${prefix}happymod <nome>*
_Busque apps na happymod._

*101🍀-🍀${prefix}stalkig <username>*
_Stalkeie instagram._

*102🍀-🍀${prefix}stalktw <username>*
_stalkeie twitter._

*103🍀-🍀${prefix}maps <local>*
_Mostra o mapa de um local._

*104🍀-🍀${prefix}clima <cidade>*
_Saiba sobre o clima atual da sua cidade._

*105🍀-🍀${prefix}nasa -data <ano/mês/dia>*
_Obtenha informações da nasa._

*106🍀-🍀${prefix}ptt <marque um audio>*
_Faça a bot gravar audios do grupo/pessoas como se fosse dela._

*107🍀-🍀${prefix}get <marque um arquivo>*
_Peça pra bot reenviar um arquivo._

*108🍀-🍀${prefix}conv -h*
_Converta temperatura ou distância._

*109🍀-🍀${prefix}fatos*
_Conta fatos de animais_

*110🍀-🍀${prefix}gado <@pessoa>*
_Veja o quanto ela é gada._

*111🍀-🍀${prefix}qr <Texto>*
_Cria QR Codes com textos._

*112🍀-🍀${prefix}curiosidade*
_Adquira curiosidades._

*113🍀-🍀${prefix}valor <Quantia/Tipo de Moeda>*
_Converta moedas de outros países em real._

*114🍀-🍀${prefix}oculto*
_???_

*115🍀-🍀${prefix}detector*
_Detecta gostosas no grupo._

*116🍀-🍀${prefix}gamemode <tipo>*
_Comando de minecraft só de zoas._

*117🍀-🍀${prefix}roleta <valor>*
_Aposte na roleta-russa._

*118🍀-🍀${prefix}Chance <Do que>*
_Calcule as chances._

*119🍀-🍀${prefix}data*
_Data do sistema._

*120🍀-🍀${prefix}trecho*
_Frases de pessoas._

*121🍀-🍀${prefix}placa <aaa1111>*
_Puxe informações de veiculos._

*122🍀-🍀${prefix}scnpj <27865757000102>*
_Puxe dados de um CNPJ._

*123🍀-🍀${prefix}coins*
_Veja a lista de moedas pra usar no comando 113, é uma lista gigante._

*124🍀-🍀${prefix}wasted <foto>*
_Cria uma imagem de wasted igual ao GTA V._

*125🍀-🍀${prefix}enviar <-gp, -pv, -help> | <mensagem>*
_Converse com outros grupos sem precisar entrar neles._

*126🍀-🍀${prefix}allid*
_Pega as IDs dos grupos para usar no comando ${prefix}enviar._

*127🍀-🍀${prefix}akinator*
_Jogue Akinator no WhatsApp, instruções após comando._

*128🍀-🍀${prefix}Level*
_Veja seu ranking e nível._

*129🍀-🍀${prefix}Players*
_Veja o TOP 10 do Ranking._

*130🍀-🍀${prefix}cassino <valor>*
_Aposte no cassino para ganhar XP!_

*131🍀-🍀${prefix}nivel*
_Obtenha informações do seu XP e Ranking em forma de texto._

*132🍀-🍀${prefix}wallhaven <tema>*
_Obtenha Wallpapers, uma alternativa ao comando 21._

*133🍀-🍀${prefix}letra <nome da música>*
_Busque letras de música._

*134🍀-🍀${prefix}reedit <nome>*
_Obtenha publicações de algum subreedit._

*135🍀-🍀${prefix}Video <nome>*
_Procure videos do YouTube._

*136🍀-🍀${prefix}Encode <frase>*
_Converta frases e números para Binario._

*137🍀-🍀${prefix}Decode <nome>*
_Traduza Binario._

*138🍀-🍀${prefix}Covid <País em Inglês>*
_Obtenha o total de casos do Covid-19._

*139🍀-🍀${prefix}Paises*
_Obtenha a lista de países para o comando acima._

*140🍀-🍀${prefix}email <email> | <Assunto> | <Texto>*
_Mande um email anônimo para alguém._

*141🍀-🍀${prefix}gtav <foto>*
_Crie a capa do novo GTA V de PS2._

*142🍀-🍀${prefix}reverter <foto>*
_Reverta uma foto._

*143🍀-🍀${prefix}encurtar <link>*
_Encurte links sem aqueles montes de propagandas._

*144🍀-🍀${prefix}signo <signo>*
_Adquira o horoscopo do dia._

*145🍀-🍀${prefix}translate <sigla de idioma> <frase ou mensagem marcada>*
_Traduza mensagens para algum idioma especifico._

*Se um dia meu criador deixar de ser baiano, tutoriais serão colocados no ${prefix}Readme.*`
}

exports.down = down()
function down() {
    return `
	*☾ Downloads ☽*
	
*Caso algum comando não funcione significa que o servidor caiu e é necessário esperar.*

*1🍀-🍀${prefix}Play <nome>*
_Baixe musicas pelo nome._

*2🍀-🍀${prefix}Mp3 <link do YouTube>*
_Baixe audios por link._

*3🍀-🍀${prefix}Mp4 <link do YouTube>*
_Baixe videos por link._

*4🍀-🍀${prefix}fb <link facebook>*
_Baixe videos do facebook._`
}

exports.adult = adult()
function adult() {
    return `

☾ Comandos do PV🍀-🍀Grupos NSFW ☽

*1🍀-🍀${prefix}RandomNeko*
_Temos hentai de nekos por aqui e.e_

*2🍀-🍀${prefix}iHentai*
_Mas se nõ gostar, temos aleatorios também!_

*3🍀-🍀${prefix}nh (codigo)*
_Seja feliz vendo NHentai comigo e.e_

*4🍀-🍀${prefix}trap*
_Se você gosta de traps, isso é pra você e.e_

*5🍀-🍀${prefix}blowjob*
_Fotinhas de blowjob em anime._

*6🍀-🍀${prefix}iecchi*
_Umas fotos de ecchi que tenho aqui..._

*7🍀-🍀${prefix}feet*
_Hentai para os amantes de pezinho._

*8🍀-🍀${prefix}Lick*
_"Lambidinha..."_

*9🍀-🍀${prefix}Femdom*
_Meio que um yuri...hentai..._

*10🍀-🍀${prefix}futanari*
_Vai uma futanari?_

*11🍀-🍀${prefix}boobs*
_Olha a tetinhaaa..._

*12🍀-🍀${prefix}masturb*
_Hmmm, garotas solo..._

*13🍀-🍀${prefix}Anal*
_Hentai "padrão" de anal claro._

*14🍀-🍀${prefix}nsfwicon*
_Foto de perfil +18 por aqui..._

*15🍀-🍀${prefix}randomLoli*
_Hentai do tipo Lolicon._

*16🍀-🍀${prefix}Hard*
_Hentai de diciplinação, por exemplo, hentai de tapas na bunda._

*17🍀-🍀${prefix}Pezinho*
_Fotos de pezinho._

*18🍀-🍀${prefix}Porn*
_Pornografia real._

*19🍀-🍀${prefix}Lesbian*
_Lesbicas reais se pegando._

*20🍀-🍀${prefix}Pgay*
_Pornografia gay para quem curte._

*21🍀-🍀${prefix}Tits*
_Fotos de peitos reais._

*22🍀-🍀${prefix}bsdm*
_Fotos BDSM._

*23🍀-🍀${prefix}Milf*
_Milfs reais._

*24🍀-🍀${prefix}Pussy*
_Belas maças cortadas pela metade..._

*25🍀-🍀${prefix}Ass*
_Bundas..._

*26🍀-🍀${prefix}sporn*
_Pesquise no Xvideos._

*27🍀-🍀${prefix}xvideos <link>
_Baixe pornografia do xvideos._`
}

exports.owner = owner()
function owner() {
    return `
*⚠ [Meu dono Apenas] ⚠*

*1🍀-🍀${prefix}Clearall*
_Com isso todas as mensagens são limpas._

*2🍀-🍀${prefix}Broad <-all/-gp> (mensagem)*
_Posso enviar uma mensagem para todos ou apenas os grupos usando, mas cuidado com BAN (se for muitos)._

*3🍀-🍀${prefix}Leaveall*
_Se desejar saio de todos os grupos._

*4🍀-🍀${prefix}Tela*
_Peça-me um print da tela._

*5🍀-🍀${prefix}Blocklist*
_Saiba quem tentou me ligar, atacar ou floodar._

*6🍀-🍀${prefix}mutepv <número sem + ou ->*
_Mande a Íris ignorar pessoas no PV._

*7🍀-🍀${prefix}encerrar*
_Faz com que eu me desligue._

*8🍀-🍀${prefix}give <@Pessoa> <Quantidade>*
_Adquira ou dê XP para as pessoas e si mesmo (também remove XP se usar com <-quantidade>._

*9🍀-🍀${prefix}kickall*
_Remova todos os membros._

*10🍀-🍀${prefix}cmd <comando>*
_Rode terminal/programação pelo WhatsApp._

*11🍀-🍀${prefix}block <numero> ou <marque uma mensagem>*
_Bloqueia pessoas._

*12🍀-🍀${prefix}unblock <numero> ou <marque uma mensagem>*
_Desbloqueia pessoas._`
}

exports.admins = admins()
function admins() {
    return `
*⚠ [Administradores Apenas] ⚠*
_Comandos que apenas os ademiros podem usar!_

*1🍀-🍀${prefix}kick @user ou <Marque uma mensagem>*
_Expulse bebados do bar (pode ser mais de 1)._

*2🍀-🍀${prefix}promote @user ou <Marque uma mensagem>*
_Faça os bebados do bar virarem administradores._

*3🍀-🍀${prefix}leave*
_Se quiser eu saio do barzinho._

*4🍀-🍀${prefix}demote @user ou <Marque uma mensagem>*
_Isso é pra você demitir administradores do barzinho._

*5🍀-🍀${prefix}everyone <assunto>*
_Marque todos os bebados para uma porradaria! ~Brincadeira, ou não~_

*6🍀-🍀${prefix}del [Marque a mensagem do BOT]*
_Se precisar deletar minhas mensagens, use isso._

*7🍀-🍀${prefix}onlyadms [on|off]*
_Com isso eu fecho o bar apenas para os administradores, e vice versa._

*8🍀-🍀${prefix}setimage*
_Dê ao seu bar uma cara nova!_

*9🍀-🍀${prefix}revoke*
_Se usar isso, eu irei resetar o link._

*10🍀-🍀${prefix}Bomb <número sem espaco, + e🍀-🍀>*
_Ataque com spam SMS quem vier fazer gracinhas em seu grupo._

*11🍀-🍀${prefix}blacklist <on/off>*
_Bane quem tiver nela quando entrarem no grupo._

*12🍀-🍀${prefix}fake <on/off>*
_Bane números de fora do seu país._

*13🍀-🍀${prefix}bklist <on/off número>*
_Adicione ou remova pessoas da blacklist._

*14🍀-🍀${prefix}mute <on/off>*
_Faz com que eu pare de fazer comandos no grupo de quem usou._

*15🍀-🍀${prefix}unkick <Marque uma mensagem>*
_Desfaz um ban._

*16🍀-🍀${prefix}autosticker <on/off>*
_Faz stickers com todas as fotos que mandarem._

*17🍀-🍀${prefix}welcome [enable|disable]*
_Me faz dar Boas-Vindas e Good-Bye._

*18🍀-🍀${prefix}rank <On/Off>*
_Ativa o sistema de "RPG"._

*19🍀-🍀${prefix}softban @pessoa ou <Marque uma mensagem>*
_Bane o usuário e o adiciona novamente em 30 minutos._

*20🍀-🍀${prefix}add (numero)*
_Com isso você pode adicionar as pessoas._

*21🍀-🍀${prefix}Exclusive [on|off]*
_Ativa os comandos exclusivos como bomb, anti links/porno._`
}

exports.readme = readme()
function readme() {
    return `
☾ Menu de ajuda ☽

Caso não entenda, chame o meu dono, use o comando ${prefix}criador ou pergunte no grupo que alguém com certeza te ajudará! XD

Quando eu tiver tempo colocarei tutoriais aqui e.e

Obrigado pelo uso!

Programador oficial desse BOT: wa.me/5518998044132`
}

exports.donate = donate()
function donate() {
    return `
_Não é necessário, mas caso você queira contibuir, o picpay do criador desse bot é =_

@userlucas123

_O PIX é =_ 

fc270199-2d55-4d91-be5c-bfbd431cfad4

_Se caso precisar, venha falar comigo na github pelo =_ github.com/KillovSky/iris _ou pelo WhatsApp_ wa.me/+5518998044132.
❤️`
}

exports.lang = lang()
function lang() {
    return `
☾ Linguas do comando de Voz ☽
       ☾ Use sem ' ' ☽
	
'af' =  'Africano'

'ar' =  'Arabico'

'au' =  'Inglês da Australia'

'br' =  'Português do Brasil'

'ca' =  'Catalã (Catalonia)'

'cn' =  'Chinês (Mandarin/China)'

'cs' =  'Tcheca'

'cy' =  'Galês'

'da' =  'Dinamarquês'

'de' =  'Germanico/Alemão'

'el' =  'Grega'

'en' =  'Inglês'

'eo' =  'Esperanto'

'es' =  'Espanhol'

'fi' =  'Finlandês'

'fr' =  'Francês'

'hi' =  'Hindi'

'hr' =  'Croácio'

'ht' =  'Haitiano'

'hu' =  'Húngaro'

'hy' =  'Armenico'

'id' =  'Indonesio'

'is' =  'islandês'

'it' =  'Italiano'

'jp' =  'Japonês'

'ko' =  'Coreano'

'la' =  'Latim'

'lv' =  'Letonês'

'mk' =  'Macedónio'

'nl' =  'Holandês'

'no' =  'Norueguês'

'pl' =  'Polonês'

'pt' =  'Português de Portugal'

'ro' =  'Romeno'

'ru' =  'Russo'

'sk' =  'Eslovaco'

'sp' =  'Espanhol da Espanha'

'sq' =  'Albanês'

'sr' =  'Servia'

'su' =  'Espanhol dos Estados Unidos'

'sv' =  'Sueco'

'sw' =  'Suaíli'

'ta' =  'Tamil'

'th' =  'Thailandês'

'tr' =  'Turco'

'tw' =  'Chinês (Mandarin/Taiwan)'

'uk' =  'Inglês do Reino Unido)'

'us' =  'Inglês dos Estados Unidos'

'vi' =  'Vietnamita'

'yu' =  'Chinês (Cantonesa)'

'zh' =  'Chinês'`
}

exports.convh = convh()
function convh() {
	return `_Para usar você deve digitar_ *${prefix}conv [-sigla] [Número para conversão]* _, confira abaixo as siglas e um exemplo._
	
*-h* _= Esse menu._

*-c* _= Converte de Fahfenheit para Celsius._

*-f* _= Converte Celsius para Fahfenheit._

*-q* _= Converte Milhas para Quilômetros._

*-m* _= Converte Quilômetros para Milhas._

_Exemplo de uso:_ *${prefix}conv -c 113*
`}

exports.paises = paises()
function paises() {
	return `_Nomes aceitados no comando_ *${prefix}covid*\n\nAfghanistan\n\nAlbania\n\nAlgeria\n\nAndorra\n\nAngola\n\nAnguilla\n\nAntigua and Barbuda\n\nArgentina\n\nArmenia\n\nAruba\n\nAustralia\n\nAustria\n\nAzerbaijan\n\nBahamas\n\nBahrain\n\nBangladesh\n\nBarbados\n\nBelarus\n\nBelgium\n\nBelize\n\nBenin\n\nBermuda\n\nBhutan\n\nBolivia\n\nBosnia and Herzegovina\n\nBotswana\n\nBrazil\n\nBritish Virgin Islands\n\nBrunei\n\nBulgaria\n\nBurkina Faso\n\nBurundi\n\nCAR\n\nCabo Verde\n\nCambodia\n\nCameroon\n\nCanada\n\nCaribbean Netherlands\n\nCayman Islands\n\nChad\n\nChannel Islands\n\nChile\n\nChina\n\nColombia\n\nComoros\n\nCongo\n\nCosta Rica\n\nCroatia\n\nCuba\n\nCuraçao\n\nCyprus\n\nCzechia\n\nDRC\n\nDenmark\n\nDiamond Princess\n\nDjibouti\n\nDominica\n\nDominican Republic\n\nEcuador\n\nEgypt\n\nEl Salvador\n\nEquatorial Guinea\n\nEritrea\n\nEstonia\n\nEswatini\n\nEthiopia\n\nFaeroe Islands\n\nFalkland Islands\n\nFiji\n\nFinland\n\nFrance\n\nFrench Guiana\n\nFrench Polynesia\n\nGabon\n\nGambia\n\nGeorgia\n\nGermany\n\nGhana\n\nGibraltar\n\nGreece\n\nGreenland\n\nGrenada\n\nGuadeloupe\n\nGuatemala\n\nGuinea-Bissau\n\nGuinea\n\nGuyana\n\nHaiti\n\nHonduras\n\nHong Kong\n\nHungary\n\nIceland\n\nIndia\n\nIndonesia\n\nIran\n\nIraq\n\nIreland\n\nIsle of Man\n\nIsrael\n\nItaly\n\nIvory Coast\n\nJamaica\n\nJapan\n\nJordan\n\nKazakhstan\n\nKenya\n\nKuwait\n\nKyrgyzstan\n\nLaos\n\nLatvia\n\nLebanon\n\nLesotho\n\nLiberia\n\nLibya\n\nLiechtenstein\n\nLithuania\n\nLuxembourg\n\nMS Zaandam\n\nMacao\n\nMadagascar\n\nMalawi\n\nMalaysia\n\nMaldives\n\nMali\n\nMalta\n\nMarshall Islands\n\nMartinique\n\nMauritania\n\nMauritius\n\nMayotte\n\nMexico\n\nMicronesia\n\nMoldova\n\nMonaco\n\nMongolia\n\nMontenegro\n\nMontserrat\n\nMorocco\n\nMozambique\n\nMyanmar\n\nNamibia\n\nNepal\n\nNetherlands\n\nNew Caledonia\n\nNew Zealand\n\nNicaragua\n\nNiger\n\nNigeria\n\nNorth Macedonia\n\nNorway\n\nOman\n\nPakistan\n\nPalestine\n\nPanama\n\nPapua New Guinea\n\nParaguay\n\nPeru\n\nPhilippines\n\nPoland\n\nPortugal\n\nQatar\n\nRomania\n\nRussia\n\nRwanda\n\nRéunion\n\nS. Korea\n\nSaint Kitts and Nevis\n\nSaint Lucia\n\nSaint Martin\n\nSaint Pierre Miquelon\n\nSamoa\n\nSan Marino\n\nSao Tome and Principe\n\nSaudi Arabia\n\nSenegal\n\nSerbia\n\nSeychelles\n\nSierra Leone\n\nSingapore\n\nSint Maarten\n\nSlovakia\n\nSlovenia\n\nSolomon Islands\n\nSomalia\n\nSouth Africa\n\nSouth Sudan\n\nSpain\n\nSri Lanka\n\nSt. Barth\n\nSt. Vincent Grenadines\n\nSudan\n\nSuriname\n\nSweden\n\nSwitzerland\n\nSyria\n\nTaiwan\n\nTajikistan\n\nTanzania\n\nThailand\n\nTimor-Leste\n\nTogo\n\nTrinidad and Tobago\n\nTunisia\n\nTurkey\n\nTurks and Caicos\n\nUAE\n\nUK\n\nUSA\n\nUganda\n\nUkraine\n\nUruguay\n\nUzbekistan\n\nVanuatu\n\nVatican City\n\nVenezuela\n\nVietnam\n\nWallis and Futuna\n\nWestern Sahara\n\nWorld\n\nYemen\n\nZambia\n\nZimbabwe`
}
