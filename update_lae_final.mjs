import fs from 'fs';

const laeSections = [
  {
    tipo: "mision1",
    label: "MISSÃO 1: INTRODUÇÃO PI",
    rows: [
      {
        macroTema: "Introdução",
        tema: "Boas Vindas",
        detalhe: "- Instrutor se apresenta e também convida os agentes a se apresentarem.\n- Explica acordos de trabalho e regras do curso.\n- E depois, apresenta a agenda do dia.",
        tiempo: "00:15:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/17qiCiu3wc-8L4QLGvdnNwloGUZUWMYRN3fkQp40c0Zs/edit?slide=id.g3d5bda70cb8_0_1564#slide=id.g3d5bda70cb8_0_1564" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Introdução",
        tema: "Video 1 - Boas Vindas",
        detalhe: "- Instrutor mostra o vídeo Universo LAE PI (Boas Vindas)\n(No mesmo vídeo tem as boas vindas da supervisora de LAE PI)",
        tiempo: "0:05:00",
        herramientas: [{ tipo: "Video", url: "https://drive.google.com/file/d/1vzTutuE--HCTYxmjEJoYvlHvknOH1W6Q/view?usp=drive_link" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Aeroportos: Operação e Contingências",
        tema: "Video 2 - Aeroportos",
        detalhe: "- Instrutor mostra vídeo de introdução Aeroportos (Operação e Contingências). Após visualização, questiona os agentes sobre o que acharam do vídeo y enfatiza a necessidade da nossa operação em fazer todo possível para apoiar nossa defesa.",
        tiempo: "0:05:00",
        herramientas: [{ tipo: "Video", url: "https://drive.google.com/file/d/1wq9zyOOM0lwXVn1dvzmZjU_9Jhp8xO_t/view?usp=drive_link" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "MSP [Manual de Serviço ao Passageiro]",
        tema: "MSP",
        detalhe: "- Instrutor explica o passo a passo de como encontrar o MSP via A360 e informa a finalidade de ter o conhecimento deste manual. (Call Center temos o PIC e nos aeroportos os agentes usam o MSP)\nBrevemente destaca os capítulos con os temas mais recorrentes: Capítulo 10 - Assentos, Capítulo 18 - Contingências, Capítulo 19 - Sobre Reserva (Overbooking)",
        tiempo: "1:00:00",
        herramientas: [{ tipo: "MSP", url: "https://sites.google.com/latam.com/spaxlatam/por/msp-pt?authuser=0" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Declaração de Embarque e contingências",
        tema: "Definição: Declaração de Embarque e Declaração de Contingência",
        detalhe: "- Instrutor mostra onde localizar o tema no PIC realiza a explicação da diferencia entre: 1. Declaração de embarque (Documento comprobatorio) 2. Declaração de Contingência (Obrigatório sempre que o cliente solicitar)",
        tiempo: "00:20:00",
        herramientas: [],
        iaPic: [{ label: "PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360053237453-Declara%C3%A7%C3%A3o-de-Embarque-e-Declara%C3%A7%C3%A3o-de-Conting%C3%AAncia" }],
        consejo: ""
      },
      {
        macroTema: "Exclusivo LAE Recomendação Legal",
        tema: "Exceções: Pilar fora de política e waiver",
        detalhe: "- Instrutor aborda brevemente o tema de exceções fora da política, mostrando a tabela que contempla: Pilar fora de política e waiver (Exclusivo LAE - Recomendação Legal).",
        tiempo: "00:20:00",
        herramientas: [],
        iaPic: [{ label: "PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/1500007916562-Crit%C3%A9rios-para-a-entrada-de-waivers-por-erro-de-agente-e-entrega-de-exce%C3%A7%C3%B5es-fora-da-pol%C3%ADtica#h_01JWS4B9K3P367Y5KQH4RC2ESE" }],
        consejo: ""
      },
      {
        macroTema: "Declarações e Exclusivo LAE",
        tema: "Atividade \"Briefing de Missão\" Declarações e Exclusivo LAE",
        detalhe: "- Instrutor pede para que cada aluno leia e faça um resumo dos 2 temas: Tema 1. Declaração de Embarque e Declaração de Contingência, Tema 2. Exclusivo LAE (Pilar exceções fora da política).\n- Chamadas aleatórias para apresentar os resumos.",
        tiempo: "00:30:00",
        herramientas: [],
        iaPic: [
          { label: "PIC 1", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360053237453-Declara%C3%A7%C3%A3o-de-Embarque-e-Declara%C3%A7%C3%A3o-de-Conting%C3%AAncia#:~:text=WIFI%20Pago-,Declara%C3%A7%C3%A3o%20de%20Embarque%20e%20Declara%C3%A7%C3%A3o%20de%20Conting%C3%AAncia,-h%C3%A1%2011%20dias" },
          { label: "PIC 2", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/1500007916562-Crit%C3%A9rios-para-a-entrada-de-waivers-por-erro-de-agente-e-entrega-de-exce%C3%A7%C3%B5es-fora-da-pol%C3%ADtica#h_01JWS4B9K3P367Y5KQH4RC2ESE" }
        ],
        consejo: ""
      },
      {
        macroTema: "ANAC",
        tema: "Vídeo 3 - Conhecendo a R-400",
        detalhe: "- Instrutor pasa o vídeo de introdução da R-400 e R218 e reforça que é preciso ter ese tema muito claro.",
        tiempo: "0:10:00",
        herramientas: [{ tipo: "Video", url: "https://drive.google.com/file/d/1GPbP2WDb_SIPUajPeJmaUE87QdN0BSQi/view" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "ANAC",
        tema: "Conhecendo a R-400",
        detalhe: "- Instrutor abre R-400 no site da ANAC. Descreve itens R-400 mais utilizados no PI (Contingências / Reclamações de bagagem / Overbooking / Preterição de passageiro).",
        tiempo: "00:40:00",
        herramientas: [{ tipo: "GUIA", url: "https://docs.google.com/document/d/1kJlwwKS-toD_p-3tushEABjAjknNzgeMiNbtsrfsJ3Q/edit?tab=t.0#heading=h.epmwztdrm8ri" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Gastos Incorridos",
        tema: "Definições de Gastos Incorridos",
        detalhe: "- Instrutor reforça e enfatiza os principais puntos de cada tema: 1. Gastos que podem ser analisados e reembolsados, 2. Gastos que não poderão ser reembolsados, 3. Tipos de Comprovantes, 4. Países onde se aplica compensação legal por atrasos ou cancelamentos.",
        tiempo: "1:00:00",
        herramientas: [],
        iaPic: [{ label: "PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/45240235968531-Reclama%C3%A7%C3%B5es-por-servi%C3%A7os-b%C3%A1sicos-e-ou-gastos-incorridos-decorrentes-de-atrasos-ou-cancelamento-de-voos-da-LATAM" }],
        consejo: ""
      },
      {
        macroTema: "Gastos Incorridos",
        tema: "GUIA: Gastos Incorridos",
        detalhe: "- Instrutor reforça como verificar os servicios básicos, gastos incorridos e/ou compensação legal que se aplicam ao cliente, deve-se consultar o: Guia de Gastos Incorridos e Serviços Básicos.",
        tiempo: "00:15:00",
        herramientas: [{ tipo: "GUIA", url: "https://datastudio.google.com/u/0/reporting/3b790e5c-55b7-4c9a-a932-37b9dedc7f0f/page/p_f0jukq82wd?s=hFN33d8i1Gk" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Gastos Incorridos",
        tema: "Atividade \"Briefing de Missão\" Gastos Incorridos",
        detalhe: "- Divisão em grupos para resumo de temas específicos sobre reembolsos e compensações legales.",
        tiempo: "00:30:00",
        herramientas: [],
        iaPic: [{ label: "PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/45240235968531-Reclama%C3%A7%C3%B5es-por-servi%C3%A7os-b%C3%A1sicos-e-ou-gastos-incorridos-decorrentes-de-atrasos-ou-cancelamento-de-voos-da-LATAM#:~:text=Gastos%20incorridos%20reembols%C3%A1veis%20e%20n%C3%A3o%20reembols%C3%A1veis" }],
        consejo: ""
      },
      {
        macroTema: "Gastos Incorridos",
        tema: "Atividade \"Ajuste de Rota com o Navegador\" Gastos Incorridos",
        detalhe: "- Consulta no Painel contingências de um voo que sofreu contingência recentemente.",
        tiempo: "00:30:00",
        herramientas: [{ tipo: "Painel", url: "https://datastudio.google.com/u/0/reporting/90377e61-d09d-4917-9ecf-7241be64a498/page/p_1y8no774td?s=leFlXkzOXxc" }],
        iaPic: [],
        consejo: ""
      }
    ]
  },
  {
    tipo: "mision1",
    label: "MISSÃO 2: PEDIDO DE INFORMAÇÃO",
    rows: [
      {
        macroTema: "Resumo",
        tema: "Resumo do dia anterior",
        detalhe: "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.",
        tiempo: "00:05:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1sNbehkng-SC5hO5Wcl9G4r63l7X8wqq5L-XmIlbl_94/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Pedido de informação",
        tema: "Video 4 - Pedido de Informação",
        detalhe: "- Instrutor mostra vídeo de introdução PI",
        tiempo: "0:05:00",
        herramientas: [{ tipo: "Video", url: "https://drive.google.com/file/d/1KS10nK1o1dBUgiKgznAyWFd5ONZfbaYu/view?usp=drive_link" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Legal Box",
        tema: "Passo a Passo Legal Box",
        detalhe: "- Instrutor apresenta a finalidade da ferramenta e mostra detalhadamente abas do Legal Box e suas funções. (Usadas em PI).",
        tiempo: "0:15:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1i2KGD5u9fmSgq9rhlaqAiC25qsnO-6PDbsHL255jo64/edit?slide=id.g3d5e41808b5_0_971#slide=id.g3d5e41808b5_0_971" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Legal Box",
        tema: "Video 5 - Login Legal Box e envio de PI",
        detalhe: "- Em seguida mostra o vídeo Login e envio de um caso no Legal Box.",
        tiempo: "0:05:00",
        herramientas: [{ tipo: "Video", url: "https://docs.google.com/presentation/d/1i2KGD5u9fmSgq9rhlaqAiC25qsnO-6PDbsHL255jo64/edit?slide=id.g3d5e41808b5_0_971#slide=id.g3d5e41808b5_0_971" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Advogados",
        tema: "Escritórios de Defesa Jurídica LATAM",
        detalhe: "- Instrutor apresenta os escritórios e o seu papel junto a equipe LAE PI.",
        tiempo: "00:10:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1i2KGD5u9fmSgq9rhlaqAiC25qsnO-6PDbsHL255jo64/edit?slide=id.g3d5e41808b5_0_971#slide=id.g3d5e41808b5_0_971" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Padrões de Respostas",
        tema: "Padrões de Respostas",
        detalhe: "- Instrutor descreve as informações que são imprescindíveis para cada tema PI. Enfatiza a qualidade y respostas completas.",
        tiempo: "01:00:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1i2KGD5u9fmSgq9rhlaqAiC25qsnO-6PDbsHL255jo64/edit?slide=id.g3d5e41808b5_0_971#slide=id.g3d5e41808b5_0_971" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Principais Temas dos Processos",
        tema: "Principais Temas dos Processos",
        detalhe: "- Instrutor mostra alguns ejemplos de casos PI de forma detalhada, destacando a investigação em nossas herramientas.",
        tiempo: "02:00:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1i2KGD5u9fmSgq9rhlaqAiC25qsnO-6PDbsHL255jo64/edit?slide=id.g3d5e41808b5_0_971#slide=id.g3d5e41808b5_0_971" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Planilha de controle PI",
        tema: "Introdução a planilha de controle",
        detalhe: "- Instrutor apresenta todos as abas da planilha de controle explicando a finalidade e o preenchimento de cada coluna. (Controle da supervisão).",
        tiempo: "0:20:00",
        herramientas: [{ tipo: "Planilha", url: "https://docs.google.com/spreadsheets/d/1ujZd1EP1ZqZfhSVoJ65JV8BvUyAplq9ClCCt3ZfleN0/edit?gid=0#gid=0" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Pedido de informação - PI",
        tema: "Atividade \"Ajuste de Rota com Navegador\"",
        detalhe: "- Aluno responde um caso PI do zero na mesa do instrutor.",
        tiempo: "01:30:00",
        herramientas: [{ tipo: "Legal Box", url: "https://www.legalbox.com.br/latam6/new_login.asp" }],
        iaPic: [],
        consejo: ""
      }
    ]
  },
  {
    tipo: "mision1",
    label: "MISSÃO 3: SISTEMAS",
    rows: [
      {
        macroTema: "Resumo",
        tema: "Resumo do dia anterior",
        detalhe: "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.",
        tiempo: "00:05:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1sNbehkng-SC5hO5Wcl9G4r63l7X8wqq5L-XmIlbl_94/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Sistemas",
        tema: "Sistemas utilizados em LAE PI",
        detalhe: "- Apresentação de todos os sistemas utilizados para consulta e construção de resposta PI. A equipe LAE PI não executa ação, somente consultas.",
        tiempo: "02:30:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1WKpyzzzl2IWZS_OC5l58fIRsxzD6cY6p7iw2MpI_w9I/edit?slide=id.g3d62d643511_0_172#slide=id.g3d62d643511_0_172" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Quiz Genially",
        tema: "Atividade \"Controle de Voo e Lançamento\"",
        detalhe: "- Quiz sobre sistemas no Genially.",
        tiempo: "00:20:00",
        herramientas: [{ tipo: "Genially", url: "https://view.genially.com/69e137fc406a9a0bc062d4ae" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Sistemas",
        tema: "Atividade \"Ajuste de Rota com o Navegador\" Sistemas",
        detalhe: "- Consulta e resposta de PI na mesa do instrutor focada no uso correto dos sistemas.",
        tiempo: "01:00:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1WKpyzzzl2IWZS_OC5l58fIRsxzD6cY6p7iw2MpI_w9I/edit?slide=id.g3d62d643511_0_172#slide=id.g3d62d643511_0_172" }],
        iaPic: [],
        consejo: ""
      }
    ]
  },
  {
    tipo: "mision1",
    label: "MISSÃO 4: EVIDÊNCIAS",
    rows: [
      {
        macroTema: "Evidências",
        tema: "Evidências Unilaterais",
        detalhe: "- O que são evidências unilaterais, sua importância y o papel dentro de uma defesa. Como capturar e legendar prints dos sistemas.",
        tiempo: "00:30:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/18DA9mSI-M3Le49kcxUvG31XYueYzYvMcWsL9kUcvcLA/edit?slide=id.g3d5dde6c94e_0_2#slide=id.g3d5dde6c94e_0_2" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Evidências",
        tema: "Evidências Bilaterais",
        detalhe: "- O que são evidências bilaterais y sua importância. Onde são encontradas (Legal Box).",
        tiempo: "00:30:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/18DA9mSI-M3Le49kcxUvG31XYueYzYvMcWsL9kUcvcLA/edit?slide=id.g3d5dde6c94e_0_2#slide=id.g3d5dde6c94e_0_2" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Evidências",
        tema: "Atividade \"Controle de Voo e Lançamento\" Sistemas",
        detalhe: "- Indicar funções de documentos bilaterais y simulação de resposta PI focada em evidências.",
        tiempo: "00:40:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/18DA9mSI-M3Le49kcxUvG31XYueYzYvMcWsL9kUcvcLA/edit?slide=id.g3d5dde6c94e_0_2#slide=id.g3d5dde6c94e_0_2" }],
        iaPic: [],
        consejo: ""
      }
    ]
  },
  {
    tipo: "mision1",
    label: "MISSÃO 5: BAGAGEM",
    rows: [
      {
        macroTema: "Resumo",
        tema: "Resumo do dia anterior",
        detalhe: "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.",
        tiempo: "0:05:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1sNbehkng-SC5hO5Wcl9G4r63l7X8wqq5L-XmIlbl_94/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Bagagens X Aeroportos",
        tema: "Gestão de Reclamações",
        detalhe: "- Como é realizado o gerenciamento dos processos iniciais no aeroporto.",
        tiempo: "00:15:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1-d0JxQ3PXq1aiHGWQv2psVRjT7z9H6wAkLEyjQWkVkA/edit?slide=id.g3d5e41808b5_0_1259#slide=id.g3d5e41808b5_0_1259" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Termos e Definições",
        tema: "RIBs e Prazos - MSP",
        detalhe: "- O que é RIB, detalhamento de informações y prazos para abertura, busca y indenização.",
        tiempo: "01:00:00",
        herramientas: [{ tipo: "MSP", url: "https://docs.google.com/document/d/1Gm_xNYZjePg-w0XsCq2FoQD8jaB6oNCBII9LT9xjAmo/edit?tab=t.0" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Termos e Definições",
        tema: "Declaração de ítens",
        detalhe: "- Procedimento para Declaração de itens de valor na bagagem despachada (Voos dentro e saindo do Brasil).",
        tiempo: "00:20:00",
        herramientas: [],
        iaPic: [{ label: "PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/38916416878867-10-04-25-RECLAMA%C3%87%C3%95ES-BAGAGEM-Declara%C3%A7%C3%A3o-de-itens-de-valor-na-bagagem-despachada-Voos-dentro-e-saindo-do-Brasil" }],
        consejo: ""
      },
      {
        macroTema: "Termos e Definições",
        tema: "Reclamações de Bagagens",
        detalhe: "- Generalidades, criação de compensación vía A360/TV, bagagem danificada/violada/extraviada.",
        tiempo: "01:00:00",
        herramientas: [],
        iaPic: [{ label: "PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/sections/4413742094227-Reclama%C3%A7%C3%B5es-Bagagem" }],
        consejo: ""
      },
      {
        macroTema: "World Tracer Desktop (WTD)",
        tema: "Atividade \"Relatório de Exploração\" WTD",
        detalhe: "- Processos no WTD: Generalidades, Extravio, Dano, Criação de PIR.",
        tiempo: "01:00:00",
        herramientas: [],
        iaPic: [{ label: "PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/35758923132947-World-Tracer-Desktop-WTD#h_01JDHQK77TY0RWPB1H1WMTPK77" }],
        consejo: ""
      },
      {
        macroTema: "World Tracer Desktop (WTD)",
        tema: "Atividade \"Relatório de Exploração\" WTD",
        detalhe: "- Casos PI sobre Bagagem.",
        tiempo: "01:00:00",
        herramientas: [{ tipo: "Casos PI BG", url: "https://docs.google.com/document/d/1ySMrqqPo-VJEaOBijvS52mbH-CrUA_-w/edit?tab=t.0" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "World Tracer Desktop (WTD)",
        tema: "Atividade \"Relatório de Exploração\" WTD",
        detalhe: "- Acesso ao WTD Training para buscas de Ribs y consulta de informações pertinentes para PI.",
        tiempo: "02:00:00",
        herramientas: [{ tipo: "WTD Training", url: "https://desktop.worldtracer.aero/desktop/index.html" }],
        iaPic: [],
        consejo: ""
      }
    ]
  },
  {
    tipo: "mision1",
    label: "MISSÃO 6: ADV / EVALUACIÓN",
    rows: [
      {
        macroTema: "Resumo",
        tema: "Resumo do dia anterior",
        detalhe: "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.",
        tiempo: "0:05:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1sNbehkng-SC5hO5Wcl9G4r63l7X8wqq5L-XmIlbl_94/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Revisão",
        tema: "Revisão",
        detalhe: "- Revisão de temas da avaliação utilizando o PPT de resumo.",
        tiempo: "00:20:00",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1sNbehkng-SC5hO5Wcl9G4r63l7X8wqq5L-XmIlbl_94/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Avaliação",
        tema: "Jornada pelo Universo do Conhecimento",
        detalhe: "- Avaliação via formulário.",
        tiempo: "00:40:00",
        herramientas: [
          { tipo: "Forms AeC", url: "https://docs.google.com/forms/d/e/1FAIpQLSemDPbpsw82SyJJYgjk3bA09nJZrWo64ujsio90v5Plz0FYQQ/viewform" },
          { tipo: "Forms KON", url: "https://docs.google.com/forms/d/e/1FAIpQLSdqjbKL4u5zmhQlVCTjGLAM8nUoLFkxMxa-yCeGd38yT-MO7A/viewform" }
        ],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "NPS",
        tema: "Pesquisa de Satisfação",
        detalhe: "- QR Code para pesquisa de reação.",
        tiempo: "00:10:00",
        herramientas: [
          { tipo: "Forms AeC", url: "https://docs.google.com/forms/d/e/1FAIpQLSdKzaV5gJK1SsZnnjJb4nW3kFIXjdYPBJNPrxF9WQL79Jtg8w/viewform" },
          { tipo: "Forms KON", url: "https://docs.google.com/forms/d/e/1FAIpQLSdOqLYLlS_-qeW_u-GqMYZSTbOKGncZf1_qBGIKWiehnpWBZA/viewform" }
        ],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "ADV",
        tema: "ADV",
        detalhe: "- Encontro con advogados para esclarecimentos sobre o proceso jurídico y a importância do PI.",
        tiempo: "01:30:00",
        herramientas: [{ tipo: "Meet/Presencial", url: "https://docs.google.com/presentation/d/1Z81hurod8FBOVt-ibMTn7KFlNBmuox45/edit?slide=id.p1#slide=id.p1" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Encerramento",
        tema: "Video 6 - Encerramento",
        detalhe: "- Vídeo de encerramento PI.",
        tiempo: "0:05:00",
        herramientas: [{ tipo: "Video", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055223693-Bagagem-Extraviada-ou-Atrasada" }],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Avaliação de Recuperação",
        tema: "Ajuste de Rota para Reprovados",
        detalhe: "- Avaliação de recuperação para quem não atingiu a média.",
        tiempo: "00:40:00",
        herramientas: [
          { tipo: "Forms AeC", url: "https://docs.google.com/forms/d/e/1FAIpQLSdu6H1DwR1C-2lm1PVckIHQxFeOAL64kCOSWGakBTAaIXtHqQ/viewform" },
          { tipo: "Forms KON", url: "https://docs.google.com/forms/d/e/1FAIpQLSeF8eY8jUJ6KS3vbDLi1BUTxRSUFhXYLWzP7RNPd60I5IaGNQ/viewform" }
        ],
        iaPic: [],
        consejo: ""
      },
      {
        macroTema: "Correção",
        tema: "Correção da avaliação",
        detalhe: "- Correção da avaliação de recuperação.",
        tiempo: "00:15:00",
        herramientas: [
          { tipo: "Forms AeC", url: "https://docs.google.com/forms/d/e/1FAIpQLSdu6H1DwR1C-2lm1PVckIHQxFeOAL64kCOSWGakBTAaIXtHqQ/viewform" },
          { tipo: "Forms KON", url: "https://docs.google.com/forms/d/e/1FAIpQLSeF8eY8jUJ6KS3vbDLi1BUTxRSUFhXYLWzP7RNPd60I5IaGNQ/viewform" }
        ],
        iaPic: [],
        consejo: ""
      }
    ]
  },
  {
    tipo: "ojt",
    label: "DESAFIO OJT",
    rows: [
      {
        macroTema: "Desafio OJT",
        tema: "Desafio OJT",
        detalhe: "Instrutor leva agentes até a operação para acompanhamento lado a lado.",
        tiempo: "02:00:00",
        herramientas: [{ tipo: "Operação", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055223693-Bagagem-Extraviada-ou-Atrasada" }],
        iaPic: [],
        consejo: ""
      }
    ]
  }
];

const laeDataObj = {
  label: "LAE",
  color: "#99CC33",
  evalKon: [],
  evalAec: [],
  evalMsg: "Os alunos que não atingirem a média final de 80% devem realizar o \"Ajuste de Rota\" - Avaliação de recuperação e somente após a aprovação realizar os testes de acessos.\n\nDuração: 40 min",
  secciones: laeSections
};

const filePath = 'src/lib/data.ts';
let content = fs.readFileSync(filePath, 'utf8');

// Find LAE_DATA and replace its content
const laeStart = content.indexOf('export const LAE_DATA = {');
const laeEnd = content.indexOf('};', laeStart) + 2;

const newLaeContent = `export const LAE_DATA = ${JSON.stringify(laeDataObj, null, 2)};`;

const updatedContent = content.substring(0, laeStart) + newLaeContent + content.substring(laeEnd);
fs.writeFileSync(filePath, updatedContent, 'utf8');
console.log('LAE_DATA fully updated in data.ts including OJT.');
