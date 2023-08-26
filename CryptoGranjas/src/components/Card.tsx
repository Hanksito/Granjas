import { useState } from 'react';
import styled from 'styled-components';
import Modal from './Table';

export interface Machine {
  id: number;
  model: string;
  serialNumber: string;
  user: string;
  wallet: string;
  pool: string;
}
interface Hosting {
  id: number;
  img: string;
  granja: string;
  propietario: string;
  direccion: string;
  Machines: Machine[];
}

const CardWrapper = styled.div`
 background-color: #c1bbbbef;
  text-align: center;
  width: 30%;
  min-width: 200px;
  max-width: 450px;
  border: 2px solid rgba(111, 108, 108, 0.5);
  border-radius: 8px;
  padding: 16px;
  margin: 16px;
  transition: transform 0.2s ease;
  &:hover {
    transform: scale(1.05);
  }
`;

const CardImage = styled.img`
  max-width: 100%;
  object-fit: contain;
  height: auto;
  border-radius: 8px;
  max-height: 200px;
`;

const CardTitle = styled.h2`
  margin-top: 10px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Card: React.FC<Hosting> = (props) => {
  const imgPred ="https://www.terabyte2003.com/wp-content/uploads/2018/04/criptomoneda-1170x882.png"
  const {img, granja, propietario, direccion, Machines} = props
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal isOpen={isModalOpen} onClose={closeModal} data={Machines} />
      <CardWrapper onClick={openModal}>
        <CardImage src={img ? img : imgPred} alt={granja} />
        <CardTitle>{granja}</CardTitle>
        <p>{propietario}</p>
        <p>{direccion}</p>
      </CardWrapper>
    </>
  );
};

export default Card;