import path from 'path';
import fs from 'fs-extra';
import commander from 'commander';
import server from './server';

const resolve = (value, def) => path.resolve(value || def);

const program = commander
    .usage('<options>')
    .option('-s --static <path>', 'Directory to serve static files. [process.cwd()]', resolve, process.cwd())
    .option('-c --chunks <path>', 'Chunks json file. [webpack-chunks.json]', resolve, 'webpack-chunks.json')
    .option('-h --host [host]', 'Server host')
    .option('-p --port [port]', 'Server listening port', Number)
    .option('-r --ssr', 'Try server-side rendering')
    .parse(process.argv);

const { host, port, ssr, chunks, static: staticDir } = program;
server({
  host,
  port,
  ssr,
  staticDir,
  chunks: () => fs.readJsonSync(chunks),
});
