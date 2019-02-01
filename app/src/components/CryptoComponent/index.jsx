import React, {Component}  from 'react'
import CommonMainList from '../Common/CommonMainList'
import A1z26Item from './CryptoItem/a1z26'
import AdfgvxItem from './CryptoItem/adfgvx'
import AdfgxItem from './CryptoItem/adfgx'
import AesItem from './CryptoItem/aes'
import AffineItem from './CryptoItem/affine'
import AtbashItem from './CryptoItem/atbash'
import AutoKeyItem from './CryptoItem/autokey'
import BaconianItem from './CryptoItem/baconian'
import BeaufortItem from './CryptoItem/beaufort'
import BifidItem from './CryptoItem/bifid'
import CaesarItem from './CryptoItem/caesar'
import ColumnarItem from './CryptoItem/columnar'
import DesItem from './CryptoItem/des'
import EnigmaItem from './CryptoItem/enigma'
import FourSquareItem from './CryptoItem/foursquare'
import GronsfeldItem from './CryptoItem/gronsfeld'
import HashItem from './CryptoItem/hash'
import HillItem from './CryptoItem/hill'
import KeywordItem from './CryptoItem/keyword'
import M209Item from './CryptoItem/m209'
import PigPenItem from './CryptoItem/pigpen'
import PlayFairItem from './CryptoItem/playfair'
import PolyBiusItem from './CryptoItem/polybius'
import PortaItem from './CryptoItem/porta'
import PublicKeyItem from './CryptoItem/publickey'
import RailFenceItem from './CryptoItem/railfence'
import RC4Item from './CryptoItem/rc4'
import Rot13Item from './CryptoItem/rot13'
import RSAKeyAnalyseItem from './CryptoItem/rsakeyanalyse'
import RSAKeyGenerateItem from './CryptoItem/rsakeygenerate'
import RunningItem from './CryptoItem/running'
import SimpleItem from './CryptoItem/simplesubstitution'
import TerpleDesItem from './CryptoItem/terpledes'
import VigenereItem from './CryptoItem/vigenere'


export default class CryptoComponent extends Component {
    render() {
        return (
            <CommonMainList>
                <RSAKeyAnalyseItem title="RSA公私钥解析"/>
                <RSAKeyGenerateItem title="RSA公私钥生成"/>
                <A1z26Item title="A1z26密码"/>
                <AdfgvxItem title="ADFGVX密码"/>
                <AdfgxItem title="ADFGX密码"/>
                <AesItem title="AES加密"/>
                <AffineItem title="仿射密码"/>
                <AtbashItem title="埃特巴什码"/>
                <AutoKeyItem title="自动密钥密码"/>
                <BaconianItem title="培根密码"/>
                <BeaufortItem title="博福特密码"/>
                <BifidItem title="双密码"/>
                <CaesarItem title="凯撒密码"/>
                <ColumnarItem title="列位移密码"/>
                <DesItem title="DES加密"/>
                <EnigmaItem title="恩尼格玛密码"/>
                <FourSquareItem title="四方密码"/>
                <GronsfeldItem title="Gronsfeld密码"/>
                <HashItem title="哈希计算"/>
                <HillItem title="希尔密码"/>
                <KeywordItem title="关键字密码"/>
                <M209Item title="便携式机械密码"/>
                <PigPenItem title="猪圈密码"/>
                <PlayFairItem title="普莱菲尔密码"/>
                <PolyBiusItem title="波利比奥斯方阵密码"/>
                <PortaItem title="Porta密码"/>
                <PublicKeyItem title="公钥解析"/>
                <RailFenceItem title="栅栏密码"/>
                <RC4Item title="栅栏密码"/>
                <Rot13Item title="Rot13密码"/>
                <RunningItem title="滚动秘钥密码"/>
                <SimpleItem title="简单换位密码"/>
                <TerpleDesItem title="Terple DES加密"/>
                <VigenereItem title="维吉尼亚密码"/>
            </CommonMainList>
        )
    }
}
