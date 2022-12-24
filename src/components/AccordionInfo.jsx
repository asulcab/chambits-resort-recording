import React from "react";
import styled from "styled-components";

import Accordion from "./Accordion";
import StyledIcon from "./Accordion/StyledIcon";

import "./Accordion/styles.css";

const StyledAccordionWrapper = styled(Accordion.AccordionItem)`
  background-color: white;
  border-radius: 4px;
  box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.16);
`;

const StyledAccordionHeader = styled(Accordion.AccordionHeader)`
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StyledAccordionContent = styled(Accordion.AccordionContent)`
  display: flex;
`;

const Lista = styled.li`
  // list-style-type: none;
  // &:before {
  //   content: "-";
  //   margin-right: 15px;
  //   color: red;
  // };
  // display: flex;
`;

class AccordionInfo extends React.Component {

state = {
    currentlyOpened: [],
    list: [
      {
        title: 'Condiciones previas al servicio',
        listContent: [
          'El lugar de instalación debe contar con espacio libre de 3m x 3m, mínimo.',
          'Si no cuentas con el espacio. Puedes contratar a un técnico adicional.',
          'El producto debe encontrarse sellado, en el empaque original y ubicado en la posición final en donde se realizará el armado.'
        ]
      },
      {
        title: 'Servicio no Incluye',
        listContent: [
          'Instalación de accesorios que no formen parte del kit del producto.',
          'Modificación de muebles, la instalación se basa en el diseño del producto original.',
        ]
      },
      {
        title: 'Medios de pago',
        listContent: [
          'En efectivo o por medio del aplicativo Yape.',
          // 'Ver términos y condiciones del servicio de armado e instalación.'
        ]
      },
      {
        title: 'Cobertura',
        listContent: [
          'Nuestra atención está centralizada en el distrito de Huancayo.',
          'Hay un costo adicional en el servicio para las provincias y los distritos aledaños, según la distancia (consultar tarifa).'
        ]
      },
      {
        title: '¿Cómo adquiero el servicio?',
        listContent: [
          'Recuerda que puedes contratar nuestro servicio a través de nuestra página web o comunicándote a nuestro número telefónico 980-895-124.'
        ]
      }
    ].map((item, index) => ({i: item.title, lis: Object.values(item.listContent).map(item=>(item))}))
  };
  onAccordionHeaderClick = () => {};
  render() {
    const { currentlyOpened, list, listContent} = this.state;

    
    return (
      <div className="containerAccordion">
        <div className="containerInfo">
        <h3>
          Importante
        </h3>
        <Accordion.AccordionGroup currentlyOpened={currentlyOpened}>
          {list.map((item, index) => (
            <StyledAccordionWrapper key={item.i} id={item.i}>
              <StyledAccordionHeader>
                {accordionOpen => (
                  <React.Fragment>
                    <h6 style={{ margin: 16, fontWeight: 500 }}>{item.i}</h6>
                    <StyledIcon
                      iconName="keyboard_arrow_down"
                      open={accordionOpen}
                    />
                  </React.Fragment>
                )}
              </StyledAccordionHeader>
              <StyledAccordionContent >
                <ul className="ul">                  
                  {item.lis.map((item, index) => (
                    <li key={item}>{item}</li>
                  ))}                  
                </ul>
              </StyledAccordionContent>
            </StyledAccordionWrapper>
          ))}
        </Accordion.AccordionGroup>
        </div>
      </div>
    );
  }
}

export default AccordionInfo;
