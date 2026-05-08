
import json

raw_data = """
Introdução 	"
Boas Vindas"	0:05:00	"
Boas Vindas"	"-Instrutor apresenta vídeo “Introdução ao serviço HVC”
"	PPT 		NA		
Introdução 	"
Boas Vindas"	1:00:00	"
Boas Vindas"	"""Conhecendo os clientes HVC "" 
"	PPT 		https://docs.google.com/presentation/d/1CCxXGUdQ3G1fOSMD_UAmrikB2LFyAZ4hAvj7VfCrPx8/edit?slide=id.p799#slide=id.p799		
Missão 1: Latam PASS	"
Conhecendo o produto LATAM PASS"	00:12:00	"
Conhecendo o produto LATAM PASS"	-Instrutor explica a definição das categorias do programa LATAM Pass e suas metas para qualificación				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	Número e categoria do sócio 	00:12:00	Número e categoria do sócio 	-Instrutor explica as atribuições do número de sócios de acordo com a tabela disponível no PIC 				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	Qualificação para as categorias Elite 	00:12:00	Qualificação para as categorias Elite 	- Instrutor deixar claro como o cliente se qualifica para categorias Elite, ensina como calcular e onde consultar os pontos qualificáveis 				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	Processo de qualificacação Anual 	00:12:00	Processo de qualificacação Anual 	-Instrutor explica como funciona o YEP, protocolos e mostra o painel de pontos qualificáveis 		https://lookerstudio.google.com/u/0/reporting/30aae1d4-db9c-4d00-9599-8ea24a7627ae/page/tEnnC		PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	Conhecendo os beneficios da categoria Elite 	00:12:00	Conhecendo os beneficios da categoria Elite 	-Instrutor explica os beneficios da categoria Elite através do site 	Site		https://latampass.latam.com/pt_br/categorias-elite/pontos-qualificaveis		
Missão 1: Latam PASS	Atividade 1:  Jornada Estelar: Explorando Competências - Mapa de Benefícios por Categoria	0:15:00	Atividade 1:  Jornada Estelar: Explorando Competências - Mapa de Benefícios por Categoria	"Formato: times de 3–5 pessoas.

Materiais: planilha/quadro com colunas “Categoria” e “Benefícios”

Dinâmica:

Cada time recebe 3–4 cartões de “Categoria” (ex.: Gold, Gold Plus, Platinum, Black, Black Signature).
Devem listar os 4–6 benefícios principais de cada categoria (ex.: prioridade no check-in/embarque, bagagem, upgrades, bônus de pontos, assentos preferenciais etc.).
Entregam em 7 min; o instrutor compara com a “gabarito” do artigo.


Dica para o instrturor e objetivo da atividade : reforçar diferenças sutis entre níveis (ex.: quantidade de bagagem extra, % de pontos bônus, regras de upgrade)."	PPT 		NA		
Missão 1: Latam PASS	Benefícios para titulares de cartões bancários e do Clube Latam Pass	0:15:00	Benefícios para titulares de cartões bancários e do Clube Latam Pass	- Instrutor apresenta os benefícios dos titulares de cartão de crédito e clube Latam Pass. Em segui apresenta a planilha de benefícios dos cartões				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	Benefícios para titulares de cartões bancários e do Clube Latam Pass		Benefícios para titulares de cartões bancários e do Clube Latam Pass	- Instrutor apresenta os benefícios dos titulares de cartão de crédito e clube Latam Pass. Em segui apresenta a planilha de benefícios dos cartões				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053169173-Produto-Categorias-e-Benef%C3%ADcios-LATAM-Pass
Missão 1: Latam PASS	"
Atribuição de assento favorito para acompanhantes de passageiros black e black signature com tarifa ""Light/Plus/Standard""."	0:15:00	"
Atribuição de assento favorito para acompanhantes de passageiros black e black signature com tarifa ""Light/Plus/Standard""."	-Instrutor descrever o procedimento aplicável a passageiros Black/Black Signature para a alocação de assentos a acompanhantes con tarifas Light/Plus/Standard.”	Fluxo 		https://lucid.app/documents/embedded/48e0b506-f24f-40e4-90e7-e2f7fb204a7d?invitationId=inv_64f660de-8fa6-4005-9bbe-d419733336d3#		
Missão 1: Latam PASS	"
Devolução EMD de Assento ou Bagagem cobrado por erro de passageiro Preferente,"	0:15:00	"
Devolução EMD de Assento ou Bagagem cobrado por erro de passageiro Preferente,"	-O instrutor explica o fluxo de devolução para casos em que passageiros preferenciais pagaram, por engano, por assentos ou bagagens.	Fluxo 		https://lucid.app/documents/embedded/1eb1a282-a511-484d-abd1-fcef0b0c8eee/0_0?invitationId=inv_0835815c-af27-4c66-8c9c-47b5fff98d17		
Missão 1: Latam PASS	"
Extensão por licença  parental "	0:15:00	"
Extensão por licença  parental "	-O instrutor explica o procedimento para casos em que clientes preferenciais desejam fazer uma pausa por motivos de maternidade, nascimento de um filho ou adoção, resultando na redução da frequência de voos.	Fluxo 		https://lucid.app/documents/embedded/b435b3ca-3910-48d8-a2b6-2fe51c9f517e/Pdrr1UshZCgz?invitationId=inv_b25139bb-3caf-455e-b2d6-ea8842af802c		
Missão 1: Latam PASS	Segmento UPG Priority com cartões bancários	0:15:00	Segmento UPG Priority com cartões bancários	- Instrutor  explica que é possível atender os sócios que nos contatarem informando que não consegue visualizar o benefício do seu cartão bancário na prioridade da lista de postulação com trechos cortesia. através deste fluxo.	Fluxo 		https://lucid.app/documents/embedded/64e06907-1b33-4734-94a7-8aa5c7a5c759?invitationId=inv_d3701676-324d-4bf8-a016-6bb0b686343a#		
Missão 1: Latam PASS	Painel Promoções FFP 2025	0:10:00	Painel Promoções FFP 2025	- Instrutor apresenta o Painel de Promoções e explica que é possível consultar os detalhes das campanhas promocionais direcionadas aos sócios LATAM Pass durante o ano de 2025.	Painel		https://lookerstudio.google.com/u/0/reporting/a4a2e2e7-f2d8-46f2-8809-e52beea50d8f/page/p_saq0x9vvrd		
Missão 1: Latam PASS	Painel Promoções FFP 2026	0:10:00	Painel Promoções FFP 2026	- Instrutor apresenta o Painel de Promoções e explica que é possível consultar os detalhes das campanhas promocionais direcionadas aos sócios LATAM Pass durante o ano de 2025.	Descrição		https://pic-latam.zendesk.com/hc/pt-br/articles/42461678256403-25-06-25-FFP-LATAM-PASS-Painel-Promo%C3%A7%C3%B5es-FFP-2025		
Missão 1: Latam PASS	Bônus Latam Pass	0:55:00	Bônus Latam Pass	-Instrutor explica o artigo Bônus Latam Pass				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/37307768474899-B%C3%B4nus-LATAM-Pass
Missão 1: Latam PASS	"Atividade 
""Constelação de Habilidades""
Bònus LATAM "	00:40:00	"Atividade 
""Constelação de Habilidades""
Bònus LATAM "	"- Instrutor vai apresentar 3 cenários e pedir a justificativa com base no artigo do PIC, atividade pode realizada em dupla
Cenário 1: Cliente comprou passagem no site oficial durante uma campanha con 20% de bônus. A tarifa foi “Promo” e o CPF está associado ao LATAM Pass. Pergunta: O bônus será creditado? Quando? Algum risco de negação?

