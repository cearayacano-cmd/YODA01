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

export const BASE_PLANET_DATA = [
  {
    tipo: 'mision1',
    label: 'BASE',
    rows: []
  }
];

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
      label: 'IMERSÃO',
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
