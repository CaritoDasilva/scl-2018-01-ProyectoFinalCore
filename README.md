# Proyecto Final Common Core
## Preámbulo
El registro de visitantes en una empresa en América Latina es un proceso tedioso y manual. Lo común es que una persona esté en la recepción tomando nota - a veces con papel y lápiz - de cada visitante. Por razones de seguridad, usualmente piden a cada visitante dejar una identificación. Si vivimos en la era digital, ¿por qué seguimos registrando visitantes como si fuera 1985? ¿Qué tal si sustituimos a la persona en recepción por una tablet? ¿Qué tal si en lugar de pedir una identificación, tomamos una foto? 

## Introducción

En este proyecto la empresa de coworking donde opera Laboratoria en tu ciudad ha decidido contratarte a ti y a dos compañeras para reinventar su proceso de registro de visitantes. Con la entrada de [WeWork](https://www.googleadservices.com/pagead/aclk?sa=L&ai=DChcSEwilrK_T5KjcAhWCj7MKHexzAEgYABAAGgJxbg&ohost=www.google.cl&cid=CAASE-RoAxXTp1Cd0ErxEHpPSGuF4Hk&sig=AOD64_38ykNPf0QRtI9n4CFtpQpth-MrNQ&q=&ved=0ahUKEwjswKvT5KjcAhVkU98KHUcYCeMQ0QwIJA&adurl=) al mercado latinoamericano, tienen mucha más competencia y necesitan invertir en tecnología para mejorar su servicio; el registro de visitantes es un primer acercamiento. Te dan la referencia de [Envoy](https://envoy.com/) en EEUU (un servicio que ofrece un sistema digital de registro de visitantes) y ustedes tienen que desarrollar una versión mínima viable (ver anexo I). 


### Equipo de trabajo 

  * Diseñadora UX : Scarett Obreque Antoine.
      Diseñar la experiencia de la aplicación (flujo, interacción, etc.).
      Identificar, documentar y priorizar las historias de usuario.
      Crear el diseño visual de la interfaz.

  * Equipo Front-end : Mayra Romero y Carolina Da Silva.
      Implementar la interfaz de usuario diseñada (HTML/CSS/JS).
      Deben dividirse las funcionalidades entre las dos desarrolladoras.
      Todas los desarrollos deben incluir pruebas unitarias.

## Entregables obligatorios
Los criterios mínimos de aceptación para considerar que has completado este proyecto son:

### Diseño:
Entregables de diseño :
  * Entrevistas :
  [Usuario iF](https://docs.google.com/document/d/1s8i-8k-YUlSw_PofanrxZZd1gxMd-RwXzsGMr7cuosE/edit)
  [Recepcionista](https://docs.google.com/document/d/17E1K_3Y4Fd2nXqDqcrCoSiYHeOZnVrLC4hyoBJnp0rU/edit)
  [Administradora](https://docs.google.com/document/d/1ZwrRXcAr8sGPi3x5P64sxWnX-75JkwYtbJ5IyAGt3xg/edit)
  * Haber probado de “cliente incógnito” el registro de visitas en WeWork y compararla con tu solución y con la referencia que te brindaron ([Envoy](https://envoy.com/)).
  * Prototipo clickeable de alta fidelidad [VisitasIF](https://marvelapp.com/9a05fj0/screen/46229305)
  * Haber hecho y documentado (con fotos, videos, aprendizajes, lista de cambios realizados, etc.) sesiones de testing del prototipo con usuarios.

### Implementación:
  * Tu producto final debe estar desplegado en la web y, como mínimo, debe:
  * Permitir al usuario visitante registrarse con sus datos personales, incluyendo su foto.
  * Permitir al usuario visitante seleccionar a la persona a quien viene a visitar.
  * Notificar a la persona a quien vienen a visitar. Para esto te recomendamos revisar:
    * Los servicios de [Sendgrid](https://sendgrid.com/ )
    * El API de [Mandrill](https://mandrillapp.com/docs/) para mandar correos de forma automática
    * El [API de notificaciones de HTML 5](https://developer.mozilla.org/en-US/docs/Web/API/notification)
  * Permitir al usuario administrador visualizar la data de los visitantes, incluyendo la fecha y hora de registro de cada uno
  * Los tests unitarios deben cubrir un mínimo del 70% de statements, functions y lines, y un mínimo del 50% de branches. 
