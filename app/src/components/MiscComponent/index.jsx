import React, {Component}  from 'react'
import CommonMainList from '../Common/CommonMainList'
import AAencodeItem from './MiscItem/aaencode'
import AryItem from './MiscItem/ary'
import BrainFuckItem from './MiscItem/brainfuck'
import BubbleBabbleItem from './MiscItem/bubblebabble'
import HandyCodeItem from './MiscItem/handycode'
import HttpHeaderItem from './MiscItem/httpheader'
import JJencodeItem from './MiscItem/jjencode'
import JSFuckItem from './MiscItem/jsfuck'
import MimeTypeItem from './MiscItem/mimetype'
import PoemCodeItem from './MiscItem/poemcode'
import PPencodeItem from './MiscItem/ppencode'
import PunyCodeItem from './MiscItem/punycode'
import UUencodeItem from './MiscItem/uuencode'
import WebSocketItem from './MiscItem/websocket'
import XXencodeItem from './MiscItem/xxencode'
import One337Item from './MiscItem/1337'

export default class MiscComponent extends Component {
    render() {
        return (
            <CommonMainList>
                <One337Item title="Leet Code"/>
                <AAencodeItem title="AAencode"/>
                <AryItem title="进制转换"/>
                <BrainFuckItem title="Brainfuck"/>
                <BubbleBabbleItem title="BubbleBabble"/>
                {/* <HandyCodeItem title="HandyCode"/> */}
                {/* <HttpHeaderItem title="HTTP(S)响应头查看"/> */}
                <JJencodeItem title="JJencode"/>
                <JSFuckItem title="JSfuck"/>
                <MimeTypeItem title="Mimetypes"/>
                <PoemCodeItem title="Poemcode"/>
                <PPencodeItem title="PPencode"/>
                <PunyCodeItem title="Punycode"/>
                <UUencodeItem title="UUencode"/>
                {/* <WebSocketItem title="WebSocket测试"/> */}
                <XXencodeItem title="XXencode"/>
            </CommonMainList>
        )
    }
}
