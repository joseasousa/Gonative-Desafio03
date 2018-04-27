import Reactotron, {
  trackGlobalErrors,
  openInEditor,
  overlay,
  asyncStorage,
  networking,
} from 'reactotron-react-native';

if (__DEV__) {
  const tron = Reactotron.configure({
    name: 'Desafio03 Maps',
  })
    .use(trackGlobalErrors())
    .use(openInEditor())
    .use(overlay())
    .use(asyncStorage())
    .use(networking())
    .connect();

  global.tron = tron;
}
