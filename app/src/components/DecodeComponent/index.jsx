import React, {Component}  from 'react'
import CommonMainList from '../Common/CommonMainList'
import BaseItem from './DecodeItem/base/'
import HexItem from './DecodeItem/hex/'
import UrlItem from './DecodeItem/url'
import QPItem from './DecodeItem/qp'
import HtmlItem from './DecodeItem/html'
import EscapeItem from './DecodeItem/escape'
import TapItem from './DecodeItem/tap'
import MorseItem from './DecodeItem/morse'
import AsciiItem from './DecodeItem/ascii'

export default class DecodeComponent extends Component {
    render() {
        return (
            <CommonMainList>
                <BaseItem title="Base编码"/>
                <HexItem title="Hex编码"/>
                <UrlItem title="Url编码"/>
                <QPItem title="QP编码"/>
                <HtmlItem title="Html编码"/>
                <EscapeItem title="Escape编码"/>
                <TapItem title="敲击码"/>
                <MorseItem title="Morse编码"/>
                <AsciiItem title="ASCII编码"/>
            </CommonMainList>
        )
    }
}
