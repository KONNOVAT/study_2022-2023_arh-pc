﻿(()=>{"use strict";var i,e,r,t,s,n,o={55663:(i,e,r)=>{r(21466),r(83946),r(76142),r(50110),r(59357),r(91181),r(56997),r(96253);var t=r(86067),s=r(93680),n=r(35676),o=r(15544),l=r(86409),c=r(49535),d=r(416),w=r(95724),a=r(86125),u=r(76852),f=r(54612),p=r(18149),v=r(70655);function h(i){if(Array.isArray(i)){var e=(0,v.__read)(i,4),r=e[0],t=e[1],s=e[2],n=e[3];return[parseInt(r),parseInt(t),Array.isArray(s)?s.map((function(i){return parseInt(i)})):[],Array.isArray(n)?n.map((function(i){return parseInt(i)})):[]]}}var _={customType:4,someType:5,listsType:6,contactsType:7,specialTypes:[8,9,10],flistBox(i,e,r,s,n,l,c){if(c=!!c,window.cur.flistTpl=s,0===r.length&&(r={}),window.cur.flistList=e,window.cur.flistFriends=e,window.cur.flistSearchList=[],window.cur.flistSearchTotal=-1,window.cur.flistSearchLoadStr="",window.cur.flistSelectedList=r&&r[0]?r:[],window.cur.flistSelected={},(0,w.each)(r,((i,e)=>{window.cur.flistSelected[e[0]]=1})),window.cur.flistSelectedShowed=0,window.cur.flistHash=l,window.cur.flistBox=i,window.cur.isVKMiniApp=c,window.cur.flistIndex=new p.vkIndexer(e,(i=>i[1]+" "+i[4])),i.removeButtons(),i.addButton(n||(0,t.getLang)("global_save"),this.submitFlistBox),window.cur.flistTooltip){var d=(0,o.ge)("flist_sel"),a={className:"flist_info_tt",text:window.cur.flistTooltip,width:250,nohide:1,nohideover:1};a=window.cur.flistTooltipRight?(0,w.extend)(a,{dir:"left",slideX:-15,shift:[-(0,o.getSize)(d)[0]-15,-28]}):(0,w.extend)(a,{dir:"right",slideX:15,shift:[265,-28]}),(0,u.showTooltip)(d,a),window.stManager.add([window.jsc("web/tooltips.js")],(()=>{i.setOptions({onHide:tooltips.hide.pbind(d)})}))}else i.addButton((0,t.getLang)("global_cancel"),(()=>{i.hide()}),"no");return window.cur.flistScrollbar=new Scrollbar("flist_scroll_wrap",{nomargin:!0,right:window.vk.rtl?"auto":0,left:window.vk.rtl?0:"auto",more:_.flistMore,onScroll:i=>{(0,o.ge)("flist_scroll_wrap").scrollTop>0?(0,o.addClass)("flist_cont","flist_scrolled"):(0,o.removeClass)("flist_cont","flist_scrolled")}}),window.cur.flistAllCont=(0,o.ge)("flist_all_list"),window.cur.flistSelCont=(0,o.ge)("flist_sel_list"),window.cur.flistSearchEl=(0,o.ge)("flist_search"),window.cur.flistSearchContEl=(0,o.geByClass1)("flist_search_cont","flist_cont"),window.cur.flistLimit&&window.cur.flistSelectedCnt>=window.cur.flistLimit-1&&_.flistFull(),window.cur.flistCountStr&&window.cur.flistSelectedCnt>0&&((0,o.ge)("flist_sel_summary").innerHTML=(0,t.langNumeric)(window.cur.flistSelectedCnt,window.cur.flistCountStr)),(0,o.toggleClass)("flist_cont","flist_select_items",window.cur.flistSelectedCnt>0),!1},submitFlistBox(){var i=(0,o.ge)("flist_list_name"),e=!1;if((0,o.isVisible)(i)){if(!(e=i.value))return(0,l.notaBene)(i);(0,d.placeholderSetup)(i,{back:!0}),(0,o.elfocus)(i,0,i.value.length)}var r={},t=[];if(window.cur.isVKMiniApp&&(r.lists=[],r.friends=[]),(0,w.each)(window.cur.flistSelectedList,((i,e)=>{window.cur.isVKMiniApp?"list"===e[5]?r.lists.push(e):r.friends.push(e):r[e[0]]=e,t.push(e[0])})),window.cur.flistFriendsPrivacy)return s.ajax.post("al_settings.php",{act:"hide_friends",hash:window.cur.flistHash,ids:t.join(",")},{onDone:(i,e)=>{(0,a.showDoneBox)(window.cur.flistFriendsPrivacyText),window.cur.flistBox.hide()},showProgress:window.cur.flistBox.showProgress,hiderogress:window.cur.flistBox.hideProgress}),(0,a.showDoneBox)(window.cur.flistFriendsPrivacyText,{out:4e3}),void(window.cur.flistNavReload&&setTimeout((()=>{window.nav.reload()}),2e3));window.cur.onFlistSave&&window.cur.onFlistSave(t,r,window.cur.flistHash,e),window.cur.flistBox.leaveOnSave||window.cur.flistBox.hide(!0)},flistMore(){window.cur.privacy&&window.cur.privacy.pagination&&!window.cur.flistSelectedShowed&&window.cur.flistList.length-window.cur.flistShown<10&&window.cur.flistList.length<window.cur.flistTotalCount?window.cur.flistSearchStr?_.flistSearchPagination():window.cur.flistMoreLoading||(window.cur.flistMoreLoading=!0,s.ajax.post("al_friends.php",(0,w.extend)({},window.cur.privacy.chooseBoxOpts||{},{act:"select_friends_box",Checked:Object.keys(window.cur.flistSelected).join(","),pagination:1,offset:window.cur.flistList.length}),{onDone:i=>{window.cur.flistMoreLoading=!1,(0,w.isArray)(i)&&(i.forEach((i=>{window.cur.flistFriends.push(i),window.cur.flistIndex.add(i)})),_.flistMore())},onFail:()=>{window.cur.flistMoreLoading=!1}})):_.flistDrawItems()},flistDrawItems(){for(var i=window.cur.flistShown+60;window.cur.flistShown<i&&_.flistShowOne(window.cur.flistList[window.cur.flistShown+1]);)++window.cur.flistShown;setTimeout((()=>{window.cur.flistScrollbar&&window.cur.flistScrollbar.update()}),10)},flistShowOne(i,e){if(!i)return!1;if((0,o.ge)("flist_item_wrap"+i[0]))return(0,o.show)((0,o.ge)("flist_item_wrap"+i[0])),!0;var r=i[1];window.cur.flistSelection&&(r=r.replace(window.cur.flistSelection.re,window.cur.flistSelection.val));var t=(0,o.ce)("div",{id:"flist_item_wrap"+i[0],className:"flist_item_wrap"+(window.cur.flistSelected[i[0]]?" flist_item_checked":""),innerHTML:(0,o.rs)(window.cur.flistTpl,{id:i[0],name:r,photo:i[2],alt:(0,w.clean)(r)})});return e?window.cur.flistAllCont.insertBefore(t,window.cur.flistAllCont.firstChild):window.cur.flistAllCont.appendChild(t),!0},flistSelect(i,e,r){var s=(0,o.ge)("flist_item_wrap"+i),n=e.parentNode,l=Boolean(e.dataset.isOne);if("flist_item_sel"==n.id.slice(0,14)||(0,o.hasClass)(s,"flist_item_checked")){delete window.cur.flistSelected[i];for(var c=0;c<window.cur.flistSelectedList.length;c++)if(window.cur.flistSelectedList[c][0]==i){window.cur.flistSelectedList.splice(c,1);break}s&&(0,o.removeClass)(s,"flist_item_checked");var d=(0,o.ge)("flist_item_sel"+i);if(d&&((0,o.re)(d),window.cur.flistSelectedCnt>window.cur.flistSelInRow&&window.cur.flistSelectedList[window.cur.flistSelInRow-1])){var u=window.cur.flistSelectedList[window.cur.flistSelInRow-1];(0,o.ge)("flist_item_sel"+u[0])||window.cur.flistSelCont.insertBefore((0,o.ce)("div",{id:"flist_item_sel"+u[0],className:"flist_item_wrap",innerHTML:(0,o.rs)(window.cur.flistTpl,{id:u[0],name:u[1],photo:u[2],alt:(0,w.clean)(u[1])})}),(0,o.ge)("flist_sel_show_all"))}window.cur.flistSelectedCnt--,0===window.cur.flistSelectedCnt?((0,o.show)("flist_info"),window.cur.flistSelectedShowed||(0,o.hide)("flist_search_toggler_wrap")):window.cur.flistSelectedCnt>window.cur.flistSelInRow?((0,o.val)("flist_sel_show_all","+"+(window.cur.flistSelectedCnt-window.cur.flistSelInRow)),(0,o.removeClass)("flist_sel_show_all","unshown")):window.cur.flistSelectedCnt==window.cur.flistSelInRow&&(0,o.addClass)("flist_sel_show_all","unshown"),window.cur.flistLimit&&window.cur.flistSelectedCnt==window.cur.flistLimit-1&&(0,o.removeClass)(window.cur.flistAllCont,"flist_full"),(0,a.curBox)().changed=!0}else if(!(0,o.hasClass)(s,"flist_item_checked")){if(window.cur.flistLimit&&window.cur.flistSelectedCnt>=window.cur.flistLimit)return _.flistFull(r||window.event),!1;var f=(0,o.val)(s);if((0,o.addClass)(s,"flist_item_checked"),0==window.cur.flistSelectedCnt&&((0,o.hide)("flist_info"),(0,o.show)("flist_search_toggler_wrap")),window.cur.flistSelectedCnt++,window.cur.flistSelCont.insertBefore((0,o.ce)("div",{id:"flist_item_sel"+i,className:"flist_item_wrap",innerHTML:f}),window.cur.flistSelCont.firstChild),window.cur.flistSelectedCnt>window.cur.flistSelInRow){var p=(0,o.geByClass)("flist_item_wrap",window.cur.flistSelCont);(0,o.re)(p[p.length-1]),(0,o.val)("flist_sel_show_all","+"+(window.cur.flistSelectedCnt-window.cur.flistSelInRow)),(0,o.removeClass)("flist_sel_show_all","unshown")}window.cur.flistLimit&&window.cur.flistSelectedCnt>=window.cur.flistLimit&&_.flistFull(r||window.event);for(var v=0;v<window.cur.flistList.length;v++)if(window.cur.flistList[v]&&window.cur.flistList[v][0]==i){window.cur.flistSelectedList.unshift(window.cur.flistList[v]);break}window.cur.flistSelected[i]=1,window.cur.flistSearchStr&&_.flistSearch(!1)}return(0,o.toggleClass)("flist_cont","flist_select_items",window.cur.flistSelectedCnt>0),window.cur.flistCountStr&&(0,o.val)("flist_sel_summary",window.cur.flistSelectedCnt>0?(0,t.langNumeric)(window.cur.flistSelectedCnt,window.cur.flistCountStr):window.cur.flistNoSelStr),window.cur.flistScrollbar.update(),l&&this.submitFlistBox(),!1},flistFull(i){var e;i&&((0,o.hasClass)(i.target,"flist_item_thumb")?e=i.target:((0,o.hasClass)(i.target,"flist_item")&&(e=i.target)||(e=(0,o.gpeByClass)("flist_item",i.target)))&&(e=(0,o.geByClass1)("flist_item_thumb",e)),e&&(window.tooltips&&tooltips.hideAll(),(0,u.showTooltip)(e,{text:window.cur.limitTooltip,className:"flist_max_size_tt",dir:"auto",slide:-15,shift:[15,10],nohide:1,nohideover:1,hasover:1}),setTimeout((()=>{window.tooltips&&tooltips.hide(e)}),2e3)));(0,o.addClass)(window.cur.flistAllCont,"flist_full")},flistSearch(i){i=(0,w.trim)(i),window.cur.flistSearchStr=i,window.cur.privacy&&window.cur.privacy.pagination&&!window.cur.flistSelectedShowed&&window.cur.flistIndex.list.length<window.cur.flistTotalCount&&i?_.flistSearchPagination():(window.cur.flistSearchList=[],window.cur.flistSearchTotal=-1,window.cur.flistSearchLoadStr="",clearTimeout(window.cur.flistSearchLoadMore),i?(window.cur.flistList=(window.cur.flistSelectedShowed?window.cur.flistSelectedIndex:window.cur.flistIndex).search(i),window.cur.flistSelection={re:new RegExp("("+i.replace(window.cur.flistIndex.delimiter,"|").replace(/[\/\\\(\)\[\]\{\}\*,]/g,"").replace(/^\||\|$/g,"")+")","gi"),val:'<em class="highlight">$1</em>'},window.cur.flistScrollbar.scrollTop(0)):(window.cur.flistList=window.cur.flistSelectedShowed?window.cur.flistSelectedList:window.cur.flistFriends,window.cur.flistSelection=!1,(0,o.val)(window.cur.flistSearchEl,""),(0,o.addClass)(window.cur.flistSearchContEl,"ui_search_field_empty")),window.cur.flistList.length?(window.cur.flistAllCont.innerHTML="",window.cur.flistShown=-1,_.flistMore()):(window.cur.flistAllCont.innerHTML="",window.cur.flistAllCont.append((0,o.ce)("div",{className:"flist_empty no_select",innerHTML:(0,t.getLang)("apps_no_friends_for_query")})),window.cur.flistShown=0))},flistSearchPagination(){if(!(window.cur.flistSearchLoading||window.cur.flistSearchLoadStr===window.cur.flistSearchStr&&window.cur.flistSearchList.length>=window.cur.flistSearchTotal)&&window.cur.privacy){var i=window.cur.flistSearchStr;window.cur.flistSearchLoadMore&&clearTimeout(window.cur.flistSearchLoadMore),window.cur.flistSearchLoadStr===i?e():window.cur.flistSearchLoadMore=setTimeout(e,500)}function e(){window.cur.flistSearchLoading=!0,s.ajax.post("al_friends.php",(0,w.extend)({},window.cur.privacy.chooseBoxOpts||{},{act:"select_friends_search",q:i,offset:window.cur.flistSearchLoadStr===i?window.cur.flistSearchList.length:0}),{onDone:(e,r)=>{window.cur.flistSearchLoadStr!==i&&(window.cur.flistSearchLoadStr=i,window.cur.flistShown=-1,window.cur.flistSearchList=[],window.cur.flistAllCont.innerHTML=""),window.cur.flistSearchTotal=+r,e.forEach((i=>{window.cur.flistSearchList.push(i)})),window.cur.flistList=window.cur.flistSearchList,_.flistDrawItems(),window.cur.flistSearchLoading=!1},onFail:()=>{window.cur.flistSearchLoading=!1}})}},flistToggleAllSelected(){window.cur.flistSelectedShowed?(window.cur.flistSelectedShowed=0,(0,o.removeClass)("flist_sel_show_all","flist_sel_showed_all"),(0,o.removeClass)("flist_search_toggler","on"),0===window.cur.flistSelectedCnt&&((0,o.hide)("flist_search_toggler_wrap"),(0,o.removeClass)("flist_cont","flist_select_items")),_.flistSearch(!1)):(window.cur.flistSelectedShowed=1,(0,o.addClass)("flist_sel_show_all","flist_sel_showed_all"),(0,o.addClass)("flist_search_toggler","on"),window.cur.flistList=window.cur.flistSelectedList,window.cur.flistAllCont.innerHTML="",window.cur.flistShown=-1,_.flistMore(),window.cur.flistSelectedIndex=new p.vkIndexer(window.cur.flistSelectedList,(i=>i[1]+" "+i[4]))),window.cur.flistSelection=!1,(0,o.val)(window.cur.flistSearchEl,"")},hideFriends(i,e){var r=window.cur.privacy[i][2];return(0,f.showBox)("al_friends.php",{act:"select_friends_box",from:"friends_privacy",Checked:r.join(",")},{stat:[window.jsc("web/privacy.js"),"privacy.css",window.jsc("web/indexer.js")],params:{dark:1}}),window.cur.onFlistSave=function(e,r,t){s.ajax.post("al_settings.php",{act:"hide_friends",hash:t,ids:e.join(",")},{onDone:(e,r)=>{(0,o.ge)("privacy_"+i+"_hide").innerHTML=e,window.cur.privacy[i]=r,window.cur.onPrivacyChanged&&window.cur.onPrivacyChanged(i)}})},!1},update(i,e){var r=(0,o.ge)("privacy_edit_"+i),t=window.cur.privacy[i],s=t[0],n=window.cur.privacy[i+"_types"]||window.cur.privacy._types,l=window.cur.privacy[i+"_lists"]||window.cur.privacy._lists||{},c={};for(var d in l)l.hasOwnProperty(d)&&(c[parseInt(d)]=l[d]);if(r){var w=!n[s]&&i.match("profile_button");r.innerHTML=w?n.list28:n[s];var a=(0,o.ge)("privacy_header");a&&(a.innerHTML=w?n.list28:n[s]);var u=(0,o.gpeByClass)("privacy_edit_wrap",r);if(u&&u.nextSibling&&!w)if(s==_.listsType){var f=[];for(var p in t[2])if(t[2].hasOwnProperty(p)){var v=-t[2][p],y=(v-1)%8+1;if(c[v]){var g=void 0;g=v<100?'<a href="/friends?section=list'+v+'" class="group'+y+'" role="listitem">'+c[v]+"</a>":'<span class="group'+y+'">'+c[v]+"</span>",f.push(g)}}u.nextSibling.innerHTML=(f.length?": ":"")+f.join(", ")}else u.nextSibling.innerHTML="";if(u&&(0,o.hasClass)(u,"privacy_graphic"))(0==s&&"hidden_friends"!==i||s==_.customType&&t[1]&&t[2]&&"0"==t[2][0]||1==s&&"appscall"===i?o.removeClass:o.addClass)(u,"privacy_locked")}window.cur.onPrivacyChanged&&window.cur.onPrivacyChanged(i,e?h(e):e)},setValue(i,e){var r=window.cur.privacy[i],t=window.cur.onPrivacyChanged;window.cur.privacy[i]=e,window.cur.onPrivacyChanged=null,_.update(i,r),window.cur.onPrivacyChanged=t},someSaved(i,e,r,s){var n=window.cur.privacy[i];window.cur.privacy[i]=[_.someType,0,e,[]];for(var l=window.cur.privacy.lang||{},c=e.length,d=[],w=0;w<c&&w<5;++w){var a=e[w],u=s?r[w]:r[a],f=u[4].replace(/'/g,"");d.push('<a href="/'+(f||"id"+a)+'" onclick="return nav.go(this, event)">'+(u[5]||u[1])+"</a>")}d=d.join(", "),c>5&&(d+=" "+(l.some?(0,t.getLang)(l.some,c-5):(0,t.getLang)("privacy_N_friends_some",c-5)));var p=(0,o.ge)("privacy_edit_"+i),v=(0,o.gpeByClass)("privacy_edit_wrap",p),h=window.cur.privacy[i+"_types"]||window.cur.privacy._types;p.innerHTML=h[_.someType],v.nextSibling.innerHTML=": "+d,window.cur.onPrivacyChanged&&window.cur.onPrivacyChanged(i,n)},customSaved(i,e,r,s){var n=window.cur.privacy[i];window.cur.privacy[i]=e;var l=window.cur.privacy.lang||{};if(1==e[1]&&!e[3].length||e[0]==_.listsType)_.update(i,n);else if(e[0]==_.someType)_.someSaved(i,e[2],r,!0);else{var c=(0,o.ge)("privacy_edit_"+i),d=(0,o.gpeByClass)("privacy_edit_wrap",c),w=window.cur.privacy[i+"_types"]||window.cur.privacy._types,a=window.cur.privacy[i+"_lists"]||window.cur.privacy._lists||{},u=w[_.listsType],f="";if(1==e[1])u=w[e[2][0]];else{f=[];for(var p=r.length,v=!1,h=0;h<p&&h<5;++h){var y=r[h],g=y[0];if(g>0){var S=y[4].replace(/'/g,"");v=!0,f.push('<a href="/'+(S||"id"+g)+'" onclick="return nav.go(this, event)">'+y[6]+"</a>")}else{var m=-g,C=(m-1)%8+1;f.push('<a href="/friends?section=list'+m+'" class="group'+C+'" role="listitem">'+a[m]+"</a>")}}v&&(u=w[_.someType]),f=": "+f.join(", "),p>5&&(f+=" "+(0,t.getLang)(l.some||"privacy_N_friends_some",p-5))}if(s.length){for(var b=s.length,T=[],x=0;x<b&&x<5;++x){var L=s[x],k=L[0];if(k>0){var E=L[4].replace(/'/g,"");T.push('<a href="/'+(E||"id"+k)+'" onclick="return nav.go(this, event)">'+L[6]+"</a>")}else{var j=-k,P=(j-1)%8+1;T.push('<a href="/friends?section=list'+j+'" class="group'+P+'" role="listitem">'+a[j]+"</a>")}}f+=", "+(0,t.getLang)("global_privacy_except")+" "+T.join(", "),b>5&&(f+=" "+(0,t.getLang)("privacy_N_friends_more",b-5))}c.innerHTML=u,d.nextSibling.innerHTML=f,(0,o.hasClass)(d,"privacy_graphic")&&(e[1]&&e[2]&&"0"==e[2][0]?o.removeClass:o.addClass)(d,"privacy_locked"),window.cur.onPrivacyChanged&&window.cur.onPrivacyChanged(i)}},choose(i,e,r,t){var s=window.cur.privSel,n=window.cur.privacy._noselect||"chat_actions"===s,l=window.cur.privacy[s];if(!window.cur.privacyNeedConfirm||t){if(n)return window.cur.onPrivacyChanged&&window.cur.onPrivacyChanged(s,e,r),_.qhide(),(0,c.cancelEvent)(i);if(e==_.customType){var d,a,u=[],p="";return l[0]==_.customType?(d=l[1],a=l[2],u=l[3]):l[0]==_.someType||l[0]==_.listsType?(d=0,a=l[2]):(d=1,a=l[2]),window.cur.onCprivSave=_.customSaved.pbind(s),window.cur.privacy.custom_box_type&&(p=window.cur.privacy.custom_box_type),(0,f.showBox)("al_friends.php",(0,w.extend)(window.cur.privacy.chooseBoxOpts||{},{act:"custom_privacy_box",type:d,plus:a.join(","),minus:u.join(","),opt:p,key:s}),{stat:["ui_controls.js","ui_controls.css"]})}if(e==_.someType){var v=l[0]==_.someType||l[0]==_.complexType&&0==l[1]?l[2].join(","):"";return window.cur.onFlistSave=function(i,e){_.someSaved(s,i,e)},(0,f.showTabbedBox)("al_friends.php",(0,w.extend)({},window.cur.privacy.chooseBoxOpts||{},{act:"select_friends_box",Checked:v,pagination:window.cur.privacy.pagination?1:""}),{stat:["ui_controls.js"]})}if(e==_.listsType){var h=(0,o.ge)("privacy_l_item"+r);if(!h&&s.match("profile_button"))l=window.cur.privacy[s]=[e,0,[-r],[]];else if("l_item_sel"==h.className){h.className="l_item";var y=(0,w.indexOf)(l[2],-r);if(-1!=y&&l[2].splice(y,1),!l[2].length&&"updates"!=s){var g=window.cur.privacy[s+"_types"]||window.cur.privacy._types,S=Object.keys(g);window.cur.privacy[s]=[(0,w.intval)(S[0]),1,[0],[]]}}else h.className="l_item_sel",l[0]!=e&&(l=window.cur.privacy[s]=[e,0,[],[]]),l[2].push(-r);return _.update(s,l),(0,c.cancelEvent)(i)}window.cur.privacy[s]=[e,1,[e],[]],_.update(s,l),_.qhide()}else window.cur.privacyNeedConfirm(s,e,(()=>{_.show((0,o.ge)("privacy_edit_"+s),i,s),_.choose(i,e,r,!0)}))},select(i,e){if(e||i!==window.cur.privSelIndex){if(!1!==window.cur.privSelIndex){var r=(0,o.ge)("privacy_item"+window.cur.privSelIndex);r&&(r.className="item"),window.cur.privSelIndex==_.listsType&&window.cur.privacy[window.cur.privSel][0]!=_.listsType&&(0,o.hide)(r.nextSibling)}window.cur.privSelIndex=i;var t=(0,o.ge)("privacy_item"+window.cur.privSelIndex),s=window.cur.privSelIndex==_.someType?"_plus":"";t.nextSibling&&t.nextSibling.id=="privacy_item"+_.listsType&&(0,o.isVisible)(t.nextSibling.nextSibling)?t.className="last item_sel"+s:i==_.listsType?(0,o.show)(t.nextSibling):t.className="item_sel"+s}},unselect(i){i==window.cur.privSelIndex&&((0,o.ge)("privacy_item"+i).className="item",window.cur.privSelIndex=!1)},hide(i){if(i&&i>0)window.cur.hidePrivacyTimer=window.setTimeout((()=>_.hide(0)),i);else{clearTimeout(window.cur.hidePrivacyTimer);var e=(0,o.ge)("privacy_header");e&&(-1===i?((0,o.hide)(window.cur.privEl),e&&e.tt&&(0,w.isFunction)(e.tt.hide)&&e.tt.hide()):o.isVisible&&((0,n.fadeOut)(window.cur.privEl,200),e&&e.tt&&(0,w.isFunction)(e.tt.hide)&&e.tt.hide()),window.cur.privSel=window.cur.privSelIndex=!1,(0,c.removeEvent)(document,"click",_.qhide))}},show(i,e,r){if((0,o.hasClass)(i,"privacy_link_disabled"))return(0,c.cancelEvent)(e);var t=window.cur.privacy[r],s=(0,o.gpeByClass)("privacy_edit_wrap",i);if(t&&s){if(window.cur.onPrivacyShow&&window.cur.onPrivacyShow(r),window.cur.privEl||(window.cur.privEl=(0,o.ge)("privacy_dropdown"),window.cur.privEl&&(window.cur.privRows=window.cur.privEl.firstChild)),window.cur.privEl){if(window.cur.privEl.parentNode!=s){(0,o.re)(window.cur.privEl),window.cur.privEl=s.appendChild(window.cur.privEl);var n=(0,o.ge)("privacy_header");n&&n.tt&&(0,w.isFunction)(n.tt.hide)&&n.tt.hide()}}else window.cur.privEl=s.appendChild((0,o.ce)("div",{id:"privacy_dropdown",innerHTML:'<div class="rows rows__flex"></div>'})),window.cur.privRows=window.cur.privEl.firstChild,(0,c.addEvent)(window.cur.privEl,"mouseout",_.hide.pbind(500)),(0,c.addEvent)(window.cur.privEl,"mouseover",(()=>{clearTimeout(window.cur.hidePrivacyTimer)}));window.cur.privEl.className="privacy_dropdown privacy_dropdown_"+r,setTimeout(c.addEvent.pbind(document,"click",_.qhide),1);var l=window.cur.privacy[r+"_types"]||window.cur.privacy._types,d=window.cur.privacy[r+"_lists"]||window.cur.privacy._lists||{},a=window.cur.privacy[r+"_hidden"]||window.cur.privacy._hidden||{},f=(0,o.getStyle)(i,"fontSize")||window.vk.fs;(0,o.setStyle)(window.cur.privRows,{fontSize:f}),window.cur.privSelIndex=t[0],a[window.cur.privSelIndex]&&(window.cur.privSelIndex=0);var p,v,h=[],y=Object.keys(d).length>0;for(var g in h.push('<div class="header" onclick="Privacy.hide(-1)"><div id="privacy_header" class="header_label">'+i.innerHTML+"</div></div>"),h.push('<div class="body body__flex" role="list" aria-labelledby="privacy_who_can_view">'),l)if(!a[g]){p=g==window.cur.privSelIndex&&g!=_.listsType?"_sel":"";var S="",m="";if(S+=`onmouseover="Privacy.select('${g}')"`,S+="list28"===g?' onclick="Privacy.choose(event, 6, 28)"':` onclick="Privacy.choose(event, '${g}')"`,S+=` onkeydown="if (event.key === 'Tab') {if (event.shiftKey) {Privacy.select('${+g-1}')} else {Privacy.select('${+g+1}')}}"`,g==_.listsType&&y&&(m=' tabindex="-1"'),g==_.listsType){if(!y)continue}else S+=` onmouseout="Privacy.unselect('${g}')"`;p&&g==_.someType&&(p+="_plus"),h.push('<button role="listitem" class="item'+p+'" id="privacy_item'+g+'" '+S+m+'type="button">'+l[g]+"</button>")}if(l[_.listsType]&&y){for(var C in v=window.cur.privSelIndex!=_.listsType,h.push('<div id="privacy_lists" class="privacy_lists privacy_lists__flex">'),h.push('<div class="l_header" onclick="return cancelEvent(event)"><div class="l_header_label">'+l[_.listsType]+"</div></div>"),d)if(d.hasOwnProperty(C)){var b=parseInt(C);p=v?"":(0,w.inArray)(-b,t[2])?"_sel":"",h.push('<button class="l_item'+p+'" id="privacy_l_item'+b+'" onclick="Privacy.choose(event, '+_.listsType+", "+b+')"><div class="privacy_item_icon"></div><span class="l_item_text">'+d[C]+"</span></button>")}h.push("</div>")}h.push("</div>"),window.cur.privRows.innerHTML=h.join(""),window.cur.privSel=r;var T=(0,o.data)(window.cur.privEl,"tween");T&&T.stop(!0),(0,o.show)(window.cur.privEl),l[_.listsType]&&v&&(0,o.hide)("privacy_lists"),_.toup=!1,(0,o.getClientRectOffsetY)(window.cur.privEl)>0&&(0,o.getClientRectOffsetY)(window.cur.privEl,!1,(0,o.getSize)(window.cur.privEl)[1])>0&&(_.toup=!0),_.toup?(0,o.addClass)(window.cur.privEl,"pdd_to_up"):(0,o.removeClass)(window.cur.privEl,"pdd_to_up"),window.cur.privacy[r+"_ralign"]?(0,o.addClass)(window.cur.privEl,"pdd_ralign"):(0,o.removeClass)(window.cur.privEl,"pdd_ralign");var x=window.cur.privacy[r+"_help"],L=window.cur.privacy[r+"_help_w"];if(x){var k=(0,o.ge)("privacy_header"),E=(0,o.getSize)(k);(0,u.showTooltip)(k,{text:x,width:L||300,dir:"left",slideX:15,shift:[-(E[0]+10),-E[1]/2,0],nohide:!0})}return(0,c.cancelEvent)(e)}},getValue(i){if(!window.cur.privacy||!window.cur.privacy[i])return"";var e=window.cur.privacy[i],r=[];if(e[0]<_.customType||e[0]==_.contactsType||_.specialTypes.some((i=>e[0]==i)))r=[e[0]];else if(e[0]==_.someType)r=[4,e[2].join(",")];else if(e[0]==_.listsType){var t=[];for(var s in e[2])e[2].hasOwnProperty(s)&&t.push(-e[2][s]);r=[5,t.join(",")]}else r=[-1,e[1],e[2].join(","),e[3].join(",")];return r.join("_")}};_.qhide=_.hide.pbind(-1),window.Privacy=_;try{window.stManager.done(window.jsc("web/privacy.js"))}catch(i){}}},l={};function c(i){var e=l[i];if(void 0!==e)return e.exports;var r=l[i]={exports:{}};return o[i].call(r.exports,r,r.exports,c),r.exports}c.m=o,i=[],c.O=(e,r,t,s)=>{if(!r){var n=1/0;for(w=0;w<i.length;w++){for(var[r,t,s]=i[w],o=!0,l=0;l<r.length;l++)(!1&s||n>=s)&&Object.keys(c.O).every((i=>c.O[i](r[l])))?r.splice(l--,1):(o=!1,s<n&&(n=s));if(o){i.splice(w--,1);var d=t();void 0!==d&&(e=d)}}return e}s=s||0;for(var w=i.length;w>0&&i[w-1][2]>s;w--)i[w]=i[w-1];i[w]=[r,t,s]},c.n=i=>{var e=i&&i.__esModule?()=>i.default:()=>i;return c.d(e,{a:e}),e},r=Object.getPrototypeOf?i=>Object.getPrototypeOf(i):i=>i.__proto__,c.t=function(i,t){if(1&t&&(i=this(i)),8&t)return i;if("object"==typeof i&&i){if(4&t&&i.__esModule)return i;if(16&t&&"function"==typeof i.then)return i}var s=Object.create(null);c.r(s);var n={};e=e||[null,r({}),r([]),r(r)];for(var o=2&t&&i;"object"==typeof o&&!~e.indexOf(o);o=r(o))Object.getOwnPropertyNames(o).forEach((e=>n[e]=()=>i[e]));return n.default=()=>i,c.d(s,n),s},c.d=(i,e)=>{for(var r in e)c.o(e,r)&&!c.o(i,r)&&Object.defineProperty(i,r,{enumerable:!0,get:e[r]})},c.f={},c.e=i=>Promise.all(Object.keys(c.f).reduce(((e,r)=>(c.f[r](i,e),e)),[])),c.u=i=>{if(57468===i)return"SilentModeForms.dcc6b6bcab424d304a59.js"},c.miniCssF=i=>i+".412c69e46575927a994a.css",c.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(i){if("object"==typeof window)return window}}(),c.o=(i,e)=>Object.prototype.hasOwnProperty.call(i,e),t={},c.l=(i,e,r,s)=>{if(t[i])t[i].push(e);else{var n,o;if(void 0!==r)for(var l=document.getElementsByTagName("script"),d=0;d<l.length;d++){var w=l[d];if(w.getAttribute("src")==i||w.getAttribute("data-webpack")=="vk:"+r){n=w;break}}n||(o=!0,(n=document.createElement("script")).charset="utf-8",n.timeout=120,c.nc&&n.setAttribute("nonce",c.nc),n.setAttribute("data-webpack","vk:"+r),n.src=i),t[i]=[e];var a=(e,r)=>{n.onerror=n.onload=null,clearTimeout(u);var s=t[i];if(delete t[i],n.parentNode&&n.parentNode.removeChild(n),s&&s.forEach((i=>i(r))),e)return e(r)},u=setTimeout(a.bind(null,void 0,{type:"timeout",target:n}),12e4);n.onerror=a.bind(null,n.onerror),n.onload=a.bind(null,n.onload),o&&document.head.appendChild(n)}},c.r=i=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(i,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(i,"__esModule",{value:!0})},c.p="/dist/",s=i=>new Promise(((e,r)=>{var t=c.miniCssF(i),s=c.p+t;if(((i,e)=>{for(var r=document.getElementsByTagName("link"),t=0;t<r.length;t++){var s=(o=r[t]).getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(s===i||s===e))return o}var n=document.getElementsByTagName("style");for(t=0;t<n.length;t++){var o;if((s=(o=n[t]).getAttribute("data-href"))===i||s===e)return o}})(t,s))return e();((i,e,r,t)=>{var s=document.createElement("link");s.rel="stylesheet",s.type="text/css",s.onerror=s.onload=n=>{if(s.onerror=s.onload=null,"load"===n.type)r();else{var o=n&&("load"===n.type?"missing":n.type),l=n&&n.target&&n.target.href||e,c=new Error("Loading CSS chunk "+i+" failed.\n("+l+")");c.code="CSS_CHUNK_LOAD_FAILED",c.type=o,c.request=l,s.parentNode.removeChild(s),t(c)}},s.href=e,document.head.appendChild(s)})(i,s,e,r)})),n={27824:0},c.f.miniCss=(i,e)=>{n[i]?e.push(n[i]):0!==n[i]&&{57468:1}[i]&&e.push(n[i]=s(i).then((()=>{n[i]=0}),(e=>{throw delete n[i],e})))},(()=>{var i={27824:0};c.f.j=(e,r)=>{var t=c.o(i,e)?i[e]:void 0;if(0!==t)if(t)r.push(t[2]);else{var s=new Promise(((r,s)=>t=i[e]=[r,s]));r.push(t[2]=s);var n=c.p+c.u(e),o=new Error;c.l(n,(r=>{if(c.o(i,e)&&(0!==(t=i[e])&&(i[e]=void 0),t)){var s=r&&("load"===r.type?"missing":r.type),n=r&&r.target&&r.target.src;o.message="Loading chunk "+e+" failed.\n("+s+": "+n+")",o.name="ChunkLoadError",o.type=s,o.request=n,t[1](o)}}),"chunk-"+e,e)}},c.O.j=e=>0===i[e];var e=(e,r)=>{var t,s,[n,o,l]=r,d=0;for(t in o)c.o(o,t)&&(c.m[t]=o[t]);if(l)var w=l(c);for(e&&e(r);d<n.length;d++)s=n[d],c.o(i,s)&&i[s]&&i[s][0](),i[n[d]]=0;return c.O(w)},r=self.webpackChunkvk=self.webpackChunkvk||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))})();var d=c.O(void 0,[76429,75514,24509,56990,98066,40885,68592],(()=>c(55663)));d=c.O(d)})();