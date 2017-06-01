import BoldIcon from 'react-icons/lib/fa/bold'
import ItalicIcon from 'react-icons/lib/fa/italic'
import MonoIcon from 'react-icons/lib/fa/file-code-o'
import PropTypes from 'prop-types'
import React from 'react'
import StyleButton from './StyleButton'
import UnderlineIcon from 'react-icons/lib/fa/underline'

var INLINE_STYLES = [
  { icon: <BoldIcon />, style: 'BOLD' },
  { icon: <ItalicIcon />, style: 'ITALIC' },
  { icon: <UnderlineIcon />, style: 'UNDERLINE' },
  { icon: <MonoIcon />, style: 'CODE' }
]

export default function InlineStyleControls(props) {
  var currentStyle = props.editorState.getCurrentInlineStyle()
  return (
    <div className="RichEditor-controls">
      {INLINE_STYLES.map(type => (
        <StyleButton
          key={type.label}
          active={currentStyle.has(type.style)}
          icon={type.icon}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
      <style jsx>{`
        .RichEditor-controls {
          margin-bottom: 3px;
          user-select: none;
        }
      `}</style>
    </div>
  )
}

InlineStyleControls.propTypes = {
  editorState: PropTypes.object,
  onToggle: PropTypes.func
}
