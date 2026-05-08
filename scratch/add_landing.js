
import fs from 'fs';

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

const path = 'src/lib/data.ts';
let content = fs.readFileSync(path, 'utf8');

const startIdx = content.indexOf('export const VENDAS_WS_12_DATA');
const sectionsStartIdx = content.indexOf('secciones: [', startIdx) + 'secciones: ['.length;

const newSection = `
    {
      tipo: 'landing',
      label: 'LANDING 1',
      rows: ${JSON.stringify(landingRows, null, 2)}
    },`;

const newContent = content.substring(0, sectionsStartIdx) + newSection + content.substring(sectionsStartIdx);

fs.writeFileSync(path, newContent);
console.log('Added LANDING section to VENDAS_WS_12_DATA.');
