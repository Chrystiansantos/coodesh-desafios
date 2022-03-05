import React, { useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';

import { useTheme } from 'styled-components';
import { Card } from '../../components/Card';
import { Filters } from '../../components/Filters';
import { Header } from '../../components/Header';
import { ModalComponent } from '../../components/Modal';
import { IUser } from '../../dtos/IUserDTO';

import { Container, CardBox, List, FooterHome } from './styles';

export function Home() {
  const DATA = [1, 2, 3, 4, 5, 6];
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [userSelect, setUserSelect] = useState<IUser>({} as IUser);
  const { colors } = useTheme();
  return (
    <Container>
      <Header />
      <Filters />
      <CardBox>
        <List
          data={DATA}
          renderItem={() => (
            <Card
              data={userSelect}
              selectUser={setUserSelect}
              openModal={setOpenModal}
            />
          )}
          keyExtractor={item => String(item)}
        />
      </CardBox>
      <FooterHome>
        <MaterialIcons name="home-filled" size={40} color={colors.blue_002} />
      </FooterHome>
      <ModalComponent
        open={openModal}
        changeStatusModal={setOpenModal}
        user={userSelect}
      />
    </Container>
  );
}
