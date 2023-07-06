export async function register(user){
  try {

      const response= await fetch(`http://localhost:3000/api/users/createUser`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(user)
      });

      const data= await response.json();
      const status= data.status;
      console.log(data)
      console.log(status)
      console.log("Funcionó, Estas Registrado")
      alert("Registrado")


  } catch (error) {
      console.error(error);
      throw new Error("Error al agregar usuario");
  }
}

export async function logUser(user){
  try {
      const response= await fetch(`http://localhost:3000/api/users/login`, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(user)
      });

      const data= await response.json();
      console.log(data)
      
  } catch (error) {
      console.error(error);
      throw new Error("Error al agregar usuario");
  }
}

export async function getData() {
  try {
    const response = await fetch('http://localhost:3000/api/users/getUsers', {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    });

    const data = await response.json();
    console.log(data);
    return data

  } catch (error) {
    console.error(error);
    throw new Error('Error al obtener los datos');
  }
}