Cenário 2 : Cliente remarcou o voo para data fora do período da campanha. Pergunta: O bônus permanece? O que deve ser comunicado ao cliente?
Cenário 3:
Compra feita via agência parceira que não participa da campanha, com cartão de terceiros. Pergunta: O bônus é aplicado? Se não, qual orientação correta?
Microsimulação de atendimento (5 min)
O participante escreve uma resposta clara e empática para um cliente que pergunta:
Critérios: clareza, prazos, condições, e orientação sobre acompanhamento.
                                                                                                                                                                                                                                                                                                                         "				PIC  	https://pic-latam.zendesk.com/hc/pt-br/articles/11712520071443-Remarca%C3%A7%C3%B5es-volunt%C3%A1rias
Missão 1: Latam PASS	Upload de Respaldo no Genesys Cloud	0:20:00	Upload de Respaldo no Genesys Cloud	- Instrutor apresenta sistema para consulta de status de conta FFP				PIC	Sin enlace
Missão 1: Latam PASS	Atualização de email 	0:10:00	Atualização de email 	Instrutor explica o passo a passo para realizar o upload de documento através do Genesys				PIC	Sin enlace
Missão 1: Latam PASS	Conta ativa con problemas de transação	0:10:00	Conta ativa com problemas de transação	-O instrutor contextualiza os procedimento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR) 				Fluxo	Sin enlace
Missão 1: Latam PASS	Erro de criação do perfil Site Clientes	0:30:00	Erro de criação do perfil Site Clientes	-O instrutor contextualiza os procedimento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR) 				Fluxo	Sin enlace
Missão 1: Latam PASS	Mudança País De Residência Sócio	0:20:00	Mudança País De Residência Sócio	-O instrutor contextualiza os procedimento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR) 				Fluxo 	Sin enlace
Missão 1: Latam PASS	Encerramento De Conta LATAM Pass	0:25:00	Encerramento De Conta LATAM Pass	-O instrutor contextualiza os procedimento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR) 				Fluxo	Sin enlace
Missão 1: Latam PASS	Correção de nome / sobrenome /data de nascimento na conta LATAM Pass	0:30:00	Correção de nome / sobrenome /data de nascimento na conta LATAM Pass	-O instrutor contextualiza os procedimiento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR) 				Fluxo	Sin enlace
Missão 1: Latam PASS	Tratamento de casos con informações sensíveis	0:20:00	Tratamento de casos com informações sensíveis	-O instrutor contextualiza os procedimiento e apresenta o fluxo HVC +  DP FFP ( se aplicável para BR) 				Fluxo	Sin enlace
Missão 1: Latam PASS	Bloqueio por comercio de pontos ou resgates para terceiros 	0:05:00	Bloqueio por comercio de pontos ou resgates para terceiros 	- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				"PIC
Fluxo"	"https://pic-latam.zendesk.com/hc/pt-br/articles/45219338064275-Tratamento-de-casos-com-informa%C3%A7%C3%B5es-sens%C3%ADveis

