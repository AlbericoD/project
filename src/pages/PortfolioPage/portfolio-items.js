import React from 'react';

export default [
  {
    name: 'Fortnite Jump Poll',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>Battle Royale - Jump Poll</div>
        <div className='portfolio-item__desc'>
          Extensions are interactive web apps that run on a broadcaster’s channel, either overlaying
          the video or below it in panels
        </div>
        <div className='portfolio-item__icon'>
          <i className='fab fa-twitch' />
          <i className='fab fa-react' />
          <i className='fab fa-node' />
          <i className='fas fa-database' />
          <i className='fab fa-aws' />
        </div>
        <div className='portfolio-item__links'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.twitch.tv/ext/hecb122wgtrzumrv9ywwjn7wg6nglq'>
            Twitch
          </a>
        </div>
      </div>
    )
  },
  {
    name: 'read-translate-write',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>R T W</div>
        <div className='portfolio-item__desc'>reading files, translation, recording files</div>
        <div className='portfolio-item__icon'>
          <i className='fab fa-js' />
          <i className='fab fa-node' />
          <i className='fab fa-npm' />
        </div>
        <div className='portfolio-item__links'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://www.npmjs.com/package/read-translate-write'>
            NPM
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/AlbericoD/Read-Translate-Write'>
            More
          </a>
        </div>
      </div>
    )
  },
  {
    name: 'twitch-extension-analyze',
    render: (
      <div className='portfolio-item'>
        <div className='portfolio-item__title'>Twitch Extension Analyze</div>
        <div className='portfolio-item__desc'>
          Statistical data viewer of twitch extensions online.
        </div>
        <div className='portfolio-item__icon'>
          <i className='fab fa-twitch' />
          <i className='fab fa-react' />
          <i className='fas fa-chart-line' />
        </div>
        <div className='portfolio-item__links'>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://albericod.github.io/twitch-extension-analyze/#/'>
            Live
          </a>
          <a
            target='_blank'
            rel='noopener noreferrer'
            href='https://github.com/AlbericoD/twitch-extension-analyze'>
            More
          </a>
        </div>
      </div>
    )
  }
];
