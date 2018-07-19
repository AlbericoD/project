import { Imagem } from './imagens';
export const textos = [
  {
    titulo: 'Installation and Configuration',
    texto:
      'In configuration, it is only an instruction manual of the stream of the extension, in the future the streamer will be able to choose to open polls automatically or manually.',
    imagens: [
      Imagem.config_0,
      Imagem.config_1,
      Imagem.config_2,
      Imagem.config_3,
      Imagem.config_4,
      Imagem.config_5,
      Imagem.config_6
    ],
    listas: [],
    timeline: 'Streamer',
    alt: 'instalacao'
  },
  {
    titulo: 'Controlling Poll (Dashboard Live)',
    texto:
      'After reading the instructions in configuration, simply start the poll or close with the buttons: open (green) / close (red) There is also a Poll counter above the buttons.',
    imagens: [Imagem.live_1, Imagem.live_0],
    listas: [
      'Starting Poll (Dashboard Live):',
      ' Always when a poll is started, all previous polls are reset (deleted, removed).',
      'Closing Poll (Dashboard Live): ',
      'When a poll is closed, all viewers are unable to vote, and the extension calculates the radius of 36 m ^ 2 relative to the spatial size of the map that contains the most votes, the calculation is based on the cluster groups that are generated as the interaction increases of votes.\n A = Pi * R^2. **the calculation limit x (x = cluster) is relative to the current cluster with the base zoomed at 0.9 or 1'
    ],
    timeline: 'Streamer',
    alt: 'instalacao'
  },
  {
    titulo: 'The Map (Overlay)',
    texto:
      ' The map has the same experience of interacting in google maps, has markers to choose the point that you would like to win the poll, the map is very accurate, it is based on latitude and longitude coordinate systems:',
    imagens: [
      Imagem.last_season,
      Imagem.current_season,
      Imagem.hide_partial_menu,
      Imagem.hide_menu,
      Imagem.hide_all_menu,
      Imagem.show_only_vote
    ],
    listas: [
      'Controls:',
      '"Zoom": It is possible to use the mouse scroll or the buttons located in the upper left corner to zoom in and out in 7 levels.',
      '"Side, Top, Bottom": It is possible to move in different directions with the drag of the mouse or the buttons, located in the lower right corner.',
      '"Season Versions": It is possible to view the map of the previous season through the layer button located in the upper right corner. by default it has been selected in the most recent season.',
      '"Eye": With this button it is possible to disable the visualization of the controls to better navigate the map.  the layer button located in the upper right corner. ',
      '"CheckBox": Show My Vote: Show your Map Marker. Show Votes: Show all bookmarks in real time if the poll is open. Winner Votes: Displays the poll-winning cluster (group).  the layer button located in the upper right corner. '
    ],
    timeline: 'Viewer',
    alt: 'instalacao'
  },
  {
    titulo: 'Voting (Overlay)',
    texto:
      'To vote is very simple, just drag the marker to the point you want, confirm and ready.',
    imagens: [
      Imagem.open_viewer,
      Imagem.confirm_vote,
      Imagem.confirm_vote2,
      Imagem.confirm_vote3
    ],
    listas: [],
    timeline: 'Viewer',
    alt: 'instalacao'
  },
  {
    titulo: 'Marker Colors (States) (Overlay)',
    texto:
      'To better understand what is happening, the marker is colored differently at certain times.',
    imagens: [Imagem.allmarkers],
    listas: [
      'Colors: ',
      'Red: You can vote',
      'Green: Voting Successful or Already Voted',

      'Black: Something is being processed or some unexpected interaction has been made, if it is the last option, simply click the marker again to return it to red',
      'Blue: Votes from Other People'
    ],
    timeline: 'Viewer',
    alt: 'instalacao'
  },
  {
    titulo: 'Marker Cluster (Cluster) (Overlay)',
    texto:
      'To improve the visualization, when the markers are very close (36 m ^ 2), they are grouped in color circles, the intensity of the color increases as the concentration of nearby markers increases, it is also possible to visualize the number of markers per group. I was able to group and simulate 100,000.00 of markers rendered at the same time by the cluster technique, as the first version, I found it ideal to limit votes to 7,000, I want to observe how my server works with the iterations and see what can be improved to get to ideal real-time iteration.',
    imagens: [
      Imagem.cluster_0,
      Imagem.cluster_1,
      Imagem.cluster_2,
      Imagem.cluster_3,
      Imagem.cluster_4,
      Imagem.cluster_5,
      Imagem.cluster_6,
      Imagem.cluster_7,
      Imagem.cluster_8,
      Imagem.cluster_9,
      Imagem.cluster_10,
      Imagem.cluster_11,
      Imagem.cluster_12,
      Imagem.cluster_13,
      Imagem.cluster_14,
      Imagem.cluster_15,
      Imagem.cluster_16,
      Imagem.cluster_17,
      Imagem.cluster_18,
      Imagem.cluster_19
    ],
    listas: [],
    timeline: 'Viewer',
    alt: 'instalacao'
  },
  {
    titulo: 'Winner Group (Cluster) (Overlay)',
    texto:
      'When the Streamer terminates the poll, a warning appears announcing the poll ending, then the cluster is rendered with the group with the closest proximity to markers.',
    imagens: [Imagem.cluster_close_and_win, Imagem.cluster_win],
    listas: [],
    timeline: 'Viewer',
    alt: 'instalacao'
  },
  {
    titulo: 'Notifications Group(Toast) (Overlay)',
    texto:
      ' Notifications are important to improve viewer feedback, they have twitch emoticons and similar colors to look like something integrated.',
    imagens: [],
    listas: [
      'Types: ',
      'Success',
      'Error',
      'in process',
      'open poll',
      'close poll'
    ],
    timeline: 'Viewer',
    alt: 'instalacao'
  },
  {
    titulo: 'World Button (Overlay)',
    texto:
      'This button controls when the map is visible or not, it has a warning board when the poll is open or closed.',
    imagens: [Imagem.wordbtn, Imagem.wordbtn1],
    listas: [],
    timeline: 'Viewer',
    alt: 'instalacao'
  },
  {
    titulo: 'Cloud services, Votes saved, and more (General)',
    texto:
      'Integration of services, it may occur that the server takes a long time to respond if it is in the heroku cloud state, this usually occurs if the server is stopped for a long time, be aware of this, in case it takes, wait for it to work again.',
    imagens: [],
    listas: [
      'Votes are not stored in database, all information is processed and stored at run time, the server only distributes the requested information.',
      'The only thing stored in the database is the channel that is registered and the configuration for manual polls (there is a feature of automatic polls and keyboard shortcuts in progress)',
      'It is possible that the extension can be adapted to other game titles in battlegrounds or that use maps. ',
      'Any suggestion, or improvement, can get in touch and report, the only thing I find interesting to be aware of is that I am an independent developer, I have architected the flow and coded only with the support of the twitch forum and documentation, possibly there were errors and improvements, so I count on the understanding and help from you, thank you.'
    ],
    timeline: 'General',
    alt: 'instalacao'
  }
];