https://lucid.app/documents/embedded/3ae11b12-3029-4d75-9f90-9df355cebd7f?invitationId=inv_63b1d1f7-47ac-478f-868b-29405ba30573#"
Missão 1: Latam PASS	Conta con saldos irregulares	0:10:00	Conta com saldos irregulares	- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				PIC	Sin enlace
Missão 1: Latam PASS	Desconhecimento de resgate 	0:10:00	Desconhecimento de resgate 	- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				PIC	Sin enlace
Missão 1: Latam PASS	LOGIN status da Conta FFP auditado, fraude ou conta ativa com erro	0:25:00	LOGIN status da Conta FFP auditado, fraude ou conta ativa con erro	- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				Fluxo	Sin enlace
Missão 1: Latam PASS	Vencimento de milhas/pontos por conta falso positiva	0:10:00	Vencimento de milhas/pontos por conta falso positiva	- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				Fluxo	Sin enlace
Missão 1: Latam PASS	Soluções para Latam Wallet Suspensa ou Movimentos não Reconhecidos	0:05:00	Soluções para Latam Wallet Suspensa ou Movimentos não Reconhecidos	- Instrutor faz uma breve presentación sobre a tratativa de casos contendo dados sensíveis				Fluxo	Sin enlace
Missão 1: Latam PASS		0:05:00		- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				Fluxo	Sin enlace
Missão 1: Latam PASS	Resgate de milhas con tarifas comerciais 	0:05:00	Resgate de milhas com tarifas comerciais 	- Instrutor faz uma breve apresentação sobre a tratativa de casos contendo dados sensíveis				Fluxo	Sin enlace
Missão 2: Vendas	Processo alternativo de resgate 	0:40:00	Processo alternativo de resgate 	- Instrutor apresenta o processo de emissão com milhas através do site e pelo agente 360 				PIC	Sin enlace
Missão 2: Vendas	Processo alternativo de resgate 	0:30:00	Processo alternativo de resgate 	"- Instrutor apresenta Resgate alternativo resgate alternativo fora do E- Business e Honrar tarifas
"				PIC	Sin enlace
Missão 2: Vendas	Processo alternativo de resgate 	0:30:00	Processo alternativo de resgate 	- Instrutor apresenta resgate de Múltiplos passageiros na mesma ordem				PIC	Sin enlace
Missão 2: Vendas	Processo alternativo de resgate 	0:30:00	Processo alternativo de resgate 	- Instrutor apresenta Resgate alternativo fora do E- Business - Moeda distinta				PIC	Sin enlace
Missão 2: Vendas	Resgate 100% OLA	0:30:00	Resgate 100% OLA	- Instrutor explica as  incidências no processo de resgate no site para clientes 				PIC	Sin enlace
Missão 2: Vendas	Resgate 100% OLA	1:00:00	Resgate 100% OLA	- Instrutor apresenta forma de resgate con outras CIAs				PIC	Sin enlace
Missão 2: Vendas	Resgate 100% OLA	1:00:00	Resgate 100% OLA					Fluxo	Sin enlace
Missão 2: Vendas	"Exercício Gravidade Zero: Treinamento Imersivo
Simulador Resgate 100% OLA (BR)"	1:00:00	"Exercício Gravidade Zero: Treinamento Imersivo
Simulador Resgate 100% OLA (BR)"	"- Instrutor apresenta ferramento piloto - Painel de disponibilidade OLA
"				Painel	Sin enlace
Missão 2: Vendas	Retomar reservas de compras pendentes através do site	0:40:00	Retomar reservas de compras pendentes através do site	-O Instrutor orienta os alunos a emitirem de acordo com o simulador de reservas				PPT 	Sin enlace
Missão 2: Vendas	Honrar Tarifa (tentativas de compra no site)	0:15:00	Honrar Tarifa (tentativas de compra no site)	- O instrutor explica como retoma a reserva automaticamente se a compra online não for finalizada.				"PIC
"	https://pic-latam.zendesk.com/hc/pt-br/articles/11134876798355-Incidentes-de-emiss%C3%A3o-no-site-dinheiro-retido-honrar-tarifa-retomar-reservas-etc
Missão 2: Vendas	Compras con dinheiro retido na LATAM Wallet	0:15:00	Compras com dinheiro retido na LATAM Wallet	-O instrutor explica como garantir  a mesma tarifa quando o cliente não consegue concluir a compra ou resgate online, sem qualquer débito de dinheiro o milhas.				"PIC
"	https://pic-latam.zendesk.com/hc/pt-br/articles/11134876798355-Incidentes-de-emiss%C3%A3o-no-site-dinheiro-retido-honrar-tarifa-retomar-reservas-etc
Missão 2: Vendas	Compras com dinero retido na LATAM Wallet	0:15:00	Compras com dinheiro retido na LATAM Wallet	- Instrutor explica os caos de compra online quando não foi emitida, o valor foi debitado e ficou retido na LATAM Wallet 				"PIC
"	https://pic-latam.zendesk.com/hc/pt-br/articles/11134876798355-Incidentes-de-emiss%C3%A3o-no-site-dinheiro-retido-honrar-tarifa-retomar-reservas-etc
Missão 2: Vendas	Pedido de Lei Anac - Brasil	0:15:00	Pedido de Lei Anac - Brasil	- Instrutor explica os caos de compra online quando não foi emitida, o valor foi debitado e ficou retido na LATAM Wallet 				"PIC
"	https://pic-latam.zendesk.com/hc/pt-br/articles/11134876798355-Incidentes-de-emiss%C3%A3o-no-site-dinheiro-retido-honrar-tarifa-retomar-reservas-etc
Missão 2: Vendas	Lei Geral de Proteção de dados Brasil	0:15:00	Lei Geral de Proteção de dados Brasil	- Instrutor faz uma revisão com os agentes sobre o pedido de Lei Anac Brasil e explica as exceções aplicadas para esse caso 				PIC	Sin enlace
Missão 2: Vendas	"Tarifa de Emergência Falecimento
e  Hospitalização"	0:15:00	"Tarifa de Emergência Falecimento
e  Hospitalização"	- Instrutor faz uma revisão con os agentes sobre lei de proteção de dados Brasil 				PIC	Sin enlace
Missão 2: Vendas	"Atividade 
Missão Galáctica: Aprender e Evoluir
Emissão e reembolso com tarifa de emergência "	0:40:00	"Atividade 
Missão Galáctica: Aprender e Evoluir
Emissão e reembolso com tarifa de emergência "	-O instrutor contextualiza o procedimento e apresenta o fluxo de validar a documentação e realizar a gestão de tarifa 				Fluxo	Sin enlace
Missão 2: Vendas	Passe livre judicial 	0:30:00	Passe livre judicial 	"
- Instrutor pede para os agentes emitirem passagens através do SABRE de treinamento , essas emissões devem ser feitas através da tarifa de emegência. 
- Instrutor pede para os agentes simularem o reembolso de passagens de tarifa de emergência  através do SABRE de treinamento."				Fluxo	Sin enlace
Missão 2: Vendas	Passe livre judicial 	0:15:00	Passe livre judicial 	- Instrutor contextualiza sobre os passageiros vigentes "Passe livre judicial" e explica através do fluxo como tratar estes casos 				PIC	Sin enlace
Missão 2: Vendas	Upgrade de Cabine (com trechos de cortesia)	0:15:00	Upgrade de Cabine (com trechos de cortesia)	- Instrutor explica as considerações para solicitação de UPG por trechos e apresenta o passo a paso através do A360 e Sabre com base no fluxo				Fluxo	Sin enlace
Missão 3: Alterações 	Upgrade de Cabine (com trechos de cortesia)	00:10;00	Upgrade de Cabine (com trechos de cortesia)	- Instrutor explica as considerações para solicitação de UPG por trechos e apresenta o passo a passo através do A360 e Sabre com base no fluxo				PIC	Sin enlace
Missão 3: Alterações 	Upgrade de Cabine (com trechos de cortesia)	00:10;00	Upgrade de Cabine (com trechos de cortesia)	- Instrutor explica as considerações para solicitação de UPG por trechos e apresenta o passo a passo através do A360 e Sabre con base no fluxo				Passo a passo A360	Sin enlace
Missão 3: Alterações 	Processo postulação manual UPG Interact Airport	00:10;00	Processo postulação manual UPG Interact Airport	- Instrutor explica as considerações para solicitação de UPG por trechos e apresenta o passo a passo através do A360 e Sabre com base no fluxo				Fluxo	Sin enlace
Missão 3: Alterações 	Cancelamento Manual de Postulação de UPG de Cortesia	0:10:00	Cancelamento Manual de Postulação de UPG de Cortesia	- O Instrutor apresenta o fluxo e explica o processo de inscrição manual do UPG Interact Airport e o fluxo que se aplica ao serviço HVC.				Fluxo	Sin enlace
Missão 3: Alterações 	Opções de UPG	0:05:00	Opções de UPG	- O Instrutor apresenta o fluxo e explica o processo de cancelamento manual do UPG através do Interact Airport				Fluxo	Sin enlace
Missão 3: Alterações 	Opções de UPG	0:05:00	Opções de UPG	- Instrutor apresenta os outros tipos de upgrade que um passageiro pode solicitar. Reforçando as considerações.				PIC	Sin enlace
Missão 3: Alterações 	Opções de UPG	0:05:00	Opções de UPG	Reembolso involuntário do EMD Seatboost				Fluxo	Sin enlace
Missão 3: Alterações 	Opções de UPG	0:05:00	Opções de UPG	Devolução de EMD (Leilão/Instantâneo)  por Downgrade de cabine				Fluxo	Sin enlace
Missão 3: Alterações 	Postulacão UPG	0:05:00	Postulacão UPG	Anulação de uma Aposta (Plusgrade)				Fluxo	Sin enlace
Missão 3: Alterações 	Postulacão UPG	0:05:00	Postulacão UPG	-Instrutor mostra a partir do PIC a plataforma para visualizar as seções de cortesia que um membro possui.				PIC	Sin enlace
Missão 3: Alterações 	"Rotas Cósmicas de Desenvolvimento
Processo de inscrição manual do Interact Airport"	0:05:00	"Rotas Cósmicas de Desenvolvimento
Processo de inscrição manual do Interact Airport"	-Instrutor mostra a partir do PIC a plataforma para visualizar as seções de cortesia que um membro possui.				Plataforma	Sin enlace
Missão 3: Alterações 	Opções de Upgrade (reembolso involuntário - Seatboost e Downgrade de cabine)	0:15:00	Opções de Upgrade (reembolso involuntário - Seatboost e Downgrade de cabine)	"Resolva o seguinte caso em pares:
Caso: Ao solicitar um manual cortesia UPG, siga o passo a passo e verifique se ele atende às características para o processo UPG. 
De acordo com o fluxo, encontre a solução para o passageiro e depois apresente a solução com a ajuda do Instrutor."				PPT	Sin enlace
Missão 3: Alterações 	Opções de Upgrade (reembolso involuntário - Seatboost e Downgrade de cabine)	0:05:00	Opções de Upgrade (reembolso involuntário - Seatboost e Downgrade de cabine)	Instrutor faz um breve resumo sobre opções de upgrade (Leilão/Instantâneo). E reforça sobre os passageiros con Upg confirmado através do Seatboost que não utilizam por cancelamento ou remarcação de voo.				PIC	Sin enlace
Missão 3: Alterações 	Correção de nome em reservas con UPG confirmado	0:10:00	Correção de nome em reservas com UPG confirmado	Instrutor faz um breve resumo sobre opções de upgrade (Leilão/Instantâneo). E reforça sobre os passageiros com Upg confirmado através do Seatboost que não utilizam por cancelamento ou remarcação de voo.				Fluxo	Sin enlace
Missão 3: Alterações 	Antecipação e postergação Alteração de voo por Antecipação/Postergação a sócios Elite isentos de cobrança	0:10:00	Antecipação e postergação Alteração de voo por Antecipação/Postergação a sócios Elite isentos de cobrança	- Instutor explica o procedimento para alteração de nome nos casos em que o UPG está confirmado 				PIC	Sin enlace
Missão 3: Alterações 	Emissão/ Reemissão EXST/CBBG	0:15:00	Emissão/ Reemissão EXST/CBBG	- Instrutor apresenta  Antecipação/Postergação de Voo Confirmado (Sabre / E-Business) para a sócios Elite isentos de cobrança				Fluxo 	Sin enlace
Missão 3: Alterações 	Latam Wallet -Países e contas bancárias para retirada de dinheiro	00:20:00	Latam Wallet -Países e contas bancárias para retirada de dinheiro	- Instutor explica o procedimento ao assento adicional e o fluxo que se aplica ao atendimento HVC 				"PIC 
Fluxo HVC"	"https://pic-latam.zendesk.com/hc/pt-br/articles/360052932933-Assento-Adicional-EXST-CBBG-

