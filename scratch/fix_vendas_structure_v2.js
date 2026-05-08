
import fs from 'fs';

const m1Rows = [
  {
    macroTema: "Introdução",
    tema: "Video 1 [Vendas] Boas Vindas",
    detalhe: "- Instrutor dá as boas vindas: \"A partir de agora, o nosso treinamento muda de nome: Sejam bem-vindos à Expedição Vendas pelo Universo LATAM!\"\n- Instrutor passa o vídeo de introdução.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://docs.google.com/presentation/d/1M1GHHYDo_P9m1G4ftnCou-SlhuvCWAShrlALCrPc5no/edit?usp=sharing" }],
    iaPic: []
  },
  {
    macroTema: "Apresentação PIC",
    tema: "PIC",
    detalhe: "Instrutor entra no PIC e mostra estrutura PIC, formas de busca. \nAcessa Matriz de Atendimento Vendas e Protocolos:\n1. Protocolo Estrutura de Chamadas (Foco em Boas Vindas, Deixar Pax em Espera, Despedida);\n2. Protocolo Informação de Viagem;\n3. Protocolos Check-in\n4. Protocolo de reconfirmação de dados de PNR\nInstrutor reforça a importância de reconfirmar os dados da reserva com o cliente antes de emitir ou alterar qualquer reserva.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360054073254-Protocolo-Estrutura-de-Chamadas#h_01G8C6XH6XV4BH2DPH8EMNX9AP" }],
    iaPic: []
  },
  {
    macroTema: "Apresentação Amélia",
    tema: "Amélia",
    detalhe: "- Instrutor apresenta a ferramenta Amélia (Chat Livre em ambiente controlado LATAM)",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🤖 Amélia", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Introdução Site",
    tema: "Conhecendo o site latamairlines",
    detalhe: "- Instrutor navega no site com o foco em mostrar a visão do passageiro: Onde buscar voos, informações, LATAM PASS.\n- Instrutor pede para os alunos criarem contas no seu nome em latamairlines.com.\n*Eles precisam ter acesso ao email inserido, pois irão utilizar posteriormente nos exercícios. Caso não tenham acesso, sugerir que criem um email gmail.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "✈️ Latamairlines.com", url: "https://www.latamairlines.com" }],
    iaPic: []
  },
  {
    macroTema: "Perfis de Tarifa",
    tema: "Atividade \"Briefing de Missão\" Tarifas LATAM",
    detalhe: "- Instrutor propõe atividade de busca de tarifas e seus atributos:\n1. Alunos realizam breve resumo das tarifas disponíveis na LATAM (3 min)\n2. Instrutor pede para que um aluno explique os atributos do Brand Light ( Voos dentro do Brasil e fora da América do Sul e América Central/Caribe)\n3. Pede para que o próximo aluno complemente com o atributo que o Brand Standard possui à mais.\n4. Pede para que o próximo aluno complemente com o atributo que o Brand Full possui à mais.\n5. Instrutor pede para que alguém dê um ejemplo de voo LATAM dentro do Brasil e fora da América do Sul. (Ex. BSB/GYN - GRU/NYC)\n6. Instrutor pede para que um aluno explique os atributos do Brand Light (Voos nacionais de outros paises da América do Sul e entre a América)\n7. Instrutor pede para que alguém dê um ejemplo de voo LATAM entre Américas (Ex. GRU/LIM)\n8. Instrutor pede para que um aluno explique os atributos do Brand Premium Economy.\n9.Instrutor pede para que um aluno explique os atributos do Brand Premium Business.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🌍 Site", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Perfis de Tarifa",
    tema: "Introdução Branded Fares",
    detalhe: "- Instrutor mostra aos alunos o capítulo do PIC onde podem ser encontradas mais informações sobre as tarifas.\n- Instrutor explica os tipos de rota (Doméstica, Regional, Long Haul).",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360050549933-Tarifas-" }],
    iaPic: []
  },
  {
    macroTema: "Taxas",
    tema: "Taxa de Embarque e Taxa de Serviço",
    detalhe: "- Instrutor explica o que são taxas de embarque através do site LATAM.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🌍 Site", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Taxas",
    tema: "Taxa de Embarque e Taxa de Serviço",
    detalhe: "- Instrutor explica o que é taxa de serviço focando nas considerações gerais BR, código de taxa DU e considerações de cobrança na emissão disponíveis no PIC. ",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360053045793-Taxa-de-Servi%C3%A7o#h_01GR8YGS63GM064315Z7N3J5EQ" }],
    iaPic: []
  },
  {
    macroTema: "Acordos",
    tema: "Atividade \"Briefing de Missão\" Codeshare Acordo Delta",
    detalhe: "- Instrutor mostra o caminho no PIC para encontrar informações sobre Codeshare,",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360052986693-Generalidades-Codeshare" }],
    iaPic: []
  },
  {
    macroTema: "Acordos",
    tema: "Atividade \"Briefing de Missão\" Codeshare Acordo Delta",
    detalhe: "- Instrutor mostra o caminho no PIC para encontrar informações sobre Codeshare e Acordo Delta.\n- Divide sala em grupos e pede para que metade dos grupos faça um resumo do tema Codeshare e a outra metade sobre o acordo Delta.  (5 min).\n- Instrutor pede para que 1 representante de cada grupo fale sobre los principais pontos dos acordos, pede para los demais grupos complementarem e caso falte alguma información, acrescenta.",
    tiempo: "0:20:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/22162184180499-Acordo-Delta-DL" }],
    iaPic: []
  },
  {
    macroTema: "Acordos",
    tema: "Atividade \"Guerra nas Estrelas\" Acordos e tarifas ",
    detalhe: "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido \n- Instrutor envia link EducaPlay e explica tipo e tempo de (acordo com cronograma) para praticarem\nVale ressaltar que é possível jogar mais de uma vez, caso terminem antes do prazo ",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🎮 Educaplay", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Bagagem",
    tema: "Atividade \"Relatório de Exploração\" 0. Introdução à Bagagens 1. Franquia LATAM e Interline 2. Excesso de Bagagem 3. Bagagem Especial 4. Artigos restritos (itens perigosos)",
    detalhe: "- Instrutor entra no PIC- Manual Procedimentos Comerciais Bagagem, explica o \"menu\" lateral esquerdo e explica a dinâmica da atividade.\n1. Instrutor projeta a pergunta através do GENIALLY os alunos terão o tempo de 2 minutos para encontrar as respostas no PIC. Quem encontrar primeiro, se manifesta e marca ponto.\n2. Aluno responde e explica onde encontrou a respuesta (instrutor projeta e vai mostrando no computador e corrige ou complementa, se necesario)\nRepetir a mesma dinámica para todas as perguntas. \n- Ao final, instrutor questiona se alguien ficou com dúvidas. \nOBS. Se o tempo acabar e ninguém encontrar a respuesta, instrutor mostra onde está no PIC.",
    tiempo: "0:25:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360049744854-Generalidades-Bagagem-" }],
    iaPic: []
  },
  {
    macroTema: "Serviços e Pax Expeciais",
    tema: "Vídeo UMNR e PETC",
    detalhe: "- Instrutor explica que a LATAM possui alguns servicios especiais e que na alta temporada os mais tranportados são UMNR e PETC.\n- Em seguida passa os vídeos do \"Tá no Ar\"",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Serviços e Pax Expeciais",
    tema: "Protocolos",
    detalhe: "- Instrutor mostra os protocolos a serem utilizados para SSEE.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055886633-Protocolo-Servi%C3%A7os-Especiais" }],
    iaPic: []
  },
  {
    macroTema: "Serviços e Pax Expeciais",
    tema: "Atividade \"Briefing de Missão\" SSEE",
    detalhe: "- Instrutor mostra o caminho no PIC para encontrar SSSE, em seguida dividir em grupos e dar un tema para cada:\nCada grupo deverá ler sobre o SSEE que lhe corresponda e apresentá-lo aos demais da classe.\n6 temas\n5 min para fazer o resumo e 5 min para cada grupo apresentar.\nInstrutor corrige e complementa sempre que necesario.\nTemas:\nAnimais (AVIH/PETC)\nAssento adicional (EXST/CBBG)\nBaby Bassinet (BSCT)/ Bebe conforto (INCU)\nMenor desacompanhado (UMNR)\nBebe conforto (INCU)\nAlimentação Especial\nCadeira de Rodas",
    tiempo: "0:45:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/sections/360011672273-Servi%C3%A7os-Especiais" }],
    iaPic: [
      { label: "Animais (AVIH/PETC)", url: "" },
      { label: "Assento adicional (EXST/CBBG)", url: "" },
      { label: "Baby Bassinet (BSCT)", url: "" },
      { label: "Bebe conforto (INCU)", url: "" },
      { label: "Menor desacompanhado (UMNR)", url: "" },
      { label: "Alimentação Especial", url: "" },
      { label: "Cadeira de Rodas", url: "" }
    ]
  },
  {
    macroTema: "Serviços e Pax Expeciais",
    tema: "Atividade \"Briefing de Missão\" Passageiros Especiais",
    detalhe: "Instrutor mostra o camino no PIC para encontrar Pax Especiais, em seguida dividir em grupos e dar un tema para cada:\nCada grupo deberá ler sobre o tema que lhe corresponda e apresentá-lo aos demais da classe.\n5 temas\n5 min para fazer o resumo e 5 min para cada grupo apresentar.\nInstrutor corrige e complementa sempre que necesario.\nTemas:\nPassageiros Especiais\nGestantes\nNecessidade de assistência especial\nCertificação médica (MEDIF)\nAnimais de Assistência (SVAN-ESAN)",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/sections/360010556514-Passageiros-Especiais" }],
    iaPic: [
      { label: "Gestantes", url: "" },
      { label: "Necessidade de assistência especial", url: "" },
      { label: "Certificação médica (MEDIF)", url: "" },
      { label: "Animais de Assistência (SVAN-ESAN)", url: "" }
    ]
  },
  {
    macroTema: "Serviços e Pax Expeciais",
    tema: "Atividade \"Guerra nas Estrelas\" SSEE e Pax Especiais",
    detalhe: "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido \n- Instrutor envia link EducaPlay e explica tipo e tiempo de (acordo con cronograma) para praticarem\nVale ressaltar que é posible jogar más de uma vez, caso terminem antes do prazo ",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🎮 Educaplay", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Video 2 [Vendas] Introdutório Vendas A360",
    detalhe: "- Instrutor passa o vídeo.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Atividade \"Briefing de Missão\" Vendas",
    detalhe: "- Instrutor mostra o caminho do PIC e pede para se dividirem em 5 grupos. Cada grupo lerá as considerações, fazendo um resumo.\nUm representante do grupo apresenta uma consideração. 5 min para pesquisar                                                                                                                                                                                                                                                                                                                                       \n- Instrutor deve corrigir e complementar se necesario.",
    tiempo: "0:40:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360052861173-Reserva-e-emiss%C3%A3o-de-passagens" }],
    iaPic: []
  },
  {
    macroTema: "Resumo",
    tema: "Resumo do dia anterior",
    detalhe: "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em um flipchart ou quadro os temas.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Atividade \"Ajuste de Rota con o Navegador\" Login e Reserva",
    detalhe: "- Instrutor passa o login da ferramenta Training (A360), mostra a maneira de se logar e explica que na operação irão logar com seu BP e senha.\n- Instrutor entra na ferramenta Training e propõe que um aluno mostre como realizar a reserva e criar uma ordem simples através da ferramenta training  (instrutor será o pax e realizará o pagamento no seu perfil do agente 360, através do link de pagamento).\nO aluno deberá seguir o passo a passo do PIC e o instrutor sendo um dos passageiros (passar seus dados e email).\nAo final, instrutor mostra os campos do Agente 360 (lado esquerdo). Explica brevemente que o histórico de todas as ações fica registrado e que eles aprenderão a leitura na Expedição PV 2.",
    tiempo: "0:25:00",
    herramientas: [{ tipo: "💻 A360 TRN", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Remarks",
    detalhe: "- Instrutor explica o que são remarks e que devem ser sempre inseridos como respaldo das informações passadas ao cliente e como podem ser visualizados na ferramenta Agente 360.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "💻 A360 TRN", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Reforçar protocolo",
    detalhe: "Ao final da criação do PNR, o instrutor pede para os alunos olharem o protocolo de documentação, entra em latamairlines.com para mostrar onde está a información e indica como adicionar a información dada no RMK.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360054073254-Protocolo-Estrutura-de-Chamadas#h_01G8C6XH6XV4BH2DPH8EMNX9AP" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Video 3 [Vendas] Link de pagto",
    detalhe: "- Instrutor passa vídeo ",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Link de Pagamento",
    detalhe: "- Pede para o agente enviar o link de pagamento para o seu email, projeta e mostra como pagar con os dados do cartão ficticio (reforça que é a visión do pax).",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4411825576083-Pagamento-Link" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "CUV",
    detalhe: "- Instrutor explica o que é o CUV e como reenviá-lo através do Agente 360,",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4407703691155-Comprovante-%C3%9Anico-de-Venda-CUV" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Reservas",
    detalhe: "- O instrutor pede para que os alunos realizem reservas de acordo con o proposto no GENIALLY.\n- instrutor indica para que todos os \"agentes\" fiquem con os protocolos abertos e o utilizem nas simulações. \n- Instrutor mostra o campo \"minhas anotações\" da herramienta Agente.  \nTodas as ordens devem ser anotadas em um arquivo que o aluno tenha acesso posteriormente.",
    tiempo: "1:00:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Ordens de Clientes",
    detalhe: "- Instrutor explica como realizar a busca e exibição de uma ordem e diferença de ordem logada de não logada.        \n- Instrutor explica como identificar a origem da ordem.                                                                         ",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4407014380307-Ordens-de-Clientes" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Check-in Automático",
    detalhe: "- Intrutor explica sobre o Check-in automático (indica que o check-in é automático para todos os passageiros con ordem (visualización do cliente)\n- Mostrar como chega a confirmação da compra e a notificação no e-mail do cliente, através das telas do PIC. ",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360053236793-Check-In" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Video 4 [Vendas] Simulação Split",
    detalhe: "- Instrutor passa o vídeo.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Atividade \"Ajuste de Rota con o Navegador\" Split Reservas",
    detalhe: "- Instrutor explica o que é o SPLIT, pede para agentes entrarem no PIC (split) e outro aluno vai até a mesa e demonstra em uma ordem previamente criada pelo instrutor, como dividir a ordem no Agente 360 TRN seguindo o paso a paso.",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055936373-Split-de-Reserva-Individuais-e-Grupo" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Atividade \"Controle de Voo e Lançamento\" Split",
    detalhe: "- Com as ordens criadas anteriormente, os agentes voltam a ser pax e agente e simular un contato solicitando a división da ordem. ",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Isenção de Taxa de Serviço",
    detalhe: "- Instrutor explica os casos em que a isenção da taxa DU pode ser realizada, mostrando o paso a paso no PIC.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/12943186481299-Processo-para-isen%C3%A7%C3%A3o-de-taxa-de-servi%C3%A7o-em-latamairlines-com" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Atividade \"Controle de Voo e Lançamento\" Isenção Taxa de Serviço",
    detalhe: "- O instrutor pede para que os alunos realizem reservas de acordo con o proposto no Genially y procedam con a isenção da taxa DU. ",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Video 5 [Vendas] Introdutório LATAM Wallet",
    detalhe: "- Instrutor passa o vídeo.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Atividade \"Relatório de Exploração\" LATAM Wallet",
    detalhe: "- Instrutor entra no PIC e mostra onde encontrar informacións sobre a LATAM Wallet.\n- Instrutor dá 5 min para que os alunos façam un resumo do tema.\n Instrutor projeta a pergunta através do GENIALLY e escolhe un agente para responder. Caso ele erre, pede para outra pessoa responder. Se ele acertar, escolhe o aluno que responderá a próxima pergunta.\n- Ao final, instrutor questiona se alguien ficou con dúvidas. ",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4414246715027-LATAM-Wallet" }],
    iaPic: []
  },
  {
    macroTema: "Solicitação de Serviços Agente 360",
    tema: "Video 6 [Vendas] Introdutório SSEE ",
    detalhe: "- Instrutor mostra video",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Solicitação de Serviços Agente 360",
    tema: "Atividade \"Controle de Voo e Lançamento\" SSEE A360",
    detalhe: "- Instrutor pede para que os alunos simulem chamadas de acordo aos cases propostos no PPT.",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ancillaries",
    tema: "Atividade \"Briefing de Missão\" Ancillaries",
    detalhe: "- Instrutor mostra o camino no PIC para encontrar o assunto Ancillaries e propõe para os grupos que pesquisem tipos de EMD. 5 min para fazer resumo e 3 min para apresentar para a sala. ",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360052161874-EMD" }],
    iaPic: []
  },
  {
    macroTema: "Ancillaries",
    tema: "Atividade \"Briefing de Missão\" Ancillaries",
    detalhe: "- Instrutor complementa con a explicação de quais e como realizar a venda de un ancillary de: (UMNR), (PETC) e (AVIH) por meio do A360 ",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/47091784533395-05-12-25-SERVI%C3%87OS-ESPECIAIS-Ativa-se-a-venda-dos-servi%C3%A7os-de-menor-desacompanhado-UMNR-animal-de-estima%C3%A7%C3%A3o-na-cabine-PETC-e-no-por%C3%A3o-AVIH-por-meio-do-agente-360" }],
    iaPic: []
  },
  {
    macroTema: "Ancillaries",
    tema: "Venda de Malas",
    detalhe: "- Instrutor explica  como pax solicita un bilhete con a venda de bag.",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4414544635155-Venda-de-Malas" }],
    iaPic: []
  },
  {
    macroTema: "Ancillaries",
    tema: "Atividade \"Ajuste de Rota con o Navegador\" Venda Assistida de Malas",
    detalhe: "- Instrutor pede para un aluno ir até a mesa e mostrar como pax solicita un bilhete con a venda de bag.",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/37493881988371-Venda-Assistida-de-bagagem-pelo-Agente-360" }],
    iaPic: []
  },
  {
    macroTema: "Ancillaries",
    tema: "Venda de Assentos",
    detalhe: "- Instrutor explica  como realizar a venda de assentos.",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360049744894-Venda-de-Sele%C3%A7%C3%A3o-de-Assentos" }],
    iaPic: []
  },
  {
    macroTema: "Ancillaries",
    tema: "Atividade \"Relatório de Exploração\" LATAM Flex",
    detalhe: "- Instrutor entra no PIC Manual Procedimentos Comerciais - LATAM Flex e explica a dinámica.\n1. Instrutor divide a sala em 2 grupos. Essa será uma \"batalha\" entre grupos. \n- Instrutor projeta a pergunta no GENIALLY  e coloca o cronômetro de 1 minuto. O grupo que achar a respuesta primeiro se manifesta e tem o direito de respuesta. Se a respuesta estiver certa, marca ponto. Se estiver errada, o outro grupo tem direito a responder e marcar o ponto. \n2. Aluno representante do grupo que acertou  responde e explica onde encontrou a respuesta (instrutor projeta e vai mostrando no computador)\nRepetir a mesma dinámica para todas as perguntas.\n- Ao final, instrutor questiona se alguien ficou con dúvidas.\nOBS. Se o tempo de 1 minuto acabar e ninguém encontrar a respuesta, instrutor mostra onde está no PIC.",
    tiempo: "0:20:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/17098820775187-LATAM-FLEX" }],
    iaPic: []
  },
  {
    macroTema: "Resumo",
    tema: "Resumo do dia anterior",
    detalhe: "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias o escrever diretamente em un flipchart ou quadro os temas.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ancillaries",
    tema: "Atividade \"Controle de Voo e Lançamento\" Ancillaries",
    detalhe: "- O instrutor pede para que os alunos simulem chamadas de acordo aos cases propostos no PPT.",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ancillaries",
    tema: "Atividade \"Jornada pelo Universo do Conhecimento\" Vendas con Ancillaries",
    detalhe: "- Instrutor pede para que os alunos abram o forms e realizem a atividade proposta. \n- Instrutor acompanha a folha de respuestas e corrige as ordens: Atribuindo nota para  os acertos: \n1. Rota correta (20 p)\n2. PAX: 1 adulto e 1 criança (20 p)\n3. Tarifa Standard (20 p)\n4. Vendeu assento? (10 p)\n5. Vendeu bagagem? (10 p)\nApós corrigir as ordens, instrutor deve preencher\n Diário de Bordo",
    tiempo: "0:50:00",
    herramientas: [{ tipo: "📋 Forms AEC", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Painel de Pagamento Agente 360",
    tema: "Atividade \"Briefing de Missão\" Painel de Pagamentos ",
    detalhe: "- Instrutor pede para que os alunos acessem o material \"Console XP\" no PIC e dá 5 minutos para lerem o conteúdo. Depois pede para que un dos alunos explique para os demais da sala do que se trata a herramienta e qual sua principal función. ",
    tiempo: "0:20:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/5443079309971-Console-XPSP" }],
    iaPic: []
  },
  {
    macroTema: "Lista de Vendas",
    tema: "Video 7 [Vendas] Lista de vendas",
    detalhe: "- Instrutor mostra video",
    tiempo: "0:02:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Lista de Vendas",
    tema: "Lista de Vendas",
    detalhe: "- Instrutor mostra onde encontrar información sobre lista de vendas no PIC.",
    tiempo: "0:03:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/40176305951123-NOVA-FUNCIONALIDADE-LISTA-DE-VENDAS-AGENTES" }],
    iaPic: []
  },
  {
    macroTema: "Perfil Cliente",
    tema: "Atividade \"Guerra nas Estrelas\" Notificações aos Passageiros",
    detalhe: "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido \n- Instrutor envia link EducaPlay e explica tipo e tiempo de (acordo con cronograma) para praticarem\nVale ressaltar que é posible jogar más de uma vez, caso terminem antes do prazo ",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🎮 Educaplay", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Perfil Cliente",
    tema: "Semáforo de Afetação",
    detalhe: "- Instrutor explica o que é, mostrando as telas do PIC.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/43013540923667-Sem%C3%A1foro-de-afeta%C3%A7%C3%A3o-Criticality-Score" }],
    iaPic: []
  },
  {
    macroTema: "Perfil Cliente",
    tema: "Erros de pagamento",
    detalhe: "- Instrutor explica a tabela de erros de pagamento e dá 2 ejemplos de solução.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4403974273299-Erros-de-pagamento" }],
    iaPic: []
  },
  {
    macroTema: "INCIDENTES",
    tema: "Relatar incidentes A360",
    detalhe: "- Instrutor mostra formulário incidências disponível no PIC e orienta que los agentes devem chamar o supervisor para auxiliar no preenchimento.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4405966901523-Detalle-Formularios-Incidencias" }],
    iaPic: []
  },
  {
    macroTema: "Avaliação Vendas A360",
    tema: "Jornada pelo Universo do Conhecimento \"Vendas\"",
    detalhe: "- Instrutor aplica a avaliação.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "📋 Forms AEC", url: "" }],
    iaPic: []
  }
];

