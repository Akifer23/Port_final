<?php

// Obtener los datos del formulario
$name = $_POST['name'];
$email = $_POST['email'];
$message = $_POST['message'];

// Crear el mensaje del correo electrónico
$subject = 'Mensaje de contacto desde tu sitio web';
$body = "Nombre: $name\nCorreo electrónico: $email\nMensaje: $message";

// Enviar el correo electrónico
if (mail('lezamaandres47@gmail.com', $subject, $body)) {
  echo json_encode(['success' => true]);
} else {
  echo json_encode(['success' => false]);
}