https://lucid.app/documents/embedded/ef69cbb4-c92c-4488-a924-00f291811644?invitationId=inv_d09465bf-3dc2-41f3-aba3-65841a686198#"
Missão 4: Compensações 	Latam Wallet -Países e contas bancárias para retirada de dinheiro	0:05:00	Latam Wallet -Países e contas bancárias para retirada de dinheiro	- Instutor explica o procedimento ao assento adicional e o fluxo que se aplica ao atendimento HVC 				PIC	Sin enlace
Missão 4: Compensações 	Solução de problemas para troca de TV; Consulta de pagamento: recibo de pagamento do Travel Voucher	0:05:00	Solução de problemas para troca de TV; Consulta de pagamento: recibo de pagamento do Travel Voucher	- Instutor explica o procedimento ao assento adicional e o fluxo que se aplica ao atendimento HVC 				Fluxo	Sin enlace
Missão 4: Compensações 	Transferência Bancária	0:15:00	Transferência Bancária	- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV				Fluxo	Sin enlace
Missão 4: Compensações 	Solução para problemas ao resgatar um TV: Envio do número do Travel Voucher	0:10:00	Solução para problemas ao resgatar um TV: Envio do número do Travel Voucher	- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV				Fluxo	Sin enlace
Missão 4: Compensações 	Troca de TV em transferência de dinheiro: Correção de dados de transferência	0:10:00	Troca de TV em transferência de dinheiro: Correção de dados de transferência	- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV				Fluxo	Sin enlace
Missão 4: Compensações 	Solução para problemas ao resgatar um TV: Desconhecimento de  resgate do Travel Voucher	0:10:00	Solução para problemas ao resgatar um TV: Desconhecimento de  resgate do Travel Voucher	- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV				Fluxo	Sin enlace
Missão 4: Compensações 	Generalidades TV:   Reverter Travel Voucher (mudança de Status)	0:10:00	Generalidades TV:   Reverter Travel Voucher (mudança de Status)	- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV				Fluxo	Sin enlace
Missão 4: Compensações 	Solução para problemas de troca de TV: solicitação de correção de TV para devolução	0:10:00	Solução para problemas de troca de TV: solicitação de correção de TV para devolução	- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV				Fluxo	Sin enlace
Missão 4: Compensações 	"
Generalidades TV: Solicitação de criação de Travel Voucher (compensação de aeroporto ) "	0:10:00	"
Generalidades TV: Solicitação de criação de Travel Voucher (compensação de aeroporto ) "	- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta los fluxos HVC + DT DEV				Fluxo	Sin enlace
Missão 4: Compensações 	Troca de TV em transferência de dinheiro: Consulta de transferência negada	0:10:00	Troca de TV em transferência de dinheiro: Consulta de transferência negada	- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV				Fluxo	Sin enlace
Missão 4: Compensações 	Solução para problemas no resgate de TV: Consulta sobre pagamento de Travel Voucher	0:10:00	Solução para problemas no resgate de TV: Consulta sobre pagamento de Travel Voucher	- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV				Fluxo	Sin enlace
Missão 4: Compensações 	Atividade Quiz nave espacial  " Travel Voucher"  	0:10:00	Atividade Quiz nave espacial  " Travel Voucher"  	- O instrutor entra no capítulo Compensações no PIC, analisa e apresenta os fluxos HVC + DT DEV				Fluxo	Sin enlace
Missão 4: Compensações 	Emissão, reemissão e devolução de Staff Travel 	0:25:00	Emissão, reemissão e devolução de Staff Travel 	- O instrutor apresenta o QUIZ nave espacial  com perguntas relacionadas ao TV 				Genially 	Sin enlace
Missão 5: Staff Travel	 Benefícios FFP para líderes e espirito de serviços	00:30:00	 Benefícios FFP para líderes e espirito de serviços	- O instutor revisa o procedimento de Emissão, reemissão e devolução de Staff Travel de acordo com o PIC e reforça os fluxos 				PIC	Sin enlace
Missão 5: Staff Travel	Beneficios para Executivos LATAM Black e B. Sig	00:30:00	Beneficios para Executivos LATAM Black e B. Sig	- O instrutor mostra no PIC os benefícios do FFP para líderes de serviço e passageiros Black, BL Signature e executivos LATAM.				PIC	Sin enlace
Missão 5: Staff Travel	  Exceções comerciais para Tkt Staff Travel com desconto EM	00:30:00	  Exceções comerciais para Tkt Staff Travel com desconto EM	- O instrutor mostra no PIC os benefícios do FFP para líderes de serviço e passageiros Black, BL Signature e executivos LATAM.				PIC	Sin enlace
Missão 5: Staff Travel	Exercício 	0:30:00	Exercício 	"-
O instrutor mostra o fluxo de exceções comerciais para viagens de TKT Staff Travel de acordo com o tipo de desconto."				Fluxo	Sin enlace
Missão 5: Staff Travel	Reembolso de EMD 	0:45:00	Reembolso de EMD 	Exercícios para solicitação de postulação manual no Interact Airport para viagens de  Staff Travel.				"PPT
Sabre Cert"	Sin enlace
Missão 6: Devoluções 	Devolução EMD cobrado por erro de passageiro preferente	0:20:00	Devolução EMD cobrado por erro de passageiro preferente	-O instrutor contextualiza o procedimento e apresenta o fluxo HVC + DT DEV de acordo com o PIC				Fluxo	Sin enlace
Missão 6: Devoluções 	Devoluções Staff Travel 	0:20:00	Devoluções Staff Travel 	-O instrutor contextualiza o procedimento e apresenta o fluxo HVC + DT DEV de acordo com o PIC				Fluxo 	Sin enlace
Missão 6: Devoluções 	Anulação de cobrança 	0:30:00	Anulação de cobrança 	-O instrutor contextualiza o procedimento e apresenta o fluxo HVC + DT DEV de acordo com o PIC				Fluxo	Sin enlace
Missão 6: Devoluções 	Cash In falhou	0:30:00	Cash In falhou	-O instrutor contextualiza o procedimento e apresenta o fluxo HVC + DT DEV de acordo com o PIC				Fluxo	Sin enlace
Missão 6: Devoluções 	Cobrança de Valores Incorretos	0:25:00	Cobrança de Valores Incorretos	-O instrutor contextualiza o procedimento e apresenta o fluxo HVC + DT DEV de acordo com o PIC				PIC	Sin enlace
Missão 6: Devoluções 	Comprovantes de pagamentos em moedas diferente de BRL	0:25:00	Comprovantes de pagamentos em moedas diferente de BRL	-O instrutor contextualiza o procedimento e apresenta o fluxo HVC + DT DEV de acordo com o PIC				Fluxo	Sin enlace
Missão 6: Devoluções 	Exercícios Mapa do Universo de devolução 	0:20:00	Exercícios Mapa do Universo de devolução 	-O instrutor contextualiza o procedimento e apresenta o fluxo HVC + DT DEV de acordo con o PIC				PIC	Sin enlace
Missão 6: Devoluções 	Cobrança em duplicidade 	0:25:00	Cobrança em duplicidade 	- Instrutor segue a linha do tempo do mapa do universo para chegar a solução para o cliente 				Genyally 	Sin enlace
Missão 6: Devoluções 	Consulta por reembolso Negado / Recusado	0:30:00	Consulta por reembolso Negado / Recusado	-O instrutor contextualiza o procedimento e apresenta o fluxo de acordo con o PIC ( fluxos de empoderamente HVC + DT DEV) 				"Fluxo 
"	https://lucid.app/documents/embedded/61a6506e-fa95-4c82-82ca-9511954be967?invitationId=inv_3ea3c67a-c40d-4eef-8656-2ed8cfa1efee#
Missão 6: Devoluções 	Consulta por reembolso fora do prazo/pagamento não creditado	0:30:00	Consulta por reembolso fora do prazo/pagamento não creditado	-O instrutor contextualiza o procedimento e apresenta o fluxo de acordo con o PIC ( fluxos de empoderamente HVC + DT DEV) 				Fluxo	Sin enlace
Missão 6: Devoluções 	Consulta de reembolso pago com discordância de valor	0:30:00	Consulta de reembolso pago con discordância de valor	-O instrutor contextualiza o procedimento e apresenta o flujo de acuerdo com o PIC ( fluxos de empoderamente HVC + DT DEV) 				Fluxo	Sin enlace
Missão 6: Devoluções 	" Passageiros com conta em outros países
Mercados sem cash out"""	0:30:00	" Passageiros com conta em outros países
Mercados sem cash out"""	-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo com o PIC ( fluxos de empoderamente HVC + DT DEV) 				Fluxo	Sin enlace
Missão 6: Devoluções 	Exercício Operação Via Láctea	0:45:00	Exercício Operação Via Láctea	-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo com o PIC ( fluxos de empoderamente HVC + DT DEV) 				Fluxo	Sin enlace
Missão 6: Devoluções 	Consulta por reembolso pago con TV 	0:55:00	Consulta por reembolso pago con TV 	-O instrutor mostra no Zendesk e analisa juntos com os agentes casos em que o passageiro solicita reembolso 				PPT	Sin enlace
Missão 6: Devoluções 	Criação TV Saldo a Favor - Crédito TV a LATAM wallet	0:25:00	Criação TV Saldo a Favor - Crédito TV a LATAM wallet	-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo com o PIC ( fluxos de empoderamente HVC + DT DEV) 				Fluxo	Sin enlace
Missão 6: Devoluções 	Reembolso de pontos - Taxas foram pagas	0:25:00	Reembolso de pontos - Taxas foram pagas	-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo com o PIC ( fluxos de empoderamente HVC + DT DEV) 				Fluxo	Sin enlace
Missão 6: Devoluções 	"Estação Espacial do Saber : Ligação/Case
Consulta de reembolso negado  "	0:30:00	"Estação Espacial do Saber : Ligação/Case
Consulta de reembolso negado  "	-O instrutor contextualiza o procedimiento e apresenta o fluxo de acordo com o PIC ( fluxos de empoderamente HVC + DT DEV) 				Fluxo	Sin enlace
Missão 6: Devoluções 	"Reclamações de  Casos LAE
-Casos sensíveis "	0:40:00	"Reclamações de  Casos LAE
-Casos sensíveis "	- O instrutor mostra uma chamada de solicitação de reembolso negado   ( cliente Black Sig. ) e gera uma discussão com a participação e comentários dos alunos.				PPT	Sin enlace
Missão 7: Reclamações	Reclamações por cobranças	0:30:00	Reclamações por cobranças	"O instrutor reforça o conteúdo do processo “Casos Sensíveis”
Como trabalhar esses casos con casos sensíveis."				PIC	Sin enlace
Missão 7: Reclamações	Solicitação de chamada FALE ( revisão) 	0:20:00	Solicitação de chamada FALE ( revisão) 	- Instrutor  revisa flujo sobre anulação de cobrança				Fluxo	Sin enlace
Missão 7: Reclamações	Gestão de Reclamações SAB	0:30:00	Gestão de Reclamações SAB	- O instrutor revisa as solicitações de ligações dos clientes no Brasil em caso de possíveis quebra de serviço , de acordo con o fluxo no PIC 				Fluxo 	Sin enlace
Missão 7: Reclamações	"LIVRO DE 
RECLAMAÇÕES "	0:15:00	"LIVRO DE 
RECLAMAÇÕES "	- Instrutor explica a compensação para assentos abaixo do padrão na cabine Economy				PIC	Sin enlace
Missão 7: Reclamações	Gastos incorridos	0:20:00	Gastos incorridos	"- Instrutor explica qual a defiição e como los gastos BR chegam para as bandeijas HVC de acordo com o tipo de cliente.
- Instrutor mostra os tópicos de como se deve gerenciar essas reclamações e prazos para tratativa."				PIC	Sin enlace
Missão 7: Reclamações	Exceções cliente HVC	0:30:00	Exceções cliente HVC	- O instrutor recapitula o fluxo a ser seguido para o reembolso de despesas básicas.				PIC	Sin enlace
Missão 7: Reclamações	Exceções cliente HVC	0:30:00	Exceções cliente HVC	- Instrutor explica a Cortesia HVC				PIC	Sin enlace
Missão 7: Reclamações	Generalidades do Serviço		Generalidades do Serviço	-Instrutor apresenta matriz que orienta os critérios e procedimientos que devem ser seguidos, garantindo padronização e alinhamento con as diretrizes internas.				Matriz	Sin enlace
Missão 8: Bagagem	Gestão de reclamações de bagagem no aeroporto	0:20:00	Gestão de reclamações de bagagem no aeroporto	- Instrutor mostra no PPT o comprometimento fundamental e as áreas envolvidas no processo.                                                                                                                                                                    - Instrutor apresenta um contexto do fluxo dos canais de atendimento de bagagem, tais como URA / WhatsApp / Site / Aeroporto.				PPT	Sin enlace
Missão 8: Bagagem	Gestão de reclamações no Contact Center	0:30:00	Gestão de reclamações no Contact Center	- Instrutor mostra como é realizado o gerenciamento dos processos iniciais no aeroporto 				PPT	Sin enlace
Missão 8: Bagagem	Reclamações legais 	0:30:00	Reclamações legais 	- Instrutor mostra conceito no PPT o fluxo de recebimento de reclamações pelo Contact Center.                                                                                                                                                                   - Instrutor mostra brevemente como Cliente pode nos contatar (Site, Qr Code, Whats).				PPT	Sin enlace
Missão 8: Bagagem	Generalidades 	0:15:00	Generalidades 	"
- Instrutor mostra os tópicos de como se deve gerenciar essas reclamações e prazos para tratativa ( no Caso do BR solicitação de chamada FALE - exclusivo BR)"				PIC	Sin enlace
Missão 8: Bagagem	Processo para Passageiros reclamações frequentes de bagagem	0:10:00	Processo para Passageiros reclamações frequentes de bagagem	- Instrutor mostra Generalidades Reclamações Bagagem no PIC 				PIC	Sin enlace
Missão 8: Bagagem	Manual de Bagagem no Portal 	0:05:00	Manual de Bagagem no Portal 	"- Instrutor mostra do PIC o processo para passageiros com muitas reclamações de bagagem.
- Instrutor mostra o processo que deve-se fazer ao identificar um passageiro que apresenta muitas reclamações (suspeita de fraude)."					https://pic-latam.zendesk.com/hc/pt-br/articles/360053436714-Generalidades-Reclama%C3%A7%C3%B5es-de-Bagagem
Missão 8: Bagagem	"Atividade 
""Briefing de Missão""
Reclamações "	00:20:00	"Atividade 
""Briefing de Missão""
Reclamações "	"- Instrutor apresenta brevemente o Portal de Bagagem que vai ajudar em diversas situações.
Rota/caminho: Portal do Aeroporto/Serviço de Bagagens"				Portal	Sin enlace
Missão 8: Bagagem	Zendesk	0:40:00	Zendesk	"- Instrutor menciona que a atividade é individual e tem como finalidade fixar o conteúdo aprendido 
- Instrutor envia link EducaPlay e explica tipo e tempo de (acordo com cronograma) para praticarem
Vale ressaltar que é possível jogar mais de uma vez, caso terminem antes do prazo "				Educaplay	Sin enlace
Missão 9: Ferramentas 	Único Sign - Assinatura Digital 	1:30:00	Único Sign - Assinatura Digital 	"- Instrutor destaca todos os pontos que não podem deixar de ser seguidos nas tratativas de bagagens na ferramenta Zendesk.                                                                                                                                                                  -Instrutor mostra a criação de um caso, envio aos corresponsáveis, criação de ticket filho, botão play, devolução de casos não gerenciados e funcionamento da ferramenta.
"				Zendesk Training	Sin enlace
Missão 9: Ferramentas 	World Tracer Desktop	0:30:00	World Tracer Desktop	- Instrutor apresenta la ferramenta explicando que é utilizada exclusivamente para envio de acordos , de acordos com o fluxo, que serão assinados eletronicamente para respaldos jurídicos 				PPT	Sin enlace
Missão 10: Bagagem 	Procurar PIR através da World Tracer (WTD) 	1:30:00	Procurar PIR através da World Tracer (WTD) 	"- Instrutor destaca todos os pontos que não podem deixar de ser seguidos nas tratativas de bagagens na ferramenta WTR.                                                                                                                 
  - Instrutor mostra como fazer o login no sistema WT
