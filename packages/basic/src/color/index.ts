/**
 * @description color bgColor
 * @author wangfupeng
 */

import { IModuleConf } from '@wangeditor/core'
import { addTextStyle } from './formats'
import genMenuConf from './menu'

const colorIconSvg = `<svg t="1621942496957" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3823" width="200" height="200"><path d="M64 864h896v96H64zM360.58 576h302.85l81.53 224h102.16L579.24 64H444.77L176.89 800h102.16l81.53-224zM512 159.96L628.49 480H395.52L512 159.96z" p-id="3824"></path></svg>`
const colorMenu = genMenuConf('color', '字体颜色', colorIconSvg)

const bgColorIconSvg = `<svg t="1622013111547" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7937" width="200" height="200"><path d="M510.030769 315.076923l84.676923 196.923077h-177.230769l76.8-196.923077h15.753846zM945.230769 157.538462v708.923076c0 43.323077-35.446154 78.769231-78.769231 78.769231H157.538462c-43.323077 0-78.769231-35.446154-78.769231-78.769231V157.538462c0-43.323077 35.446154-78.769231 78.769231-78.769231h708.923076c43.323077 0 78.769231 35.446154 78.769231 78.769231z m-108.307692 643.938461L600.615385 216.615385c-5.907692-11.815385-15.753846-19.692308-29.538462-19.692308h-139.815385c-11.815385 0-23.630769 7.876923-27.56923 19.692308l-216.615385 584.861538c-3.938462 11.815385 3.938462 25.6 17.723077 25.6h80.738462c11.815385 0 23.630769-9.846154 27.56923-21.661538l63.015385-175.261539h263.876923l68.923077 175.261539c3.938462 11.815385 15.753846 21.661538 27.569231 21.661538h80.738461c13.784615 0 23.630769-13.784615 19.692308-25.6z" p-id="7938"></path></svg>`
const bgColorMenu = genMenuConf('bgColor', '背景颜色', bgColorIconSvg)

const color: IModuleConf = {
  addTextStyle,
  menus: [colorMenu, bgColorMenu],
}

export default color
