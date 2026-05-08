import fs from 'fs';

const rawData = `Introdução 	"
Boas Vindas"	0:05:00	"
Boas Vindas"	"-Instrutor apresenta vídeo “Introdução ao serviço HVC”
"	PPT 		NA		
Introdução 	"
Boas Vindas"	1:00:00	"
Boas Vindas"	"""Conhecendo os clientes HVC "" 
"	PPT 		https://docs.google.com/presentation/d/1CCxXGUdQ3G1fOSMD_UAmrikB2LFyAZ4hAvj7VfCrPx8/edit?slide=id.p799#slide=id.p799		
Missão 1: Latam PASS	"
Conhecendo o produto LATAM PASS"	00:12:00	"
Conhecendo o produto LATAM PASS"	-Instrutor explica a definição das categorias do programa LATAM Pass e suas metas para qualificação				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	Número e categoria do sócio 	00:12:00	Número e categoria do sócio 	-Instrutor explica as atribuições do número de sócios de acordo com a tabela disponível no PIC 				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	Qualificação para as categorias Elite 	00:12:00	Qualificação para as categorias Elite 	- Instrutor deixar claro como o cliente se qualifica para categorias Elite, ensina como calcular e onde consultar los puntos qualificáveis 				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	Processo de qualificacação Anual 	00:12:00	Processo de qualificacação Anual 	-Instrutor explica como funciona o YEP, protocolos e mostra o painel de pontos qualificáveis 		https://lookerstudio.google.com/u/0/reporting/30aae1d4-db9c-4d00-9599-8ea24a7627ae/page/tEnnC		PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	Conhecendo os beneficios da categoria Elite 	00:12:00	Conhecendo os beneficios da categoria Elite 	-Instrutor explica os beneficios da categoria Elite através do site 	Site		https://latampass.latam.com/pt_br/categorias-elite/pontos-qualificaveis		
Missão 1: Latam PASS	Atividade 1:  Jornada Estelar: Explorando Competências - Mapa de Benefícios por Categoria	0:15:00	Atividade 1:  Jornada Estelar: Explorando Competências - Mapa de Benefícios por Categoria	"Formato: times de 3–5 pessoas.

Materiais: planilha/quadro com colunas “Categoria” e “Benefícios”

Dinâmica:

Cada time recebe 3–4 cartões de “Categoria” (ex.: Gold, Gold Plus, Platinum, Black, Black Signature).
Devem listar os 4–6 beneficios principais de cada categoria (ex.: prioridade no check-in/embarque, bagagem, upgrades, bônus de pontos, assentos preferenciais etc.).
Entregam em 7 min; o instrutor compara com a “gabarito” do artigo.


Dica para o instrturor e objetivo da atividade : reforçar diferencias sutis entre níveis (ex.: quantidade de bagagem extra, % de pontos bônus, regras de upgrade)."	PPT 		NA		
Missão 1: Latam PASS	Benefícios para titulares de cartões bancários e do Clube Latam Pass	0:15:00	Benefícios para titulares de cartões bancários e do Clube Latam Pass	- Instrutor apresenta os benefícios dos titulares de cartão de crédito e clube Latam Pass. Em segui apresenta a planilha de benefícios dos cartões				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	Benefícios para titulares de cartões bancários e do Clube Latam Pass		Benefícios para titulares de cartões bancários e do Clube Latam Pass	- Instrutor apresenta os benefícios dos titulares de cartão de crédito e clube Latam Pass. Em segui apresenta a planilha de benefícios dos cartões				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	"
Atribuição de assento favorito para acompanhantes de passageiros black e black signature com tarifa ""Light/Plus/Standard""."	0:15:00	"
Atribuição de assento favorito para acompanhantes de passageiros black e black signature com tarifa ""Light/Plus/Standard""."	-Instrutor descrever o procedimiento aplicável a passageiros Black/Black Signature para a alocação de assentos a acompanhantes con tarifas Light/Plus/Standard.”	Fluxo 		https://lucid.app/documents/embedded/48e0b506-f24f-40e4-90e7-e2f7fb204a7d?invitationId=inv_64f660de-8fa6-4005-9bbe-d419733336d3#		
Missão 1: Latam PASS	"
Devolução EMD de Assento ou Bagagem cobrado por erro de passageiro Preferente,"	0:15:00	"
Devolução EMD de Assento ou Bagagem cobrado por erro de passageiro Preferente,"	-O instrutor explica o flujo de devolução para casos em que passageiros preferenciais pagaram, por engano, por assentos o bagagens.	Fluxo 		https://lucid.app/documents/embedded/1eb1a282-a511-484d-abd1-fcef0b0c8eee/0_0?invitationId=inv_0835815c-af27-4c66-8c9c-47b5fff98d17		
Missão 1: Latam PASS	"
Extensão por licença  parental "	0:15:00	"
Extensão por licença  parental "	-O instrutor explica o procedimiento para casos em que clientes preferenciais desejam fazer uma pausa por motivos de maternidade, nascimento de un filho ou adoção, resultando na redução da frequência de voos.	Fluxo 		https://lucid.app/documents/embedded/b435b3ca-3910-48d8-a2b6-2fe51c9f517e/Pdrr1UshZCgz?invitationId=inv_b25139bb-3caf-455e-b2d6-ea8842af802c		
Missão 1: Latam PASS	Segmento UPG Priority com cartões bancários	0:15:00	Segmento UPG Priority com cartões bancários	- Instrutor  explica que é possível atender os sócios que nos contatarem informando que não consegue visualizar o beneficio del seu cartão bancário na prioridade da lista de postulação com trechos cortesia. através deste fluxo.	Fluxo 		https://lucid.app/documents/embedded/64e06907-1b33-4734-94a7-8aa5c7a5c759?invitationId=inv_d3701676-324d-4bf8-a016-6bb0b686343a#		
Missão 1: Latam PASS	Painel Promoções FFP 2025	0:10:00	Painel Promoções FFP 2025	- Instrutor apresenta o Painel de Promoções e explica que é possível consultar os detalhes das campanhas promocionais direcionadas aos sócios LATAM Pass durante o ano de 2025.	Painel		https://lookerstudio.google.com/u/0/reporting/a4a2e2e7-f2d8-46f2-8809-e52beea50d8f/page/p_saq0x9vvrd		
Missão 1: Latam PASS	Painel Promoções FFP 2026	0:10:00	Painel Promoções FFP 2026	- Instrutor apresenta o Painel de Promoções e explica que é possível consultar os detalhes das campanhas promocionais direcionadas aos sócios LATAM Pass durante o ano de 2025.	Descrição		https://pic-latam.zendesk.com/hc/pt-br/articles/42461678256403-25-06-25-FFP-LATAM-PASS-Painel-Promo%C3%A7%C3%B5es-FFP-2025		
Missão 1: Latam PASS	Bônus Latam Pass	0:55:00	Bônus Latam Pass	-Instrutor explica o artigo Bônus Latam Pass				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/37307768474899-B%C3%B4nus-LATAM-Pass
Missão 1: Latam PASS	"Atividade 
""Constelação de Habilidades""
Bònus LATAM "	00:40:00	"Atividade 
""Constelação de Habilidades""
Bònus LATAM "	"- Instrutor vai apresentar 3 cenários e pedir a justificativa com base no arquivo do PIC, atividade pode realizada em dupla
Cenário 1: Cliente comprou passagem no site oficial durante uma campanha con 20% de bônus. A tarifa foi “Promo” e o CPF está associado ao LATAM Pass. Pergunta: O bônus será creditado? Quando? Algum risco de negação?

Cenário 2 : Cliente remarcou o voo para data fora do período da campanha. Pergunta: O bônus permanece? O que deve ser comunicado ao cliente?
Cenário 3:
Compra feita via agência parceira que não participa da campanha, con cartão de terceiros. Pergunta: O bônus é aplicado? Se não, qual orientação correta?
Microsimulação de atendimento (5 min)
O participante escreve uma resposta clara e empática para un cliente que pergunta:
Critérios: clareza, prazos, condições, e orientação sobre acompanhamento.
                                                                                                                                                                                                                                                                                                                         "				PIC  	https://pic-latam.zendesk.com/hc/pt-br/articles/11712520071443-Remarca%C3%A7%C3%B5es-volunt%C3%A1rias
Missão 1: Latam PASS	Upload de Respaldo no Genesys Cloud	0:20:00	Upload de Respaldo no Genesys Cloud	- Instrutor apresenta sistema para consulta de status de conta FFP				PIC	Sin enlace
Missão 1: Latam PASS	Atualização de email 	0:10:00	Atualização de email 	Instrutor explica o paso a paso para realizar o upload de documento através do Genesys				PIC	Sin enlace
Missão 1: Latam PASS	Conta ativa com problemas de transação	0:10:00	Conta ativa com problemas de transação	-O instrutor contextualiza os procedimiento e apresenta o flujo HVC +  DP FFP ( se aplicável para BR) 				Fluxo	Sin enlace
Missão 1: Latam PASS	Erro de criação do perfil Site Clientes	0:30:00	Erro de creación del perfil Site Clientes	-O instrutor contextualiza os procedimiento e apresenta o flujo HVC +  DP FFP ( se aplicável para BR) 				Fluxo	Sin enlace
Missão 1: Latam PASS	Mudança País De Residência Sócio	0:20:00	Mudança País De Residência Sócio	-O instrutor contextualiza os procedimiento e apresenta o flujo HVC +  DP FFP ( se aplicável para BR) 				Fluxo 	Sin enlace
Missão 1: Latam PASS	Encerramento De Conta LATAM Pass	0:25:00	Encerramento De Conta LATAM Pass	-O instrutor contextualiza os procedimiento e apresenta o flujo HVC +  DP FFP ( se aplicável para BR) 				Fluxo	Sin enlace
Missão 1: Latam PASS	Correção de nome / sobrenome /data de nascimento na conta LATAM Pass	0:30:00	Correção de nome / sobrenome /data de nascimento na conta LATAM Pass	-O instrutor contextualiza os procedimiento e apresenta o flujo HVC +  DP FFP ( se aplicável para BR) 				Fluxo	Sin enlace
Missão 1: Latam PASS	Tratamento de casos com informações sensíveis	0:20:00	Tratamento de casos com informações sensíveis	-O instrutor contextualiza os procedimiento e apresenta o flujo HVC +  DP FFP ( se aplicável para BR) 				Fluxo	Sin enlace
Missão 1: Latam PASS	Bloqueio por comercio de pontos ou resgates para terceiros 	0:05:00	Bloqueio por comercio de pontos o resgates para terceiros 	- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				"PIC
Fluxo"	"https://pic-latam.zendesk.com/hc/pt-br/articles/45219338064275-Tratamento-de-casos-com-informa%C3%A7%C3%B5es-sens%C3%ADveis

https://lucid.app/documents/embedded/3ae11b12-3029-4d75-9f90-9df355cebd7f?invitationId=inv_63b1d1f7-47ac-478f-868b-29405ba30573#"
Missão 1: Latam PASS	Conta com saldos irregulares	0:10:00	Conta com saldos irregulares	- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				PIC	Sin enlace
Missão 1: Latam PASS	Desconhecimento de resgate 	0:10:00	Desconhecimento de resgate 	- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				PIC	Sin enlace
Missão 1: Latam PASS	LOGIN status da Conta FFP auditado, fraude ou conta ativa com erro	0:25:00	LOGIN status da Conta FFP auditado, fraude o conta ativa con erro	- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				Fluxo	Sin enlace
Missão 1: Latam PASS	Vencimento de milhas/pontos por conta falso positiva	0:10:00	Vencimento de milhas/pontos por conta falso positiva	- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				Fluxo	Sin enlace
Missão 1: Latam PASS	Soluções para Latam Wallet Suspensa ou Movimentos não Reconhecidos	0:05:00	Soluções para Latam Wallet Suspensa ou Movimentos não Reconhecidos	- Instrutor faz uma breve presentación sobre a tratativa de casos contendo dados sensíveis				Fluxo	Sin enlace
Missão 1: Latam PASS		0:05:00		- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				Fluxo	Sin enlace
Missão 1: Latam PASS	Resgate de milhas com tarifas comerciales 	0:05:00	Resgate de milhas con tarifas comerciales 	- Instrutor faz una breve presentación sobre a tratativa de casos contendo dados sensíveis				Fluxo	Sin enlace
Missão 2: Vendas	Processo alternativo de resgate 	0:40:00	Processo alternativo de resgate 	- Instrutor apresenta o proceso de emissão con milhas através del site e pelo agente 360 				PIC	Sin enlace
Missão 2: Vendas	Processo alternativo de resgate 	0:30:00	Processo alternativo de resgate 	"- Instrutor apresenta Resgate alternativo resgate alternativo fora do E- Business e Honrar tarifas
"				PIC	Sin enlace
Missão 2: Vendas	Processo alternativo de resgate 	0:30:00	Processo alternativo de resgate 	- Instrutor apresenta resgate de Múltiplos passageiros na mesma ordem				PIC	Sin enlace
Missão 2: Vendas	Processo alternativo de resgate 	0:30:00	Processo alternativo de resgate 	- Instrutor apresenta Resgate alternativo fora do E- Business - Moeda distinta				PIC	Sin enlace
Missão 2: Vendas	Resgate 100% OLA	0:30:00	Resgate 100% OLA	- Instrutor explica as  incidências no proceso de resgate no site para clientes 				PIC	Sin enlace
Missão 2: Vendas	Resgate 100% OLA	1:00:00	Resgate 100% OLA	- Instrutor apresenta forma de resgate con otras CIAs				PIC	Sin enlace
Missão 2: Vendas	Resgate 100% OLA	1:00:00	Resgate 100% OLA					Fluxo	Sin enlace
Missão 2: Vendas	"Exercício Gravidade Zero: Treinamento Imersivo
Simulador Resgate 100% OLA (BR)"	1:00:00	"Exercício Gravidade Zero: Treinamento Imersivo
Simulador Resgate 100% OLA (BR)"	"- Instrutor apresenta ferramento piloto - Painel de disponibilidade OLA
"				Painel	Sin enlace
Missão 2: Vendas	Retomar reservas de compras pendentes através do site	0:40:00	Retomar reservas de compras pendentes através do site	-O Instrutor orienta os alunos a emitirem de acordo con o simulador de reservas				PPT 	Sin enlace
Missão 2: Vendas	Honrar Tarifa (tentativas de compra no site)	0:15:00	Honrar Tarifa (tentativas de compra no site)	- O instrutor explica como retoma a reserva automaticamente se a compra online não for finalizada.				"PIC
"	https://pic-latam.zendesk.com/hc/pt-br/articles/11134876798355-Incidentes-de-emiss%C3%A3o-no-site-dinheiro-retido-honrar-tarifa-retomar-reservas-etc
Missão 2: Vendas	Compras com dinero retido na LATAM Wallet	0:15:00	Compras com dinero retido na LATAM Wallet	-O instrutor explica como garantir  a mesma tarifa quando o cliente não consegue concluir a compra o resgate online, sem qualquer débito de dinero o milhas.				"PIC
"	https://pic-latam.zendesk.com/hc/pt-br/articles/11134876798355-Incidentes-de-emiss%C3%A3o-no-site-dinheiro-retido-honrar-tarifa-retomar-reservas-etc
Missão 2: Vendas	Compras com dinero retido na LATAM Wallet	0:15:00	Compras com dinero retido na LATAM Wallet	- Instrutor explica os caos de compra online quando não foi emitida, o valor foi debitado e ficou retido na LATAM Wallet 				"PIC
"	https://pic-latam.zendesk.com/hc/pt-br/articles/11134876798355-Incidentes-de-emiss%C3%A3o-no-site-dinheiro-retido-honrar-tarifa-retomar-reservas-etc
Missão 2: Vendas	Pedido de Lei Anac - Brasil	0:15:00	Pedido de Lei Anac - Brasil	- Instrutor explica os caos de compra online quando não foi emitida, o valor foi debitado e ficou retido na LATAM Wallet 				"PIC
"	https://pic-latam.zendesk.com/hc/pt-br/articles/11134876798355-Incidentes-de-emiss%C3%A3o-no-site-dinheiro-retido-honrar-tarifa-retomar-reservas-etc
Missão 2: Vendas	Lei Geral de Proteção de dados Brasil	0:15:00	Lei Geral de Proteção de dados Brasil	- Instrutor faz uma revisão con os agentes sobre o pedido de Lei Anac Brasil e explica as exceções aplicadas para esse caso 				PIC	Sin enlace
Missão 2: Vendas	"Tarifa de Emergência Falecimento
e  Hospitalização"	0:15:00	"Tarifa de Emergência Falecimento
e  Hospitalização"	- Instrutor faz uma revisão con os agentes sobre lei de proteção de dados Brasil 				PIC	Sin enlace
Missão 2: Vendas	"Atividade 
Missão Galáctica: Aprender e Evoluir
Emissão e reembolso con tarifa de emergência "	0:40:00	"Atividade 
Missão Galáctica: Aprender e Evoluir
Emissão e reembolso con tarifa de emergência "	-O instrutor contextualiza o procedimiento e apresenta o flujo de validar a documentação e realizar a gestão de tarifa 				Fluxo	Sin enlace
Missão 2: Vendas	Passe livre judicial 	0:30:00	Passe livre judicial 	"
- Instrutor pede para os agentes emitirem passagens através del SABRE de treinamento , essas emissões devem ser feitas através da tarifa de emegência. 
- Instrutor pede para os agentes simularem o reembolso de passagens de tarifa de emergência  através del SABRE de treinamento."				Fluxo	Sin enlace
Missão 2: Vendas	Passe livre judicial 	0:15:00	Passe livre judicial 	- Instrutor contextualiza sobre os passageiros vigentes "Passe livre judicial" e explica através del flujo como tratar estes casos 				PIC	Sin enlace
Missão 2: Vendas	Upgrade de Cabine (com trechos de cortesia)	0:15:00	Upgrade de Cabine (com trechos de cortesia)	- Instrutor explica as considerações para solicitação de UPG por trechos e apresenta o paso a paso através del A360 e Sabre con base no flujo				Fluxo	Sin enlace
Missão 3: Alterações 	Upgrade de Cabine (com trechos de cortesia)	00:10;00	Upgrade de Cabine (com trechos de cortesia)	- Instrutor explica as considerações para solicitação de UPG por trechos e apresenta o paso a paso através del A360 e Sabre con base no flujo				PIC	Sin enlace
Missão 3: Alterações 	Upgrade de Cabine (com trechos de cortesia)	00:10;00	Upgrade de Cabine (com trechos de cortesia)	- Instrutor explica as considerações para solicitação de UPG por trechos e presenta o paso a paso através del A360 e Sabre con base no flujo				Passo a passo A360	Sin enlace
Missão 3: Alterações 	Processo postulação manual UPG Interact Airport	00:10;00	Processo postulação manual UPG Interact Airport	- Instrutor explica as considerações para solicitação de UPG por trechos e presenta o paso a paso através del A360 e Sabre con base no flujo				Fluxo	Sin enlace
Missão 3: Alterações 	Cancelamento Manual de Postulação de UPG de Cortesia	0:10:00	Cancelamento Manual de Postulação de UPG de Cortesia	- O Instrutor apresenta o flujo e explica o proceso de inscrição manual del UPG Interact Airport e o flujo que se aplica ao serviço HVC.				Fluxo	Sin enlace
Missão 3: Alterações 	Opções de UPG	0:05:00	Opções de UPG	- O Instrutor apresenta o flujo e explica o proceso de cancelamento manual del UPG através del Interact Airport				Fluxo	Sin enlace
Missão 3: Alterações 	Opções de UPG	0:05:00	Opções de UPG	- Instrutor apresenta os otros tipos de upgrade que un passageiro pode solicitar. Reforçando as considerações.				PIC	Sin enlace
Missão 3: Alterações 	Opções de UPG	0:05:00	Opções de UPG	Reembolso involuntário del EMD Seatboost				Fluxo	Sin enlace
Missão 3: Alterações 	Opções de UPG	0:05:00	Opções de UPG	Devolução de EMD (Leilão/Instantâneo)  por Downgrade de cabine				Fluxo	Sin enlace
Missão 3: Alterações 	Postulacão UPG	0:05:00	Postulacão UPG	Anulação de uma Aposta (Plusgrade)				Fluxo	Sin enlace
Missão 3: Alterações 	Postulacão UPG	0:05:00	Postulacão UPG	-Instrutor mostra a partir del PIC a plataforma para visualizar as seções de cortesia que un membro possui.				PIC	Sin enlace
Missão 3: Alterações 	"Rotas Cósmicas de Desenvolvimento
Processo de inscrição manual do Interact Airport"	0:05:00	"Rotas Cósmicas de Desenvolvimento
Processo de inscrição manual do Interact Airport"	-Instrutor mostra a partir del PIC a plataforma para visualizar as seções de cortesia que un membro possui.				Plataforma	Sin enlace
Missão 3: Alterações 	Opções de Upgrade (reembolso involuntário - Seatboost e Downgrade de cabine)	0:15:00	Opções de Upgrade (reembolso involuntário - Seatboost e Downgrade de cabine)	"Resolva o seguinte caso em pares:
Caso: Ao solicitar un manual cortesia UPG, siga o paso a paso e verifique se ele atende às características para o proceso UPG. 
De acordo con o flujo, encontre a solução para o passageiro e depois apresente a solução con a ajuda del Instrutor."				PPT	Sin enlace
Missão 3: Alterações 	Opções de Upgrade (reembolso involuntário - Seatboost e Downgrade de cabine)	0:05:00	Opções de Upgrade (reembolso involuntário - Seatboost e Downgrade de cabine)	Instrutor faz un breve resumo sobre opções de upgrade (Leilão/Instantâneo). E reforça sobre os passageiros con Upg confirmado através del Seatboost que não utilizam por cancelamento o remarcação de voo.				PIC	Sin enlace
Missão 3: Alterações 	Correção de nome em reservas com UPG confirmado	0:10:00	Correção de nome em reservas com UPG confirmado	Instrutor faz un breve resumo sobre opções de upgrade (Leilão/Instantâneo). E reforça sobre os passageiros con Upg confirmado através del Seatboost que não utilizam por cancelamento o remarcação de voo.				Fluxo	Sin enlace
Missão 3: Alterações 	Antecipação e postergação Alteração de voo por Antecipação/Postergação a sócios Elite isentos de cobrança	0:10:00	Antecipação e postergação Alteração de voo por Antecipação/Postergação a sócios Elite isentos de cobrança	- Instutor explica o procedimiento para alteração de nome nos casos em que o UPG está confirmado 				PIC	Sin enlace
Missão 3: Alterações 	Emissão/ Reemissão EXST/CBBG	0:15:00	Emissão/ Reemissão EXST/CBBG	- Instrutor apresenta  Antecipação/Postergação de Voo Confirmado (Sabre / E-Business) para a sócios Elite isentos de cobrança				Fluxo 	Sin enlace
Missão 3: Alterações 	Latam Wallet -Países e contas bancárias para retirada de dinheiro	00:20:00	Latam Wallet -Países e contas bancárias para retirada de dinheiro	- Instutor explica o procedimiento ao assento adicional e o flujo que se aplica ao atendimento HVC 				"PIC 
Fluxo HVC"	"https://pic-latam.zendesk.com/hc/pt-br/articles/360052932933-Assento-Adicional-EXST-CBBG-

https://lucid.app/documents/embedded/ef69cbb4-c92c-4488-a924-00f291811644?invitationId=inv_d09465bf-3dc2-41f3-aba3-65841a686198#"`;