- Instrutor entrega as assinaturas aos executivos para que eles acessem o sistema.
(as assinaturas devem ser solicitadas com antecedência para que fiquem prontas no primeiro dia de treinamento)"				"WTD
Training"	Sin enlace
Missão 10: Bagagem 	"""Atividade """"Guerra nas Estrelas""
Exercício de busca de PIR em WTM"	00:40:00	"""Atividade """"Guerra nas Estrelas""
Exercício de busca de PIR em WTM"	"- Instrutor mostra no PIC os comandos para encontrar um PIR no WTD e verificar as siglas mais importantes e seus significados 
"				PIC	Sin enlace
Missão 10: Bagagem 	Consulta de processos inativos - PDI	0:45:00	Consulta de processos inativos - PDI	- Instrutor pede aos alunos que realizarem buscas de PIRs, considerando os diferentes métodos de pesquisa, as PIR estão previamente criadas no sistema 				"WTD
Training"	Sin enlace
Missão 10: Bagagem 	Capacitação Air Tag	0:25:00	Capacitação Air Tag	- Instrutor mostra no PIC o comando PDI para consultar os processos que não estão ativos no sistema.				PIC	Sin enlace
Missão 10: Bagagem 	"""Atividade
 """"Pesquise e Responda""""
Qual o tipo de PIR ""
"	0:40:00	"""Atividade
 """"Pesquise e Responda""""
