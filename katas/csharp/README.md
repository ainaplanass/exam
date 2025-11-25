# 🎓 Clean Code, OOP, Principios SOLID y Patrones de Diseño en C#

Este proyecto presenta ejemplos prácticos de Clean Code, OOP, Principios SOLID y Patrones de Diseño usando C#. Cada concepto incluye ejemplos "malos" (violando principios) y "buenos" (siguiendo buenas prácticas) para facilitar el aprendizaje.

## 📚 Contenido del proyecto

### ✨ 1. Clean Code (`src/CleanCode/`)

Principios de código limpio y legible:

- **Naming** - Nombrado descriptivo (sin magic numbers, encodings)
- **Functions** - Funciones pequeñas y enfocadas (una responsabilidad)
- **Format** - Formato horizontal y vertical consistente

### 🎯 2. Programación Orientada a Objetos (`src/OOP/`)

Los 4 pilares fundamentales de OOP:

- **Abstraction** - Abstracción (ocultar detalles de implementación)
- **Encapsulation** - Encapsulamiento (proteger el estado interno)
- **Inheritance** - Herencia (reutilización de código)
- **Polymorphism** - Polimorfismo (comportamiento específico sin condicionales)

### 🔷 3. Principios SOLID (`src/SOLID/`)

Los 5 principios fundamentales de diseño orientado a objetos:

- **S** - Single Responsibility Principle (SRP) - Responsabilidad Única
- **O** - Open/Closed Principle (OCP) - Abierto/Cerrado
- **L** - Liskov Substitution Principle (LSP) - Sustitución de Liskov
- **I** - Interface Segregation Principle (ISP) - Segregación de Interfaces
- **D** - Dependency Inversion Principle (DIP) - Inversión de Dependencias

### 🏗️ 4. Patrones de Diseño (`src/Patterns/`)

Soluciones probadas para problemas comunes de diseño:

- **Factory** - Patrón creacional para creación de objetos
- **Builder** - Patrón creacional para construcción compleja (Pizza)
- **Adapter** - Patrón estructural para compatibilidad de interfaces
- **Strategy** - Patrón de comportamiento para selección de algoritmos

## 🚀 Preparativos

### Prerequisitos - Instalación desde cero

#### 1. Instalar .NET SDK

**Windows:**

```bash
# Opción A: Usando Chocolatey (recomendado)
choco install dotnet-sdk -y

# Opción B: Descarga manual desde:
# https://dotnet.microsoft.com/download
```

**Linux/macOS:**

```bash
# Ubuntu/Debian
wget https://dot.net/v1/dotnet-install.sh
sudo bash dotnet-install.sh --channel 8.0

# macOS (Homebrew)
brew install dotnet-sdk
```

**Verificar instalación:**

```bash
dotnet --version  # Debe mostrar 6.0 o mayor
```

#### 2. Instalar dotnet-script (requerido para ejecutar ejemplos)

```bash
# Instalar globalmente (solo una vez)
dotnet tool install -g dotnet-script

# Verificar instalación
dotnet script --version
```

### Ejecutar Ejemplos

**Forma recomendada: Usar dotnet script**

```bash
# Navegar a la carpeta
cd katas/csharp

# Ejecutar cualquier ejemplo
dotnet script src/CleanCode/naming/naming-bad.cs
dotnet script src/SOLID/srp/srp-good.cs
dotnet script src/OOP/polymorphism/polymorphism-bad.cs
```

### Ejemplo Completo

```bash
# 1. Navegar a la carpeta
cd katas/csharp

# 2. Ejecutar ejemplo malo
dotnet script src/SOLID/srp/srp-bad.cs

# 3. Modificar el ejercicio
code src/SOLID/srp/srp-exercise.cs

# 4. Ejecutar tu solución
dotnet script src/SOLID/srp/srp-exercise.cs

# 5. Ver la solución
dotnet script src/SOLID/srp/srp-good.cs
```

## 🎯 Formato de aprendizaje (20 minutos por concepto)

Cada carpeta incluye:

1. **README.md** - Guía de aprendizaje
2. **ejemplo-bad.cs** - Código que viola el principio
3. **ejemplo-exercise.cs** - Archivo para tu práctica
4. **ejemplo-good.cs** - Código que sigue el principio

### Cómo estudiar

1. Lee el README del concepto
2. Ejecuta y analiza el ejemplo malo
   ```bash
   dotnet script src/OOP/abstraction/abstraction-bad.cs
   ```
3. Aplica las técnicas y principios aprendidos para refactorizar el ejemplo malo
4. Ejecuta tu solución
   ```bash
   dotnet script src/OOP/abstraction/abstraction-exercise.cs
   ```
5. Ejecuta y estudia el ejemplo bueno
   ```bash
   dotnet script src/OOP/abstraction/abstraction-good.cs
   ```

### Ejecución de archivos individuales

```bash
# Opción recomendada: Usando dotnet script
dotnet script src/CleanCode/naming/naming-bad.cs
dotnet script src/SOLID/srp/srp-good.cs
dotnet script src/OOP/polymorphism/polymorphism-bad.cs
```

## 🧪 Tests Unitarios

Cada concepto incluye tests unitarios completos usando **xUnit** para validar tanto las implementaciones malas como las buenas.

**Nota:** Los archivos de tests (`Tests.cs`) están incluidos en cada carpeta pero requieren configuración adicional para ejecutarse. Los ejemplos de código están diseñados para ser ejecutados directamente con `dotnet script`.

### Ver los tests disponibles

