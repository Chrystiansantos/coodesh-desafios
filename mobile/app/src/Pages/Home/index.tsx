import React, { useEffect, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import { useTheme } from 'styled-components';
import { Alert, StyleSheet, Text } from 'react-native';

import { Popover, usePopover } from 'react-native-modal-popover';
import { Card } from '../../components/Card';
import { Filters } from '../../components/Filters';
import { Header } from '../../components/Header';
import { ModalComponent } from '../../components/Modal';
import { IUser } from '../../dtos/IUserDTO';

import { Container, CardBox, List, FooterHome } from './styles';
import { api } from '../../services/api';
import { Loading } from '../../components/Loading';
import { FiltersSex } from '../../components/FiltersSex';

interface ISex {
  male: boolean;
  female: boolean;
}

export function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [userList, setUserList] = useState<IUser[]>([]);
  const [userListRender, setUserListRender] = useState<IUser[]>([]);
  const [userSelect, setUserSelect] = useState<IUser>({} as IUser);
  const [search, setSearch] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [sex, setSex] = useState<ISex>({ female: true, male: true } as ISex);
  const { colors } = useTheme();

  const {
    openPopover,
    closePopover,
    popoverVisible,
    touchableRef,
    popoverAnchorRect,
  } = usePopover();

  async function getUserList() {
    try {
      let changeSexo = false;
      let url =
        // eslint-disable-next-line no-template-curly-in-string
        `/?results=50&page=${page}&inc=gender,name,picture,email,dob,phone,location,login`;
      if (!sex.female || !sex.male) {
        changeSexo = true;
        if (sex.female) url += '&gender=female';
        if (sex.male) url += '&gender=male';
      }
      const { data } = await api.get(url);
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
      if (changeSexo) {
        setUserList(dataFormat);
        setUserListRender(dataFormat);
        return;
      }
      const arrayFormated = [...userList, ...dataFormat];
      setUserList(arrayFormated);
      setUserListRender(arrayFormated);
    } catch (error) {
      console.log(error);
      Alert.alert('Ocorreu um erro tento novamente 🙂');
    }
  }

  useEffect(() => {
    getUserList();
  }, [page]);

  useEffect(() => {
    if (search) {
      const userListFilter = userList.filter(el =>
        el.nationality.includes(search),
      );
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

  function selectSex(data: 'female' | 'male') {
    const sexFemaleChanged = !(data === 'female' && sex.female);
    const sexMaleChanged = !(data === 'male' && sex.male);
    setSex({
      female: sexFemaleChanged,
      male: sexMaleChanged,
    });
  }

  function handleClosePopover() {
    setUserList([]);
    setUserListRender([]);
    getUserList().then(result => closePopover());
  }

  return (
    <Container>
      <Header />
      <Filters
        setSearch={setSearch}
        searchValue={search}
        refPopover={touchableRef}
        onPressPopover={openPopover}
      />
      <Popover
        backgroundStyle={{ backgroundColor: 'rgba(14, 14, 16, 0.5)' }}
        visible={popoverVisible}
        // eslint-disable-next-line react/jsx-no-bind
        onClose={handleClosePopover}
        fromRect={popoverAnchorRect}
        placement="bottom"
        supportedOrientations={['portrait', 'landscape']}
      >
        {/* eslint-disable-next-line react/jsx-no-bind */}
        <FiltersSex sex={sex} selectSex={selectSex} />
      </Popover>
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
          // onEndReached={nextPage}
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
