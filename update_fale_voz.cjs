const fs = require('fs');

const file = 'src/lib/appConfig.json';
const data = JSON.parse(fs.readFileSync(file, 'utf8'));

const planet = data.br.exploracion.frontLine.find(p => p.label === 'Fale Voz');

if (!planet.secciones) {
  planet.secciones = [];
}

const newSecciones = [
  {
    tipo: "mision1",
    label: "Missão 1: Introdução",
    rows: [
      {
        macroTema: "Introdução",
        tiempo: "0:10:00",
        tema: "Boas Vindas",
        detalhe: "- Instrutor se apresenta e pede para os alunos se apresentarem brevemente.\n- Explica acordos de trabalho (Participação ativa, exercícios e avaliação).\n- Instrutor faz abertura do curso mostrando a agenda.",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1fGDpJmNrzFpFDCUaElnRf4Ho4mxy37ko3JHpFYjAWJw/edit?slide=id.g3a3132480a8_0_100#slide=id.g3a3132480a8_0_100" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Introdução",
        tiempo: "0:10:00",
        tema: 'Video 1 - "Boas Vindas FALE Voz"',
        detalhe: '- Instrutor mostra o vídeo "Boas Vindas FALE Voz".',
        herramientas: [{ tipo: "Vídeo", url: "https://drive.google.com/file/d/1QGvnJy3KVlRmST4l0gW_NxKGtLRjQFGf/view?usp=drive_link" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Introdução",
        tiempo: "0:10:00",
        tema: "URA LATAM",
        detalhe: "- Instrutor em seguida, apresenta os detalhes da nossa URA atual e também como é possível identificar quando a chamada é da primeira linha ou do FALE. Voz",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1fGDpJmNrzFpFDCUaElnRf4Ho4mxy37ko3JHpFYjAWJw/edit?slide=id.g3ed248d2794_0_10563#slide=id.g3ed248d2794_0_10563" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Introdução",
        tiempo: "0:10:00",
        tema: "Conceito: Reclamação X Solicitação",
        detalhe: "- Instrutor enfatiza a diferença e considerações entre uma reclamação e uma solicitação.\n(Destaca que o agente sempre deve buscar mais de uma solução para o cliente).",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1fGDpJmNrzFpFDCUaElnRf4Ho4mxy37ko3JHpFYjAWJw/edit?slide=id.g3b33812d9e2_0_1716#slide=id.g3b33812d9e2_0_1716" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Introdução",
        tiempo: "0:05:00",
        tema: "Conceito: Resolutividade e FCR",
        detalhe: "- Instrutor explica a definição e importância da Resolutividade e FCR",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1fGDpJmNrzFpFDCUaElnRf4Ho4mxy37ko3JHpFYjAWJw/edit?slide=id.g3e17e505cce_0_11380#slide=id.g3e17e505cce_0_11380" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Introdução",
        tiempo: "0:05:00",
        tema: "Conceito\nQuebra de serviço",
        detalhe: "- Instrutor explica conceito de quebra de serviço e como se aplica ao nosso universo aéreo e no atendimento ao cliente.",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1fGDpJmNrzFpFDCUaElnRf4Ho4mxy37ko3JHpFYjAWJw/edit?slide=id.g3e17e505cce_0_11417#slide=id.g3e17e505cce_0_11417" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Matriz",
        tiempo: "0:15:00",
        tema: "Matriz de\nProcessos LUA",
        detalhe: "- Instrutor explica como consultar a Matriz processos LUA / HVC e destaca o quão ajuda a terem um melhor direcionamento para cada demanda recebida.\n- Enfatiza que é preciso esgotar todas as possibilidades de resolução no 1° contato (FCR) = Resolução em linha (FCR)\n- Reforça a não necessidade de transferência em situações que possui ferramentas e empoderamento para solucionar. Caso não seja possível = Transferir com contexto\n- Destaca que a transferência deve ser feita, somente se não tiver mais nenhuma opção em mãos que possa resolver a demanda do Cliente = Não Resolução em linha (NÃO FCR)",
        herramientas: [],
        iaPic: [{ label: "https://pic-latam.zendesk.com/hc/pt-br/articles/13951463054995-Matriz-Processos-BR-LUA-HVC", url: "PIC" }],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Matriz",
        tiempo: "0:20:00",
        tema: 'Atividade\n"Relatório de Exploração"\nMatriz de Processos',
        detalhe: "- No PPT temos algumas descrições de demandas da (Matriz de Processos).\n- Intrutor de forma aleatoria convida os agentes para lerem e buscarem na Matriz, de qual demanda se trata. (No slide de cada questão tem pergunta e resposta. Instrutor primeiro mostra a pergunta e após resposta, da um enter para aparecer resposta no mesmo slide\n- Após localizar explicar qual o fluxo correto se deve seguir para tal demanda.",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1fGDpJmNrzFpFDCUaElnRf4Ho4mxy37ko3JHpFYjAWJw/edit?slide=id.g3ed248d2794_0_10633#slide=id.g3ed248d2794_0_10633" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Introdução",
        tiempo: "0:30:00",
        tema: 'Atividade\n"Briefing de Missão"\nConceitos',
        detalhe: "- Instrutor pede para os alunos se dividirem em 4 grupos e cada grupo realiza um resumo de cada tema visto, sendo:\nGrupo 1: Generalidades e Guia de Gestão de Reclamações\nGrupo 2: Reclamações por agente 360 - Tipos de quebras e motivos disponíveis no agente 360\nGrupo 3: Declaração de itens de valor na bagagem despachada (Voos dentro e saindo do Brasil)\nGrupo 4: Fluxo Erro do Agente\n10 min para fazer o resumo e 5 min para cada grupo apresentar.",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1u0pLXPrFaYtewaYnB_TLnl21YtGRxIU_7OL4N3h0B78/edit?slide=id.g3e5b6260fda_0_3073#slide=id.g3e5b6260fda_0_3073" }],
        iaPic: [],
        consejo: "",
        dia: 2
      }
    ]
  },
  {
    tipo: "mision1",
    label: "Missão 2: Temas Legais",
    rows: [
      {
        macroTema: "Revisão\nde contrato",
        tiempo: "0:15:00",
        tema: "Contrato de\nTransporte Aéreo",
        detalhe: "- Instrutor relembra onde localizar o contrato em nosso site e faz uma breve revisão. Com a leitura dos pontos mais recorrentes na operação, através exemplos. Acrescento onde localizar o telefone do SAC em nossa Central de Ajuda",
        herramientas: [{ tipo: "Site", url: "https://www.latamairlines.com/br/pt/legal/condicoes-do-contrato-de-transporte" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Lei do SAC",
        tiempo: "0:10:00",
        tema: "Lei do SAC",
        detalhe: "- Instrutor explica o conceito abaixo e mostra no PPT as principais regras.\n- Instrutor enfatiza o quão o descumprimento dessas regras, tem um impacto muito forte para a Companhia.",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1SyvLsuFjjMS3a7xpFqpgAN6mWp9nQvmlyslmqyqjGLo/edit?slide=id.g3e80dffcde7_0_0#slide=id.g3e80dffcde7_0_0" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Lei do SAC",
        tiempo: "0:10:00",
        tema: 'Vídeo 2 -\n"Lei do SAC"',
        detalhe: '- Instrutor passa o vídeo "Lei do SAC" e reforça que é preciso ter esse tema muito claro.',
        herramientas: [{ tipo: "Vídeo", url: "https://drive.google.com/file/d/1xqezPt9mAMRmoE8EBOuO2wtMfro7iMMw/view?usp=drive_link" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "CDC",
        tiempo: "0:05:00",
        tema: "Código de Defesa\ndo Consumidor",
        detalhe: '- Instrutor abre link do CDC e mostra os pontos (Disposições Gerais). Fecha com a definição: "É a lei que regulamenta os direitos e deveres na relação entre quem compra e quem vende. Protege o comprador contra abusos, garantindo produtos de qualidade, garantia legal e informações claras."',
        herramientas: [{ tipo: "🔗 Link", url: "https://www.planalto.gov.br/ccivil_03/leis/l8078compilado.htm#:~:text=84%20e%20par%C3%A1grafos.-,Art.,por%20telefone%20ou%20a%20domic%C3%ADlio." }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "CDC",
        tiempo: "0:05:00",
        tema: 'Video 3 -\n"CDC X ANAC"',
        detalhe: "- Instrutor mostra vídeo que reflete a responsabilidade da Companhia com o CDC.\n- Destaca que a ANAC é o órgão regulador da aviação brasileira e coloca como exemplo o ART 49 do CDC que não sobrepõe a R400 da ANAC.",
        herramientas: [{ tipo: "Vídeo", url: "https://drive.google.com/file/d/1Gx6EZ8HFxXA2JlnrdhSmefB4xjHQErU0/view?usp=drive_link" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Pilar de exceções\nFora da Política",
        tiempo: "0:10:00",
        tema: "Pilar de exceções\nFora da Política",
        detalhe: "- Instrutor mostra no PIC onde localizar a informação em que o FALE tem a liberalidade de realizar o reembolso conforme Art. 49. (Com Waiver).",
        herramientas: [],
        iaPic: [{ label: "https://pic-latam.zendesk.com/hc/pt-br/articles/1500007916562-Crit%C3%A9rios-para-a-entrada-de-waivers-por-erro-de-agente-e-entrega-de-exce%C3%A7%C3%B5es-fora-da-pol%C3%ADtica#:~:text=Waiver%20REEMBOLSO%20ARTIGO%2049%3A", url: "PIC" }],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "ANAC",
        tiempo: "0:10:00",
        tema: "Resumo\nR-400",
        detalhe: "- Instrutor abre R-400 no site da ANAC.\nMas realiza a leitura e explicação com o GUIA:",
        herramientas: [{ tipo: "🔗 Link", url: "https://docs.google.com/document/d/1kJlwwKS-toD_p-3tushEABjAjknNzgeMiNbtsrfsJ3Q/edit?tab=t.0#heading=h.epmwztdrm8ri" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "ANAC",
        tiempo: "0:05:00",
        tema: 'Vídeo 4 -\n"R400 e 218 ANAC"',
        detalhe: "- Instrutor passa o vídeo de introdução da R-400 e R218 e reforça que é preciso ter esse tema muito claro.",
        herramientas: [{ tipo: "Vídeo", url: "https://drive.google.com/file/d/1GPbP2WDb_SIPUajPeJmaUE87QdN0BSQi/view" }],
        iaPic: [],
        consejo: "",
        dia: 1
      }
    ]
  },
  {
    tipo: "mision1",
    label: "Missão 3: Gestão de Reclamações",
    rows: [
      {
        macroTema: "Política: Gestão de Reclamações",
        tiempo: "0:30:00",
        tema: "Generalidades e Guia de Gestão de Reclamações",
        detalhe: "- Instrutor revisa as Generalidades e Guia de Gestão de Reclamações.\n(Não entrando em cada Seção das tabelas no PIC, mas recordando os tipos de reclamações).\n- Instrutor destaca a informação sobre o prazo para registrar uma reclamação.\n(Cliente solicita 1 compensação e a situação ocorreu a mais de 2 anos, o caso deve ser direcionado para LAE).",
        herramientas: [],
        iaPic: [{ label: "https://pic-latam.zendesk.com/hc/pt-br/articles/17751430190867-Generalidades-e-Guia-de-Gest%C3%A3o-de-Reclama%C3%A7%C3%B5es", url: "PIC" }],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Reclamações\nCasos LAE",
        tiempo: "0:20:00",
        tema: "Casos Sensíveis",
        detalhe: "- Instrutor enfatizar o cuidado de como recepcionar nossos Clientes em situações delicadas (casos sensíveis).\n- Instrutor mostra na tabela os casos sensíveis linkando com as tratativas feitas por LUA e \"Quando transferir a LAE com Macro Interna de Escalamento\"",
        herramientas: [],
        iaPic: [{ label: "https://pic-latam.zendesk.com/hc/pt-br/articles/360053440094-Reclama%C3%A7%C3%B5es-Casos-LAE", url: "PIC" }],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Política:\nReclamações\npor agente 360",
        tiempo: "0:05:00",
        tema: "Política:\nReclamações\npor agente 360",
        detalhe: "- Instrutor explica a diferença entre os conceitos e aplicação de: Compensação, Ressarcimento ou Reembolso;",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1u0pLXPrFaYtewaYnB_TLnl21YtGRxIU_7OL4N3h0B78/edit?slide=id.g3ed24aef936_0_1698#slide=id.g3ed24aef936_0_1698" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Política:\nReclamações\npor agente 360",
        tiempo: "0:30:00",
        tema: "Política:\nReclamações\npor agente 360",
        detalhe: "- Instrutor em Reclamações por Agente 360, dá alguns exemplos da tabela.\n\"Tipos de quebras e motivos disponíveis no Agente 360\"\n- Instrutor coloca exemplos de casos mais recorrentes na operação, abordando não somente as opções de compensações mas também a resolução com Waiver para cenários onde se faz necessário como erros de emissão de bilhetes, ancillaries, erros de remarcação etc.",
        herramientas: [],
        iaPic: [{ label: "https://pic-latam.zendesk.com/hc/pt-br/articles/4413901986963-Reclama%C3%A7%C3%B5es-por-agente-360", url: "PIC" }],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Política:\nReclamações\npor agente 360",
        tiempo: "0:20:00",
        tema: 'Atividade\n"Relatório de Exploração"\nReclamações A360',
        detalhe: "- No PPT temos algumas descrições de demandas da (Matriz de Processos).\n- Intrutor de forma aleatoria convida os agentes para lerem e buscarem na Matriz, de qual demanda se trata.\n- Após localizar explicar qual o fluxo correto se deve seguir para tal demanda.",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1u0pLXPrFaYtewaYnB_TLnl21YtGRxIU_7OL4N3h0B78/edit?slide=id.g3ed24aef936_0_1921#slide=id.g3ed24aef936_0_1921" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Política:\nReclamações\npor agente 360",
        tiempo: "0:50:00",
        tema: 'Atividade\n"Controle de voo e lançamento"\nCompensações A360',
        detalhe: "- Instrutor pede para cada um crirar 1 reserva com 4 PAX e fazer a emissão no A360 Training. Após emissão, dividir a reserva e anotar os localizadores.\n- Criar 1 caso no Zendesk Training, para que possam analisar e documentar a tratativa que entregará aos PAX.\n- No PPT temos casos com situações de reclamações. Para cada caso, peça ao Agente que aplique a exceção correspondente. Tempo para finalizar: 30 Minutos.\n- Após conclusão, instrutor de forma aleatória chama 4 agentes e solicita que cada explique como realizou a tratativa do caso. e - Instrutor mostra o caso criado automaticamente e fechado após solução aplicada. Tempo para finalizar: 15 Minutos.\n- Em seguida, instrutor também de forma aleatória, convida agentes para responder às situações no PPT. Chama outro agente para realizar a correção da resposta, caso seja necessário.",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1u0pLXPrFaYtewaYnB_TLnl21YtGRxIU_7OL4N3h0B78/edit?slide=id.g3e1d5e8e90a_0_887#slide=id.g3e1d5e8e90a_0_887" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Reclamações\nErro do Agente",
        tiempo: "0:05:00",
        tema: 'Video 5\n"Erro do Agente"',
        detalhe: "- Instrutor mostra Vídeo introdutório do fluxo de erros operacionais.",
        herramientas: [{ tipo: "Vídeo", url: "https://drive.google.com/file/d/1SdAVhiU9AcCUHMHTJR2o3QQFgw9C1Ihi/view?usp=drive_link" }],
        iaPic: [],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Reclamações\nErro do Agente",
        tiempo: "0:20:00",
        tema: "Fluxo\nErro de Executivo",
        detalhe: "- Instrutor mostra onde localizar o fluxo no PIC.\n- Reforça os passos com exemplos reais para melhor assimilação do tema para os agentes;\nDestaca que o agente deve analisar de forma cuidadosa e identificar se o caso já foi resolvido na primeira linha ou se ainda é necessário realizara a tratativa. Se reclamação já foi atendida, apenas salvar o ticket como resolvido, mas se ainda não foi, seguir com análise e condução;\n- Dicas sobre atenção e cuidado ao analisar e identificar um erro operacional;\n- Reforçar necessidade de registrar as evidências do erro e de quem errou na nota interna do Zendesk;",
        herramientas: [],
        iaPic: [{ label: "https://lucid.app/documents/embedded/8457dc44-459c-4353-b3c5-4a6a19b0b623/aTdSLg~tuU9L?invitationId=inv_90fbd632-67dd-4608-b8cf-c65b0645f7e6", url: "PIC" }],
        consejo: "",
        dia: 1
      },
      {
        macroTema: "Resumo do\ndia anterior",
        tiempo: "0:05:00",
        tema: "Resumo do\ndia anterior",
        detalhe: "- Instrutor atividade de chuva de idéias para resgatar com os alunos os temas relevantes vistos no dia anterior.",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1zBoBojVuDiOaqdcdi8mQ-0OjWRr8fCJui3tomh_75VQ/edit?slide=id.g3a553516cad_0_14#slide=id.g3a553516cad_0_14" }],
        iaPic: [],
        consejo: "",
        dia: 2
      },
      {
        macroTema: "Solicitação de Chamada",
        tiempo: "0:20:00",
        tema: "Fluxo:\nEnvio de Gravação",
        detalhe: "- Instrutor demonstra como chegar ao fluxo através do PIC;\nAuxilia os agentes com a leitura na orientação descrita no fluxo seguindo por cada ponto. Explica que o agente BO Casos ao aplicar a macro \"Informações básicas chamadas FALE\", o caso segue na bandeja de BO. A Equipe de Qualidade identifica o caso, realiza a analise (Se houve ou não erro por parte da LATAM) e sinaliza o agente com um parecer para que possa seguir com a tratativa conforme posicionamento da qualidade.",
        herramientas: [],
        iaPic: [{ label: "https://lucid.app/documents/embedded/8590775d-91dd-46c4-a332-e8dc22861738/0_0?invitationId=inv_8e56dd84-61a3-4ba6-a248-acb9503a4253", url: "PIC" }],
        consejo: "",
        dia: 2
      },
      {
        macroTema: "Política:\nDeclaração itens de valor - Bagagem",
        tiempo: "0:10:00",
        tema: "Política:\nDeclaração itens de valor - Bagagem",
        detalhe: "- Instrutor explica brevemente o procedimento para Declaração de itens de valor na bagagem despachada (Voos dentro e saindo do Brasil).",
        herramientas: [],
        iaPic: [{ label: "https://pic-latam.zendesk.com/hc/pt-br/articles/13999979686931-Reclama%C3%A7%C3%B5es-por-bagagem-de-m%C3%A3o-despachada-no-por%C3%A3o", url: "PIC" }],
        consejo: "",
        dia: 2
      },
      {
        macroTema: "Matriz Atenção aos Passageiros da Agência",
        tiempo: "0:10:00",
        tema: "Reclamações\nTerceiros (Agências)",
        detalhe: "- Instrutor realiza leitura e uma breve explicação sobre a definição de tickets emitidos em agências de viagens. Destaca onde buscar na tabela do PIC os processos para cada (TIPO DE DE PASSAGEIRO).",
        herramientas: [],
        iaPic: [{ label: "https://pic-latam.zendesk.com/hc/pt-br/articles/33035559260819-Matriz-Aten%C3%A7%C3%A3o-aos-Passageiros-da-Ag%C3%AAncia#:~:text=consulte%20as%20exce%C3%A7%C3%B5es.-,TIPO%20DE%20PASSAGEIRO,-Processo", url: "PIC" }],
        consejo: "",
        dia: 2
      },
      {
        macroTema: "Matriz Atenção aos Passageiros da Agência",
        tiempo: "0:10:00",
        tema: 'Atividade\n"Relatório de Exploração"\nTickets agências',
        detalhe: "- Instrutor projeta imagens de tickets e propõe batalha entre grupos. (Primeiro grupo (mesmo grupo que realizou a atividade anterior ), que se manifestar respondendo como identificou o local de emissão do ticket e mostrar onde localizou marca ponto. - O grupo que marcar mais pontos vence.",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1y2kojUnkAs8I1mBo9ALHgghqdCboQpq3elh7LyKk89g/edit?slide=id.g3e1d5e8e90a_0_887#slide=id.g3e1d5e8e90a_0_887" }],
        iaPic: [],
        consejo: "",
        dia: 2
      },
      {
        macroTema: "Matriz Atenção aos Passageiros da Agência",
        tiempo: "0:05:00",
        tema: "Aplicativo\nCheckACode",
        detalhe: "- Instrutor explica as opções de decodificação nas ferramentas: Sabre, CheckACode e no A360",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1u0pLXPrFaYtewaYnB_TLnl21YtGRxIU_7OL4N3h0B78/edit?slide=id.g3ed24aef936_0_183#slide=id.g3ed24aef936_0_183" }],
        iaPic: [],
        consejo: "",
        dia: 2
      }
    ]
  },
  {
    tipo: "mision1",
    label: "Introdução ao PTA",
    rows: [
      {
        macroTema: "PTA",
        tiempo: "1:00:00",
        tema: "PTA",
        detalhe: "- Instrutor apresenta PTA",
        herramientas: [{ tipo: "PPT", url: "https://docs.google.com/presentation/d/1Ef4T0SrBdnV-jzpaarHXnbNzApYU1bPuEqFJu-4Khbs/edit?slide=id.g39552d23dd7_0_13949#slide=id.g39552d23dd7_0_13949" }],
        iaPic: [],
        consejo: "",
        dia: 2
      }
    ]
  },
  {
    tipo: "ojt",
    label: "Desafio OJT",
    rows: [
      {
        macroTema: "OJT",
        tiempo: "5:00:00",
        tema: "OJT",
        detalhe: "Instrutor leva agentes até a operação para acompanhamento lado a lado.",
        herramientas: [{ tipo: "✈️ Latam.com", url: "" }],
        iaPic: [],
        consejo: "",
        dia: 2
      }
    ]
  }
];

planet.secciones = newSecciones;

fs.writeFileSync(file, JSON.stringify(data, null, 2), 'utf8');
console.log('Successfully updated Fale Voz in appConfig.json');
