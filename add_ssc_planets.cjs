const fs = require('fs');
const path = './src/lib/appConfig.json';

const config = JSON.parse(fs.readFileSync(path, 'utf8'));

const createPlanet = (id, label, color) => ({
  id,
  texture: "CRATERS",
  color,
  label,
  onboardingIdx: 0,
  secciones: []
});

const frontLinePlanets = [
  { id: 'ssc_fl_lua', label: 'LUA', color: '#1b0088' },
  { id: 'ssc_fl_hvc', label: 'HVC', color: '#2ec9ed' },
  { id: 'ssc_fl_equipajes', label: 'Equipajes', color: '#7da81a' },
  { id: 'ssc_fl_rrss', label: 'RRSS', color: '#7000ab' },
  { id: 'ssc_fl_dt_devoluciones', label: 'DT Devoluciones', color: '#2ec9ed' },
  { id: 'ssc_fl_dt_ffp', label: 'DT FFP', color: '#ff004b' },
  { id: 'ssc_fl_lua_bo', label: 'LUA BO', color: '#1b0088' },
  { id: 'ssc_fl_lae_pi', label: 'LAE PI', color: '#7000ab' },
  { id: 'ssc_fl_latam_travel', label: 'LATAM Travel', color: '#1b0088' },
  { id: 'ssc_fl_ventas', label: 'VENTAS', color: '#7000ab' }
];

const soportePlanets = [
  { id: 'ssc_sup_hvc', label: 'Soporte HVC', color: '#ffe017' },
  { id: 'ssc_sup_lua', label: 'Soporte LUA', color: '#7da81a' }
];

const fieldSupportPlanets = [
  { id: 'ssc_fs_fs', label: 'FS', color: '#7da81a' }
];

if (!config.ssc.exploracion) {
  config.ssc.exploracion = { frontLine: [], soporte: [], fieldSupport: [] };
}

config.ssc.exploracion.frontLine = frontLinePlanets.map(p => createPlanet(p.id, p.label, p.color));
config.ssc.exploracion.soporte = soportePlanets.map(p => createPlanet(p.id, p.label, p.color));
config.ssc.exploracion.fieldSupport = fieldSupportPlanets.map(p => createPlanet(p.id, p.label, p.color));

fs.writeFileSync(path, JSON.stringify(config, null, 2));
console.log('SSC Planets successfully added to appConfig.json');
