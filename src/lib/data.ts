export const RUTA_DATA_DEFAULT = [
  { poder: "Gesti\u00f3n de Equipo", tema: "Feedback Efectivo", tiempo: "2h", desc: "T\u00e9cnicas de retroalimentaci\u00f3n para el desarrollo del equipo.", consejo: "Mant\u00e9n un enfoque positivo y constructivo.", adjunto: "#" },
  { poder: "Gesti\u00f3n de Equipo", tema: "Resoluci\u00f3n de Conflictos", tiempo: "1.5h", desc: "Manejo de situaciones dif\u00edciles entre colaboradores.", consejo: "Escucha activa es la clave.", adjunto: "#" },
  { poder: "Estrategia de Ventas", tema: "Cierre de Ventas", tiempo: "3h", desc: "Metodolog\u00edas para concretar negociaciones exitosas.", consejo: "Identifica las objeciones temprano.", adjunto: "#" }
];

export const SOPORTE_PLANET_1 = [
  {
    tipo: 'mision1',
    nombre: 'FUNDAMENTOS DE SOPORTE',
    rows: [
      { macroTema: "Soporte Nivel 1", dia: 1, tema: "Arquitectura de Red", detalle: "Conceptos b\u00e1sicos de conectividad.", herramientas: "PPT", tiempo: "2:00" },
      { macroTema: "Soporte Nivel 1", dia: 1, tema: "Gesti\u00f3n de Tickets", detalle: "Uso del software de mesa de ayuda.", herramientas: "Simulador", tiempo: "1:30" }
    ]
  }
];

export const FSC_DATA_DEFAULT = {
  secciones: [
    {
      tipo: 'mision1',
      nombre: 'INTRODUCCI\u00d3N FSC',
      rows: [
        { tema: "Bienvenida", desc: "Introducci\u00f3n al programa Field Support.", dia: 1, tiempo: "30m", ferramentas: { tipo: "Video", url: "#" } }
      ]
    }
  ]
};

export const CONHECENDO_DATA = [
  { macroTema: "Onboarding", dia: 1, tema: "Visi\u00f3n Global", herramientas: "PPT", tiempo: "1:00" }
];

export const IMERSAO_DATA = [
  { macroTema: "IOE", dia: 2, tema: "Escucha Activa", herramientas: "Operaci\u00f3n", tiempo: "3:30" }
];

