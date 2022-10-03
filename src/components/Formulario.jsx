import { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import Swal from 'sweetalert2'
const Formulario = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [dni, setDni] = useState('');
  const [email, setEmail] = useState('');

  const handleChange = (e) => {
    e.preventDefault()
    setNombre('')
    setApellido('')
    setDni('')
    setEmail('')

    Swal.fire('Los datos fueron guardados con exitos')
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
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formApellido">
          <Form.Label>Apellido</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Ingrese un apellido"
            onChange={(e) => setApellido(e.target.value)}
            value={apellido}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formContraseña">
          <Form.Label>Dni</Form.Label>
          <Form.Control
            required
            type="number"
            placeholder="Dni"
            onChange={(e) => setDni(e.target.value)}
            value={dni}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Ingrese un email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </Form.Group>
        <Button variant="success" type="submit">
          Submit
        </Button>
      </Form>
    </>
  )
}

export default Formulario