```bash
# Navegar a cualquier carpeta de concepto
cd src/Patterns/factory

# Ver el archivo de tests
code Tests.cs
```

### Ejecutar tests (requiere configuración de proyecto)

Para ejecutar los tests, necesitas crear un proyecto xUnit:

```bash
# 1. Crear proyecto de tests en la carpeta del concepto
cd src/Patterns/factory
dotnet new xunit -n FactoryTests

# 2. Mover Tests.cs al nuevo proyecto
mv Tests.cs FactoryTests/

# 3. Copiar los archivos de implementación al proyecto
cp factory-bad.cs FactoryTests/
cp factory-good.cs FactoryTests/

# 4. Ejecutar tests
cd FactoryTests
dotnet test
```

### Alternativa más simple: Ejecutar los ejemplos directamente

En lugar de configurar proyectos de testing, puedes ejecutar los archivos de ejemplo directamente para ver su funcionamiento:

```bash
# Ejecutar ejemplo malo
dotnet script src/Patterns/factory/factory-bad.cs

# Ejecutar ejemplo bueno
dotnet script src/Patterns/factory/factory-good.cs

# Los ejemplos ya incluyen casos de uso que demuestran su comportamiento
```

## 🔍 Beneficios demostrados

### ✅ Clean Code:

- **Legibilidad**: Código fácil de entender
- **Menos Bugs**: Nombres claros reducen errores
- **Colaboración**: Otros desarrolladores entienden rápidamente
- **Mantenimiento**: Cambios futuros más simples

### ✅ OOP:

- **Abstracción**: Interfaces simples, complejidad oculta
- **Encapsulamiento**: Datos protegidos y validados
- **Herencia**: Código compartido, menos duplicación
- **Polimorfismo**: Extensible sin modificar código existente

### ✅ SOLID:

- **Mantenibilidad**: Fácil de modificar y extender
- **Testabilidad**: Clases pueden probarse aisladamente
- **Flexibilidad**: Código se adapta a cambios
- **Legibilidad**: Separación clara de responsabilidades
- **Reutilización**: Componentes reutilizables

### ✅ Patrones de Diseño:

- **Reutilización**: Soluciones probadas a problemas comunes
- **Comunicación**: Vocabulario compartido entre desarrolladores
- **Mejores Prácticas**: Enfoques probados en el tiempo
- **Flexibilidad**: Modificar comportamiento sin cambiar estructura
- **Mantenibilidad**: Código bien organizado y predecible

## 🔧 Solución de Problemas Comunes

**Problema:** `dotnet: command not found`
**Solución:** Instalar .NET SDK desde https://dotnet.microsoft.com/download

**Problema:** `csc: command not found`
**Solución:** Usar `dotnet` o agregar el compilador al PATH

**Problema:** Referencias no encontradas en tests
**Solución:** Verificar rutas en `.csproj` con `<Compile Include="../archivo.cs" />`

**Problema:** Tests no se ejecutan
**Solución:** Los tests requieren crear un proyecto xUnit. Para desarrollo rápido, ejecuta los archivos de ejemplo directamente con `dotnet script`

**Problema:** Namespace conflicts
**Solución:** Usar namespaces únicos o `global using` en C# 10+

## 🎓 Ruta de Aprendizaje Recomendada

1. **Clean Code** (60 minutos)

   - naming → functions → format

2. **OOP** (80 minutos)

   - abstraction → encapsulation → inheritance → polymorphism

3. **SOLID** (100 minutos)

   - srp → ocp → dip → isp → lsp

4. **Patterns** (80 minutos)
   - factory → strategy → builder → adapter

## 🛠️ Comandos Útiles

```bash
# Ejecutar un archivo (FORMA RECOMENDADA)
dotnet script src/CleanCode/naming/naming-good.cs

# Crear proyecto de consola
dotnet new console -n MiProyecto

# Ejecutar tests con filtro
dotnet test --filter "FullyQualifiedName~UserServiceBad"

# Limpiar builds
dotnet clean
```

## 📚 Recursos Adicionales

### Documentación de Frameworks

- **xUnit**: https://xunit.net/
- **C# Documentation**: https://docs.microsoft.com/en-us/dotnet/csharp/
- **.NET CLI**: https://docs.microsoft.com/en-us/dotnet/core/tools/

### Tutoriales

- xUnit: https://xunit.net/docs/getting-started/netcore/cmdline
- C# Testing: https://docs.microsoft.com/en-us/dotnet/core/testing/

### Buenas Prácticas de Testing

- Arrange-Act-Assert (AAA) pattern
- Tests independientes y aislados
- Un concepto por test
- Nombres descriptivos
- Setup y Teardown cuando sea necesario

### Libros y Recursos

- **Clean Code (libro)**: Robert C. Martin
- **Design Patterns in C#**: https://refactoring.guru/design-patterns/csharp

## 🎯 Características de C# Utilizadas

- **Properties**: Para encapsulamiento elegante
- **Interfaces**: Para abstracción y polimorfismo
- **Abstract Classes**: Para herencia con comportamiento base
- **Static Members**: Para constantes y métodos utilitarios
- **Constructor Chaining**: En el patrón Builder
- **Object Initializers**: Para inicialización clara
- **String Interpolation**: Para concatenación legible
- **Nullable Reference Types**: Para evitar null reference exceptions (C# 8+)
- **Record Types**: Para objetos inmutables (C# 9+)
- **Top-level Statements**: Para código más conciso (C# 9+)

---

**¡Disfruta aprendiendo C# con buenas prácticas!** 🔷