const m2Rows = [
  {
    macroTema: "Casos",
    tema: "Criação de Casos Agente 360",
    detalhe: "- Instrutor mostra através do Agente 360 Training o formulário de criação de casos, detalhando cada campo a ser preenchido, com ênfase naqueles que contém asteriscos.. Criação de casos via Agente 360\n- Instrutor mostra os processos que se faz necesario o cliente enviar documentos como Entrega ou Envio de CUV, solicitações de certificados (Declaração de embarque).   \n- Instrutor explica que nestes processos os casos não devem ser gerados pelo CDA e sim pelo Agente 360:                                                                                                                                                                                                            ",
    tiempo: "0:30:00",
    herramientas: [
      { tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/31926091283859-Abrir-caso-Zendesk" },
      { tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/40223076355091-10-04-25-Elimina%C3%A7%C3%A3o-de-cria%C3%A7%C3%A3o-de-casos-atrav%C3%A9s-do-Centro-de-Ajuda-do-site" }
    ],
    iaPic: []
  },
  {
    macroTema: "Casos",
    tema: "Atividade \"Controle de Voo e Lançamento\" Criação de Casos Agente 360",
    detalhe: "- Instrutor pede para que os alunos simulem chamadas de acuerdo aos cases propostos no PPT.",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Zendesk",
    tema: "Introdução",
    detalhe: "- Instrutor apresenta a ferramenta e suas funcionalidades",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk" }],
    iaPic: []
  },
  {
    macroTema: "Zendesk",
    tema: "1. Conceitos básicos",
    detalhe: "- Instrutor mostra a partir do PIC os conceitos básicos do aplicativo.",
    tiempo: "0:20:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk" }],
    iaPic: []
  },
  {
    macroTema: "Zendesk",
    tema: "2. Inicio no Sistema Único de casos",
    detalhe: "- Instrutor mostra como entrar na ferramenta.",
    tiempo: "0:20:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk" }],
    iaPic: []
  },
  {
    macroTema: "Zendesk",
    tema: "3. Funcionalidades",
    detalhe: "- Instrutor mostra suas funcionalidades a partir da ferramenta:\nVisualizações \nBusca de solicitante \nInclusão de un solicitante\nModificação de un solicitante\nClassificar un ticket\nReclassificar un ticket\nFundir tickets\nCriação de ticket filho\nReabrir casos con macros o Reenviar último comentário público",
    tiempo: "0:20:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk" }],
    iaPic: []
  },
  {
    macroTema: "Zendesk",
    tema: "4. Navegação Zendesk",
    detalhe: "- Instrutor mostra suas funcionalidades a partir da ferramenta.\n-Instrutor mostra no PIC as funcionalidades da herramienta.\n- Instrutor explica como utilizar a varinha inteligente. ",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055558073-Zendesk" }],
    iaPic: []
  },
  {
    macroTema: "Zendesk",
    tema: "Atividade \"Ajuste de Rota con o Navegador\" Zendesk",
    detalhe: "- Instrutor mostra casos reais da herramienta para identificar os requerimentos do cliente.\n- Instrutor mostra as partes do caso e posible resolución.",
    tiempo: "0:35:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Avaliação Zendesk",
    tema: "Jornada pelo Universo do Conhecimento \"Casos\"",
    detalhe: "- Instrutor aplica a avaliação.",
    tiempo: "0:20:00",
    herramientas: [{ tipo: "📋 Forms AEC", url: "" }],
    iaPic: []
  }
];

