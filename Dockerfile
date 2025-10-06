FROM node:20-alpine

WORKDIR /usr/src/app

# Copia dependencias
COPY package*.json ./

RUN npm install --production

# Copia todo el proyecto
COPY . .

EXPOSE 3000

CMD ["npm", "start"]

# swm_backend/Dockerfile
FROM node:20-alpine

# Define el directorio de trabajo dentro del contenedor
WORKDIR /usr/src/app

# --- PASO 1: Copiar e instalar dependencias ---
# Copia los archivos de manifiesto de las dependencias
COPY package*.json ./

# Instala las dependencias de producción
# Esto incluye las dependencias de 'sequelize' que se ven en tu estructura
RUN npm install --production

# --- PASO 2: Copiar el código fuente ---
# Copia todo el resto del proyecto al directorio de trabajo.
# Esto incluye las carpetas 'app', 'public', etc.
COPY . .

# --- PASO 3: Configuración final ---
# Expone el puerto que usa tu app (3000)
EXPOSE 3000

# Comando para iniciar la aplicación
CMD ["npm", "start"]