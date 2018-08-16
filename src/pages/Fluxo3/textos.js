import { Imagem } from './imagens';
export const textos = [
  {
    titulo: 'Integration with Overwolf',
    texto: `The extension has been integrated with overwolf's twitch game events, it is now possible to choose between automatic and manual polls as long as the streamer installs the twitch game events app. Added 1 (one) link to download the twitch game events app from overwolf, open in another tab`,
    imagens: [Imagem.overwolf],
    listas: [],
    timeline: 'General',
    alt: 'instalacao'
  },
  {
    titulo: 'Installation and Configuration',
    texto: `Changed the initial setup page to streamer, there is no need to store the information to streamer, everything is checking by token, the page now explains the stream of the extension`,
    imagens: [Imagem.setupPage],
    listas: [],
    timeline: 'Streamer',
    alt: 'instalacao'
  },
  {
    titulo: 'Controlling Poll (Dashboard Live)',
    texto: `Changed the live config page to adapt to overwolf integration, now there is a flag showing sync with overwolf`,
    imagens: [Imagem.liveConfig1, Imagem.liveConfig2],
    listas: [],
    timeline: 'Streamer',
    alt: 'instalacao'
  },
  {
    titulo: 'The Map (Overlay)',
    texto: `Adapted colors to get closer to the colors of the twitch, added a winner flag equal to the fortnite game`,
    imagens: [Imagem.streamer1, Imagem.streamer2],
    listas: [],
    timeline: 'Viewer',
    alt: 'instalacao'
  },
  {
    titulo: '(General)',
    texto: `This update is part of the challenge of contraction and overwolf is an initial part of the integration and improvements requested by streamers. added new images and changed the logo `,
    imagens: [],
    listas: [],
    timeline: 'General',
    alt: 'instalacao'
  }
];
