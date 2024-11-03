---
layout: website  # Esto debe coincidir con el nombre del archivo HTML en _layouts
title: "Sumar Números en Python"
---


# Tutorial: Cómo Sumar dos Números Enteros en Python

<!-- Puedes reemplazar la imagen y ajustar el tamaño según sea necesario -->
<center><img src="img/py.png" alt="logo python" width="100" height="120" class= "custom-size-py"></center>

## Tabla de Contenidos
<!-- Actualiza los enlaces a las secciones que realmente utilices -->
* [Introducción](#introducción)
* [Ejemplos](#ejemplos)
    * [Ejemplo 1: Definir una función para sumar](#ejemplo-1-definir-una-función-para-sumar)
    * [Ejemplo 2: Solicitar la entrada del usuario](#ejemplo-2-solicitar-la-entrada-del-usuario)
    * [Ejemplo 3: Ejecutar el programa de suma](#ejemplo-3-ejecutar-el-programa-de-suma)
* [Conclusión](#conclusion)
* [Referencias](#referencias)

## Introducción
<!-- Aquí puedes escribir una introducción que describa el propósito del tutorial y lo que el usuario aprenderá -->
En este tutorial, aprenderás cómo sumar dos números enteros en Python utilizando una función simple. Veremos tres ejemplos que cubren cómo definir la función, solicitar la entrada del usuario y ejecutar el programa de suma.
## Ejemplos
<!-- Asegúrate de que cada ejemplo esté bien explicado y relacionado con el tema del tutorial -->
#### Ejemplo 1: Definir una función para sumar
En este ejemplo, definimos una función llamada `sumar_numeros` que toma dos parámetros (números enteros) y devuelve la suma de ellos.

```python
# Función que suma dos números
def sumar_numeros(a, b):
    return a + b
```
> Al llamar a esta función con dos números, por ejemplo, sumar_numeros(5, 3), devolverá el valor 8.


#### Ejemplo 2: Solicitar la entrada del usuario
Aquí crearemos un programa que solicite al usuario que introduzca dos números para sumarlos.

```python
# Solicitar números al usuario
numero1 = int(input("Introduce el primer número: "))
numero2 = int(input("Introduce el segundo número: "))

```
> El usuario ingresará dos números y el programa guardará esos valores como enteros.

#### Ejemplo 3: Ejecutar el programa de suma
Finalmente, usamos la función definida anteriormente para sumar los números introducidos por el usuario y mostrar el resultado.

```python
# Llamar a la función sumar_numeros y mostrar el resultado
resultado = sumar_numeros(numero1, numero2)
print(f"La suma de {numero1} y {numero2} es {resultado}")
```
> Si el usuario introduce los números 5 y 7, el despliegue será:

```
La suma de 5 y 7 es 12
```

## Conclusion

<!-- Proporciona un resumen claro y conciso de lo que el usuario debería haber aprendido en este tutorial -->
En este tutorial, hemos aprendido cómo sumar dos números enteros en Python utilizando una función simple, solicitando la entrada del usuario y mostrando el resultado en pantalla.

## Referencias
<!-- Enlista cualquier fuente que hayas utilizado o que el usuario pueda consultar para más información -->
* [Documentación oficial de Python](https://docs.python.org/3/)
* [Cómo usar la función input() en Python](https://docs.python.org/3/library/functions.html#input)



