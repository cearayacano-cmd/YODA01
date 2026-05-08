
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const m3Rows = [
  {
    macroTema: "LATAM PASS",
    tema: "Resumo do dia anterior",
    detalhe: "- Instrutor atividade de chuva de idéias para resgatar com os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em um flipchart ou quadro os temas.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Video Introdução LATAM PASS",
    detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam.",
    tiempo: "0:05:00",
    herramientas: [
      { tipo: "🖼️ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364c015fc33_0_356#slide=id.g364c015fc33_0_356" },
      { tipo: "🎥 Youtube", url: "https://www.youtube.com/shorts/YlKrAL_wgKo?feature=share" }
    ],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Video Categorias e Benefícios",
    detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🎥 Youtube", url: "https://www.youtube.com/shorts/vX9srzIRZNw?feature=share" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Produto, Categorias e Benefícios LATAM Pass",
    detalhe: "- Instrutor explica considerações produto, categoria e benefícios LATAM PASS milhas de acordo com a publicação no PIC.\n- Instrutor fala sobre como é atribuido o número de sócio no BR. \n- Instrutor apresenta as categorias Latam Pass, regras para se qualificar e benefícios.",
    tiempo: "0:40:00",
    herramientas: [
      { tipo: "🖼️ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3ab95949dfe_0_32#slide=id.g3ab95949dfe_0_32" },
      { tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass" }
    ],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Atividade \"Guerra nas Estrelas\" (Produto Categorias e Beneficios)",
    detalhe: "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido \n- Instrutor envia link EducaPlay e explica tipo e tempo de (acordo com cronograma) para praticarem\nVale ressaltar que é possível jogar mais de uma vez, caso terminem antes do prazo ",
    tiempo: "0:10:00",
    herramientas: [
      { tipo: "🎮 Educaplay", url: "https://www.educaplay.com/learning-resources/26736432-latam_pass_categorias_em_foco.html" },
      { tipo: "🎮 Educaplay", url: "https://www.educaplay.com/learning-resources/26744315-latam_pass_categorias_em_foco.html" }
    ],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Video Milhas e Pontos Qualificáveis",
    detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🎥 Youtube", url: "https://www.youtube.com/shorts/ZSgsCW5dQmo?feature=share" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Video Bonus LATAM PASS",
    detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🎥 Youtube", url: "https://www.youtube.com/shorts/NbFTLrPXnVw?feature=share" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Incidentes Bônus LATAM PASS",
    detalhe: "- Instrutor mostra tabela e explica que qualquer tipo de incidente deve ser derivado aos especialistas de DT FFP.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/37307768474899-B%C3%B4nus-LATAM-Pass" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Video Acúmulo Milhas",
    detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🎥 Youtube", url: "https://www.youtube.com/shorts/71J3rlILGY4?feature=share" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Atividade \"Controle de Voo e Lançamento\" Acúmulo de Milhas",
    detalhe: "- O instrutor pede para que os alunos assistam aos vídeos com dúvidas de passageiros e elege um aluno diferente para entregar cada solução. A resposta correta está no rodapé do PPT.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Video latam.com (acúmulo parceiros)",
    detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🎥 Youtube", url: "https://www.youtube.com/shorts/wYmA_Q1ZKyo?feature=share" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Video Clube LATAM PASS",
    detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🎥 Youtube", url: "https://www.youtube.com/shorts/G5Np4zshbpQ?feature=share" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Resgate de tickets prêmios ",
    detalhe: "- Instrutor explica a definição de resgate de pontos, considerações para resgate, outras considerações, processo de resgate através do Agente 360 e taxa de resgate e emissão.\n- Instrutor faz uma simulação no latamairlines.com para mostrar as opções de quantidade de pontos por perfil de tarifa e as opções de pontos + dinheiro que o passageiro pode selecionar, caso não tenha pontos disponíveis.",
    tiempo: "0:45:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4408047222803-Resgate-de-tickets-pr%C3%AAmios-com-novo-modelo-de-resgate-FFP-milhas-pontos" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Video LATAM PASS Resgate",
    detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🎥 Youtube", url: "https://www.youtube.com/shorts/jEMsqNPVfOk?feature=share" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Video Desvendando LATAM PASS",
    detalhe: "- Instrutor passa o vídeo.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Quiz Genially + Revisão ",
    detalhe: "- Instrutor passa atividades.",
    tiempo: "0:20:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Avaliação LATAM PASS",
    tema: "Jornada pelo Universo do Conhecimento \" LATAM PASS\"",
    detalhe: "- Instrutor aplica a avaliação.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "📋 Forms AEC", url: "" }],
    iaPic: []
  }
];

const m4Rows = [
  {
    macroTema: "NÃO VOZ",
    tema: "Introdução NÃO VOZ ",
    detalhe: "- Instrutor explica os tipos de interação NÃO VOZ (CHAT e WS) e mostra no PPT como o passageiro pode entrar em contato pelo WS através do Latam.com",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "NÃO VOZ",
    tema: "Video 8 [Vendas] Ferramenta (chat e WS) ",
    detalhe: "- Instrutor apresenta Video de introdução.",
    tiempo: "1:00:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "NÃO VOZ",
    tema: "Genesys Whatsapp/Chat",
    detalhe: "- Instrutor apresenta através do PPT:\nInterações através do serviço whatsapp\nFunções botões dinâmicos\nProcesso de Finalização\nInterações simultáneas\nTransferencia Exitosa\nInterações Pro ativas",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/40120600616851-Acesso-ao-Whatsapp-Genesys" }],
    iaPic: []
  },
  {
    macroTema: "NÃO VOZ",
    tema: "Whatsapp x Chat FCI/CDA",
    detalhe: "- Instrutor destaca que há duas opções de canais para o atendimento NOVOZ. Na opção chat, existem dois subtipos: Chat CDA e Chat FCI. Ele explica, passo a passo, os fluxos de atendimento e as diferenças entre os procedimentos que podem ser realizados em cada canal.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "NÃO VOZ",
    tema: "Chat FCI x Chat CDA",
    detalhe: "- O instrutor reforça as diferenças entre os tipos de chat e aproveita para solicitar que um participante da turma explique, em poucas palavras, o que caracteriza cada um.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "NÃO VOZ",
    tema: "Anexos",
    detalhe: "- Instrutor mostra conteúdos anexos através do PIC. Explica que se trata de um conjunto de documentos para auxiliar \nAnexo 1 - Fluxo derivação  Chat web Genesys (INVOL) \nAnexo 2 - Fluxo derivação  Chat web Genesys (Booking)\nAnexo 3 - Chat web Genesys (Alterações Voluntárias)\nAnexo 4 - WhatsApp Compra de bagagens\nAnexo 5 - Fluxo  Chat web Genesys (Ancillaries)\nAnexo 6 - Fluxo derivação Chat web Genesys (SDFC)\nAnexo 7 - Chat web Check-in\nAnexo 8 -  Chat web Devoluções\nAnexo 9 - Chat Web Cola Default Interações sem informação\nAnexo 10 - Chat web Booking milhas\nAnexo 11 - Chat Web Recovery Assentos \nAnexo 12 - Fluxo Derivação GBM (Google Business Messages) \nAnexo 13 - Fluxo Derivação Chat Web Necessidades Especiais ",
    tiempo: "0:45:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/42671984510995-Anexos-N%C3%A3o-Voz-por-processo" }],
    iaPic: []
  },
  {
    macroTema: "NÃO VOZ",
    tema: "Envio Pendente",
    detalhe: "O instrutor informa que, quando há inatividade do passageiro superior a 5 minutos no atendimento NOVOZ, a conversa deve ser encaminhado para o fluxo \"Pendente Passageiro\".",
    tiempo: "1:00:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "NÃO VOZ",
    tema: "Solicitação de documentação online no atendimento telefônico, via WhastApp e Chat",
    detalhe: "- Instrutor introduz processos realizados pelo canal novoz. Revisa os processos que estão disponíveis para a solicitação e recepção de documentos estando online com o cliente, enfatizando os passos do processo WhatsApp e Chat, em seguida mostra o passo a passo.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/34169487426323-Solicita%C3%A7%C3%A3o-de-documenta%C3%A7%C3%A3o-via-WhatsApp" }],
    iaPic: []
  },
  {
    macroTema: "NÃO VOZ",
    tema: "Forma de Pagamento OT WS",
    detalhe: "- Instrutor explica a FOP OT e mostra passo a passo PIC.",
    tiempo: "0:25:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/30270075990803-Forma-do-pagamento-OT-Pago-para-Canal-N%C3%A3o-Voz" }],
    iaPic: []
  },
  {
    macroTema: "Resumo",
    tema: "Resumo do dia anterior",
    detalhe: "- Instrutor atividade de chuva de idéias para resgatar com os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em um flipchart ou quadro os temas.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://docs.google.com/presentation/d/1Ueeo7fq-I20yqWiWGPFgt1_Tt-Zqs5auNraYoezpgRw/edit?slide=id.g1e447d4f136_1_44#slide=id.g1e447d4f136_1_44" }],
    iaPic: []
  },
  {
    macroTema: "Prática",
    tema: "Simulador Genesys Whatsapp/Chat",
    detalhe: "- Instrutor explica como acessar o simulador e passa módulo NOVOZ. Na tela inicial o aluno deve inserir o BP.",
    tiempo: "1:15:00",
    herramientas: [{ tipo: "💻 Simulador", url: "https://view.genially.com/699ceeb2c29dd6b1df292e3e" }],
    iaPic: []
  },
  {
    macroTema: "Prática",
    tema: "Casos",
    detalhe: "- Instrutor mostra PPT com exemplos de casos reais e analisa junto com os alunos.",
    tiempo: "1:00:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3af9331569d_0_2#slide=id.g3af9331569d_0_2" }],
    iaPic: []
  },
  {
    macroTema: "Avaliação",
    tema: "Jornada pelo Universo do Conhecimento \"NO VOZ\"",
    detalhe: "- Instrutor pede para os alunos abrirem o link e realizarem a avaliação.",
    tiempo: "0:45:00",
    herramientas: [{ tipo: "📋 Forms AEC", url: "https://forms.gle/9DJ2W9msPdCbDScg9" }],
    iaPic: []
  },
  {
    macroTema: "Avaliação",
    tema: "Correção Avaliação",
    detalhe: "- Instrutor corrige a avaliação",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a31204c109_1_199#slide=id.g3a31204c109_1_199" }],
    iaPic: []
  },
  {
    macroTema: "Encerramento Expedição",
    tema: "Video 9 [Vendas] Encerramento Expedição Vendas",
    detalhe: "- Instrutor passa vídeo de encerramento",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a31204c109_1_199#slide=id.g3a31204c109_1_199" }],
    iaPic: []
  }
];

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
// We need to find the secciones array in VENDAS_WS_12_DATA
const sectionsStartIdx = content.indexOf('secciones: [', startIdx);
const sectionsEndIdx = content.indexOf('],', sectionsStartIdx) + 1;

let sectionsText = content.substring(sectionsStartIdx, sectionsEndIdx);
// Remove the trailing ] to append
sectionsText = sectionsText.substring(0, sectionsText.lastIndexOf(']'));

const newSections = `    ,
    {
      tipo: 'mision1',
      label: 'Missão 3: - LATAM PASS',
      rows: ${JSON.stringify(m3Rows, null, 2)}
    },
    {
      tipo: 'mision1',
      label: 'Missão 4 - NÃO VOZ',
      rows: ${JSON.stringify(m4Rows, null, 2)}
    }
  ]`;

const newContent = content.substring(0, sectionsStartIdx) + sectionsText + newSections + content.substring(sectionsEndIdx);

fs.writeFileSync(path, newContent);
console.log('Appended Missão 3 and Missão 4 to VENDAS_WS_12_DATA');
