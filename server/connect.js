function creatMessage() {
  const api = "http://localhost:3001";
  const apiEndpoint = `${api}/CreatUser`;

  // Récupérer les valeurs des champs du formulaire
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const message = document.getElementById("message").value;
  alert("hello" + name);

  // Construire le corps de la requête à envoyer au serveur
  const requestBody = {
    name: name,
    email: email,
    message: message,
  };

  // Configuration de la requête fetch pour l'envoi des données
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(requestBody),
  };

  // Envoi de la requête au serveur
  fetch(apiEndpoint, requestOptions)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok.");
      }
      return response.json();
    })
    .then((data) => {
      console.log("Nouveau message créé:", data);
      // Faites ici ce que vous souhaitez faire avec la réponse du serveur après la création du message
    })
    .catch((error) => {
      console.error(
        "Il y a eu un problème lors de la création du message:",
        error
      );
      // Gérez l'erreur ici
    });
}
