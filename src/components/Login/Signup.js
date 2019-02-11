import React, { Component } from "react";

class Signup extends React.Component {
  render() {
    return (
      <form class="ui form">
        <h4 class="ui dividing header">Shipping Information</h4>
        <div class="field">
          <label>Name</label>
          <div class="two fields">
            <div class="field">
              <input
                type="text"
                name="shipping[first-name]"
                placeholder="First Name"
              />
            </div>
            <div class="field">
              <input
                type="text"
                name="shipping[last-name]"
                placeholder="Last Name"
              />
            </div>
          </div>
        </div>
        <div class="field">
          <label>Billing Address</label>
          <div class="fields">
            <div class="twelve wide field">
              <input
                type="text"
                name="shipping[address]"
                placeholder="Street Address"
              />
            </div>
            <div class="four wide field">
              <input
                type="text"
                name="shipping[address-2]"
                placeholder="Apt #"
              />
            </div>
          </div>
        </div>
        <div class="two fields">
          <div class="field">
            <label>State</label>
            <select class="ui fluid dropdown">
              <option value="">State</option>
              <option value="AL">Alabama</option>
              <option value="AK">Alaska</option>
              <option value="AZ">Arizona</option>
              <option value="AR">Arkansas</option>
              <option value="CA">California</option>
              <option value="CO">Colorado</option>
              <option value="CT">Connecticut</option>
              <option value="DE">Delaware</option>
              <option value="DC">District Of Columbia</option>
              <option value="FL">Florida</option>
              <option value="GA">Georgia</option>
              <option value="HI">Hawaii</option>
              <option value="ID">Idaho</option>
              <option value="IL">Illinois</option>
              <option value="IN">Indiana</option>
              <option value="IA">Iowa</option>
              <option value="KS">Kansas</option>
              <option value="KY">Kentucky</option>
              <option value="LA">Louisiana</option>
              <option value="ME">Maine</option>
              <option value="MD">Maryland</option>
              <option value="MA">Massachusetts</option>
              <option value="MI">Michigan</option>
              <option value="MN">Minnesota</option>
              <option value="MS">Mississippi</option>
              <option value="MO">Missouri</option>
              <option value="MT">Montana</option>
              <option value="NE">Nebraska</option>
              <option value="NV">Nevada</option>
              <option value="NH">New Hampshire</option>
              <option value="NJ">New Jersey</option>
              <option value="NM">New Mexico</option>
              <option value="NY">New York</option>
              <option value="NC">North Carolina</option>
              <option value="ND">North Dakota</option>
              <option value="OH">Ohio</option>
              <option value="OK">Oklahoma</option>
              <option value="OR">Oregon</option>
              <option value="PA">Pennsylvania</option>
              <option value="RI">Rhode Island</option>
              <option value="SC">South Carolina</option>
              <option value="SD">South Dakota</option>
              <option value="TN">Tennessee</option>
              <option value="TX">Texas</option>
              <option value="UT">Utah</option>
              <option value="VT">Vermont</option>
              <option value="VA">Virginia</option>
              <option value="WA">Washington</option>
              <option value="WV">West Virginia</option>
              <option value="WI">Wisconsin</option>
              <option value="WY">Wyoming</option>
            </select>
          </div>
          <div class="field">
            <label>Country</label>
            <div class="ui fluid search selection dropdown">
              <input type="hidden" name="country" />
              <i class="dropdown icon" />
              <div class="default text">Select Country</div>
              <div class="menu">
                <div class="item" data-value="af">
                  <i class="af flag" />Afghanistan
                </div>
                <div class="item" data-value="ax">
                  <i class="ax flag" />Aland Islands
                </div>
                <div class="item" data-value="al">
                  <i class="al flag" />Albania
                </div>
                <div class="item" data-value="dz">
                  <i class="dz flag" />Algeria
                </div>
                <div class="item" data-value="as">
                  <i class="as flag" />American Samoa
                </div>
                <div class="item" data-value="ad">
                  <i class="ad flag" />Andorra
                </div>
                <div class="item" data-value="ao">
                  <i class="ao flag" />Angola
                </div>
                <div class="item" data-value="ai">
                  <i class="ai flag" />Anguilla
                </div>
                <div class="item" data-value="ag">
                  <i class="ag flag" />Antigua
                </div>
                <div class="item" data-value="ar">
                  <i class="ar flag" />Argentina
                </div>
                <div class="item" data-value="am">
                  <i class="am flag" />Armenia
                </div>
                <div class="item" data-value="aw">
                  <i class="aw flag" />Aruba
                </div>
                <div class="item" data-value="au">
                  <i class="au flag" />Australia
                </div>
                <div class="item" data-value="at">
                  <i class="at flag" />Austria
                </div>
                <div class="item" data-value="az">
                  <i class="az flag" />Azerbaijan
                </div>
                <div class="item" data-value="bs">
                  <i class="bs flag" />Bahamas
                </div>
                <div class="item" data-value="bh">
                  <i class="bh flag" />Bahrain
                </div>
                <div class="item" data-value="bd">
                  <i class="bd flag" />Bangladesh
                </div>
                <div class="item" data-value="bb">
                  <i class="bb flag" />Barbados
                </div>
                <div class="item" data-value="by">
                  <i class="by flag" />Belarus
                </div>
                <div class="item" data-value="be">
                  <i class="be flag" />Belgium
                </div>
                <div class="item" data-value="bz">
                  <i class="bz flag" />Belize
                </div>
                <div class="item" data-value="bj">
                  <i class="bj flag" />Benin
                </div>
                <div class="item" data-value="bm">
                  <i class="bm flag" />Bermuda
                </div>
                <div class="item" data-value="bt">
                  <i class="bt flag" />Bhutan
                </div>
                <div class="item" data-value="bo">
                  <i class="bo flag" />Bolivia
                </div>
                <div class="item" data-value="ba">
                  <i class="ba flag" />Bosnia
                </div>
                <div class="item" data-value="bw">
                  <i class="bw flag" />Botswana
                </div>
                <div class="item" data-value="bv">
                  <i class="bv flag" />Bouvet Island
                </div>
                <div class="item" data-value="br">
                  <i class="br flag" />Brazil
                </div>
                <div class="item" data-value="vg">
                  <i class="vg flag" />British Virgin Islands
                </div>
                <div class="item" data-value="bn">
                  <i class="bn flag" />Brunei
                </div>
                <div class="item" data-value="bg">
                  <i class="bg flag" />Bulgaria
                </div>
                <div class="item" data-value="bf">
                  <i class="bf flag" />Burkina Faso
                </div>
                <div class="item" data-value="mm">
                  <i class="mm flag" />Burma
                </div>
                <div class="item" data-value="bi">
                  <i class="bi flag" />Burundi
                </div>
                <div class="item" data-value="tc">
                  <i class="tc flag" />Caicos Islands
                </div>
                <div class="item" data-value="kh">
                  <i class="kh flag" />Cambodia
                </div>
                <div class="item" data-value="cm">
                  <i class="cm flag" />Cameroon
                </div>
                <div class="item" data-value="ca">
                  <i class="ca flag" />Canada
                </div>
                <div class="item" data-value="cv">
                  <i class="cv flag" />Cape Verde
                </div>
                <div class="item" data-value="ky">
                  <i class="ky flag" />Cayman Islands
                </div>
                <div class="item" data-value="cf">
                  <i class="cf flag" />Central African Republic
                </div>
                <div class="item" data-value="td">
                  <i class="td flag" />Chad
                </div>
                <div class="item" data-value="cl">
                  <i class="cl flag" />Chile
                </div>
                <div class="item" data-value="cn">
                  <i class="cn flag" />China
                </div>
                <div class="item" data-value="cx">
                  <i class="cx flag" />Christmas Island
                </div>
                <div class="item" data-value="cc">
                  <i class="cc flag" />Cocos Islands
                </div>
                <div class="item" data-value="co">
                  <i class="co flag" />Colombia
                </div>
                <div class="item" data-value="km">
                  <i class="km flag" />Comoros
                </div>
                <div class="item" data-value="cg">
                  <i class="cg flag" />Congo Brazzaville
                </div>
                <div class="item" data-value="cd">
                  <i class="cd flag" />Congo
                </div>
                <div class="item" data-value="ck">
                  <i class="ck flag" />Cook Islands
                </div>
                <div class="item" data-value="cr">
                  <i class="cr flag" />Costa Rica
                </div>
                <div class="item" data-value="ci">
                  <i class="ci flag" />Cote Divoire
                </div>
                <div class="item" data-value="hr">
                  <i class="hr flag" />Croatia
                </div>
                <div class="item" data-value="cu">
                  <i class="cu flag" />Cuba
                </div>
                <div class="item" data-value="cy">
                  <i class="cy flag" />Cyprus
                </div>
                <div class="item" data-value="cz">
                  <i class="cz flag" />Czech Republic
                </div>
                <div class="item" data-value="dk">
                  <i class="dk flag" />Denmark
                </div>
                <div class="item" data-value="dj">
                  <i class="dj flag" />Djibouti
                </div>
                <div class="item" data-value="dm">
                  <i class="dm flag" />Dominica
                </div>
                <div class="item" data-value="do">
                  <i class="do flag" />Dominican Republic
                </div>
                <div class="item" data-value="ec">
                  <i class="ec flag" />Ecuador
                </div>
                <div class="item" data-value="eg">
                  <i class="eg flag" />Egypt
                </div>
                <div class="item" data-value="sv">
                  <i class="sv flag" />El Salvador
                </div>
                <div class="item" data-value="gb">
                  <i class="gb flag" />England
                </div>
                <div class="item" data-value="gq">
                  <i class="gq flag" />Equatorial Guinea
                </div>
                <div class="item" data-value="er">
                  <i class="er flag" />Eritrea
                </div>
                <div class="item" data-value="ee">
                  <i class="ee flag" />Estonia
                </div>
                <div class="item" data-value="et">
                  <i class="et flag" />Ethiopia
                </div>
                <div class="item" data-value="eu">
                  <i class="eu flag" />European Union
                </div>
                <div class="item" data-value="fk">
                  <i class="fk flag" />Falkland Islands
                </div>
                <div class="item" data-value="fo">
                  <i class="fo flag" />Faroe Islands
                </div>
                <div class="item" data-value="fj">
                  <i class="fj flag" />Fiji
                </div>
                <div class="item" data-value="fi">
                  <i class="fi flag" />Finland
                </div>
                <div class="item" data-value="fr">
                  <i class="fr flag" />France
                </div>
                <div class="item" data-value="gf">
                  <i class="gf flag" />French Guiana
                </div>
                <div class="item" data-value="pf">
                  <i class="pf flag" />French Polynesia
                </div>
                <div class="item" data-value="tf">
                  <i class="tf flag" />French Territories
                </div>
                <div class="item" data-value="ga">
                  <i class="ga flag" />Gabon
                </div>
                <div class="item" data-value="gm">
                  <i class="gm flag" />Gambia
                </div>
                <div class="item" data-value="ge">
                  <i class="ge flag" />Georgia
                </div>
                <div class="item" data-value="de">
                  <i class="de flag" />Germany
                </div>
                <div class="item" data-value="gh">
                  <i class="gh flag" />Ghana
                </div>
                <div class="item" data-value="gi">
                  <i class="gi flag" />Gibraltar
                </div>
                <div class="item" data-value="gr">
                  <i class="gr flag" />Greece
                </div>
                <div class="item" data-value="gl">
                  <i class="gl flag" />Greenland
                </div>
                <div class="item" data-value="gd">
                  <i class="gd flag" />Grenada
                </div>
                <div class="item" data-value="gp">
                  <i class="gp flag" />Guadeloupe
                </div>
                <div class="item" data-value="gu">
                  <i class="gu flag" />Guam
                </div>
                <div class="item" data-value="gt">
                  <i class="gt flag" />Guatemala
                </div>
                <div class="item" data-value="gw">
                  <i class="gw flag" />Guinea-Bissau
                </div>
                <div class="item" data-value="gn">
                  <i class="gn flag" />Guinea
                </div>
                <div class="item" data-value="gy">
                  <i class="gy flag" />Guyana
                </div>
                <div class="item" data-value="ht">
                  <i class="ht flag" />Haiti
                </div>
                <div class="item" data-value="hm">
                  <i class="hm flag" />Heard Island
                </div>
                <div class="item" data-value="hn">
                  <i class="hn flag" />Honduras
                </div>
                <div class="item" data-value="hk">
                  <i class="hk flag" />Hong Kong
                </div>
                <div class="item" data-value="hu">
                  <i class="hu flag" />Hungary
                </div>
                <div class="item" data-value="is">
                  <i class="is flag" />Iceland
                </div>
                <div class="item" data-value="in">
                  <i class="in flag" />India
                </div>
                <div class="item" data-value="io">
                  <i class="io flag" />Indian Ocean Territory
                </div>
                <div class="item" data-value="id">
                  <i class="id flag" />Indonesia
                </div>
                <div class="item" data-value="ir">
                  <i class="ir flag" />Iran
                </div>
                <div class="item" data-value="iq">
                  <i class="iq flag" />Iraq
                </div>
                <div class="item" data-value="ie">
                  <i class="ie flag" />Ireland
                </div>
                <div class="item" data-value="il">
                  <i class="il flag" />Israel
                </div>
                <div class="item" data-value="it">
                  <i class="it flag" />Italy
                </div>
                <div class="item" data-value="jm">
                  <i class="jm flag" />Jamaica
                </div>
                <div class="item" data-value="jp">
                  <i class="jp flag" />Japan
                </div>
                <div class="item" data-value="jo">
                  <i class="jo flag" />Jordan
                </div>
                <div class="item" data-value="kz">
                  <i class="kz flag" />Kazakhstan
                </div>
                <div class="item" data-value="ke">
                  <i class="ke flag" />Kenya
                </div>
                <div class="item" data-value="ki">
                  <i class="ki flag" />Kiribati
                </div>
                <div class="item" data-value="kw">
                  <i class="kw flag" />Kuwait
                </div>
                <div class="item" data-value="kg">
                  <i class="kg flag" />Kyrgyzstan
                </div>
                <div class="item" data-value="la">
                  <i class="la flag" />Laos
                </div>
                <div class="item" data-value="lv">
                  <i class="lv flag" />Latvia
                </div>
                <div class="item" data-value="lb">
                  <i class="lb flag" />Lebanon
                </div>
                <div class="item" data-value="ls">
                  <i class="ls flag" />Lesotho
                </div>
                <div class="item" data-value="lr">
                  <i class="lr flag" />Liberia
                </div>
                <div class="item" data-value="ly">
                  <i class="ly flag" />Libya
                </div>
                <div class="item" data-value="li">
                  <i class="li flag" />Liechtenstein
                </div>
                <div class="item" data-value="lt">
                  <i class="lt flag" />Lithuania
                </div>
                <div class="item" data-value="lu">
                  <i class="lu flag" />Luxembourg
                </div>
                <div class="item" data-value="mo">
                  <i class="mo flag" />Macau
                </div>
                <div class="item" data-value="mk">
                  <i class="mk flag" />Macedonia
                </div>
                <div class="item" data-value="mg">
                  <i class="mg flag" />Madagascar
                </div>
                <div class="item" data-value="mw">
                  <i class="mw flag" />Malawi
                </div>
                <div class="item" data-value="my">
                  <i class="my flag" />Malaysia
                </div>
                <div class="item" data-value="mv">
                  <i class="mv flag" />Maldives
                </div>
                <div class="item" data-value="ml">
                  <i class="ml flag" />Mali
                </div>
                <div class="item" data-value="mt">
                  <i class="mt flag" />Malta
                </div>
                <div class="item" data-value="mh">
                  <i class="mh flag" />Marshall Islands
                </div>
                <div class="item" data-value="mq">
                  <i class="mq flag" />Martinique
                </div>
                <div class="item" data-value="mr">
                  <i class="mr flag" />Mauritania
                </div>
                <div class="item" data-value="mu">
                  <i class="mu flag" />Mauritius
                </div>
                <div class="item" data-value="yt">
                  <i class="yt flag" />Mayotte
                </div>
                <div class="item" data-value="mx">
                  <i class="mx flag" />Mexico
                </div>
                <div class="item" data-value="fm">
                  <i class="fm flag" />Micronesia
                </div>
                <div class="item" data-value="md">
                  <i class="md flag" />Moldova
                </div>
                <div class="item" data-value="mc">
                  <i class="mc flag" />Monaco
                </div>
                <div class="item" data-value="mn">
                  <i class="mn flag" />Mongolia
                </div>
                <div class="item" data-value="me">
                  <i class="me flag" />Montenegro
                </div>
                <div class="item" data-value="ms">
                  <i class="ms flag" />Montserrat
                </div>
                <div class="item" data-value="ma">
                  <i class="ma flag" />Morocco
                </div>
                <div class="item" data-value="mz">
                  <i class="mz flag" />Mozambique
                </div>
                <div class="item" data-value="na">
                  <i class="na flag" />Namibia
                </div>
                <div class="item" data-value="nr">
                  <i class="nr flag" />Nauru
                </div>
                <div class="item" data-value="np">
                  <i class="np flag" />Nepal
                </div>
                <div class="item" data-value="an">
                  <i class="an flag" />Netherlands Antilles
                </div>
                <div class="item" data-value="nl">
                  <i class="nl flag" />Netherlands
                </div>
                <div class="item" data-value="nc">
                  <i class="nc flag" />New Caledonia
                </div>
                <div class="item" data-value="pg">
                  <i class="pg flag" />New Guinea
                </div>
                <div class="item" data-value="nz">
                  <i class="nz flag" />New Zealand
                </div>
                <div class="item" data-value="ni">
                  <i class="ni flag" />Nicaragua
                </div>
                <div class="item" data-value="ne">
                  <i class="ne flag" />Niger
                </div>
                <div class="item" data-value="ng">
                  <i class="ng flag" />Nigeria
                </div>
                <div class="item" data-value="nu">
                  <i class="nu flag" />Niue
                </div>
                <div class="item" data-value="nf">
                  <i class="nf flag" />Norfolk Island
                </div>
                <div class="item" data-value="kp">
                  <i class="kp flag" />North Korea
                </div>
                <div class="item" data-value="mp">
                  <i class="mp flag" />Northern Mariana Islands
                </div>
                <div class="item" data-value="no">
                  <i class="no flag" />Norway
                </div>
                <div class="item" data-value="om">
                  <i class="om flag" />Oman
                </div>
                <div class="item" data-value="pk">
                  <i class="pk flag" />Pakistan
                </div>
                <div class="item" data-value="pw">
                  <i class="pw flag" />Palau
                </div>
                <div class="item" data-value="ps">
                  <i class="ps flag" />Palestine
                </div>
                <div class="item" data-value="pa">
                  <i class="pa flag" />Panama
                </div>
                <div class="item" data-value="py">
                  <i class="py flag" />Paraguay
                </div>
                <div class="item" data-value="pe">
                  <i class="pe flag" />Peru
                </div>
                <div class="item" data-value="ph">
                  <i class="ph flag" />Philippines
                </div>
                <div class="item" data-value="pn">
                  <i class="pn flag" />Pitcairn Islands
                </div>
                <div class="item" data-value="pl">
                  <i class="pl flag" />Poland
                </div>
                <div class="item" data-value="pt">
                  <i class="pt flag" />Portugal
                </div>
                <div class="item" data-value="pr">
                  <i class="pr flag" />Puerto Rico
                </div>
                <div class="item" data-value="qa">
                  <i class="qa flag" />Qatar
                </div>
                <div class="item" data-value="re">
                  <i class="re flag" />Reunion
                </div>
                <div class="item" data-value="ro">
                  <i class="ro flag" />Romania
                </div>
                <div class="item" data-value="ru">
                  <i class="ru flag" />Russia
                </div>
                <div class="item" data-value="rw">
                  <i class="rw flag" />Rwanda
                </div>
                <div class="item" data-value="sh">
                  <i class="sh flag" />Saint Helena
                </div>
                <div class="item" data-value="kn">
                  <i class="kn flag" />Saint Kitts and Nevis
                </div>
                <div class="item" data-value="lc">
                  <i class="lc flag" />Saint Lucia
                </div>
                <div class="item" data-value="pm">
                  <i class="pm flag" />Saint Pierre
                </div>
                <div class="item" data-value="vc">
                  <i class="vc flag" />Saint Vincent
                </div>
                <div class="item" data-value="ws">
                  <i class="ws flag" />Samoa
                </div>
                <div class="item" data-value="sm">
                  <i class="sm flag" />San Marino
                </div>
                <div class="item" data-value="gs">
                  <i class="gs flag" />Sandwich Islands
                </div>
                <div class="item" data-value="st">
                  <i class="st flag" />Sao Tome
                </div>
                <div class="item" data-value="sa">
                  <i class="sa flag" />Saudi Arabia
                </div>
                <div class="item" data-value="sn">
                  <i class="sn flag" />Senegal
                </div>
                <div class="item" data-value="cs">
                  <i class="cs flag" />Serbia
                </div>
                <div class="item" data-value="rs">
                  <i class="rs flag" />Serbia
                </div>
                <div class="item" data-value="sc">
                  <i class="sc flag" />Seychelles
                </div>
                <div class="item" data-value="sl">
                  <i class="sl flag" />Sierra Leone
                </div>
                <div class="item" data-value="sg">
                  <i class="sg flag" />Singapore
                </div>
                <div class="item" data-value="sk">
                  <i class="sk flag" />Slovakia
                </div>
                <div class="item" data-value="si">
                  <i class="si flag" />Slovenia
                </div>
                <div class="item" data-value="sb">
                  <i class="sb flag" />Solomon Islands
                </div>
                <div class="item" data-value="so">
                  <i class="so flag" />Somalia
                </div>
                <div class="item" data-value="za">
                  <i class="za flag" />South Africa
                </div>
                <div class="item" data-value="kr">
                  <i class="kr flag" />South Korea
                </div>
                <div class="item" data-value="es">
                  <i class="es flag" />Spain
                </div>
                <div class="item" data-value="lk">
                  <i class="lk flag" />Sri Lanka
                </div>
                <div class="item" data-value="sd">
                  <i class="sd flag" />Sudan
                </div>
                <div class="item" data-value="sr">
                  <i class="sr flag" />Suriname
                </div>
                <div class="item" data-value="sj">
                  <i class="sj flag" />Svalbard
                </div>
                <div class="item" data-value="sz">
                  <i class="sz flag" />Swaziland
                </div>
                <div class="item" data-value="se">
                  <i class="se flag" />Sweden
                </div>
                <div class="item" data-value="ch">
                  <i class="ch flag" />Switzerland
                </div>
                <div class="item" data-value="sy">
                  <i class="sy flag" />Syria
                </div>
                <div class="item" data-value="tw">
                  <i class="tw flag" />Taiwan
                </div>
                <div class="item" data-value="tj">
                  <i class="tj flag" />Tajikistan
                </div>
                <div class="item" data-value="tz">
                  <i class="tz flag" />Tanzania
                </div>
                <div class="item" data-value="th">
                  <i class="th flag" />Thailand
                </div>
                <div class="item" data-value="tl">
                  <i class="tl flag" />Timorleste
                </div>
                <div class="item" data-value="tg">
                  <i class="tg flag" />Togo
                </div>
                <div class="item" data-value="tk">
                  <i class="tk flag" />Tokelau
                </div>
                <div class="item" data-value="to">
                  <i class="to flag" />Tonga
                </div>
                <div class="item" data-value="tt">
                  <i class="tt flag" />Trinidad
                </div>
                <div class="item" data-value="tn">
                  <i class="tn flag" />Tunisia
                </div>
                <div class="item" data-value="tr">
                  <i class="tr flag" />Turkey
                </div>
                <div class="item" data-value="tm">
                  <i class="tm flag" />Turkmenistan
                </div>
                <div class="item" data-value="tv">
                  <i class="tv flag" />Tuvalu
                </div>
                <div class="item" data-value="ug">
                  <i class="ug flag" />Uganda
                </div>
                <div class="item" data-value="ua">
                  <i class="ua flag" />Ukraine
                </div>
                <div class="item" data-value="ae">
                  <i class="ae flag" />United Arab Emirates
                </div>
                <div class="item" data-value="us">
                  <i class="us flag" />United States
                </div>
                <div class="item" data-value="uy">
                  <i class="uy flag" />Uruguay
                </div>
                <div class="item" data-value="um">
                  <i class="um flag" />Us Minor Islands
                </div>
                <div class="item" data-value="vi">
                  <i class="vi flag" />Us Virgin Islands
                </div>
                <div class="item" data-value="uz">
                  <i class="uz flag" />Uzbekistan
                </div>
                <div class="item" data-value="vu">
                  <i class="vu flag" />Vanuatu
                </div>
                <div class="item" data-value="va">
                  <i class="va flag" />Vatican City
                </div>
                <div class="item" data-value="ve">
                  <i class="ve flag" />Venezuela
                </div>
                <div class="item" data-value="vn">
                  <i class="vn flag" />Vietnam
                </div>
                <div class="item" data-value="wf">
                  <i class="wf flag" />Wallis and Futuna
                </div>
                <div class="item" data-value="eh">
                  <i class="eh flag" />Western Sahara
                </div>
                <div class="item" data-value="ye">
                  <i class="ye flag" />Yemen
                </div>
                <div class="item" data-value="zm">
                  <i class="zm flag" />Zambia
                </div>
                <div class="item" data-value="zw">
                  <i class="zw flag" />Zimbabwe
                </div>
              </div>
            </div>
          </div>
        </div>
        <h4 class="ui dividing header">Billing Information</h4>
        <div class="field">
          <label>Card Type</label>
          <div class="ui selection dropdown">
            <input type="hidden" name="card[type]" />
            <div class="default text">Type</div>
            <i class="dropdown icon" />
            <div class="menu">
              <div class="item" data-value="visa">
                <i class="visa icon" />
                Visa
              </div>
              <div class="item" data-value="amex">
                <i class="amex icon" />
                American Express
              </div>
              <div class="item" data-value="discover">
                <i class="discover icon" />
                Discover
              </div>
            </div>
          </div>
        </div>
        <div class="fields">
          <div class="seven wide field">
            <label>Card Number</label>
            <input
              type="text"
              name="card[number]"
              maxlength="16"
              placeholder="Card #"
            />
          </div>
          <div class="three wide field">
            <label>CVC</label>
            <input
              type="text"
              name="card[cvc]"
              maxlength="3"
              placeholder="CVC"
            />
          </div>
          <div class="six wide field">
            <label>Expiration</label>
            <div class="two fields">
              <div class="field">
                <select
                  class="ui fluid search dropdown"
                  name="card[expire-month]"
                >
                  <option value="">Month</option>
                  <option value="1">January</option>
                  <option value="2">February</option>
                  <option value="3">March</option>
                  <option value="4">April</option>
                  <option value="5">May</option>
                  <option value="6">June</option>
                  <option value="7">July</option>
                  <option value="8">August</option>
                  <option value="9">September</option>
                  <option value="10">October</option>
                  <option value="11">November</option>
                  <option value="12">December</option>
                </select>
              </div>
              <div class="field">
                <input
                  type="text"
                  name="card[expire-year]"
                  maxlength="4"
                  placeholder="Year"
                />
              </div>
            </div>
          </div>
        </div>
        <h4 class="ui dividing header">Receipt</h4>
        <div class="field">
          <label>Send Receipt To:</label>
          <div class="ui fluid multiple search selection dropdown">
            <input type="hidden" name="receipt" />
            <i class="dropdown icon" />
            <div class="default text">Saved Contacts</div>
            <div class="menu">
              <div class="item" data-value="jenny" data-text="Jenny">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/jenny.jpg"
                />
                Jenny Hess
              </div>
              <div class="item" data-value="elliot" data-text="Elliot">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/elliot.jpg"
                />
                Elliot Fu
              </div>
              <div class="item" data-value="stevie" data-text="Stevie">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/stevie.jpg"
                />
                Stevie Feliciano
              </div>
              <div class="item" data-value="christian" data-text="Christian">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/christian.jpg"
                />
                Christian
              </div>
              <div class="item" data-value="matt" data-text="Matt">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/matt.jpg"
                />
                Matt
              </div>
              <div class="item" data-value="justen" data-text="Justen">
                <img
                  class="ui mini avatar image"
                  src="/images/avatar/small/justen.jpg"
                />
                Justen Kitsune
              </div>
            </div>
          </div>
        </div>
        <div class="ui segment">
          <div class="field">
            <div class="ui toggle checkbox">
              <input type="checkbox" name="gift" tabindex="0" class="hidden" />
              <label>Do not include a receipt in the package</label>
            </div>
          </div>
        </div>
        <div class="ui button" tabindex="0">
          Submit Order
        </div>
      </form>
    );
  }
}

export default Signup;
