import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const QuienesSomos = ({ data }) => {
  const { allImageSharp } = data

  const officeImage = allImageSharp.edges.find(
    n => n.node.fluid.originalName === "oficina.jpg"
  ).node.fluid
  const retro = allImageSharp.edges.find(
    n => n.node.fluid.originalName === "retro_aeropuerto.jpg"
  ).node.fluid

  return (
    <Layout>
      <SEO title="Quienes Somos" />
      <div>
        <div
          id="quienes-somos-container"
          className="h-screen flex justify-center items-center"
        >
          <h1 className="text-3xl md:text-6xl text-white font-bold">
            Quiénes Somos
          </h1>
        </div>
        <div className="w-full flex justify-center ">
          <p className="max-w-md md:max-w-3xl text-xl md:text-3xl font-hairline text-center leading-relaxed my-12 mx-12 md:mx-0">
            Somos una empresa constructora de obras civiles con una profunda y
            real vocación por lo que hacemos, en nuestros{" "}
            {new Date().getFullYear() - 1990} años de existencia no nos hemos
            dedicado a nada más que a satisfacer las necesidades de los clientes
            ejecutando obras de ingeniería, contamos con abundante y eficiente
            maquinaria pesada, apta para ejecutar nuestros contratos, lo que
            redunda en seguridad y economía para los mandantes.
          </p>
        </div>
        <div className="w-full flex justify-center flex-col md:flex-row-reverse">
          <div className="w-full md:w-1/2">
            <Img
              fluid={retro}
              objectFit="cover"
              objectPosition="50% 50%"
              alt="retro"
              loading="eager"
              className="w-full h-full overflow-hidden rounded-t-md md:rounded-t-none md:rounded-r-md "
            />
          </div>
          <div className="w-full md:w-1/2 bg-gray-300 p-6">
            <p className="mb-6 mr-6 leading-7">
              Constructora Mauricio Levy, es una empresa contratista que inició
              sus operaciones en junio de 1990, ejecutando primeramente
              movimientos de tierra hasta adjudicarse su primera obra pública en
              marzo de 1992 consistente en la Pavimentación de la Avda. Los
              Orientales y las calles de la Unidad Vecinal N°15 de la comuna de
              Peñalolén.
            </p>
            <p className="mb-6 mr-6 leading-7">
              Desde esa fecha han ejecutado más de 40 obras civiles y de
              urbanización, de diferente índole, cumpliendo cabalmente con
              entregar obras de excelente calidad, en los plazos estipulados,
              cumpliendo plenamente con las Bases Administrativas y las
              Especificaciones Técnicas de todos los contratos.
            </p>
            <p className="mb-6 mr-6 leading-7">
              Dentro de las obras destacan la Plantas de Tratamiento de Aguas
              Servidas de San Fernando, Purranque, Quepe, Los Sauces, Diego de
              Almagro, Alto Hospicio. Colectores de Alcantarillado de Aguas
              Servidas en Longaví, Quepe, Los Sauces, Diego de Almagro, Redes de
              Agua Potable en Freirina incluyendo la nueva Aducción
              Vallenar-Freirina-Huasco, Redes en el Parque Metropolitano,
              Traslado de 2,5 km de la Aducción Canchones-Iquique en Alto
              Hospicio, Colectores de Aguas Lluvia (J.J. Pérez Cerro Navia),
              Colector Ruta G-68 Padre Hurtado, Remodelaciones urbanas como la
              Gestión de Tránsito de Macul, los Paseos Estado y Puente, además
              de la remodelación del Bandejón Central y las veredas de la Avda.
              Bernardo O’Higgins en la comuna de Santiago, la Avda. Pocuro
              incluyendo la Plaza Rio de Janeiro en Providencia, Av. Camino el
              Alba y Apoquindo en Las Condes, La Avda. Pajaritos en Estación
              Central, Av. Isabel Riquelme, Maipú, Av. Paicaví entre Av. Los
              Carrera y la Pza. Perú en Concepción, Av. Ruiz de Gamboa Chillán,
              Av. Almirante Riveros San Bernardo, Parte del Cilopaseo 42 k tramo
              Quinta Normal, Los puentes de Vasconia y Pedro de Valdivia en
              Macul, 2 Puentes Sobre el Zanjón de la Aguada en Maipú, Paso Sobre
              Nivel Hospital, Paine, Urbanización de la Caleta Tubul en Arauco,
              las Poblaciones La Negra y El Boro en Alto Hospicio, el Loteo
              Puerto Seco, y las Villas Peuco 1, 2 y Maratón en Calama,
              urbanización de 6 Poblaciones en San Ignacio, Comuna de Padre
              Hurtado, la pavimentación de las Pistas de Rodado y un colector de
              Aguas Lluvia del Aeropuerto Internacional AMB de Santiago, el
              Saneamiento del Vertedero La Cañamera de Puente Alto, etc.
            </p>
          </div>
        </div>
        <div className="w-full h-full flex justify-center items-center py-10 md:py-0 md:px-40">
          <div className="flex flex-col-reverse w-10/12 md:w-full md:py-96 md:my-32 md:flex-row justify-center items-center bg-gray-200 shadow-2xl rounded-md">
            <div className="w-full h-full px-10 my-12 md:my-0 md:px-40 flex justify-center items-center md:rounded-l-md">
              <p className="text-center max-w-md md:text-2xl w-full">
                Estamos radicados desde septiembre de 1994 en nuestra actual
                dirección de la comuna de Las Condes, Calle Napoleón N°3010,
                sirviendo a la comunidad y a nuestros mandantes con el máximo
                profesionalismo.
              </p>
            </div>
            <div className="w-full md:w-5/12 h-full overflow-hidden">
              <Img
                fluid={officeImage}
                objectFit="cover"
                objectPosition="50% 50%"
                alt="oficina"
                loading="eager"
                className="w-full h-full overflow-hidden rounded-t-md md:rounded-t-none md:rounded-r-md "
              />
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default QuienesSomos

export const query = graphql`
  {
    allImageSharp {
      edges {
        node {
          id
          fluid(maxWidth: 1000, maxHeight: 1000) {
            originalName
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`
