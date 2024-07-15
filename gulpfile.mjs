// gulpfile.mjs

import { src, dest, series, parallel, watch } from 'gulp';
import * as sass from 'sass'; // Importe o compilador Dart Sass
import gulpSass from 'gulp-sass';
import autoprefixer from 'gulp-autoprefixer';
import cleanCSS from 'gulp-clean-css';
import concat from 'gulp-concat';
import babel from 'gulp-babel'
import uglify from 'gulp-uglify';
import browserSync from 'browser-sync';

// Configuração do compilador Sass para o gulp-sass
const sassCompiler = gulpSass(sass);

// Função para compilar Sass, adicionar prefixos, minificar e salvar
function compileSass() {
  return src('src/scss/*.scss')
    .pipe(sassCompiler({ outputStyle: 'compressed' }).on('error', sassCompiler.logError))
    .pipe(autoprefixer({
      overrideBrowserslist: ['last 2 versions'],
      cascade: false
    }))
    .pipe(cleanCSS())
    .pipe(concat('style.min.css')) // Nome do arquivo de saída
    .pipe(dest('dist/css'))
    .pipe(browserSync.stream());
}

// Função para concatenar e minificar JavaScript
function minifyJS() {
  return src('src/js/*.js')
    .pipe(babel({
      presets: ['@babel/preset-env']
    }))
    .pipe(concat('script.min.js'))
    .pipe(uglify())
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream());
}


// Função para carregar bibliotecas externas de CSS para pasta de distribuição
/* // Retirar o comentário multilinha para ativar essa função
function loadExternalCss() {
  return src([
      // caminho para bibliotecas externas de CSS (exemplo)
      //'node_modules/bootstrap/dist/css/bootstrap.min.css'
    ])
    .pipe(concat('libs.min.css'))
    .pipe(dest('dist/css'));
}
*/

// Função para carregar bibliotecas externas de JS para pasta de distribuição
/* // Retirar o comentário multilinha para ativar essa função
function loadExternalJs() {
  return src([
      // caminho para bibliotecas externas de JS (exemplo)
      //'node_modules/jquery/dist/jquery.min.js',
      //'node_modules/bootstrap/dist/js/bootstrap.bundle.min.js'
    ])
    .pipe(concat('libs.min.js'))
    .pipe(dest('dist/js'));
}
*/

// Função para copiar arquivos HTML de src para dist
function copyHTML() {
  return src('src/*.html')
    .pipe(dest('dist'))
    .pipe(browserSync.stream());
}

// Função para iniciar o servidor local com BrowserSync
function serve() {
  browserSync.init({
    server: {
      baseDir: './dist'
    }
  });

  // Assistir mudanças nos arquivos Sass, JS e HTML e recarregar o navegador
  watch('src/scss/**/*.scss', compileSass);
  watch('src/js/*.js', minifyJS);
  watch('src/*.html', copyHTML);
}

// Exporta tarefas individuais
export {
  compileSass,
  minifyJS,
  // loadExternalCss, // Retirar o comentário para ativar essa função
  // loadExternalJs, // Retirar o comentário para ativar essa função
  serve
};

// Tarefa padrão que inicia o servidor local e monitora alterações
export default series(
  parallel(compileSass, minifyJS /*, loadExternalCss, loadExternalJs */),
  copyHTML, // Adiciona a função copyHTML à tarefa padrão
  serve
);



