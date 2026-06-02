const fs = require('fs');
const path = './src/lib/appConfig.json';

const newData = [
  // Missão 1: Introdução
  {
    tipo: 'mision1',
    label: 'Missão 1: Introdução',
    rows: [
      {
        macroTema: 'Introdução',
        dia: 1,
        tema: 'Boas Vindas',
        detalhe: '- Instrutor se apresenta e pede para os alunos se apresentarem brevemente. \n- Instrutor explica acordos de trabalho (Participação ativa, exercícios e avaliação).\n- Instrutor faz abertura do curso mostrando a agenda.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/16JlVWEus5-zQysuPI3Dc5dSKNriELR7lYFDQfopRV6o/edit?slide=id.g3a3132480a8_0_100#slide=id.g3a3132480a8_0_100' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Introdução',
        dia: 1,
        tema: 'Conceito: Reclamação X Solicitação',
        detalhe: '- Instrutor enfatiza a diferença e considerações entre uma reclamação e uma, \n(Enfatiza que o agente sempre deve buscar mais de uma solução para o cliente).',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/16JlVWEus5-zQysuPI3Dc5dSKNriELR7lYFDQfopRV6o/edit?slide=id.g3b33812d9e2_0_1716#slide=id.g3b33812d9e2_0_1716' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Introdução',
        dia: 1,
        tema: 'Video 1 - "Conhecendo BO Casos"',
        detalhe: '- Instrutor mostra o vídeo "Conhecendo BO Casos".',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🎬 Video', url: 'https://drive.google.com/file/d/1rshd9mUUx2nuXIWWwNs3KQfHgvMLZg7L/view' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Introdução',
        dia: 1,
        tema: 'Conceito Resolutividade e FCR',
        detalhe: '- Instrutor explica a definição e importância da Resolutividade e FCR',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/16JlVWEus5-zQysuPI3Dc5dSKNriELR7lYFDQfopRV6o/edit?slide=id.g3e17e505cce_0_11380#slide=id.g3e17e505cce_0_11380' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Introdução',
        dia: 1,
        tema: 'Conceito \nQuebra de serviço',
        detalhe: '- Instrutor explica conceito de quebra de serviço e como se aplica ao nosso universo \n(Aéreo e de atendimento ao cliente);',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/16JlVWEus5-zQysuPI3Dc5dSKNriELR7lYFDQfopRV6o/edit?slide=id.g3e17e505cce_0_11417#slide=id.g3e17e505cce_0_11417' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Introdução',
        dia: 1,
        tema: 'Política: Gestão de Reclamações',
        detalhe: '- Instrutor revisa as Generalidades e Guia de Gestão de Reclamações.\n(Não entrando em cada Seção das tabelas no PIC, mas recordando os tipos de reclamações).\n- Instrutor destaca a informação sobre o prazo para registrar uma reclamação.  \n(Cliente solicita 1 compensação e a situação ocorreu a mais de 2 anos, o caso deve ser direcionado para LAE).',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/17751430190867-Generalidades-e-Guia-de-Gest%C3%A3o-de-Reclama%C3%A7%C3%B5es' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Introdução',
        dia: 1,
        tema: 'Política: \nReclamações por \nagente 360',
        detalhe: '- Instrutor em Reclamações por Agente 360, dá alguns exemplos da tabela. \n"Tipos de  quebras e motivos disponíveis no Agente 360"',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/17751430190867-Generalidades-e-Guia-de-Gest%C3%A3o-de-Reclama%C3%A7%C3%B5es' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Introdução',
        dia: 1,
        tema: 'Política: \nDeclaração itens de valor - Bagagem',
        detalhe: '- Instrutor explica brevemente o procedimento para Declaração de itens de valor na bagagem despachada \n(Voos dentro e saindo do Brasil).',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/13999979686931-Reclama%C3%A7%C3%B5es-por-bagagem-de-m%C3%A3o-despachada-no-por%C3%A3o' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Introdução',
        dia: 1,
        tema: 'Política: \nDeclaração (Embarque e Contingência)',
        detalhe: '- Instrutor explica no PIC o processo de solicitação do Declaração de Embarque e de Contingência" (Somente Brasil).',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053237453-Declara%C3%A7%C3%A3o-de-Embarque-e-Declara%C3%A7%C3%A3o-de-Conting%C3%AAncia#:~:text=WIFI%20Pago-,Declara%C3%A7%C3%A3o%20de%20Embarque%20e%20Declara%C3%A7%C3%A3o%20de%20Conting%C3%AAncia,-h%C3%A1%2011%20dias' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Introdução',
        dia: 1,
        tema: 'Atividade\n"Briefing de Missão"\nConceitos',
        detalhe: '- Instrutor pede para os alunos se dividirem em 4 grupos e cada grupo realiza um \nresumo de cada tema visto, sendo:\nGrupo 1: Generalidades e Guia de Gestão de Reclamações\nGrupo 2: Reclamações por agente 360 - Tipos de quebras e motivos disponíveis no agente 360\nGrupo 3: Declaração de itens de valor na bagagem despachada (Voos dentro e saindo do Brasil)\nGrupo 4: Declaração de Embarque e Declaração de Contingência \n10 min para fazer o resumo e 5 min para cada grupo apresentar.',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/16JlVWEus5-zQysuPI3Dc5dSKNriELR7lYFDQfopRV6o/edit?slide=id.g3b33812d9e2_0_77#slide=id.g3b33812d9e2_0_77' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 2: Temas Legais
  {
    tipo: 'mision1',
    label: 'Missão 2: Temas Legais',
    rows: [
      {
        macroTema: 'Solicitação de Chamada',
        dia: 1,
        tema: 'Fluxo: \nEnvio de Gravação',
        detalhe: '- Instrutor mostra como chegar no fluxo no PIC;\nAuxilia os agentes com a leitura na orientação descrita no fluxo seguindo por cada ponto.\nExplica que o agente BO Casos ao aplicar a macro "Informações básicas chamadas FALE", o caso segue na bandeja de BO. Porém a equipe de Qualidade identifica o caso, realiza a analise (Se houve ou não erro por parte da LATAM) e sinaliza o agente com um parecer para que possa seguir com a tratativa do caso conforme posicionamento da qualidade.',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053237453-Declara%C3%A7%C3%A3o-de-Embarque-e-Declara%C3%A7%C3%A3o-de-Conting%C3%AAncia#:~:text=WIFI%20Pago-,Declara%C3%A7%C3%A3o%20de%20Embarque%20e%20Declara%C3%A7%C3%A3o%20de%20Conting%C3%AAncia,-h%C3%A1%2011%20dias' }],
        iaPic: [],
        consejo: '1'
      },
      {
        macroTema: 'Revisão de contrato',
        dia: 1,
        tema: 'Contrato de \nTransporte Aéreo',
        detalhe: '- Instrutor relembra onde localizar o contrato em nosso site e faz uma breve revisão. \nFazendo a leitura de pontos mais recorrentes na operação, através exemplos.',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🔗 Link', url: 'https://www.latamairlines.com/br/pt/legal/condicoes-do-contrato-de-transporte' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Revisão de contrato',
        dia: 1,
        tema: 'Termos e condições do Programa LATAM PASS',
        detalhe: '- Instrutor relembra onde localizar o contrato em nosso site e faz uma breve revisão. \nFazendo a leitura de pontos mais recorrentes na operação, através exemplos.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🔗 Link', url: 'https://latampass.latam.com/pt_br/descubra-latam-pass/termos-e-condicoes' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Reclamações Legais',
        dia: 1,
        tema: 'Lei Europeia',
        detalhe: '- Instrutor explica tratativa da Lei Europeia com base no PDF.\nAplicação para residentes dos países membros da UE.',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://latampass.latam.com/pt_br/descubra-latam-pass/termos-e-condicoes' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Gestão de Reclamações SAB',
        dia: 1,
        tema: 'Política: \nGestão SAB',
        detalhe: '- Instrutor explica a definição da Gestão de reclamações SAB.\n- Faz a leitura dos pontos da tabela: Assentos Abaixo do Padrão Cabine Business, Premium Economy e Cabine Economy.',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/17137275288339-Gest%C3%A3o-de-Reclama%C3%A7%C3%B5es-SAB' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Gestão de Reclamações SAB',
        dia: 1,
        tema: 'Fluxo: \nGestão SAB',
        detalhe: '- Em seguida abre o fluxo: Assentos Abaixo do Padrão \nCabine Business e Premium Economy.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://lucid.app/documents/embedded/3df1aa6e-3425-43df-9e03-8db0eca45eed?invitationId=inv_686e9a9d-e517-4107-836f-f8858f03b533#' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Gestão de Reclamações SAB',
        dia: 1,
        tema: 'Fluxo: \nGestão SAB',
        detalhe: '- Em seguida abre o fluxo: Assentos Abaixo do Padrão Cabine Economy.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://lucid.app/documents/embedded/5f4f5fab-da72-45da-9d2d-1c314cfa5020/-V2MTV~NM9_M?invitationId=inv_ac891dd4-20b2-4885-b4a8-fd7a2674b805' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Reclamações Legais',
        dia: 1,
        tema: 'Conceito: Livro de reclamações',
        detalhe: '- Instrutor explica que o livro de reclamações é um órgão legal de reclamação no Peru e que não tem no BR. Porém, quando um cliente registra uma queixa no Peru em português a tratativa vem para nossa bandeja. \n- Instrutor destaca que é uma demanda baixa e que a tratativa é feita como qualquer outra. Mas um ponto importante é que precisamos tratar rápido, não podemos deixar o caso envelhecendo na bandeja pois a LATAM pode sofrer sanções legais.. Com isso, é importante nos atentar aos prazos.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053439934-Reclama%C3%A7%C3%B5es-Legais' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'CDC',
        dia: 1,
        tema: 'Código de Defesa ao Consumidor',
        detalhe: '- Instrutor abre link do CDC e explica o conceito abaixo:\nÉ a lei que regulamenta os direitos e deveres na relação entre quem compra e quem vende. Ele protege o comprador contra abusos, garantindo produtos de qualidade, garantia legal e informações claras).',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🔗 Link', url: 'https://www.planalto.gov.br/ccivil_03/_ato2019-2022/2022/decreto/d11034.htm#:~:text=I%20%2D%20hor%C3%A1rio%20de%20atendimento%20n%C3%A3o%20inferior%20a%20oito%20horas%20di%C3%A1rias%2C%20com%20disponibiliza%C3%A7%C3%A3o%20de%20atendimento%20por%20humano%3B' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'CDC',
        dia: 1,
        tema: 'Video 2 - \n"CDC X ANAC"',
        detalhe: '- Instrutor mostra vídeo que reflete a responsabilidade da Companhia com o CDC.\n- Destaca que a ANAC é o órgão regulador da aviação brasileira e coloca como exemplo o ART 49 do CDC que não sobrepõe a R400 da ANAC.',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🎬 Video', url: 'https://drive.google.com/file/d/1Gx6EZ8HFxXA2JlnrdhSmefB4xjHQErU0/view?usp=drive_link' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 3: Reclamações
  {
    tipo: 'mision1',
    label: 'Missão 3: Reclamações',
    rows: [
      {
        macroTema: 'Matriz Atenção aos Passageiros da Agência',
        dia: 1,
        tema: 'Reclamações \nTerceiros (Agências)',
        detalhe: '- Instrutor realiza leitura e uma breve explicação sobre a definição de tickets emitidos em agências de viagens. Destaca onde buscar na tabela do PIC os processos para cada (TIPO DE DE PASSAGEIRO).',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/33035559260819-Matriz-Aten%C3%A7%C3%A3o-aos-Passageiros-da-Ag%C3%AAncia#:~:text=consulte%20as%20exce%C3%A7%C3%B5es.-,TIPO%20DE%20PASSAGEIRO,-Processo' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Matriz Atenção aos Passageiros da Agência',
        dia: 1,
        tema: 'Atividade\n"Relatório de Exploração"\nTickets agências',
        detalhe: '- Instrutor projeta imagens de tickets e propõe batalha entre grupos.\n(Primeiro grupo (mesmo grupo que realizou a atividade anterior ), que se manifestar respondendo como identificou o local de emissão do ticket e mostrar onde localizou marca ponto.\n- O grupo que marcar mais pontos vence.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1y2kojUnkAs8I1mBo9ALHgghqdCboQpq3elh7LyKk89g/edit?slide=id.g3e1d5e8e90a_0_887#slide=id.g3e1d5e8e90a_0_887' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Matriz Atenção aos Passageiros da Agência',
        dia: 1,
        tema: 'Aplicativo \nCheckACode',
        detalhe: '- Instrutor explica as opções de decodificação nas ferramentas: \nSabre, CheckACode e no A360',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1y2kojUnkAs8I1mBo9ALHgghqdCboQpq3elh7LyKk89g/edit?slide=id.g3e58e9d8d8e_0_16#slide=id.g3e58e9d8d8e_0_16' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Reembolso por Direito a Desistência BR',
        dia: 1,
        tema: '\nResolução \n400 ANAC',
        detalhe: '- Instrutor relembra onde localizar o tema no PIC e faz uma breve explicação dos princípais pontos através de exemplos que de como o tema llega na operação.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/4410129692563-Reembolso-por-Direito-a-Devolu%C3%A7%C3%A3o-e-Desist%C3%AAncia' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Reembolso por Direito a Desistência BR',
        dia: 1,
        tema: '\nResolução \n400 ANAC',
        detalhe: '- Instrutor mostra casos reais com respostas positivas e negativas. (Casos no slide e também no rodapé).\n- Fala sobre a importância de uma boa comunicação que pode por consequência atingir a satisfação do cliente e uma boa avaliação do atendimento, mesmo sendo uma resposta negativa a sua solicitação e/ou reclamação.',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1y2kojUnkAs8I1mBo9ALHgghqdCboQpq3elh7LyKk89g/edit?slide=id.g1d4846c063b9cf30_10861#slide=id.g1d4846c063b9cf30_10861' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Reclamações \nCasos LAE',
        dia: 1,
        tema: 'Reclamações \nCasos LAE',
        detalhe: '- Instrutor relembra onde localizar o tema no PIC e faz uma breve explicação dos tópicos da tabela "Casos Sensíveis" e também da tabela "Reclamações gerais LAE". \n- Enfatizando os tipos de reclamações que são atendidos pela equipe LAE;\n- O que o agente BO Casos deve fazer quando o cliente entra em contato, mas já tem um caso em LAE;\n- Quando BO Casos deve ou não transferir um caso para a equipe LAE;\n- Consequências (No atendimento/relacionamento/Satisfação do cliente) de se derivar um caso erroneamente.',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053440094-Reclama%C3%A7%C3%B5es-Casos-LAE' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Reclamações \nCasos LAE',
        dia: 1,
        tema: 'Atividade\n"Controle de Voo e Lançamento"\nCasos LAE',
        detalhe: '- Instrutor pede para todos abriram o Zendesk e informa um caso para cada grupo (Casos abaixo ou também no rodapé do Slide), e aplica a atividade conforme orientações no Slide.\n#1858708 Não, deriva\n#1858709 Sim, deriva\n#1858710 Não, deriva\n#1858711 Sim, deriva',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1y2kojUnkAs8I1mBo9ALHgghqdCboQpq3elh7LyKk89g/edit?slide=id.g3e58e9d8d8e_0_51#slide=id.g3e58e9d8d8e_0_51' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Reclamações \nErro do Agente',
        dia: 1,
        tema: 'Video 3 - \n"Erro do Agente"',
        detalhe: '- Instrutor mostra Vídeo introdutório do fluxo de erros operacionais.',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🎬 Video', url: 'https://drive.google.com/file/d/1SdAVhiU9AcCUHMHTJR2o3QQFgw9C1Ihi/view?usp=drive_link' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Reclamações \nErro do Agente',
        dia: 1,
        tema: 'Erro de Executivo',
        detalhe: '- Instrutor mostra onde localizar o fluxo no PIC.\n- Reforça os passos com exemplos reais para melhor assimilação do tema para os agentes;\nDestaca que o agente deve analisar de forma cuidadosa e identificar se o caso já foi resolvido na primeira linha ou se ainda é necessário que BO Casos siga com a tratativa.\nSe reclamação já foi atendida, apenas salvar o ticket como resolvido, mas se ainda não foi, seguir com análise e condução; \n- Dicas sobre atenção e cuidado ao analisar e identificar um erro operacional;\n- Reforçar necessidade de registrar as evidências do erro e de quem errou na nota interna do Zendesk;',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://lucid.app/documents/embedded/8457dc44-459c-4353-b3c5-4a6a19b0b623/aTdSLg~tuU9L?invitationId=inv_90fbd632-67dd-4608-b8cf-c65b0645f7e6' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 4: Zendesk
  {
    tipo: 'mision1',
    label: 'Missão 4: Zendesk',
    rows: [
      {
        macroTema: 'Zendesk',
        dia: 1,
        tema: 'Perfis e \nConceitos',
        detalhe: '- Instrutor faz uma recapitulação dos pontos abaixo no PIC vinculando sua explicação entre PIC e ferramenta Zendesk;\nPerfis de usuários\nAcesso ao aplicativo (Home do Zendesk)\n"Atualizações em seus tickets", "Tickets abertos", "Estatísticas do Ticket", "Estatísticas de satisfação", "Tickets abertos e atribuídos a você".\nConceitos básicos\nStatus de um bilhete\nEstrutura de um bilhete\nFuncionalidades',
        tiempo: '00:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk#:~:text=%C3%A1reas%20da%20companhia.-,PERFIS%20DE%20USU%C3%81RIOS,-Funcionalidade' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Resumo do \ndia anterior',
        dia: 2,
        tema: 'Resumo do \ndia anterior',
        detalhe: '- Instrutor atividade de chuva de idéias para resgatar com os alunos os temas relevantes vistos no dia anterior.',
        tiempo: '00:05:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1zBoBojVuDiOaqdcdi8mQ-0OjWRr8fCJui3tomh_75VQ/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Zendesk',
        dia: 2,
        tema: 'Criação, preenchimento do formulário e reclassificação de um bilhete - Zendesk',
        detalhe: '- Instrutor mostra os pontos iniciais como:\nCriação de caso Zendesk\n- Instrutor enfatiza que se houver a necessidade da abertura de um caso, o mesmo deve ser feito por meio do formulário Zendesk no A360.\nPesquisa de um solicitante\nCriação de um solicitante\nAlteração de um solicitante\nReclassificar um bilhete\nReatribuição de um bilhete',
        tiempo: '00:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk#:~:text=imagem%20de%20Visualiza%C3%A7%C3%B5es.-,Cria%C3%A7%C3%A3o%20de%20caso%20Zendesk,-Este%20processo%20alternativo' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Zendesk',
        dia: 2,
        tema: 'Recursos',
        detalhe: '- Instrutor mostra os pontos adicionais que auxiliam o agente na condução de casos não Zendesk.\nFundir bilhetes\nVarinha Inteligente\nCriação de Ticket Filho (Instrutor explica o passo a passo e também qual a finalidade dos corresponsáveis).\nDestaca que cada bandeja (para quem deve atribuir o caso), varia de acordo com a situação. Ou seja, o destinatário encontra-se direto no artigo específico - PIC, conforme o tipo de caso.\nReabrir casos com macros ou reenviar último comentário público.\n- Instrutor faz uma leitura breve da tabela - Consultas por um caso Zendesk',
        tiempo: '00:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk#:~:text=com%20status%20Aberto.-,Fundir%20bilhetes,-Permite%20fundir%20bilhetes' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Zendesk',
        dia: 2,
        tema: 'Leitura detalhada das funções no Zendesk',
        detalhe: '- Instrutor demonstra no Zendesk produção (Real) os pontos abaixo, esclarecendo o que é e para que serve cada ítem \n(Se guiando pela posição na tela).\n"Parte superior da tela"\nTicket que está siendo visualizado (Assunto e número);\nNome do Cliente;\nStatus e número do ticket;\n"Lado esquerdo da tela"\nLeitura e preenchimento do Formulário único;\nAtenção ao campo meio de contato para identificar origem do registro e como conduzir o caso;\nAplicação macro assunto;\n"Lado direito da tela"\nContexto do cliente;\nConhecimento;\nInteligência (Varinha mágica);\nAplicativos.\n"Inferior da tela"\nAplicar Macro;\nOpções Próximo ou permanecer no Ticket;\nBotão ignorar (Pular ticket);\nBotão Salvar ticket (ver os Status);\nReforçar utilização correta dos Status Zendesk, conforme PIC\n"Centro da tela"\nComentários internos;\nRepostas públicas.\n- Instrutor faz um passo a passo narrando de forma resumida como é realizada a tratativa até o final. (Check list no PPT)\n- Instrutor esclarece uso e como funciona a ferramenta e suas funções: Previsões e Resumo, Macros, Tickets Semelhantes e Sugestão de fusão;\nDemonstra de forma simples diretamente no Zendesk as funções do recurso: Expandir, Tornar mais amigável e Tornar mais formal.',
        tiempo: '00:20:00',
        herramientas: [{ tipo: '🔗 Link', url: 'https://casounico.zendesk.com/agent' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Zendesk',
        dia: 2,
        tema: 'Tipificação',
        detalhe: '- Instrutor reforça o conceito da tipificação no PPT e mostra no zendesk como devemos tipificar os tickets de acordo com o tipo de atendimento.\nDestaca a importância de tipificar corretamente de acordo com o tema da reclamação e/ou solicitação, uma vez que esta informação estará presente nos relatórios apresentados para a empresa com a finalidade de indicar para as áreas, quais são os ofensores, principais reclamações e pontos de insatisfação na visão dos clientes. \nCom isso, os responsáveis podem atuar de forma a mitigar estes apontamentos e reduzir as reclamações.',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1OjIx--lLcCb9spVMkP6sFB1fBK7PvgcL6vCGZrwAZ1I/edit?slide=id.g3a8690b0005_1_301#slide=id.g3a8690b0005_1_301' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Zendesk',
        dia: 2,
        tema: 'Macros Zendesk',
        detalhe: '- Instrutor explica o que é qual a finalidade das macros e carta:\nMacro = Função Automática Zendesk (pode ser automação para qualquer coisa), \nCartas = Textos prontos para interagir com o cliente por meio do Zendesk.\n- Instrutor enfatiza a necessidade de ter atenção ao editar os dados do cliente na qual está fazendo a tratativa do caso como nome, voo, localizador, N° ordem de compra, E-tkt, gênero do pronome de tratamento e etc; antes de enviar ao cliente. (Mostra no PIC onde localizar)\n- Menciona onde localizar protocolos e/ou scripts no PIC, que também possam auxiliar no envío de uma mensagem ao cliente. \n- Orienta que, caso não exista macros adequadas ao seu caso, o agente deve solicitar por meio de formulário CDR a inclusão de uma nova.',
        tiempo: '00:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/17381124669715-Macros-Zendesk' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Zendesk',
        dia: 2,
        tema: 'Abertura de caso\n vía A360',
        detalhe: '- Instrutor reforça que se houver a necessidade da abertura de um caso, o mesmo deve ser feito no formulário Zendesk no A360. \n- Instrutor abre o Zendesk Training e mostra o passo a passo de como deve ser feita a abertura de um caso no formulário.',
        tiempo: '00:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/31926091283859-Abrir-caso-Zendesk' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Zendesk',
        dia: 2,
        tema: 'Atividade \n"Controle de Voo e Lançamento\nAbertura e tratativa de Casos',
        detalhe: '- Instrutor compartilha acesso ao A360 Training e pede os agentes criarem casos aplicando as cartas/macros disponíveis.\n(Dados Training no rodapé do slide).',
        tiempo: '00:20:00',
        herramientas: [{ tipo: '🔗 Link', url: 'https://casounico1437403668.zendesk.com/agent/home/tickets' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 5: Gestão de Casos
  {
    tipo: 'mision1',
    label: 'Missão 5: Gestão de Casos',
    rows: [
      {
        macroTema: 'Ações \nZendesk',
        dia: 2,
        tema: 'Ação em Zendesk \npara Backoffice',
        detalhe: '- Instrutor faz a leitura e explicação da tabela \nAção em Zendesk para Backoffice.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053183573-A%C3%A7%C3%A3o-em-Zendesk-para-Backoffice' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Gestão de Casos',
        dia: 2,
        tema: 'Gestão de Casos',
        detalhe: '- Instrutor destaca a necessidade de antes de iniciar a tratativa de um caso, investigar se a mesma já foi tratada em um outro ticket.',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1Qkf5qx2MeUSbqSLhbqECgPhwGPJapKrXtES4nAeP4N8/edit?slide=id.g3e52d0017d6_0_2247#slide=id.g3e52d0017d6_0_2247' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Gestão de Casos',
        dia: 2,
        tema: 'Gestão de Casos',
        detalhe: '- Instrutor explica a diferença entre os conceitos e aplicação de: Compensação, Ressarcimento ou Reembolso;',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1Qkf5qx2MeUSbqSLhbqECgPhwGPJapKrXtES4nAeP4N8/edit?slide=id.g3e495ab6d42_0_716#slide=id.g3e495ab6d42_0_716' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Gastos\n Incorridos',
        dia: 2,
        tema: 'Gastos\n Incorridos',
        detalhe: '- Instrutor reforça brevemente o tema \nGastos incorridos, destacando os temas abaixo:\nGastos incorridos reembolsáveis e não reembolsáveis\nTipos de comprovantes aceitos\nReembolso de gastos incorridos\nCondições específicas por país',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/45240235968531-Reclama%C3%A7%C3%B5es-por-servi%C3%A7os-b%C3%A1sicos-e-ou-gastos-incorridos-decorrentes-de-atrasos-ou-cancelamento-de-voos-da-LATAM' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Gestao de Reclamações',
        dia: 2,
        tema: 'Fluxo Gestão de Reclamações',
        detalhe: '- Instrutor faz a leitura do fluxo Gestão de Reclamações A360.',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://lucid.app/documents/embedded/01800756-8acd-45f5-b723-37613a158bad/Di-3VrJUYOQm?invitationId=inv_218f3c02-f5de-4f93-b1a7-bfa2387f437a' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Compensações',
        dia: 2,
        tema: 'Soluções entregues \npor meio do A360',
        detalhe: '- Instrutor reforça no A360 a função "Negociar nova compensação" que permite solicitar autorização para seu supervisor devido o valor ser maior que o disponível no A360 para ressarcir e/ou compensação que Cliente solicita.\n- Instrutor mostra exemplos de casos abaixo:\n1. Caso aplicado apenas Desculpas: 60496164\n2. Casos aplicada compensação flexível: 61750668 e 61750668',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🔗 Link', url: 'https://a360-accounts.st.latamairlines.com/u/login?state=hKFo2SBmendoc2NQZDJMMEhxaDNfaHhkUGl5WEtHSGRQTHB5M6Fur3VuaXZlcnNhbC1sb2dpbqN0aWTZIE94TWFWdEhWNEN4amV0SzZZQ083ZzFoQ1gtTlhXZkJxo2NpZNkgNE9adHh6aks2QnhHdGJ0SEFSOUdaRkpzZlR3VmpiYk4' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Compesações \nLegais',
        dia: 3,
        tema: 'Compesações \nLegais',
        detalhe: '- Instrutor explica conceito das compensações determinadas em DES e uso do conversor de moedas do BaCen (Banco Central do Brasil).\n - Esclarece as situações que são aplicáveis a entrega de compensação ao cliente determinada em DES (Direito Especial de Saque) e que se deve converter o valor através do conversor de moedas na página do BaCen.\n- Instrutor mostra no PPT o passo a passo.',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1Qkf5qx2MeUSbqSLhbqECgPhwGPJapKrXtES4nAeP4N8/edit?slide=id.g3e52d0017d6_0_2275#slide=id.g3e52d0017d6_0_2275' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Compesações \nLegais',
        dia: 3,
        tema: 'Compesações \nLegais',
        detalhe: '- Instrutor mostra como realizar a conversão de moedas para pagamentos do DES, caso o cliente solicite e tenha direito a receber de acordo com a R-400 da ANAC.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1Qkf5qx2MeUSbqSLhbqECgPhwGPJapKrXtES4nAeP4N8/edit?slide=id.g3e495ab6d42_0_2153#slide=id.g3e495ab6d42_0_2153' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Negociação',
        dia: 3,
        tema: 'Negociação',
        detalhe: '- Instrutor no PPT faz a leitura contextualizando com exemplos de valores, a necessidade de negociara a ofertar de uma compensação em Cash ou uso em Serviços. (Sempre ofertar em serviços primeiramente).\nReiterar que valores apresentados no A360, são os limites máximos e não necessariamente o valor que deve ser integralmente oferecido ao cliente;\nCritérios para renegociação:\nPontos importantes a serem observados como valor da tarifa paga, valor do EMD, origem e destino da viagem, cabine utilizada, categoria do cliente e etc...',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1Qkf5qx2MeUSbqSLhbqECgPhwGPJapKrXtES4nAeP4N8/edit?slide=id.g3e52d0017d6_0_1435#slide=id.g3e52d0017d6_0_1435' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Tratativa de \nCasos',
        dia: 3,
        tema: 'Demonstração da tratativa de um caso de ponta a ponta',
        detalhe: '- Instrutor pede para um agente buscar um caso com status aberto na área real do Zendesk com a tipificação de sua escolha.\n- Instrutor copia a reclamação e cria rapidamente um caso no formulário Zendesk no A360 Training. \nEm seguida, de forma detalhada demonstra como é feita a tratativa de um caso de ponta a ponta.\nDesde a leitura do relato até a resposta final para o cliente, devendo passar pelas etapas de:\nAnálise histórica;\nInvestigação do caso;\nLeitura histórico Sabre;\nLeitura eventos Zendesk.',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🔗 Link', url: 'https://casounico1437403668.zendesk.com/agent/home/tickets' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Revisão',
        dia: 3,
        tema: 'Revisão',
        detalhe: '- Instrutor realiza revisão para aplicação da avaliação.',
        tiempo: '00:20:00',
        herramientas: [{ tipo: '➖ NA', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Avaliação',
        dia: 3,
        tema: 'Jornada pelo Universo do Conhecimento',
        detalhe: '- Instrutor compartilha link Forms da Avaliação.',
        tiempo: '00:40:00',
        herramientas: [{ tipo: '📝 Form', url: 'https://docs.google.com/forms/d/1xR2A61W0M-LBcf7KqzA9yo8HU_sfN2XpQbIXN_aMy8s/preview' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'NPS',
        dia: 3,
        tema: 'Pesquisa de Satisfação',
        detalhe: '- Instrutor envia Forms para que respondam a pesquisa de reação.',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '📝 Form', url: 'https://docs.google.com/forms/d/e/1FAIpQLSeS73NhhY4nCqXC_4omqEctgtHvNPpUVocv6U-yM25821qVJg/viewform' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Encerramento',
        dia: 3,
        tema: 'Vídeo 4 -\n"Encerramento"',
        detalhe: '- Instrutor passa vídeo de encerramento',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🎬 Video', url: 'https://drive.google.com/file/d/1tuCsKIsJfCmqkq2_JXrgdZQzqCka7OzP/view?usp=drive_link' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Desafio OJT
  {
    tipo: 'ojt',
    label: 'Desafio OJT',
    rows: [
      {
        macroTema: 'Desafio OJT',
        dia: 3,
        tema: 'Desafio OJT',
        detalhe: 'Instrutor leva agentes até a operação \npara acompanhamento lado a lado.',
        tiempo: '02:00:00',
        herramientas: [{ tipo: '➖ NA', url: '' }],
        iaPic: [],
        consejo: ''
      }
    ]
  }
];

const dataJSON = JSON.parse(fs.readFileSync(path, 'utf8'));

for (const stationKey of Object.keys(dataJSON)) {
  const station = dataJSON[stationKey];
  if (station && station.exploracion) {
    for (const sector of ['frontLine', 'soporte', 'fieldSupport']) {
      const planets = station.exploracion[sector] || [];
      const idx = planets.findIndex(p => p.label === 'BO');
      if (idx !== -1) {
        const contentKey = sector === 'soporte' ? 'soporteContent' : sector === 'frontLine' ? 'frontLineContent' : 'fsc';
        if (!station[contentKey]) {
          station[contentKey] = [];
        }
        
        while (station[contentKey].length <= idx) {
          station[contentKey].push([]);
        }
        
        station[contentKey][idx] = newData;
      }
    }
  }
}

fs.writeFileSync(path, JSON.stringify(dataJSON, null, 2));
console.log('Successfully updated appConfig.json with BO data (Missões 1 to 5 & OJT).');
