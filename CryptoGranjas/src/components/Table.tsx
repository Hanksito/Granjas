import styled from 'styled-components';
import { Machine } from './Card';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: Machine[]; 
}

const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.2);
  padding: 20px;
  width: 90%;
  max-height: 90vh;
  overflow-y: auto;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  /* Añade un margen superior para alejarlo de la parte superior */
  margin-top: 20px; /* Puedes ajustar este valor según tus necesidades */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

const Th = styled.th`
  background-color: #f2f2f2;
  padding: 8px;
  text-align: left;
`;

const Td = styled.td`
  padding: 8px;
  border-bottom: 1px solid #ddd;
`;

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, data }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <ModalWrapper>
      <ModalContent>
        <CloseButton onClick={onClose}>&times;</CloseButton>
        <Table>
          <thead>
            <tr>
              <Th>ID</Th>
              <Th>Modelo</Th>
              <Th>Número de Serie</Th>
              <Th>Usuario</Th>
              <Th>Wallet</Th>
              <Th>Pool</Th>
            </tr>
          </thead>
          <tbody>
            {data.map((machine) => (
              <tr key={machine.id}>
                <Td>{machine.id}</Td>
                <Td>{machine.model}</Td>
                <Td>{machine.serialNumber}</Td>
                <Td>{machine.user}</Td>
                <Td>{machine.wallet}</Td>
                <Td>{machine.pool}</Td>
              </tr>
            ))}
          </tbody>
        </Table>
      </ModalContent>
    </ModalWrapper>
  );
};

export default Modal;