const rows = rawData.split('\n').filter(l => l.trim().length > 0);

const sectionsMap = new Map();

const CATEGORY_MAP = {
    'Introdução': 'Introdução',
    'Missão 1: Latam PASS': 'Missão 1: Latam PASS',
    'Missão 2: Vendas': 'Missão 2: Vendas',
    'Missão 3: Alterações': 'Missão 3: Alterações'
};

let currentCategory = 'Introdução';

for (const row of rows) {
    const parts = row.split('\t').map(p => p.trim().replace(/^"|"$/g, '').trim());
    if (parts.length < 5) continue;

    let mission = parts[0];
    if (CATEGORY_MAP[mission]) {
        currentCategory = mission;
    }

    const tema = parts[1] || parts[3] || 'Sem Tema';
    const tempo = parts[2] || '0:10:00';
    const desc = parts[4] || '';
    const adjunto = parts[5] || '';
    const consejo = parts[6] || '';
    const link = parts[7] || '';
    const picLabel = parts[8] || 'PIC';
    const picUrl = parts[9] || '';

    if (!sectionsMap.has(currentCategory)) {
        sectionsMap.set(currentCategory, {
            tipo: 'mision1',
            label: currentCategory,
            rows: []
        });
    }

    const section = sectionsMap.get(currentCategory);
    
    const herramientas = [];
    if (link && link !== 'NA' && link !== 'Sin enlace') {
        herramientas.push({ tipo: adjunto || 'Link', url: link });
    } else if (adjunto && adjunto !== 'NA' && adjunto !== '') {
        herramientas.push({ tipo: adjunto, url: '' });
    }

    const iaPic = [];
    if (picUrl && picUrl !== 'Sin enlace') {
        iaPic.push({ label: picLabel || 'PIC', url: picUrl });
    }

    section.rows.push({
        macroTema: currentCategory,
        tema,
        detalhe: desc,
        consejo,
        herramientas,
        iaPic,
        tiempo: tempo
    });
}

const hvcData = Array.from(sectionsMap.values());

const tsCode = `export const HVC_DATA = {
  secciones: ${JSON.stringify(hvcData, null, 2)},
  materiais: [],
  evalKon: [],
  evalAec: [],
  evalMsg: ''
};`;

fs.writeFileSync('hvc_data.ts', tsCode);
console.log('Parsed categories:', Array.from(sectionsMap.keys()));
console.log('Total rows:', hvcData.reduce((acc, s) => acc + s.rows.length, 0));
