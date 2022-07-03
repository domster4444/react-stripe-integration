import React from 'react';
import { Container, FormBox } from './ActivateAccount.style';
import Text from 'components/Text';
import { PrimaryButton } from 'components/Button/Button';
import { useParams } from 'react-router-dom';
import { useCreateVerifiedEmailUserMutation } from 'redux/api/auth/authenticationApi';
import { toast } from 'react-toastify';

const Index = () => {
  const [createVerifiedEmailUser, { isLoading }] =
    useCreateVerifiedEmailUserMutation();
  const { token } = useParams();
  const submitHandler = async (e: any) => {
    e.preventDefault();
    const dataToSend = {
      token: token,
    };
    const res = await createVerifiedEmailUser(dataToSend);
    console.log(res);
    if (res.error) {
      toast.error(res.error.data.message);
    }
    if (res.data) {
      toast.success(res.data.message);
    }
  };

  return (
    <main>
      <Container>
        <FormBox onSubmit={submitHandler}>
          {isLoading && <h1>LOADING</h1>}
          <Text>Click Below Button To Activate Your Account </Text>

          <PrimaryButton> Verify </PrimaryButton>
        </FormBox>
      </Container>
    </main>
  );
};

export default Index;
