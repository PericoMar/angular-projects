# Proyecto CRUD de Posts en Angular con HttpClient y JSON Server

## Instalación

Para ejecutar este proyecto en tu entorno local, sigue estos pasos:

1. Clona este repositorio en tu máquina local utilizando Git:
```
git clone https://github.com/tu_usuario/tu_proyecto.git
```

2. Accede al directorio del proyecto:
```
cd tu_proyecto
```

3. Instala las dependencias utilizando npm:
```
npm install
```

4. Inicia el servidor JSON local y hazle watch al archivo db.json ejecutando el siguiente comando en una terminal:
```
json-server --watch db.json
```

Este comando iniciará JSON Server y observará los cambios en el archivo db.json.

5. En otra terminal, inicia la aplicación Angular ejecutando el siguiente comando:
```
ng serve
```

## Descripción del Proyecto
Este proyecto consiste en un CRUD de posts desarrollado en Angular. Utiliza HttpClient para recibir la información del servidor JSON local a través de JSON Server, lo que proporciona persistencia de datos. Se ha añadido un botón de filtrar para facilitar la búsqueda de posts en la lista.

## Funcionalidades Adicionales
Persistencia de Datos: Se utiliza JSON Server para proporcionar persistencia de datos, lo que permite crear, leer, actualizar y eliminar posts.
Filtrar Posts: Se ha añadido un botón de filtrar para permitir a los usuarios buscar posts más fácilmente en la lista.
Tecnologías Utilizadas
HttpClient: Se utiliza para realizar solicitudes HTTP y recibir la información del servidor JSON.
RouterModule: Permite conectar los diferentes componentes de la aplicación mediante enrutamiento.
FormsModule: Se utiliza para trabajar con formularios en Angular, lo que permite la creación y actualización de posts de manera sencilla.
