import QrCodeImage from "../images/image-qr-code.png";

import Container from './Container';
import Text from './Text';
import Image from './Image';

function App() {
  return (
    <div className="App">
      <Container>
        <Image src={QrCodeImage} alt="QrCode" />
        <Text as="h2">
          Improve your frontend skills by building projects.
        </Text>
        <Text as="p">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </Text>
      </Container>
    </div>
  );
}

export default App;
