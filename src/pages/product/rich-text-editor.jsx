
import React, { Component } from 'react';
import {  EditorState, convertToRaw, ContentState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import  'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';
import draftToHtml from 'draftjs-to-html';
import htmlToDraft from 'html-to-draftjs';
import {Button} from 'antd'


export default class RichTextEditor extends Component {
  // state = {
  //   editorState: EditorState.create
  // }

  constructor(props) {
    super(props);
    const html = '<p>Hey this <strong>editor</strong> rocks 😀</p>';
    const contentBlock = htmlToDraft(html);
    //赋予默认初始值
    if (contentBlock) {
      const contentState = ContentState.createFromBlockArray(contentBlock.contentBlocks);
      const editorState = EditorState.createWithContent(contentState);
      this.state = {
        editorState,
      };
    }
  }

  onEditorStateChange = (editorState) => {
    console.log("onEditorStateChange()")
    this.setState({
      editorState,
    });
  };

  abc=()=>{
    console.log(this.props.fufun(123))
    console.log(this.refs.content.value)
  }


  getDetail=()=>{
    const { editorState } = this.state;
    return draftToHtml(convertToRaw(editorState.getCurrentContent()))
  }

  render() {
    const { editorState } = this.state;
    return (
      <div>
        <Editor
          editorState={editorState}
          editorStyle={{border:'1px solid black',minHeight:"200px"}}
          onEditorStateChange={this.onEditorStateChange}
        />
        {/* <textarea style={{border:'1px solid'}}
          
          value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        /> */}


      </div>
    );
  }
}