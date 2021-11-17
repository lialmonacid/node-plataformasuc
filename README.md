# node-plataformasuc
Página web de las Plataformas UC

Esqueleto de la página web de las plataformas UC, programado en el framework NodeJS.

## Software requirements ##

Para iniciar el servicio web, deben instalarse los siguientes módulos y software. Se recomienda utilizar el administrador de paquetes `conda` porque es más fácil instalar los módulos.

* Node JS. Además, otros módulos de `Node` son requeridos (ver Instalación). Instalación con conda:

    conda create -n nodejs_env nodejs
    conda activate nodejs_env

## Instalación del servicio web ##

`Abi2ConsensusByRef` takes as input several sanger files (`.ab1`) or a single folder where it can find the sanger files:

    git clone 
    cd node-plataformasuc
    npm install

## Execution ##

Para lanzar el servicio:
    npm run dev

Para vizualizar en la en navegador:
    http://localhost:3300

* `multiseq_trim.fasta` contain all the processed input sequences together with the reference sequences. This file is use to build the MSA. Sequences are not aligned.
* `multiseq_trim.msa.fasta` is the resulting MSA after align the sequences against each other with Clustal Omega. 
* multiseq_trim.clustalo.log is log file after running Clustal Omega.
* `Consensus.fasta` is the FASTA file that has the MSA called consensus. It contain a single sequence.
* `Consensus.msa.fasta` is the MSA used to call the consensus sequence. It contain all aligned input sequences plus the called consensus in an aligned FASTA format.
* `*.pr.fasta` multiple FASTA files containg each input sequence after trimmming and reorienting them. There are as many files as input sequences.
