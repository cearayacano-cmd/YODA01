
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const wsRows = [
  {
    macroTema: "Abertura",
    tema: "Boas-vindas",
    detalhe: "O instrutor deseja as boas-vindas aos participantes. Se apresenta dizendo seu nome e trajetória.\nDepois, convida os participantes para que se apresentem, respondendo 3 perguntas:\na) Seu nome.\nb) Se viajaram alguma vez.\nc) Se trabalharam em algum lugar de atendimento a clientes.\nPosteriormente, os convida a participar do conteúdo programado para desenvolver.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Abertura",
    tema: "Agenda de trabalho e objetivos",
    detalhe: "O instrutor comenta:\n - O objetivo do curso\n- A agenda de trabalho\n- Os acordos do curso",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 0: Clientes, Companhia, Produtos e Experiência.",
    tema: "Clientes, Companhia, Produtos e Experiência.",
    detalhe: "O instrutor baseado no ppt vai desenvolvendo e explicando cada tema contido:\na) Cliente: Indica como percebemos o cliente de hoje, como o escutamos e entendemos a sua percepção do nosso serviço.\nb) Companhia: Quem somos e a presença da LATAM no negócio aeronáutico.\nc) Produtos: Detalha as características de cada produto e seu valor. Ou seja, a experiência que o cliente vive ao adquirir os produtos e serviços. \nd) Papel do executivo: O que esperamos de um executivo de vendas LATAM Travel.",
    tiempo: "1:00:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 1: Boas-vindas",
    tema: "Boas-vindas",
    detalhe: "O instrutor usa o ppt como apoio:\nDesenvolve como se realiza as boas-vindas, abordando todos os passos ideais para assegurar que o cliente se sinta acolhido.\nMostra cada um dos elementos que devem estar presentes nas boas-vidas.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 2: Indagar",
    tema: "Indagar",
    detalhe: "O instrutor usa o ppt como apoio:\n1. Explica aos participantes o que é a Inspeção e sua importância.\n2. Comenta qual é o objetivo principal na inspeção: Conseguir identificar a necessidade do cliente.\n3. Desenvolve como é feita a Inspeção, abordando os passos ideais para identificar o sonho do cliente.\nRoll playing (10 min):\n - O instrutor convida os alunos a participar nos roll playing dispostos para exercitar a realização da Inspeção. \n - Vai entregando feedback aos participantes e reforçando os elementos (perguntas abertas, fechadas e de confirmação).",
    tiempo: "1:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 3: Oferecer",
    tema: "Oferecer",
    detalhe: "O instrutor usa o ppt como apoio:\n1. Explica aos participantes em que consiste a etapa de Oferecer/Cotar e qual é a sua importância.\n2. Comenta qual é o objetivo principal na inspeção Oferecer/cotar:  Cria uma proposta de viagem associada à necessidade do cliente.\n3. Desenvolve como é feito a oferta, cada um dos atributos dos nossos produtos e serviços associando-os a cada uma das necessidades do cliente.\n4. Mostra como cada um dos argumentos de venda de cada um dos produtos vai se desenvolvendo.\nRoll playing (10 min):\n - O instrutor convida os alunos a participar nos roll playing dispostos para exercitar a realização de como se oferece vinculando os atributos com as necessidades do cliente.\n - Vai entregando feedback aos participantes e reforçando os elementos (assegurar unir a “oferta” do produto à necessidade expressada pelo cliente).",
    tiempo: "1:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Atividade",
    tema: "Roll playing integrales",
    detalhe: "ATIVIDADE - Roll playing : \n - O instrutor convida os alunos a participar nos roll playing dispostos para exercitar a persuadir o cliente. \n- Vai entregando feedback aos participantes e reforçando os elementos.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Encerramento",
    tema: "Recapitulação/Encerramento.",
    detalhe: "O instrutor:\n1. Recapitula os pontos principais e críticos de cada uma das 4 etapas vistas.\n2. Faz o encerramento, despedindo-se e convidando-os para participar amanhã para a etapa seguinte.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Abertura",
    tema: "Boas-vindas e Revisão",
    detalhe: "Boas-vindas:\nO instrutor realiza as boas-vindas para um novo dia de conhecimentos.\nRevisão:\nO instrutor faz perguntas para repassar e reforçar os temas desenvolvidos no dia anterior.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Abertura",
    tema: "Agenda",
    detalhe: "O instrutor comenta:\n - O objetivo do curso dia 2.\n - A agenda de trabalho programada para o dia 2.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ Agenda", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 4: Gestão de objeções",
    tema: "Gestão de objeções.",
    detalhe: "O instrutor usa o ppt como apoio:\n1 - Mostra qual é o objetivo principal da gestão das objeções: É o persuadir o cliente, convencê-lo de comprar nosso produto.\n2 - Desenvolve as principais objeções apresentadas pelo cliente e a forma de abordá-la persuadindo a sua decisão.\n3 - Desenvolve como se gerencia e se persuade utilizando a argumentação para rebater as objeções do cliente. \n4- Usa, analisando cada um dos argumentos contidos no Manual de Gestão de objeções do executivo.",
    tiempo: "1:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 5: Fechamento da venda",
    tema: "Fechamento da venda",
    detalhe: "O instrutor usa o ppt como apoio:\nDesenvolve como se realiza as boas-vindas, abordando todos os passos ideais para assegurar que o cliente se sinta acolhido.\nMostra cada um dos elementos que devem estar presentes nas boas-vidas.",
    tiempo: "1:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 6: Acompanhamento",
    tema: "Acompanhamento",
    detalhe: "O instrutor baseado no ppt:\n1- Mostra todos os pormenores para realizar o acompanhamento de um cliente, com o objetivo de realizar o fechamento efetivo da venda.\n2 - Desenvolve cada parte que compõe o acompanhamento.",
    tiempo: "0:40:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 7: Reserva ",
    tema: "Reserva",
    detalhe: "O instrutor usa o ppt como apoio:\n1. Explica cada um dos elementos que devem estar presentes no processo de realização de uma reserva. \n2. Comenta qual é o objetivo principal na inspeção Reservas:  Entrega todos elementos relevantes que compõe a viagem do cliente. \n",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 8: Pagamento",
    tema: "Pagamento",
    detalhe: "O instrutor usa o ppt como apoio:\n1. Explica cada um dos elementos que devem estar presentes no processo de pagamento dos produtos e serviços adquiridos.\n2. Comenta qual é o objetivo principal da etapa de pagamento:  Ressalta a segurança que a companhia oferece nas formas de pagamento utilizadas pelo cliente e as facilidades de pagamento. \n",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 9: Despedida",
    tema: "Despedida",
    detalhe: "O instrutor usa o ppt como apoio:\n1. Explica cada um dos elementos que devem estar presentes na despedida com o cliente.\n2. Comenta qual é o objetivo principal na despedida:  Fidelizar nossos clientes e assegurar que conosco eles tem uma experiência única e diferenciada.\n",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Atividade",
    tema: "Roll playing ",
    detalhe: "ATIVIDADE - Roll playing : \n - O instrutor convida os alunos a participar nos roll playing dispostos para exercitar a persuadir o cliente. \n- Vai entregando feedback aos participantes e reforçando os elementos.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Encerramento",
    tema: "Recapitulação/Atividade Final",
    detalhe: "O instrutor:\n1. Recapitula os pontos principais ou críticos de cada uma das 3 etapas vistas.\n2. Pede para que participem nesta recapitulação.\n3. Faz o encerramento, despedindo-se e convidando-os para participar amanhã para a etapa seguinte.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  }
];

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const sectionsStartIdx = content.indexOf('secciones: [', startIdx);
const sectionsEndIdx = content.indexOf('],', sectionsStartIdx) + 1;

let sectionsText = content.substring(sectionsStartIdx, sectionsEndIdx);
sectionsText = sectionsText.substring(0, sectionsText.lastIndexOf(']'));

const newSection = `    ,
    {
      tipo: 'mision1',
      label: 'WS Vendas',
      rows: ${JSON.stringify(wsRows, null, 2)}
    }
  ]`;

const newContent = content.substring(0, sectionsStartIdx) + sectionsText + newSection + content.substring(sectionsEndIdx);

fs.writeFileSync(path, newContent);
console.log('Appended WS Vendas to VENDAS_WS_12_DATA');