const m3Rows = [
  {
    macroTema: "LATAM PASS",
    tema: "Resumo do dia anterior",
    detalhe: "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em un flipchart ou quadro os temas.",
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
    detalhe: "- Instrutor explica considerações produto, categoria e benefícios LATAM PASS milhas de acordo con a publicação no PIC.\n- Instrutor fala sobre como é atribuido o número de sócio no BR. \n- Instrutor apresenta as categorias Latam Pass, regras para se qualificar e benefícios.",
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
    detalhe: "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido \n- Instrutor envia link EducaPlay e explica tipo e tiempo de (acordo con cronograma) para praticarem\nVale ressaltar que é posible jogar más de uma vez, caso terminem antes do prazo ",
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
    detalhe: "- Instrutor apresenta o vídeo e pede para que los alunos comentem o que entenderam do vídeo.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🎥 Youtube", url: "https://www.youtube.com/shorts/71J3rlILGY4?feature=share" }],
    iaPic: []
  },
  {
    macroTema: "LATAM PASS",
    tema: "Atividade \"Controle de Voo e Lançamento\" Acúmulo de Milhas",
    detalhe: "- O instrutor pede para que os alunos assistam aos vídeos con dúvidas de passageiros e elege un aluno diferente para entregar cada solución. A respuesta correta está no rodapé do PPT.",
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
    detalhe: "- Instrutor destaca que há duas opções de canais para o atendimento NOVOZ. Na opção chat, existem dois subtipos: Chat CDA e Chat FCI. Ele explica, paso a paso, os fluxos de atendimento e as diferenças entre os procedimentos que podem ser realizados em cada canal.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "NÃO VOZ",
    tema: "Chat FCI x Chat CDA",
    detalhe: "- O instrutor reforça as diferenças entre os tipos de chat e aproveita para solicitar que un participante da turma explique, em poucas palavras, o que caracteriza cada un.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "NÃO VOZ",
    tema: "Anexos",
    detalhe: "- Instrutor mostra conteúdos anexos através do PIC. Explica que se trata de un conjunto de documentos para auxiliar \nAnexo 1 - Fluxo derivação  Chat web Genesys (INVOL) \nAnexo 2 - Fluxo derivação  Chat web Genesys (Booking)\nAnexo 3 - Chat web Genesys (Alterações Voluntárias)\nAnexo 4 - WhatsApp Compra de bagagens\nAnexo 5 - Fluxo  Chat web Genesys (Ancillaries)\nAnexo 6 - Fluxo derivação Chat web Genesys (SDFC)\nAnexo 7 - Chat web Check-in\nAnexo 8 -  Chat web Devoluções\nAnexo 9 - Chat Web Cola Default Interações sem información\nAnexo 10 - Chat web Booking milhas\nAnexo 11 - Chat Web Recovery Assentos \nAnexo 12 - Fluxo Derivação GBM (Google Business Messages) \nAnexo 13 - Fluxo Derivação Chat Web Necessidades Especiais ",
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
    detalhe: "- Instrutor introduz processos realizados pelo canal novoz. Revisa os procesos que estão disponíveis para a solicitação e recepção de documentos estando online con o cliente, enfatizando os passos do processo WhatsApp e Chat, em seguida mostra o paso a paso.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/34169487426323-Solicita%C3%A7%C3%A3o-de-documenta%C3%A7%C3%A3o-via-WhatsApp" }],
    iaPic: []
  },
  {
    macroTema: "NÃO VOZ",
    tema: "Forma de Pagamento OT WS",
    detalhe: "- Instrutor explica a FOP OT e mostra paso a paso PIC.",
    tiempo: "0:25:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/30270075990803-Forma-do-pagamento-OT-Pago-para-Canal-N%C3%A3o-Voz" }],
    iaPic: []
  },
  {
    macroTema: "Resumo",
    tema: "Resumo do dia anterior",
    detalhe: "- Instrutor atividade de chuva de idéias para resgatar con os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em un flipchart ou quadro os temas.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://docs.google.com/presentation/d/1Ueeo7fq-I20yqWiWGPFgt1_Tt-Zqs5auNraYoezpgRw/edit?slide=id.g1e447d4f136_1_44#slide=id.g1e447d4f136_1_44" }],
    iaPic: []
  },
  {
    macroTema: "Prática",
    tema: "Simulador Genesys Whatsapp/Chat",
    detalhe: "- Instrutor explica como acessar o simulador e pasa módulo NOVOZ. Na tela inicial o aluno deve inserir o BP.",
    tiempo: "1:15:00",
    herramientas: [{ tipo: "💻 Simulador", url: "https://view.genially.com/699ceeb2c29dd6b1df292e3e" }],
    iaPic: []
  },
  {
    macroTema: "Prática",
    tema: "Casos",
    detalhe: "- Instrutor mostra PPT con ejemplos de casos reais e analiza junto con os alunos.",
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

const landingRows = [
  {
    macroTema: "LANDING",
    tema: "Configuração Perfil Zendesk",
    detalhe: "- Instrutor deve orientar agentes na configuração do perfil Zendesk, inserindo o logo da LATAM na foto de perfil e a assinatura deve ser o nome conforme registro MOP.",
    tiempo: "0:45:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://docs.google.com/presentation/d/1_9NGVYmcU7YEoy7x_av2hRctf2FinggX7T_Fi-CHm8o/edit?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "LANDING",
    tema: "Genesys Cloud",
    detalhe: "- Instrutor apresenta no PIC as funcionalidades da ferramenta Genesys Cloud.\n- Instrutor reforça a importância de derivação à EPA em todas chamadas.",
    tiempo: "1:00:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/34047723735571-Detalhes-Genesys" }],
    iaPic: []
  },
  {
    macroTema: "LANDING",
    tema: "Simulador Genesys ",
    detalhe: "- Instrutor orienta os alunos a acessarem o simulador.\n Na tela inicial o aluno deve inserir o BP.",
    tiempo: "0:40:00",
    herramientas: [{ tipo: "💻 Simulador", url: "https://view.genially.com/699ceeb2c29dd6b1df292e3e" }],
    iaPic: []
  },
  {
    macroTema: "LANDING",
    tema: "Teste de Acessos ",
    detalhe: "Testar acessos dos sistemas e Genesys Cloud",
    tiempo: "3:30:00",
    herramientas: [
      { tipo: "📋 Forms AEC", url: "https://forms.gle/rKS7Kt63hopmVMJE7" },
      { tipo: "📋 Forms AEC", url: "https://docs.google.com/forms/d/e/1FAIpQLSexgezH2lsexp3YzT2LdxJnPLqmaDA7849G2FVIrgQK78C1EA/viewform" }
    ],
    iaPic: []
  },
  {
    macroTema: "LANDING",
    tema: "Treinamentos obrigatórios",
    detalhe: "Treinamento obrigatório PCI LATAM",
    tiempo: "1:00:00",
    herramientas: [{ tipo: "💼 SAP", url: "https://forms.gle/rKS7Kt63hopmVMJE7" }],
    iaPic: []
  },
  {
    macroTema: "LANDING",
    tema: "Treinamentos obrigatórios",
    detalhe: "Código de Conduta ",
    tiempo: "1:10:00",
    herramientas: [{ tipo: "💼 SAP", url: "" }],
    iaPic: []
  }
];

