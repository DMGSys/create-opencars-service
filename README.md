# 🛠️ create-opencars-service

Generador de microservicios Express + MongoDB para OpenCars.  
Crea una estructura lista para usar en segundos con Docker, GitHub Actions, controladores, rutas y más.

---

## 🚀 ¿Cómo usar?

### 1. Ejecutar desde cualquier terminal:

```bash
npx github:DMGSys/create-opencars-service nombre-del-servicio
```

> Reemplazá `nombre-del-servicio` por el nombre de tu nuevo proyecto.

---

### 2. ¿Qué incluye el template?

```
nombre-del-servicio/
├── controllers/         # Lógica de negocio
├── routes/              # Endpoints Express
├── services/            # Llamados externos o funciones compartidas
├── public/              # Archivos estáticos
├── views/               # Vistas EJS (opcional)
├── .aws/                # Definiciones para AWS ECS
├── .github/workflows/   # CI/CD con GitHub Actions
├── Dockerfile           # Imagen Docker lista
├── index.js             # App principal Express
├── package.json
├── .gitignore
└── README.md
```

---

### 3. Scripts útiles

```bash
npm run dev     # Levanta el servidor en modo desarrollo
npm start       # Producción
```

---

### 4. Requisitos

- Node.js v16+ (recomendado v18+)
- Git
- Acceso a MongoDB (local o Atlas)

---

### 5. Ejemplo de uso

```bash
npx github:DMGSys/create-opencars-service api-turnos
cd api-turnos
npm run dev
```

---

### 🧪 Para desarrollo de esta plantilla

```bash
chmod +x cli.js
```

Y asegurate que en `package.json` esté:

```json
"bin": {
  "create-opencars-service": "./cli.js"
}
```

---

### 🧑‍💻 Autor

Creado por [DMGSys](https://github.com/DMGSys)
