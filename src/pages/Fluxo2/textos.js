import { Imagem } from './imagens';
export const textos = [
  {
    titulo: 'Installation and Configuration',
    texto:
      'Change in texts, images and colors to stay clearer, also solved the problem with delayed ajax.',
    imagens: [
      Imagem.streamer1,
      Imagem.streamer2,
      Imagem.streamer3,
      Imagem.streamer4,
      Imagem.streamer5,
      Imagem.streamer6,
      Imagem.streamer7
    ],
    listas: [],
    timeline: 'Streamer',
    alt: 'instalacao'
  },
  {
    titulo: 'Controlling Poll (Dashboard Live)',
    texto: 'Added exact location with most votes, based on GEOJSON',
    imagens: [Imagem.liveConfig1, Imagem.liveConfig2, Imagem.liveConfig3],
    listas: [],
    timeline: 'Streamer',
    alt: 'instalacao'
  },
  {
    titulo: 'The Map (Overlay)',
    texto:
      ' Removed, Votes by bookmarks, clusters. Added: Votes by region. Added: GEOJSON to fortnite',
    imagens: [Imagem.gif, Imagem.gif1],
    listas: [],
    timeline: 'Viewer',
    alt: 'instalacao'
  },
  {
    titulo: '(General)',
    texto:
      'Added fonts for the fortnite style Changed SKU product for development = false Changes ScreenShots.',
    imagens: [],
    listas: [
      'Votes are  stored in database.',
      'Any suggestion, or improvement, can get in touch and report, the only thing I find interesting to be aware of is that I am an independent developer, I have architected the flow and coded only with the support of the twitch forum and documentation, possibly there were errors and improvements, so I count on the understanding and help from you, thank you.'
    ],
    timeline: 'General',
    alt: 'instalacao'
  }
];
