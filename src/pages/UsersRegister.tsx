import { useState } from "react"

import "./styles/userregister.css"


//Espero les guste

const UsersRegister = () => {


  const [users, setUsers] = useState([
    {
      username: "admin",
      email: "admin@example.com",
      password: "admin123",
      role: "admin",
    },
  ]);


  // Aqui faltaria implementar mas codigo

  const [isAdmin, setIsAdmin] = useState(false);

  const handleRoleChange = (event) => {
    setIsAdmin(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (FormData.username && FormData.email && FormData.password) {
      const newUser = {
        username: FormData.username,
        email: FormData.email,
        password: FormData.password,
        role: isAdmin ? "admin" : "user",
      };

      setUsers([...users, newUser]);
      FormData({ username: "", email: "", password: "" });
      alert("Usuario registrado exitosamente. 🥰");
    } else {
      alert("Por favor, complete todos los campos.");
    }
  };

  // Aqui faltaria implementar mas codigo

  return (
    <div style={{ maxWidth: "400px", margin: "0 auto", padding: "20px" }}>
      <h2>Registro de Usuarios</h2>
      <form onSubmit={handleSubmit}>
        {/* ... (// Aqui faltaria implementar mas codigo) */}
        <div>
          <label>Es administrador:</label>
          <input
            type="checkbox"
            name="isAdmin"
            checked={isAdmin}
            onChange={handleRoleChange}
          />
        </div>
        <button type="submit">Registrar</button>
      </form>

      {/* Mostrar la lista de usuarios registrados */}
      {users.length > 0 && (
        <div>
          <h3>Usuarios Registrados:</h3>
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <strong>Usuario:</strong> {user.username},{" "}
                <strong>Email:</strong> {user.email}
                <strong>Rol:</strong> {user.role}
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* Mostrar funcionalidad de creación de productos solo a administradores */}
      {isAdmin && (
        <div>
          <h3>Crear Producto:</h3>
          {/* Agregar aquí el formulario y lógica para crear productos */}
        </div>
      )}
    </div>
  );
};

export default UsersRegister;