import { VercelRequest, VercelResponse } from '@vercel/node';
import { createServer } from 'http';
import { parse } from 'url';
import app from '../src/app';

const server = createServer((req, res) => {
  const parsedUrl = parse(req.url!, true);
  req.url = parsedUrl.path ?? '';
  app(req as any, res as any); // Cast to any because Express expects Node.js types
});

export default (req: VercelRequest, res: VercelResponse) => {
  server.emit('request', req, res);
};