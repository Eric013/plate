import AlignCenterIcon from 'react-icons/lib/fa/align-center'
import AlignLeftIcon from 'react-icons/lib/fa/align-left'
import AlignRightIcon from 'react-icons/lib/fa/align-right'
import CodeBlockIcon from 'react-icons/lib/fa/code'
import OrderedListIcon from 'react-icons/lib/fa/list-ol'
import PropTypes from 'prop-types'
import QuoteIcon from 'react-icons/lib/fa/quote-right'
import React from 'react'
import StyleButton from './StyleButton'
import UnorderedListIcon from 'react-icons/lib/fa/list-ul'

const BLOCK_TYPES = [
  { label: 'H1', style: 'header-one' },
  { label: 'H2', style: 'header-two' },
  { label: 'H3', style: 'header-three' },
  { label: 'H4', style: 'header-four' },
  { label: 'H5', style: 'header-five' },
  { label: 'H6', style: 'header-six' },
  { icon: <QuoteIcon />, style: 'blockquote' },
  { icon: <UnorderedListIcon />, style: 'unordered-list-item' },
  { icon: <OrderedListIcon />, style: 'ordered-list-item' },
  { icon: <CodeBlockIcon />, style: 'code-block' },
  { icon: <AlignRightIcon />, style: 'text-align-right' },
  { icon: <AlignLeftIcon />, style: 'text-align-left' },
  { icon: <AlignCenterIcon />, style: 'text-align-center' }
]

export default function BlockStyleControls(props) {
  const { editorState } = props
  const selection = editorState.getSelection()
  const blockType = editorState
    .getCurrentContent()
    .getBlockForKey(selection.getStartKey())
    .getType()

  return (
    <div className="RichEditor-controls">
      {BLOCK_TYPES.map(type => (
        <StyleButton
          key={type.label}
          active={type.style === blockType}
          label={type.label}
          icon={type.icon}
          onToggle={props.onToggle}
          style={type.style}
        />
      ))}
      <style jsx>{`
        .RichEditor-controls {
          user-select: none;
          margin-bottom: 10px;
        }
      `}</style>
    </div>
  )
}

BlockStyleControls.propTypes = {
  editorState: PropTypes.object,
  onToggle: PropTypes.func
}
