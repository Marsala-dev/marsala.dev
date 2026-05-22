# Componentes UI Implementados

Se han integrado dos componentes de shadcn/ui al proyecto Marsala.dev:

## 1. 3D Adaptive Navigation Bar
**Ubicación**: `components/ui/3d-adaptive-navigation-bar.tsx`
**Demo**: `/demos/navigation`

Un componente de navegación con efecto 3D que:
- Se expande al hacer hover
- Muestra transiciones suaves entre secciones
- Tiene efectos de sombra y brillo realistas
- Navegación basada en clicks

### Uso básico:
```tsx
import { PillBase } from '@/components/ui/3d-adaptive-navigation-bar'

export default function MyPage() {
  return (
    <div>
      <PillBase />
    </div>
  )
}
```

## 2. Cinematic Theme Switcher
**Ubicación**: `components/ui/cinematic-theme-switcher.tsx`
**Demo**: `/demos/theme-switcher`

Un interruptor de tema con efectos cinematográficos que:
- Cambia entre modo claro y oscuro
- Tiene animaciones de partículas al cambiar
- Efectos de sombra neumórficos
- Integración con next-themes

### Uso básico:
```tsx
import CinematicThemeSwitcher from '@/components/ui/cinematic-theme-switcher'

export default function MyPage() {
  return (
    <div>
      <CinematicThemeSwitcher />
    </div>
  )
}
```

## Instalación de Dependencias

Debido a problemas de permisos con WSL, las dependencias no se instalaron automáticamente. Por favor ejecuta:

```bash
cd Marsala.dev
npm install framer-motion next-themes lucide-react
```

O si prefieres, puedes actualizar manualmente el `package.json` agregando estas dependencias:

```json
{
  "dependencies": {
    "framer-motion": "^11.3.0",
    "lucide-react": "^0.400.0",
    "next-themes": "^0.3.0"
  }
}
```

Y luego ejecutar:
```bash
npm install
```

## Configuración del Proyecto

### ✅ Ya configurado:
- TypeScript
- Tailwind CSS
- Next.js 14 con App Router
- Estructura de carpetas `/components/ui` (patrón shadcn)

### 📁 Archivos creados:
1. `components/ui/3d-adaptive-navigation-bar.tsx` - Componente de navegación
2. `components/ui/cinematic-theme-switcher.tsx` - Componente de theme switcher
3. `components/theme-provider.tsx` - Provider de next-themes
4. `app/demos/layout.tsx` - Layout para las demos con ThemeProvider
5. `app/demos/navigation/page.tsx` - Demo de navegación
6. `app/demos/theme-switcher/page.tsx` - Demo de theme switcher

## Prueba de los Componentes

1. Instala las dependencias:
```bash
npm install
```

2. Inicia el servidor de desarrollo:
```bash
npm run dev
```

3. Navega a las siguientes URLs:
   - **Navegación 3D**: http://localhost:3000/demos/navigation
   - **Theme Switcher**: http://localhost:3000/demos/theme-switcher

## Personalización

### 3D Navigation Bar
Puedes personalizar los items de navegación editando el array `navItems` en el componente:

```tsx
const navItems: NavItem[] = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Contact', id: 'contact' },
]
```

### Theme Switcher
Para usar el theme switcher en todo el proyecto, envuelve tu aplicación con el `ThemeProvider` en el `app/layout.tsx`:

```tsx
import { ThemeProvider } from '@/components/theme-provider'

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
```

## Estructura del Proyecto

```
Marsala.dev/
├── components/
│   ├── ui/
│   │   ├── 3d-adaptive-navigation-bar.tsx
│   │   └── cinematic-theme-switcher.tsx
│   └── theme-provider.tsx
├── app/
│   ├── demos/
│   │   ├── layout.tsx
│   │   ├── navigation/
│   │   │   └── page.tsx
│   │   └── theme-switcher/
│   │       └── page.tsx
│   └── layout.tsx
└── package.json
```

## Notas Importantes

1. **Carpeta /components/ui**: Esta carpeta sigue el patrón de shadcn/ui para organizar componentes reutilizables. Es importante mantener esta estructura para:
   - Separación de componentes de UI de componentes específicos de la aplicación
   - Facilitar la importación y reutilización de componentes
   - Mantener consistencia con el ecosistema de shadcn

2. **next-themes**: El componente CinematicThemeSwitcher requiere que tu aplicación esté envuelta en un ThemeProvider. Las demos ya tienen esto configurado en su propio layout.

3. **framer-motion**: Ambos componentes usan framer-motion para animaciones fluidas y efectos de spring physics.

## Soporte

Si encuentras algún problema:
1. Verifica que todas las dependencias estén instaladas
2. Asegúrate de que el servidor de desarrollo esté corriendo
3. Revisa la consola del navegador para errores
4. Verifica que los paths de importación sean correctos (@/ apunta a la raíz del proyecto)
