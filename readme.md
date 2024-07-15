# Projeto base com Gulp

Base para projetos utilizando automação via Gulp.

## Inicialização

``` npm install ```

## Pacotes utilizados

```npm install --save-dev @babel/core @babel/preset-env babel-eslint browser-sync gulp gulp-autoprefixer gulp-babel gulp-clean-css gulp-concat gulp-sass gulp-uglify sass```

## Tarefas executadas

No projeto base apresentado, as seguintes tarefas de automação estão sendo executadas:

### 1 - Compilação e Minificação de Sass para CSS

* Origem: src/scss/style.scss;
* Destino: dist/css/style.min.css;
* Tarefa: compileSass();
* Descrição: Compila o arquivo Sass, adiciona prefixos automáticos, minifica e salva o CSS resultante na pasta de destino;

### 2 - Concatenação e Minificação de JavaScript

* Origem: src/js/*.js;
* Destino: dist/js/script.min.js;
* Tarefa: minifyJS();
* Descrição: Concatena todos os arquivos JavaScript da pasta de origem, minifica e salva o arquivo resultante na pasta de destino;

### 3 - Carregamento de Bibliotecas Externas de CSS

* Origem: Bibliotecas externas (exemplo: Bootstrap);
* Destino: dist/css/libs.min.css;
* Tarefa: loadExternalCss();
* Descrição: Concatena e salva as bibliotecas externas de CSS na pasta de destino;

### 4 - Carregamento de Bibliotecas Externas de JavaScript

* Origem: Bibliotecas externas (exemplo: jQuery, Bootstrap);
* Destino: dist/js/libs.min.js;
* Tarefa: loadExternalJs();
* Descrição: Concatena e salva as bibliotecas externas de JavaScript na pasta de destino;

### 5 - Servidor Local com BrowserSync

* Descrição: Inicia um servidor local na pasta dist, monitora mudanças nos arquivos CSS, JavaScript e HTML e recarrega automaticamente o navegador quando há alterações;

### 6 - Monitoramento de Mudanças nos Arquivos

* Descrição: Assiste a mudanças nos arquivos Sass, JavaScript e HTML na pasta de origem (src) e executa as tarefas apropriadas para compilar, minificar, concatenar e recarregar o navegador via BrowserSync;
* Essas tarefas automatizam o processo de desenvolvimento front-end, garantindo que o código fonte seja compilado, minificado e distribuído de forma eficiente para a pasta de destino (dist), além de facilitar o desenvolvimento ao vivo com recarregamento automático do navegador;
