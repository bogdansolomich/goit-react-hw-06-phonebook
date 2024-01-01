import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { ContactFilter } from './ContactFilter/ContactFilter';
import {
  StyledSection,
  SectionTitle,
  ContactsTitle,
} from './styles/Section.styled';
import { GlobalStyle } from './styles/Globalstyle';
import { Container } from './styles/Container';

export const App = () => {
  return (
    <>
      <StyledSection>
        <Container>
          <SectionTitle>Phonebook</SectionTitle>
          <ContactForm />
        </Container>
      </StyledSection>

      <StyledSection>
        <Container>
          <ContactsTitle>Contacts</ContactsTitle>
          <ContactFilter />
          <ContactList />
        </Container>
      </StyledSection>
      <GlobalStyle />
    </>
  );
};
