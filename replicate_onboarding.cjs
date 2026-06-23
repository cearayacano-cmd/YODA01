const fs = require('fs');
const path = './src/lib/appConfig.json';
const config = JSON.parse(fs.readFileSync(path, 'utf8'));

if (!config.ssc.onboarding || config.ssc.onboarding.length === 0) {
  // Copiar naves de onboarding de BR a SSC
  config.ssc.onboarding = JSON.parse(JSON.stringify(config.br.onboarding || []));
  fs.writeFileSync(path, JSON.stringify(config, null, 2));
  console.log('Onboarding data replicated from BR to SSC successfully.');
} else {
  console.log('SSC already has onboarding data. No action taken.');
}
