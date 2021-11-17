# node-plataformasuc
Esqueleto de la página web de las plataformas UC, programado en el framework [NodeJS](https://nodejs.org).

## Software requirements ##

Para iniciar el servicio web, deben instalarse los siguientes módulos y software. Se recomienda utilizar el administrador de paquetes `conda` porque es más fácil instalar los módulos.

* Node JS. Además, otros módulos de `Node` son requeridos (ver Instalación). Instalación con conda:
    ```
    conda create -n nodejs_env nodejs
    conda activate nodejs_env
    ```
## Instalación del servicio web ##

Luego de haber instalado NodeJS y cargado el ambiente (`nodejs_env`) se deben seguir los siguientes pasos:
1. Clonar este repositorio.
    ```
    git clone https://github.com/lialmonacid/node-plataformasuc.git 
    ```
2. Entrar al directorio.
    ```
    cd node-plataformasuc
    ```
3. Instalar los modulos adicionales de `Node` necesarios para correr la aplicación.
    ```
    npm install
    ```
## Iniciar el servicio web ##

1. Para lanzar el servicio:
    ```
    npm run dev
    ```

2. Para vizualizar en el navegador. El puerto configurado por defecto es el `3300` (src/index.js):
    ```
    http://localhost:3300
    ```
