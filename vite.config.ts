import fs from 'fs';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';

const configPersistencePlugin = () => ({
  name: 'config-persistence',
  configureServer(server: any) {
    server.middlewares.use((req: any, res: any, next: any) => {
      if (req.url === '/api/config' && req.method === 'GET') {
        const configPath = path.resolve(process.cwd(), 'src/lib/appConfig.json');
        if (fs.existsSync(configPath)) {
          const data = fs.readFileSync(configPath, 'utf8');
          res.writeHead(200, {
            'Content-Type': 'application/json; charset=utf-8',
            'Cache-Control': 'no-store'
          });
          res.end(data);
        } else {
          res.writeHead(404, { 'Content-Type': 'application/json' });
          res.end(JSON.stringify({ error: 'Config not found' }));
        }
      } else if (req.url === '/api/save-config' && req.method === 'POST') {
        let body = '';
        req.on('data', (chunk: any) => { body += chunk; });
        req.on('end', () => {
          try {
            const parsed = JSON.parse(body);
            const configPath = path.resolve(process.cwd(), 'src/lib/appConfig.json');
            fs.writeFileSync(configPath, JSON.stringify(parsed, null, 2), 'utf8');
            res.writeHead(200, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ success: true }));
          } catch (err: any) {
            res.writeHead(500, { 'Content-Type': 'application/json' });
            res.end(JSON.stringify({ error: err.message }));
          }
        });
      } else {
        next();
      }
    });
  }
});

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    plugins: [react(), tailwindcss(), configPersistencePlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      allowedHosts: ['yoda.sergihno.cl'],
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
