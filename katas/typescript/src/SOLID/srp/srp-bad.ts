// Violación del SRP: La clase UserManager tiene demasiadas responsabilidades
// ❌ Problema: Esta clase maneja validación de email Y validación de nombre Y creación de usuarios

class UserManager {
  // ❌ Responsabilidad 1: Creación de usuarios
  public createUser(email: string, name: string): boolean {
    // ❌ Responsabilidad 2: Validación de email (debería estar en otra clase)
    if (!this.isValidEmail(email)) {
      return false;
    }
    // ❌ Responsabilidad 3: Validación de nombre (debería estar en otra clase)
    if (!name || name.trim().length === 0) {
      return false;
    }
    return true;
  }

  // ❌ Lógica de validación mezclada con lógica de negocio
  private isValidEmail(email: string): boolean {
    return email.includes("@");
  }
}

// Uso
const manager = new UserManager();
console.log(manager.createUser("john@example.com", "John Doe")); // true
console.log(manager.createUser("invalid-email", "John Doe")); // false
console.log(manager.createUser("john@example.com", "")); // false

// ❌ Problemas con este enfoque:
// 1. Si la validación de email cambia, modificamos UserManager
// 2. Si la validación de nombre cambia, modificamos UserManager
// 3. UserManager tiene múltiples razones para cambiar
// 4. Difícil de probar las validaciones por separado
// 5. Violación del SRP: más de una responsabilidad

export { UserManager };