export const BASE_PLANET_DATA = {
  label: 'BASE',
  secciones: [
    {
      tipo: 'mision1',
      label: 'EXPEDIÇÃO VENDAS',
      rows: [
        {
          macroTema: "Introdução",
          tema: "Video 1 [Vendas] Boas Vindas",
          detalhe: "- Instrutor dá as boas vindas: \"A partir de agora, o nosso treinamento muda de nome: Sejam bem-vindos à Expedição Vendas pelo Universo LATAM!\"\n- Instrutor passa o vídeo de introdução.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?usp=sharing" }],
          iaPic: []
        },
        {
          macroTema: "Apresentação PIC",
          tema: "PIC",
          detalhe: "Instrutor entra no PIC e mostra estrutura PIC, formas de busca.\nAcessa Matriz de Atendimento Vendas e Protocolos:\n1. Protocolo Estrutura de Chamadas (Foco em Boas Vindas, Deixar Pax em Espera, Despedida);\n2. Protocolo Informação de Viagem;\n3. Protocolos Check-in\n4. Protocolo de reconfirmação de dados de PNR\nInstrutor reforça a importância de reconfirmar os dados da reserva con o cliente antes de emitir ou alterar qualquer reserva.",
          tiempo: "0:30:00",
          herramientas: [],
          iaPic: [{ label: "PIC PROTOCOLOS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360054073254-Protocolo-Estrutura-de-Chamadas#h_01G8C6XH6XV4BH2DPH8EMNX9AP" }]
        },
        {
          macroTema: "Apresentação Amélia",
          tema: "Amélia",
          detalhe: "- Instrutor apresenta a ferramenta Amélia (Chat Livre em ambiente controlado LATAM)",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🌐 Plataforma", url: "https://amelia.appslatam.com/#/chat" }],
          iaPic: []
        },
        {
          macroTema: "Introdução Site",
          tema: "Conhecendo o site latamairlines",
          detalhe: "- Instrutor navega no site com o foco em mostrar a visão do passageiro: Onde buscar voos, informações, LATAM PASS.\n- Instrutor pede para os alunos criarem contas no seu nome em latamairlines.com.\n*Eles precisam ter acesso ao email inserido, pois irão utilizar posteriormente nos exercícios. Caso não tenham acesso, sugerir que criem um email gmail.",
          tiempo: "0:30:00",
          herramientas: [{ tipo: "✈️ Latam.com", url: "http://latamairlines.com/" }],
          iaPic: []
        },
        {
          macroTema: "Perfis de Tarifa",
          tema: "Atividade \"Briefing de Missão\" Tarifas LATAM",
          detalhe: "- Instrutor propõe atividade de busca de tarifas e seus atributos:\n1. Alunos realizam breve resumo das tarifas disponíveis na LATAM (3 min)\n2. Instrutor pede para que um aluno explique os atributos do Brand Light ( Voos dentro do Brasil e fora da América do Sul e América Central/Caribe)\n3. Pede para que el próximo aluno complemente com o atributo que o Brand Standard possui à mais.\n4. Pede para que o próximo aluno complemente con o atributo que o Brand Full possui à mais.\n5. Instrutor pede para que alguém dê um exemplo de voo LATAM dentro do Brasil e fora da América do Sul. (Ex. BSB/GYN - GRU/NYC)\n6. Instrutor pede para que um aluno explique los atributos del Brand Light (Voos nacionais de outros paises da América do Sul e entre a América)\n7. Instrutor pede para que alguém dê um exemplo de voo LATAM entre Américas (Ex. GRU/LIM)\n8. Instrutor pede para que um aluno explique os atributos do Brand Premium Economy.\n9.Instrutor pede para que um aluno explique os atributos do Brand Premium Business.",
          tiempo: "0:30:00",
          herramientas: [{ tipo: "🔗 Link", url: "https://www.latamairlines.com/br/pt/experiencia/prepare-sua-viagem/tarifas" }],
          iaPic: []
        },
        {
          macroTema: "Perfis de Tarifa",
          tema: "Introdução Branded Fares",
          detalhe: "- Instrutor mostra aos alunos o capítulo do PIC onde podem ser encontradas mais informações sobre as tarifas.\n- Instrutor explica os tipos de rota (Doméstica, Regional, Long Haul).",
          tiempo: "0:10:00",
          herramientas: [],
          iaPic: [{ label: "PIC TARIFAS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360050549933-Tarifas-" }]
        },
        {
          macroTema: "Taxas",
          tema: "Taxa de Embarque e Taxa de Serviço",
          detalhe: "- Instrutor explica o que são taxas de embarque através do site LATAM.",
          tiempo: "0:10:00",
          herramientas: [{ tipo: "✈️ Latam.com", url: "https://www.latamairlines.com/br/pt/central-ajuda/perguntas/compras/assistencia/taxas-embarque" }],
          iaPic: []
        },
        {
          macroTema: "Taxas",
          tema: "Taxa de Embarque e Taxa de Serviço",
          detalhe: "- Instrutor explica o que é taxa de serviço focando nas considerações gerais BR, código de taxa DU e considerações de cobrança na emissão disponíveis no PIC.",
          tiempo: "0:10:00",
          herramientas: [],
          iaPic: [{ label: "PIC TAXA SERVIÇO", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360053045793-Taxa-de-Servi%C3%A7o#h_01GR8YGS63GM064315Z7N3J5EQ" }]
        },
        {
          macroTema: "Acordos",
          tema: "Atividade \"Briefing de Missão\" Codeshare Acordo Delta",
          detalhe: "- Instrutor mostra o caminho no PIC para encontrar informações sobre Codeshare,",
          tiempo: "0:10:00",
          herramientas: [],
          iaPic: [{ label: "PIC CODESHARE", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360052986693-Generalidades-Codeshare" }]
        },
        {
          macroTema: "Acordos",
          tema: "Atividade \"Briefing de Missão\" Codeshare Acordo Delta",
          detalhe: "- Instrutor mostra o caminho no PIC para encontrar informações sobre Codeshare e Acordo Delta.\n- Divide sala em grupos e pede para que metade dos grupos faça um resumo do tema Codeshare e a outra metade sobre o acordo Delta. (5 min).\n- Instrutor pede para que 1 representante de cada grupo fale sobre os principais pontos dos acordos, pede para os demais grupos complementarem e caso falte alguma informação, acrescenta.",
          tiempo: "0:20:00",
          herramientas: [],
          iaPic: [{ label: "PIC ACORDO DELTA", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/22162184180499-Acordo-Delta-DL" }]
        },
        {
          macroTema: "Acordos",
          tema: "Atividade \"Guerra nas Estrelas\" Acordos e tarifas",
          detalhe: "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido\n- Instrutor envia link EducaPlay e explica tipo e tempo de (acordo com cronograma) para praticarem\nVale ressaltar que é possível jogar mais de uma vez, caso terminem antes do prazo",
          tiempo: "0:10:00",
          herramientas: [{ tipo: "🎮 Educaplay", url: "https://www.educaplay.com/learning-resources/25056994-acordos_e_tarifas.html" }],
          iaPic: []
        },
        {
          macroTema: "Bagagem",
          tema: "Atividade \"Relatório de Exploração\" Introdução à Bagagens",
          detalhe: "- Instrutor entra no PIC- Manual Procedimentos Comerciais Bagagem, explica o \"menu\" lateral esquerdo e explica a dinâmica da atividade.\n1. Instrutor projeta a pergunta através do GENIALLY os alunos terão o tempo de 2 minutos para encontrar as respostas no PIC. Quem encontrar primeiro, se manifesta e marca ponto.\n2. Aluno responde e explica onde encontrou a resposta (instrutor projeta e vai mostrando no computador e corrige ou complementa, se necessário)\nRepetir a mesma dinâmica para todas as perguntas.\n- Ao final, instrutor questiona se alguém ficou con dúvidas.\nOBS. Se o tempo acabar e ninguém encontrar a resposta, instrutor mostra onde está no PIC.",
          tiempo: "0:25:00",
          herramientas: [],
          iaPic: [{ label: "PIC BAGAGEM", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360049744854-Generalidades-Bagagem-" }]
        },
        {
          macroTema: "Serviços e Pax Expeciais",
          tema: "Vídeo UMNR e PETC",
          detalhe: "- Instrutor explica que a LATAM possui alguns serviços especiais e que na alta temporada os mais tranportados são UMNR e PETC.\n- Em seguida passa os vídeos do \"Tá no Ar\"",
          tiempo: "0:10:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_653#slide=id.g364eaff9e51_0_653" }],
          iaPic: []
        },
        {
          macroTema: "Serviços e Pax Expeciais",
          tema: "Protocolos",
          detalhe: "- Instrutor mostra os protocolos a serem utilizados para SSEE.",
          tiempo: "0:05:00",
          herramientas: [],
          iaPic: [{ label: "PIC SSEE", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055886633-Protocolo-Servi%C3%A7os-Especiais" }]
        },
        {
          macroTema: "Serviços e Pax Expeciais",
          tema: "Atividade \"Briefing de Missão\" SSEE",
          detalhe: "- Instrutor mostra o caminho no PIC para encontrar SSSE, em seguida dividir em grupos e dar um tema para cada:\nCada grupo deverá ler sobre o SSEE que lhe corresponda e apresentá-lo aos demais da classe.\n6 temas\n5 min para fazer o resumo e 5 min para cada grupo apresentar.\nInstrutor corrige e complementa sempre que necessário.\nTemas:\nAnimais (AVIH/PETC)\nAssento adicional (EXST/CBBG)\nBaby Bassinet (BSCT)/ Bebe conforto (INCU)\nMenor desacompanhado (UMNR)\nBebe conforto (INCU)\nAlimentação Especial\nCadeira de Rodas",
          tiempo: "0:45:00",
          herramientas: [],
          iaPic: [{ label: "PIC SSEE SECTIONS", url: "https://pic-latam.zendesk.com/hc/pt-br/sections/360011672273-Servi%C3%A7os-Especiais" }]
        },
        {
          macroTema: "Serviços e Pax Expeciais",
          tema: "Atividade \"Briefing de Missão\" Passageiros Especiais",
          detalhe: "Instrutor mostra o caminho no PIC para encontrar Pax Especiais, em seguida dividir em grupos e dar um tema para cada:\nCada grupo deverá ler sobre o tema que lhe corresponda e apresentá-lo aos demais da classe.\n5 temas\n5 min para fazer o resumo e 5 min para cada grupo apresentar.\nInstrutor corrige e complementa sempre que necessário.\nTemas:\nPassageiros Especiais\nGestantes\nNecessidade de assistência especial\nCertificação médica (MEDIF)\nAnimais de Assistência (SVAN-ESAN)",
          tiempo: "0:30:00",
          herramientas: [],
          iaPic: [{ label: "PIC PAX ESPECIAIS", url: "https://pic-latam.zendesk.com/hc/pt-br/sections/360010556514-Passageiros-Especiais" }]
        },
        {
          macroTema: "Serviços e Pax Expeciais",
          tema: "Atividade \"Guerra nas Estrelas\" SSEE e Pax Especiais",
          detalhe: "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido\n- Instrutor envia link EducaPlay e explica tipo e tempo de (acordo com cronograma) para praticarem\nVale ressaltar que é possível jogar mais de uma vez, caso terminem antes do prazo",
          tiempo: "0:10:00",
          herramientas: [{ tipo: "🎮 Educaplay", url: "https://www.educaplay.com/learning-resources/25011193-servicos_e_pax_especial.html" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Video 2 [Vendas] Introdutório Vendas A360",
          detalhe: "- Instrutor passa o vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_245#slide=id.g364eaff9e51_0_245" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Atividade \"Briefing de Missão\" Vendas",
          detalhe: "- Instrutor mostra o caminho do PIC e pede para se dividirem em 5 grupos. Cada grupo lerá as considerações, fazendo um resumo.\nUm representante do grupo apresenta uma consideração. 5 min para pesquisar\n- Instrutor deve corrigir e complementar se necessário.",
          tiempo: "0:40:00",
          herramientas: [],
          iaPic: [{ label: "PIC RESERVA EMISSÃO", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360052861173-Reserva-e-emiss%C3%A3o-de-passagens" }]
        },
        {
          macroTema: "Resumo",
          tema: "Resumo do dia anterior",
          detalhe: "- Instrutor atividade de chuva de idéias para resgatar com os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em um flipchart ou quadro os temas.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1Ueeo7fq-I20yqWiWGPFgt1_Tt-Zqs5auNraYoezpgRw/edit?slide=id.g1e447d4f136_1_44#slide=id.g1e447d4f136_1_44" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Atividade \"Ajuste de Rota con o Navegador\" Login e Reserva",
          detalhe: "- Instrutor passa o login da ferramenta Training (A360), mostra a maneira de se logar e explica que na operação irão logar con seu BP e senha.\n- Instrutor entra na ferramenta Training e propõe que um aluno mostre como realizar a reserva e criar uma ordem simples através da ferramenta training (instrutor será o pax e realizará o pagamento no seu perfil do agente 360, através do link de pagamento).\nO aluno deverá seguir o passo a passo do PIC e o instrutor sendo um dos passageiros (passar seus dados e email).\nAo final, instrutor mostra os campos do Agente 360 (lado esquerdo). Explica brevemente que o histórico de todas as ações fica registrado e que eles aprenderão a leitura na Expedição PV 2.",
          tiempo: "0:25:00",
          herramientas: [{ tipo: "🖥️ Painel", url: "#" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Remarks",
          detalhe: "- Instrutor explica o que são remarks e que devem ser sempre inseridos como respaldo das informações passadas ao cliente e como podem ser visualizados na ferramenta Agente 360.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🖥️ Painel", url: "#" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Reforçar protocolo",
          detalhe: "Ao final da criação do PNR, o instrutor pede para los alunos olharem o protocolo de documentação, entra em latamairlines.com para mostrar onde está a informação e indica como adicionar a informação dada no RMK.",
          tiempo: "0:10:00",
          herramientas: [],
          iaPic: [{ label: "PIC PROTOCOLOS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360054073254-Protocolo-Estrutura-de-Chamadas#h_01G8C6XH6XV4BH2DPH8EMNX9AP" }]
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Video 3 [Vendas] Link de pagto",
          detalhe: "- Instrutor passa vídeo",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364c015fc33_0_389#slide=id.g364c015fc33_0_389" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Link de Pagamento",
          detalhe: "- Pede para o agente enviar o link de pagamento para o seu email, projeta e mostra como pagar con os dados do cartão ficticio (reforça que é a visão do pax).",
          tiempo: "0:05:00",
          herramientas: [],
          iaPic: [{ label: "PIC LINK PAGAMENTO", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4411825576083-Pagamento-Link" }]
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "CUV",
          detalhe: "- Instrutor explica o que é o CUV e como reenviá-lo através do Agente 360,",
          tiempo: "0:10:00",
          herramientas: [],
          iaPic: [{ label: "PIC CUV", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4407703691155-Comprovante-%C3%9Anico-de-Venda-CUV" }]
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "\"Controle de Voo e Lançamento\" Reservas",
          detalhe: "- O instrutor pede para que os alunos realizem reservas de acordo com o proposto no GENIALLY.\n- instrutor indica para que todos os \"agentes\" fiquem con os protocolos abertos e o utilizem nas simulações.\n- Instrutor mostra o campo \"minhas anotações\" da ferramenta Agente.\nTodas as ordens devem ser anotadas em um arquivo que o aluno tenha acesso posteriormente.",
          tiempo: "1:00:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_185#slide=id.g3a4ae7f28e5_0_185" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Ordens de Clientes",
          detalhe: "- Instrutor explica como realizar a busca e exibição de uma ordem e diferença de ordem logada de não logada.\n- Instrutor explica como identificar a origem da ordem.",
          tiempo: "0:15:00",
          herramientas: [],
          iaPic: [{ label: "PIC ORDENS CLIENTE", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4407014380307-Ordens-de-Clientes" }]
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Check-in Automático",
          detalhe: "- Intrutor explica sobre o Check-in automático (indica que o check-in é automático para todos os passageiros com ordem (visualização do cliente)\n- Mostrar como chega a confirmação da compra e a notificação no e-mail do cliente, através das telas do PIC. ",
          tiempo: "0:05:00",
          herramientas: [],
          iaPic: [{ label: "PIC CHECK-IN", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360053236793-Check-In" }]
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Video 4 [Vendas] Simulação Split",
          detalhe: "- Instrutor passa o vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364c015fc33_0_413#slide=id.g364c015fc33_0_413" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Atividade \"Ajuste de Rota con o Navegador\" Split Reservas",
          detalhe: "- Instrutor explica o que é o SPLIT, pede para agentes entrarem no PIC (split) e outro aluno vai até a mesa e demonstra em uma ordem previamente criada pelo instrutor, como dividir a ordem no Agente 360 TRN seguindo o passo a passo.",
          tiempo: "0:15:00",
          herramientas: [],
          iaPic: [{ label: "PIC SPLIT", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055936373-Split-de-Reserva-Individuais-e-Grupo" }]
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Atividade \"Controle de Voo e Lançamento\" Split",
          detalhe: "- Com as ordens criadas anteriormente, os agentes voltam a ser pax e agente e simular um contato solicitando a divisão da ordem.",
          tiempo: "0:10:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_216#slide=id.g3a4ae7f28e5_0_216" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Isenção de Taxa de Serviço",
          detalhe: "- Instrutor explica os casos em que a isenção da taxa DU pode ser realizada, mostrando o passo a passo no PIC.",
          tiempo: "0:10:00",
          herramientas: [],
          iaPic: [{ label: "PIC ISENÇÃO DU", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/12943186481299-Processo-para-isen%C3%A7%C3%A3o-de-taxa-de-servi%C3%A7o-em-latamairlines-com" }]
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Atividade \"Controle de Voo e Lançamento\" Isenção Taxa de Serviço",
          detalhe: "- O instrutor pede para que os alunos realizem reservas de acordo con o proposto no Genially\ne procedam con a isenção da taxa DU.",
          tiempo: "0:10:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_232#slide=id.g3a4ae7f28e5_0_232" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Video 5 [Vendas] Introdutório LATAM Wallet",
          detalhe: "- Instrutor passa o vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_379#slide=id.g364eaff9e51_0_379" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Atividade \"Relatório de Exploração\" LATAM Wallet",
          detalhe: "- Instrutor entra no PIC e mostra onde encontrar informações sobre a LATAM Wallet.\n- Instrutor dá 5 min para que os alunos façam um resumo do tema.\nInstrutor projeta a pergunta através do GENIALLY e escolhe um agente para responder. Caso ele erre, pede para outra pessoa responder. Se ele acertar, escolhe o aluno que responderá a próxima pergunta.\n- Ao final, instrutor questiona se alguém ficou con dúvidas.\nOBS. Se o tempo de 1 minuto acabar e ninguém encontrar a resposta, instrutor mostra onde está no PIC.",
          tiempo: "0:30:00",
          herramientas: [],
          iaPic: [{ label: "PIC WALLET", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4414246715027-LATAM-Wallet" }]
        },
        {
          macroTema: "Solicitação de Serviços Agente 360",
          tema: "Video 6 [Vendas] Introdutório SSEE",
          detalhe: "- Instrutor mostra video",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364c015fc33_0_482#slide=id.g364c015fc33_0_482" }],
          iaPic: []
        },
        {
          macroTema: "Solicitação de Serviços Agente 360",
          tema: "Atividade \"Controle de Voo e Lançamento\" SSEE A360",
          detalhe: "- Instrutor pede para que os alunos simulem chamadas de acordo aos cases propostos no PPT.",
          tiempo: "0:15:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_264#slide=id.g3a4ae7f28e5_0_264" }],
          iaPic: []
        },
        {
          macroTema: "Ancillaries",
          tema: "Atividade \"Briefing de Missão\" Ancillaries",
          detalhe: "- Instrutor mostra o caminho no PIC para encontrar o assunto Ancillaries e propõe para os grupos que pesquisem tipos de EMD. 5 min para fazer resumo e 3 min para apresentar para a sala. ",
          tiempo: "0:15:00",
          herramientas: [],
          iaPic: [{ label: "PIC EMD", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360052161874-EMD" }]
        },
        {
          macroTema: "Ancillaries",
          tema: "Atividade \"Briefing de Missão\" Ancillaries",
          detalhe: "- Instrutor complementa con a explicação de quais e como realizar a venda de um ancillary de: (UMNR), (PETC) e (AVIH) por meio do A360 ",
          tiempo: "0:10:00",
          herramientas: [],
          iaPic: [{ label: "PIC SSEE VENDAS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/47091784533395-05-12-25-SERVI%C3%87OS-ESPECIAIS-Ativa-se-a-venda-dos-servi%C3%A7os-de-menor-desacompanhado-UMNR-animal-de-estima%C3%A7%C3%A3o-na-cabine-PETC-e-no-por%C3%A3o-AVIH-por-meio-do-agente-360" }]
        },
        {
          macroTema: "Ancillaries",
          tema: "Venda de Malas",
          detalhe: "- Instrutor explica como pax solicita um bilhete con a venda de bag.",
          tiempo: "0:15:00",
          herramientas: [],
          iaPic: [{ label: "PIC VENDA MALAS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4414544635155-Venda-de-Malas" }]
        },
        {
          macroTema: "Ancillaries",
          tema: "Atividade \"Ajuste de Rota con o Navegador\" Venda Assistida de Malas",
          detalhe: "- Instrutor pede para um aluno ir até a mesa e mostrar como pax solicita um bilhete con a venda de bag.",
          tiempo: "0:15:00",
          herramientas: [],
          iaPic: [{ label: "PIC VENDA ASSISTIDA", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/37493881988371-Venda-Assistida-de-bagagem-pelo-Agente-360" }]
        },
        {
          macroTema: "Ancillaries",
          tema: "Venda de Assentos",
          detalhe: "- Instrutor explica como realizar a venda de assentos.",
          tiempo: "0:15:00",
          herramientas: [],
          iaPic: [{ label: "PIC VENDA ASSENTOS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360049744894-Venda-de-Sele%C3%A7%C3%A3o-de-Assentos" }]
        },
        {
          macroTema: "Ancillaries",
          tema: "Atividade \"Relatório de Exploração\" LATAM Flex",
          detalhe: "- Instrutor entra no PIC Manual Procedimentos Comerciais - LATAM Flex e explica a dinâmica.\n1. Instrutor divide a sala em 2 grupos. Essa será uma \"batalha\" entre grupos.\n- Instrutor projeta a pergunta no GENIALLY e coloca o cronômetro de 1 minuto. O grupo que achar a resposta primeiro se manifesta e tem el derecho de resposta. Se a resposta estiver certa, marca ponto. Se estiver errada, o outro grupo tem derecho a responder e marcar o ponto.\n2. Aluno representante do grupo que acertou responde e explica onde encontrou a resposta (instrutor projeta e vai mostrando no computador)\nRepetir a mesma dinâmica para todas as perguntas.\n- Ao final, instrutor questiona se alguém ficou con dúvidas.\nOBS. Se o tempo de 1 minuto acabar e ninguém encontrar a resposta, instrutor mostra onde está no PIC.",
          tiempo: "0:20:00",
          herramientas: [],
          iaPic: [{ label: "PIC LATAM FLEX", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/17098820775187-LATAM-FLEX" }]
        },
        {
          macroTema: "Resumo",
          tema: "Resumo do dia anterior",
          detalhe: "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em um flipchart ou quadro os temas.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1Ueeo7fq-I20yqWiWGPFgt1_Tt-Zqs5auNraYoezpgRw/edit?slide=id.g1e447d4f136_1_44#slide=id.g1e447d4f136_1_44" }],
          iaPic: []
        },
        {
          macroTema: "Ancillaries",
          tema: "Atividade \"Controle de Voo e Lançamento\" Ancillaries",
          detalhe: "- O instrutor pede para que os alunos simulem chamadas de acordo aos cases propostos no PPT.",
          tiempo: "0:15:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_343#slide=id.g3a4ae7f28e5_0_343" }],
          iaPic: []
        },
        {
          macroTema: "Ancillaries",
          tema: "Atividade \"Jornada pelo Universo do Conhecimento\" Vendas con Ancillaries",
          detalhe: "- Instrutor pede para que os alunos abram o forms e realizem a atividade proposta.\n- Instrutor acompanha a folha de respostas e corrige as ordens: Atribuindo nota para os acertos:\n1. Rota correta (20 p)\n2. PAX: 1 adulto e 1 criança (20 p)\n3. Tarifa Standard (20 p)\n4. Vendeu assento? (10 p)\n5. Vendeu bagagem? (10 p)\nApós corrigir as ordens, instrutor deve preencher Diário de Bordo",
          tiempo: "0:50:00",
          herramientas: [
            { tipo: "📋 Form Kon BR", url: "https://docs.google.com/forms/d/e/1FAIpQLSeuZcXWwvu4nfkErXMyiJ7h2OJKAx5xYt1et2apRPLlFc6GSw/viewform?usp=publish-editor" },
            { tipo: "📋 Form AeC", url: "https://docs.google.com/forms/d/e/1FAIpQLSeR3mZyjaxWNWd0LpFm3dI159McZoAAC641A3bxiOpDIqDROw/viewform" }
          ],
          iaPic: []
        },
        {
          macroTema: "Painel de Pagamento Agente 360",
          tema: "Atividade \"Briefing de Missão\" Painel de Pagamentos",
          detalhe: "- Instrutor pede para que os alunos acessem o material \"Console XP\" no PIC e dá 5 minutos para lerem o conteúdo. Depois pede para que um dos alunos explique para os demais da sala do que se trata a ferramenta e qual sua principal função. ",
          tiempo: "0:20:00",
          herramientas: [],
          iaPic: [{ label: "PIC CONSOLE XP", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/5443079309971-Console-XPSP" }]
        },
        {
          macroTema: "Lista de Vendas",
          tema: "Video 7 [Vendas] Lista de vendas",
          detalhe: "- Instrutor mostra video",
          tiempo: "0:02:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364c015fc33_0_518#slide=id.g364c015fc33_0_518" }],
          iaPic: []
        },
        {
          macroTema: "Lista de Vendas",
          tema: "Lista de Vendas",
          detalhe: "- Instrutor mostra onde encontrar informação sobre lista de vendas no PIC.",
          tiempo: "0:03:00",
          herramientas: [],
          iaPic: [{ label: "PIC LISTA VENDAS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/40176305951123-NOVA-FUNCIONALIDADE-LISTA-DE-VENDAS-AGENTES" }]
        },
        {
          macroTema: "Perfil Cliente",
          tema: "Atividade \"Guerra nas Estrelas\" Notificações aos Passageiros",
          detalhe: "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido\n- Instrutor envia link EducaPlay e explica tipo e tempo de (acordo com cronograma) para praticarem\nVale ressaltar que é possível jogar mais de uma vez, caso terminem antes do prazo",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎮 Educaplay", url: "https://www.educaplay.com/learning-resources/25386681-perfil_do_cliente.html" }],
          iaPic: []
        },
        {
          macroTema: "Perfil Cliente",
          tema: "Semáforo de Afetação",
          detalhe: "- Instrutor explica o que é, mostrando as telas do PIC.",
          tiempo: "0:05:00",
          herramientas: [],
          iaPic: [{ label: "PIC SEMÁFORO", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/43013540923667-Sem%C3%A1foro-de-afeta%C3%A7%C3%A3o-Criticality-Score" }]
        },
        {
          macroTema: "Perfil Cliente",
          tema: "Erros de pagamento",
          detalhe: "- Instrutor explica a tabela de erros de pagamento e dá 2 exemplos de solução.",
          tiempo: "0:05:00",
herramientas: [],
          iaPic: [{ label: "PIC ERROS PAGAMENTO", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4403974273299-Erros-de-pagamento" }]
        },
        {
          macroTema: "INCIDENTES",
          tema: "Relatar incidentes A360",
          detalhe: "- Instrutor mostra formulário incidências disponível no PIC e orienta que os agentes devem chamar o supervisor para auxiliar no preenchimento.",
          tiempo: "0:10:00",
          herramientas: [],
          iaPic: [{ label: "PIC INCIDENTES", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4405966901523-Detalle-Formularios-Incidencias" }]
        },
        {
          macroTema: "Avaliação Vendas A360",
          tema: "Jornada pelo Universo do Conhecimento \"Vendas\"",
          detalhe: "- Instrutor aplica a avaliação.",
          tiempo: "0:20:00",
          herramientas: [
            { tipo: "📋 Forms KON", url: "https://docs.google.com/forms/d/e/1FAIpQLScC6l55Zt0v0N-k5Y8_hW9q9f9g8h7v6c5b4a3_x_y_z_1/viewform" },
            { tipo: "📋 Forms AeC", url: "https://docs.google.com/forms/d/e/1FAIpQLSfhje16pgcHfcNZ4glElSnnCLqD879HVLg9xlIWlGeSF6DlSA/viewform" }
          ],
          iaPic: []
        }
      ]
    },
    {
      tipo: "mision1",
      label: "EXPEDIÇÃO CASOS & ZENDESK",
      rows: [
        {
          macroTema: "Casos",
          tema: "Criação de Casos Agente 360",
          detalhe: "- Instrutor mostra através do Agente 360 Training o formulário de criação de casos, detalhando cada campo a ser preenchido, com ênfase naqueles que contém asteriscos.\n- Instrutor mostra os processos que se faz necessário o cliente enviar documentos como Entrega ou Envio de CUV, solicitações de certificados (Declaração de embarque).\n- Instrutor explica que nestes processos os casos não devem ser gerados pelo CDA e sim pelo Agente 360.",
          tiempo: "0:30:00",
          herramientas: [],
          iaPic: [
            { label: "ABRIR CASO ZENDESK", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/31926091283859-Abrir-caso-Zendesk" },
            { label: "ELIMINAÇÃO CRIAÇÃO CASOS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/40223076355091-10-04-25-Elimina%C3%A7%C3%A3o-de-cria%C3%A7%C3%A3o-de-casos-atrav%C3%A9s-do-Centro-de-Ajuda-do-site" }
          ]
        },
        {
          macroTema: "Casos",
          tema: "Atividade \"Controle de Voo e Lançamento\" Criação de Casos Agente 360",
          detalhe: "- Instrutor pede para que os alunos simulem chamadas de acordo aos cases propostos no PPT.",
          tiempo: "0:15:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_653#slide=id.g364eaff9e51_0_653" }],
          iaPic: []
        },
        {
          macroTema: "Zendesk",
          tema: "Introdução",
          detalhe: "- Instrutor apresenta a ferramenta e suas funcionalidades",
          tiempo: "0:15:00",
          herramientas: [],
          iaPic: [{ label: "PIC ZENDESK", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk" }]
        },
        {
          macroTema: "Zendesk",
          tema: "1. Conceitos básicos",
          detalhe: "- Instrutor mostra a partir do PIC os conceitos básicos do aplicativo.",
          tiempo: "0:20:00",
          herramientas: [],
          iaPic: [{ label: "PIC ZENDESK", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk" }]
        },
        {
          macroTema: "Zendesk",
          tema: "2. Inicio no Sistema",
          detalhe: "- Instrutor mostra como entrar na ferramenta.",
          tiempo: "0:20:00",
          herramientas: [],
          iaPic: [{ label: "PIC ZENDESK", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk" }]
        },
        {
          macroTema: "Zendesk",
          tema: "3. Funcionalidades",
          detalhe: "- Instrutor mostra suas funcionalidades a partir da ferramenta: Visualizações, Busca de solicitante, Inclusão de um solicitante, Modificação de um solicitante, Classificar um ticket, Reclassificar um ticket, Fundir tickets, Criação de ticket filho, Reabrir casos com macros.",
          tiempo: "0:20:00",
          herramientas: [],
          iaPic: [{ label: "PIC ZENDESK", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk" }]
        },
        {
          macroTema: "Zendesk",
          tema: "4. Navegação Zendesk",
          detalhe: "- Instrutor mostra suas funcionalidades a partir da herramienta. - Instrutor explica como utilizar a varinha inteligente.",
          tiempo: "0:15:00",
          herramientas: [],
          iaPic: [{ label: "PIC ZENDESK", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk" }]
        },
        {
          macroTema: "Zendesk",
          tema: "Atividade \"Ajuste de Rota com o Navegador\" Zendesk",
          detalhe: "- Instrutor mostra casos reais da ferramenta para identificar os requerimentos do cliente.\n- Instrutor mostra as partes do caso e possível resolução.",
          tiempo: "0:35:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_407#slide=id.g3a4ae7f28e5_0_407" }],
          iaPic: []
        },
        {
          macroTema: "Avaliação Zendesk",
          tema: "Jornada pelo Universo do Conhecimento \"Casos\"",
          detalhe: "- Instrutor aplica a avaliação.",
          tiempo: "0:20:00",
          herramientas: [
            { tipo: "📋 Forms KON", url: "https://forms.gle/daMLEV4Nu3ShRwUV8" },
            { tipo: "📋 Forms AeC", url: "https://docs.google.com/forms/d/e/1FAIpQLSfhje16pgcHfcNZ4glElSnnCLqD879HVLg9xlIWlGeSF6DlSA/viewform" }
          ],
          iaPic: []
        }
      ]
    },
    {
      tipo: "mision1",
      label: "EXPEDIÇÃO LATAM PASS",
      rows: [
        {
          macroTema: "LATAM PASS",
          tema: "Resumo do dia anterior",
          detalhe: "- Instrutor atividade de chuva de idéias para resgatar com os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em um flipchart ou quadro os temas.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1Ueeo7fq-I20yqWiWGPFgt1_Tt-Zqs5auNraYoezpgRw/edit?slide=id.g1e447d4f136_1_44#slide=id.g1e447d4f136_1_44" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Introdução LATAM PASS",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 PPT/Video", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Categorias e Benefícios",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 Youtube", url: "https://www.youtube.com/shorts/vX9srzIRZNw?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Produto, Categorias e Benefícios LATAM Pass",
          detalhe: "- Instrutor explica considerações produto, categoria e benefícios LATAM PASS milhas de acordo com a publicação no PIC.\n- Instrutor fala sobre como é atribuido o número de sócio no BR.\n- Instrutor apresenta as categorias Latam Pass, regras para se qualificar e benefícios.",
          tiempo: "0:40:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3ab95949dfe_0_32#slide=id.g3ab95949dfe_0_32" }],
          iaPic: [{ label: "PIC LATAM PASS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass" }]
        },
        {
          macroTema: "LATAM PASS",
          tema: "Atividade \"Guerra nas Estrelas\" (Produto Categorias e Beneficios)",
          detalhe: "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido.\n- Instrutor envia link EducaPlay e explica para praticarem.\nVale ressaltar que é possível jogar mais de uma vez.",
          tiempo: "0:10:00",
          herramientas: [
            { tipo: "🎮 Educaplay 1", url: "https://www.educaplay.com/learning-resources/26736432-latam_pass_categorias_em_foco.html" },
            { tipo: "🎮 Educaplay 2", url: "https://www.educaplay.com/learning-resources/26744315-latam_pass_categorias_em_foco.html" }
          ],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Milhas e Pontos Qualificáveis",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 Youtube", url: "https://www.youtube.com/shorts/ZSgsCW5dQmo?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Bonus LATAM PASS",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 Youtube", url: "https://www.youtube.com/shorts/NbFTLrPXnVw?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Incidentes Bônus LATAM PASS",
          detalhe: "- Instrutor mostra tabela e explica que qualquer tipo de incidente deve ser derivado aos especialistas de DT FFP.",
          tiempo: "0:10:00",
          herramientas: [],
          iaPic: [{ label: "PIC BÔNUS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/37307768474899-B%C3%B4nus-LATAM-Pass" }]
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Acúmulo Milhas",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 Youtube", url: "https://www.youtube.com/shorts/71J3rlILGY4?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Atividade \"Controle de Voo e Lançamento\" Acúmulo de Milhas",
          detalhe: "- O instrutor pede para que os alunos assistam aos vídeos com dúvidas de passageiros e elege um aluno diferente para entregar cada solução.",
          tiempo: "0:30:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_469#slide=id.g3a4ae7f28e5_0_469" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video latam.com (acúmulo parceiros)",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 Youtube", url: "https://www.youtube.com/shorts/wYmA_Q1ZKyo?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Clube LATAM PASS",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 Youtube", url: "https://www.youtube.com/shorts/G5Np4zshbpQ?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Resgate de tickets prêmios",
          detalhe: "- Instrutor explica a definição de resgate de pontos, considerações para resgate, outras considerações, processo de resgate através do Agente 360 e taxa de resgate e emissão.\n- Instrutor faz uma simulação no latamairlines.com.",
          tiempo: "0:45:00",
          herramientas: [],
          iaPic: [{ label: "PIC RESGATE", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4408047222803-Resgate-de-tickets-pr%C3%AAmios-com-novo-modelo-de-resgate-FFP-milhas-pontos" }]
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video LATAM PASS Resgate",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 Youtube", url: "https://www.youtube.com/shorts/jEMsqNPVfOk?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Desvendando LATAM PASS",
          detalhe: "- Instrutor passa o vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3b0afb1e69c_1_0#slide=id.g3b0afb1e69c_1_0" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Quiz Genially + Revisão",
          detalhe: "- Instrutor passa atividades.",
          tiempo: "0:20:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3af9331569d_0_79#slide=id.g3af9331569d_0_79" }],
          iaPic: []
        },
        {
          macroTema: "Avaliação LATAM PASS",
          tema: "Jornada pelo Universo do Conhecimento \"LATAM PASS\"",
          detalhe: "- Instrutor aplica a avaliação.",
          tiempo: "0:30:00",
          herramientas: [
            { tipo: "📋 Forms KON", url: "https://forms.gle/ZzcNLdujfe2fQa4K7" },
            { tipo: "📋 Forms AeC", url: "https://docs.google.com/forms/d/e/1FAIpQLScwIsNq7Dqfmhp4pn1LPRSVUkRrWQSwwa7A8DjjpJmp8YdFWA/viewform" }
          ],
          iaPic: []
        }
      ]
    },
    {
      tipo: "mision1",
      label: "EXPEDIÇÃO NÃO VOZ & ENCERRAMENTO",
      rows: [
        {
          macroTema: "NÃO VOZ",
          tema: "Introdução NÃO VOZ",
          detalhe: "- Instrutor explica os tipos de interação NÃO VOZ (CHAT e WS) e mostra no PPT como o passageiro pode entrar em contato pelo WS através do Latam.com",
          tiempo: "0:30:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_11#slide=id.g364eaff9e51_0_11" }],
          iaPic: []
        },
        {
          macroTema: "NÃO VOZ",
          tema: "Video 8 [Vendas] Ferramenta (chat e WS)",
          detalhe: "- Instrutor apresenta Video de introdução.",
          tiempo: "1:00:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3ace22d935a_1_39#slide=id.g3ace22d935a_1_39" }],
          iaPic: []
        },
        {
          macroTema: "NÃO VOZ",
          tema: "Genesys Whatsapp/Chat",
          detalhe: "- Instrutor apresenta através do PPT: Interações WhatsApp, Botões dinâmicos, Processo de Finalização, Interações simultáneas, Transferencia Exitosa.",
          tiempo: "0:30:00",
          herramientas: [],
          iaPic: [{ label: "PIC GENESYS WS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/40120600616851-Acesso-ao-Whatsapp-Genesys" }]
        },
        {
          macroTema: "NÃO VOZ",
          tema: "Whatsapp x Chat FCI/CDA",
          detalhe: "- Instrutor destaca canais NOVOZ. Chat CDA e Chat FCI. Explica fluxos de atendimento e diferenças entre procedimentos.",
          tiempo: "0:30:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g396acdc1034_0_0#slide=id.g396acdc1034_0_0" }],
          iaPic: []
        },
        {
          macroTema: "NÃO VOZ",
          tema: "Chat FCI x Chat CDA",
          detalhe: "- O instrutor reforça as diferenças entre os tipos de chat e solicita explicação dos participantes.",
          tiempo: "0:30:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_693#slide=id.g364eaff9e51_0_693" }],
          iaPic: []
        },
        {
          macroTema: "NÃO VOZ",
          tema: "Anexos",
          detalhe: "- Instrutor mostra conteúdos anexos através do PIC: Fluxos derivação Genesys (INVOL, Booking, Alterações Voluntárias, Bagagens, Ancillaries, SDFC, Check-in, Devoluções, GBM, NE).",
          tiempo: "0:45:00",
          herramientas: [],
          iaPic: [{ label: "PIC ANEXOS NOVOZ", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/42671984510995-Anexos-N%C3%A3o-Voz-por-processo" }]
        },
        {
          macroTema: "NÃO VOZ",
          tema: "Envio Pendente",
          detalhe: "- O instrutor informa que, quando há inatividade superior a 5 minutos, a conversa deve ser encaminhado para o fluxo 'Pendente Passageiro'.",
          tiempo: "1:00:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3d43ae23fc7_0_0#slide=id.g3d43ae23fc7_0_0" }],
          iaPic: []
        },
        {
          macroTema: "NÃO VOZ",
          tema: "Solicitação de documentação online",
          detalhe: "- Instrutor introduz processos canal novoz. Revisa processos disponíveis para solicitação e recepção de documentos online.",
          tiempo: "0:30:00",
          herramientas: [],
          iaPic: [{ label: "PIC DOCS WS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/34169487426323-Solicita%C3%A7%C3%A3o-de-documenta%C3%A7%C3%A3o-via-WhatsApp" }]
        },
        {
          macroTema: "NÃO VOZ",
          tema: "Forma de Pagamento OT WS",
          detalhe: "- Instrutor explica a FOP OT e mostra passo a paso PIC.",
          tiempo: "0:25:00",
          herramientas: [],
          iaPic: [{ label: "PIC FOP OT", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/30270075990803-Forma-do-pagamento-OT-Pago-para-Canal-N%C3%A3o-Voz" }]
        },
        {
          macroTema: "Resumo",
          tema: "Resumo do dia anterior",
          detalhe: "- Instrutor atividade de chuva de idéias para resgatar com os alunos os temas relevantes vistos no dia anterior.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1Ueeo7fq-I20yqWiWGPFgt1_Tt-Zqs5auNraYoezpgRw/edit?slide=id.g1e447d4f136_1_44#slide=id.g1e447d4f136_1_44" }],
          iaPic: []
        },
        {
          macroTema: "Prática",
          tema: "Simulador Genesys Whatsapp/Chat",
          detalhe: "- Instrutor explica como acessar o simulador e passa módulo NOVOZ.",
          tiempo: "1:15:00",
          herramientas: [{ tipo: "🎮 Simulador", url: "https://view.genially.com/699ceeb2c29dd6b1df292e3e" }],
          iaPic: []
        },
        {
          macroTema: "Prática",
          tema: "Casos",
          detalhe: "- Instrutor mostra PPT com exemplos de casos reais e analisa junto com os alunos.",
          tiempo: "1:00:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3af9331569d_0_2#slide=id.g3af9331569d_0_2" }],
          iaPic: []
        },
        {
          macroTema: "Avaliação",
          tema: "Jornada pelo Universo do Conhecimento \"NO VOZ\"",
          detalhe: "- Instrutor pede para os alunos abrirem o link e realizarem a avaliação.",
          tiempo: "0:45:00",
          herramientas: [
            { tipo: "📋 Forms KON", url: "https://forms.gle/5f9oLmWumH1GuAHq7" },
            { tipo: "📋 Forms AeC", url: "https://docs.google.com/forms/d/e/1FAIpQLScH1YpeZWeykUWukHU_MxPfUMmkr6fUVmLKtzW92Kyu1-dQZQ/viewform" }
          ],
          iaPic: []
        },
        {
          macroTema: "Avaliação",
          tema: "Correção Avaliação",
          detalhe: "- Instrutor corrige a avaliação",
          tiempo: "0:05:00",
          herramientas: [],
          iaPic: []
        },
        {
          macroTema: "Encerramento Expedição",
          tema: "Video 9 [Vendas] Encerramento Expedição Vendas",
          detalhe: "- Instrutor passa vídeo de encerramento",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a31204c109_1_199#slide=id.g3a31204c109_1_199" }],
          iaPic: []
        }
      ]
    },
    {
      tipo: "landing",
      label: "FASE DE LANDING: CONFIGURAÇÃO & ACESSOS",
      rows: [
        {
          macroTema: "LANDING",
          tema: "Configuração Perfil Zendesk",
          detalhe: "- Instrutor deve orientar agentes na configuração do perfil Zendesk, inserindo o logo da LATAM na foto de perfil e a assinatura deve ser o nome conforme registro MOP.",
          tiempo: "0:45:00",
          herramientas: [{ tipo: "🎬 PPT", url: "https://docs.google.com/presentation/d/1_9NGVYmcU7YEoy7x_av2hRctf2FinggX7T_Fi-CHm8o/edit?usp=drive_link" }],
          iaPic: []
        },
        {
          macroTema: "LANDING",
          tema: "Genesys Cloud",
          detalhe: "- Instrutor apresenta no PIC as funcionalidades da ferramenta Genesys Cloud.\n- Instrutor reforça a importância de derivação à EPA em todas chamadas.",
          tiempo: "1:00:00",
          herramientas: [],
          iaPic: [{ label: "PIC GENESYS CLOUD", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/34047723735571-Detalhes-Genesys" }]
        },
        {
          macroTema: "LANDING",
          tema: "Simulador Genesys",
          detalhe: "- Instrutor orienta os alunos a acessarem o simulador.\nNa tela inicial o aluno deve inserir o BP.",
          tiempo: "0:40:00",
          herramientas: [{ tipo: "🎮 Simulador", url: "https://view.genially.com/699ceeb2c29dd6b1df292e3e" }],
          iaPic: []
        },
        {
          macroTema: "LANDING",
          tema: "Teste de Acessos",
          detalhe: "Testar acessos dos sistemas e Genesys Cloud",
          tiempo: "3:30:00",
          herramientas: [{ tipo: "💻 Sistemas Produção", url: "" }],
          iaPic: []
        },
        {
          macroTema: "LANDING",
          tema: "Treinamentos obrigatórios",
          detalhe: "Treinamento obrigatório PCI LATAM",
          tiempo: "1:00:00",
          herramientas: [{ tipo: "📋 SAP/Forms", url: "https://forms.gle/rKS7Kt63hopmVMJE7" }],
          iaPic: []
        },
        {
          macroTema: "LANDING",
          tema: "Treinamentos obrigatórios",
          detalhe: "Código de Conduta",
          tiempo: "1:10:00",
          herramientas: [{ tipo: "📋 SAP", url: "" }],
          iaPic: []
        }
      ]
    }
  ],
  materiais: [],
  evalKon: [
    { label: 'AVALIAÇÃO KON BR', url: 'https://forms.gle/rKS7Kt63hopmVMJE7' }
  ],
  evalAec: [
    { label: 'AVALIAÇÃO AeC', url: 'https://docs.google.com/forms/d/e/1FAIpQLSexgezH2lsexp3YzT2LdxJnPLqmaDA7849G2FVIrgQK78C1EA/viewform' }
  ],
  evalMsg: 'AJUSTE DE ROTA PARA REPROVADOS\n\nOs alunos que não atingirem a média final de 80% devem realizar o "Ajuste de Rota" - Avaliação de recuperação e somente após a aprovação realizar os testes de acessos.\n\nDuração: 30 min'
};

export const ONBOARDING_DATA_DEFAULT = {
  secciones: [
    {
      tipo: 'mision1',
      label: 'ONBOARDING LATAM',
      rows: [
        {
          macroTema: "Onboarding LATAM",
          dia: 1,
          tema: "1. Boas Vindas",
          detalhe: "- Instrutor se apresenta, fala dos acordos, mostra a agenda, dá as Boas Vindas.\n- Explica formato e regras do curso.\n- Passa link do ebook e explica que poderão usar como apoio durante o treinamento.",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1UuBxBNcUwg3ntSnRbgaz-sv7eLLEST5qxosXunsX2Qk/edit?slide=id.p4#slide=id.p4" }],
          tiempo: "0:10:00"
        },
        {
          macroTema: "Onboarding LATAM",
          dia: 1,
          tema: "2. Conheça a LATAM",
          detalhe: "- Instrutor apresenta vídeo e ao finalizar realiza atividade para resgatar com os alunos os principais tópicos:\n1. Propósito LATAM e Contact Center\n2. Cultura: Quais são as 9 Guias?",
          herramientas: [{ tipo: "🎬 Video", url: "https://drive.google.com/file/d/17dlokxRynxeBujgDMC3qXzTc_lMmUtHH/view?usp=drive_link" }],
          tiempo: "0:20:00"
        },
        {
          macroTema: "Onboarding LATAM",
          dia: 1,
          tema: "3. Jornada do cliente",
          detalhe: "- Instrutor apresenta vídeo da Jornada do Cliente e comenta ao final.",
          herramientas: [{ tipo: "🎬 Video", url: "https://drive.google.com/file/d/10tlpK6jMF-d8Uil-Yp8pIVgbiA3iAmhf/view?usp=drive_link" }],
          tiempo: "0:10:00"
        },
        {
          macroTema: "Onboarding LATAM",
          dia: 1,
          tema: "4. Modelo de Atendimento",
          detalhe: "- Instrutor apresenta PPT explicando como estamos estruturados no Contact Center.",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1UuBxBNcUwg3ntSnRbgaz-sv7eLLEST5qxosXunsX2Qk/edit?slide=id.g386b9c102cc_0_0#slide=id.g386b9c102cc_0_0" }],
          tiempo: "0:05:00"
        },
        {
          macroTema: "Onboarding LATAM",
          dia: 1,
          tema: "5. Programa Guardiões",
          detalhe: "- Instrutor passa vídeo do Programa Guardiões e ao final faz actividad de Resgate preguntando aos agentes: \n- ¿Qué es el programa Guardiões?\n- ¿Cuál es su papel como Guardião?\n- ¿Cuáles son los pilares de nuestra atención?",
          herramientas: [{ tipo: "🎬 Video", url: "https://drive.google.com/file/d/1fQjKyMaaUgA9PVbWOO7eZhIqGtqY7car/view?usp=drive_link" }],
          tiempo: "0:10:00"
        },
        {
          macroTema: "Onboarding LATAM",
          dia: 1,
          tema: "Resumo do dia",
          detalhe: "- Instrutor aplica actividad con resumo de los principales temas del Onboarding",
          herramientas: [{ tipo: "🎮 Educaplay", url: "https://www.educaplay.com/learning-resources/27210988-latam_customer_care_onboarding_quiz.html" }],
          tiempo: "0:10:00"
        },
        {
          macroTema: "Onboarding LATAM",
          dia: 1,
          tema: "Universo Customer Care & Sales",
          detalhe: "- Instrutor passa vídeo contextualizando o Universo Customer Care.",
          herramientas: [{ tipo: "🎬 Video", url: "https://drive.google.com/file/d/1QwJtjhZ7qZ4_kMbeY3_BPPzfNeZMyH4l/view?usp=drive_link" }],
          tiempo: "0:05:00"
        }
      ]
    },
    {
      tipo: 'imersao',
      label: 'Imersão Operacional Estratégica 1',
      rows: [
        {
          macroTema: "Imersão Operacional Estratégica 1",
          tema: "Imersão Operacional Estratégica 1",
          detalhe: "Instrutor leva agentes até a operação para escuta de chamadas.",
          herramientas: [],
          tiempo: "3:30:00"
        },
        {
          macroTema: "Imersão Operacional Estratégica 1",
          tema: "Imersão Operacional Estratégica 1",
          detalhe: "Instrutor tira dúvidas referentes ao atendimento do dia.",
          herramientas: [],
          tiempo: "1:00:00"
        }
      ]
    }
  ]
};
