import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');
  const [validacion, setValidacion] = useState(true);

  const expresionRegularEmail = new RegExp(/^(([^<>()\[\]\\.,;:\s@”]+(\.[^<>()\[\]\\.,;:\s@”]+)*)|(“.+”))@((\[[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}\.[\d]{1,3}])|(([a-zA-Z\-[\d]]+\.)+[a-zA-Z]{2,}))$/);
  const expresionRegularDni = new RegExp(/^\d{8}(?:[-\s]\d{4})?$/);

  const handleChange = (e) => {
    e.preventDefault()
    setNombre('')
    setApellido('')
    setDni('')
    setEmail('')
    setValidacion(false)

    Swal.fire('Los datos fueron guardados con exitos')
  }

  const validarNombre = (nombre) => {
    if (nombre > 2 && nombre <= 40) {
      setValidacion(true)
    } else {
      setValidacion(false)
    }
  }

  const validarApellido = (apellido) => {
    if (apellido > 2 && apellido < 40) {
      setValidacion(true)
    } else {
      setValidacion(false)
    }
  }

  const validarDni = (dni) => {
    if (expresionRegularDni.test(dni)) {
      setValidacion(true)
    } else {
      setValidacion(false)
    }
  }

  const validarEmail = (email) => {
    if (expresionRegularEmail.test(email)) {
      setValidacion(true)
    } else {
      setValidacion(false)
    }
  }

  return (
    <>
      <h1>Formulario</h1>
      <hr />
      <Form onSubmit={handleChange}>
        <Form.Group className="mb-3" controlId="formNombre">
          <Form.Label>Nombre</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese un nombre"
            isInvalid={validacion}
            onBlur={validarNombre}
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
            <Form.Control.Feedback type="invalid">
              Ingresa un Nombre
            </Form.Control.Feedback>

        </Form.Group>
        <Form.Group className="mb-3" controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese un apellido"
            isInvalid={validacion}
            onBlur={validarApellido}
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
          <Form.Control.Feedback type="invalid">
              Ingresa un Apellido
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContraseña">
          <Form.Label>Dni</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Dni"
            isInvalid={validacion}
            onBlur={validarDni}
            onChange={(e) => setDni(e.target.value)}
            value={dni}
          />
          <Form.Control.Feedback type="invalid">
              Ingresa un Dni
            </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Ingrese un email"
            isInvalid={validacion}
            onBlur={validarEmail}
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          <Form.Control.Feedback type="invalid">
              Ingresa un Email
            </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Formulario
