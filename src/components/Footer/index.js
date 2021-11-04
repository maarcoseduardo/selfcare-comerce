import FacebookIcon from '../../assets/Images/Facebook.svg';
import InstagramIcon from '../../assets/Images/Instagram.svg';
import MasterCardIcon from '../../assets/Images/MasterCard.svg';
import PayPalIcon from '../../assets/Images/PayPal.svg';
import VisaIcon from '../../assets/Images/Visa.svg';

import {
    FooterContainer,
    AreaFooter,
    UnList,
    List,
    Div,
    Paragraph,
    Input,
    Button,
    AreaSocial,
    Nav,
    UnListSocial,
    ListSocial,
    ImgSocial,
    NavPayment,
    UnListPayment,
    ListPayment,
    ImgPayment
} from './styles';

export function Footer() {

    return (
        <FooterContainer>
            <AreaFooter>
                <UnList>
                    <List>Contato</List>
                    <List>Termos de serviço</List>
                    <List>Política de privacidade</List>
                    <List>Cancelamento, troca e reembolso</List>
                </UnList>
                <Div>
                    <Paragraph>NewsLatter</Paragraph>
                    <Input placeholder="Digite seu e-mail" type="e-mail" />
                    <Button>Inscrever</Button>
                </Div>

            </AreaFooter>
            <AreaSocial>
                <Nav>
                    <UnListSocial>
                        <ListSocial><ImgSocial src={InstagramIcon} alt="Icon Instagram" /></ListSocial>
                        <ListSocial><ImgSocial src={FacebookIcon} alt="Icon Facebook" /></ListSocial>
                    </UnListSocial>
                </Nav>
                <NavPayment>
                    <UnListPayment>
                        <ListPayment><ImgPayment src={MasterCardIcon} alt="Icon Instagram" /></ListPayment>
                        <ListPayment><ImgPayment src={PayPalIcon} alt="Icon Instagram" /></ListPayment>
                        <ListPayment><ImgPayment src={VisaIcon} alt="Icon Instagram" /></ListPayment>
                    </UnListPayment>
                </NavPayment>
            </AreaSocial>
        </FooterContainer>
    );
}