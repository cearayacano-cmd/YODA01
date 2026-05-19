export const RUTA_DATA_DEFAULT = [
  { poder: "Gestão de Equipe", tema: "Feedback Efetivo", tiempo: "2H", desc: "Técnicas de retroalimentação para o desenvolvimento da equipe.", consejo: "Mantenha um foco positivo e construtivo", adjunto: "#" },
  { poder: "Gestão de Equipe", tema: "Resolução de Conflitos", tiempo: "2H", desc: "Controle de situações difíceis entre colaboradores", consejo: "Escuta ativa é a chave", adjunto: "#" },
  { poder: "Estratégia de Vendas", tema: "Cierre de Ventas", tiempo: "3H", desc: "Metodologias para fechar negociações exitosas.", consejo: "Identifica las objeciones temprano.", adjunto: "#" }
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
  { macroTema: "IOE", dia: 2, tema: "Escucha Activa", herramientas: "Operação", tiempo: "3:30" }
];

export const BASE_PLANET_DATA = {  "texture": "CRATERS",
  "color": "#1b0088",
  label: 'BASE',
  onboardingIdx: 0,
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
          herramientas: [{ tipo: "🖼️  Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?usp=sharing" }],
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
          herramientas: [{ tipo: "ðŸŒ Plataforma", url: "https://amelia.appslatam.com/#/chat" }],
          iaPic: []
        },
        {
          macroTema: "Introdução Site",
          tema: "Conhecendo o site latamairlines",
          detalhe: "- Instrutor navega no site com o foco em mostrar a visão do passageiro: Onde buscar voos, informações, LATAM PASS.\n- Instrutor pede para os alunos criarem contas no seu nome em latamairlines.com.\n*Eles precisam ter acesso ao email inserido, pois irão utilizar posteriormente nos exercícios. Caso não tenham acesso, sugerir que criem um email gmail.",
          tiempo: "0:30:00",
          herramientas: [{ tipo: "✈️ Latam.com", url: "http://latamairlines.com/" }],
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
          herramientas: [{ tipo: "✈️ Latam.com", url: "https://www.latamairlines.com/br/pt/central-ajuda/perguntas/compras/assistencia/taxas-embarque" }],
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_653#slide=id.g364eaff9e51_0_653" }],
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_245#slide=id.g364eaff9e51_0_245" }],
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1Ueeo7fq-I20yqWiWGPFgt1_Tt-Zqs5auNraYoezpgRw/edit?slide=id.g1e447d4f136_1_44#slide=id.g1e447d4f136_1_44" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Atividade \"Ajuste de Rota con o Navegador\" Login e Reserva",
          detalhe: "- Instrutor passa o login da ferramenta Training (A360), mostra a maneira de se logar e explica que na operação irão logar con seu BP e senha.\n- Instrutor entra na ferramenta Training e propõe que um aluno mostre como realizar a reserva e criar uma ordem simples através da ferramenta training (instrutor será o pax e realizará o pagamento no seu perfil do agente 360, através do link de pagamento).\nO aluno deverá seguir o passo a passo do PIC e o instrutor sendo um dos passageiros (passar seus dados e email).\nAo final, instrutor mostra os campos do Agente 360 (lado esquerdo). Explica brevemente que o histórico de todas as ações fica registrado e que eles aprenderão a leitura na Expedição PV 2.",
          tiempo: "0:25:00",
          herramientas: [{ tipo: "ðŸ–¥ï¸ Painel", url: "#" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Remarks",
          detalhe: "- Instrutor explica o que são remarks e que devem ser sempre inseridos como respaldo das informações passadas ao cliente e como podem ser visualizados na ferramenta Agente 360.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "ðŸ–¥ï¸ Painel", url: "#" }],
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364c015fc33_0_389#slide=id.g364c015fc33_0_389" }],
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_185#slide=id.g3a4ae7f28e5_0_185" }],
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364c015fc33_0_413#slide=id.g364c015fc33_0_413" }],
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_216#slide=id.g3a4ae7f28e5_0_216" }],
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_232#slide=id.g3a4ae7f28e5_0_232" }],
          iaPic: []
        },
        {
          macroTema: "Ordens e Vendas Agente 360",
          tema: "Video 5 [Vendas] Introdutório LATAM Wallet",
          detalhe: "- Instrutor passa o vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_379#slide=id.g364eaff9e51_0_379" }],
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364c015fc33_0_482#slide=id.g364c015fc33_0_482" }],
          iaPic: []
        },
        {
          macroTema: "Solicitação de Serviços Agente 360",
          tema: "Atividade \"Controle de Voo e Lançamento\" SSEE A360",
          detalhe: "- Instrutor pede para que os alunos simulem chamadas de acordo aos cases propostos no PPT.",
          tiempo: "0:15:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_264#slide=id.g3a4ae7f28e5_0_264" }],
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1Ueeo7fq-I20yqWiWGPFgt1_Tt-Zqs5auNraYoezpgRw/edit?slide=id.g1e447d4f136_1_44#slide=id.g1e447d4f136_1_44" }],
          iaPic: []
        },
        {
          macroTema: "Ancillaries",
          tema: "Atividade \"Controle de Voo e Lançamento\" Ancillaries",
          detalhe: "- O instrutor pede para que os alunos simulem chamadas de acordo aos cases propostos no PPT.",
          tiempo: "0:15:00",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_343#slide=id.g3a4ae7f28e5_0_343" }],
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364c015fc33_0_518#slide=id.g364c015fc33_0_518" }],
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
          iaPic: [{ label: "PIC SEMÃFORO", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/43013540923667-Sem%C3%A1foro-de-afeta%C3%A7%C3%A3o-Criticality-Score" }]
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
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_653#slide=id.g364eaff9e51_0_653" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_407#slide=id.g3a4ae7f28e5_0_407" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1Ueeo7fq-I20yqWiWGPFgt1_Tt-Zqs5auNraYoezpgRw/edit?slide=id.g1e447d4f136_1_44#slide=id.g1e447d4f136_1_44" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Introdução LATAM PASS",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "ðŸŽ¬ PPT/Video", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Categorias e Benefícios",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "ðŸŽ¬ Youtube", url: "https://www.youtube.com/shorts/vX9srzIRZNw?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Produto, Categorias e Benefícios LATAM Pass",
          detalhe: "- Instrutor explica considerações produto, categoria e benefícios LATAM PASS milhas de acordo com a publicação no PIC.\n- Instrutor fala sobre como é atribuido o número de sócio no BR.\n- Instrutor apresenta as categorias Latam Pass, regras para se qualificar e benefícios.",
          tiempo: "0:40:00",
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3ab95949dfe_0_32#slide=id.g3ab95949dfe_0_32" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ Youtube", url: "https://www.youtube.com/shorts/ZSgsCW5dQmo?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Bonus LATAM PASS",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "ðŸŽ¬ Youtube", url: "https://www.youtube.com/shorts/NbFTLrPXnVw?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Incidentes Bônus LATAM PASS",
          detalhe: "- Instrutor mostra tabela e explica que qualquer tipo de incidente deve ser derivado aos especialistas de DT FFP.",
          tiempo: "0:10:00",
          herramientas: [],
          iaPic: [{ label: "PIC BÃ”NUS", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/37307768474899-B%C3%B4nus-LATAM-Pass" }]
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Acúmulo Milhas",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "ðŸŽ¬ Youtube", url: "https://www.youtube.com/shorts/71J3rlILGY4?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Atividade \"Controle de Voo e Lançamento\" Acúmulo de Milhas",
          detalhe: "- O instrutor pede para que os alunos assistam aos vídeos com dúvidas de passageiros e elege um aluno diferente para entregar cada solução.",
          tiempo: "0:30:00",
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a4ae7f28e5_0_469#slide=id.g3a4ae7f28e5_0_469" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video latam.com (acúmulo parceiros)",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "ðŸŽ¬ Youtube", url: "https://www.youtube.com/shorts/wYmA_Q1ZKyo?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Clube LATAM PASS",
          detalhe: "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "ðŸŽ¬ Youtube", url: "https://www.youtube.com/shorts/G5Np4zshbpQ?feature=share" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ Youtube", url: "https://www.youtube.com/shorts/jEMsqNPVfOk?feature=share" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Video Desvendando LATAM PASS",
          detalhe: "- Instrutor passa o vídeo.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3b0afb1e69c_1_0#slide=id.g3b0afb1e69c_1_0" }],
          iaPic: []
        },
        {
          macroTema: "LATAM PASS",
          tema: "Quiz Genially + Revisão",
          detalhe: "- Instrutor passa atividades.",
          tiempo: "0:20:00",
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3af9331569d_0_79#slide=id.g3af9331569d_0_79" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_11#slide=id.g364eaff9e51_0_11" }],
          iaPic: []
        },
        {
          macroTema: "NÃO VOZ",
          tema: "Video 8 [Vendas] Ferramenta (chat e WS)",
          detalhe: "- Instrutor apresenta Video de introdução.",
          tiempo: "1:00:00",
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3ace22d935a_1_39#slide=id.g3ace22d935a_1_39" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g396acdc1034_0_0#slide=id.g396acdc1034_0_0" }],
          iaPic: []
        },
        {
          macroTema: "NÃO VOZ",
          tema: "Chat FCI x Chat CDA",
          detalhe: "- O instrutor reforça as diferenças entre os tipos de chat e solicita explicação dos participantes.",
          tiempo: "0:30:00",
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364eaff9e51_0_693#slide=id.g364eaff9e51_0_693" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3d43ae23fc7_0_0#slide=id.g3d43ae23fc7_0_0" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1Ueeo7fq-I20yqWiWGPFgt1_Tt-Zqs5auNraYoezpgRw/edit?slide=id.g1e447d4f136_1_44#slide=id.g1e447d4f136_1_44" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3af9331569d_0_2#slide=id.g3af9331569d_0_2" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a31204c109_1_199#slide=id.g3a31204c109_1_199" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1_9NGVYmcU7YEoy7x_av2hRctf2FinggX7T_Fi-CHm8o/edit?usp=drive_link" }],
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
          herramientas: [{ tipo: "ðŸ’» Sistemas Produção", url: "" }],
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


export const VENDAS_WS_12_DATA = {
  texture: "CRATERS",
  color: "#1b0088",
  label: 'Vendas + WS 12 dias',
  onboardingIdx: 1,
  secciones: [
    {
      tipo: 'mision1',
      label: 'MISIÓN 1: Vendas',
      rows: [
  {
    "macroTema": "Introdução",
    "tema": "Video 1 [Vendas] Boas Vindas",
    "detalhe": "- Instrutor dá as boas vindas: \"A partir de agora, o nosso treinamento muda de nome: Sejam bem-vindos à Expedição Vendas pelo Universo LATAM!\"\n- Instrutor passa o vídeo de introdução.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?usp=sharing"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Apresentação PIC",
    "tema": "PIC",
    "detalhe": "Instrutor entra no PIC e mostra estrutura PIC, formas de busca. \nAcessa Matriz de Atendimento Vendas e Protocolos:\n1. Protocolo Estrutura de Chamadas (Foco em Boas Vindas, Deixar Pax em Espera, Despedida);\n2. Protocolo Informação de Viagem;\n3. Protocolos Check-in\n4. Protocolo de reconfirmação de dados de PNR\nInstrutor reforça a importância de reconfirmar os dados da reserva com o cliente antes de emitir ou alterar qualquer reserva.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360054073254-Protocolo-Estrutura-de-Chamadas#h_01G8C6XH6XV4BH2DPH8EMNX9AP"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Apresentação Amélia",
    "tema": "Amélia",
    "detalhe": "- Instrutor apresenta a ferramenta Amélia (Chat Livre em ambiente controlado LATAM)",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🤖 Amélia",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Introdução Site",
    "tema": "Conhecendo o site latamairlines",
    "detalhe": "- Instrutor navega no site com o foco em mostrar a visão do passageiro: Onde buscar voos, informações, LATAM PASS.\n- Instrutor pede para os alunos criarem contas no seu nome em latamairlines.com.\n*Eles precisam ter acesso ao email inserido, pois irão utilizar posteriormente nos exercícios. Caso não tenham acesso, sugerir que criem um email gmail.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "✈️ Latamairlines.com",
        "url": "https://www.latamairlines.com"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Perfis de Tarifa",
    "tema": "Atividade \"Briefing de Missão\" Tarifas LATAM",
    "detalhe": "- Instrutor propõe atividade de busca de tarifas e seus atributos:\n1. Alunos realizam breve resumo das tarifas disponíveis na LATAM (3 min)\n2. Instrutor pede para que um aluno explique os atributos do Brand Light ( Voos dentro do Brasil e fora da América do Sul e América Central/Caribe)\n3. Pede para que o próximo aluno complemente com o atributo que o Brand Standard possui à mais.\n4. Pede para que o próximo aluno complemente com o atributo que o Brand Full possui à mais.\n5. Instrutor pede para que alguém dê um ejemplo de voo LATAM dentro do Brasil e fora da América do Sul. (Ex. BSB/GYN - GRU/NYC)\n6. Instrutor pede para que um aluno explique os atributos do Brand Light (Voos nacionais de outros paises da América do Sul e entre a América)\n7. Instrutor pede para que alguém dê um ejemplo de voo LATAM entre Américas (Ex. GRU/LIM)\n8. Instrutor pede para que um aluno explique os atributos do Brand Premium Economy.\n9.Instrutor pede para que um aluno explique os atributos do Brand Premium Business.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🌍 Site",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Perfis de Tarifa",
    "tema": "Introdução Branded Fares",
    "detalhe": "- Instrutor mostra aos alunos o capítulo do PIC onde podem ser encontradas mais informações sobre as tarifas.\n- Instrutor explica os tipos de rota (Doméstica, Regional, Long Haul).",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360050549933-Tarifas-"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Taxas",
    "tema": "Taxa de Embarque e Taxa de Serviço",
    "detalhe": "- Instrutor explica o que são taxas de embarque através do site LATAM.",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🌍 Site",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Taxas",
    "tema": "Taxa de Embarque e Taxa de Serviço",
    "detalhe": "- Instrutor explica o que é taxa de serviço focando nas considerações gerais BR, código de taxa DU e considerações de cobrança na emissão disponíveis no PIC. ",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053045793-Taxa-de-Servi%C3%A7o#h_01GR8YGS63GM064315Z7N3J5EQ"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Acordos",
    "tema": "Atividade \"Briefing de Missão\" Codeshare Acordo Delta",
    "detalhe": "- Instrutor mostra o caminho no PIC para encontrar informações sobre Codeshare,",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360052986693-Generalidades-Codeshare"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Acordos",
    "tema": "Atividade \"Briefing de Missão\" Codeshare Acordo Delta",
    "detalhe": "- Instrutor mostra o caminho no PIC para encontrar informações sobre Codeshare e Acordo Delta.\n- Divide sala em grupos e pede para que metade dos grupos faça um resumo do tema Codeshare e a outra metade sobre o acordo Delta.  (5 min).\n- Instrutor pede para que 1 representante de cada grupo fale sobre los principais pontos dos acordos, pede para los demais grupos complementarem e caso falte alguma información, acrescenta.",
    "tiempo": "0:20:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/22162184180499-Acordo-Delta-DL"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Acordos",
    "tema": "Atividade \"Guerra nas Estrelas\" Acordos e tarifas ",
    "detalhe": "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido \n- Instrutor envia link EducaPlay e explica tipo e tempo de (acordo com cronograma) para praticarem\nVale ressaltar que é possível jogar mais de uma vez, caso terminem antes do prazo ",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🎮 Educaplay",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Bagagem",
    "tema": "Atividade \"Relatório de Exploração\" 0. Introdução à Bagagens 1. Franquia LATAM e Interline 2. Excesso de Bagagem 3. Bagagem Especial 4. Artigos restritos (itens perigosos)",
    "detalhe": "- Instrutor entra no PIC- Manual Procedimentos Comerciais Bagagem, explica o \"menu\" lateral esquerdo e explica a dinâmica da atividade.\n1. Instrutor projeta a pergunta através do GENIALLY os alunos terão o tempo de 2 minutos para encontrar as respostas no PIC. Quem encontrar primeiro, se manifesta e marca ponto.\n2. Aluno responde e explica onde encontrou a respuesta (instrutor projeta e vai mostrando no computador e corrige ou complementa, se necesario)\nRepetir a mesma dinámica para todas as perguntas. \n- Ao final, instrutor questiona se alguien ficou com dúvidas. \nOBS. Se o tempo acabar e ninguém encontrar a respuesta, instrutor mostra onde está no PIC.",
    "tiempo": "0:25:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360049744854-Generalidades-Bagagem-"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Serviços e Pax Expeciais",
    "tema": "Vídeo UMNR e PETC",
    "detalhe": "- Instrutor explica que a LATAM possui alguns servicios especiais e que na alta temporada os mais tranportados são UMNR e PETC.\n- Em seguida passa os vídeos do \"Tá no Ar\"",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Serviços e Pax Expeciais",
    "tema": "Protocolos",
    "detalhe": "- Instrutor mostra os protocolos a serem utilizados para SSEE.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055886633-Protocolo-Servi%C3%A7os-Especiais"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Serviços e Pax Expeciais",
    "tema": "Atividade \"Briefing de Missão\" SSEE",
    "detalhe": "- Instrutor mostra o caminho no PIC para encontrar SSSE, em seguida dividir em grupos e dar un tema para cada:\nCada grupo deverá ler sobre o SSEE que lhe corresponda e apresentá-lo aos demais da classe.\n6 temas\n5 min para fazer o resumo e 5 min para cada grupo apresentar.\nInstrutor corrige e complementa sempre que necesario.\nTemas:\nAnimais (AVIH/PETC)\nAssento adicional (EXST/CBBG)\nBaby Bassinet (BSCT)/ Bebe conforto (INCU)\nMenor desacompanhado (UMNR)\nBebe conforto (INCU)\nAlimentação Especial\nCadeira de Rodas",
    "tiempo": "0:45:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/sections/360011672273-Servi%C3%A7os-Especiais"
      }
    ],
    "iaPic": [
      {
        "label": "Animais (AVIH/PETC)",
        "url": ""
      },
      {
        "label": "Assento adicional (EXST/CBBG)",
        "url": ""
      },
      {
        "label": "Baby Bassinet (BSCT)",
        "url": ""
      },
      {
        "label": "Bebe conforto (INCU)",
        "url": ""
      },
      {
        "label": "Menor desacompanhado (UMNR)",
        "url": ""
      },
      {
        "label": "Alimentação Especial",
        "url": ""
      },
      {
        "label": "Cadeira de Rodas",
        "url": ""
      }
    ]
  },
  {
    "macroTema": "Serviços e Pax Expeciais",
    "tema": "Atividade \"Briefing de Missão\" Passageiros Especiais",
    "detalhe": "Instrutor mostra o camino no PIC para encontrar Pax Especiais, em seguida dividir em grupos e dar un tema para cada:\nCada grupo deberá ler sobre o tema que lhe corresponda e apresentá-lo aos demais da classe.\n5 temas\n5 min para fazer o resumo e 5 min para cada grupo apresentar.\nInstrutor corrige e complementa sempre que necesario.\nTemas:\nPassageiros Especiais\nGestantes\nNecessidade de assistência especial\nCertificação médica (MEDIF)\nAnimais de Assistência (SVAN-ESAN)",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/sections/360010556514-Passageiros-Especiais"
      }
    ],
    "iaPic": [
      {
        "label": "Gestantes",
        "url": ""
      },
      {
        "label": "Necessidade de assistência especial",
        "url": ""
      },
      {
        "label": "Certificação médica (MEDIF)",
        "url": ""
      },
      {
        "label": "Animais de Assistência (SVAN-ESAN)",
        "url": ""
      }
    ]
  },
  {
    "macroTema": "Serviços e Pax Expeciais",
    "tema": "Atividade \"Guerra nas Estrelas\" SSEE e Pax Especiais",
    "detalhe": "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido \n- Instrutor envia link EducaPlay e explica tipo e tiempo de (acordo con cronograma) para praticarem\nVale ressaltar que é posible jogar más de uma vez, caso terminem antes do prazo ",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🎮 Educaplay",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Video 2 [Vendas] Introdutório Vendas A360",
    "detalhe": "- Instrutor passa o vídeo.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Atividade \"Briefing de Missão\" Vendas",
    "detalhe": "- Instrutor mostra o caminho do PIC e pede para se dividirem em 5 grupos. Cada grupo lerá as considerações, fazendo um resumo.\nUm representante do grupo apresenta uma consideração. 5 min para pesquisar                                                                                                                                                                                                                                                                                                                                       \n- Instrutor deve corrigir e complementar se necesario.",
    "tiempo": "0:40:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360052861173-Reserva-e-emiss%C3%A3o-de-passagens"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Resumo",
    "tema": "Resumo do dia anterior",
    "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em um flipchart ou quadro os temas.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Atividade \"Ajuste de Rota con o Navegador\" Login e Reserva",
    "detalhe": "- Instrutor passa o login da ferramenta Training (A360), mostra a maneira de se logar e explica que na operação irão logar com seu BP e senha.\n- Instrutor entra na ferramenta Training e propõe que um aluno mostre como realizar a reserva e criar uma ordem simples através da ferramenta training  (instrutor será o pax e realizará o pagamento no seu perfil do agente 360, através do link de pagamento).\nO aluno deberá seguir o passo a passo do PIC e o instrutor sendo um dos passageiros (passar seus dados e email).\nAo final, instrutor mostra os campos do Agente 360 (lado esquerdo). Explica brevemente que o histórico de todas as ações fica registrado e que eles aprenderão a leitura na Expedição PV 2.",
    "tiempo": "0:25:00",
    "herramientas": [
      {
        "tipo": "💻 A360 TRN",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Remarks",
    "detalhe": "- Instrutor explica o que são remarks e que devem ser sempre inseridos como respaldo das informações passadas ao cliente e como podem ser visualizados na ferramenta Agente 360.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "💻 A360 TRN",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Reforçar protocolo",
    "detalhe": "Ao final da criação do PNR, o instrutor pede para os alunos olharem o protocolo de documentação, entra em latamairlines.com para mostrar onde está a información e indica como adicionar a información dada no RMK.",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360054073254-Protocolo-Estrutura-de-Chamadas#h_01G8C6XH6XV4BH2DPH8EMNX9AP"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Video 3 [Vendas] Link de pagto",
    "detalhe": "- Instrutor passa vídeo ",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Link de Pagamento",
    "detalhe": "- Pede para o agente enviar o link de pagamento para o seu email, projeta e mostra como pagar con os dados do cartão ficticio (reforça que é a visión do pax).",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/4411825576083-Pagamento-Link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "CUV",
    "detalhe": "- Instrutor explica o que é o CUV e como reenviá-lo através do Agente 360,",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/4407703691155-Comprovante-%C3%9Anico-de-Venda-CUV"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Reservas",
    "detalhe": "- O instrutor pede para que os alunos realizem reservas de acordo con o proposto no GENIALLY.\n- instrutor indica para que todos os \"agentes\" fiquem con os protocolos abertos e o utilizem nas simulações. \n- Instrutor mostra o campo \"minhas anotações\" da herramienta Agente.  \nTodas as ordens devem ser anotadas em um arquivo que o aluno tenha acesso posteriormente.",
    "tiempo": "1:00:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Ordens de Clientes",
    "detalhe": "- Instrutor explica como realizar a busca e exibição de uma ordem e diferença de ordem logada de não logada.        \n- Instrutor explica como identificar a origem da ordem.                                                                         ",
    "tiempo": "0:15:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/4407014380307-Ordens-de-Clientes"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Check-in Automático",
    "detalhe": "- Intrutor explica sobre o Check-in automático (indica que o check-in é automático para todos os passageiros con ordem (visualización do cliente)\n- Mostrar como chega a confirmação da compra e a notificação no e-mail do cliente, através das telas do PIC. ",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053236793-Check-In"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Video 4 [Vendas] Simulação Split",
    "detalhe": "- Instrutor passa o vídeo.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Atividade \"Ajuste de Rota con o Navegador\" Split Reservas",
    "detalhe": "- Instrutor explica o que é o SPLIT, pede para agentes entrarem no PIC (split) e outro aluno vai até a mesa e demonstra em uma ordem previamente criada pelo instrutor, como dividir a ordem no Agente 360 TRN seguindo o paso a paso.",
    "tiempo": "0:15:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055936373-Split-de-Reserva-Individuais-e-Grupo"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Atividade \"Controle de Voo e Lançamento\" Split",
    "detalhe": "- Com as ordens criadas anteriormente, os agentes voltam a ser pax e agente e simular un contato solicitando a división da ordem. ",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Isenção de Taxa de Serviço",
    "detalhe": "- Instrutor explica os casos em que a isenção da taxa DU pode ser realizada, mostrando o paso a paso no PIC.",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/12943186481299-Processo-para-isen%C3%A7%C3%A3o-de-taxa-de-servi%C3%A7o-em-latamairlines-com"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Atividade \"Controle de Voo e Lançamento\" Isenção Taxa de Serviço",
    "detalhe": "- O instrutor pede para que os alunos realizem reservas de acordo con o proposto no Genially y procedam con a isenção da taxa DU. ",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Video 5 [Vendas] Introdutório LATAM Wallet",
    "detalhe": "- Instrutor passa o vídeo.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ordens e Vendas Agente 360",
    "tema": "Atividade \"Relatório de Exploração\" LATAM Wallet",
    "detalhe": "- Instrutor entra no PIC e mostra onde encontrar informacións sobre a LATAM Wallet.\n- Instrutor dá 5 min para que os alunos façam un resumo do tema.\n Instrutor projeta a pergunta através do GENIALLY e escolhe un agente para responder. Caso ele erre, pede para outra pessoa responder. Se ele acertar, escolhe o aluno que responderá a próxima pergunta.\n- Ao final, instrutor questiona se alguien ficou con dúvidas. ",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/4414246715027-LATAM-Wallet"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Solicitação de Serviços Agente 360",
    "tema": "Video 6 [Vendas] Introdutório SSEE ",
    "detalhe": "- Instrutor mostra video",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Solicitação de Serviços Agente 360",
    "tema": "Atividade \"Controle de Voo e Lançamento\" SSEE A360",
    "detalhe": "- Instrutor pede para que os alunos simulem chamadas de acordo aos cases propostos no PPT.",
    "tiempo": "0:15:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ancillaries",
    "tema": "Atividade \"Briefing de Missão\" Ancillaries",
    "detalhe": "- Instrutor mostra o camino no PIC para encontrar o assunto Ancillaries e propõe para os grupos que pesquisem tipos de EMD. 5 min para fazer resumo e 3 min para apresentar para a sala. ",
    "tiempo": "0:15:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360052161874-EMD"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ancillaries",
    "tema": "Atividade \"Briefing de Missão\" Ancillaries",
    "detalhe": "- Instrutor complementa con a explicação de quais e como realizar a venda de un ancillary de: (UMNR), (PETC) e (AVIH) por meio do A360 ",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/47091784533395-05-12-25-SERVI%C3%87OS-ESPECIAIS-Ativa-se-a-venda-dos-servi%C3%A7os-de-menor-desacompanhado-UMNR-animal-de-estima%C3%A7%C3%A3o-na-cabine-PETC-e-no-por%C3%A3o-AVIH-por-meio-do-agente-360"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ancillaries",
    "tema": "Venda de Malas",
    "detalhe": "- Instrutor explica  como pax solicita un bilhete con a venda de bag.",
    "tiempo": "0:15:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/4414544635155-Venda-de-Malas"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ancillaries",
    "tema": "Atividade \"Ajuste de Rota con o Navegador\" Venda Assistida de Malas",
    "detalhe": "- Instrutor pede para un aluno ir até a mesa e mostrar como pax solicita un bilhete con a venda de bag.",
    "tiempo": "0:15:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/37493881988371-Venda-Assistida-de-bagagem-pelo-Agente-360"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ancillaries",
    "tema": "Venda de Assentos",
    "detalhe": "- Instrutor explica  como realizar a venda de assentos.",
    "tiempo": "0:15:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360049744894-Venda-de-Sele%C3%A7%C3%A3o-de-Assentos"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ancillaries",
    "tema": "Atividade \"Relatório de Exploração\" LATAM Flex",
    "detalhe": "- Instrutor entra no PIC Manual Procedimentos Comerciais - LATAM Flex e explica a dinámica.\n1. Instrutor divide a sala em 2 grupos. Essa será uma \"batalha\" entre grupos. \n- Instrutor projeta a pergunta no GENIALLY  e coloca o cronômetro de 1 minuto. O grupo que achar a respuesta primeiro se manifesta e tem o direito de respuesta. Se a respuesta estiver certa, marca ponto. Se estiver errada, o outro grupo tem direito a responder e marcar o ponto. \n2. Aluno representante do grupo que acertou  responde e explica onde encontrou a respuesta (instrutor projeta e vai mostrando no computador)\nRepetir a mesma dinámica para todas as perguntas.\n- Ao final, instrutor questiona se alguien ficou con dúvidas.\nOBS. Se o tempo de 1 minuto acabar e ninguém encontrar a respuesta, instrutor mostra onde está no PIC.",
    "tiempo": "0:20:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/17098820775187-LATAM-FLEX"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Resumo",
    "tema": "Resumo do dia anterior",
    "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias o escrever diretamente em un flipchart ou quadro os temas.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ancillaries",
    "tema": "Atividade \"Controle de Voo e Lançamento\" Ancillaries",
    "detalhe": "- O instrutor pede para que os alunos simulem chamadas de acordo aos cases propostos no PPT.",
    "tiempo": "0:15:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Ancillaries",
    "tema": "Atividade \"Jornada pelo Universo do Conhecimento\" Vendas con Ancillaries",
    "detalhe": "- Instrutor pede para que os alunos abram o forms e realizem a atividade proposta. \n- Instrutor acompanha a folha de respuestas e corrige as ordens: Atribuindo nota para  os acertos: \n1. Rota correta (20 p)\n2. PAX: 1 adulto e 1 criança (20 p)\n3. Tarifa Standard (20 p)\n4. Vendeu assento? (10 p)\n5. Vendeu bagagem? (10 p)\nApós corrigir as ordens, instrutor deve preencher\n Diário de Bordo",
    "tiempo": "0:50:00",
    "herramientas": [
      {
        "tipo": "📋 Forms AEC",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Painel de Pagamento Agente 360",
    "tema": "Atividade \"Briefing de Missão\" Painel de Pagamentos ",
    "detalhe": "- Instrutor pede para que os alunos acessem o material \"Console XP\" no PIC e dá 5 minutos para lerem o conteúdo. Depois pede para que un dos alunos explique para os demais da sala do que se trata a herramienta e qual sua principal función. ",
    "tiempo": "0:20:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/5443079309971-Console-XPSP"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Lista de Vendas",
    "tema": "Video 7 [Vendas] Lista de vendas",
    "detalhe": "- Instrutor mostra video",
    "tiempo": "0:02:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Lista de Vendas",
    "tema": "Lista de Vendas",
    "detalhe": "- Instrutor mostra onde encontrar información sobre lista de vendas no PIC.",
    "tiempo": "0:03:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/40176305951123-NOVA-FUNCIONALIDADE-LISTA-DE-VENDAS-AGENTES"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Perfil Cliente",
    "tema": "Atividade \"Guerra nas Estrelas\" Notificações aos Passageiros",
    "detalhe": "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido \n- Instrutor envia link EducaPlay e explica tipo e tiempo de (acordo con cronograma) para praticarem\nVale ressaltar que é posible jogar más de uma vez, caso terminem antes do prazo ",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🎮 Educaplay",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Perfil Cliente",
    "tema": "Semáforo de Afetação",
    "detalhe": "- Instrutor explica o que é, mostrando as telas do PIC.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/43013540923667-Sem%C3%A1foro-de-afeta%C3%A7%C3%A3o-Criticality-Score"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Perfil Cliente",
    "tema": "Erros de pagamento",
    "detalhe": "- Instrutor explica a tabela de erros de pagamento e dá 2 ejemplos de solução.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/4403974273299-Erros-de-pagamento"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "INCIDENTES",
    "tema": "Relatar incidentes A360",
    "detalhe": "- Instrutor mostra formulário incidências disponível no PIC e orienta que los agentes devem chamar o supervisor para auxiliar no preenchimento.",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/4405966901523-Detalle-Formularios-Incidencias"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Avaliação Vendas A360",
    "tema": "Jornada pelo Universo do Conhecimento \"Vendas\"",
    "detalhe": "- Instrutor aplica a avaliação.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "📋 Forms AEC",
        "url": ""
      }
    ],
    "iaPic": []
  }
]
    },
    {
      tipo: 'mision1',
      label: 'MISIÓN 2: Casos',
      rows: [
  {
    "macroTema": "Casos",
    "tema": "Criação de Casos Agente 360",
    "detalhe": "- Instrutor mostra através do Agente 360 Training o formulário de criação de casos, detalhando cada campo a ser preenchido, com ênfase naqueles que contém asteriscos.. Criação de casos via Agente 360\n- Instrutor mostra os processos que se faz necesario o cliente enviar documentos como Entrega ou Envio de CUV, solicitações de certificados (Declaração de embarque).   \n- Instrutor explica que nestes processos os casos não devem ser gerados pelo CDA e sim pelo Agente 360:                                                                                                                                                                                                            ",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/31926091283859-Abrir-caso-Zendesk"
      },
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/40223076355091-10-04-25-Elimina%C3%A7%C3%A3o-de-cria%C3%A7%C3%A3o-de-casos-atrav%C3%A9s-do-Centro-de-Ajuda-do-site"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Casos",
    "tema": "Atividade \"Controle de Voo e Lançamento\" Criação de Casos Agente 360",
    "detalhe": "- Instrutor pede para que os alunos simulem chamadas de acuerdo aos cases propostos no PPT.",
    "tiempo": "0:15:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Zendesk",
    "tema": "Introdução",
    "detalhe": "- Instrutor apresenta a ferramenta e suas funcionalidades",
    "tiempo": "0:15:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Zendesk",
    "tema": "1. Conceitos básicos",
    "detalhe": "- Instrutor mostra a partir do PIC os conceitos básicos do aplicativo.",
    "tiempo": "0:20:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Zendesk",
    "tema": "2. Inicio no Sistema Único de casos",
    "detalhe": "- Instrutor mostra como entrar na ferramenta.",
    "tiempo": "0:20:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Zendesk",
    "tema": "3. Funcionalidades",
    "detalhe": "- Instrutor mostra suas funcionalidades a partir da ferramenta:\nVisualizações \nBusca de solicitante \nInclusão de un solicitante\nModificação de un solicitante\nClassificar un ticket\nReclassificar un ticket\nFundir tickets\nCriação de ticket filho\nReabrir casos con macros o Reenviar último comentário público",
    "tiempo": "0:20:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Zendesk",
    "tema": "4. Navegação Zendesk",
    "detalhe": "- Instrutor mostra suas funcionalidades a partir da ferramenta.\n-Instrutor mostra no PIC as funcionalidades da herramienta.\n- Instrutor explica como utilizar a varinha inteligente. ",
    "tiempo": "0:15:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Zendesk",
    "tema": "Atividade \"Ajuste de Rota con o Navegador\" Zendesk",
    "detalhe": "- Instrutor mostra casos reais da herramienta para identificar os requerimentos do cliente.\n- Instrutor mostra as partes do caso e posible resolución.",
    "tiempo": "0:35:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Avaliação Zendesk",
    "tema": "Jornada pelo Universo do Conhecimento \"Casos\"",
    "detalhe": "- Instrutor aplica a avaliação.",
    "tiempo": "0:20:00",
    "herramientas": [
      {
        "tipo": "📋 Forms AEC",
        "url": ""
      }
    ],
    "iaPic": []
  }
]
    },
    {
      tipo: 'mision1',
      label: 'MISIÓN 3: - LATAM PASS',
      rows: [
  {
    "macroTema": "LATAM PASS",
    "tema": "Resumo do dia anterior",
    "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em un flipchart ou quadro os temas.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Video Introdução LATAM PASS",
    "detalhe": "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g364c015fc33_0_356#slide=id.g364c015fc33_0_356"
      },
      {
        "tipo": "🎥 Youtube",
        "url": "https://www.youtube.com/shorts/YlKrAL_wgKo?feature=share"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Video Categorias e Benefícios",
    "detalhe": "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🎥 Youtube",
        "url": "https://www.youtube.com/shorts/vX9srzIRZNw?feature=share"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Produto, Categorias e Benefícios LATAM Pass",
    "detalhe": "- Instrutor explica considerações produto, categoria e benefícios LATAM PASS milhas de acordo con a publicação no PIC.\n- Instrutor fala sobre como é atribuido o número de sócio no BR. \n- Instrutor apresenta as categorias Latam Pass, regras para se qualificar e benefícios.",
    "tiempo": "0:40:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3ab95949dfe_0_32#slide=id.g3ab95949dfe_0_32"
      },
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Atividade \"Guerra nas Estrelas\" (Produto Categorias e Beneficios)",
    "detalhe": "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido \n- Instrutor envia link EducaPlay e explica tipo e tiempo de (acordo con cronograma) para praticarem\nVale ressaltar que é posible jogar más de uma vez, caso terminem antes do prazo ",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🎮 Educaplay",
        "url": "https://www.educaplay.com/learning-resources/26736432-latam_pass_categorias_em_foco.html"
      },
      {
        "tipo": "🎮 Educaplay",
        "url": "https://www.educaplay.com/learning-resources/26744315-latam_pass_categorias_em_foco.html"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Video Milhas e Pontos Qualificáveis",
    "detalhe": "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🎥 Youtube",
        "url": "https://www.youtube.com/shorts/ZSgsCW5dQmo?feature=share"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Video Bonus LATAM PASS",
    "detalhe": "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🎥 Youtube",
        "url": "https://www.youtube.com/shorts/NbFTLrPXnVw?feature=share"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Incidentes Bônus LATAM PASS",
    "detalhe": "- Instrutor mostra tabela e explica que qualquer tipo de incidente deve ser derivado aos especialistas de DT FFP.",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/37307768474899-B%C3%B4nus-LATAM-Pass"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Video Acúmulo Milhas",
    "detalhe": "- Instrutor apresenta o vídeo e pede para que los alunos comentem o que entenderam do vídeo.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🎥 Youtube",
        "url": "https://www.youtube.com/shorts/71J3rlILGY4?feature=share"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Atividade \"Controle de Voo e Lançamento\" Acúmulo de Milhas",
    "detalhe": "- O instrutor pede para que os alunos assistam aos vídeos con dúvidas de passageiros e elege un aluno diferente para entregar cada solución. A respuesta correta está no rodapé do PPT.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Video latam.com (acúmulo parceiros)",
    "detalhe": "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🎥 Youtube",
        "url": "https://www.youtube.com/shorts/wYmA_Q1ZKyo?feature=share"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Video Clube LATAM PASS",
    "detalhe": "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🎥 Youtube",
        "url": "https://www.youtube.com/shorts/G5Np4zshbpQ?feature=share"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Resgate de tickets prêmios ",
    "detalhe": "- Instrutor explica a definição de resgate de pontos, considerações para resgate, outras considerações, processo de resgate através do Agente 360 e taxa de resgate e emissão.\n- Instrutor faz uma simulação no latamairlines.com para mostrar as opções de quantidade de pontos por perfil de tarifa e as opções de pontos + dinheiro que o passageiro pode selecionar, caso não tenha pontos disponíveis.",
    "tiempo": "0:45:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/4408047222803-Resgate-de-tickets-pr%C3%AAmios-com-novo-modelo-de-resgate-FFP-milhas-pontos"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Video LATAM PASS Resgate",
    "detalhe": "- Instrutor apresenta o vídeo e pede para que os alunos comentem o que entenderam do vídeo.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🎥 Youtube",
        "url": "https://www.youtube.com/shorts/jEMsqNPVfOk?feature=share"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Video Desvendando LATAM PASS",
    "detalhe": "- Instrutor passa o vídeo.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LATAM PASS",
    "tema": "Quiz Genially + Revisão ",
    "detalhe": "- Instrutor passa atividades.",
    "tiempo": "0:20:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Avaliação LATAM PASS",
    "tema": "Jornada pelo Universo do Conhecimento \" LATAM PASS\"",
    "detalhe": "- Instrutor aplica a avaliação.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "📋 Forms AEC",
        "url": ""
      }
    ],
    "iaPic": []
  }
]
    },
    {
      tipo: 'mision1',
      label: 'MISIÓN 4 - NÃO VOZ',
      rows: [
  {
    "macroTema": "NÃO VOZ",
    "tema": "Introdução NÃO VOZ ",
    "detalhe": "- Instrutor explica os tipos de interação NÃO VOZ (CHAT e WS) e mostra no PPT como o passageiro pode entrar em contato pelo WS através do Latam.com",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "NÃO VOZ",
    "tema": "Video 8 [Vendas] Ferramenta (chat e WS) ",
    "detalhe": "- Instrutor apresenta Video de introdução.",
    "tiempo": "1:00:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "NÃO VOZ",
    "tema": "Genesys Whatsapp/Chat",
    "detalhe": "- Instrutor apresenta através do PPT:\nInterações através do serviço whatsapp\nFunções botões dinâmicos\nProcesso de Finalização\nInterações simultáneas\nTransferencia Exitosa\nInterações Pro ativas",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/40120600616851-Acesso-ao-Whatsapp-Genesys"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "NÃO VOZ",
    "tema": "Whatsapp x Chat FCI/CDA",
    "detalhe": "- Instrutor destaca que há duas opções de canais para o atendimento NOVOZ. Na opção chat, existem dois subtipos: Chat CDA e Chat FCI. Ele explica, paso a paso, os fluxos de atendimento e as diferenças entre os procedimentos que podem ser realizados em cada canal.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "NÃO VOZ",
    "tema": "Chat FCI x Chat CDA",
    "detalhe": "- O instrutor reforça as diferenças entre os tipos de chat e aproveita para solicitar que un participante da turma explique, em poucas palavras, o que caracteriza cada un.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "NÃO VOZ",
    "tema": "Anexos",
    "detalhe": "- Instrutor mostra conteúdos anexos através do PIC. Explica que se trata de un conjunto de documentos para auxiliar \nAnexo 1 - Fluxo derivação  Chat web Genesys (INVOL) \nAnexo 2 - Fluxo derivação  Chat web Genesys (Booking)\nAnexo 3 - Chat web Genesys (Alterações Voluntárias)\nAnexo 4 - WhatsApp Compra de bagagens\nAnexo 5 - Fluxo  Chat web Genesys (Ancillaries)\nAnexo 6 - Fluxo derivação Chat web Genesys (SDFC)\nAnexo 7 - Chat web Check-in\nAnexo 8 -  Chat web Devoluções\nAnexo 9 - Chat Web Cola Default Interações sem información\nAnexo 10 - Chat web Booking milhas\nAnexo 11 - Chat Web Recovery Assentos \nAnexo 12 - Fluxo Derivação GBM (Google Business Messages) \nAnexo 13 - Fluxo Derivação Chat Web Necessidades Especiais ",
    "tiempo": "0:45:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/42671984510995-Anexos-N%C3%A3o-Voz-por-processo"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "NÃO VOZ",
    "tema": "Envio Pendente",
    "detalhe": "O instrutor informa que, quando há inatividade do passageiro superior a 5 minutos no atendimento NOVOZ, a conversa deve ser encaminhado para o fluxo \"Pendente Passageiro\".",
    "tiempo": "1:00:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "NÃO VOZ",
    "tema": "Solicitação de documentação online no atendimento telefônico, via WhastApp e Chat",
    "detalhe": "- Instrutor introduz processos realizados pelo canal novoz. Revisa os procesos que estão disponíveis para a solicitação e recepção de documentos estando online con o cliente, enfatizando os passos do processo WhatsApp e Chat, em seguida mostra o paso a paso.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/34169487426323-Solicita%C3%A7%C3%A3o-de-documenta%C3%A7%C3%A3o-via-WhatsApp"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "NÃO VOZ",
    "tema": "Forma de Pagamento OT WS",
    "detalhe": "- Instrutor explica a FOP OT e mostra paso a paso PIC.",
    "tiempo": "0:25:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/30270075990803-Forma-do-pagamento-OT-Pago-para-Canal-N%C3%A3o-Voz"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Resumo",
    "tema": "Resumo do dia anterior",
    "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em un flipchart ou quadro os temas.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://docs.google.com/presentation/d/1Ueeo7fq-I20yqWiWGPFgt1_Tt-Zqs5auNraYoezpgRw/edit?slide=id.g1e447d4f136_1_44#slide=id.g1e447d4f136_1_44"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Prática",
    "tema": "Simulador Genesys Whatsapp/Chat",
    "detalhe": "- Instrutor explica como acessar o simulador e pasa módulo NOVOZ. Na tela inicial o aluno deve inserir o BP.",
    "tiempo": "1:15:00",
    "herramientas": [
      {
        "tipo": "💻 Simulador",
        "url": "https://view.genially.com/699ceeb2c29dd6b1df292e3e"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Prática",
    "tema": "Casos",
    "detalhe": "- Instrutor mostra PPT con ejemplos de casos reais e analiza junto con os alunos.",
    "tiempo": "1:00:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3af9331569d_0_2#slide=id.g3af9331569d_0_2"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Avaliação",
    "tema": "Jornada pelo Universo do Conhecimento \"NO VOZ\"",
    "detalhe": "- Instrutor pede para os alunos abrirem o link e realizarem a avaliação.",
    "tiempo": "0:45:00",
    "herramientas": [
      {
        "tipo": "📋 Forms AEC",
        "url": "https://forms.gle/9DJ2W9msPdCbDScg9"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Avaliação",
    "tema": "Correção Avaliação",
    "detalhe": "- Instrutor corrige a avaliação",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a31204c109_1_199#slide=id.g3a31204c109_1_199"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Encerramento Expedição",
    "tema": "Video 9 [Vendas] Encerramento Expedição Vendas",
    "detalhe": "- Instrutor passa vídeo de encerramento",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?slide=id.g3a31204c109_1_199#slide=id.g3a31204c109_1_199"
      }
    ],
    "iaPic": []
  }
]
    },
    {
      tipo: 'landing',
      label: 'LANDING 1',
      rows: [
  {
    "macroTema": "LANDING",
    "tema": "Configuração Perfil Zendesk",
    "detalhe": "- Instrutor deve orientar agentes na configuração do perfil Zendesk, inserindo o logo da LATAM na foto de perfil e a assinatura deve ser o nome conforme registro MOP.",
    "tiempo": "0:45:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://docs.google.com/presentation/d/1_9NGVYmcU7YEoy7x_av2hRctf2FinggX7T_Fi-CHm8o/edit?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LANDING",
    "tema": "Genesys Cloud",
    "detalhe": "- Instrutor apresenta no PIC as funcionalidades da ferramenta Genesys Cloud.\n- Instrutor reforça a importância de derivação à EPA em todas chamadas.",
    "tiempo": "1:00:00",
    "herramientas": [
      {
        "tipo": "🔍 PIC",
        "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/34047723735571-Detalhes-Genesys"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LANDING",
    "tema": "Simulador Genesys ",
    "detalhe": "- Instrutor orienta os alunos a acessarem o simulador.\n Na tela inicial o aluno deve inserir o BP.",
    "tiempo": "0:40:00",
    "herramientas": [
      {
        "tipo": "💻 Simulador",
        "url": "https://view.genially.com/699ceeb2c29dd6b1df292e3e"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LANDING",
    "tema": "Teste de Acessos ",
    "detalhe": "Testar acessos dos sistemas e Genesys Cloud",
    "tiempo": "3:30:00",
    "herramientas": [
      {
        "tipo": "📋 Forms AEC",
        "url": "https://forms.gle/rKS7Kt63hopmVMJE7"
      },
      {
        "tipo": "📋 Forms AEC",
        "url": "https://docs.google.com/forms/d/e/1FAIpQLSexgezH2lsexp3YzT2LdxJnPLqmaDA7849G2FVIrgQK78C1EA/viewform"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LANDING",
    "tema": "Treinamentos obrigatórios",
    "detalhe": "Treinamento obrigatório PCI LATAM",
    "tiempo": "1:00:00",
    "herramientas": [
      {
        "tipo": "💼 SAP",
        "url": "https://forms.gle/rKS7Kt63hopmVMJE7"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "LANDING",
    "tema": "Treinamentos obrigatórios",
    "detalhe": "Código de Conduta ",
    "tiempo": "1:10:00",
    "herramientas": [
      {
        "tipo": "💼 SAP",
        "url": ""
      }
    ],
    "iaPic": []
  }
]
    },
    {
      tipo: 'desafio',
      label: 'Desafio OJT 1',
      rows: [
  {
    "macroTema": "Desafio OJT 1",
    "tema": "Desafio OJT 1",
    "detalhe": "Instrutor entra no Genesys e faz escuta de 1 chamada com a turma dentro da sala. \nApós finalizada a chamada, comenta sobre os pontos positivos / negativos da chamada e principais indicadores.",
    "tiempo": "1:45:00",
    "herramientas": [
      {
        "tipo": "🎯 Operação",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Desafio OJT 1",
    "tema": "Desafio OJT 1",
    "detalhe": "Instrutor leva agentes até a operação para atendimento de chamadas.",
    "tiempo": "5:00:00",
    "herramientas": [
      {
        "tipo": "🎯 Operação",
        "url": ""
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Desafio OJT 1",
    "tema": "Desafio OJT 1",
    "detalhe": "Instrutor  tira dúvidas referentes ao atendimento do dia.",
    "tiempo": "0:40:00",
    "herramientas": [
      {
        "tipo": "🎯 Operação",
        "url": ""
      }
    ],
    "iaPic": []
  }
]
    },
    {
      tipo: 'mision1',
      label: 'MISIÓN: WS Vendas',
      rows: [
  {
    "macroTema": "Abertura",
    "tema": "Boas-vindas",
    "detalhe": "O instrutor deseja as boas-vindas aos participantes. Se apresenta dizendo seu nome e trajetória.\nDepois, convida os participantes para que se apresentem, respondendo 3 perguntas:\na) Seu nome.\nb) Se viajaram alguma vez.\nc) Se trabalharam em algum lugar de atendimento a clientes.\nPosteriormente, os convida a participar do conteúdo programado para desenvolver.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Abertura",
    "tema": "Agenda de trabalho e objetivos",
    "detalhe": "O instrutor comenta:\n - O objetivo do curso\n- A agenda de trabalho\n- Os acordos do curso",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Etapa 0: Clientes, Companhia, Produtos e Experiência.",
    "tema": "Clientes, Companhia, Produtos e Experiência.",
    "detalhe": "O instrutor baseado no ppt vai desenvolvendo e explicando cada tema contido:\na) Cliente: Indica como percebemos o cliente de hoje, como o escutamos e entendemos a sua percepção do nosso serviço.\nb) Companhia: Quem somos e a presença da LATAM no negócio aeronáutico.\nc) Produtos: Detalha as características de cada produto e seu valor. Ou seja, a experiência que o cliente vive ao adquirir os produtos e serviços. \nd) Papel do executivo: O que esperamos de un executivo de vendas LATAM Travel.",
    "tiempo": "1:00:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Etapa 1: Boas-vindas",
    "tema": "Boas-vindas",
    "detalhe": "O instrutor usa o ppt como apoio:\nDesenvolve como se realiza as boas-vindas, abordando todos os passos ideais para assegurar que o cliente se sinta acolhido.\nMostra cada un dos elementos que devem estar presentes nas boas-vidas.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Etapa 2: Indagar",
    "tema": "Indagar",
    "detalhe": "O instrutor usa o ppt como apoio:\n1. Explica aos participantes o que é a Inspeção e sua importância.\n2. Comenta qual é o objetivo principal na inspeção: Conseguir identificar a necessidade do cliente.\n3. Desenvolve como é feita a Inspeção, abordando os passos ideais para identificar o sonho do cliente.\nRoll playing (10 min):\n - O instrutor convida os alunos a participar nos roll playing dispostos para exercitar a realização da Inspeção. \n - Vai entregando feedback aos participantes e reforçando os elementos (perguntas abertas, fechadas e de confirmação).",
    "tiempo": "1:30:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Etapa 3: Oferecer",
    "tema": "Oferecer",
    "detalhe": "O instrutor usa o ppt como apoio:\n1. Explica aos participantes em que consiste a etapa de Oferecer/Cotar e qual é a sua importância.\n2. Comenta qual é o objetivo principal na inspeção Oferecer/cotar:  Cria uma proposta de viagem associada à necessidade do cliente.\n3. Desenvolve como é feito a oferta, cada un dos atributos dos nossos produtos e serviços associando-os a cada uma das necessidades do cliente.\n4. Mostra como cada un dos argumentos de venda de cada un dos produtos vai se desenvolvendo.\nRoll playing (10 min):\n - O instrutor convida os alunos a participar nos roll playing dispostos para exercitar a realização de como se oferece vinculando os atributos con as necessidades do cliente.\n - Vai entregando feedback aos participantes e reforçando os elementos (assegurar unir a “oferta” do produto à necessidade expressada pelo cliente).",
    "tiempo": "1:30:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Atividade",
    "tema": "Roll playing integrales",
    "detalhe": "ATIVIDADE - Roll playing : \n - O instrutor convida os alunos a participar nos roll playing dispostos para exercitar a persuadir o cliente. \n- Vai entregando feedback aos participantes e reforçando os elementos.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Encerramento",
    "tema": "Recapitulação/Encerramento.",
    "detalhe": "O instrutor:\n1. Recapitula os pontos principais e críticos de cada una das 4 etapas vistas.\n2. Faz o encerramento, despedindo-se e convidando-os para participar amanhã para a etapa seguinte.",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Abertura",
    "tema": "Boas-vindas e Revisão",
    "detalhe": "Boas-vindas:\nO instrutor realiza as boas-vindas para un novo dia de conhecimentos.\nRevisão:\nO instrutor faz perguntas para repassar e reforçar os temas desenvolvidos no dia anterior.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Agenda",
    "tema": "Agenda",
    "detalhe": "O instrutor comenta:\n - O objetivo do curso dia 2.\n - A agenda de trabalho programada para o dia 2.",
    "tiempo": "0:05:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Etapa 4: Gestão de objeções",
    "tema": "Gestão de objeções.",
    "detalhe": "O instrutor usa o ppt como apoio:\n1 - Mostra qual é o objetivo principal da gestão das objeções: É o persuadir o cliente, convencê-lo de comprar nosso produto.\n2 - Desenvolve as principais objeções apresentadas pelo cliente e a forma de abordá-la persuadindo a sua decisão.\n3 - Desenvolve como se gerencia e se persuade utilizando a argumentação para rebater as objeções do cliente. \n4- Usa, analisando cada un dos argumentos contidos no Manual de Gestão de objeções do executivo.",
    "tiempo": "1:30:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Etapa 5: Fechamento da venda",
    "tema": "Fechamento da venda",
    "detalhe": "O instrutor usa o ppt como apoio:\nDesenvolve como se realiza as boas-vindas, abordando todos os pasos ideais para assegurar que o cliente se sinta acolhido.\nMostra cada un dos elementos que devem estar presentes nas boas-vidas.",
    "tiempo": "1:30:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Etapa 6: Acompanhamento",
    "tema": "Acompanhamento",
    "detalhe": "O instrutor baseado no ppt:\n1- Mostra todos os pormenores para realizar o acompanhamento de un cliente, con o objetivo de realizar o fechamento efetivo da venda.\n2 - Desenvolve cada parte que compõe o acompanhamento.",
    "tiempo": "0:40:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Etapa 7: Reserva ",
    "tema": "Reserva",
    "detalhe": "O instrutor usa o ppt como apoio:\n1. Explica cada un dos elementos que devem estar presentes no proceso de realização de uma reserva. \n2. Comenta qual é o objetivo principal na inspeção Reservas:  Entrega todos elementos relevantes que compõe a viagem do cliente.",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Etapa 8: Pagamento",
    "tema": "Pagamento",
    "detalhe": "O instrutor usa o ppt como apoio:\n1. Explica cada un dos elementos que devem estar presentes no proceso de pagamento dos produtos e serviços adquiridos.\n2. Comenta qual é o objetivo principal da etapa de pagamento:  Ressalta a segurança que a companhia oferece nas formas de pagamento utilizadas pelo cliente e as facilidades de pagamento.",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Etapa 9: Despedida",
    "tema": "Despedida",
    "detalhe": "O instrutor usa o ppt como apoio:\n1. Explica cada un dos elementos que devem estar presentes na despedida con o cliente.\n2. Comenta qual é o objetivo principal na despedida:  Fidelizar nossos clientes e assegurar que conosco eles tem uma experiência única e diferenciada.",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Atividade",
    "tema": "Roll playing",
    "detalhe": "ATIVIDADE - Roll playing : \n - O instrutor convida os alunos a participar nos roll playing dispostos para exercitar a persuadir o cliente. \n- Vai entregando feedback aos participantes e reforçando os elementos.",
    "tiempo": "0:30:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  },
  {
    "macroTema": "Encerramento",
    "tema": "Recapitulação/Atividade Final",
    "detalhe": "O instrutor:\n1. Recapitula os pontos principais ou críticos de cada una das 3 etapas vistas.\n2. Pede para que participem nesta recapitulação.\n3. Faz o encerramento, despedindo-se e convidando-os para participar amanhã para a etapa seguinte.",
    "tiempo": "0:10:00",
    "herramientas": [
      {
        "tipo": "🖼️ PPT",
        "url": "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link"
      }
    ],
    "iaPic": []
  }
]
    }
  ],
  materiais: [],
  evalKon: [],
  evalAec: [{ label: "Forms AEC", url: "https://forms.gle/CkUwWV9wv41TpWfr9" }],
  evalMsg: 'Os alunos que não atingirem a média final de 80% devem realizar o "Ajuste de Rota" - Avaliação de recuperação e somente após a aprovação realizar os testes de acessos.\nDuração: 30 min'
};

export const ONBOARDING_EMPTY = { secciones: [] };

export const ONBOARDING_VENDAS_DATA = {
  secciones: [
    {
      label: 'CONHECENDO UNIVERSO CUSTOMER CARE',
      tipo: 'mision1',
      rows: [
        {
          macroTema: "Onboarding LATAM",
          tema: "1. Boas Vindas",
          detalhe: "- Instrutor se apresenta, fala dos acordos, mostra a agenda, dá as Boas Vindas.\n- Explica formato e regras do curso.\n- Passa link do ebook e explica que poderão usar como apoio durante o treinamento.",
          tiempo: "0:10:00",
          herramientas: [{ tipo: "ðŸŽ¬ PPT (Ebook)", url: "https://docs.google.com/presentation/d/1UuBxBNcUwg3ntSnRbgaz-sv7eLLEST5qxosXunsX2Qk/edit?slide=id.p4#slide=id.p4" }],
          iaPic: []
        },
        {
          macroTema: "Onboarding LATAM",
          tema: "2. Conheça a LATAM",
          detalhe: "- Instrutor apresenta vídeo e ao finalizar realiza atividade para resgatar com os alunos os principais tópicos:\n1. Propósito LATAM e Contact Center\n2. Cultura: Quais são as 9 Guias?",
          tiempo: "0:20:00",
          herramientas: [{ tipo: "ðŸŽ¬ Vídeo", url: "https://drive.google.com/file/d/17dlokxRynxeBujgDMC3qXzTc_lMmUtHH/view?usp=drive_link" }],
          iaPic: []
        },
        {
          macroTema: "Onboarding LATAM",
          tema: "3. Jornada do cliente",
          detalhe: "- Instrutor apresenta vídeo da Jornada do Cliente e comenta ao final.",
          tiempo: "0:10:00",
          herramientas: [{ tipo: "ðŸŽ¬ Video", url: "https://drive.google.com/file/d/10tlpK6jMF-d8Uil-Yp8pIVgbiA3iAmhf/view?usp=drive_link" }],
          iaPic: []
        },
        {
          macroTema: "Onboarding LATAM",
          tema: "4. Modelo de Atendimento",
          detalhe: "- Instrutor apresenta PPT explicando como estamos estruturados no Contact Center.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "ðŸŽ¬ PPT", url: "https://docs.google.com/presentation/d/1UuBxBNcUwg3ntSnRbgaz-sv7eLLEST5qxosXunsX2Qk/edit?slide=id.g386b9c102cc_0_0#slide=id.g386b9c102cc_0_0" }],
          iaPic: []
        },
        {
          macroTema: "Onboarding LATAM",
          tema: "5. Programa Guardiões",
          detalhe: "- Instrutor passa vídeo do Programa Guardiões e ao final faz actividad de Resgate preguntando aos agentes: \n- O que é o programa Guardiões?\n- Qual o seu papel como Guardião?\n- Quais os pilares do nosso atendimento?",
          tiempo: "0:10:00",
          herramientas: [{ tipo: "ðŸŽ¬ Vídeo", url: "https://drive.google.com/file/d/1fQjKyMaaUgA9PVbWOO7eZhIqGtqY7car/view?usp=drive_link" }],
          iaPic: []
        },
        {
          macroTema: "Onboarding LATAM",
          tema: "Resumo do dia",
          detalhe: "- Instrutor aplica atividade com resumo dos principales temas do Onboarding",
          tiempo: "0:10:00",
          herramientas: [{ tipo: "ðŸŽ® Educaplay", url: "https://www.educaplay.com/learning-resources/27210988-latam_customer_care_onboarding_quiz.html" }],
          iaPic: []
        },
        {
          macroTema: "Onboarding LATAM",
          tema: "Universo Customer Care & Sales",
          detalhe: "- Instrutor passa vídeo contextualizando o Universo Customer Care.",
          tiempo: "0:05:00",
          herramientas: [{ tipo: "ðŸŽ¬ Video", url: "https://drive.google.com/file/d/1QwJtjhZ7qZ4_kMbeY3_BPPzfNeZMyH4l/view?usp=drive_link" }],
          iaPic: []
        }
      ]
    },
    {
      label: 'IMERSÃO',
      tipo: 'imersao',
      rows: [
        {
          macroTema: "Imersão Operacional Estratégica 1",
          tema: "Imersão Operacional Estratégica 1",
          detalhe: "Instrutor leva agentes até a operação para escuta de chamadas.",
          tiempo: "3:30:00",
          herramientas: [],
          iaPic: []
        },
        {
          macroTema: "Imersão Operacional Estratégica 1",
          tema: "Imersão Operacional Estratégica 1",
          detalhe: "Instrutor tira dúvidas referentes ao atendimento do dia.",
          tiempo: "1:00:00",
          herramientas: [],
          iaPic: []
        }
      ]
    }
  ]
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
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1UuBxBNcUwg3ntSnRbgaz-sv7eLLEST5qxosXunsX2Qk/edit?slide=id.p4#slide=id.p4" }],
          tiempo: "0:10:00"
        },
        {
          macroTema: "Onboarding LATAM",
          dia: 1,
          tema: "2. Conheça a LATAM",
          detalhe: "- Instrutor apresenta vídeo e ao finalizar realiza atividade para resgatar com os alunos os principais tópicos:\n1. Propósito LATAM e Contact Center\n2. Cultura: Quais são as 9 Guias?",
          herramientas: [{ tipo: "ðŸŽ¬ Video", url: "https://drive.google.com/file/d/17dlokxRynxeBujgDMC3qXzTc_lMmUtHH/view?usp=drive_link" }],
          tiempo: "0:20:00"
        },
        {
          macroTema: "Onboarding LATAM",
          dia: 1,
          tema: "3. Jornada do cliente",
          detalhe: "- Instrutor apresenta vídeo da Jornada do Cliente e comenta ao final.",
          herramientas: [{ tipo: "ðŸŽ¬ Video", url: "https://drive.google.com/file/d/10tlpK6jMF-d8Uil-Yp8pIVgbiA3iAmhf/view?usp=drive_link" }],
          tiempo: "0:10:00"
        },
        {
          macroTema: "Onboarding LATAM",
          dia: 1,
          tema: "4. Modelo de Atendimento",
          detalhe: "- Instrutor apresenta PPT explicando como estamos estruturados no Contact Center.",
          herramientas: [{ tipo: "🖼️ Slide", url: "https://docs.google.com/presentation/d/1UuBxBNcUwg3ntSnRbgaz-sv7eLLEST5qxosXunsX2Qk/edit?slide=id.g386b9c102cc_0_0#slide=id.g386b9c102cc_0_0" }],
          tiempo: "0:05:00"
        },
        {
          macroTema: "Onboarding LATAM",
          dia: 1,
          tema: "5. Programa Guardiões",
          detalhe: "- Instrutor passa vídeo do Programa Guardiões e ao final faz actividad de Resgate preguntando aos agentes: \n- Â¿Qué es el programa Guardiões?\n- Â¿Cuál es su papel como Guardião?\n- Â¿Cuáles son los pilares de nuestra atención?",
          herramientas: [{ tipo: "ðŸŽ¬ Video", url: "https://drive.google.com/file/d/1fQjKyMaaUgA9PVbWOO7eZhIqGtqY7car/view?usp=drive_link" }],
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
          herramientas: [{ tipo: "ðŸŽ¬ Video", url: "https://drive.google.com/file/d/1QwJtjhZ7qZ4_kMbeY3_BPPzfNeZMyH4l/view?usp=drive_link" }],
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

export const POS_VENTA_1_DATA = {  "texture": "GAS",

  "label": "POS VENTA 1",
  "color": "#7000ab",
  "evalKon": [
    {
      "label": "AJUSTE DE ROTA: KON",
      "url": "https://forms.gle/Q35xvUmxyYXGd6mg7"
    }
  ],
  "evalAec": [
    {
      "label": "AJUSTE DE ROTA: AeC",
      "url": "https://docs.google.com/forms/d/e/1FAIpQLSfszwfMn6jVPGhNIKCxy_YcMLnG_N0GR8yqd5NMV7FWLYYU_Q/viewform"
    }
  ],
  "evalMsg": "Os alunos que não atingirem a média final de 80% devem realizar o \"Ajuste de Rota\" - Avaliação de recuperação e somente após a aprovação realizar os testes de acessos.\n\nDuração: 30 min",
  "secciones": [
    {
      "tipo": "mision1",
      "label": "1: ALTERAÇÕES VOLUNTÃRIAS A360",
      "rows": [
        {
          "macroTema": "Introdução ",
          "tema": "Introdução ao Pós Venda I",
          "detalhe": "- Instrutor conhece a turma e explica o conteúdo do curso.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "Política de modificação de bilhetes (Conceitos)",
          "detalhe": "- Instrutor mostra no PIC onde localizar o capítulo: \"Remarcações Voluntárias\"",
          "tiempo": "0:10:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "Video introdutório Reemissão A360",
          "detalhe": "- Instrutor apresenta vídeo.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Condições para Reemissão\"",
          "detalhe": "- Instrutor realiza explicação da definição e Alterações voluntárias que NÃO são cobertas pelo Agente 360. Em seguida separa a sala em 4 grupos. Divide temas para cada e pede para que leiam o PIC e façam um resumo conforme divisão a seguir: Grupo 1 Mudanças através do A360 Passagens disponíveis para mudanças Grupo 2 Considerações para remarcações Mudar para outro passageiro Fluxo: Postergação con No Show pelo Código do Consumidor PE. Grupo 3 Cotação para remarcação Política de cotação, de acordo com a seção a ser modificada: Política de seleção tarifária conforme condição REF/NONREF (exceto mudar para outro passageiro): Grupo 4 Política de taxas de alterações Concluir a reemissão Informações Adicionais Tempo de leitura e resumo: 10 min Tempo de apresentação dos principais tópicos: 5 min por grupo. - Instrutor complementa e corrige, fazendo perguntas que instiguem os alunos a pensar.",
          "tiempo": "0:45:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "\"Atividade \"\"Guerra nas Estrelas\"\" Alterações\"",
          "detalhe": "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido - Instrutor envia link EducaPlay e explica tipo e tempo de (acordo com cronograma) para praticarem Vale ressaltar que é possível jogar mais de uma vez, caso terminem antes do prazo.",
          "tiempo": "0:20:00",
          "herramientas": [
            {
              "tipo": "Educaplay",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "\"Atividade \"\"Relatório de Exploração\"\" Conceitos de Tarifa \"",
          "detalhe": "- Instrutor mostra no PIC onde localizar o tema Tarifas.",
          "tiempo": "0:05:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "\"Atividade \"\"Relatório de Exploração\"\" Conceitos de Tarifa \"",
          "detalhe": "- Instrutor direciona os alunos para página de tarifas no PIC e projeta as perguntas, realizando a batalha entre grupos. 1. Quantos tipos de rota existem? 2. O que é rota regional? 3. O que é rota nacional? 4. O que é rota long haul? 5. O que é acordo MITA? 6. Qual é a prioridade ao realizar uma cotação para garantir a tarifa más baixa? 7. Por que é importante privilegiar o maior número de milhas online da Holding LATAM na cotação? 8. O que caracteriza uma tarifa pública? 9. Qual a diferencia entre tarifas online e tarifas off-line? - Instrutor corrige e complementa sempre que necessário.",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "\"PPT\"",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "Isenção de taxa de serviço",
          "detalhe": "- Instrutor relembra os casos de reemissão que a taxa de serviço deve ser isenta.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "\"Atividade \"\"Ajuste de Rota com o Navegador\"\" Alterações\"",
          "detalhe": "- Instrutor mostra o flujo Pós Venda 1 de \"Remarcações Voluntárias\" no PIC. - Instrutor cria uma ordem previamente e pede para um aluno vir até a mesa e demonstrar uma reemissão voluntária. - Instrutor simula ser o pax e pede as alterações. Agente deverá aplicar as perguntas da guia do agente para determinar se a ordem pode ser remarcada pelo Agente 360 e em seguida processar a reemissão solicitada pelo (PAX) no A360 TRN. - Instrutor reforça a importancia de reconfirmar os dados da reserva con o cliente antes de emitir ou alterar cualquier reserva utilizando o protocolo correspondente â€œSr(a). XXX a alteração solicitada foi feita con sucesso para o voo LAXXX para a data XX e para sua comodidade, estou a sua disposição para realizar o check-in de seu voo. Obrigado(a) por escolher a LATAM e desejo uma boa viagem.â€",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "\"Atividade \"\"Controle de Voo e Lançamento\"\" Reemissões com Split\"",
          "detalhe": "- Instrutor orienta os agentes a realizarem os ejercicios propostos no PPT Em formato de simulação (Agente x Pax), utilizando os protocolos correspondentes, de acordo con o PPT. Genially con 1 ejercicio de cada, caso sobre tempo, o instrutor pode propor os mesmos ejercicios alterando rotas.",
          "tiempo": "0:10:00",
          "herramientas": [
            {
              "tipo": "\"PPT\"",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "\"Atividade \"\"Controle de Voo e Lançamento\"\" Agente 360 Reemissão sem saldo a favor\"",
          "detalhe": "- Instrutor orienta os agentes a realizarem os ejercicios propostos no PPT Em formato de simulação (Agente x Pax), utilizando os protocolos correspondentes, de acordo con o PPT. Genially con 1 ejercicio de cada, caso sobre tempo, o instrutor puede propor os mesmos ejercicios alterando rotas.",
          "tiempo": "0:10:00",
          "herramientas": [
            {
              "tipo": "\"PPT\"",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "\"Atividade \"\"Controle de Voo e Lançamento\"\" Agente 360 Reemissão com saldo a favor\"",
          "detalhe": "- Instrutor orienta os agentes a realizarem os ejercicios propostos no PPT Em formato de simulação (Agente x Pax), utilizando los protocolos correspondentes, de acordo con o PPT. Genially con 1 ejercicio de cada, caso sobre tempo, o instrutor pode propor os mesmos ejercicios alterando rotas.",
          "tiempo": "0:10:00",
          "herramientas": [
            {
              "tipo": "\"PPT\"",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "\"Atividade \"\"Relatório de Exploração\"\" Agências de Viagens - considerações para reemissões voluntárias\"",
          "detalhe": "- Instrutor mostra a Matriz de serviço para passageiros de agência. - Instrutor mostra onde está o tema no PIC e relembra aos alunos como identificar origem de uma ordem no A360. Na sequência, faz as seguintes perguntas: 1. O que deve ser feito con os contatos de reserva ao gerenciar alterações em una reserva de agência? 2. O que deve ser informado ao passageiro ao fazer una alteração em um ticket de agência? 3. Podemos reemitir um bilhete de agência sem ter acesso à ordem? (Não) 4. Devemos cobrar taxa de servicio nestes casos? (Sim) 5. Podemos derivar o passageiro para a agência em casos de reemissão Invol? (Não)",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "\"Jornada pelo Universo do Conhecimento \"\"Reemissão Vol\"\"\"",
          "detalhe": "- Instrutor pede para los alunos abrirem o link e realizarem a avaliação",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "\"Forms KON Forms AeC\"",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações Voluntárias A360",
          "tema": "Correção Avaliação",
          "detalhe": "- Instrutor corrige a avaliação",
          "tiempo": "0:05:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision2",
      "label": "2: ALTERAÇÕES INVOLUNTÃRIAS A360",
      "rows": [
        {
          "macroTema": " Alterações Involuntárias",
          "tema": "\"Atividade \"\"Relatório de Exploração\"\" Definição Proteção de passageiros \"",
          "detalhe": "- Instrutor mostra o camino de como localizar o tema no PIC realiza a explicación da definición e soluciones de viagens que NÃO são cobertas pelo Agente 360. Em seguida pede para os alunos lerem os subtemas Considerações e Identificación de una mudança involuntária e fazerem um breve resumo dos puntos observados. (10 min) - Após leitura, instrutor realiza perguntas direcionadas pedindo para o agente que responder, mostrar onde achou a información: 1. Se o cliente não quiser as opções de viagem oferecidas, podemos ofertar outras? 2. O cliente pode realizar a alteração através do site? 3. Caso ele não consiga, podemos realizar a alteração pra ele? 4. Como podemos reconhecer no Agente 360 se o cliente modificou ou não eu bilhete através do site? 5. Quais tipos de reemissão involuntária que NÃO podem ser realizadas através do Agente 360? 6. Qual a diferencia entre janela comercial e operacional? 7. Cite ejemplos de contingências â€œCOM RESPONSABILIDADE LATAMâ€ 8. Cite ejemplos de contingências â€œSEM RESPONSABILIDADE LATAMâ€ Instrutor complementa e corrige. - Instrutor informa que as soluciones de viagens que NÃO são cobertas pelo Agente 360, são tratadas pela equipe Pós Venda II, pois são gestionadas pelas nossas herramientas backup. - Instrutor também apresenta no PIC o proceso de solicitação do documento \"Declaração de Contingência\" (Somente Brasil).",
          "tiempo": "0:35:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": " Alterações Involuntárias",
          "tema": "\"Atividade \"\"Ajuste de Rota con o Navegador\"\" Fluxo Remarcações Involuntárias\"",
          "detalhe": "- Instrutor mostra o camino para abrir o flujo de remarcações involuntárias (visão do agente). - Instrutor pede a um aluno que venha até a mesa e mostre a guia do agente con as perguntas para determinar se a remarcação pode ser feita pelo agente 360 e apresentar o flujo de reemissão. - Instrutor explica que ese tipo de reemissão não poderá ser praticada em ambiente A 360 TRN. - Instrutor informa que serão passadas informações complementares quando entrarem na gestão por herramientas Backup.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": " Alterações Involuntárias",
          "tema": "\"Atividade \"\"Ajuste de Rota con o Navegador\"\" Resolução 218 ANAC sobre a percentagem de cancelamentos\"",
          "detalhe": "- Instrutor pede para um aluno ir até a sua mesa e acessar o PIC, explicar as considerações e entrar no site da ANAC para fazer una simulación. - Instrutor faz una simulación como se fosse un cliente questionando sobre um voo específico.",
          "tiempo": "0:20:00",
          "herramientas": [
            {
              "tipo": "Site Anac",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": " Alterações Involuntárias",
          "tema": "Gastos Incorridos",
          "detalhe": "- Instrutor explica definición de Gastos Incorridos e destaca a importancia antes de iniciar o proceso, deve-se consultar o status da contingência de voo nas herramientas SIGA e painel de Auto consulta de voos - Instrutor separa os subtemas abaixo e pede para os alunos de dividirem em grupos para fazerem um breve resumo de cada tema: Tempo: 05 min TEMAS: Gastos que não poderão ser reembolsados: Tipo de comprovantes aceitos Dados mínimos obrigatórios que os comprovantes devem incluir: Reembolso de gastos incurridos Tempos de atraso do voo para a gestão de gastos incorridos Valores conforme o tipo de gasto Condicões específicas por país - Consultar Brasil - Instrutor de forma aleátoria pede para una pessoa do grupo apresentar o resumo feito pelo grupo: Tempo: 15 minutos - Em seguida instrutor mostra na prática como fazer a consulta do recebimento dos servicios básicos na herramienta Guia de Gastos Incorridos e Servicios básicos. - Em seguida onde fazer a consulta no painel de Consulta Contingências.",
          "tiempo": "0:40:00",
          "herramientas": [
            {
              "tipo": "DOCS/ Briefing",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": " Alterações Involuntárias",
          "tema": "Exercícios",
          "detalhe": "- Instrutor aplica ejercicios propostos no PPT.",
          "tiempo": "0:45:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": " Alterações Involuntárias",
          "tema": "Compensações",
          "detalhe": "- Instrutor mostra no PIC os casos em que o agente poderá entregar compensación através do A360: Fluxo compensação por hotel na janela comercial Fluxo Proteção Devido a Mudança de Aeronave (Downgrade do cabine)",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Resumo",
          "tema": "Resumo do dia anterior",
          "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior. Dica: Pode utilizar sites como Mentimeter para chuva de ideias ou escribir directamente em um flipchart ou cuadro os temas.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "\"\"\"Jornada pelo Universo do Conhecimento\"\" Reemissão Invol\"",
          "detalhe": "- Instrutor pede para los alunos abrirem o link e realizarem a avaliação",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "\"Forms KON Forms AeC\"",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Correção Avaliação",
          "detalhe": "- Instrutor corrige a avaliação",
          "tiempo": "0:10:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision3",
      "label": "3: EXCEÇÃ•ES A360",
      "rows": [
        {
          "macroTema": "Exceções",
          "tema": "Introdução Exceções",
          "detalhe": "- Instrutor dá una breve introdução do que é una Exceção e apresenta capítulo correspondente às Exceções A360 no PIC, explicando o paso a paso.",
          "tiempo": "0:15:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Exceções",
          "tema": "Generalidades e Guia de Exceções às Políticas Comerciais",
          "detalhe": "- Instrutor realiza um resumo de cada tipo de exceção de acordo con cada tabela do GUIA.",
          "tiempo": "0:35:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Exceções",
          "tema": "Correção de Nome ",
          "detalhe": "- Instrutor mostra paso a paso para realizar exceção, mostra tabela e explica o flujo.",
          "tiempo": "0:35:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Exceções",
          "tema": "Video Introdutório Exceções A360",
          "detalhe": "- Instrutor apresenta Video",
          "tiempo": "0:10:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Exceções",
          "tema": "\"Atividade \"\"Ajuste de Rota con o Navegador\"\" Exceção através do Agente 360  \"",
          "detalhe": "- Instrutor propõe que um aluno vá até sua mesa para demonstrar a exceção seguindo paso a paso PIC. Aluno deve utilizar protocolo respectivo: Senhor /Senhora. Vamos iniciar o proceso de exceção, portanto, se a chamada for cortada, é importante que você entre em contato conosco o quanto antes para que possamos gerenciar a exceção e evitar alteración na diferencia da tarifa a pagar.",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Exceções",
          "tema": "\"Atividade \"\"Relatório de Exploração\"\" Exceções\"",
          "detalhe": "- Instrutor projeta perguntas abertas e na sequência perguntas de alternativa e propõe batalha entre grupos. - O grupo que souber a respuesta se manifesta. Explica e mostra onde encontrou a información e marca punto. - O grupo que marcar más puntos vence.",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Exceções",
          "tema": "\"Jornada pelo Universo do Conhecimento \"\"Exceções\"\"\"",
          "detalhe": "- Instrutor aplica avaliação de Exceções.",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "\"Forms KON Forms AeC\"",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Exceções",
          "tema": "Correção Avaliação",
          "detalhe": "- Instrutor corrige a avaliação",
          "tiempo": "0:05:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision4",
      "label": "4: DEVOLUÇÃ•ES",
      "rows": [
        {
          "macroTema": "Introdução Devoluções A360",
          "tema": "Introdução",
          "detalhe": "- Instrutor dá una breve introdução do que é una devolução e apresenta capítulo correspondente no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Introdução Devoluções A360",
          "tema": "Video introdutório Devoluções A360",
          "detalhe": "- Instrutor apresenta Video.",
          "tiempo": "0:10:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Matriz ",
          "tema": "Matriz de Atendimento",
          "detalhe": "- Instrutor mostra Matriz de Atendimento focado nos temas de Devoluções. E mostra algunos ejemplos de FCR e de derivação ao DT Devoluções. Explica sobre a área especialista chamada DT Devoluções",
          "tiempo": "0:10:00",
          "herramientas": [
            {
              "tipo": "Matriz",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Resumo",
          "tema": "Resumo do dia anterior",
          "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.",
          "tiempo": "0:10:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "\"Atividade \"\"Ajuste de Rota con o Navegador\"\" Devoluções no Agente 360 \"",
          "detalhe": "- Instrutor mostra no PIC o camino para localizar o tema. - Instrutor chama um aluno para que seja o agente e ele como pax solicita o reembolso. Agente deve procesar no TRN con base no paso a paso PIC. - Instrutor explica as considerações através do PIC.",
          "tiempo": "0:25:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "\"Atividade \"\"Controle de Voo e Lançamento\"\" Devoluções no Agente 360\"",
          "detalhe": "- Instrutor pasa os ejercicios propostos no PPT. - Alunos devem simular situações em dupla, utilizando os protocolos pertinentes.",
          "tiempo": "0:15:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "Solicitação de reembolso de tickets Comerciais",
          "detalhe": "- Instrutor mostra flujo correspondente resumindo o proceso realizado via A360.",
          "tiempo": "0:15:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "Visualizador de reembolso",
          "detalhe": "- Instrutor mostra checklist para identificar status através do Agente 360 e as 5 posibilidades de status que aparecen no visualizador.",
          "tiempo": "0:15:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "Cash In falhou",
          "detalhe": "- O instrutor explica o flujo para o caso Reclamações por cobranças.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "Compra com dinheiro retido na Wallet",
          "detalhe": "- O instrutor explica o flujo para Compra con dinero retido na Wallet",
          "tiempo": "",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "\"Atividade \"\"Relatório de Exploração\"\" Devoluções\"",
          "detalhe": "- Divide a sala em 2 grupos e projeta perguntas. - Quem levantar a mão primeiro, responder e estiver correto, o grupo pontua. - Instrutor pasa para a próxima. - O grupo que responder mais perguntas corretas, é o ganhador.",
          "tiempo": "0:25:00",
          "herramientas": [
            {
              "tipo": "\"PPT\"",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "COMPENSAÇÃ•ES - Fluxos de criação de Travel Vouchers",
          "detalhe": "- Instrutor explica o que é una compensación e que em algunos casos é necesario criar Travel Voucher e mostra no PIC onde encontrar os links para revisar os fluxos de cada una das situações.",
          "tiempo": "0:10:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "Compensação para passageiros afetados com origem EC, PE e CO.",
          "detalhe": "- Instrutor explica que podem chegar chamadas de passageiros brasileiros que têm voos con origen nestes países, e que nestes casos os agentes devem se atentar às regras dispostas nos capítulos correspondentes e seguir os fluxos de creación de caso no A360.",
          "tiempo": "0:05:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "Compensação para passageiros afetados con origen EC, PE e CO.",
          "detalhe": "- Instrutor apresenta Fluxo",
          "tiempo": "0:05:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "Compensação para passageiros afetados com origem na Europa",
          "detalhe": "- Instrutor explica que podem chegar chamadas de passageiros brasileiros que têm voos con origen nestes países, e que nestes casos os agentes devem se atentar às regras dispostas nos capítulos correspondentes e seguir os fluxos de creación de caso no A360.",
          "tiempo": "0:05:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções A360",
          "tema": "Compensação para passageiros afetados com origem na Europa",
          "detalhe": "- Instrutor apresenta Fluxo",
          "tiempo": "0:05:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Compensações",
          "tema": "Solicitação de criação de Travel Voucher (compensação de aeroporto)",
          "detalhe": "- Instrutor revisa sobre a área especialista chamada DT Devoluções e que para algunas situaciones se faz necesario derivar via chamada ou caso (a depender do flujo). - Instrutor mostra flujo correspondente.",
          "tiempo": "0:05:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Compensações",
          "tema": "Reverter Travel Voucher (mudança de Status)",
          "detalhe": "- Instrutor mostra flujo correspondente.",
          "tiempo": "0:02:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Compensações",
          "tema": " Erros nos processos de devolução de tickets com FOP BT",
          "detalhe": "- Instrutor mostra flujo correspondente.",
          "tiempo": "0:03:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Web  Devoluções",
          "tema": "Video introdutório WebDevoluções",
          "detalhe": "- Instrutor apresenta Video",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Web  Devoluções",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Devoluções no Web Devoluções \"",
          "detalhe": "- Instrutor mostra capítulo de reembolso e pede para que os alunos façam resumo dos temas: 1.QUANDO INGRESSAR UMA DEVOLUÇÃO ATRAVÉS DA WEB DEVOLUÇÃ•ES (TRACK ID) 2. DEVOLUÇÃO ATRAVÉS DA WEB DEVOLUÇÃ•ES 3. PRAZOS E FORMAS DE PAGAMENTO DO REEMBOLSO 4. CASOS ESPECIAIS DE DEVOLUÇÃO 5. CONSULTA DE STATUS DE UM REEMBOLSO 6.CASO ESPECIAL: DEVOLUÇÃO PROATIVA DE PASSAGEIROS NO SHOW NO CHILE Após 5 minutos pede para que 1 aluno comente suas considerações do item 1 (complementa se necesario) e pede para o aluno escolher um colega para expor o resumo do item 2 (complementa se necesario). - Instrutor explica o flujo de devolução disponible neste capítulo.",
          "tiempo": "0:45:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Web  Devoluções",
          "tema": "Solicitação de reembolso de tickets Comerciais",
          "detalhe": "- Instrutor mostra flujo correspondente, via webdevoluções.",
          "tiempo": "0:10:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Web  Devoluções",
          "tema": "Reembolso EMD",
          "detalhe": "- Instrutor explica como realizar devolução EMD",
          "tiempo": "0:10:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Simulador",
          "tema": "Simulador",
          "detalhe": "- Instrutor orienta alunos a realizarem simulação da herramienta.",
          "tiempo": "0:25:00",
          "herramientas": [
            {
              "tipo": "PN",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Web  Devoluções",
          "tema": "Reembolso por direito a devolução e desistência",
          "detalhe": "- Instrutor explica procedimiento de Reembolso por direito a devolução e desistência.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Resumo",
          "tema": "Resumo do dia anterior",
          "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.",
          "tiempo": "0:10:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Web  Devoluções",
          "tema": "\"Atividade \"\"Ajuste de Rota con o Navegador\"\" Regras para devolução Involuntária\"",
          "detalhe": "- Instrutor mostra o camino no PIC e pede para um agente ir até a sua mesa e revisar as consideraciones para devolução involuntária e mostrar o flujo no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Web  Devoluções",
          "tema": " Devoluções Involuntárias por regulamento DOT (NOVOZ)",
          "detalhe": "- Instrutor explica que esa demanda cairá caso o agente esteja realizando atendimento via chat ou Whatsapp e como ele deve proceder para solucionar o pedido do cliente.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Web  Devoluções",
          "tema": " Devoluções Involuntárias por regulamento DOT (NOVOZ)",
          "detalhe": "- Instrutor mostra flujo correspondente.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Web  Devoluções",
          "tema": "\"Atividade \"\"Controle de Voo e Lançamento\"\" Staff Travel\"",
          "detalhe": "- Instrutor relembra o que é Staff Travel, questiona a turma \"Quem pode explicar o que é Staff Travel?\" Mostra o camino para localizar flujo devolução Staff Travel e elege 2 alunos para serem agentes e instrutor simula chamadas de pax (2 situaciones) para que o agente oriente de acuerdo con o flujo.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "\"Jornada pelo Universo do Conhecimento \"\"Devoluções\"\"\"",
          "detalhe": "- Instrutor pede para los alunos abrirem o link e realizarem a avaliação do módulo.",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "\"Forms KON Forms AeC\"",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Correção Avaliação",
          "detalhe": "- Instrutor corrige a avaliação",
          "tiempo": "0:10:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision5",
      "label": "5: RECLAMAÇÃ•ES A360",
      "rows": [
        {
          "macroTema": "Reclamações",
          "tema": "Definições e Conceitos",
          "detalhe": "- Instrutor enfatiza a diferencia entre solicitação e reclamação, (sempre deve ser entregue una solución ao cliente e a reclamação só será criada quando o cliente mencionar que é una reclamação).",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "Compensações",
          "detalhe": "- Instrutor explica o que são compensações e Travel Voucher.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "Reclamações por Agente 360",
          "detalhe": "- Instrutor explica a definición e os tipos de quebra de servicio. - Apresenta as generalidades e dá algunos ejemplos da tabela \"Tipos de quebras e motivos disponíveis no Agente 360\"",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "Video Introdutório Reclamações A360",
          "detalhe": "- Instrutor apresenta Video",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "\"Atividade \"\"Controle de Voo e Lançamento\"\" Reclamações Agente 360\"",
          "detalhe": "- Instrutor aplica atividade.",
          "tiempo": "0:25:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "\"Gerenciar una reclamação pelo A360\"",
          "detalhe": "- Instrutor mostra paso a paso para gerenciar reclamação através do A360.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "\"Gerenciar una reclamação pelo A360\"",
          "detalhe": "- Instrutor explica flujo \"Gestão de Reclamações",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "\"Atividade \"\"Controle de Voo e Lançamento\"\" Gerenciar reclamações no A360\"",
          "detalhe": "- Instrutor aplica atividade.",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "Resumo do dia anterior",
          "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior. Dica: Pode utilizar sites como Mentimeter para chuva de ideias ou escribir directamente em um flipchart ou cuadro os temas.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "\"Reclamações por cobranças\"",
          "detalhe": "Instrutor mostra fluxos de reclamação por cobrança: Cobrança em Duplicidade Regularização de Parcelas Compra não reconhecida pelo passageiro Cash in con falha",
          "tiempo": "0:40:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "Reclamações Casos LAE",
          "detalhe": "- Instrutor explica o que é LAE e menciona os cenários que devem ser escalados.",
          "tiempo": "1:00:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "Reclamações Legais",
          "detalhe": "- Instrutor explica o que são reclamações legais e explica brevemente a tratativa para Livro de Reclamações PE e consideraciones e flujo a ser seguido cuando o cliente solicita una gravação de chamada (FALE).",
          "tiempo": "0:25:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "\"Atividade \"\"Controle de Voo e Lançamento\"\" Outras Reclamações\"",
          "detalhe": "- Instrutor aplica atividade.",
          "tiempo": "0:25:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "Reclamações em voos operados por outras companhias aéreas (Delta/Iberia)",
          "detalhe": "- Instrutor mostra flujo.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "Reclamações de bagagem",
          "detalhe": "- Instrutor explica que reclamações sobre bagagem devem ser transferidas à equipe de Bagagens.",
          "tiempo": "0:05:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "Temas Legais - Resolução ANAC R400",
          "detalhe": "- Instrutor realiza leitura da R400 no site da Anac e reforça tema R400 con apoio do Briefing.",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "Site ANAC",
              "url": "https://docs.google.com/document/d/1kJlwwKS-toD_p-3tushEABjAjknNzgeMiNbtsrfsJ3Q/edit?tab=t.0#heading=h.epmwztdrm8ri"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "\"Atividade \"\"Guerra nas Estrelas\"\" Reclamações\"",
          "detalhe": "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido - Instrutor envia link EducaPlay e explica tipo e tempo de (acordo con cronograma) para praticarem Vale ressaltar que é posible jogar mais de una vez, caso terminem antes do prazo",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "Educaplay",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "\"Jornada pelo Universo do Conhecimento \"\"Reclamações\"\"\"",
          "detalhe": "- Instrutor aplica avaliação de Reclamações.",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "\"Forms KON Forms AeC\"",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "Correção Avaliação",
          "detalhe": "Instrutor corrige a avaliação",
          "tiempo": "0:10:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "ojt",
      "label": "DESAFIO OJT",
      "rows": [
        {
          "macroTema": "Imersão Operacional Estratégica 2",
          "tema": "Desafio: Imersão Operacional Estratégica 2",
          "detalhe": "Instrutor entra no Genesys e faz escuta de 1 chamada com a turma dentro da sala. Após finalizada a chamada, comenta sobre os pontos positivos / negativos da chamada e principais indicadores.",
          "tiempo": "1:00:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Imersão Operacional Estratégica 2",
          "tema": "Desafio: Imersão Operacional Estratégica 2",
          "detalhe": "Instrutor leva agentes até a operação para escuta de chamadas.",
          "tiempo": "4:00:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Imersão Operacional Estratégica 2",
          "tema": "Desafio: Imersão Operacional Estratégica 2",
          "detalhe": "Instrutor  tira dúvidas referentes ao atendimento do dia.",
          "tiempo": "0:40:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        }
      ]
    }
  ]
};

export const POS_VENTA_2_DATA = {  "texture": "CRATERS",

  "label": "POS VENTA 2",
  "color": "#7da81a",
  "secciones": [
    {
      "tipo": "mision1",
      "label": "1: VENDAS",
      "rows": [
        {
          "macroTema": "Ferramentas BU",
          "tema": "Video Introdutório Ferramentas Backup",
          "detalhe": "- Intrutor passa vídeo explicando quais são e suas funcionalidades",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "APEC",
          "tema": "Introdução - Funções APEC ",
          "detalhe": "- Instrutor pede para agentes identificarem no PIC quais situações eles usarão a ferramenta e comentarem. (Funcionalidades: Confirmação de lugares / Retomar lugares)",
          "tiempo": "0:05:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "APEC",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Retomar espaços\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo da funcionalidade. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Video Sabre Conceitos Básicos",
          "detalhe": "- Instrutor apresenta vídeo que introduz a maneira de se logar e conceitos de EPR e PCC.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Acessando o Sabre",
          "detalhe": "- Instrutor mostra para os alunos como se logar no ambiente Training e passa os EPRÂ´s de treinamento que serão utilizados.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Sabre",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Video Comandos básicos Sabre",
          "detalhe": "O instrutor apresenta vídeo que mostra comandos básicos do Sabre: como fazer login, alteração de cidade, Duty code, atribuição de impressora, logoff e as transações básicas (codificar, decodificar cidade, companhia aérea, horario, acordos OLA)",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Comandos Básicos Sabre\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo dos comandos básicos. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Video Disponibilidade e Itinerário",
          "detalhe": "- O instrutor apresenta o vídeo que ensina comandos para pesquisa de disponibilidade e criação de itinerário.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Venda e Itinerário\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo dos comandos básicos para venda. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Video Formas de Pagamento e PNR",
          "detalhe": "- O instrutor apresenta o vídeo que ensina comandos para inserir formas de pagamento e finalização de PNR.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Pagamento e PNR\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo dos comandos básicos. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Video Visualização PNR",
          "detalhe": "- O instrutor apresenta o vídeo que ensina comandos para visualizar PNR, campo 6 e histórico de alterações.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Visualização PNR\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo dos comandos básicos. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Video Cancelamento Itinerário",
          "detalhe": "- O instrutor apresenta o vídeo que ensina comandos para cancelar itinerário e PNR.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Cancelamento Itinerário\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo dos comandos básicos. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Video Reemissão de Bilhete",
          "detalhe": "- O instrutor apresenta o vídeo que ensina conceitos e comandos para reemissão de bilhete.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Reemissão de Bilhete\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo dos comandos básicos. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "GDS Sabre",
          "tema": "Hands ON Sabre",
          "detalhe": "- Instrutor orienta os alunos a realizarem no SABRE TRAINING fluxos de criação de PNR para fixação dos comandos.",
          "tiempo": "2:00:00",
          "herramientas": [
            {
              "tipo": "SABRE TRAINING",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Vendas",
          "tema": "Video Vendas Conceitos e Regras",
          "detalhe": "- O instrutor apresenta vídeo que ensina conceitos e regras de Vendas (Venda Antecipada, No show, Menor de Idade, Pet)",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Vendas",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Vendas\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo das regras de vendas. (5 min) - Instrutor elege um grupo para que um representante explique para los demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Zendesk",
          "tema": "Video Zendesk Visão Geral",
          "detalhe": "- Instrutor apresenta vídeo de como realizar a tratativa no Zendesk.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Zendesk",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Zendesk\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo da ferramenta. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Pagamento",
          "tema": "Video Meios de Pagamento",
          "detalhe": "- Instrutor apresenta vídeo sobre os meios de pagamento (Cartões, Pix, Dinheiro, etc)",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Pagamento",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Pagamento\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo dos meios de pagamentos. (5 min) - Instrutor elege un grupo para que un representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o paso a paso da herramienta no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Vendas",
          "tema": "Fluxo de Venda",
          "detalhe": "- Instrutor reforça o fluxo de venda (Sondagem, Oferta, Fechamento)",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Vendas",
          "tema": "Argumentação de Venda",
          "detalhe": "- Instrutor apresenta técnicas de argumentação e quebra de objeções.",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Vendas",
          "tema": "Role Play Vendas",
          "detalhe": "- Instrutor divide a sala em duplas para praticar o fluxo de vendas completo.",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "Role Play",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Zendesk",
          "tema": "Registro de Venda",
          "detalhe": "- Instrutor orienta os alunos a registrarem as vendas simuladas no Zendesk.",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "Zendesk",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Avaliação 1: ",
          "detalhe": "- Instrutor aplica avaliação teórica sobre os temas da 1: .",
          "tiempo": "0:45:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Correção Avaliação",
          "detalhe": "- Instrutor corrige a avaliação e tira dúvidas.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision2",
      "label": "2: ALTERAÇÕES VOLUNTÃRIAS",
      "rows": [
        {
          "macroTema": "Alterações",
          "tema": "Video Alterações Voluntárias",
          "detalhe": "- Instrutor apresenta vídeo sobre o que são alterações voluntárias e regras gerais.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Alterações Voluntárias\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo das regras. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Video Comandos Alteração Sabre",
          "detalhe": "- Instrutor apresenta vídeo com os comandos de alteração de voo no Sabre.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Comandos Alteração\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo dos comandos. (5 min) - Instrutor elege um grupo para que un representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o paso a paso da herramienta no PIC.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Video Reemissão Voluntária",
          "detalhe": "- Instrutor apresenta vídeo sobre como realizar a reemissão voluntária no Sabre.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Reemissão Voluntária\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo da reemissão. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "GDS Sabre",
          "tema": "Hands ON Alteração",
          "detalhe": "- Instrutor orienta os alunos a realizarem no SABRE TRAINING fluxos de alteração voluntária.",
          "tiempo": "2:00:00",
          "herramientas": [
            {
              "tipo": "SABRE TRAINING",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações",
          "tema": "Cálculo de Diferença Tarifa",
          "detalhe": "- Instrutor explica como realizar o cálculo manual de diferença de tarifa e taxas.",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Zendesk",
          "tema": "Registro Alteração",
          "detalhe": "- Instrutor orienta os alunos a registrarem as alterações simuladas no Zendesk.",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "Zendesk",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Avaliação 2: ",
          "detalhe": "- Instrutor aplica avaliação teórica sobre os temas da 2: .",
          "tiempo": "0:45:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Correção Avaliação",
          "detalhe": "- Instrutor corrige a avaliação.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision3",
      "label": "3: ALTERAÇÕES INVOLUNTÃRIAS",
      "rows": [
        {
          "macroTema": "Alterações",
          "tema": "Video Alterações Involuntárias",
          "detalhe": "- Instrutor apresenta vídeo sobre o que são alterações involuntárias e proteção de passageiros.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Alterações",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Alterações Involuntárias\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo das regras de proteção. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Video Reemissão Involuntária",
          "detalhe": "- Instrutor apresenta vídeo sobre como realizar a reemissão involuntária no Sabre (Involuntary Reroute).",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Reemissão Involuntária\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo do passo a passo. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "GDS Sabre",
          "tema": "Hands ON Proproteção",
          "detalhe": "- Instrutor orienta os alunos a realizarem no SABRE TRAINING fluxos de alteração involuntária e reacomodação.",
          "tiempo": "2:00:00",
          "herramientas": [
            {
              "tipo": "SABRE TRAINING",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Zendesk",
          "tema": "Registro Involuntário",
          "detalhe": "- Instrutor orienta os alunos a registrarem as proteções simuladas no Zendesk.",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "Zendesk",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Avaliação 3: ",
          "detalhe": "- Instrutor aplica avaliação teórica sobre los temas da 3: .",
          "tiempo": "0:45:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Correção Avaliação",
          "detalhe": "- Instrutor corrige a avaliação.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision4",
      "label": "4: EXCEÇÃ•ES",
      "rows": [
        {
          "macroTema": "Exceções",
          "tema": "Video Exceções e Autorizações",
          "detalhe": "- Instrutor apresenta vídeo sobre casos de exceção (Doença, Ã“bito, Erro de Emissão).",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Exceções",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Exceções\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo dos documentos necessários. (5 min) - Instrutor elege um grupo para que un representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o paso a paso da herramienta no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Fluxo",
          "tema": "Solicitação de Autorização",
          "detalhe": "- Instrutor explica o fluxo de solicitação via formulário ou central de autorizações.",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Zendesk",
          "tema": "Registro Exceção",
          "detalhe": "- Instrutor orienta os alunos a registrarem os casos de exceção no Zendesk.",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "Zendesk",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Avaliação 4: ",
          "detalhe": "- Instrutor aplica avaliação teórica sobre los temas da 4: .",
          "tiempo": "0:45:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Correção Avaliação",
          "detalhe": "- Instrutor corrige a avaliação.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision5",
      "label": "5: DEVOLUÇÃ•ES",
      "rows": [
        {
          "macroTema": "Devoluções",
          "tema": "Video Devoluções Regras",
          "detalhe": "- Instrutor apresenta vídeo sobre regras de reembolso (Voluntário e Involuntário).",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Devoluções",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Devoluções\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo das multas e prazos. (5 min) - Instrutor elege um grupo para que um representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o passo a passo da ferramenta no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "Video Comandos Reembolso Sabre",
          "detalhe": "- Instrutor apresenta vídeo com comandos para processar o reembolso no Sabre.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sabre",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Comandos Reembolso\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo dos comandos. (5 min) - Instrutor elege un grupo para que un representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o paso a paso da herramienta no PIC.",
          "tiempo": "0:30:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "BSPLink",
          "tema": "Reembolso via BSPLink",
          "detalhe": "- Instrutor explica o fluxo de reembolso via BSPLink para agências.",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Zendesk",
          "tema": "Registro Reembolso",
          "detalhe": "- Instrutor orienta os alunos a registrarem os reembolsos no Zendesk.",
          "tiempo": "0:30:00",
          "herramientas": [
            {
              "tipo": "Zendesk",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Avaliação 5: ",
          "detalhe": "- Instrutor aplica avaliação teórica sobre os temas da 5: .",
          "tiempo": "0:45:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Correção Avaliação",
          "detalhe": "- Instrutor corrige a avaliação.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision6",
      "label": "6: RECLAMAÇÃ•ES",
      "rows": [
        {
          "macroTema": "Reclamações",
          "tema": "Video Tratativa de Reclamações",
          "detalhe": "- Instrutor apresenta vídeo de como lidar con passageiros insatisfeitos e fluxos de compensação.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "\"Atividade \"\"Briefing de Missão\"\" Reclamações\"",
          "detalhe": "- Instrutor pede para que os alunos se dividam em grupo e façam um resumo dos níveis de compensação. (5 min) - Instrutor elege un grupo para que un representante explique para os demais da sala. - Instrutor pergunta se algum grupo quer complementar. - Instrutor pede para que outro representante explique o paso a paso da herramienta no PIC.",
          "tiempo": "0:20:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Zendesk",
          "tema": "Tratativa e Escalação",
          "detalhe": "- Instrutor simula tratativa de reclamação crítica e fluxo de escalação.",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "Zendesk",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "KPIs",
          "tema": "Impacto nos KPIs",
          "detalhe": "- Instrutor explica como as reclamações impactam o CSAT e NPS.",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Avaliação 6: ",
          "detalhe": "- Instrutor aplica avaliação teórica sobre os temas da 6: .",
          "tiempo": "0:45:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Correção Avaliação",
          "detalhe": "- Instrutor corrige a avaliação.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Avaliação Final",
          "detalhe": "- Instrutor aplica avaliação final de todo o conteúdo de Pós Venda.",
          "tiempo": "0:45:00",
          "herramientas": [
            {
              "tipo": "Forms",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Correção Avaliação",
          "detalhe": "Instrutor corrige a avaliação",
          "tiempo": "0:05:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Reclamações",
          "tema": "Encerramento Expedição",
          "detalhe": "- Instrutor passa vídeo de encerramento",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "landing",
      "label": "LANDING 2",
      "rows": [
        {
          "macroTema": "LANDING",
          "tema": "Palestra QM",
          "detalhe": "Equipe QM fábrica apresenta palestra",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "Material OS",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "LANDING",
          "tema": "Indicadores + PCA ",
          "detalhe": "- Instrutor passa vídeo sobre indicadores e apresenta PCA + Copilot",
          "tiempo": "2:20:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "LANDING",
          "tema": "Criticality Score",
          "detalhe": "- Instrutor passa video da Sofia sobre Criticality Score",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "LANDING",
          "tema": "Nomeação Guardiões",
          "detalhe": "- Instrutor relembra o que é o programa Guardiões com base no PPT. - Supervisor operaciones inicia a cerimônia e realiza a nomeação dos agentes como Guardiões.",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "#"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "ojt",
      "label": "DESAFIO OJT 1",
      "rows": [
        {
          "macroTema": "OJT 1",
          "tema": "Desafio OJT 1",
          "detalhe": "Instrutor entra no Genesys e faz escuta de 1 chamada com a turma dentro da sala. Após finalizada a chamada, comenta sobre os puntos positivos / negativos da chamada e principais indicadores.",
          "tiempo": "1:00:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "OJT 1",
          "tema": "Desafio OJT 1",
          "detalhe": "Instrutor leva agentes até a operação para atendimento de chamadas.",
          "tiempo": "4:00:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "OJT 1",
          "tema": "Desafio OJT 1",
          "detalhe": "Instrutor  tira dúvidas referentes ao atendimento do dia.",
          "tiempo": "0:40:00",
          "herramientas": [],
          "iaPic": [],
          "consejo": ""
        }
      ]
    }
  ]
};

export const HVC_BAG_DATA = {  "texture": "OCEAN",

  label: "HVC + BAG",
  color: "#7000ab",
  evalKon: [],
  evalAec: [],
  evalMsg: "Os alunos que não atingirem a média final de 80% devem realizar o \"Ajuste de Rota\" - Avaliação de recuperação e somente após a aprovação realizar os testes de acessos.\n\nDuração: 30 min",
  secciones: [
  {
    "tipo": "mision1",
    "label": "Introdução",
    "rows": [
      {
        "macroTema": "Boas Vindas",
        "tema": "Boas Vindas",
        "detalhe": "-Instrutor apresenta vídeo “Introdução ao serviço HVC”",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "PPT",
            "url": ""
          }
        ],
        "iaPic": [],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Boas Vindas",
        "tema": "Boas Vindas",
        "detalhe": "Conhecendo os clientes HVC",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "PPT",
            "url": "https://docs.google.com/presentation/d/1CCxXGUdQ3G1fOSMD_UAmrikB2LFyAZ4hAvj7VfCrPx8/edit?slide=id.p799#slide=id.p799"
          }
        ],
        "iaPic": [],
        "tiempo": "1:00:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "1: Latam PASS",
    "rows": [
      {
        "macroTema": "Conhecendo o produto LATAM PASS",
        "tema": "Conhecendo o produto LATAM PASS",
        "detalhe": "-Instrutor explica a definição das categorias do programa LATAM Pass e suas metas para qualificação",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass"
          }
        ],
        "tiempo": "00:12:00"
      },
      {
        "macroTema": "Número e categoria do sócio",
        "tema": "Número e categoria do sócio",
        "detalhe": "-Instrutor explica as atribuições do número de sócios de acordo com a tabela disponível no PIC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass"
          }
        ],
        "tiempo": "00:12:00"
      },
      {
        "macroTema": "Qualificação para as categorias Elite",
        "tema": "Qualificação para as categorias Elite",
        "detalhe": "- Instrutor deixar claro como o cliente se qualifica para categorias Elite, ensina como calcular e onde consultar os pontos qualificáveis",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass"
          }
        ],
        "tiempo": "00:12:00"
      },
      {
        "macroTema": "Processo de qualificacação Anual",
        "tema": "Processo de qualificacação Anual",
        "detalhe": "-Instrutor explica como funciona o YEP, protocolos e mostra o painel de pontos qualificáveis",
        "consejo": "https://lookerstudio.google.com/u/0/reporting/30aae1d4-db9c-4d00-9599-8ea24a7627ae/page/tEnnC",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass"
          }
        ],
        "tiempo": "00:12:00"
      },
      {
        "macroTema": "Conhecendo os beneficios da categoria Elite",
        "tema": "Conhecendo os beneficios da categoria Elite",
        "detalhe": "-Instrutor explica os beneficios da categoria Elite através do site",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Site",
            "url": "https://latampass.latam.com/pt_br/categorias-elite/pontos-qualificaveis"
          }
        ],
        "iaPic": [],
        "tiempo": "00:12:00"
      },
      {
        "macroTema": "Atividade 1:  Jornada Estelar: Explorando Competências - Mapa de Benefícios por Categoria",
        "tema": "Atividade 1:  Jornada Estelar: Explorando Competências - Mapa de Benefícios por Categoria",
        "detalhe": "Formato: times de 3–5 pessoas. Materiais: planilha/quadro com colunas “Categoria” e “Benefícios”. Dinâmica: Cada time recebe 3–4 cartões de “Categoria”. Devem listar os 4–6 benefícios principais de cada categoria. Entregam em 7 min; o instrutor compara com a “gabarito” do artigo. Dica: reforçar diferenças sutis entre níveis.",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "PPT",
            "url": ""
          }
        ],
        "iaPic": [],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Benefícios para titulares de cartões bancários e do Clube Latam Pass",
        "tema": "Benefícios para titulares de cartões bancários e do Clube Latam Pass",
        "detalhe": "- Instrutor apresenta os benefícios dos titulares de cartão de crédito e clube Latam Pass. Em segui apresenta a planilha de benefícios dos cartões",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass"
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Benefícios para titulares de cartões bancários e do Clube Latam Pass",
        "tema": "Benefícios para titulares de cartões bancários e do Clube Latam Pass",
        "detalhe": "- Instrutor apresenta os benefícios dos titulares de cartão de crédito e clube Latam Pass. Em segui apresenta a planilha de benefícios dos cartões",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass"
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Atribuição de assento favorito para acompanhantes de passageiros black e black signature con tarifa \"Light/Plus/Standard\".",
        "tema": "Atribuição de assento favorito para acompanhantes de passageiros black e black signature com tarifa \"Light/Plus/Standard\".",
        "detalhe": "-Instrutor descrever o procedimento aplicável a passageiros Black/Black Signature para a alocação de assentos a acompanhantes con tarifas Light/Plus/Standard.”",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Fluxo",
            "url": "https://lucid.app/documents/embedded/48e0b506-f24f-40e4-90e7-e2f7fb204a7d?invitationId=inv_64f660de-8fa6-4005-9bbe-d419733336d3#"
          }
        ],
        "iaPic": [],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Devolução EMD de Assento ou Bagagem cobrado por erro de passageiro Preferente,",
        "tema": "Devolução EMD de Assento ou Bagagem cobrado por erro de passageiro Preferente,",
        "detalhe": "-O instrutor explica o fluxo de devolução para casos em que passageiros preferenciais pagaram, por engano, por assentos ou bagagens.",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Fluxo",
            "url": "https://lucid.app/documents/embedded/1eb1a282-a511-484d-abd1-fcef0b0c8eee/0_0?invitationId=inv_0835815c-af27-4c66-8c9c-47b5fff98d17"
          }
        ],
        "iaPic": [],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Extensão por licença  parental",
        "tema": "Extensão por licença  parental",
        "detalhe": "-O instrutor explica o procedimiento para casos em que clientes preferenciais desejam fazer uma pausa por motivos de maternidade, nascimento de um filho ou adoção, resultando na redução da frequência de voos.",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Fluxo",
            "url": "https://lucid.app/documents/embedded/b435b3ca-3910-48d8-a2b6-2fe51c9f517e/Pdrr1UshZCgz?invitationId=inv_b25139bb-3caf-455e-b2d6-ea8842af802c"
          }
        ],
        "iaPic": [],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Segmento UPG Priority com cartões bancários",
        "tema": "Segmento UPG Priority com cartões bancários",
        "detalhe": "- Instrutor  explica que é possível atender os sócios que nos contatarem informando que não consegue visualizar o benefício do seu cartão bancário na prioridade da lista de postulação com trechos cortesia. através deste fluxo.",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Fluxo",
            "url": "https://lucid.app/documents/embedded/64e06907-1b33-4734-94a7-8aa5c7a5c759?invitationId=inv_d3701676-324d-4bf8-a016-6bb0b686343a#"
          }
        ],
        "iaPic": [],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Painel Promoções FFP 2025",
        "tema": "Painel Promoções FFP 2025",
        "detalhe": "- Instrutor apresenta o Painel de Promoções e explica que é possível consultar os detalhes das campanhas promocionais direcionadas aos sócios LATAM Pass durante o ano de 2025.",
        "consejo": "https://lookerstudio.google.com/u/0/reporting/a4a2e2e7-f2d8-46f2-8809-e52beea50d8f/page/p_saq0x9vvrd",
        "herramientas": [
          {
            "tipo": "Painel",
            "url": ""
          }
        ],
        "iaPic": [],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Painel Promoções FFP 2026",
        "tema": "Painel Promoções FFP 2026",
        "detalhe": "- Instrutor apresenta o Painel de Promoções e explica que é possível consultar los detalhes das campanhas promocionais direcionadas aos sócios LATAM Pass durante o ano de 2025.",
        "consejo": "https://pic-latam.zendesk.com/hc/pt-br/articles/42461678256403-25-06-25-FFP-LATAM-PASS-Painel-Promo%C3%A7%C3%B5es-FFP-2025",
        "herramientas": [
          {
            "tipo": "Descrição",
            "url": ""
          }
        ],
        "iaPic": [],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Bônus Latam Pass",
        "tema": "Bônus Latam Pass",
        "detalhe": "-Instrutor explica o artigo Bônus Latam Pass",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/37307768474899-B%C3%B4nus-LATAM-Pass"
          }
        ],
        "tiempo": "0:55:00"
      },
      {
        "macroTema": "Atividade \"Constelação de Habilidades\" Bònus LATAM",
        "tema": "Atividade \"Constelação de Habilidades\" Bònus LATAM",
        "detalhe": "- Instrutor vai apresentar 3 cenários e pedir a justificativa com base no arquivo do PIC. Cenário 1: Campanha 20% bônus Tarifa Promo. Cenário 2: Remarcação fora do período. Cenário 3: Agência parceira não participante.",
        "consejo": "https://pic-latam.zendesk.com/hc/pt-br/articles/11712520071443-Remarca%C3%A7%C3%B5es-volunt%C3%A1rias",
        "herramientas": [
          {
            "tipo": "PIC",
            "url": ""
          }
        ],
        "iaPic": [],
        "tiempo": "00:40:00"
      },
      {
        "macroTema": "Upload de Respaldo no Genesys Cloud",
        "tema": "Upload de Respaldo no Genesys Cloud",
        "detalhe": "- Instrutor apresenta sistema para consulta de status de conta FFP",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:20:00"
      },
      {
        "macroTema": "Atualização de email",
        "tema": "Atualização de email",
        "detalhe": "Instrutor explica o passo a passo para realizar o upload de documento através do Genesys",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Conta ativa com problemas de transação",
        "tema": "Conta ativa com problemas de transação",
        "detalhe": "-O instrutor contextualiza os procedimiento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR)",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Erro de criação do perfil Site Clientes",
        "tema": "Erro de criação do perfil Site Clientes",
        "detalhe": "-O instrutor contextualiza os procedimiento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR)",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Mudança País De Residência Sócio",
        "tema": "Mudança País De Residência Sócio",
        "detalhe": "-O instrutor contextualiza os procedimiento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR)",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:20:00"
      },
      {
        "macroTema": "Encerramento De Conta LATAM Pass",
        "tema": "Encerramento De Conta LATAM Pass",
        "detalhe": "-O instrutor contextualiza os procedimiento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR)",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:25:00"
      },
      {
        "macroTema": "Correção de nome / sobrenome /data de nascimento na conta LATAM Pass",
        "tema": "Correção de nome / sobrenome /data de nascimento na conta LATAM Pass",
        "detalhe": "-O instrutor contextualiza os procedimiento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR)",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Tratamento de casos com informações sensíveis",
        "tema": "Tratamento de casos com informações sensíveis",
        "detalhe": "-O instrutor contextualiza os procedimiento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR)",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:20:00"
      },
      {
        "macroTema": "Bloqueio por comercio de pontos ou resgates para terceiros",
        "tema": "Bloqueio por comercio de pontos ou resgates para terceiros",
        "detalhe": "- Instrutor faz una breve apresentação sobre a tratativa de casos contendo dados sensíveis",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/45219338064275-Tratamento-de-casos-com-informa%C3%A7%C3%B5es-sens%C3%ADveis"
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Conta com saldos irregulares",
        "tema": "Conta com saldos irregulares",
        "detalhe": "- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Desconhecimento de resgate",
        "tema": "Desconhecimento de resgate",
        "detalhe": "- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "LOGIN status da Conta FFP auditado, fraude ou conta ativa com erro",
        "tema": "LOGIN status da Conta FFP auditado, fraude ou conta ativa com erro",
        "detalhe": "- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:25:00"
      },
      {
        "macroTema": "Vencimento de milhas/pontos por conta falso positiva",
        "tema": "Vencimento de milhas/pontos por conta falso positiva",
        "detalhe": "- Instrutor faz una breve apresentação sobre a tratativa de casos contendo dados sensíveis",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Soluções para Latam Wallet Suspensa ou Movimentos não Reconhecidos",
        "tema": "Soluções para Latam Wallet Suspensa ou Movimentos não Reconhecidos",
        "detalhe": "- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Resgate de milhas com tarifas comerciais",
        "tema": "Resgate de milhas com tarifas comerciais",
        "detalhe": "- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "2: Vendas",
    "rows": [
      {
        "macroTema": "Processo alternativo de resgate",
        "tema": "Processo alternativo de resgate",
        "detalhe": "- Instrutor apresenta o processo de emissão con milhas através do site e pelo agente 360",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:40:00"
      },
      {
        "macroTema": "Processo alternativo de resgate",
        "tema": "Processo alternativo de resgate",
        "detalhe": "- Instrutor apresenta Resgate alternativo resgate alternativo fora do E- Business e Honrar tarifas",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Processo alternativo de resgate",
        "tema": "Processo alternativo de resgate",
        "detalhe": "- Instrutor apresenta resgate de Múltiplos passageiros na mesma ordem",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Processo alternativo de resgate",
        "tema": "Processo alternativo de resgate",
        "detalhe": "- Instrutor apresenta Resgate alternativo fora do E- Business - Moeda distinta",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Resgate 100% OLA",
        "tema": "Resgate 100% OLA",
        "detalhe": "- Instrutor explica as  incidências no processo de resgate no site para clientes",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Resgate 100% OLA",
        "tema": "Resgate 100% OLA",
        "detalhe": "- Instrutor apresenta forma de resgate com outras CIAs",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "1:00:00"
      },
      {
        "macroTema": "Exercício Gravidade Zero: Treinamento Imersivo",
        "tema": "Exercício Gravidade Zero: Treinamento Imersivo",
        "detalhe": "- Instrutor apresenta ferramento piloto - Painel de disponibilidade OLA",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Painel",
            "url": ""
          }
        ],
        "tiempo": "1:00:00"
      },
      {
        "macroTema": "Retomar reservas de compras pendentes através do site",
        "tema": "Retomar reservas de compras pendentes através do site",
        "detalhe": "-O Instrutor orienta os alunos a emitirem de acordo com o simulador de reservas",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "0:40:00"
      },
      {
        "macroTema": "Honrar Tarifa (tentativas de compra no site)",
        "tema": "Honrar Tarifa (tentativas de compra no site)",
        "detalhe": "- O instrutor explica como retoma a reserva automaticamente se a compra online não for finalizada.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/11134876798355-Incidentes-de-emiss%C3%A3o-no-site-dinheiro-retido-honrar-tarifa-retomar-reservas-etc"
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Compras com dinheiro retido na LATAM Wallet",
        "tema": "Compras com dinheiro retido na LATAM Wallet",
        "detalhe": "-O instrutor explica como garantir  a mesma tarifa quando o cliente não consegue concluir a compra ou resgate online.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/11134876798355-Incidentes-de-emiss%C3%A3o-no-site-dinheiro-retido-honrar-tarifa-retomar-reservas-etc"
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Pedido de Lei Anac - Brasil",
        "tema": "Pedido de Lei Anac - Brasil",
        "detalhe": "- Instrutor explica os caos de compra online quando não foi emitida, o valor foi debitado e ficou retido na LATAM Wallet",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/11134876798355-Incidentes-de-emiss%C3%A3o-no-site-dinheiro-retido-honrar-tarifa-retomar-reservas-etc"
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Lei Geral de Proteção de dados Brasil",
        "tema": "Lei Geral de Proteção de dados Brasil",
        "detalhe": "- Instrutor faz uma revisão com os agentes sobre o pedido de Lei Anac Brasil e explica as exceções aplicadas.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Tarifa de Emergência Falecimento e Hospitalização",
        "tema": "Tarifa de Emergência Falecimento e Hospitalização",
        "detalhe": "- Instrutor faz uma revisão com os agentes sobre lei de proteção de dados Brasil",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Atividade Missão Galáctica: Emissão e reembolso com tarifa de emergência",
        "tema": "Atividade Missão Galáctica: Emissão e reembolso com tarifa de emergência",
        "detalhe": "-O instrutor contextualiza o procedimento e apresenta o fluxo de validar a documentação e realizar a gestão de tarifa",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:40:00"
      },
      {
        "macroTema": "Passe livre judicial",
        "tema": "Passe livre judicial",
        "detalhe": "- Instrutor pede para os agentes emitirem passagens através do SABRE de treinamento.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Upgrade de Cabine (com trechos de cortesia)",
        "tema": "Upgrade de Cabine (com trechos de cortesia)",
        "detalhe": "- Instrutor explica as considerações para solicitação de UPG por trechos e apresenta o paso a paso.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:15:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "3: Alterações",
    "rows": [
      {
        "macroTema": "Upgrade de Cabine (com trechos de cortesia)",
        "tema": "Upgrade de Cabine (com trechos de cortesia)",
        "detalhe": "- Instrutor explica as considerações para solicitação de UPG por trechos e apresenta o passo a passo através do A360 e Sabre",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "00:10:00"
      },
      {
        "macroTema": "Upgrade de Cabine (com trechos de cortesia)",
        "tema": "Upgrade de Cabine (com trechos de cortesia)",
        "detalhe": "- Instrutor explica as considerações para solicitação de UPG por trechos e apresenta o passo a passo através do A360 e Sabre",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Passo a passo A360",
            "url": ""
          }
        ],
        "tiempo": "00:10:00"
      },
      {
        "macroTema": "Processo postulação manual UPG Interact Airport",
        "tema": "Processo postulação manual UPG Interact Airport",
        "detalhe": "- Instrutor explica as considerações para solicitação de UPG por trechos e apresenta o passo a passo através do A360 e Sabre",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "00:10:00"
      },
      {
        "macroTema": "Cancelamento Manual de Postulação de UPG de Cortesia",
        "tema": "Cancelamento Manual de Postulação de UPG de Cortesia",
        "detalhe": "- O Instrutor apresenta o fluxo e explica o processo de inscrição manual do UPG Interact Airport",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Opções de UPG",
        "tema": "Opções de UPG",
        "detalhe": "- O Instrutor apresenta o fluxo e explica o proceso de cancelamento manual do UPG através do Interact Airport",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Opções de UPG",
        "tema": "Opções de UPG",
        "detalhe": "- Instrutor apresenta os outros tipos de upgrade que um passageiro pode solicitar.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Opções de UPG",
        "tema": "Opções de UPG",
        "detalhe": "Reembolso involuntário do EMD Seatboost",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Opções de UPG",
        "tema": "Opções de UPG",
        "detalhe": "Devolução de EMD (Leilão/Instantâneo)  por Downgrade de cabine",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Postulacão UPG",
        "tema": "Postulacão UPG",
        "detalhe": "Anulação de uma Aposta (Plusgrade)",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Postulacão UPG",
        "tema": "Postulacão UPG",
        "detalhe": "-Instrutor mostra a partir do PIC a plataforma para visualizar as seções de cortesia que um membro possui.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Rotas Cósmicas de Desenvolvimento",
        "tema": "Rotas Cósmicas de Desenvolvimento",
        "detalhe": "-Instrutor mostra a partir do PIC a plataforma para visualizar as seções de cortesia que um membro possui.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Plataforma",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Opções de Upgrade (reembolso involuntário)",
        "tema": "Opções de Upgrade (reembolso involuntário)",
        "detalhe": "Resolva o seguinte caso em pares: Caso: Ao solicitar um manual cortesia UPG, siga o passo a passo.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Opções de Upgrade (reembolso involuntário)",
        "tema": "Opções de Upgrade (reembolso involuntário)",
        "detalhe": "Instrutor faz um breve resumo sobre opções de upgrade (Leilão/Instantâneo).",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Correção de nome em reservas com UPG confirmado",
        "tema": "Correção de nome em reservas con UPG confirmado",
        "detalhe": "Instrutor faz um breve resumo sobre opções de upgrade (Leilão/Instantâneo).",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Antecipação e postergação Alteração de voo",
        "tema": "Antecipação e postergação Alteração de voo",
        "detalhe": "- Instutor explica o procedimiento para alteração de nome nos casos em que o UPG está confirmado",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Emissão/ Reemissão EXST/CBBG",
        "tema": "Emissão/ Reemissão EXST/CBBG",
        "detalhe": "- Instrutor apresenta  Antecipação/Postergação de Voo Confirmado para a sócios Elite",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Latam Wallet -Países e contas bancárias",
        "tema": "Latam Wallet -Países e contas bancárias",
        "detalhe": "- Instutor explica o procedimiento ao assento adicional e o fluxo que se aplica ao atendimento HVC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360052932933-Assento-Adicional-EXST-CBBG-"
          }
        ],
        "tiempo": "00:20:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "4: Compensações",
    "rows": [
      {
        "macroTema": "Latam Wallet -Países e contas bancárias",
        "tema": "Latam Wallet -Países e contas bancárias",
        "detalhe": "- Instutor explica o procedimiento ao assento adicional y el flujo que se aplica al atención HVC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Solução de problemas para troca de TV",
        "tema": "Solução de problemas para troca de TV",
        "detalhe": "- Instutor explica o procedimiento ao assento adicional y el flujo que se aplica al atención HVC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Transferência Bancária",
        "tema": "Transferência Bancária",
        "detalhe": "- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Solução para problemas ao resgatar um TV",
        "tema": "Solução para problemas ao resgatar um TV",
        "detalhe": "- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Troca de TV em transferência de dinheiro",
        "tema": "Troca de TV em transferência de dinheiro",
        "detalhe": "- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Solução para problemas ao resgatar um TV",
        "tema": "Solução para problemas ao resgatar um TV",
        "detalhe": "- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Generalidades TV: Reverter Travel Voucher",
        "tema": "Generalidades TV: Reverter Travel Voucher",
        "detalhe": "- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Solução para problemas de troca de TV",
        "tema": "Solução para problemas de troca de TV",
        "detalhe": "- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Generalidades TV: Solicitação de criação de TV",
        "tema": "Generalidades TV: Solicitação de criação de TV",
        "detalhe": "- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Troca de TV em transferência de dinheiro",
        "tema": "Troca de TV em transferência de dinheiro",
        "detalhe": "- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Solução para problemas no resgate de TV",
        "tema": "Solução para problemas no resgate de TV",
        "detalhe": "- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Atividade Quiz nave espacial",
        "tema": "Atividade Quiz nave espacial",
        "detalhe": "- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Emissão, reemissão e devolução de Staff Travel",
        "tema": "Emissão, reemissão e devolução de Staff Travel",
        "detalhe": "- O instrutor apresenta o QUIZ nave espacial  com perguntas relacionadas ao TV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Genially",
            "url": ""
          }
        ],
        "tiempo": "0:25:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "5: Staff Travel",
    "rows": [
      {
        "macroTema": "Benefícios FFP para líderes",
        "tema": "Benefícios FFP para líderes",
        "detalhe": "- O instutor revisa o procedimiento de Emissão, reemissão e devolução de Staff Travel",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "00:30:00"
      },
      {
        "macroTema": "Beneficios para Executivos LATAM Black e B. Sig",
        "tema": "Beneficios para Executivos LATAM Black e B. Sig",
        "detalhe": "- O instrutor mostra no PIC os benefícios do FFP para líderes de serviço e passageiros Black.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "00:30:00"
      },
      {
        "macroTema": "Exceções comerciais para Tkt Staff Travel",
        "tema": "Exceções comerciais para Tkt Staff Travel",
        "detalhe": "- O instrutor mostra no PIC os benefícios do FFP para líderes de serviço e passageiros Black.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "00:30:00"
      },
      {
        "macroTema": "Exercício",
        "tema": "Exercício",
        "detalhe": "- O instrutor mostra o fluxo de exceções comerciais para viagens de TKT Staff Travel.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Reembolso de EMD",
        "tema": "Reembolso de EMD",
        "detalhe": "Exercícios para solicitação de postulação manual no Interact Airport.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "0:45:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "6: Devoluções",
    "rows": [
      {
        "macroTema": "Devolução EMD cobrado por erro",
        "tema": "Devolução EMD cobrado por erro",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:20:00"
      },
      {
        "macroTema": "Devoluções Staff Travel",
        "tema": "Devoluções Staff Travel",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:20:00"
      },
      {
        "macroTema": "Anulação de cobrança",
        "tema": "Anulação de cobrança",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Cash In falhou",
        "tema": "Cash In falhou",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Cobrança de Valores Incorretos",
        "tema": "Cobrança de Valores Incorretos",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:25:00"
      },
      {
        "macroTema": "Comprovantes de pagamentos",
        "tema": "Comprovantes de pagamentos",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:25:00"
      },
      {
        "macroTema": "Exercícios Mapa do Universo de devolução",
        "tema": "Exercícios Mapa do Universo de devolução",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo HVC + DT DEV",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:20:00"
      },
      {
        "macroTema": "Cobrança em duplicidade",
        "tema": "Cobrança em duplicidade",
        "detalhe": "- Instrutor segue a linha do tempo do mapa do universo para chegar a solução para o cliente",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Genyally",
            "url": ""
          }
        ],
        "tiempo": "0:25:00"
      },
      {
        "macroTema": "Consulta por reembolso Negado",
        "tema": "Consulta por reembolso Negado",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo com o PIC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": "https://lucid.app/documents/embedded/61a6506e-fa95-4c82-82ca-9511954be967?invitationId=inv_3ea3c67a-c40d-4eef-8656-2ed8cfa1efee#"
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Consulta por reembolso fora do prazo",
        "tema": "Consulta por reembolso fora do prazo",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo con o PIC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Consulta de reembolso pago com discordância",
        "tema": "Consulta de reembolso pago com discordância",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo con o PIC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Passageiros com conta em outros países",
        "tema": "Passageiros com conta em outros países",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo con o PIC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Exercício Operação Via Láctea",
        "tema": "Exercício Operação Via Láctea",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo con o PIC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:45:00"
      },
      {
        "macroTema": "Consulta por reembolso pago com TV",
        "tema": "Consulta por reembolso pago com TV",
        "detalhe": "-O instrutor mostra no Zendesk e analisa juntos com os agentes casos em que o passageiro solicita reembolso",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "0:55:00"
      },
      {
        "macroTema": "Criação TV Saldo a Favor",
        "tema": "Criação TV Saldo a Favor",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo con o PIC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:25:00"
      },
      {
        "macroTema": "Reembolso de pontos",
        "tema": "Reembolso de pontos",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo con o PIC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:25:00"
      },
      {
        "macroTema": "Estação Espacial do Saber : Ligação/Case",
        "tema": "Estação Espacial do Saber : Ligação/Case",
        "detalhe": "-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo con o PIC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Reclamações de Casos LAE",
        "tema": "Reclamações de Casos LAE",
        "detalhe": "- O instrutor mostra uma chamada de solicitação de reembolso negado   ( cliente Black Sig. )",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "0:40:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "7: Reclamações",
    "rows": [
      {
        "macroTema": "Reclamações por cobranças",
        "tema": "Reclamações por cobranças",
        "detalhe": "- O instrutor reforça o conteúdo do processo “Casos Sensíveis”.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Solicitação de chamada FALE ( revisão)",
        "tema": "Solicitação de chamada FALE ( revisão)",
        "detalhe": "- Instrutor  revisa fluxo sobre anulação de cobrança",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:20:00"
      },
      {
        "macroTema": "Gestão de Reclamações SAB",
        "tema": "Gestão de Reclamações SAB",
        "detalhe": "- O instrutor revisa as solicitações de ligações dos clientes no Brasil.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Fluxo",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "LIVRO DE RECLAMAÇÕES",
        "tema": "LIVRO DE RECLAMAÇÕES",
        "detalhe": "- Instrutor explica a compensação para assentos abaixo do padrão.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Gastos incorridos",
        "tema": "Gastos incorridos",
        "detalhe": "- Instrutor explica qual a defiição e como os gastos chegam para as bandeijas HVC.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:20:00"
      },
      {
        "macroTema": "Exceções cliente HVC",
        "tema": "Exceções cliente HVC",
        "detalhe": "- O instrutor recapitula o fluxo a ser seguido para o reembolso de despesas básicas.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Exceções cliente HVC",
        "tema": "Exceções cliente HVC",
        "detalhe": "- Instrutor explica a Cortesia HVC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Generalidades do Serviço",
        "tema": "Generalidades do Serviço",
        "detalhe": "-Instrutor apresenta matriz que orienta os critérios e procedimentos.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Matriz",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "8: Bagagem",
    "rows": [
      {
        "macroTema": "Gestão de reclamações de bagagem no aeroporto",
        "tema": "Gestão de reclamações de bagagem no aeroporto",
        "detalhe": "- Instrutor mostra no PPT o comprometimento fundamental e as áreas envolvidas.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "0:20:00"
      },
      {
        "macroTema": "Gestão de reclamações no Contact Center",
        "tema": "Gestão de reclamações no Contact Center",
        "detalhe": "- Instrutor mostra como é realizado o gerenciamento dos processos iniciais.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Reclamações legais",
        "tema": "Reclamações legais",
        "detalhe": "- Instrutor mostra conceito no PPT o fluxo de recebimento de reclamações.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Generalidades",
        "tema": "Generalidades",
        "detalhe": "- Instrutor mostra os tópicos de como se deve gerenciar essas reclamações.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Processo para Passageiros reclamações frequentes",
        "tema": "Processo para Passageiros reclamações frequentes",
        "detalhe": "- Instrutor mostra Generalidades Reclamações Bagagem no PIC",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Manual de Bagagem no Portal",
        "tema": "Manual de Bagagem no Portal",
        "detalhe": "- Instrutor mostra do PIC o processo para passageiros con muitas reclamações.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053436714-Generalidades-Reclama%C3%A7%C3%B5es-de-Bagagem"
          }
        ],
        "tiempo": "0:05:00"
      },
      {
        "macroTema": "Atividade \"Briefing de Missão\" Reclamações",
        "tema": "Atividade \"Briefing de Missão\" Reclamações",
        "detalhe": "- Instrutor apresenta brevemente o Portal de Bagagem.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Portal",
            "url": ""
          }
        ],
        "tiempo": "00:20:00"
      },
      {
        "macroTema": "Zendesk",
        "tema": "Zendesk",
        "detalhe": "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Educaplay",
            "url": ""
          }
        ],
        "tiempo": "0:40:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "9: Ferramentas",
    "rows": [
      {
        "macroTema": "Único Sign - Assinatura Digital",
        "tema": "Único Sign - Assinatura Digital",
        "detalhe": "- Instrutor destaca todos os pontos que não podem deixar de ser seguidos nas tratativas de bagagens.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "Zendesk Training",
            "url": ""
          }
        ],
        "tiempo": "1:30:00"
      },
      {
        "macroTema": "World Tracer Desktop",
        "tema": "World Tracer Desktop",
        "detalhe": "- Instrutor apresenta a ferramenta explicando que é utilizada exclusivamente para envio de acordos.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "0:30:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "10: Bagagem",
    "rows": [
      {
        "macroTema": "Procurar PIR através da World Tracer (WTD)",
        "tema": "Procurar PIR através da World Tracer (WTD)",
        "detalhe": "- Instrutor destaca todos os pontos que não podem deixar de ser seguidos.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "WTD Training",
            "url": ""
          }
        ],
        "tiempo": "1:30:00"
      },
      {
        "macroTema": "Atividade \"Guerra nas Estrelas\" Exercício de busca de PIR",
        "tema": "Atividade \"Guerra nas Estrelas\" Exercício de busca de PIR",
        "detalhe": "- Instrutor mostra no PIC os comandos para encontrar um PIR no WTD.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "00:40:00"
      },
      {
        "macroTema": "Consulta de processos inativos - PDI",
        "tema": "Consulta de processos inativos - PDI",
        "detalhe": "- Instrutor pede aos alunos que realizarem buscas de PIRs.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "WTD Training",
            "url": ""
          }
        ],
        "tiempo": "0:45:00"
      },
      {
        "macroTema": "Capacitação Air Tag",
        "tema": "Capacitação Air Tag",
        "detalhe": "- Instrutor mostra no PIC o comando PDI para consultar os processos não ativos.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:25:00"
      },
      {
        "macroTema": "Atividade \"Pesquise e Responda\" Qual o tipo de PIR",
        "tema": "Atividade \"Pesquise e Responda\" Qual o tipo de PIR",
        "detalhe": "- Instrutor mostra no PIC o material para capacitação do Air Tag.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:40:00"
      },
      {
        "macroTema": "Sistema de consulta BRS WEB",
        "tema": "Sistema de consulta BRS WEB",
        "detalhe": "- Instrutor direciona os alunos para página de WTD no PIC.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "01:20:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "11: Ferramentas",
    "rows": [
      {
        "macroTema": "Bagagem Danificada e/ou Violada",
        "tema": "Bagagem Danificada e/ou Violada",
        "detalhe": "-Instrutor mostra o sistema BRS WEB para validar bagagens.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:40:00"
      },
      {
        "macroTema": "Criação de PIR ( DPR)",
        "tema": "Criação de PIR ( DPR)",
        "detalhe": "-Instrutor mostra do PIC as considerações Bagagem Danificada.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "01:20:00"
      },
      {
        "macroTema": "Criação de PIR ( DPR)",
        "tema": "Criação de PIR ( DPR)",
        "detalhe": "- Instrutor mostra no WTD Training, o passo a passo para criar um PIR de dano.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "WTD Training",
            "url": ""
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Atividade : Conquista de Constelações",
        "tema": "Atividade : Conquista de Constelações",
        "detalhe": "- Instrutor pede aos alunos que façam a atividade de abertura de PIR DPR.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "WTD Training",
            "url": ""
          }
        ],
        "tiempo": "0:15:00"
      },
      {
        "macroTema": "Bagagem Danificada e Bagagem Violada",
        "tema": "Bagagem Danificada e Bagagem Violada",
        "detalhe": "- Instrutor vai fazer um sorteio e formará grupos.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "1:50:00"
      },
      {
        "macroTema": "Bagagem Danificada e Bagagem Violada",
        "tema": "Bagagem Danificada e Bagagem Violada",
        "detalhe": "Bagagem com Dano",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "00:25:00"
      },
      {
        "macroTema": "Bagagem Danificada e Bagagem Violada",
        "tema": "Bagagem Danificada e Bagagem Violada",
        "detalhe": "Criação de PIR ( DPR ) apenas com dano.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "WTD Training",
            "url": ""
          }
        ],
        "tiempo": "1:00:00"
      },
      {
        "macroTema": "Bagagem Danificada e Bagagem Violada",
        "tema": "Bagagem Danificada e Bagagem Violada",
        "detalhe": "Bagagem Violada",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:25:00"
      },
      {
        "macroTema": "Bagagem Extraviada ou Atrasada",
        "tema": "Bagagem Extraviada ou Atrasada",
        "detalhe": "Exercício  de criação de casos no sistema.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "WTD Training",
            "url": ""
          }
        ],
        "tiempo": "1:00:00"
      },
      {
        "macroTema": "Bagagem Extraviada ou Atrasada",
        "tema": "Bagagem Extraviada ou Atrasada",
        "detalhe": "- Registro de Reclamação PIR ( AHL )",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": ""
          }
        ],
        "tiempo": "0:16:00"
      },
      {
        "macroTema": "Bagagem Extraviada ou Atrasada",
        "tema": "Bagagem Extraviada ou Atrasada",
        "detalhe": "Exercícios prático - simulação de abertura PIR AHL",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "WTD Training",
            "url": ""
          }
        ],
        "tiempo": "1:00:00"
      },
      {
        "macroTema": "Bagagem Extraviada ou Atrasada",
        "tema": "Bagagem Extraviada ou Atrasada",
        "detalhe": "Habilitação do FlyBag e formulário de assistência",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Comunicado",
            "url": "https://drive.google.com/file/d/136fmT2sBOCXNyPDe85Qupggjf9GiL_KZ/view"
          }
        ],
        "iaPic": [],
        "tiempo": "00:20:00"
      },
      {
        "macroTema": "Bagagem Extraviada ou Atrasada",
        "tema": "Bagagem Extraviada ou Atrasada",
        "detalhe": "Nova casuística do Agente 360 para reembolso de transporte",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Comunicado",
            "url": "https://drive.google.com/file/d/1-r6z9uvOCUu9JuU5OHtbkPHEy9wAZNLr/view"
          }
        ],
        "iaPic": [],
        "tiempo": "00:20:00"
      },
      {
        "macroTema": "Bagagem Switch LATAM",
        "tema": "Bagagem Switch LATAM",
        "detalhe": "Negociação de bagagem extraviada ou atrasada",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Fluxo",
            "url": "https://lucid.app/documents/embeddedchart/be96d3d5-a352-4949-994d-384649bb1c6f#"
          }
        ],
        "iaPic": [],
        "tiempo": "0:30:00"
      },
      {
        "macroTema": "Found Property LATAM",
        "tema": "Found Property LATAM",
        "detalhe": "-Instrutor mostra o fluxo do processo de Bagagem Switch LATAM",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Fluxo",
            "url": "https://lucid.app/documents/embedded/bdc32332-c6df-4f7a-a5b4-ae37aa5a03ad?invitationId=inv_b4da9786-a76e-45e3-9412-2d3f37f72553#"
          }
        ],
        "iaPic": [],
        "tiempo": "00:15:00"
      },
      {
        "macroTema": "Found Property LATAM",
        "tema": "Found Property LATAM",
        "detalhe": "Considerações",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055223813-Found-Property-LATAM-#h_01EK0TGHAKM25X20KR1MBFJGD2"
          }
        ],
        "tiempo": "00:15:00"
      },
      {
        "macroTema": "Found Property LATAM",
        "tema": "Found Property LATAM",
        "detalhe": "Compensação  por objetos esquecidos à bordo",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Fluxo",
            "url": "https://lucid.app/documents/embedded/e04f1426-3b07-4851-8e53-376de61de23e?invitationId=inv_3ea1d0f4-3251-42cf-a9aa-c0739644595a#"
          }
        ],
        "iaPic": [],
        "tiempo": "0:20:00"
      },
      {
        "macroTema": "Reclamações em Conexão",
        "tema": "Reclamações em Conexão",
        "detalhe": "Reclamações de Bagagem em conexão (Outras CIAs)",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PPT",
            "url": ""
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Bagagem Remanescente LATAM",
        "tema": "Bagagem Remanescente LATAM",
        "detalhe": "Considerações",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055224413-Bagagem-Remanescente-LATAM"
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Prazo de Resolução",
        "tema": "Prazo de Resolução",
        "detalhe": "Prazo de Resolução de Acordo Com o Tipo de Reclamação",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Fluxo",
            "url": "https://lucid.app/documents/embedded/dee2e177-431e-4947-997b-efdd2d3d6fb2?invitationId=inv_d3371bf3-8d0a-4504-9f32-e90ee46e5d91#"
          }
        ],
        "iaPic": [],
        "tiempo": "0:07:00"
      },
      {
        "macroTema": "Prazo de Resolução",
        "tema": "Prazo de Resolução",
        "detalhe": "Classificação de casos críticos LATAM",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055224513-Prazo-de-Resolu%C3%A7%C3%B5es"
          }
        ],
        "tiempo": "0:07:00"
      },
      {
        "macroTema": "Reclamações Bagagem de Mão",
        "tema": "Reclamações Bagagem de Mão",
        "detalhe": "-Instrutor mostra no PIC as considerações para bagagem de mão.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/13999979686931-Reclama%C3%A7%C3%B5es-por-bagagem-de-m%C3%A3o-despachada-no-por%C3%A3o"
          }
        ],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Reclamações Bagagem de Mão",
        "tema": "Reclamações Bagagem de Mão",
        "detalhe": "",
        "consejo": "",
        "herramientas": [
          {
            "tipo": "Fluxo",
            "url": "https://lucid.app/documents/embeddedchart/495a3aac-7788-4c2d-9d85-cf25b519eeb7#"
          }
        ],
        "iaPic": [],
        "tiempo": "0:10:00"
      },
      {
        "macroTema": "Redução de bagagem de mão",
        "tema": "Redução de bagagem de mão",
        "detalhe": "- Instrutor informa como funciona a Declaração de itens de valor.",
        "consejo": "",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/38916416878867-10-04-25-RECLAMA%C3%87%C3%95ES-BAGAGEM-Declara%C3%A7%C3%A3o-de-itens-de-valor"
          }
        ],
        "tiempo": "0:10:00"
      }
    ]
  },
  {
    "tipo": "mision1",
    "label": "AVALIAÇÃO E ENCERRAMENTO",
    "rows": [
      {
        "macroTema": "Avaliação",
        "tema": "Avaliação",
        "detalhe": "- Instrutor apresenta Reivindicações de redução de bagagem de mão despachada no porão",
        "tiempo": "0:10:00",
        "herramientas": [],
        "iaPic": [
          {
            "label": "PIC",
            "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/34037567644563-03-10-24-BAGAGEM-Altera%C3%A7%C3%B5es-no-peso-permitido-na-bagagem-de-m%C3%A3o-e-nome-do-atributo-no-Brasil-Portugu%C3%AAs"
          }
        ],
        "consejo": ""
      },
      {
        "macroTema": "Avaliação",
        "tema": "Correção da Avaliação",
        "detalhe": "Avaliação via formulário",
        "tiempo": "1:00:00",
        "herramientas": [
          {
            "tipo": "Forms",
            "url": ""
          }
        ],
        "iaPic": [],
        "consejo": ""
      },
      {
        "macroTema": "Missão Cosmos Learning Lab",
        "tema": "Missão Cosmos Learning Lab",
        "detalhe": "-O Instrutor corrige a Avaliação e compartilha as respostas com a turma",
        "tiempo": "0:10:00",
        "herramientas": [
          {
            "tipo": "PPT",
            "url": ""
          }
        ],
        "iaPic": [],
        "consejo": ""
      },
      {
        "macroTema": "Pesquisa de Reação",
        "tema": "Escuta de ligação na operação",
        "detalhe": "- Experiência na SAG, que tal fazer uma escuta e atendimento invertido na SAG? Estão preparados? Essa vai ser agora sua missão",
        "tiempo": "3:00:00",
        "herramientas": [
          {
            "tipo": "Operação",
            "url": ""
          }
        ],
        "iaPic": [],
        "consejo": ""
      },
      {
        "macroTema": "Pesquisa de Reação",
        "tema": "Pesquisa de Reação",
        "detalhe": "- Instrutor compartilha sua tela para que os Agentes possam escanear o QR Code e realizem a pesquisa de reação.",
        "tiempo": "0:10:00",
        "herramientas": [
          {
            "tipo": "Forms",
            "url": "https://forms.gle/WMNAt2NUdM6ZEziR7"
          }
        ],
        "iaPic": [],
        "consejo": ""
      }
    ],
    "color": "#2ec9ed",
    "icon": "BadgeCheck"
  },
  {
    "tipo": "ojt",
    "label": "DESAFIO OJT",
    "rows": [
      {
        "macroTema": "Desafio OJT",
        "tema": "OJT",
        "detalhe": "Instrutor entra no Genesys e faz escuta de 1 chamada com a turma dentro da sala. Após finalizada a chamada, comenta sobre os pontos positivos / negativos da chamada e principais indicadores.",
        "tiempo": "1:00:00",
        "herramientas": [
          {
            "tipo": "Operação",
            "url": ""
          }
        ],
        "iaPic": [],
        "consejo": ""
      },
      {
        "macroTema": "Desafio OJT",
        "tema": "OJT",
        "detalhe": "Instrutor leva agentes até a operação para atendimento de chamadas.",
        "tiempo": "4:00:00",
        "herramientas": [],
        "iaPic": [],
        "consejo": ""
      },
      {
        "macroTema": "Desafio OJT",
        "tema": "OJT",
        "detalhe": "Instrutor tira dúvidas referentes ao atendimento do dia.",
        "tiempo": "0:40:00",
        "herramientas": [],
        "iaPic": [],
        "consejo": ""
      }
    ]
  }
]
};

export const LAE_DATA = {  "texture": "RINGS",

  "label": "LAE",
  "color": "#7000ab",
  "evalKon": [],
  "evalAec": [],
  "evalMsg": "Os alunos que não atingirem a média final de 80% devem realizar o \"Ajuste de Rota\" - Avaliação de recuperação e somente após a aprovação realizar os testes de acessos.\n\nDuração: 40 min",
  "secciones": [
    {
      "tipo": "mision1",
      "label": "1: INTRODUÇÃO PI",
      "rows": [
        {
          "macroTema": "Introdução",
          "tema": "Boas Vindas",
          "detalhe": "- Instrutor se apresenta e também convida os agentes a se apresentarem.\n- Explica acordos de trabalho e regras do curso.\n- E depois, apresenta a agenda do dia.",
          "tiempo": "00:15:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/17qiCiu3wc-8L4QLGvdnNwloGUZUWMYRN3fkQp40c0Zs/edit?slide=id.g3d5bda70cb8_0_1564#slide=id.g3d5bda70cb8_0_1564"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Introdução",
          "tema": "Video 1 - Boas Vindas",
          "detalhe": "- Instrutor mostra o vídeo Universo LAE PI (Boas Vindas)\n(No mesmo vídeo tem as boas vindas da supervisora de LAE PI)",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Video",
              "url": "https://drive.google.com/file/d/1vzTutuE--HCTYxmjEJoYvlHvknOH1W6Q/view?usp=drive_link"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Aeroportos: Operação e Contingências",
          "tema": "Video 2 - Aeroportos",
          "detalhe": "- Instrutor mostra vídeo de introdução Aeroportos (Operação e Contingências). Após visualização, questiona os agentes sobre o que acharam do vídeo y enfatiza a necessidade da nossa operação em fazer todo possível para apoiar nossa defesa.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Video",
              "url": "https://drive.google.com/file/d/1wq9zyOOM0lwXVn1dvzmZjU_9Jhp8xO_t/view?usp=drive_link"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "MSP [Manual de Serviço ao Passageiro]",
          "tema": "MSP",
          "detalhe": "- Instrutor explica o passo a passo de como encontrar o MSP via A360 e informa a finalidade de ter o conhecimento deste manual. (Call Center temos o PIC e nos aeroportos os agentes usam o MSP)\nBrevemente destaca os capítulos con os temas mais recorrentes: Capítulo 10 - Assentos, Capítulo 18 - Contingências, Capítulo 19 - Sobre Reserva (Overbooking)",
          "tiempo": "1:00:00",
          "herramientas": [
            {
              "tipo": "MSP",
              "url": "https://sites.google.com/latam.com/spaxlatam/por/msp-pt?authuser=0"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Declaração de Embarque e contingências",
          "tema": "Definição: Declaração de Embarque e Declaração de Contingência",
          "detalhe": "- Instrutor mostra onde localizar o tema no PIC realiza a explicação da diferencia entre: 1. Declaração de embarque (Documento comprobatorio) 2. Declaração de Contingência (Obrigatório sempre que o cliente solicitar)",
          "tiempo": "00:20:00",
          "herramientas": [],
          "iaPic": [
            {
              "label": "PIC",
              "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053237453-Declara%C3%A7%C3%A3o-de-Embarque-e-Declara%C3%A7%C3%A3o-de-Conting%C3%AAncia"
            }
          ],
          "consejo": ""
        },
        {
          "macroTema": "Exclusivo LAE Recomendação Legal",
          "tema": "Exceções: Pilar fora de política e waiver",
          "detalhe": "- Instrutor aborda brevemente o tema de exceções fora da política, mostrando a tabela que contempla: Pilar fora de política e waiver (Exclusivo LAE - Recomendação Legal).",
          "tiempo": "00:20:00",
          "herramientas": [],
          "iaPic": [
            {
              "label": "PIC",
              "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/1500007916562-Crit%C3%A9rios-para-a-entrada-de-waivers-por-erro-de-agente-e-entrega-de-exce%C3%A7%C3%B5es-fora-da-pol%C3%ADtica#h_01JWS4B9K3P367Y5KQH4RC2ESE"
            }
          ],
          "consejo": ""
        },
        {
          "macroTema": "Declarações e Exclusivo LAE",
          "tema": "Atividade \"Briefing de Missão\" Declarações e Exclusivo LAE",
          "detalhe": "- Instrutor pede para que cada aluno leia e faça um resumo dos 2 temas: Tema 1. Declaração de Embarque e Declaração de Contingência, Tema 2. Exclusivo LAE (Pilar exceções fora da política).\n- Chamadas aleatórias para apresentar os resumos.",
          "tiempo": "00:30:00",
          "herramientas": [],
          "iaPic": [
            {
              "label": "PIC 1",
              "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360053237453-Declara%C3%A7%C3%A3o-de-Embarque-e-Declara%C3%A7%C3%A3o-de-Conting%C3%AAncia#:~:text=WIFI%20Pago-,Declara%C3%A7%C3%A3o%20de%20Embarque%20e%20Declara%C3%A7%C3%A3o%20de%20Conting%C3%AAncia,-h%C3%A1%2011%20dias"
            },
            {
              "label": "PIC 2",
              "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/1500007916562-Crit%C3%A9rios-para-a-entrada-de-waivers-por-erro-de-agente-e-entrega-de-exce%C3%A7%C3%B5es-fora-da-pol%C3%ADtica#h_01JWS4B9K3P367Y5KQH4RC2ESE"
            }
          ],
          "consejo": ""
        },
        {
          "macroTema": "ANAC",
          "tema": "Vídeo 3 - Conhecendo a R-400",
          "detalhe": "- Instrutor pasa o vídeo de introdução da R-400 e R218 e reforça que é preciso ter ese tema muito claro.",
          "tiempo": "0:10:00",
          "herramientas": [
            {
              "tipo": "Video",
              "url": "https://drive.google.com/file/d/1GPbP2WDb_SIPUajPeJmaUE87QdN0BSQi/view"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "ANAC",
          "tema": "Conhecendo a R-400",
          "detalhe": "- Instrutor abre R-400 no site da ANAC. Descreve itens R-400 mais utilizados no PI (Contingências / Reclamações de bagagem / Overbooking / Preterição de passageiro).",
          "tiempo": "00:40:00",
          "herramientas": [
            {
              "tipo": "GUIA",
              "url": "https://docs.google.com/document/d/1kJlwwKS-toD_p-3tushEABjAjknNzgeMiNbtsrfsJ3Q/edit?tab=t.0#heading=h.epmwztdrm8ri"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Gastos Incorridos",
          "tema": "Definições de Gastos Incorridos",
          "detalhe": "- Instrutor reforça e enfatiza os principais puntos de cada tema: 1. Gastos que podem ser analisados e reembolsados, 2. Gastos que não poderão ser reembolsados, 3. Tipos de Comprovantes, 4. Países onde se aplica compensação legal por atrasos ou cancelamentos.",
          "tiempo": "1:00:00",
          "herramientas": [],
          "iaPic": [
            {
              "label": "PIC",
              "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/45240235968531-Reclama%C3%A7%C3%B5es-por-servi%C3%A7os-b%C3%A1sicos-e-ou-gastos-incorridos-decorrentes-de-atrasos-ou-cancelamento-de-voos-da-LATAM"
            }
          ],
          "consejo": ""
        },
        {
          "macroTema": "Gastos Incorridos",
          "tema": "GUIA: Gastos Incorridos",
          "detalhe": "- Instrutor reforça como verificar os servicios básicos, gastos incorridos e/ou compensação legal que se aplicam ao cliente, deve-se consultar o: Guia de Gastos Incorridos e Serviços Básicos.",
          "tiempo": "00:15:00",
          "herramientas": [
            {
              "tipo": "GUIA",
              "url": "https://datastudio.google.com/u/0/reporting/3b790e5c-55b7-4c9a-a932-37b9dedc7f0f/page/p_f0jukq82wd?s=hFN33d8i1Gk"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Gastos Incorridos",
          "tema": "Atividade \"Briefing de Missão\" Gastos Incorridos",
          "detalhe": "- Divisão em grupos para resumo de temas específicos sobre reembolsos e compensações legales.",
          "tiempo": "00:30:00",
          "herramientas": [],
          "iaPic": [
            {
              "label": "PIC",
              "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/45240235968531-Reclama%C3%A7%C3%B5es-por-servi%C3%A7os-b%C3%A1sicos-e-ou-gastos-incorridos-decorrentes-de-atrasos-ou-cancelamento-de-voos-da-LATAM#:~:text=Gastos%20incorridos%20reembols%C3%A1veis%20e%20n%C3%A3o%20reembols%C3%A1veis"
            }
          ],
          "consejo": ""
        },
        {
          "macroTema": "Gastos Incorridos",
          "tema": "Atividade \"Ajuste de Rota com o Navegador\" Gastos Incorridos",
          "detalhe": "- Consulta no Painel contingências de um voo que sofreu contingência recentemente.",
          "tiempo": "00:30:00",
          "herramientas": [
            {
              "tipo": "Painel",
              "url": "https://datastudio.google.com/u/0/reporting/90377e61-d09d-4917-9ecf-7241be64a498/page/p_1y8no774td?s=leFlXkzOXxc"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision1",
      "label": "2: PEDIDO DE INFORMAÇÃO",
      "rows": [
        {
          "macroTema": "Resumo",
          "tema": "Resumo do dia anterior",
          "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.",
          "tiempo": "00:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1sNbehkng-SC5hO5Wcl9G4r63l7X8wqq5L-XmIlbl_94/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Pedido de informação",
          "tema": "Video 4 - Pedido de Informação",
          "detalhe": "- Instrutor mostra vídeo de introdução PI",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Video",
              "url": "https://drive.google.com/file/d/1KS10nK1o1dBUgiKgznAyWFd5ONZfbaYu/view?usp=drive_link"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Legal Box",
          "tema": "Passo a Passo Legal Box",
          "detalhe": "- Instrutor apresenta a finalidade da ferramenta e mostra detalhadamente abas do Legal Box e suas funções. (Usadas em PI).",
          "tiempo": "0:15:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1i2KGD5u9fmSgq9rhlaqAiC25qsnO-6PDbsHL255jo64/edit?slide=id.g3d5e41808b5_0_971#slide=id.g3d5e41808b5_0_971"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Legal Box",
          "tema": "Video 5 - Login Legal Box e envio de PI",
          "detalhe": "- Em seguida mostra o vídeo Login e envio de um caso no Legal Box.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Video",
              "url": "https://docs.google.com/presentation/d/1i2KGD5u9fmSgq9rhlaqAiC25qsnO-6PDbsHL255jo64/edit?slide=id.g3d5e41808b5_0_971#slide=id.g3d5e41808b5_0_971"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Advogados",
          "tema": "Escritórios de Defesa Jurídica LATAM",
          "detalhe": "- Instrutor apresenta os escritórios e o seu papel junto a equipe LAE PI.",
          "tiempo": "00:10:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1i2KGD5u9fmSgq9rhlaqAiC25qsnO-6PDbsHL255jo64/edit?slide=id.g3d5e41808b5_0_971#slide=id.g3d5e41808b5_0_971"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Padrões de Respostas",
          "tema": "Padrões de Respostas",
          "detalhe": "- Instrutor descreve as informações que são imprescindíveis para cada tema PI. Enfatiza a qualidade y respostas completas.",
          "tiempo": "01:00:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1i2KGD5u9fmSgq9rhlaqAiC25qsnO-6PDbsHL255jo64/edit?slide=id.g3d5e41808b5_0_971#slide=id.g3d5e41808b5_0_971"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Principais Temas dos Processos",
          "tema": "Principais Temas dos Processos",
          "detalhe": "- Instrutor mostra alguns ejemplos de casos PI de forma detalhada, destacando a investigação em nossas herramientas.",
          "tiempo": "02:00:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1i2KGD5u9fmSgq9rhlaqAiC25qsnO-6PDbsHL255jo64/edit?slide=id.g3d5e41808b5_0_971#slide=id.g3d5e41808b5_0_971"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Planilha de controle PI",
          "tema": "Introdução a planilha de controle",
          "detalhe": "- Instrutor apresenta todos as abas da planilha de controle explicando a finalidade e o preenchimento de cada coluna. (Controle da supervisão).",
          "tiempo": "0:20:00",
          "herramientas": [
            {
              "tipo": "Planilha",
              "url": "https://docs.google.com/spreadsheets/d/1ujZd1EP1ZqZfhSVoJ65JV8BvUyAplq9ClCCt3ZfleN0/edit?gid=0#gid=0"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Pedido de informação - PI",
          "tema": "Atividade \"Ajuste de Rota com Navegador\"",
          "detalhe": "- Aluno responde um caso PI do zero na mesa do instrutor.",
          "tiempo": "01:30:00",
          "herramientas": [
            {
              "tipo": "Legal Box",
              "url": "https://www.legalbox.com.br/latam6/new_login.asp"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision1",
      "label": "3: SISTEMAS",
      "rows": [
        {
          "macroTema": "Resumo",
          "tema": "Resumo do dia anterior",
          "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.",
          "tiempo": "00:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1sNbehkng-SC5hO5Wcl9G4r63l7X8wqq5L-XmIlbl_94/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sistemas",
          "tema": "Sistemas utilizados em LAE PI",
          "detalhe": "- Apresentação de todos os sistemas utilizados para consulta e construção de resposta PI. A equipe LAE PI não executa ação, somente consultas.",
          "tiempo": "02:30:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1WKpyzzzl2IWZS_OC5l58fIRsxzD6cY6p7iw2MpI_w9I/edit?slide=id.g3d62d643511_0_172#slide=id.g3d62d643511_0_172"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Quiz Genially",
          "tema": "Atividade \"Controle de Voo e Lançamento\"",
          "detalhe": "- Quiz sobre sistemas no Genially.",
          "tiempo": "00:20:00",
          "herramientas": [
            {
              "tipo": "Genially",
              "url": "https://view.genially.com/69e137fc406a9a0bc062d4ae"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Sistemas",
          "tema": "Atividade \"Ajuste de Rota com o Navegador\" Sistemas",
          "detalhe": "- Consulta e resposta de PI na mesa do instrutor focada no uso correto dos sistemas.",
          "tiempo": "01:00:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1WKpyzzzl2IWZS_OC5l58fIRsxzD6cY6p7iw2MpI_w9I/edit?slide=id.g3d62d643511_0_172#slide=id.g3d62d643511_0_172"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision1",
      "label": "4: EVIDÊNCIAS",
      "rows": [
        {
          "macroTema": "Evidências",
          "tema": "Evidências Unilaterais",
          "detalhe": "- O que são evidências unilaterais, sua importância y o papel dentro de uma defesa. Como capturar e legendar prints dos sistemas.",
          "tiempo": "00:30:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/18DA9mSI-M3Le49kcxUvG31XYueYzYvMcWsL9kUcvcLA/edit?slide=id.g3d5dde6c94e_0_2#slide=id.g3d5dde6c94e_0_2"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Evidências",
          "tema": "Evidências Bilaterais",
          "detalhe": "- O que são evidências bilaterais y sua importância. Onde são encontradas (Legal Box).",
          "tiempo": "00:30:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/18DA9mSI-M3Le49kcxUvG31XYueYzYvMcWsL9kUcvcLA/edit?slide=id.g3d5dde6c94e_0_2#slide=id.g3d5dde6c94e_0_2"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Evidências",
          "tema": "Atividade \"Controle de Voo e Lançamento\" Sistemas",
          "detalhe": "- Indicar funções de documentos bilaterais y simulação de resposta PI focada em evidências.",
          "tiempo": "00:40:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/18DA9mSI-M3Le49kcxUvG31XYueYzYvMcWsL9kUcvcLA/edit?slide=id.g3d5dde6c94e_0_2#slide=id.g3d5dde6c94e_0_2"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision1",
      "label": "5: BAGAGEM",
      "rows": [
        {
          "macroTema": "Resumo",
          "tema": "Resumo do dia anterior",
          "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1sNbehkng-SC5hO5Wcl9G4r63l7X8wqq5L-XmIlbl_94/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Bagagens X Aeroportos",
          "tema": "Gestão de Reclamações",
          "detalhe": "- Como é realizado o gerenciamento dos processos iniciais no aeroporto.",
          "tiempo": "00:15:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1-d0JxQ3PXq1aiHGWQv2psVRjT7z9H6wAkLEyjQWkVkA/edit?slide=id.g3d5e41808b5_0_1259#slide=id.g3d5e41808b5_0_1259"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Termos e Definições",
          "tema": "RIBs e Prazos - MSP",
          "detalhe": "- O que é RIB, detalhamento de informações y prazos para abertura, busca y indenização.",
          "tiempo": "01:00:00",
          "herramientas": [
            {
              "tipo": "MSP",
              "url": "https://docs.google.com/document/d/1Gm_xNYZjePg-w0XsCq2FoQD8jaB6oNCBII9LT9xjAmo/edit?tab=t.0"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Termos e Definições",
          "tema": "Declaração de ítens",
          "detalhe": "- Procedimento para Declaração de itens de valor na bagagem despachada (Voos dentro e saindo do Brasil).",
          "tiempo": "00:20:00",
          "herramientas": [],
          "iaPic": [
            {
              "label": "PIC",
              "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/38916416878867-10-04-25-RECLAMA%C3%87%C3%95ES-BAGAGEM-Declara%C3%A7%C3%A3o-de-itens-de-valor-na-bagagem-despachada-Voos-dentro-e-saindo-do-Brasil"
            }
          ],
          "consejo": ""
        },
        {
          "macroTema": "Termos e Definições",
          "tema": "Reclamações de Bagagens",
          "detalhe": "- Generalidades, criação de compensación vía A360/TV, bagagem danificada/violada/extraviada.",
          "tiempo": "01:00:00",
          "herramientas": [],
          "iaPic": [
            {
              "label": "PIC",
              "url": "https://pic-latam.zendesk.com/hc/pt-br/sections/4413742094227-Reclama%C3%A7%C3%B5es-Bagagem"
            }
          ],
          "consejo": ""
        },
        {
          "macroTema": "World Tracer Desktop (WTD)",
          "tema": "Atividade \"Relatório de Exploração\" WTD",
          "detalhe": "- Processos no WTD: Generalidades, Extravio, Dano, Criação de PIR.",
          "tiempo": "01:00:00",
          "herramientas": [],
          "iaPic": [
            {
              "label": "PIC",
              "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/35758923132947-World-Tracer-Desktop-WTD#h_01JDHQK77TY0RWPB1H1WMTPK77"
            }
          ],
          "consejo": ""
        },
        {
          "macroTema": "World Tracer Desktop (WTD)",
          "tema": "Atividade \"Relatório de Exploração\" WTD",
          "detalhe": "- Casos PI sobre Bagagem.",
          "tiempo": "01:00:00",
          "herramientas": [
            {
              "tipo": "Casos PI BG",
              "url": "https://docs.google.com/document/d/1ySMrqqPo-VJEaOBijvS52mbH-CrUA_-w/edit?tab=t.0"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "World Tracer Desktop (WTD)",
          "tema": "Atividade \"Relatório de Exploração\" WTD",
          "detalhe": "- Acesso ao WTD Training para buscas de Ribs y consulta de informações pertinentes para PI.",
          "tiempo": "02:00:00",
          "herramientas": [
            {
              "tipo": "WTD Training",
              "url": "https://desktop.worldtracer.aero/desktop/index.html"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "mision1",
      "label": "6: ADV / EVALUACIÓN",
      "rows": [
        {
          "macroTema": "Resumo",
          "tema": "Resumo do dia anterior",
          "detalhe": "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1sNbehkng-SC5hO5Wcl9G4r63l7X8wqq5L-XmIlbl_94/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Revisão",
          "tema": "Revisão",
          "detalhe": "- Revisão de temas da avaliação utilizando o PPT de resumo.",
          "tiempo": "00:20:00",
          "herramientas": [
            {
              "tipo": "PPT",
              "url": "https://docs.google.com/presentation/d/1sNbehkng-SC5hO5Wcl9G4r63l7X8wqq5L-XmIlbl_94/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação",
          "tema": "Jornada pelo Universo do Conhecimento",
          "detalhe": "- Avaliação via formulário.",
          "tiempo": "00:40:00",
          "herramientas": [
            {
              "tipo": "Forms AeC",
              "url": "https://docs.google.com/forms/d/e/1FAIpQLSemDPbpsw82SyJJYgjk3bA09nJZrWo64ujsio90v5Plz0FYQQ/viewform"
            },
            {
              "tipo": "Forms KON",
              "url": "https://docs.google.com/forms/d/e/1FAIpQLSdqjbKL4u5zmhQlVCTjGLAM8nUoLFkxMxa-yCeGd38yT-MO7A/viewform"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "NPS",
          "tema": "Pesquisa de Satisfação",
          "detalhe": "- QR Code para pesquisa de reação.",
          "tiempo": "00:10:00",
          "herramientas": [
            {
              "tipo": "Forms AeC",
              "url": "https://docs.google.com/forms/d/e/1FAIpQLSdKzaV5gJK1SsZnnjJb4nW3kFIXjdYPBJNPrxF9WQL79Jtg8w/viewform"
            },
            {
              "tipo": "Forms KON",
              "url": "https://docs.google.com/forms/d/e/1FAIpQLSdOqLYLlS_-qeW_u-GqMYZSTbOKGncZf1_qBGIKWiehnpWBZA/viewform"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "ADV",
          "tema": "ADV",
          "detalhe": "- Encontro con advogados para esclarecimentos sobre o proceso jurídico y a importância do PI.",
          "tiempo": "01:30:00",
          "herramientas": [
            {
              "tipo": "Meet/Presencial",
              "url": "https://docs.google.com/presentation/d/1Z81hurod8FBOVt-ibMTn7KFlNBmuox45/edit?slide=id.p1#slide=id.p1"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Encerramento",
          "tema": "Video 6 - Encerramento",
          "detalhe": "- Vídeo de encerramento PI.",
          "tiempo": "0:05:00",
          "herramientas": [
            {
              "tipo": "Video",
              "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055223693-Bagagem-Extraviada-ou-Atrasada"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Avaliação de Recuperação",
          "tema": "Ajuste de Rota para Reprovados",
          "detalhe": "- Avaliação de recuperação para quem não atingiu a média.",
          "tiempo": "00:40:00",
          "herramientas": [
            {
              "tipo": "Forms AeC",
              "url": "https://docs.google.com/forms/d/e/1FAIpQLSdu6H1DwR1C-2lm1PVckIHQxFeOAL64kCOSWGakBTAaIXtHqQ/viewform"
            },
            {
              "tipo": "Forms KON",
              "url": "https://docs.google.com/forms/d/e/1FAIpQLSeF8eY8jUJ6KS3vbDLi1BUTxRSUFhXYLWzP7RNPd60I5IaGNQ/viewform"
            }
          ],
          "iaPic": [],
          "consejo": ""
        },
        {
          "macroTema": "Correção",
          "tema": "Correção da avaliação",
          "detalhe": "- Correção da avaliação de recuperação.",
          "tiempo": "00:15:00",
          "herramientas": [
            {
              "tipo": "Forms AeC",
              "url": "https://docs.google.com/forms/d/e/1FAIpQLSdu6H1DwR1C-2lm1PVckIHQxFeOAL64kCOSWGakBTAaIXtHqQ/viewform"
            },
            {
              "tipo": "Forms KON",
              "url": "https://docs.google.com/forms/d/e/1FAIpQLSeF8eY8jUJ6KS3vbDLi1BUTxRSUFhXYLWzP7RNPd60I5IaGNQ/viewform"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    },
    {
      "tipo": "ojt",
      "label": "DESAFIO OJT",
      "rows": [
        {
          "macroTema": "Desafio OJT",
          "tema": "Desafio OJT",
          "detalhe": "Instrutor leva agentes até a operação para acompanhamento lado a lado.",
          "tiempo": "02:00:00",
          "herramientas": [
            {
              "tipo": "Operação",
              "url": "https://pic-latam.zendesk.com/hc/pt-br/articles/360055223693-Bagagem-Extraviada-ou-Atrasada"
            }
          ],
          "iaPic": [],
          "consejo": ""
        }
      ]
    }
  ]
};