Qual o tipo de PIR ""
"	- Instrutor mostra no PIC o material para capacitação do Air Tag, que consiste em passageiros que utilizam o aplicativo da “Apple AirTag”, para auxiliar na localização de bagagens extraviadas ou atrasadas. 				PIC	Sin enlace
Missão 10: Bagagem 	Sistema de consulta BRS WEB	01:20:00	Sistema de consulta BRS WEB	"- Instrutor direciona os alunos para página de WTD no PIC e projeta as perguntas, realizando a batalha entre grupos ( os grupos devem ser sorteados através do site )
1. O que significa PIR?
2. O que é PIR AHL?
3. O que é Found Property?
4. Qual o nome do relatório sobre bagagem danificada ou com subtração de artigos?
5. O que é Delayed Bag?
6. O que é  Damage Bag?
7. O que significa Bag tag number, e como posso adquirir essa informação ?
8. Na PIR onde ficam as informações da bagagem con cor,elementos descritivos,marcas e etc...?
9. O que significa "" Reason for Loss: 91- Merma e Dano?
- Instrutor corrige e complementa sempre que necessário."				PPT	Sin enlace
Missão 11: Ferramentas 	Bagagem Danificada e/ou com Subtração de Objeto Proveniente de Extravio	0:40:00	Bagagem Danificada e/ou com Subtração de Objeto Proveniente de Extravio	-Instrutor mostra o sistema BRS WEB para validar bagagens etiquetadas con liberação limitada e se foram identificadas na estação de origem				PIC	Sin enlace
Missão 11: Ferramentas 	Criação de PIR ( DPR)	01:20:00	Criação de PIR ( DPR)	-Instrutor mostra do PIC as considerações Bagagem Danificada e/ou com Subtração de Objeto Proveniente de Extravio				PIC	Sin enlace
Missão 11: Ferramentas 	Criação de PIR ( DPR)	0:15:00	Criação de PIR ( DPR)	"""Instrutor mostra no WTD Training, o passo a passo para criar um PIR de dano e/ou subtração de objetosproviniente extravio  com todos os seus elementos.
 - Fazer pergunta aos alunos para que se lembrem dos conceitos -O que é DPR?
- Pedi aos alunos que façam a atividade de abertura de PIR DPR no WTD Training utilizando as orientações do PPT e o fluxo do PIC."				"WTD
Training"	Sin enlace
Missão 11: Ferramentas 	Criação de PIR ( DPR)	0:15:00	Criação de PIR ( DPR)	"""Instrutor mostra no WTD Training, o passo a passo para criar um PIR de dano e/ou subtração de objetosproviniente extravio  com todos os seus elementos.
 - Fazer pergunta aos alunos para que se lembrem dos conceitos -O que é DPR?
- Pedi aos alunos que façam a atividade de abertura de PIR DPR no WTD Training utilizando as orientações do PPT e o fluxo do PIC."				"WTD
Training"	Sin enlace
Missão 11: Ferramentas 	Criação de PIR ( DPR)	0:15:00	Criação de PIR ( DPR)	"""Instrutor mostra no WTD Training, o passo a passo para criar um PIR de dano e/ou subtração de objetosproviniente extravio  com todos os seus elementos.
 - Fazer pergunta aos alunos para que se lembrem dos conceitos -O que é DPR?
- Pedi aos alunos que façam a atividade de abertura de PIR DPR no WTD Training utilizando as orientações do PPT e o fluxo do PIC."				"WTD
Training"	Sin enlace
Missão 11: Ferramentas 	Criação de PIR ( DPR)	0:15:00	Criação de PIR ( DPR)	"""Instrutor mostra no WTD Training, o passo a passo para criar um PIR de dano e/ou subtração de objetosproviniente extravio  com todos os seus elementos.
 - Fazer pergunta aos alunos para que se lembrem dos conceitos -O que é DPR?
- Pedi aos alunos que façam a atividade de abertura de PIR DPR no WTD Training utilizando as orientações do PPT e o fluxo do PIC."				"WTD
Training"	Sin enlace
Missão 11: Ferramentas 	Criação de PIR ( DPR)	0:15:00	Criação de PIR ( DPR)	"""Instrutor mostra no WTD Training, o passo a passo para criar un PIR de dano e/ou subtração de objetosproviniente extravio  com todos os seus elementos.
 - Fazer pergunta aos alunos para que se lembrem dos conceitos -O que é DPR?
- Pedi aos alunos que façam a atividade de abertura de PIR DPR no WTD Training utilizando as orientações do PPT e o fluxo do PIC."				"WTD
Training"	Sin enlace
Missão 11: Ferramentas 	Criação de PIR ( DPR)	0:15:00	Criação de PIR ( DPR)	"""Instrutor mostra no WTD Training, o passo a passo para criar um PIR de dano e/ou subtração de objetosproviniente extravio  com todos os seus elementos.
 - Fazer pergunta aos alunos para que se lembrem dos conceitos -O que é DPR?
- Pedi aos alunos que façam a atividade de abertura de PIR DPR no WTD Training utilizando as orientações do PPT e o fluxo do PIC."				"WTD
Training"	Sin enlace
Missão 11: Ferramentas 	"Atividade : Conquista de Constelações
Aula invertida"	0:15:00	"Atividade : Conquista de Constelações
Aula invertida"	"""Instrutor mostra no WTD Training, o passo a passo para criar um PIR de dano e/ou subtração de objetosproviniente extravio  com todos os seus elementos.
 - Fazer pergunta aos alunos para que se lembrem dos conceitos -O que é DPR?
