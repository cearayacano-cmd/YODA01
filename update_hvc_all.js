const fs = require('fs');
const path = './src/lib/appConfig.json';

const newData = [
  // Introdução
  {
    tipo: 'mision1',
    label: 'Introdução',
    rows: [
      {
        macroTema: 'Apresentação e agenda do curso',
        dia: 1,
        tema: 'Apresentação e agenda do curso',
        detalhe: 'O instrutor conduz uma atividade introdutória com os alunos.\nEm seguida, são apresentados os termos e o cronograma do curso.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: 'PPT', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Autonomia  Suporte HVC',
        dia: 1,
        tema: 'Autonomia  Suporte HVC',
        detalhe: 'O instrutor exibe a apresentação em PowerPoint sobre capacitação e explica os procedimentos de acordo com a política de serviço de suporte HVC.\n- Lista de ferramentas utilizadas e fluxos de trabalho para resolução autônoma: SABRE RES, APEC, ALLEGRO, TRAVEL BANK, WORLD TRACER, SIGA, ADM AIRPORT, PAST DATE, IFLY, CEPNR, GUHOST, GENESYS, TRAVEL VOUCHER, WEB RETURNS, MAINTENANCE, AGENT360, UNICO/BIOMETRICS, LAE.\n- Lembre-se de que é importante resolver os problemas de forma autônoma.',
        tiempo: '0:30:00',
        herramientas: [{ tipo: 'PPT', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Matriz de processos suporte HVC',
        dia: 1,
        tema: 'Matriz de processos suporte HVC',
        detalhe: 'O instrutor da PIC explica a matriz de processos LUA/HVC:\nExplica as ações do Serviço quando a LUA aciona o Suporte HVC. (Exceções, Exceções/Devoluções, Gerenciamento de Contas FFP)\nExplica os fluxos de trabalho quando a HVC aciona o Suporte HVC - Processos HVC (Devoluções, Vendas, Upgrades de Milhas).\nO treinamento é focado no Suporte HVC.',
        tiempo: '0:50:00',
        herramientas: [{ tipo: '🖥️ Painel', url: '' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 1: Reclamação
  {
    tipo: 'mision1',
    label: 'Missão 1: Reclamação',
    rows: [
      {
        macroTema: 'Gestão de reclamação',
        dia: 1,
        tema: 'Gestão de reclamação',
        detalhe: 'O instrutor explicado PIC , os tipos de reclamações que se aplicam ao suporte de acordo com o fluxo de trabalho de suporte da HVC.\n- Reclamações via Agent360\n- Reclamações de faturamento: (Cobranças duplicadas, Cancelamento de cobrança sem emissão, Valores incorretos, Cobranças não reconhecidas, Falha no recebimento de caixa)\n- Reclamações devido a erro do agente (Fluxo: SOP da HVC "Reclamação devido a erro do agente")\n- Reclamações de casos LAE (informativo)\n- Reclamações em voos operados pela OA (DL/IB) - DT\n- Reclamações de bagagem (Danos e Perdas)\n**Faça login no Zendesk e revise um caso com uma reclamação para que os agentes possam analisá-lo e avaliar uma possível solução.**',
        tiempo: '00:50:00',
        herramientas: [{ tipo: '🗂️ PIC', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Gestão de reclamação',
        dia: 1,
        tema: 'Gestão de reclamação',
        detalhe: '- Atividade: O instrutor divide a turma em equipes para acessar o PIC e, juntos, explicar os tipos de reclamações e as ações a serem tomadas pelo A360. Identificar aquelas relacionadas ao Suporte HVC e explicar a resolução.\n- Foco em reclamações devido a erro do agente e no fluxo de trabalho "Critérios para envio de isenções devido a erro do agente e emissão de exceções fora da política".',
        tiempo: '00:50:00',
        herramientas: [{ tipo: '🖼️ Slide', url: '' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 2: Ifly
  {
    tipo: 'mision1',
    label: 'Missão 2: Ifly',
    rows: [
      {
        macroTema: 'Generalidades',
        dia: 1,
        tema: 'Generalidades',
        detalhe: '- O instrutor abre a apresentação em PowerPoint e explica o básico: O que é o Ifly?\n- Navegação do sistema\n- Botões de ação',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🖼️ Slide', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Generalidades',
        dia: 1,
        tema: 'Generalidades',
        detalhe: '- O instrutor, utilizando o PPT e o PIC, demonstra o processo de geração de um certificado no ifly.',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🖼️ Slide', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Generalidades',
        dia: 1,
        tema: 'Generalidades',
        detalhe: '- O instrutor, utilizando o PPT e o PIC, demonstra o processo de regularização de um certificado no ifly.',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🖼️ Slide', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Generalidades',
        dia: 1,
        tema: 'Generalidades',
        detalhe: '- O instrutor, utilizando o PPT e o PIC, demonstra o processo de cancelamento de um certificado no ifly.',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🖼️ Slide', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Crédito de  voos LATAM e OLA',
        dia: 1,
        tema: 'Crédito de  voos LATAM e OLA',
        detalhe: '- O instrutor demonstra o processo passo a passo para acumular 100% de voos com a LATAM usando a apresentação em PowerPoint.\n- Em seguida, eles acessam o sistema PIC e demonstram o fluxo de trabalho SOP HVC para gerenciar o credenciamento de voos com a LATAM e companhias aéreas parceiras, explicando as considerações e como validar a elegibilidade do passageiro para acúmulo de pontos.\n- Portal FFP: Revisar o Portal de Declaração de Movimentação/Retrospectiva (pós-voo).\n- Revisar o artigo de notícias com a atualização sobre o credenciamento de voos com a LATAM e a OLA.',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🖼️ Slide', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Crédito de  Bonus LATAM Pass',
        dia: 2,
        tema: 'Crédito de  Bonus LATAM Pass',
        detalhe: '- Apresentação em PowerPoint com instrutor\n- Pontos de qualificação extras\n- Milhas extras na sua rota favorita\n- Segmentos UPG de cortesia na cabine\n- Créditos adicionais (Bônus que permite creditar serviços adicionais: bagagem extra, embarque prioritário, seleção de assento, upgrade ou remarcação de voo no mesmo dia))',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🖼️ Slide', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Créditos  de millas por Name Match',
        dia: 2,
        tema: 'Créditos  de millas por Name Match',
        detalhe: 'Namematch: Exibir o fluxo de trabalho de suporte HVC "Crédito de voo da LATAM e companhias aéreas parceiras",\nExemplo: quando as milhas não são creditadas porque os nomes estão incorretos.\n- Exibir notícias do PIC e explicar as etapas e fluxos de trabalho de suporte e suporte HVC.',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🔄 Fluxo', url: '' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 3: DT-FFP
  {
    tipo: 'mision1',
    label: 'Missão 3: DT-FFP',
    rows: [
      {
        macroTema: 'DT FFP BR',
        dia: 2,
        tema: 'DT FFP BR',
        detalhe: '- Matriz DT-FFP BR',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🗂️ PIC', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Conta ativa com problemas de transação',
        dia: 2,
        tema: 'Conta ativa com problemas de transação',
        detalhe: '- Neste caso, o bilhete foi enviado para BO SIEBEL',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🗂️ PIC', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Erro de criação do perfil site clientes',
        dia: 2,
        tema: 'Erro de criação do perfil site clientes',
        detalhe: '- Neste caso, o bilhete foi enviado para BO SIEBEL',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🗂️ PIC', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Casos em que é necesario enviar a BO LATAM Pass CC BR',
        dia: 2,
        tema: 'Casos em que é necesario enviar a BO LATAM Pass CC BR',
        detalhe: 'O instrutor mostrará uma planilha muito útil para suporte a HVC.\nObservação: esta planilha é mais abrangente do que a matriz PIC.',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🔗 Link', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Resgate Não Aéreo\nGo Points',
        dia: 2,
        tema: 'Resgate Não Aéreo\nGo Points',
        detalhe: '- O agente DT FFP BR (Suporte HVC) deve abrir o ID do caso já criado na plataforma ADM GoPoints e adicionar notas para priorizar o caso, informando ao cliente que a priorização foi solicitada e que o provedor entrará em contato em breve.',
        tiempo: '0:40:00',
        herramientas: [{ tipo: '🔗 Link', url: '' }], // ADM Go Points
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 4: DT Devoluções
  {
    tipo: 'mision1',
    label: 'Missão 4: DT Devoluções',
    rows: [
      {
        macroTema: 'Matriz DT-DEV BR',
        dia: 2,
        tema: 'Matriz DT-DEV BR',
        detalhe: '- Devoluções e Travel voucher matriz',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🗂️ PIC', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Canal de Inserção de Reembolso',
        dia: 2,
        tema: 'Canal de Inserção de Reembolso',
        detalhe: '- Identificar el canal de inserción del reembolso',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🔗 Link', url: '' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 5: Compensação
  {
    tipo: 'mision1',
    label: 'Missão 5: Compensação',
    rows: [
      {
        macroTema: 'Gastos Incorridos',
        dia: 2,
        tema: 'Gastos Incorridos',
        detalhe: '- O instrutor reforça o processo de reembolso de serviços básicos e despesas incorridas.\n- Observação: Apesar do que você viu no treinamento inicial, acho isso muito importante porque os agentes estavam ligando para o Suporte da HVC diariamente e, a partir de agora, eles serão o Suporte da HVC..',
        tiempo: '1:00:00',
        herramientas: [{ tipo: '🗂️ PIC', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Compensação\nDowngrade Involuntário Delta',
        dia: 3,
        tema: 'Compensação\nDowngrade Involuntário Delta',
        detalhe: '- O instrutor explica compensação mencionada  mediante a apresentação do documento.',
        tiempo: '1:00:00',
        herramientas: [{ tipo: '🔗 Link', url: '' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 6: LATAM Pass
  {
    tipo: 'mision1',
    label: 'Missão 6: LATAM Pass',
    rows: [
      {
        macroTema: 'UPG de cabine em Sabre Airport',
        dia: 3,
        tema: 'UPG de cabine em Sabre Airport',
        detalhe: '- O instrutor demonstra o processo de aplicação manual no SABRE Airport em caso de erro do Agent 360.\n- O instrutor, a partir do PIC, demonstra o fluxo de trabalho de suporte HVC, que é o processo passo a passo para submeter a aplicação a partir do Sabre Airport.',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: '',
        dia: 3,
        tema: '',
        detalhe: '',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🔄 Fluxo', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Incidências  em \nAlianças bancárias',
        dia: 3,
        tema: 'Incidências  em \nAlianças bancárias',
        detalhe: '- O instrutor demonstra, usando o PIC , os diferentes cenários que podem ocorrer em caso de incidente. A matriz que detalha as ações necessárias é mostrada, incluindo quaisquer problemas e/ou discrepâncias com os benefícios do cartão.\n- O processo para lidar com um incidente de Prioridade UPG e como gerenciar sua resolução no Ifly é demonstrado. - Entrada manual de Prioridade UPG no Ifly.',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'UPG Priority',
        dia: 3,
        tema: 'UPG Priority',
        detalhe: '- O processo para lidar com um incidente de Prioridade UPG e como gerenciar sua resolução no Ifly é mostrado. - Entrada manual da Prioridade UPG no Ifly.\n- Instruções passo a passo do PIC (Responsável pelo Incidente).',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/45049073432467-Processo-para-adicionar-o-segmento-Upgrade-UPG-Priority-no-Ifly' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Prioridades UPG',
        dia: 3,
        tema: 'Prioridades UPG',
        detalhe: '- O instrutor entra no PIC e reforça as novas prioridades do UPG de acordo com as notícias do PIC. (Reforço)\n- Quando os passageiros são da mesma categoria, aquele com o benefício TC vence.',
        tiempo: '0:40:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/45672456401683-16-10-25-FFP-LATAM-Pass-Mudan%C3%A7a-na-prioridade-de-atribui%C3%A7%C3%A3o-de-Upgrade-de-cabine' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Plusgrade',
        dia: 3,
        tema: 'Plusgrade',
        detalhe: 'O instrutor, utilizando o PIC, demonstra as opções disponíveis para os executivos de suporte da HVC visualizarem os detalhes do leilão.\nA partir do PIC, o instrutor reforça os conceitos do leilão UPG (Plusgrade) e demonstra o fluxo de trabalho: Emissão de EMD, Opção de Upgrade (Plusgrade), que deve ser concluído por um agente de suporte da HVC.\n- O suporte acessa o Plusgrade somente para visualizar os detalhes do leilão; quaisquer outras consultas devem ser feitas através do DT.',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360049744994-Op%C3%A7%C3%A3o-Upgrade-Instant%C3%A2neo-Leil%C3%A3o-ou-de-%C3%9Altimo-Minuto' }, { tipo: '🔄 Fluxo', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360049744994-Op%C3%A7%C3%A3o-Upgrade-Instant%C3%A2neo-Leil%C3%A3o-ou-de-%C3%9Altimo-Minuto' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Atualização e gestão de contas  LATAM PASS',
        dia: 3,
        tema: 'Atualização e gestão de contas  LATAM PASS',
        detalhe: '- Atualização dos dados da conta do membro:\nE-mail ou número de telefone\nNúmero do documento\nPaís de residência\nData de nascimento\nNome\n- O instrutor revisa o tópico de atualização de dados para fornecer suporte informativo aos executivos da HVC.',
        tiempo: '0:25:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1jXlbwhz52XjXdx1fT6oZ2jP9ZxW6jzzD/edit?slide=id.p1#slide=id.p1' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Atualização e gestão de contas  LATAM PASS',
        dia: 3,
        tema: 'Atualização e gestão de contas  LATAM PASS',
        detalhe: '- Actividad: Instructor separa a la clase en equipos para que ingresen a PIC y en conjunto expliquen las 5 opciones que tiene un cliente para corregir datos, luego le pide a cada grupo que brevemente explique la opción y el fluxo a seguir.',
        tiempo: '0:25:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1Vkq1VSYUz9Bxm3FxBpUmwii_-mvJ3RXQ/edit?slide=id.g3ab346bfee7_0_204#slide=id.g3ab346bfee7_0_204' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Piloto Transaccional A360',
        dia: 3,
        tema: 'Piloto Transaccional A360',
        detalhe: '- O instrutor demonstra a apresentação em PowerPoint do Modelo Transacional A360 para tentativas de emissão/reemissão no e-Biz em que a transação não foi bem-sucedida.\n- Eles explicam as condições para aplicar o processo e a quem ele se aplica.\n- Eles fornecem um fluxo passo a passo no A360.',
        tiempo: '0:40:00',
        herramientas: [{ tipo: '➖ NA', url: '' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Travel Bank',
        dia: 3,
        tema: 'Travel Bank',
        detalhe: 'O instrutor acessa o PIC e exibe a apresentação passo a passo em PowerPoint para identificar as transações realizadas no Travel Bank. É uma ferramenta da Sabre que permite visualizar as transações feitas na LATAM Wallet (data, tipo de transação e detalhes da transação).',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/5443238652307-Travel-Bank' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 7: Gestão de erros operacionais
  {
    tipo: 'mision1',
    label: 'Missão 7: Gestão de erros operacionais',
    rows: [
      {
        macroTema: 'Pilar: Exceções fora da política',
        dia: 4,
        tema: 'Pilar: Exceções fora da política',
        detalhe: '- Isenções para exceções fora da política. (Foco no pilar de exceções fora da política).\n- Cliente não HVC (caso atípico)\n- Cliente HVC (caso atípico)\n✦COMPLIMENTAS (EXCLUSIVO HVC)\n**Foco nos formulários de casos atípicos HVC',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/1500007916562-Crit%C3%A9rios-para-a-entrada-de-waivers-por-erro-de-agente-e-entrega-de-exce%C3%A7%C3%B5es-fora-da-pol%C3%ADtica' }, { tipo: '🔄 Fluxo', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/1500007916562-Crit%C3%A9rios-para-a-entrada-de-waivers-por-erro-de-agente-e-entrega-de-exce%C3%A7%C3%B5es-fora-da-pol%C3%ADtica' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Erros operacionais',
        dia: 4,
        tema: 'Erros operacionais',
        detalhe: '- O instrutor demonstra as diretrizes e os procedimentos para erros de agentes e o fluxo de trabalho "Reclamação de Erro Executivo" do PIC (Procedimento para Reclamação e Erro).\n- Ele também relembra como encontrar o agente responsável pelo erro.\n- O instrutor menciona as funcionalidades do APEC para seu uso correto, revisa as classificações para que sejam aplicadas corretamente e menciona as novas classificações. Auxílio com processos: Orientação em casos limítrofes (ajuda com processos e procedimentos). Se necessário, aconselhamento é fornecido em todos os cenários de erro executivo.\n\nPAINEL DE RASTREABILIDADE\n\nObservação: Apesar do que viram no treinamento inicial, a maioria dos agentes não sabe como identificar a pessoa responsável por erros operacionais nos registros históricos.',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🖥️ Painel', url: 'https://lookerstudio.google.com/u/0/reporting/c6a5fbf4-0ec1-49d4-8b5a-b635da7185cf/page/p_jnbjcvnfpd' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Quiz Gestão de erros operacionais',
        dia: 4,
        tema: 'Quiz Gestão de erros operacionais',
        detalhe: 'Quiz: o instrutor apresenta 5 perguntas em PowerPoint sobre os critérios para definir em quais casos um erro do agente se aplica e, em seguida, reforça o fluxo do agente de suporte HVC.',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1Vkq1VSYUz9Bxm3FxBpUmwii_-mvJ3RXQ/edit?slide=id.g3ab346bfee7_0_204#slide=id.g3ab346bfee7_0_204' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 8: Bagagem
  {
    tipo: 'mision1',
    label: 'Missão 8: Bagagem',
    rows: [
      {
        macroTema: 'Bagagem danificada e/ou extraviada devido a itens faltantes.',
        dia: 4,
        tema: 'Bagagem danificada e/ou extraviada devido a itens faltantes.',
        detalhe: '- O instrutor explica as considerações a serem feitas no gerenciamento de bagagens com danos e/ou perdas resultantes de itens extraviados.',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053436714-Generalidades-e-Guia-Reclama%C3%A7%C3%B5es-de-Bagagem' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Bagagem danificada e bagagem com extravios',
        dia: 4,
        tema: 'Bagagem danificada e bagagem com extravios',
        detalhe: 'Bagagem Danificada, Definição, itens frágeis, Edição Limitada',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053436714-Generalidades-e-Guia-Reclama%C3%A7%C3%B5es-de-Bagagem' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Bagagem danificada e bagagem com extravios',
        dia: 4,
        tema: 'Bagagem danificada e bagagem com extravios',
        detalhe: 'Bagagem extraviada',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053436714-Generalidades-e-Guia-Reclama%C3%A7%C3%B5es-de-Bagagem' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Bagagem danificada e bagagem com extravios',
        dia: 4,
        tema: 'Bagagem danificada e bagagem com extravios',
        detalhe: 'Política de Compensação por Perdas',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053436714-Generalidades-e-Guia-Reclama%C3%A7%C3%B5es-de-Bagagem' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Bagagem danificada e bagagem com extravios',
        dia: 4,
        tema: 'Bagagem danificada e bagagem com extravios',
        detalhe: 'Bagagem danificada e extraviada',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053436714-Generalidades-e-Guia-Reclama%C3%A7%C3%B5es-de-Bagagem' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Bagagem danificada e bagagem com extravios',
        dia: 4,
        tema: 'Bagagem danificada e bagagem com extravios',
        detalhe: 'Política de inindenização por danos e perdas',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360053436714-Generalidades-e-Guia-Reclama%C3%A7%C3%B5es-de-Bagagem' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Quiz  bagagem 1',
        dia: 4,
        tema: 'Quiz  bagagem 1',
        detalhe: 'O instrutor exibe 5 perguntas na tela e chama 5 participantes para responderem e mostrarem onde encontram a informação no PIC..',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '📝 Form', url: 'https://docs.google.com/presentation/d/1Z81hurod8FBOVt-ibMTn7KFlNBmuox45/edit?slide=id.p1#slide=id.p1' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Bagagem  Faltante ou atrasada',
        dia: 4,
        tema: 'Bagagem  Faltante ou atrasada',
        detalhe: 'Registro de reclamações PIR',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360055223693-Bagagem-Extraviada-ou-Atrasada' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Bagagem  Faltante ou atrasada',
        dia: 4,
        tema: 'Bagagem  Faltante ou atrasada',
        detalhe: 'Busca de bagagem',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360055223693-Bagagem-Extraviada-ou-Atrasada' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Bagagem  Faltante ou atrasada',
        dia: 4,
        tema: 'Bagagem  Faltante ou atrasada',
        detalhe: 'Busca de exceções: para passageiros que saem do aeroporto sem fazer sua reclamação e ligam para a Central de Atendimento..',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360055223693-Bagagem-Extraviada-ou-Atrasada' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Bagagem  Faltante ou atrasada',
        dia: 4,
        tema: 'Bagagem  Faltante ou atrasada',
        detalhe: 'Gastos de primera Necesidade',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360055223693-Bagagem-Extraviada-ou-Atrasada' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Bagagem  Faltante ou atrasada',
        dia: 4,
        tema: 'Bagagem  Faltante ou atrasada',
        detalhe: 'Entrega de bagagen',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360055223693-Bagagem-Extraviada-ou-Atrasada' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Bagagem  Faltante ou atrasada',
        dia: 4,
        tema: 'Bagagem  Faltante ou atrasada',
        detalhe: 'Prazo estimado de entrega',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360055223693-Bagagem-Extraviada-ou-Atrasada' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Found Property LATAM',
        dia: 4,
        tema: 'Found Property LATAM',
        detalhe: 'Serviço de Bagagens\nCompensação para passageiros LATAM Black ou Black Signature - Explique o procedimento a seguir para esses passageiros.',
        tiempo: '0:40:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360055223813-Outras-Reclama%C3%A7%C3%B5es-de-Bagagem-Switch-LATAM-Remanescente-LATAM-em-Conex%C3%A3o-com-Outras-Companhias-A%C3%A9reas-Found-Property-LATAM' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Reclamações relativas à bagagem de mão despachada no porão.',
        dia: 4,
        tema: 'Reclamações relativas à bagagem de mão despachada no porão.',
        detalhe: 'Bagagem de mão despachada com seguro SSC em caso de perda ou dano\nBagagem de mão despachada em caso de perda ou dano (somente em aeroportos no Brasil)',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/13999979686931-Reclama%C3%A7%C3%B5es-por-bagagem-de-m%C3%A3o-despachada-no-por%C3%A3o' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Quiz bagagem  2',
        dia: 5,
        tema: 'Quiz bagagem  2',
        detalhe: 'O instrutor exibe 5 perguntas na tela e chama 5 participantes para responderem e mostrarem onde encontram a informação no PIC..',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '📝 Form', url: 'https://docs.google.com/presentation/d/1a6UpF7EwwhfumyAv5URP4WsVRTFw28d5/edit?slide=id.p1#slide=id.p1' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Contatos de aeroportos',
        dia: 5,
        tema: 'Contatos de aeroportos',
        detalhe: 'O instrutor exibe a lista de contatos dos diferentes aeroportos (aeroporto, nome, localização) caso seja necessário contatá-los.',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🔗 Link', url: 'https://docs.google.com/spreadsheets/d/1BsWtMkC-PhLq1Igdh6CZvyF7Um6SCozLC0WkuiT3yv0/edit?gid=1268565517#gid=1268565517' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Contatos de aeroportos',
        dia: 5,
        tema: 'Contatos de aeroportos',
        detalhe: 'O instrutor exibe a lista de e-mails de diferentes aeroportos por país. (Isso é apenas para fins informativos.)',
        tiempo: '0:05:00',
        herramientas: [{ tipo: '🔗 Link', url: 'https://docs.google.com/spreadsheets/d/1OBfb3cNEFvCuQBDZ65S7hfJb-0qYgiv0URuLPLtg8P4/edit?gid=1781452006#gid=1781452006' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Manual de serviço de bagagem',
        dia: 5,
        tema: 'Manual de serviço de bagagem',
        detalhe: '- O instrutor mostra o manual de bagagens usado no aeroporto. (Só para você saber que o manual existe)\nApenas para fins informativos.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '📕 PDF', url: 'https://drive.google.com/drive/folders/1xzxDtvu2en9ydHNmVsaJTivQGVDpDrpl' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Tabela  de Códigos RL',
        dia: 5,
        tema: 'Tabela  de Códigos RL',
        detalhe: '-O instrutor mostra os principais códigos explicativos usados em Bagagem.',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/360055207213-Mensagens-de-envio-WORLD-TRACER-MANAGER' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Matriz de bagagem',
        dia: 5,
        tema: 'Matriz de bagagem',
        detalhe: 'Conhecer  a matriz de fluxo de tópicos, subtópicos e ações',
        tiempo: '0:10:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/20940952049043-Matriz-CC-Bagagem-LATAM' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'World Tracer Desktop',
        dia: 5,
        tema: 'World Tracer Desktop',
        detalhe: 'Generalidades',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/35758923132947-World-Tracer-Desktop-WTD' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'World Tracer Desktop',
        dia: 5,
        tema: 'World Tracer Desktop',
        detalhe: 'Bagagem atrasada ou extraviada',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/35758923132947-World-Tracer-Desktop-WTD' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'World Tracer Desktop',
        dia: 5,
        tema: 'World Tracer Desktop',
        detalhe: 'Danos e/ou perda de bagagem',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/35758923132947-World-Tracer-Desktop-WTD' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'World Tracer Desktop',
        dia: 5,
        tema: 'World Tracer Desktop',
        detalhe: 'Bagagem com danos e/ou extravio resultantes de falta de bagagem.',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/35758923132947-World-Tracer-Desktop-WTD' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'World Tracer Desktop',
        dia: 5,
        tema: 'World Tracer Desktop',
        detalhe: 'Found property',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/35758923132947-World-Tracer-Desktop-WTD' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'World Tracer Desktop',
        dia: 5,
        tema: 'World Tracer Desktop',
        detalhe: 'Exercícios: O instrutor demonstra como os diferentes casos são exibidos no sistema e convida alguns alunos a identificar os códigos de acordo com a alegação: DPR, AHL, FP',
        tiempo: '0:15:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/35758923132947-World-Tracer-Desktop-WTD' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Missão 9: Varios
  {
    tipo: 'mision1',
    label: 'Missão 9: Varios',
    rows: [
      {
        macroTema: 'Adiar/postergar\nConfirma e Elimina',
        dia: 5,
        tema: 'Adiar/postergar\nConfirma e Elimina',
        detalhe: 'O instrutor acessa o PIC e demonstra as considerações para o uso da ferramenta Confirmar e Excluir PNR (CEPNR). Ele enfatiza a importância de verificar corretamente os horários disponíveis ao solicitar uma antecipação/adiamento pelos canais regulares. O instrutor explica a tabela de motivos: uso exclusivo para suporte HVC.\n- Casos: Antecipação/Adiamento',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🗂️ PIC', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/16489305332499-Confirma-Elimina-PNR-CEPNR-Uso-exclusivo-Suporte-LUA-HVC-e-FSC' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'CEPNR',
        dia: 5,
        tema: 'CEPNR',
        detalhe: 'Instruções passo a passo para usar a ferramenta',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '🖼️ Slide', url: 'https://docs.google.com/presentation/d/1NMZ90yutPf0kGClCsXleXulvQSICr5OE/edit?slide=id.g3abbad2beb2_1_697#slide=id.g3abbad2beb2_1_697' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Passe Livre Judicial',
        dia: 5,
        tema: 'Passe Livre Judicial',
        detalhe: '- O instrutor demonstra passo a passo como executar a transmissão.',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🔗 Link', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/26411405431571-Passageiros-Vigentes-Passe-livre-judicial-Somente-no-Brasil' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Soluçoes de Viagem Remarcações Involuntárias',
        dia: 5,
        tema: 'Soluçoes de Viagem Remarcações Involuntárias',
        detalhe: '- Tópicos importantes, inclusive segunda passagem afetada.',
        tiempo: '0:30:00',
        herramientas: [{ tipo: '🔗 Link', url: 'https://pic-latam.zendesk.com/hc/pt-br/articles/50049719964563-Solu%C3%A7%C3%B5es-de-Viagem-ante-Remarca%C3%A7%C3%B5es-Involunt%C3%A1rias' }],
        iaPic: [],
        consejo: ''
      }
    ]
  },
  // Avaliação
  {
    tipo: 'mision1',
    label: 'Avaliação',
    rows: [
      {
        macroTema: 'Avaliação final',
        dia: 5,
        tema: 'Avaliação final',
        detalhe: 'Avaliação no formulário formulario',
        tiempo: '1:00:00',
        herramientas: [{ tipo: '📝 Form', url: 'https://docs.google.com/forms/d/e/1FAIpQLSciiGTyafkzzmwCC6pEm0JATWP-k3TIT8xBTIIhFeElwgsg1Q/viewform' }],
        iaPic: [],
        consejo: ''
      },
      {
        macroTema: 'Pesquisa NPS',
        dia: 5,
        tema: 'Pesquisa NPS',
        detalhe: 'Pesquisa no formulário ',
        tiempo: '0:20:00',
        herramientas: [{ tipo: '📝 Form', url: 'https://forms.gle/8DRk5U9z5WciPpWf6' }],
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
      const idx = planets.findIndex(p => p.label === 'Suporte HVC');
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
console.log('Successfully updated appConfig.json with all HVC data.');
