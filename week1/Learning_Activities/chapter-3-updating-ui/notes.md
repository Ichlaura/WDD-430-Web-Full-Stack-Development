Actualización de la interfaz de usuario con Javascript

ejemplo codigo html: 

<html>
  <body>
    <div id="app"></div>
    <script type="text/javascript">
      // Select the div element with 'app' id
      const app = document.getElementById('app');
 
      // Create a new H1 element
      const header = document.createElement('h1');
 
      // Create a new text node for the H1 element
      const text = 'Develop. Preview. Ship.';
      const headerContent = document.createTextNode(text);
 
      // Append the text to the H1 element
      header.appendChild(headerContent);
 
      // Place the H1 element inside the div
      app.appendChild(header);
    </script>
  </body>
</html>


ejemplo codigo dom :

<script type="text/javascript">
  const app = document.getElementById('app');
  const header = document.createElement('h1');
  const text = 'Develop. Preview. Ship.';
  const headerContent = document.createTextNode(text);
  header.appendChild(headerContent);
  app.appendChild(header);
</script>
A medida que crece el tamaño de una aplicación o un equipo, puede resultar cada vez más complicado crear aplicaciones de esta manera.

Con este enfoque, los desarrolladores dedican mucho tiempo a escribir instrucciones para indicarle a la computadora cómo debe hacer las cosas. Pero ¿no sería mejor describir lo que se quiere mostrar y dejar que la computadora descubra cómo actualizar el DOM? 


Programación imperativa vs. declarativa

El código anterior es un buen ejemplo de programación imperativa . Se escriben los pasos para actualizar la interfaz de usuario. Sin embargo, al crear interfaces de usuario, suele preferirse un enfoque declarativo, ya que puede acelerar el proceso de desarrollo. En lugar de tener que escribir métodos DOM, sería útil que los desarrolladores pudieran declarar lo que quieren mostrar (en este caso, una etiqueta con texto).h1

En otras palabras, la programación imperativa es como darle a un chef instrucciones paso a paso sobre cómo hacer una pizza. La programación declarativa es como pedir una pizza sin preocuparse por los pasos necesarios para prepararla. 🍕


React: una biblioteca de interfaz de usuario declarativa
Como desarrollador, puedes decirle a React qué quieres que suceda con la interfaz de usuario y React determinará los pasos para actualizar el DOM en tu nombre.

En la siguiente sección, exploraremos cómo puedes comenzar a utilizar React.

https://nextjs.org/learn/react-foundations/updating-ui-with-javascript  