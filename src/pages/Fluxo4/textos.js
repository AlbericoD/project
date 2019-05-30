import { Imagem } from './imagens';
export const textos = [
  {
    titulo: 'Integration with Overwolf',
    texto: `Real-time display of streamer location has been added.`,
    imagens: [Imagem.StreamerPath],
    listas: [],
    timeline: 'OverLay Map',
    alt: 'instalacao'
  },
  {
    titulo: 'Installation and Configuration',
    texto: `Adapted to fit the new twitch changes`,
    imagens: [Imagem.config1,Imagem.config2,Imagem.config3,Imagem.config4,],
    listas: [],
    timeline: 'Streamer',
    alt: 'instalacao'
  },
  {
    titulo: 'The Map (Overlay)',
    texto: `Now, each viewer has the right to vote 1x for free, quantities greater than 1 are taxed by bits,and every 500 bits used in the poll, all viewers can vote 1 time for free`,
    imagens: [Imagem.Bits],
    listas: [],
    timeline: 'Viewer',
    alt: 'instalacao'
  },
  {
    titulo: '(API)',
    texto: `Api URL changed to the version v4:
    base uri: https://fortnite-jump-polls.herokuapp.com/api/v4/
    Poll change use PUT method,description of the modified extension, and added support for messages in the chat.
    `,
    imagens: [],
    listas: [],
    timeline: 'General',
    alt: 'instalacao'
  }
];
