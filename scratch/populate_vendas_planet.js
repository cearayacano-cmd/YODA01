
import fs from 'fs';

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

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
    detalhe: "Instrutor entra no PIC e mostra estrutura PIC, formas de busca. \nAcessa Matriz de Atendimento Vendas e Protocolos:\n1. Protocolo Estrutura de Chamadas (Foco em Boas Vindas, Deixar Pax em Espera, Despedida);\n2. Protocolo Informação de Viagem;\n3. Protocolos Check-in\n4. Protocolo de reconfirmação de datos de PNR\nInstrutor reforça a importância de reconfirmar os dados da reserva com o cliente antes de emitir ou alterar qualquer reserva.",
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
    detalhe: "- Instrutor navega no site com o foco em mostrar a visão do passageiro: Onde buscar voos, informações, LATAM PASS.\n- Instrutor pede para os alumnos criarem contas no seu nome em latamairlines.com.\n*Eles precisam ter acesso ao email inserido, pois irão utilizar posteriormente nos exercícios. Caso não tenham acesso, sugerir que criem um email gmail.",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "✈️ Latamairlines.com", url: "https://www.latamairlines.com" }],
    iaPic: []
  },
  {
    macroTema: "Perfis de Tarifa",
    tema: "Atividade \"Briefing de Missão\" Tarifas LATAM",
    detalhe: "- Instrutor propõe atividade de busca de tarifas e seus atributos:\n1. Alunos realizam breve resumo das tarifas disponíveis na LATAM (3 min)\n2. Instrutor pede para que um aluno explique os atributos do Brand Light ( Voos dentro do Brasil e fora da América do Sul e América Central/Caribe)\n3. Pede para que o próximo aluno complemente com o atributo que o Brand Standard possui à mais.\n4. Pede para que o próximo aluno complemente com o atributo que o Brand Full possui à mais.\n5. Instrutor pede para que alguém dê um exemplo de voo LATAM dentro do Brasil e fora da América do Sul. (Ex. BSB/GYN - GRU/NYC)\n6. Instrutor pede para que um aluno explique os atributos do Brand Light (Voos nacionais de outros paises da América do Sul e entre a América)\n7. Instrutor pede para que alguém dê um exemplo de voo LATAM entre Américas (Ex. GRU/LIM)\n8. Instrutor pede para que um aluno explique os atributos do Brand Premium Economy.\n9.Instrutor pede para que um aluno explique os atributos do Brand Premium Business.",
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
    detalhe: "- Instrutor mostra o caminho no PIC para encontrar informações sobre Codeshare e Acordo Delta.\n- Divide sala em grupos e pede para que metade dos grupos faça um resumo do tema Codeshare e a outra metade sobre o acordo Delta.  (5 min).\n- Instrutor pede para que 1 representante de cada grupo fale sobre os principais pontos dos acordos, pede para os demais grupos complementarem e caso falte alguma información, acrescenta.",
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
    detalhe: "- Instrutor entra no PIC- Manual Procedimentos Comerciais Bagagem, explica o \"menu\" lateral esquerdo e explica a dinámica da atividade.\n1. Instrutor projeta a pergunta através do GENIALLY os alunos terão o tempo de 2 minutos para encontrar as respostas no PIC. Quem encontrar primeiro, se manifesta e marca ponto.\n2. Aluno responde e explica onde encontrou a resposta (instrutor projeta e vai mostrando no computador e corrige ou complementa, se necessário)\nRepetir a mesma dinâmica para todas as perguntas. \n- Ao final, instrutor questiona se alguien ficou com dúvidas. \nOBS. Se o tempo acabar e ninguém encontrar a resposta, instrutor mostra onde está no PIC.",
    tiempo: "0:25:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360049744854-Generalidades-Bagagem-" }],
    iaPic: []
  },
  {
    macroTema: "Serviços e Pax Expeciais",
    tema: "Vídeo UMNR e PETC",
    detalhe: "- Instrutor explica que a LATAM possui alguns serviços especiais e que na alta temporada os mais tranportados são UMNR e PETC.\n- Em seguida passa os vídeos do \"Tá no Ar\"",
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
    detalhe: "- Instrutor mostra o caminho no PIC para encontrar SSSE, em seguida dividir em grupos e dar um tema para cada:\nCada grupo deberá ler sobre o SSEE que lhe corresponda e apresentá-lo aos demais da classe.\n6 temas\n5 min para fazer o resumo e 5 min para cada grupo apresentar.\nInstrutor corrige e complementa sempre que necessário.\nTemas:\nAnimais (AVIH/PETC)\nAssento adicional (EXST/CBBG)\nBaby Bassinet (BSCT)/ Bebe conforto (INCU)\nMenor desacompanhado (UMNR)\nBebe conforto (INCU)\nAlimentação Especial\nCadeira de Rodas",
    tiempo: "0:45:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/sections/360011672273-Servi%C3%A7os-Especiais" }],
    iaPic: [{ label: "SSEE LIST", url: "" }]
  },
  {
    macroTema: "Serviços e Pax Expeciais",
    tema: "Atividade \"Briefing de Missão\" Passageiros Especiais",
    detalhe: "Instrutor mostra o caminho no PIC para encontrar Pax Especiais, em seguida dividir em grupos e dar um tema para cada:\nCada grupo deberá ler sobre o tema que lhe corresponda e apresentá-lo aos demais da classe.\n5 temas\n5 min para fazer o resumo e 5 min para cada grupo apresentar.\nInstrutor corrige e complementa sempre que necessário.\nTemas:\nPassageiros Especiais\nGestantes\nNecessidade de assistência especial\nCertificação médica (MEDIF)\nAnimais de Assistência (SVAN-ESAN)",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/sections/360010556514-Passageiros-Especiais" }],
    iaPic: [{ label: "PAX LIST", url: "" }]
  },
  {
    macroTema: "Serviços e Pax Expeciais",
    tema: "Atividade \"Guerra nas Estrelas\" SSEE e Pax Especiais",
    detalhe: "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido \n- Instrutor envia link EducaPlay e explica tipo e tempo de (acordo com cronograma) para praticarem\nVale ressaltar que é possível jogar mais de uma vez, caso terminem antes do prazo ",
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
    detalhe: "- Instrutor mostra o caminho do PIC e pede para se dividirem em 5 grupos. Cada grupo lerá as considerações, fazendo um resumo.\nUm representante do grupo apresenta uma consideração. 5 min para pesquisar\n- Instrutor deve corrigir e complementar se necessário.",
    tiempo: "0:40:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360052861173-Reserva-e-emiss%C3%A3o-de-passagens" }],
    iaPic: []
  },
  {
    macroTema: "Resumo",
    tema: "Resumo do dia anterior",
    detalhe: "- Instrutor atividade de chuva de idéias para resgatar com os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias ou escrever diretamente em um flipchart ou quadro os temas.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Atividade \"Ajuste de Rota com o Navegador\" Login e Reserva",
    detalhe: "- Instrutor passa o login da ferramenta Training (A360), mostra a maneira de se logar e explica que na operação irão logar com seu BP e senha.\n- Instrutor entra na ferramenta Training e propõe que um aluno mostre como realizar a reserva e criar uma ordem simples através da ferramenta training  (instrutor será o pax e realizará o pagamento no seu perfil do agente 360, através do link de pagamento).\nO aluno deverá seguir o passo a paso do PIC e o instrutor sendo um dos passageiros (passar seus dados e email).\nAo final, instrutor mostra os campos do Agente 360 (lado esquerdo). Explica brevemente que o histórico de todas as ações fica registrado e que eles aprenderão a leitura na Expedição PV 2.",
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
    detalhe: "Ao final da criação do PNR, o instrutor pede para os alunos olharem o protocolo de documentação, entra em latamairlines.com para mostrar onde está a informação e indica como adicionar a informação dada no RMK.",
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
    detalhe: "- Pede para o agente enviar o link de pagamento para o seu email, projeta e mostra como pagar com os dados do cartão ficticio (reforça que é a visão do pax).",
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
    tema: "\"Controle de Voo e Lançamento\" Reservas",
    detalhe: "- O instrutor pede para que os alunos realizem reservas de acordo com o proposto no GENIALLY.\n- instrutor indica para que todos os \"agentes\" fiquem com os protocolos abertos e o utilizem nas simulações. \n- Instrutor mostra o campo \"minhas anotações\" da ferramenta Agente.  \nTodas as ordens devem ser anotadas em um arquivo que o aluno tenha acesso posteriormente.",
    tiempo: "1:00:00",
    herramientas: [{ tipo: "🖼️ PPT", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Ordens de Clientes",
    detalhe: "- Instrutor explica como realizar a busca e exibição de uma ordem e diferença de ordem logada de não logada.        \n- Instrutor explica como identificar a origem da ordem.",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4407014380307-Ordens-de-Clientes" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Check-in Automático",
    detalhe: "- Intrutor explica sobre o Check-in automático (indica que o check-in é automático para todos os passageiros com ordem (visualização do cliente)\n- Mostrar como chega a confirmação da compra e a notificação no e-mail do cliente, através das telas do PIC. ",
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
    tema: "Atividade \"Ajuste de Rota com o Navegador\" Split Reservas",
    detalhe: "- Instrutor explica o que é o SPLIT, pede para agentes entrarem no PIC (split) e outro aluno vai até a mesa e demonstra em uma ordem previamente criada pelo instrutor, como dividir a ordem no Agente 360 TRN seguindo o paso a paso.",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360055936373-Split-de-Reserva-Individuais-e-Grupo" }],
    iaPic: []
  },
  {
    macroTema: "Ordens e Vendas Agente 360",
    tema: "Atividade \"Controle de Voo e Lançamento\" Split",
    detalhe: "- Com as ordens criadas anteriormente, os agentes voltam a ser pax e agente e simular um contato solicitando a división da ordem. ",
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
    detalhe: "- O instrutor pede para que os alunos realizem reservas de acordo com o proposto no Genially y procedam com a isenção da taxa DU. ",
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
    detalhe: "- Instrutor entra no PIC e mostra onde encontrar informações sobre a LATAM Wallet.\n- Instrutor dá 5 min para que os alunos façam um resumo do tema.\n Instrutor projeta a pergunta através do GENIALLY e escolhe um agente para responder. Caso ele erre, pede para outra pessoa responder. Se ele acertar, escolhe o aluno que responderá a próxima pergunta.\n- Ao final, instrutor questiona se alguien ficou com dúvidas. ",
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
    detalhe: "- Instrutor mostra o caminho no PIC para encontrar o assunto Ancillaries e propõe para os grupos que pesquisem tipos de EMD. 5 min para fazer resumo e 3 min para apresentar para a sala. ",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/360052161874-EMD" }],
    iaPic: []
  },
  {
    macroTema: "Ancillaries",
    tema: "Atividade \"Briefing de Missão\" Ancillaries",
    detalhe: "- Instrutor complementa com a explicação de quais e como realizar a venda de um ancillary de: (UMNR), (PETC) e (AVIH) por meio do A360 ",
    tiempo: "0:10:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/47091784533395-05-12-25-SERVI%C3%87OS-ESPECIAIS-Ativa-se-a-venda-dos-servi%C3%A7os-de-menor-desacompanhado-UMNR-animal-de-estima%C3%A7%C3%A3o-na-cabine-PETC-e-no-por%C3%A3o-AVIH-por-meio-do-agente-360" }],
    iaPic: []
  },
  {
    macroTema: "Ancillaries",
    tema: "Venda de Malas",
    detalhe: "- Instrutor explica  como pax solicita um bilhete com a venda de bag.",
    tiempo: "0:15:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4414544635155-Venda-de-Malas" }],
    iaPic: []
  },
  {
    macroTema: "Ancillaries",
    tema: "Atividade \"Ajuste de Rota com o Navegador\" Venda Assistida de Malas",
    detalhe: "- Instrutor pede para um aluno ir até a mesa e mostrar como pax solicita um bilhete com a venda de bag.",
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
    detalhe: "- Instrutor entra no PIC Manual Procedimentos Comerciais - LATAM Flex e explica a dinâmica.\n1. Instrutor divide a sala em 2 grupos. Essa será uma \"batalha\" entre grupos. \n- Instrutor projeta a pergunta no GENIALLY  e coloca o cronômetro de 1 minuto. O grupo que achar a resposta primeiro se manifesta e tem o direito de resposta. Se a resposta estiver certa, marca ponto. Se estiver errada, o outro grupo tem direito a responder e marcar o ponto. \n2. Aluno representante do grupo que acertou  responde e explica onde encontrou a respuesta (instrutor projeta e vai mostrando no computador)\nRepetir a mesma dinámica para todas as perguntas.\n- Ao final, instrutor questiona se alguien ficou com dúvidas.\nOBS. Se o tempo de 1 minuto acabar e ninguém encontrar a resposta, instrutor mostra onde está no PIC.",
    tiempo: "0:20:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/17098820775187-LATAM-FLEX" }],
    iaPic: []
  },
  {
    macroTema: "Resumo",
    tema: "Resumo do dia anterior",
    detalhe: "- Instrutor atividade de chuva de idéias para resgatar com os alunos os temas relevantes vistos no dia anterior.\nDica: Pode utilizar sites como Mentimeter para chuva de ideias o escrever diretamente em um flipchart ou quadro os temas.",
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
    tema: "Atividade \"Jornada pelo Universo do Conhecimento\" Vendas com Ancillaries",
    detalhe: "- Instrutor pede para que os alunos abram o forms e realizem a atividade proposta. \n- Instrutor acompanha a folha de respostas e corrige as ordens: Atribuindo nota para  os acertos: \n1. Rota correta (20 p)\n2. PAX: 1 adulto e 1 criança (20 p)\n3. Tarifa Standard (20 p)\n4. Vendeu assento? (10 p)\n5. Vendeu bagagem? (10 p)\nApós corrigir as ordens, instrutor deve preencher\n Diário de Bordo",
    tiempo: "0:50:00",
    herramientas: [{ tipo: "📋 Forms AEC", url: "" }],
    iaPic: []
  },
  {
    macroTema: "Painel de Pagamento Agente 360",
    tema: "Atividade \"Briefing de Missão\" Painel de Pagamentos ",
    detalhe: "- Instrutor pede para que os alunos acessem o material \"Console XP\" no PIC e dá 5 minutos para lerem o conteúdo. Depois pede para que um dos alunos explique para os demais da sala do que se trata a ferramenta e qual sua principal función. ",
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
    detalhe: "- Instrutor mostra onde encontrar informação sobre lista de vendas no PIC.",
    tiempo: "0:03:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/40176305951123-NOVA-FUNCIONALIDADE-LISTA-DE-VENDAS-AGENTES" }],
    iaPic: []
  },
  {
    macroTema: "Perfil Cliente",
    tema: "Atividade \"Guerra nas Estrelas\" Notificações aos Passageiros",
    detalhe: "- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido \n- Instrutor envia link EducaPlay e explica tipo e tempo de (acordo com cronograma) para praticarem\nVale ressaltar que é possível jogar mais de uma vez, caso terminem antes do prazo ",
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
    detalhe: "- Instrutor explica a tabela de erros de pagamento e dá 2 exemplos de solução.",
    tiempo: "0:05:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/4403974273299-Erros-de-pagamento" }],
    iaPic: []
  },
  {
    macroTema: "INCIDENTES",
    tema: "Relatar incidentes A360",
    detalhe: "- Instrutor mostra formulário incidências disponível no PIC e orienta que os agentes devem chamar o supervisor para auxiliar no preenchimento.",
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
    detalhe: "- Instrutor mostra através do Agente 360 Training o formulário de criação de casos, detalhando cada campo a ser preenchido, com ênfase naqueles que contém asteriscos.. Criação de casos via Agente 360\n- Instrutor mostra os processos que se faz necessário o cliente enviar documentos como Entrega ou Envio de CUV, solicitações de certificados (Declaração de embarque).   \n- Instrutor explica que nestes processos os casos não devem ser gerados pelo CDA e sim pelo Agente 360:                                                                                                                                                                                                            ",
    tiempo: "0:30:00",
    herramientas: [{ tipo: "🔍 PIC", url: "https://pic-latam.zendesk.com/hc/pt-br/articles/31926091283859-Abrir-caso-Zendesk" }],
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
    detalhe: "- Instrutor mostra suas funcionalidades a partir da ferramenta:\nVisualizações \nBusca de solicitante \nInclusão de um solicitante\nModificação de um solicitante\nClassificar um ticket\nReclassificar um ticket\nFundir tickets\nCriação de ticket filho\nReabrir casos com macros o Reenviar último comentário público",
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
    tema: "Atividade \"Ajuste de Rota com o Navegador\" Zendesk",
    detalhe: "- Instrutor mostra casos reais da ferramenta para identificar os requerimentos do cliente.\n- Instrutor mostra as partes do caso e posible resolución.",
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

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const endIdx = content.indexOf('};', startIdx) + 2;

const filledPlanet = `export const VENDAS_WS_12_DATA = {
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
    }
  ],
  materiais: [],
  evalKon: [],
  evalAec: [],
  evalMsg: ''
};`;

const newContent = content.substring(0, startIdx) + filledPlanet + content.substring(endIdx);

fs.writeFileSync(path, newContent);
console.log('Populated VENDAS_WS_12_DATA with Missão 1 and Missão 2');