const ojtRows = [
  {
    macroTema: "Desafio OJT 1",
    tema: "Desafio OJT 1",
    detalhe: "Instrutor entra no Genesys e faz escuta de 1 chamada com a turma dentro da sala. \nApós finalizada a chamada, comenta sobre os pontos positivos / negativos da chamada e principais indicadores.",
    tiempo: "1:45:00",
    herramientas: [{ tipo: "🎯 Operação", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Desafio OJT 1",
    tema: "Desafio OJT 1",
    detalhe: "Instrutor leva agentes até a operação para atendimento de chamadas.",
    tiempo: "5:00:00",
    herramientas: [{ tipo: "🎯 Operação", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Desafio OJT 1",
    tema: "Desafio OJT 1",
    detalhe: "Instrutor  tira dúvidas referentes ao atendimento do dia.",
    tiempo: "0:40:00",
    herramientas: [{ tipo: "🎯 Operação", url: "" }],
    iaPic: []
  }
];

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
    detalhe: "O instrutor baseado no ppt vai desenvolvendo e explicando cada tema contido:\na) Cliente: Indica como percebemos o cliente de hoje, como o escutamos e entendemos a sua percepção do nosso serviço.\nb) Companhia: Quem somos e a presença da LATAM no negócio aeronáutico.\nc) Produtos: Detalha as características de cada produto e seu valor. Ou seja, a experiência que o cliente vive ao adquirir os produtos e serviços. \nd) Papel do executivo: O que esperamos de un executivo de vendas LATAM Travel.",
    tiempo: "1:00:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 1: Boas-vindas",
    tema: "Boas-vindas",
    detalhe: "O instrutor usa o ppt como apoio:\nDesenvolve como se realiza as boas-vindas, abordando todos os passos ideais para assegurar que o cliente se sinta acolhido.\nMostra cada un dos elementos que devem estar presentes nas boas-vidas.",
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
    detalhe: "O instrutor usa o ppt como apoio:\n1. Explica aos participantes em que consiste a etapa de Oferecer/Cotar e qual é a sua importância.\n2. Comenta qual é o objetivo principal na inspeção Oferecer/cotar:  Cria uma proposta de viagem associada à necessidade do cliente.\n3. Desenvolve como é feito a oferta, cada un dos atributos dos nossos produtos e serviços associando-os a cada uma das necessidades do cliente.\n4. Mostra como cada un dos argumentos de venda de cada un dos produtos vai se desenvolvendo.\nRoll playing (10 min):\n - O instrutor convida os alunos a participar nos roll playing dispostos para exercitar a realização de como se oferece vinculando os atributos con as necessidades do cliente.\n - Vai entregando feedback aos participantes e reforçando os elementos (assegurar unir a “oferta” do produto à necessidade expressada pelo cliente).",
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
    detalhe: "O instrutor:\n1. Recapitula os pontos principais e críticos de cada una das 4 etapas vistas.\n2. Faz o encerramento, despedindo-se e convidando-os para participar amanhã para a etapa seguinte.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Abertura",
    tema: "Boas-vindas e Revisão",
    detalhe: "Boas-vindas:\nO instrutor realiza as boas-vindas para un novo dia de conhecimentos.\nRevisão:\nO instrutor faz perguntas para repassar e reforçar os temas desenvolvidos no dia anterior.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Agenda",
    tema: "Agenda",
    detalhe: "O instrutor comenta:\n - O objetivo do curso dia 2.\n - A agenda de trabalho programada para o dia 2.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 4: Gestão de objeções",
    tema: "Gestão de objeções.",
    detalhe: "O instrutor usa o ppt como apoio:\n1 - Mostra qual é o objetivo principal da gestão das objeções: É o persuadir o cliente, convencê-lo de comprar nosso produto.\n2 - Desenvolve as principais objeções apresentadas pelo cliente e a forma de abordá-la persuadindo a sua decisão.\n3 - Desenvolve como se gerencia e se persuade utilizando a argumentação para rebater as objeções do cliente. \n4- Usa, analisando cada un dos argumentos contidos no Manual de Gestão de objeções do executivo.",
    tiempo: "1:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 5: Fechamento da venda",
    tema: "Fechamento da venda",
    detalhe: "O instrutor usa o ppt como apoio:\nDesenvolve como se realiza as boas-vindas, abordando todos os pasos ideais para assegurar que o cliente se sinta acolhido.\nMostra cada un dos elementos que devem estar presentes nas boas-vidas.",
    tiempo: "1:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 6: Acompanhamento",
    tema: "Acompanhamento",
    detalhe: "O instrutor baseado no ppt:\n1- Mostra todos os pormenores para realizar o acompanhamento de un cliente, con o objetivo de realizar o fechamento efetivo da venda.\n2 - Desenvolve cada parte que compõe o acompanhamento.",
    tiempo: "0:40:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 7: Reserva ",
    tema: "Reserva",
    detalhe: "O instrutor usa o ppt como apoio:\n1. Explica cada un dos elementos que devem estar presentes no proceso de realização de uma reserva. \n2. Comenta qual é o objetivo principal na inspeção Reservas:  Entrega todos elementos relevantes que compõe a viagem do cliente.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 8: Pagamento",
    tema: "Pagamento",
    detalhe: "O instrutor usa o ppt como apoio:\n1. Explica cada un dos elementos que devem estar presentes no proceso de pagamento dos produtos e serviços adquiridos.\n2. Comenta qual é o objetivo principal da etapa de pagamento:  Ressalta a segurança que a companhia oferece nas formas de pagamento utilizadas pelo cliente e as facilidades de pagamento.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Etapa 9: Despedida",
    tema: "Despedida",
    detalhe: "O instrutor usa o ppt como apoio:\n1. Explica cada un dos elementos que devem estar presentes na despedida con o cliente.\n2. Comenta qual é o objetivo principal na despedida:  Fidelizar nossos clientes e assegurar que conosco eles tem uma experiência única e diferenciada.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Atividade",
    tema: "Roll playing",
    detalhe: "ATIVIDADE - Roll playing : \n - O instrutor convida os alunos a participar nos roll playing dispostos para exercitar a persuadir o cliente. \n- Vai entregando feedback aos participantes e reforçando os elementos.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  },
  {
    macroTema: "Encerramento",
    tema: "Recapitulação/Atividade Final",
    detalhe: "O instrutor:\n1. Recapitula os pontos principais ou críticos de cada una das 3 etapas vistas.\n2. Pede para que participem nesta recapitulação.\n3. Faz o encerramento, despedindo-se e convidando-os para participar amanhã para a etapa seguinte.",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "https://drive.google.com/drive/folders/1qkss1xvAmuJ27dz47puVB_sjJDNBwv0r?usp=drive_link" }],
    iaPic: []
  }
];

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const endIdx = content.indexOf('};', startIdx) + 2;

const newPlanet = `export const VENDAS_WS_12_DATA = {
  texture: "CRATERS",
  color: "#1b0088",
  label: 'Vendas + WS 12 dias',
  onboardingIdx: 1,
  secciones: [
    {
      tipo: 'mision1',
      label: 'Missão 1: Vendas',
      rows: ${JSON.stringify(m1Rows, null, 2)}
    },
    {
      tipo: 'mision1',
      label: 'Missão 2: Casos',
      rows: ${JSON.stringify(m2Rows, null, 2)}
    },
    {
      tipo: 'mision1',
      label: 'Missão 3: - LATAM PASS',
      rows: ${JSON.stringify(m3Rows, null, 2)}
    },
    {
      tipo: 'mision1',
      label: 'Missão 4 - NÃO VOZ',
      rows: ${JSON.stringify(m4Rows, null, 2)}
    },
    {
      tipo: 'landing',
      label: 'LANDING 1',
      rows: ${JSON.stringify(landingRows, null, 2)}
    },
    {
      tipo: 'desafio',
      label: 'Desafio OJT 1',
      rows: ${JSON.stringify(ojtRows, null, 2)}
    },
    {
      tipo: 'mision1',
      label: 'WS Vendas',
      rows: ${JSON.stringify(wsRows, null, 2)}
    }
  ],
  materiais: [],
  evalKon: [],
  evalAec: [{ label: "Forms AEC", url: "https://forms.gle/CkUwWV9wv41TpWfr9" }],
  evalMsg: 'Os alunos que não atingirem a média final de 80% devem realizar o "Ajuste de Rota" - Avaliação de recuperação e somente após a aprovação realizar os testes de acessos.\\nDuração: 30 min'
};`;

const newContent = content.substring(0, startIdx) + newPlanet + content.substring(endIdx);

fs.writeFileSync(path, newContent);
console.log('Fixed VENDAS_WS_12_DATA structure and added all missions correctly.');
