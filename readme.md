
# Project's name

## Description
    Version basica del juego arcade Mario Bros.


## MVP (DOM - CANVAS)
    Un avatar que se desplace por una pataforma esquivando diferentes obstaculos y consiga llegar a la meta 

## Backlog
    - Crear desniveles en el suelo
    -Incorporacion de un timelapse
    -Incorporar  enemigos moviles
    -incorporar un segundo nivel


## Data structure
Class GAME
    referencia GROUND
    referencia AVATAR
Class AVATAR
    funciones: adelante, atras, saltar
    propiedades: vidas 
    estados: vivo  /  saltando
Class GROUND
    propiedades huecos
    Class trampa
Class ENEMY
Class HOME (Victory)

## States y States Transitions
Definition of the different states and their transition (transition functions)

- splashScreen 
    -background de inicio
    - boton de start 
    -Resena del juego 
    -Comandos de interaccion 
- gameScreen
    -background del nivel de juego
    -ground
    -avatar
- gameoverScreen
    -backgground del nivel de juego con un filtro rojo por ejemplo
    -boton reset
- winScreen
    -backgground con un fonde de  victoriamplo
    -boton reset


## Task




### Trello
[Link url](https://trello.com/b/XAmkDgev)


### Git
URls for the project repo and deploy
[Link Repo](http://github.com/johanBautista/GAME/tree/master)
[Link Deploy](http://github.com/johanBautista/GAME/tree/deploy)


### Slides
URls for the project presentation (slides)
[Link Slides.com](http://slides.com/johansbautistaparra)
