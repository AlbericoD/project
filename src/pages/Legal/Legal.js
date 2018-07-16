import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

class CustomLinks extends Component {
  render() {
    return (
      <div className="legal-page-menu">
        <nav>
          {/* <div className="magic-wand bounce-xy" onClick={e => switchTheme()}>
          <button className="fas fa-magic fa-lg" href="#" />
          <div className="magic-text">Color Me</div>
        </div> */}
          <style jsx="true">
            {`
              .menu__item:hover {
                border-bottom: 2px solid;
              }
            `}
          </style>
          <div className="menu">
            <div className="menu__item active">
              <Link to="/">Home</Link>
            </div>

            <div className="menu__item">
              <Link to="/twitch-extension/terms-of-service">
                Terms of Service
              </Link>
            </div>
            <div className="menu__item">
              <Link to="/twitch-extension/privacy-policy">Privacy Policy</Link>
            </div>
          </div>
        </nav>
      </div>
    );
  }
}

export class Tos extends Component {
  render() {
    return (
      <div className="legal-page">
        <CustomLinks />
        <h2>Albérico Dias Barreto Filho Terms of Service</h2>
        <br />
        <h3>1. Terms</h3>
        <hr />
        <p>
          By accessing the website at{' '}
          <a href="https://albericod.github.io/project/">
            https://albericod.github.io/project/
          </a>, you are agreeing to be bound by these terms of service, all
          applicable laws and regulations, and agree that you are responsible
          for compliance with any applicable local laws. If you do not agree
          with any of these terms, you are prohibited from using or accessing
          this site. The materials contained in this website are protected by
          applicable copyright and trademark law.
        </p>
        <br />
        <h3>2. Use License</h3>
        <hr />
        <ol type="a">
          <li>
            Permission is granted to temporarily download one copy of the
            materials (information or software) on Albérico Dias Barreto Filho's
            website for personal, non-commercial transitory viewing only. This
            is the grant of a license, not a transfer of title, and under this
            license you may not:
            <ol type="i">
              <li>modify or copy the materials;</li>
              <li>
                use the materials for any commercial purpose, or for any public
                display (commercial or non-commercial);
              </li>
              <li>
                attempt to decompile or reverse engineer any software contained
                on Albérico Dias Barreto Filho's website;
              </li>
              <li>
                remove any copyright or other proprietary notations from the
                materials; or
              </li>
              <li>
                transfer the materials to another person or "mirror" the
                materials on any other server.
              </li>
            </ol>
          </li>
          <li>
            This license shall automatically terminate if you violate any of
            these restrictions and may be terminated by Albérico Dias Barreto
            Filho at any time. Upon terminating your viewing of these materials
            or upon the termination of this license, you must destroy any
            downloaded materials in your possession whether in electronic or
            printed format.
          </li>
        </ol>
        <br />
        <h3>3. Disclaimer</h3>
        <hr />
        <ol type="a">
          <li>
            The materials on Albérico Dias Barreto Filho's website are provided
            on an 'as is' basis. Albérico Dias Barreto Filho makes no
            warranties, expressed or implied, and hereby disclaims and negates
            all other warranties including, without limitation, implied
            warranties or conditions of merchantability, fitness for a
            particular purpose, or non-infringement of intellectual property or
            other violation of rights.
          </li>
          <li>
            Further, Albérico Dias Barreto Filho does not warrant or make any
            representations concerning the accuracy, likely results, or
            reliability of the use of the materials on its website or otherwise
            relating to such materials or on any sites linked to this site.
          </li>
        </ol>
        <br />
        <h3>4. Limitations</h3>
        <hr />
        <p>
          In no event shall Albérico Dias Barreto Filho or its suppliers be
          liable for any damages (including, without limitation, damages for
          loss of data or profit, or due to business interruption) arising out
          of the use or inability to use the materials on Albérico Dias Barreto
          Filho's website, even if Albérico Dias Barreto Filho or a Albérico
          Dias Barreto Filho authorized representative has been notified orally
          or in writing of the possibility of such damage. Because some
          jurisdictions do not allow limitations on implied warranties, or
          limitations of liability for consequential or incidental damages,
          these limitations may not apply to you.
        </p>
        <h3>5. Accuracy of materials</h3>
        <hr />
        <p>
          The materials appearing on Albérico Dias Barreto Filho's website could
          include technical, typographical, or photographic errors. Albérico
          Dias Barreto Filho does not warrant that any of the materials on its
          website are accurate, complete or current. Albérico Dias Barreto Filho
          may make changes to the materials contained on its website at any time
          without notice. However Albérico Dias Barreto Filho does not make any
          commitment to update the materials.
        </p>
        <br />
        <h3>6. Links</h3>
        <hr />
        <p>
          Albérico Dias Barreto Filho has not reviewed all of the sites linked
          to its website and is not responsible for the contents of any such
          linked site. The inclusion of any link does not imply endorsement by
          Albérico Dias Barreto Filho of the site. Use of any such linked
          website is at the user's own risk.
        </p>
        <br />
        <h3>7. Modifications</h3>
        <hr />
        <p>
          Albérico Dias Barreto Filho may revise these terms of service for its
          website at any time without notice. By using this website you are
          agreeing to be bound by the then current version of these terms of
          service.
        </p>
        <br />
        <h3>8. Governing Law</h3>
        <hr />
        <p>
          These terms and conditions are governed by and construed in accordance
          with the laws of Brazil and you irrevocably submit to the exclusive
          jurisdiction of the courts in that State or location.
        </p>
      </div>
    );
  }
}

export class Pp extends Component {
  render() {
    return (
      <div className="legal-page">
        <CustomLinks />
        <h2>Privacy Policy</h2>
        <hr />
        <p>
          Your privacy is important to us. It is Albérico Dias Barreto Filho's
          policy to respect your privacy regarding any information we may
          collect from you across our website,{' '}
          <a href="https://albericod.github.io/project/">
            https://albericod.github.io/project/
          </a>, and other sites we own and operate.
        </p>
        <hr />
        <p>
          We only ask for personal information when we truly need it to provide
          a service to you. We collect it by fair and lawful means, with your
          knowledge and consent. We also let you know why we’re collecting it
          and how it will be used.
        </p>
        <hr />
        <p>
          We only retain collected information for as long as necessary to
          provide you with your requested service. What data we store, we’ll
          protect within commercially acceptable means to prevent loss and
          theft, as well as unauthorised access, disclosure, copying, use or
          modification.
        </p>
        <hr />
        <p>
          We don’t share any personally identifying information publicly or with
          third-parties, except when required to by law.
        </p>
        <hr />
        <p>
          Our website may link to external sites that are not operated by us.
          Please be aware that we have no control over the content and practices
          of these sites, and cannot accept responsibility or liability for
          their respective privacy policies.
        </p>
        <hr />
        <p>
          You are free to refuse our request for your personal information, with
          the understanding that we may be unable to provide you with some of
          your desired services.
        </p>
        <hr />
        <p>
          Your continued use of our website will be regarded as acceptance of
          our practices around privacy and personal information. If you have any
          questions about how we handle user data and personal information, feel
          free to contact us.
        </p>
        <hr />
        <hr />
        <p>This policy is effective as of 15 July 2018.</p>
      </div>
    );
  }
}
