## HTML5 Study Group + Gulpjs - streaming build system

* [Link da apresentação HTML5 Study Group](http://slides.com/rafaelantoniolucio/gulpjs/#/)
* [Começando com Gulpjs](https://github.com/gulpjs/gulp/blob/master/docs/getting-started.md)
* [Documentação Gulpjs](https://github.com/gulpjs/gulp/blob/master/docs/API.md)
* [Lista de receitas](https://github.com/gulpjs/gulp/tree/master/docs/recipes)
* [Lista de artigos](https://github.com/gulpjs/gulp/blob/master/docs/README.md#articles)
* [Lista de pluguins](http://gulpjs.com/plugins/)

### Fácil de usar 
Ao preferir código ao invés de configurações, gulp mantém e faz complexas taréfas gerenciáveis.

### Eficiente
Usando o poder do node streams, gulp nos da compilações mais rápidas e não escreve arquivos intermediários em disco.

### Alta qualidade
Atravéz de um controle rigoroso dos seus plugins eles garantem que seus plugin sejam simples e trabalhem como esperado.

### Fácil de aprender
Usando as melhores práticas do node e mantendo uma API mínima seus build funcionará exatamente como esperado.

### Como comerçar?

Instalar o gulp globalmente.
```sh
$ npm install -g gulp
```
Instalar o gulp em nosso projeto como devDependencies.
```sh
$ npm install --save-dev gulp
```
Criar um arquivos chamado gulpfile.js na pasta raiz do projeto.
```js
var gulp = require('gulp');
gulp.task('default', function () {
  // aqui fica nossa default task
});
```
Finalmente rodar o gulp no terminal
```sh
$ gulp
```
### Pra onde eu vou agora?
O gulp dispõem de 4 métodos são eles:
##### gulp.src
```js
gulp.src(globs[,options]);
```
Emite os arquivos globs ou um array de globs encontrado e retorna um stream de arquivos Vinyl (lib node) que pode ser canalizado para plugins.
* Padrões glob são usados para especificar conjuntos de nomes de arquivos com caracteres curinga. Ex:"caminho/***/**.js"

```js
gulp.src('caminho/**/*.css')
  .pipe(minifycss({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('caminho/destino'));
```
##### gulp.dest
```js
gulp.dest(path[,options]);
```
Pode ser canalizado e ele escreverá os arquivos no "path" informado. Re-emite todos os dados passados ​​para ele assim você pode canalizar para várias pastas. As pastas que não existem serão criadas.
```js
gulp.src('caminho/caminho/*.css')
  .pipe(gulp.dest('caminho/caminho/styles'))
  .pipe(minifycss({
    compatibility: 'ie8'
  }))
  .pipe(gulp.dest('build/styles'));
```
##### gulp.task
```js
gulp.task(name[,deps], fn);
```
Define a task using [Orchestrator](https://github.com/robrich/orchestrator).
```js
gulp.task('algumnome', function() {
  // Do stuff
});
```
* [,deps] é um array de tarefas a serem executadas e concluídas antes de sua tarefa ser executada.

```js
gulp.task('algumnome', ['array', 'of', 'task', 'names'], function() {
  // Do stuff
});
```
##### gulp.watch
```js
gulp.watch(glob[, opts], tasks)
```
Escuta e faz alguma coisa quando os arquivos que forem alterados. Isto sempre retorna um EventEmitter que emite os eventos de alteração.
```js
var watcher = gulp.watch('js/**/*.js', ['uglify','reload']);

watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
```
```js
gulp.watch(glob[, opts, cb])
```
```js
gulp.watch('js/**/*.js', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
```