- Pedi aos alunos que façam a atividade de abertura de PIR DPR no WTD Training utilizando as orientações do PPT e o fluxo do PIC."				"WTD
Training"	Sin enlace
Missão 11: Ferramentas 	Bagagem Danificada e Bagagem Violada 	1:50:00	Bagagem Danificada e Bagagem Violada 	"- Instrutor vai fazer um sorteio através do site e formará grupos, os grupos farão: 
1. Por favor, completem as seguintes tarefas: Leitura Obrigatória: Acessem  link  do PIC e leiam atentamente a seção intitulada ""Bagagem Danificada e/ou com Violação de Objeto Proveniente de Extravio
2. Após a leitura, prepare um breve resumo ou anote as respostas para estas perguntas (elas serão nosso ponto de partida na aula):

Qual é o primeiro passo absoluto que você deve tomar no WTD para iniciar um relatório de dano?

O artigo menciona diferentes tipos de relatórios (ex: 'Missing', 'Damage'). Por que é crucial selecionar o tipo correto desde o início?

Quais são os 5 campos de informação que você considera mais críticos para preencher corretamente, com base na leitura? (Ex: Nome do passageiro, número da etiqueta da bagagem, descrição do dano, etc.)

Qual a importância da seção ""Bag Tag Number"" (Número da Etiqueta da Bagagem) no processo?

Anote 1 (uma) dúvida o ponto que não ficou 100% claro para você após a leitura do guia."				PPT 	Sin enlace
Missão 11: Ferramentas 	Bagagem Danificada e Bagagem Violada 	00:25:00	Bagagem Danificada e Bagagem Violada 	Bagagem com Dano 				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem Danificada e Bagagem Violada 	00:25:00	Bagagem Danificada e Bagagem Violada 	- Instrutor apresenta tipos de dano e a Política de compensação para cada tipo de dano em operação LATAM                                                                                                                                                                                         - Instrutor 				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem Danificada e Bagagem Violada 	1:00:00	Bagagem Danificada e Bagagem Violada 	Criação de PIR ( DPR ) apenas com dano - utilizar as orientações do PPT 				"WTD
Training"	Sin enlace
Missão 11: Ferramentas 	Bagagem Violada 				0:25:00	Bagagem Violada 	Bagagem Violada 				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem Violada 				0:25:00	Bagagem Violada 	Política de compensação  por bagagem violada e fluxo 				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem Violada 				1:00:00	Bagagem Violada 	Exercício de criação de casos no sistema ( Bagagem com violação - utilizar as orientações do PPT ) 				"WTD
Training"	Sin enlace
Missão 11: Ferramentas 	Bagagem danificada e violada 	0:30:00	Bagagem danificada e violada 	Bagagem danificada e violada 				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem danificada e violada 	0:30:00	Bagagem danificada e violada 	Política de comepnsação por Bagagem Danificada ou Violada e fluxo				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem Extraviada ou Atrasada	1:00:00	Bagagem Extraviada ou Atrasada	Exercício  de criação de casos no sistema ( orientações no PPT ) 				"WTD
Training"	Sin enlace
Missão 11: Ferramentas 	Bagagem Extraviada ou Atrasada	0:16:00	Bagagem Extraviada ou Atrasada	- Registro de Reclamação PIR ( AHL ) 				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem Extraviada ou Atrasada	0:16:00	Bagagem Extraviada ou Atrasada	Buscas das bagagem				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem Extraviada ou Atrasada	0:16:00	Bagagem Extraviada ou Atrasada	Compensação por Bagagem Extraviada/ Atrasada 				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem Extraviada ou Atrasada	0:16:00	Bagagem Extraviada ou Atrasada	Lei DOT para Bagagens				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem Extraviada ou Atrasada	0:16:00	Bagagem Extraviada ou Atrasada	Air Tag 				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem Extraviada ou Atrasada	1:00:00	Bagagem Extraviada ou Atrasada	"""Exercícios prático - simulação de abertura PIR AHL 
-Instrutor mostra chamada “Bagagem Extraviada”, em que o passageiro solicita ajuda com sua bagagem que não chegou no voo que fez com a LATAM."				"WTD
Training"	Sin enlace
Missão 11: Ferramentas 	Bagagem Extraviada ou Atrasada	00:20:00	Bagagem Extraviada ou Atrasada	Despesas de primeira necessidade / tripulantes / pax desembarcando no EC				PIC	Sin enlace
Missão 11: Ferramentas 	Bagagem Extraviada ou Atrasada	0:50:00	Bagagem Extraviada ou Atrasada	Proativo bagagem extraviada ( reforço inteligente  com a Gabi ) 				PIC e reforço inteligente	NA
Missão 11: Ferramentas 	Bagagem Extraviada ou Atrasada	00:20:00	Bagagem Extraviada ou Atrasada	Habilitação do FlyBag e formulário de assistência 	Comunicado	Comunicado 2	https://drive.google.com/file/d/136fmT2sBOCXNyPDe85Qupggjf9GiL_KZ/view		
Missão 11: Ferramentas 	Bagagem Extraviada ou Atrasada	00:20:00	Bagagem Extraviada ou Atrasada	"Nova casuística do Agente 360 para reembolso de transporte para
cliente que busca a sua bagagem extraviada no aeroporto"	Comunicado		https://drive.google.com/file/d/1-r6z9uvOCUu9JuU5OHtbkPHEy9wAZNLr/view		
Missão 11: Ferramentas 	Bagagem Switch LATAM	0:30:00	Bagagem Switch LATAM	Negociação de bagagem extraviada ou atrasada	Fluxo 		https://lucid.app/documents/embeddedchart/be96d3d5-a352-4949-994d-384649bb1c6f#		
Missão 11: Ferramentas 	Found Property LATAM	00:15:00	Found Property LATAM	-Instrutor mostra o fluxo do processo de Bagagem Switch LATAM	Fluxo 		https://lucid.app/documents/embedded/bdc32332-c6df-4f7a-a5b4-ae37aa5a03ad?invitationId=inv_b4da9786-a76e-45e3-9412-2d3f37f72553#		
Missão 11: Ferramentas 	Found Property LATAM	00:15:00		Considerações				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360055223813-Found-Property-LATAM-#h_01EK0TGHAKM25X20KR1MBFJGD2
Missão 11: Ferramentas 	Found Property LATAM	00:15:00	Found Property LATAM	- Compensação Objetos esquecidos a bordo				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360055223813-Found-Property-LATAM-#h_01EK0TGMSD03ZB2W08XJBERKSY
Missão 11: Ferramentas 	Found Property LATAM	0:20:00	Found Property LATAM	Compensação  por objetos esquecidos à bordo para passageiros Black e Black Signature	Fluxo		https://lucid.app/documents/embedded/e04f1426-3b07-4851-8e53-376de61de23e?invitationId=inv_3ea1d0f4-3251-42cf-a9aa-c0739644595a#		
Missão 11: Ferramentas 	Reclamações de Bagagem em Conexão com Outras Companhias Aéreas	0:10:00	Reclamações de Bagagem em Conexão com Outras Companhias Aéreas	"
-Instrutor mostra chamada “Found Property LATAM”, na qual o passageiro solicita ajuda com um objeto deixado a bordo do avião."	PPT		https://docs.google.com/presentation/d/1oxtQlD6DgF3t4Mqeqe-sOURf_VEU9wcFo6A4DwgHlU4/edit?slide=id.g2030860ac33_0_0#slide=id.g2030860ac33_0_0		
Missão 11: Ferramentas 	Bagagem Remanescente LATAM	0:10:00	Bagagem Remanescente LATAM	Reclamações de Bagagem em conexão (Outras Outras Companhias Aéreas)				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360053437714-Reclama%C3%A7%C3%B5es-de-Bagagem-em-Conex%C3%A3o-com-Outras-Companhias-A%C3%A9reas-LATAM
Missão 11: Ferramentas 	Bagagem Remanescente LATAM	0:10:00	Bagagem Remanescente LATAM	Considerações 				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360055224413-Bagagem-Remanescente-LATAM
Missão 11: Ferramentas 	Prazo de Resolução de Acordo Com o Tipo de Reclamação		Prazo de Resolução de Acordo Com o Tipo de Reclamação	Bagagem Remanescente LATAM	Fluxo		https://lucid.app/documents/embedded/dee2e177-431e-4947-997b-efdd2d3d6fb2?invitationId=inv_d3371bf3-8d0a-4504-9f32-e90ee46e5d91#		
Missão 11: Ferramentas 	Prazo de Resolução de Acordo Com o Tipo de Reclamação	0:07:00	Prazo de Resolução de Acordo Com o Tipo de Reclamação	Prazo de Resolução de Acordo Com o Tipo de Reclamação				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360055224513-Prazo-de-Resolu%C3%A7%C3%A3o-de-Acordo-Com-o-Tipo-de-Reclama%C3%A7%C3%B5es
Missão 11: Ferramentas 	Prazo de Resolução de Acordo Com o Tipo de Reclamação	0:07:00	Prazo de Resolução de Acordo Com o Tipo de Reclamação	Classificação de casos críticos LATAM				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360055224513-Prazo-de-Resolu%C3%A7%C3%A3o-de-Acordo-Com-o-Tipo-de-Reclama%C3%A7%C3%B5es
Missão 11: Ferramentas 	Reclamações por bagagem de mão despachada no porão ocorrendo violação, dano ou extravio	0:07:00	Reclamações por bagagem de mão despachada no porão ocorrendo violação, dano ou extravio	"Contatos do aeroporto
-Instrutor apresenta la lista de contatos de acordo com o aeroporto."				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/360055224513-Prazo-de-Resolu%C3%A7%C3%A3o-de-Acordo-Com-o-Tipo-de-Reclama%C3%A7%C3%B5es
Missão 11: Ferramentas 	Reclamações por bagagem de mão despachada no porão ocorrendo violação, dano ou extravio	0:10:00	Reclamações por bagagem de mão despachada no porão ocorrendo violação, dano o extravio	-Instrutor mostra no PIC as considerações para bagagem de mão despachada com violação e suas compensações				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/13999979686931-Reclama%C3%A7%C3%B5es-por-bagagem-de-m%C3%A3o-despachada-no-por%C3%A3o#:~:text=BAGAGEM%20DE%20M%C3%83O%20DESPACHADA%20COM%20VIOLA%C3%87%C3%83O
Missão 11: Ferramentas 	Reclamações por bagagem de mão despachada no porão ocorrendo violação, dano ou extravio	0:10:00	Reclamações por bagagem de mão despachada no porão ocorrendo violação, dano ou extravio	-Instrutor mostra no PIC o Fluxo de bagagem de mão despachada com dano ou extravio				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/13999979686931-Reclama%C3%A7%C3%B5es-por-bagagem-de-m%C3%A3o-despachada-no-por%C3%A3o#:~:text=BAGAGEM%20DE%20M%C3%83O%20DESPACHADA%20COM%20DANO%20OU%20EXTRAVIO%C2%A0
Missão 11: Ferramentas 	Reclamações por bagagem de mão despachada no porão ocorrendo violação, dano ou extravio	0:10:00	Reclamações por bagagem de mão despachada no porão ocorrendo violação, dano ou extravio		Fluxo		https://lucid.app/documents/embeddedchart/495a3aac-7788-4c2d-9d85-cf25b519eeb7#		
Missão 11: Ferramentas 	Redução de bagagem de mão despachada no porão	0:10:00	Redução de bagagem de mão despachada no porão	- Instrutor informa  como funciona a Declaração de itens de valor na bagagem despachada (Voos dentro e saindo do Brasil) e os tipos de compensações de passageiros com reclamações cujas bagagens de mão foram despachadas no porão (despacho voluntário)				PIC	https://pic-latam.zendesk.com/hc/pt-br/articles/38916416878867-10-04-25-RECLAMA%C3%87%C3%95ES-BAGAGEM-Declara%C3%A7%C3%A3o-de-itens-de-valor-na-bagagem-despachada-Voos-dentro-e-saindo-do-Brasil
"""

