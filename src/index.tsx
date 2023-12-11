import { serve } from '@hono/node-server';
import { Hono } from 'hono';
import { Container } from './components/Container';
import { serveStatic } from '@hono/node-server/serve-static';


const app = new Hono();

app.use('/static/*', serveStatic({ root: './' }));

app.get('/', (c) => {
  const message = 'Good Morning';
  return c.html(<Container message={message} />)
})

serve({
	fetch: app.fetch,
  port: 8787,
})
