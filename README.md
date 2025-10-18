# Parcial2-Soft.Dev

Nicolás Taborda Miranda - 408875


# Decisiones de Diseño


El proyecto se basa en una sólida Arquitectura en Capas (Controlador-Servicio-Repositorio) sobre Node.js/Express, lo que constituye la principal decisión de diseño. Este modelo garantiza una estricta Separación de Responsabilidades (SoC), donde los Controladores manejan el routing HTTP, los Servicios contienen la lógica de negocio, y los Repositorios aíslan completamente el acceso a datos. Esta abstracción facilita la mantenibilidad y la escalabilidad, permitiendo cambiar la base de datos (actualmente SQLite) o la lógica de negocio sin afectar las otras capas.

Adicionalmente, se optó por la simplicidad y el acoplamiento mínimo en la gestión de la base de datos. La conexión a SQLite (req.db) se inyecta a través de middleware de Express, permitiendo que las capas inferiores accedan al recurso de datos sin necesidad de importaciones globales. Finalmente, al servir archivos estáticos (public/) junto con la API REST, se crea una solución unificada para el back-end y el front-end simple (HTML/JavaScript), optimizando el desarrollo y la implementación.


# Link Video


