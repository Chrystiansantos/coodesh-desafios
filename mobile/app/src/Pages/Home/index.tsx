import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Alert } from 'react-native';

import { Card } from '../../components/Card';
import { Filters } from '../../components/Filters';
import { Header } from '../../components/Header';
import { ModalComponent } from '../../components/Modal';
import { IUser } from '../../dtos/IUserDTO';

import { Container, CardBox, List, FooterHome } from './styles';
import { api } from '../../services/api';
import { Loading } from '../../components/Loading';

export function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [userList, setUserList] = useState<IUser[]>([]);
  const [userListRender, setUserListRender] = useState<IUser[]>([]);
  const [userSelect, setUserSelect] = useState<IUser>({} as IUser);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const { colors } = useTheme();

  useEffect(() => {
    async function getUserList() {
      try {
        const { data } = await api.get(
          // `/?page=${page}&results=50&seed=abc&inc=gender,name,picture,email,dob,phone,location,login`,
          `/?page=${page}&results=1&seed=abc&inc=gender,name,picture,email,dob,phone,location,login`,
        );
        const dataFormat: IUser[] = data.results.map(el => ({
          id: el.login.uuid,
          photo: el.picture.large,
          name: `${el.name.title} ${el.name.first} ${el.name.last}`,
          email: el.email,
          sex: el.gender === 'male' ? 'male' : 'female',
          birthDate: new Intl.DateTimeFormat('pt-BR').format(
            new Date(el.dob.date),
          ),
          phone: el.phone,
          nationality: el.location.country,
          address: `${el.location.city} - ${el.location.country} - ${el.location.street.name}`,
        }));
        const arrayFormated = [...userList, ...dataFormat];
        setUserList(arrayFormated);
        setUserListRender(arrayFormated);
      } catch (error) {
        Alert.alert('Ocorreu um erro tento novamente 🙂');
      }
    }

    getUserList();
  }, [page]);

  useEffect(() => {
    if (search) {
      const userListFilter = userList.filter(el => el.name.includes(search));
      setUserListRender(userListFilter);
      return;
    }
    setUserListRender(userList);
  }, [search, userList]);

  function nextPage() {
    if (!search) {
      setPage(oldValue => oldValue + 1);
    }
  }

  return (
    <Container>
      <Header />
      <Filters setSearch={setSearch} searchValue={search} />
      <CardBox>
        <List
          data={userListRender}
          renderItem={({ item }) => (
            <Card
              data={item}
              selectUser={setUserSelect}
              openModal={setOpenModal}
            />
          )}
          keyExtractor={item => String(item.id)}
          ListFooterComponent={!search && <Loading />}
          // eslint-disable-next-line react/jsx-no-bind
          onEndReached={nextPage}
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