def parse_curriculum(text):
    lines = text.strip().split('\n')
    sections = []
    current_section = None

    for line in lines:
        parts = line.split('\t')
        if len(parts) < 5: continue

        mission_label = parts[0].strip()
        destino = parts[1].strip().strip('"').strip() if parts[1] else ''
        tiempo = parts[2].strip() if parts[2] else '0:00:00'
        tema = parts[3].strip().strip('"').strip() if parts[3] else ''
        desc = parts[4].strip().strip('"').strip() if parts[4] else ''
        herramientas_text = parts[5].strip() if parts[5] else ''
        link = parts[7].strip() if len(parts) > 7 else ''
        pic_label = parts[8].strip() if len(parts) > 8 else ''
        pic_link = parts[9].strip() if len(parts) > 9 else ''

        section_type = 'mision1'
        norm = mission_label.lower()
        if 'missão 1' in norm: section_type = 'mision1'
        elif 'missão 2' in norm: section_type = 'mision2'
        elif 'missão 3' in norm: section_type = 'mision3'
        elif 'missão 4' in norm: section_type = 'mision4'
        elif 'missão 5' in norm: section_type = 'mision5'
        elif 'missão 6' in norm: section_type = 'mision6'
        elif 'missão 7' in norm: section_type = 'mision7'
        elif 'missão 8' in norm: section_type = 'mision8'
        elif 'missão 9' in norm: section_type = 'mision9'
        elif 'missão 10' in norm: section_type = 'mision10'
        elif 'missão 11' in norm: section_type = 'mision11'
        elif 'introdução' in norm: section_type = 'intro'

        if not current_section or current_section['tipo'] != section_type:
            current_section = {
                'tipo': section_type,
                'label': mission_label.upper() or 'MISSÃO',
                'rows': []
            }
            sections.append(current_section)

        herramientas = []
        if herramientas_text and herramientas_text not in ['NA', 'Sin enlace']:
            herramientas.append({'tipo': herramientas_text, 'url': link if link else '#'})
        elif link and link not in ['NA', 'Sin enlace']:
            herramientas.append({'tipo': 'Link', 'url': link})

        ia_pic = []
        if pic_link and pic_link not in ['Sin enlace', 'NA']:
            ia_pic.append({'label': pic_label if pic_label else 'PIC', 'url': pic_link})

        current_section['rows'].append({
            'macroTema': destino if destino else tema,
            'tema': tema,
            'detalhe': desc,
            'tiempo': tiempo if tiempo else '0:00:00',
            'herramientas': herramientas,
            'iaPic': ia_pic,
            'consejo': ""
        })

    return sections

hvc_sections = parse_curriculum(raw_data)
hvc_data = {
    'label': "HVC",
    'color': "#ED1650",
    'secciones': hvc_sections,
    'materiais': [],
    'evalKon': [],
    'evalAec': [],
    'evalMsg': ""
}

# Find the start of HVC_DATA in data.ts and replace it
with open('src/lib/data.ts', 'r', encoding='utf-8') as f:
    content = f.read()

marker = 'export const HVC_DATA ='
if marker in content:
    start_idx = content.find(marker)
    # Just replace from marker to end of file
    new_content = content[:start_idx] + f"export const HVC_DATA = {json.dumps(hvc_data, indent=2, ensure_ascii=False)};\n"
    with open('src/lib/data.ts', 'w', encoding='utf-8') as f:
        f.write(new_content)
    print("Successfully updated HVC_DATA in data.ts with correct encoding.")
else:
    print("HVC_DATA not found in data.ts")
