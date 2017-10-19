import Colors from './BaseColors';

const navigationBg = {
  backgroundImage: 'url("/images/navigation/amazon-forest/forest.jpg")',
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover'
};

const pageHeader = {
  margin: 0,
  padding: 0,
  fontWeight: 'bold',
  fontSize: 36,
  color: Colors.black
};

const section = {
  width: 360,
  float: 'left',
  margin: 20,
  marginTop: 0
};

const image = {
  width: '100%',
  height: 'auto',
  padding: 30,
  paddingTop: 0,
  opacity: 0.7
};

const linkList = {
  paddingTop: 10,
  paddingLeft: 10
};

const link = {
  paddingRight: 10,
  textDecoration: 'underline',
  cursor: 'pointer'
};

export default {
  navigationBg,
  pageHeader,
  section,
  image,
  link,
  linkList
};
