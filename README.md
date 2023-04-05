# Guía para trabajar en el repositorio

Buenas dias/tardes/noches compañeros. El que les habla aca es Juan F Paz, este va a ser nuestro repositorio remoto donde vamos a organizarnos cada uno una o varias tareas, para poder realizar la pagina web de estilo "Landing Page" entre todos.

A continuacion voy a dejarles una guia de como deben clonar el repo, como trabajar en su repo local y como deben hacer el push a nuestro repositorio remoto. La parte de como trabajar en el repo local queda en ustedes, pero estaria bueno que sigan los pasos para evitar conflictos en sus repositorios.

Con cariño, Juan F Paz.-

## Clonar el repositorio

Para clonar el repositorio, puedes seguir los siguientes pasos:

1.    Abre tu terminal y navega a la carpeta donde quieres clonar el repositorio.
2.    Copia la URL del repositorio remoto en GitHub.
3.    Ejecuta el siguiente comando en la terminal:
```
  git clone https://github.com/JuanFPaz/landingPageAP40.git
```

Una vez que tienes el repositorio clonado en tu máquina, podemos verificar que el repositorio este clonado como corresponde con el siguiente comando:

```
  git branch -a
```
De esta manera vamos a poder ver nuestra branch del repositorio local y del repositorio remoto:

