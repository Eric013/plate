import { Editor, Html, resetKeyGenerator } from 'slate';
import React, { Component } from 'react';

import PropTypes from 'prop-types';

const BLOCK_TAGS = {
  blockquote: 'quote',
  p: 'paragraph',
  pre: 'code'
};

const MARK_TAGS = {
  em: 'italic',
  strong: 'bold',
  u: 'underline'
};

const rules = [
  {
    deserialize(el, next) {
      const type = BLOCK_TAGS[el.tagName];
      if (!type) return;
      return {
        kind: 'block',
        type: type,
        nodes: next(el.children)
      };
    },
    serialize(object, children) {
      if (object.kind != 'block') return;
      switch (object.type) {
        case 'code':
          return <pre><code>{children}</code></pre>;
        case 'paragraph':
          return <p>{children}</p>;
        case 'quote':
          return <blockquote>{children}</blockquote>;
      }
    }
  },
  {
    deserialize(el, next) {
      const type = MARK_TAGS[el.tagName];
      if (!type) return;
      return {
        kind: 'mark',
        type: type,
        nodes: next(el.children)
      };
    },
    serialize(object, children) {
      if (object.kind != 'mark') return;
      switch (object.type) {
        case 'bold':
          return <strong>{children}</strong>;
        case 'italic':
          return <em>{children}</em>;
        case 'underline':
          return <u>{children}</u>;
      }
    }
  }
];

const html = new Html({ rules });

resetKeyGenerator();

class ContentEditor extends Component {
  static propTypes = {
    plateContent: PropTypes.string,
    saveContent: PropTypes.func,
    plateId: PropTypes.string
  };

  state = {
    state: html.deserialize(this.props.plateContent),
    schema: {
      nodes: {
        code: props => <pre {...props.attributes}>{props.children}</pre>,
        paragraph: props => <p {...props.attributes}>{props.children}</p>,
        quote: props => (
          <blockquote {...props.attributes}>{props.children}</blockquote>
        )
      },
      marks: {
        bold: props => <strong>{props.children}</strong>,
        italic: props => <em>{props.children}</em>,
        underline: props => <u>{props.children}</u>
      }
    }
  };

  onChange = state => {
    this.setState({ state });
  };

  onDocumentChange = (document, state) => {
    const content = html.serialize(state);
    this.props.saveContent(this.props.plateId, content);
  };

  render = () => {
    return (
      <Editor
        style={{ height: '100vh' }}
        schema={this.state.schema}
        state={this.state.state}
        onChange={this.onChange}
        onDocumentChange={this.onDocumentChange}
      />
    );
  };
}

export default ContentEditor;
