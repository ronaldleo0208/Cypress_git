Feature: Demo de Cucumber

    Demostracion de como utilizar cucumber

    Scenario Outline: Demo de cucumber dos
        Given abrir pagina principal
        When cargando el nombre Ronald
        When cargando el apellido Moreno
        When cargando el email ronald@gmail.com
        When cargando el numero de telefono 8451234568
        When cargando la address las_minas
        When cargando la direccion san_antonio
        When seleccionando el estado Florida
        When cargando el zip code 1234
        When cargando el web site www.ronald.com
        When seleccionando el hosting
        When cargando el projec description Hola_project
        Then validando el nombre de la pagina
        Then Click en el boton send


    Scenario Outline: Demo de cucumber caso dos
        Given abrir pagina principal
        When cargando el nombre Cristiano
        When cargando el apellido Ronaldo
        When cargando el email ronaldo@gmail.com
        When cargando el numero de telefono 8451234568
        When cargando la address Madeira
        When cargando la direccion portugal
        When seleccionando el estado California
        When cargando el zip code 1244
        When cargando el web site www.ronaldo.com
        When seleccionando el hosting
        When cargando el projec description Hola_mundo
        Then validando el nombre de la pagina
        Then Click en el boton send