![Screen de ejemplo de las branch -a](https://scontent.feze12-1.fna.fbcdn.net/v/t1.15752-9/338288212_139346552236407_8390321198994751736_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeH34dZc5mZ_8QkDDz27iiCwrWhVDH9zwX-taFUMf3PBf17K0xTqIST-H5GkhQEZ8GYQ-ljoGcNLo5HFZcKUUktr&_nc_ohc=idFmRrkHDKsAX-GU0Lk&_nc_ht=scontent.feze12-1.fna&oh=03_AdRlc4lB1QGzdYHyYsTj-5j2zxBsANYU5ZFg6SjuR4a60w&oe=645507EA)

## Trabajar en el repositorio

Es importante seguir ciertos pasos para trabajar en él, para evitar todo tipo de conflictos en nuestros repositorios locales y no trasladarlos hasta el repositorio remoto!!!!.

1. Si tu branch local principal esta configurada como branch **Master**, con el siguiente comando vas a poder cambiarle el nombre con el siguiente comando. Si tu branch local principal es **Main** ignora este paso:

```
  git branch -m master main
```
2. A continuacion vamos a crear una nueva branch en la que vamos a estar haciendo nuestros cambios, mejores, experimentos, etc. Todo con el fin de no alterar nuestro trabajo funcional de la rama main, y poder tener un mejor control con los avances del proyecto:
    - Con git branch <nombre_de_branch> crean la nueva branch en la que van a trabajar.
    - Con git checkout <nombre_de_branch> cambian la branch en la que estan trabajando, en este ejemplo cambian de la main a la nueva branch

```
Para Christian:
  git branch ChristianBrachet
  git checkout ChristianBrachet

Para Franco:
  git branch FrancoBurna
  git checkout FrancoBurna
  
Para Elizabeth:
  git branch ElizabethAltamirano
  git checkout ElizabethAltamirano
```

3. Trabajamos en nuestra rama secundaria, haciendo los cambios que sean necesarios y creeando commits las veces que consideremos necesarias:

```
  git add .
  git commit -m "Mensaje de commit"
```

4. Cuando hayamos terminado de hacer los cambios y esten listos para integrarlos al repositorio remoto, primero debemos actualizar la rama **Main** local con los ultimos cambios respecto al repositorio remoto. Este es un paso que debemos hacer siempre que haya un cambio con un previo aviso, pero es buena practica hacerlo cada tanto.

```
  git checkout main
  git pull origin main
```

5. Una vez realizado este paso, volvemos a nuestra branch donde estuvimos trabajando, para actualizarla con respecto a la branch Main. 

```
  git checkout <nombre_de_branch>
  git merge main
```   
En este paso se nos pueden presentar conflictos, que son comunes en git al trabajar en un grupo. Un conflicto es cuando el codigo, archivos, carpetas, o lo que sea en el que nos encontramos trabajando posee un cambio, Git lo detecta automaticamente y nos los presenta tanto en pantalla como por consola. Estos conflictos se puede resolver dependiendo de cual se nos presente. Por ejemplo esta imagen:

![Screen de ejemplo de un conflict](https://scontent.feze12-1.fna.fbcdn.net/v/t1.15752-9/338149022_895385388235447_7056720464144832039_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeE7IJHbzuT9j6IjQpWnJeLj_JoYa5dYg6T8mhhrl1iDpJ95FLI4KmFkrdMhpbDN5PFU3XJ8jOfFwBEJhAoRr4Py&_nc_ohc=vlz9bJ4iztUAX9YTfmJ&_nc_ht=scontent.feze12-1.fna&oh=03_AdS1eviBRSOhuAubkXARrkRiP1BCByU2zpjjXb_4Jw0PzA&oe=645514FC)

![Screen de ejemplo de un conflict](https://scontent.feze12-1.fna.fbcdn.net/v/t1.15752-9/336539814_3048030168825676_8355411604944597785_n.png?_nc_cat=101&ccb=1-7&_nc_sid=ae9488&_nc_eui2=AeHLXycyFguvwY05etsnA5-CjVWV9lTgwoiNVZX2VODCiD6mrwsxmkVfjjaJw9a-Cus5qK6BspDSwx5KTZesytxC&_nc_ohc=VawBd9bwX8wAX9VLJId&_nc_ht=scontent.feze12-1.fna&oh=03_AdTeR1c8-79jyGJqJGZVzhpC0LUgTk_sF1Exi2VCHVxgOQ&oe=6454FDE0)

+ Si se les presenta algun tipo de conflict como los del ejemplo, simplemente avisenme y vemos como lo solucionamos!

6. Una vez resuelto los conflict, o no se presente ninguno, desde la **branch secundaria** donde nos encontramos trabajando hacemos el **push** al repositorio remoto. Para hacer esto usamos los siguientes comandos:
```
  git push origin <nombre_de_la_branch>
```
+ Al hacer eso, subis tus cambios al **branch correspondiente del repositorio remoto** con el fin de hacer un pull request, que me voy a dedicar a hacerlos yo JuanFPaz, y asi entre todos mantener actualizado nuestra rama Main, donde se va a encontrar el trabajo practico final terminadito y listo para ser entregado.

7.Para ir finalizando, una vez que terminamos de hacer todo los cambios, commits, push, etc, debemos  actualizar nuestros cambios a nuestra **branch main local**, con el fin de mantenerlo actualizado con todos los cambios que realizamos, similar al paso 4, **mergeando** con la **branch secundaria** donde veniamos trabajando.
```
  git checkout main
  git merge <nombre_de_branch>
  git branch -d <nombre_de_branch>
```
Este ultimo comando lo que hace es eliminar nuestra **branch secundaria**, para que luego más tarde, volvamos a repetir los pasos que vimos anteriormente. Si vos no realizaste todo correctamente, el mismo git te va a estar avisando de algunos errores antes de eliminar la **branch secundaria**

8.Y para finalizar, cuando queramos volver a trabajar en el proyecto, vamos a repetir algunos pasos que ya vimos, como anticipe en el paso anterior, pero con una diferencia. En este caso vamos a actualizar primero nuestra **branch main local** y luego creamos la **branch secundaria** donde vamos a estar trabajando:
```
  git checkout main
  git pull origin main
  git branch <nombre_de_branch>
  git checkout <nombre_de_branch>
```
Y ya nos encontramos listos para seguir trabajando!

Todo esto es con el fin de que nos familiarizarnos un poco con Git y Github. Queda en ustedes si quieren seguir estos pasos o no. Yo les recomiendo que si, mientras nos encontremos haciendo el TP Final. Claramente como yo hice esta guia, si se les presenta dudas, hagan sus consultas, que para eso estamos. Para ayudarnos. Espero que les sirva y a hacer el trabajo que nos quedan pocos dias.
