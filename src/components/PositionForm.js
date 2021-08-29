import React from "react"
import Modal from "./modal"
import StyledInput from "../components/StyledInput"
import Button from "../components/button"

const PositionForm = ({ onClose, position }) => {
  return (
    <Modal>
      <div className="flex justify-center items-center overflow-y-hidden  ">
        <div className="h-full max-w-6xl bg-gray-100 rounded-md p-5">
          <div>
            <form
              method="post"
              action="https://www.flexyform.com/f/0afa15e71d42d75b565502b5986ce42559a3ffd2"
            >
              <div className="flex justify-center mb-5 border-b-2 border-gray-300">
                <h1 className="text-2xl md:text-4xl">Postula a este cargo</h1>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <div>
                    <label htmlFor="cargo">Cargo</label>
                    <StyledInput
                      type="text"
                      name="cargo"
                      id="cargo"
                      readonly
                      value={position}
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="prefesion">Profesión</label>
                    <StyledInput
                      type="text"
                      name="prefesion"
                      id="prefesion"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="calificaciones">Calificaciones</label>
                    <StyledInput
                      type="text"
                      name="calificaciones"
                      id="calificaciones"
                      style={{ height: "7rem" }}
                      required
                      textArea={true}
                      rows={5}
                      className="flex"
                    />
                  </div>
                  <div>
                    <label htmlFor="experiencia">Experiencia</label>
                    <StyledInput
                      type="text"
                      name="experiencia"
                      id="experiencia"
                      style={{ height: "7rem" }}
                      required
                      textArea={true}
                      rows={5}
                      className="flex"
                    />
                  </div>
                </div>
                <div>
                  <div>
                    <label htmlFor="nombre">Nombre completo</label>
                    <StyledInput
                      type="text"
                      name="nombre"
                      id="nombre"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email">Correo Electrónico</label>
                    <StyledInput type="email" name="email" required />
                  </div>
                  <div>
                    <label htmlFor="teléfono">Número de teléfono</label>
                    <StyledInput type="text" name="teléfono" required />
                  </div>
                  <div className="items-stretch h-full">
                    <label htmlFor="mensaje">CV</label>
                    <StyledInput type="file" name="cv" required />
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between mt-2">
                <Button onClick={onClose} color="gray">
                  Cerrar
                </Button>
                <Button type="submit" color="yellow">
                  Enviar
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Modal>
  )
}

export default PositionForm
