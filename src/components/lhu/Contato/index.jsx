import { useState } from "react";
import { FormControl, Input, Button, Box, Flex, FormHelperText, Textarea, Heading, FormLabel, Switch, Text } from "@chakra-ui/react";
import { useForm} from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import "yup-phone";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

const schema = yup.object({
  name: yup.string().required('Nome completo é obrigatório!'),
  email: yup.string().required('E-mail é obrigatório').email('E-mail inválido'),
  phone: yup.string().phone('BR', false, 'Telefone é obrigatório - DD+Números').required('aa de telefone inválido'),
  assunto: yup.string().required('O assunto é obrigatório!'),
  text: yup.string().required('Mensagem é obrigatório!'),
  contact_email_alerts: yup.string().notRequired(),
  contact_alerts_politic: yup.string().notRequired(),
}).required();

export default function Contato() {
  const initialValues = {
    name: '',
    email: '',
    phone: '',
    text: '',
    contact_email_alerts: false,
    contact_alerts_politic: false,
  }

  const [ initialValue, setInitialValue ] = useState(initialValues);


  const { register, handleSubmit, formState } = useForm({
    mode: 'onTouched',
    reValidateMode: 'onSubmit',
    resolver: yupResolver(schema),
    defaultValues: initialValue,
  });

  const { errors } = formState;

  const notify = () => toast.success('Enviado com sucesso', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    });;

  const onSubmit = (values) => {
    console.log('Values::::', values);
  }

  const onError = (error) => {
    console.log("Error:::::::", error);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_EMAILJS_USER_ID)
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      
      e.target.reset();
    };

  return (
    <Flex w='100%' align='center' justify='center'>
      <Flex
        w='100%'
        align='center'
        justify='center'
        py={[24, 24, 28, 32]}
        px={[4, 6, 6, 10]}
        maxWidth={1480}
        flexDirection='column'
      >
        <Flex
          w={['100%','80%', '80%', '50%']}
          align='center'
          justify='center'
          borderRadius={4}
          bg='gray.200'
          py={[8, 14]}
          flexDirection='column'
        >
          <Heading color='red.650' pb={8}>Contato</Heading>
          <Box w='90%' flex='1'>
            <form ref={form} onSubmit={sendEmail}>
              <FormControl>
                <Input
                  focusBorderColor="red.650"
                  bgColor="gray.50"
                  size="lg"
                  id='name'
                  name='name'
                  placeholder='Nome Completo'
                  type='name'
                  {...register('name')}
                />
                {errors && errors.name && (
                  <FormHelperText color="red" pl={1}>
                    {errors.name.message && errors.name.message}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl>
                <Input
                  focusBorderColor="red.650"
                  mt={[4,8]}
                  bgColor="gray.50"
                  size="lg"
                  placeholder='E-mail'
                  id='email'
                  name='email'
                  type='email'
                  {...register('email')}
                />
                {errors && errors.email && (
                  <FormHelperText color="red" pl={1}>
                    {errors.email.message && errors.email.message}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl>
                <Input
                  mt={[4,8]}
                  focusBorderColor="red.650"
                  bgColor="gray.50"
                  placeholder='Telefone'
                  size="lg"
                  id='phone'
                  name='phone'
                  type='phone'
                  {...register('phone')}
                />
                {errors && errors.phone && (
                  <FormHelperText color="red" pl={1}>
                    {errors.phone.message && errors.phone.message}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl>
                <Input
                  focusBorderColor="red.650"
                  mt={[4,8]}
                  bgColor="gray.50"
                  size="lg"
                  placeholder='Assunto'
                  id='assunto'
                  name='assunto'
                  type='assunto'
                  {...register('assunto')}
                />
                {errors && errors.assunto && (
                  <FormHelperText color="red" pl={1}>
                    {errors.assunto.message && errors.assunto.message}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl>
                <Textarea
                  mt={[4,8]}
                  resize='none'
                  focusBorderColor="red.650"
                  bgColor="gray.50"
                  placeholder='Digite a sua mensagem'
                  size="lg"
                  id='text'
                  name='text'
                  type='text'
                  {...register('text')}
                />
                {errors && errors.text && (
                  <FormHelperText color="red" pl={1}>
                    {errors.text.message && errors.text.message}
                  </FormHelperText>
                )}
              </FormControl>

              <FormControl mt={8} display='flex' alignItems='center'>
                <Switch
                  id='contact_email_alerts'
                  colorScheme='green'
                  mr={4}
                  name='contact_email_alerts'
                  type='text'
                  {...register('contact_email_alerts')}
                />
                <FormLabel htmlFor='contact_email_alerts' mb='0'>
                  Aceito receber e-mails.
                </FormLabel>
              </FormControl>

              <FormControl my={4} display='flex' alignItems='center'>
                <Switch
                  id='contact_alerts_politic'
                  colorScheme='green'
                  mr={4}
                  name='contact_alerts_politic'
                  type='text'
                  {...register('contact_alerts_politic')}
                />
                <FormLabel htmlFor='contact_alerts_politic' mb='0'>
                  Li e aceito os termos de <Text
                  as='a'
                  target='_blank'
                  href='/politica_de_privacidade_mitrione&Luckezzi.pdf'
                  display='inline-block'
                  fontWeight='bold'
                  color='red.650'
                >Política de Privacidade.</Text>
                </FormLabel>
              </FormControl>  

              <Button
                onClick={notify}
                mt={8}
                w='100%'
                colorScheme='teal'
                type='submit'
                isLoading={formState.isSubmitting}
              >
                Enviar
              </Button>
              <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                />
                {/* Same as */}
                <ToastContainer />
            </form>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  );
}