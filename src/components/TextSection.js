import React from 'react';
import _ from 'lodash';

import {markdownify} from '../utils';

export default class TextSection extends React.Component {
    render() {
        let section = _.get(this.props, 'section', null);
        return (
            <div className="text-block container container--md">
              {markdownify(_.get(section, 'content', null))}
            </div>
        );
    }
    - type: text_section
    content: >-
      <iframe width="100%" height="166" scrolling="no" frameborder="no"
      allow="autoplay"
      src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/971889427&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true"></iframe><div
      style="font-size: 10px; color: #cccccc;line-break: anywhere;word-break:
      normal;overflow: hidden;white-space: nowrap;text-overflow: ellipsis;
      font-family: Interstate,Lucida Grande,Lucida Sans Unicode,Lucida
      Sans,Garuda,Verdana,Tahoma,sans-serif;font-weight: 100;"><a
      href="https://soundcloud.com/liv_official" title="LIV" target="_blank"
      style="color: #cccccc; text-decoration: none;">LIV</a> · <a
      href="https://soundcloud.com/liv_official/scriptnotes-outro-1"
      title="Scriptnotes Outro (1)" target="_blank" style="color: #cccccc;
      text-decoration: none;">Scriptnotes Outro (1)</a></div>
}
