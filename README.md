# GLF-2021s2-TrabajoIntegral-Entrega-Grupo4

# TRABAJO Integral GRAFOS

## Descripcion

TRABAJO INTEGRAL

Las coordenadas GPS se deberán usar, por facilidad, como coordenadas X,Y enteras (positivas y/o negativas).
• Trabaje la precisión (distancias, por ejemplo) de cálculos con mínimo 5 decimales.
• Las coordenadas GPS deben ser cargadas en un archivo de parámetros, según especificación indicada más adelante.
• La cantidad de centros de distribución y puntos de venta es variable (según cantidad de coordenadas ingresadas en archivo de parámetros). El punto de estacionamiento de los camiones de la empresa es siempre uno y su ubicación es en la coordenada “0,0”.
• La capacidad máxima de productos por camión es 1000. Un camión no puede transportar “fracciones” de productos, mientras que un punto de venta puede ser abastecido diariamente sólo por un camión (es decir, los camiones no pueden hacer despachos “a medias). No obstante, un camión puede abastecer varios puntos de venta (siempre cuando sean pedidos “completos”).
• En este trabajo, se puede utilizar bases de datos relacionales si se encuentra necesario. Dichos motores pueden ser MySQL (Maria DB) 10.1 y/o MS SQL server 2008 R2 y/o PostgreSQL 11.2.
• El archivo de parámetros debe ser texto plano (un único archivo) donde cada línea es una ubicación o coordenada con la siguiente estructura: “T;N;X,Y” donde “T” puede ser “P” o “C” para indicar si es un punto de venta o un centro de distribución respectivamente. “N” es un identificador numérico entero de cada ubicación. “X” e “Y” son las coordenadas X e Y donde está ubicado el centro, ingresada con valores enteros separados por “,” (coma). Note que el tipo de ubicación, el identificador del mismo y la coordenada X,Y están separadas entre sí por un “;” (punto y coma). No hay espacios entre los valores.
• Para ejecutar el programa, el usuario debe ingresar “las demandas de productos del día”, esto es básicamente: La cantidad de productos demandada por cada punto de venta, que centros de distribución alimentarán cuales puntos de venta. Esta información debe cargarse al iniciar el programa (abrir la página web), mediante un archivo planto con la siguiente estructura: “C;P;N” dónde “C” es el centro de distribución, “P” es el punto de venta y “N” es la cantidad de productos a repartir desde dicho centro “C” al punto “P”. Note que los valores se separan por un “;” (punto y coma), no habiendo espacios entre los valores. Los valores de “C” y “P” se basan en la información cargada en el archivo de parámetros.

El link del repositorio : https://github.com/GRUPO-4-GRAFOS/GLF-2021s2-TrabajoIntegral-Entrega-Grupo4.git

## integrantes

- Lucas Catillo
- Nicolas Garay
- Javiera Gonzalez
- Rocio Leiva
- Victor Venegas
