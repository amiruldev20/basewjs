import { Client as _Client } from "mywajs"
import { ClientInfo, Message, Contact, MessageMedia, Location, Buttons, List } from "mywajs/src/func/index.js"
import ChatFactory from "mywajs/src/factories/ChatFactory.js"
import ContactFactory from "mywajs/src/factories/ContactFactory.js"
import Util from 'mywajs/src/util/Util.js'
import func from "./func.js"
import fs from "node:fs"
import util from "node:util"
import axios from 'axios'
import { extension } from "mime-types"
import { dirname, join } from "node:path"
import { fileURLToPath } from "node:url"
import { writeExif } from "./sticker.js"


const __dirname = dirname(fileURLToPath(import.meta.url))


class Client extends _Client {
    constructor(...args) {
        super(...args)
    }
}


const serialize = async (mywa, m) => {
    if (!m) return
    function _0x52b2(_0xc60dee, _0x444464) { const _0x3e5299 = _0x3e52(); return _0x52b2 = function (_0x52b23d, _0x44e063) { _0x52b23d = _0x52b23d - 0x155; let _0x2dd962 = _0x3e5299[_0x52b23d]; return _0x2dd962; }, _0x52b2(_0xc60dee, _0x444464); } const _0x42e59c = _0x52b2; (function (_0x27463c, _0x40b93e) { const _0x3bed8b = _0x52b2, _0x1a82de = _0x27463c(); while (!![]) { try { const _0x334f77 = -parseInt(_0x3bed8b(0x1a8)) / 0x1 + -parseInt(_0x3bed8b(0x185)) / 0x2 + parseInt(_0x3bed8b(0x189)) / 0x3 * (-parseInt(_0x3bed8b(0x197)) / 0x4) + -parseInt(_0x3bed8b(0x1a0)) / 0x5 * (parseInt(_0x3bed8b(0x174)) / 0x6) + -parseInt(_0x3bed8b(0x1ae)) / 0x7 + -parseInt(_0x3bed8b(0x1a6)) / 0x8 * (-parseInt(_0x3bed8b(0x1a1)) / 0x9) + parseInt(_0x3bed8b(0x159)) / 0xa * (parseInt(_0x3bed8b(0x1a9)) / 0xb); if (_0x334f77 === _0x40b93e) break; else _0x1a82de['push'](_0x1a82de['shift']()); } catch (_0x5379cb) { _0x1a82de['push'](_0x1a82de['shift']()); } } }(_0x3e52, 0xc68d4)); m?.[_0x42e59c(0x184)]?.['id'] && (m['id'] = { 'remote': m['_data']['id'][_0x42e59c(0x180)] || m['_data']['to'], 'participant': typeof m[_0x42e59c(0x184)][_0x42e59c(0x168)] === _0x42e59c(0x171) && m[_0x42e59c(0x184)][_0x42e59c(0x168)] !== null ? m[_0x42e59c(0x184)][_0x42e59c(0x168)]['_serialized'] : m['_data'][_0x42e59c(0x168)], 'fromMe': m[_0x42e59c(0x184)]['id'][_0x42e59c(0x173)], 'id': m['_data']['id']['id'], '_serialized': m['_data']['id'][_0x42e59c(0x17b)] }); m[_0x42e59c(0x19f)] = _0x42e59c(0x16d), m[_0x42e59c(0x163)] = m['id']['remote'], m['sender'] = m['id'][_0x42e59c(0x17c)] || m[_0x42e59c(0x184)][_0x42e59c(0x163)][_0x42e59c(0x17b)] || m[_0x42e59c(0x184)][_0x42e59c(0x163)] || m[_0x42e59c(0x163)], m[_0x42e59c(0x181)] = m[_0x42e59c(0x162)] && [...set[_0x42e59c(0x19d)]]['includes'](m[_0x42e59c(0x162)][_0x42e59c(0x1ac)](/\D+/g, '')), m['isPremium'] = m[_0x42e59c(0x162)] && global['db'][_0x42e59c(0x16e)][m[_0x42e59c(0x162)]]?.[_0x42e59c(0x15f)] || m[_0x42e59c(0x181)] || global['db'][_0x42e59c(0x16e)][m[_0x42e59c(0x162)]]?.[_0x42e59c(0x19a)] || ![], m['isVIP'] = m[_0x42e59c(0x162)] && global['db']['users'][m[_0x42e59c(0x162)]]?.[_0x42e59c(0x19a)] || m[_0x42e59c(0x181)] || ![], m['pushName'] = m[_0x42e59c(0x184)]['notifyName'], m[_0x42e59c(0x170)] = m['from'][_0x42e59c(0x156)]('g.us') || ![], m[_0x42e59c(0x1a7)] = m['id']?.['id']?.[_0x42e59c(0x187)]('3EB0') || m['id']?.['id']?.[_0x42e59c(0x187)]('BAE5') || ![]; if (mywa[_0x42e59c(0x17f)]) m[_0x42e59c(0x186)] = mywa[_0x42e59c(0x17f)]['me'][_0x42e59c(0x17b)] || mywa[_0x42e59c(0x17f)][_0x42e59c(0x195)][_0x42e59c(0x17b)]; m[_0x42e59c(0x169)] = Array[_0x42e59c(0x19b)](m[_0x42e59c(0x184)][_0x42e59c(0x17a)]) && m[_0x42e59c(0x184)][_0x42e59c(0x17a)][_0x42e59c(0x19e)] !== 0x0 ? m[_0x42e59c(0x184)]['mentionedJidList']['map'](_0x4e31dc => _0x4e31dc[_0x42e59c(0x17b)]) : [], m['_serialized'] = m['id'][_0x42e59c(0x17b)], m[_0x42e59c(0x178)] = m[_0x42e59c(0x175)], m[_0x42e59c(0x1aa)] = m[_0x42e59c(0x184)]['isNewMsg'], m['ephemeralDuration'] = m[_0x42e59c(0x184)]['ephemeralDuration'] || 0x0; if (m[_0x42e59c(0x178)]) { m['deprecatedMms3Url'] = m[_0x42e59c(0x184)][_0x42e59c(0x1ab)], m['directPath'] = m[_0x42e59c(0x184)]['directPath'], m[_0x42e59c(0x188)] = m[_0x42e59c(0x184)][_0x42e59c(0x182)], m[_0x42e59c(0x194)] = m[_0x42e59c(0x184)][_0x42e59c(0x194)], m[_0x42e59c(0x192)] = m[_0x42e59c(0x184)][_0x42e59c(0x192)], m[_0x42e59c(0x1a5)] = m[_0x42e59c(0x184)][_0x42e59c(0x1a5)], m[_0x42e59c(0x164)] = m[_0x42e59c(0x184)]['width'], m[_0x42e59c(0x161)] = m['_data'][_0x42e59c(0x161)]; if (m['_data'][_0x42e59c(0x165)]) m[_0x42e59c(0x165)] = m[_0x42e59c(0x184)]['mediaKeyTimestamp']; if (m[_0x42e59c(0x184)][_0x42e59c(0x1a2)]) m[_0x42e59c(0x18c)] = m['_data'][_0x42e59c(0x1a2)]; m[_0x42e59c(0x184)][_0x42e59c(0x16c)] && (m['isViewOnce'] = m[_0x42e59c(0x184)][_0x42e59c(0x16c)], m[_0x42e59c(0x177)] = m[_0x42e59c(0x184)][_0x42e59c(0x177)] || ''); if (m[_0x42e59c(0x184)][_0x42e59c(0x166)]) m[_0x42e59c(0x166)] = m[_0x42e59c(0x184)][_0x42e59c(0x166)]; if (m[_0x42e59c(0x184)][_0x42e59c(0x18b)]) m[_0x42e59c(0x18b)] = m[_0x42e59c(0x184)][_0x42e59c(0x18b)]; if (m['_data'][_0x42e59c(0x196)]) m['thumbnailHeight'] = m[_0x42e59c(0x184)][_0x42e59c(0x196)]; if (m['_data']['isAnimated']) m[_0x42e59c(0x18e)] = m[_0x42e59c(0x184)][_0x42e59c(0x18e)]; } m[_0x42e59c(0x170)] && (m[_0x42e59c(0x167)] = await await mywa['groupMetadata'](m[_0x42e59c(0x163)]), m[_0x42e59c(0x15d)] = m[_0x42e59c(0x167)]['participants']['filter'](_0x10fce2 => _0x10fce2[_0x42e59c(0x17e)] || _0x10fce2[_0x42e59c(0x155)]), m[_0x42e59c(0x17e)] = !!m['groupAdmins']['find'](_0x19067c => (typeof _0x19067c['id'] === _0x42e59c(0x171) && _0x19067c['id'] !== undefined ? _0x19067c['id'][_0x42e59c(0x17b)] : _0x19067c['id']) === m[_0x42e59c(0x162)]), m[_0x42e59c(0x18d)] = !!m[_0x42e59c(0x15d)]['find'](_0x156230 => (typeof _0x156230['id'] === _0x42e59c(0x171) && _0x156230['id'] !== undefined ? _0x156230['id'][_0x42e59c(0x17b)] : _0x156230['id']) === m[_0x42e59c(0x186)])); m['body'] = m?.[_0x42e59c(0x15e)] || m?.[_0x42e59c(0x191)] || m?.['_data']?.[_0x42e59c(0x177)] || m?.[_0x42e59c(0x184)]?.[_0x42e59c(0x1ad)] || m?.[_0x42e59c(0x1ad)] || '', m[_0x42e59c(0x193)] = m?.[_0x42e59c(0x1ad)]?.['trim']()?.[_0x42e59c(0x1a4)](/ +/) || [], m[_0x42e59c(0x15b)] = m?.[_0x42e59c(0x1ad)]?.[_0x42e59c(0x199)]()?.['split'](/ +/)?.['slice'](0x1) || [], m[_0x42e59c(0x160)] = m?.[_0x42e59c(0x15b)]?.['join']('\x20'); if (m[_0x42e59c(0x178)]) m[_0x42e59c(0x18f)] = _0x2e793e => { const _0x5d0be3 = _0x42e59c; if (_0x2e793e) return mywa[_0x5d0be3(0x157)](m, _0x2e793e); else return mywa['downloadMediaMessage'](m); }; m[_0x42e59c(0x183)] = () => mywa[_0x42e59c(0x198)](m[_0x42e59c(0x163)], m[_0x42e59c(0x17b)]), m[_0x42e59c(0x18a)] = (_0x4e0442, _0x4f67d1 = {}) => mywa[_0x42e59c(0x17d)](_0x4f67d1[_0x42e59c(0x163)] ? _0x4f67d1[_0x42e59c(0x163)] : m['from'], _0x4e0442, { 'quoted': m, ..._0x4f67d1 }); if (!m[_0x42e59c(0x168)]) delete m[_0x42e59c(0x168)]; function _0x3e52() { const _0x555da5 = ['2017014uhcbNJ', 'hasMedia', 'quoted', 'caption', 'isMedia', 'duration', 'mentionedJidList', '_serialized', 'participant', 'sendMessage', 'isAdmin', 'info', 'remote', 'isOwner', 'mimetype', 'resend', '_data', '2848358OQlGph', 'botNumber', 'startsWith', 'mime', '48IKxjTD', 'reply', 'thumbnailWidth', 'fileSize', 'isBotAdmin', 'isAnimated', 'downloadMedia', 'location', 'selectedRowId', 'encFilehash', 'arg', 'filehash', 'wid', 'thumbnailHeight', '75320WnBBnR', 'forwardMessage', 'trim', 'VIP', 'isArray', 'orderId', 'owner', 'length', 'githuv', '10rRyZwH', '1300761DMAgCa', 'size', 'ephemeralDuration', 'split', 'mediaKey', '24VOaLds', 'isBot', '1133491rjymDb', '616QKgsiK', 'isNewMsg', 'deprecatedMms3Url', 'replace', 'body', '2468137VAQVDu', 'vCards', 'isSuperAdmin', 'endsWith', 'downloadAndSaveMediaMessage', 'token', '761350BFVbPF', 'isEphemeral', 'args', 'isGif', 'groupAdmins', 'selectedButtonId', 'premium', 'text', 'height', 'sender', 'from', 'width', 'mediaKeyTimestamp', 'wavefrom', 'metadata', 'author', 'mentions', 'forwardingScore', 'isStatus', 'isViewOnce', 'https://github.com/amiruldev20', 'users', 'isForwarded', 'isGroup', 'object', 'inviteV4', 'fromMe']; _0x3e52 = function () { return _0x555da5; }; return _0x3e52(); } if (!m[_0x42e59c(0x16b)]) delete m['isStatus']; if (!m[_0x42e59c(0x16f)]) delete m[_0x42e59c(0x16f)]; if (m[_0x42e59c(0x16a)] === 0x0) delete m[_0x42e59c(0x16a)]; if (m[_0x42e59c(0x1af)][_0x42e59c(0x19e)] === 0x0) delete m[_0x42e59c(0x1af)]; if (!m['inviteV4']) delete m[_0x42e59c(0x172)]; if (!m[_0x42e59c(0x19c)]) delete m['orderId']; if (!m[_0x42e59c(0x158)]) delete m[_0x42e59c(0x158)]; !m[_0x42e59c(0x175)] && (delete m[_0x42e59c(0x179)], delete m[_0x42e59c(0x15c)]); !m[_0x42e59c(0x15a)] && (delete m[_0x42e59c(0x15a)], delete m[_0x42e59c(0x1a3)]); delete m['_data'], delete m['mentionedIds'], delete m[_0x42e59c(0x190)]; if (m['hasQuotedMsg']) { let data = await m['getQuotedMessage']() || {}; m[_0x42e59c(0x176)] = await await serialize(mywa, data), delete data[_0x42e59c(0x184)]; } return await await m;
}


export { Client, serialize }


let fileP = fileURLToPath(import.meta.url)
fs.watchFile(fileP, () => {
    fs.unwatchFile(fileP)
    console.log(`Update File "${fileP}"`)
    import(`${import.meta.url}?update=${Date.now()}`)
})