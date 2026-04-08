# Control de Finanzas Personales

Este proyecto es una aplicación web de control de finanzas personales desarrollada con React y Vite. Permite a los usuarios gestionar sus ingresos y gastos, visualizar su balance financiero, convertir monedas y personalizar la interfaz según sus preferencias.

## Funcionalidades Principales

### 1. Dashboard Principal

- **Balance Financiero**: Muestra los ingresos totales, gastos totales y el balance neto. Incluye un gráfico de pastel interactivo que visualiza la distribución entre ingresos y gastos.
- **Lista de Transacciones**: Muestra todas las transacciones registradas, diferenciando entre ingresos (en verde) y gastos (en rojo). Cada transacción incluye título, cantidad, tipo y categoría, con opción de eliminar.
- **Reloj en Tiempo Real**: Muestra la hora actual, fecha y un saludo personalizado basado en la zona horaria configurada.
- **Conversor de Monedas**: Permite convertir cantidades entre diferentes monedas utilizando tasas de cambio en tiempo real desde una API externa.

### 2. Gestión de Transacciones

- **Añadir Transacciones**: Formulario intuitivo para registrar nuevos ingresos o gastos, con campos para título, cantidad, tipo (ingreso/gasto) y categoría.
- **Eliminar Transacciones**: Opción de borrar transacciones existentes directamente desde la lista.

### 3. Personalización

- **Fondos de Pantalla**: Selección entre 5 fondos de pantalla diferentes para personalizar la apariencia.
- **Zona Horaria**: Configuración de zona horaria (España, Nueva York, Tokio) que afecta al reloj y formato de fechas.
- **Idioma**: Soporte para español e inglés, con textos completamente internacionalizados.

### 4. Integración con Backend

- Conexión con una API REST (localhost:3000) para persistir datos de transacciones.
- Operaciones CRUD: Obtener, crear y eliminar transacciones.
- Cálculo automático del balance basado en los datos del servidor.

## Tecnologías Utilizadas

### Frontend

- **React 19**: Framework principal para la construcción de la interfaz de usuario.
- **Vite**: Herramienta de desarrollo rápida con Hot Module Replacement (HMR).
- **React Router DOM**: Para navegación entre vistas (aunque en este proyecto se maneja con estado local).
- **Recharts**: Biblioteca para crear gráficos interactivos (gráfico de pastel del balance).
- **CSS**: Estilos personalizados para una interfaz moderna y responsiva.

### Estado y Context

- **React Context**: Gestión del estado global de las finanzas (transacciones y balance).
- **LocalStorage**: Persistencia de configuraciones de usuario (fondos, zona horaria, idioma).

### API y Servicios

- **Fetch API**: Para comunicación con el backend.
- **API Externa**: exchangerate-api.com para tasas de cambio en el conversor de monedas.

### Desarrollo

- **ESLint**: Linting para mantener la calidad del código.
- **Vite Plugins**: @vitejs/plugin-react para optimización de React.

## Estructura del Proyecto

```
src/
├── components/
│   ├── Balance.jsx          # Componente del balance con gráfico
│   ├── Conversor.jsx        # Conversor de monedas
│   ├── Formulario.jsx       # Formulario para añadir transacciones
│   ├── ListaTransacciones.jsx # Lista de transacciones
│   └── Reloj.jsx            # Reloj en tiempo real
├── context/
│   └── FinanzasContext.jsx  # Contexto global para estado de finanzas
├── services/
│   └── api.js               # Funciones para interactuar con la API
├── App.jsx                  # Componente principal con navegación
├── main.jsx                 # Punto de entrada de la aplicación
└── assets/                  # Recursos estáticos
```

## Instalación y Uso

### Prerrequisitos

- Node.js (versión 16 o superior)
- Backend API corriendo en `http://localhost:3000` (no incluido en este repositorio)

### Instalación

1. Clona el repositorio:

   ```bash
   git clone <url-del-repositorio>
   cd final-project-front
   ```

2. Instala las dependencias:

   ```bash
   npm install
   ```

3. Inicia el servidor de desarrollo:

   ```bash
   npm run dev
   ```

4. Abre tu navegador en `http://localhost:5173`

### Scripts Disponibles

- `npm run dev`: Inicia el servidor de desarrollo
- `npm run build`: Construye la aplicación para producción
- `npm run preview`: Vista previa de la build de producción
- `npm run lint`: Ejecuta ESLint para verificar el código

## Arquitectura y Diseño

### Patrón de Estado

- Utiliza React Context para compartir estado entre componentes sin prop drilling.
- El contexto `FinanzasContext` maneja todas las operaciones relacionadas con transacciones y balance.

### Internacionalización

- Sistema de traducciones basado en objetos JavaScript.
- Soporte completo para español e inglés en toda la aplicación.

### Diseño Responsivo

- Interfaz adaptada para diferentes tamaños de pantalla.
- Layout con sidebar y área principal en el dashboard.

### Persistencia

- Configuraciones guardadas en localStorage.
- Datos de transacciones persistidos en el backend.

## Funcionalidades Implementadas

1. **Gestión Completa de Transacciones**: CRUD operations con interfaz intuitiva.
2. **Visualización de Datos**: Gráficos interactivos para mejor comprensión financiera.
3. **Herramientas Útiles**: Conversor de monedas y reloj personalizado.
4. **Personalización Avanzada**: Múltiples opciones de configuración.
5. **Experiencia Multilingüe**: Soporte para diferentes idiomas.
6. **Integración con APIs**: Tanto backend propio como servicios externos.

Este proyecto demuestra el uso de React moderno, gestión de estado, integración con APIs, internacionalización y buenas prácticas de desarrollo frontend.
