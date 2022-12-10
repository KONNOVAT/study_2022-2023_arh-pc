﻿(()=>{"use strict";var __webpack_modules__={29449:(e,t,o)=>{function r(){return{icon:'<svg width="20" height="20" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><g id="user_outline_20__Icons" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="user_outline_20__Icons-20/user_outline_20"><g id="user_outline_20__user_outline_20"><path opacity=".1" d="M0 0h20v20H0z"/><path d="M12.5 5a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0ZM14 5a4 4 0 1 1-8 0 4 4 0 0 1 8 0ZM4 15.5c0 .72.36 1 1 1h10c.64 0 1-.28 1-1 0-2.33-2.57-3.5-6-3.5s-6 1.17-6 3.5Zm-1.5 0c0-3.48 3.33-5 7.5-5s7.5 1.52 7.5 5c0 1.63-1.1 2.5-2.5 2.5H5c-1.4 0-2.5-.87-2.5-2.5Z" id="user_outline_20__Icon-Color" fill="currentColor" fill-rule="nonzero"/></g></g></g></svg>',name:"user_outline_20"}}o.d(t,{getIcon20UserOutline:()=>r})},80842:(e,t,o)=>{o.d(t,{GROUPS_ADMIN_LEVEL_USER:()=>r,GROUPS_ADMIN_LEVEL_ADMINISTRATOR:()=>a,USER_META_FIELD_IS_DONUT_PAID_MEMBER:()=>_,GROUPS_CLASS_EVENT:()=>i});var r=0,a=3,_="is_donut_paid_member",i=2},21126:(__unused_webpack___webpack_module__,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{default:()=>__WEBPACK_DEFAULT_EXPORT__});var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(59357),_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(15544),_shared_lib_browser__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(26271),_web_lib_lang__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(86067),_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__(49535),_web_lib_message_box__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__(54612),_web_lib_ui__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(86409),_web_lib_ui_util__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(59121),_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(95724),_shared_lib_convert__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__(68040),WallUpload={_videoUploadIndex:null,photoUploaded:function(e,t){var o=void 0!==e.ind?e.ind:e,r=(e.fileName?e.fileName:e).replace(/[&<>"']/g,""),a=e.fileName?o+"_"+e.fileName:e,_=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("upload"+a+"_progress_wrap");_&&(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hide)((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("progress_x",_)),ajax.post("al_photos.php",(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_8__.extend)({act:"choose_uploaded"},t),{onDone:function(e,t){WallUpload.addMedia().chooseMedia("photo",e,(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_8__.extend)(t,{upload_ind:o+"_"+r}))},onFail:WallUpload.uploadFailed.pbind(e)})},uploadFailed:function(e,t){var o=void 0!==e.ind?e.ind:e,r=Upload.options[o],a=(e.fileName?e.fileName:e).replace(/[&<>"']/g,"");if("fileApi"==Upload.types[o]&&!r.wiki_editor){var _,i=e.fileName?o+"_"+e.fileName:e;cur.imMedia?((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.re)("upload"+i+"_progress_wrap"),_=cur.imMedia.lnkId,cur.addMedia[_].unchooseMedia()):cur.addMedia&&((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.re)("upload"+i+"_progress_wrap"),(_=(cur.attachMediaIndexes||{})[a])&&cur.addMedia[_].unchooseMedia()),1==r.filesTotalCount&&setTimeout((0,_web_lib_message_box__WEBPACK_IMPORTED_MODULE_5__.showFastBox)({title:(0,_web_lib_lang__WEBPACK_IMPORTED_MODULE_3__.getLang)("global_error")},(0,_web_lib_lang__WEBPACK_IMPORTED_MODULE_3__.getLang)("wall_add_photo_error")).hide,2e3)}(0,_web_lib_ui_util__WEBPACK_IMPORTED_MODULE_7__.topError)("Upload failed",{dt:-1,type:102,url:((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("file_uploader_form"+o)||{}).action}),Upload.embed(o)},show:function(){cur.uploadInited&&("feed"==cur.wallType?(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.removeClass)(cur.uploadWrap,"post_upload_min_wrap"):(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.show)(cur.uploadWrap))},hide:function(){cur.uploadInited&&("feed"==cur.wallType?(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.addClass)(cur.uploadWrap,"post_upload_min_wrap"):(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hide)(cur.uploadWrap),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.hide)("post_upload_dropbox"))},addMedia:function(){return cur.dropboxAddMedia||cur.wallAddMedia},attachEl:function(){return WallUpload.dropboxAttachEl||(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("submit_post_box")},attachToEl:function(e){e=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)(e);var t=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("post_upload_dropbox");if(WallUpload.dropboxAttachEl=e,!e||!t)return!1;e.insertBefore(t,(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domFC)(e))},checkDragDrop:function(){var e=_shared_lib_browser__WEBPACK_IMPORTED_MODULE_2__.browser,t=(0,_web_lib_utils_common__WEBPACK_IMPORTED_MODULE_8__.floatval)(_shared_lib_browser__WEBPACK_IMPORTED_MODULE_2__.browser.version);return!!(e.msie&&t>=9||e.mozilla&&t>=3.5||e.chrome||e.safari)&&((window.XMLHttpRequest||window.XDomainRequest)&&(window.FormData||window.FileReader&&(window.XMLHttpRequest&&XMLHttpRequest.sendAsBinary||window.ArrayBuffer&&window.Uint8Array&&(window.MozBlobBuilder||window.WebKitBlobBuilder||window.BlobBuilder))))},initCallback:function(){cur.editingPost?WallUpload.init():Wall.showEditPost()},init:function(){cur.withUpload&&(cur.uploadAdded?WallUpload.show():(cur.uploadAdded=!0,window.Upload&&window.VideoInlineUpload?(WallUpload.initLoader(),Wall._videoUploadIndex=WallUpload.initVideoUploader()):window.stManager.add([window.jsc("web/upload.js"),"video_upload.js"],(function(){WallUpload.initLoader(),Wall._videoUploadIndex=WallUpload.initVideoUploader()}))))},initVideoUploader:function(){var e=cur.wallUploadVideoOpts;if(e){var t=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("post_field_upload_video"),o=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("post_upload_video_dropbox");e.options.from="post";var r=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("send_post"),a={onUploadAllCompleteDone:function(){(0,_web_lib_ui__WEBPACK_IMPORTED_MODULE_6__.disableButton)(r,!1)},onUploadStartDone:function(){(0,_web_lib_ui__WEBPACK_IMPORTED_MODULE_6__.disableButton)(r,!0)}};return window.VideoInlineUpload.getUploadModule(t,o,e,WallUpload.addMedia(),a)}},initLoader:function initLoader(){(0,_web_lib_dom_events__WEBPACK_IMPORTED_MODULE_4__.removeEvent)(bodyNode,"dragover dragenter");var data=cur.wallUploadOpts,field=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("post_field");if(WallUpload.checkDragDrop()){cur.uploadWrap=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ce)("div",{className:"post_upload_wrap fl_r",innerHTML:'<div id="post_field_upload" class="post_upload"></div>'}),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domInsertBefore)(cur.uploadWrap,field),cur.uploadVideoWrap=(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ce)("div",{className:"post_upload_video_wrap fl_r",innerHTML:'<div id="post_field_upload_video" class="post_upload_video"></div>'}),(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.domInsertBefore)(cur.uploadVideoWrap,field);var submitBox=WallUpload.attachEl();submitBox.insertBefore((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ce)("div",{id:"post_upload_dropbox",className:"post_upload_dropbox",innerHTML:'<div class="post_upload_dropbox_inner"><div class="post_upload_label drop_label">'+(data.opts.lang.wall_drop_media_here||"Drop files here")+'</div><div class="post_upload_label release_label">'+(data.opts.lang.wall_release_media_here||"Release button to attach files")+"</div></div>"}),submitBox.firstChild),cur.wallUploadInd=Upload.init("post_field_upload",data.url,data.params,{accept:"image/jpeg,image/png,image/gif",dragEl:bodyNode,dropbox:"post_upload_dropbox",file_input:null,file_name:"photo",file_size_limit:26214400,file_types_description:"Image files (*.jpg, *.jpeg, *.png, *.gif)",file_types:"*.jpg;*.JPG;*.jpeg;*.JPEG;*.png;*.PNG;*.gif;*.GIF",file_match:data.opts.ext_re,lang:data.opts.lang,multiple:1,multi_progress:1,max_files:10,chooseBox:1,clear:1,type:"photo",max_attempts:3,server:data.opts.server,error:data.opts.default_error,error_hash:data.opts.error_hash,label:data.opts.label,wiki_editor:0,onUploadStart:function(e,t){var o=void 0!==e.ind?e.ind:e,r=Upload.options[o];"form"==Upload.types[o]&&((0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.geByClass1)("file",(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.ge)("choose_photo_upload")).disabled=!0),"fileApi"==Upload.types[o]&&(cur.notStarted&&(cur.preventBoxHide||boxQueue.hideLast(),delete cur.notStarted),r.multi_progress&&this.onUploadProgress(e,0,0))},onUploadComplete:function onUploadComplete(info,res){var params;try{params=eval("("+res+")")}catch(e){params=(0,_shared_lib_convert__WEBPACK_IMPORTED_MODULE_9__.fromQueryString)(res)}params.photos?WallUpload.photoUploaded(info,params):Upload.onUploadError(info)},onUploadProgress:function(e,t,o){var r=void 0!==e.ind?e.ind:e;if("fileApi"==Upload.types[r]){var a=(cur.attachMediaIndexes||{})[r];if(void 0===a||a&&cur.addMedia[a].chosenMedia||cur.imMedia){var _={loaded:t,total:o};e.fileName&&(_.fileName=e.fileName.replace(/[&<>"']/g,"")),WallUpload.addMedia().showMediaProgress("photo",r,_)}}},onUploadError:WallUpload.uploadFailed,onCheckServerFailed:function(){delete cur.uploadInited,WallUpload.hide()},onUploadCompleteAll:function(e){"form"==Upload.types[e]&&Upload.embed(e)},onDragEnter:function(){cur.editingPost?(Wall.hidePosterFeatureTooltip(),WallUpload.init()):Wall.showEditPost()},onNoFilteredCallback:function(e){Wall._videoUploadIndex&&Upload.onFileApiSend(Wall._videoUploadIndex,e)}}),cur.uploadInited=!0,WallUpload.show(),cur.wallUploadFromDrag&&(1==cur.wallUploadFromDrag&&(0,_web_lib_dom__WEBPACK_IMPORTED_MODULE_1__.show)("post_upload_dropbox"),delete cur.wallUploadFromDrag)}}};const __WEBPACK_DEFAULT_EXPORT__=WallUpload},6523:(e,t,o)=>{function r(){return Boolean(window.nav&&window.nav.objLoc&&window.nav.objLoc.claim)}o.d(t,{isClaimContent:()=>r})},87503:(e,t,o)=>{o.d(t,{GroupAdminLevel:()=>r});var r={USER:0,MODERATOR:1,EDITOR:2,ADMINISTRATOR:3,HOST:4,EVENT_CREATOR:5,CREATOR:6,PSEUDO_LEVEL_ADVERTISER:100}},69417:(e,t,o)=>{var r=o(82804),a=o(86067),_=o(54612),i=o(86665),n=o(75617),l=o(21126),d=(o(51876),o(83946),o(59357),o(21466),o(15544)),s=o(26271),p=o(40906),u=o(95724),c=o(49535),w=o(93560),m=o(50588),b=o(35676),f=o(3834),h=o(6593),g={init:function(e,t){if(!(e=(0,d.ge)(e)))return null;var o=(0,d.data)(e,"composer");if(o)return o;o={input:e,inited:!1,options:t},(0,d.data)(e,"composer",o),o.wddWrap=(0,d.ce)("div",{className:"composer_wdd clear_fix "+(t.wddClass||""),id:e.id+"_composer_wdd",innerHTML:'<input type="hidden" id="'+e.id+'_composer_wdd_term"/>'},{width:t.width||(0,d.getSize)(e)[0]}),t.appendTo&&(0,u.isFunction)(t.appendTo)?t.appendTo(o.wddWrap):(0,d.domInsertBefore)(o.wddWrap,e.nextSibling),o.wddInput=o.wddWrap.firstChild,o.wdd=WideDropdown.initSelect(o.wddWrap,(0,u.extend)({text:o.wddInput,input:e,noResult:t.lang.noResult||"",introText:t.lang.introText||"",toup:t.toup,wddOpts:t.wddOpts,searchKeys:t.searchKeys,width:"auto",onItemSelect:g.onItemSelect.bind(g).pbind(o),renderLimit:50},t.wddOpts||{url:"hints.php",params:{act:"a_json_friends",from:"composer"}})),e.dd=o.wddWrap.id,g.initEvents(o),t.media&&(o.addMedia=new window.MediaSelector(t.media.lnk,t.media.preview,t.media.types,t.media.options,t.media.gearEl,t.media.actionsEl)),(0,d.setStyle)(o.wddWrap,"width",""),o.inited=!0,g.updateAutoComplete(o),o.edit=t.edit,o.isReply=t.isReply,g.updateArticleConvertSuggest(o);var r=cur.onMediaChanged;return cur.onMediaChanged=function(){g.updateArticleConvertSuggest(o),r&&r()},o},initEvents:function(e){(0,c.addEvent)(e.input,"keyup keydown keypress",g.onKeyEvent.pbind(e)),(0,c.addEvent)(e.input,"click mousedown mouseup focus blur paste",g.onMouseEvent.pbind(e))},destroy:function(e){WideDropdown.deinit(e.wddWrap),(0,d.cleanElems)(e.input,e.wddWrap),(0,d.re)(e.wddWrap),e.inited=!1,e.addMedia&&e.addMedia.destroy(),(0,d.data)(e.input,"composer",null),(0,d.re)(e.articleConvertEl),e.articleConvertEl=!1},onKeyEvent:function(e,t){var o=!t.shiftKey&&(0,u.inArray)(t.keyCode,[c.KEY.UP,c.KEY.DOWN,c.KEY.RETURN]),r=e.wdd&&o;if("keypress"==t.type||"keydown"==t.type){if(t.keyCode==c.KEY.RETURN||10==t.keyCode){if(e.select&&e.select.isVisible())return(0,c.triggerEvent)(document,t.type,t),(0,c.cancelEvent)(t);if(t.ctrlKey&&(0,u.isFunction)(e.options.onSubmit))return!0}if(t.keyCode==c.KEY.TAB){var a=e.input,_=window.Emoji?Emoji.editableVal(a):"",i=g.getCursorPosition(a),n=(_.substr(0,i)+String.fromCodePoint(1)+_.substr(i)).match(/^[\s\S]*(@|\*)[\S]+\s*\([\s\S]*?\001[\s\S]*?\)\s*/);if(n){var l=n[0].length-1;return(0,d.elfocus)(e.input,l,l),(0,c.cancelEvent)(t)}}var p=0;for(var w in e.wdd.shown)p+=1;if(r&&(0,d.isVisible)(e.wdd.listWrap)&&p)return t.type==(s.browser.opera&&!s.browser.chrome?"keypress":"keydown")&&WideDropdown._textEvent(t),(0,c.cancelEvent)(t)}if("keyup"==t.type&&!r){if(65==t.keyCode&&t.ctrlKey)return;e.wdd&&(0,u.inArray)(t.keyCode,[c.KEY.SPACE,c.KEY.HOME,190,191,78,55,49])&&g.hideSelectList(e)}"keyup"!=t.type||r&&t.keyCode!=c.KEY.RETURN||g.updateAutoComplete(e,t),g.updateArticleConvertSuggest(e)},isArticleConvertSuggestAvailable:function(e){if(e.edit||e.isReply)return!1;var t=!!cur.wallAddMedia&&cur.wallAddMedia.types,o=!1;if(t)for(var r=0;r<t.length;r++)if("article"==t[r][0]){o=!0;break}if(!o||!(0,m.isArticleEditorAvailable)())return!1;var a=!0;return(0,u.each)(cur.wallAddMedia.getMedias()||[],(function(e,t){if(!(0,u.inArray)(t[0],["photo","video","postpone","mark_as_ads"]))return a=!1,!1})),!!a&&!!(cur.options.articleConvertThreshold>0&&e.curValue.length>=cur.options.articleConvertThreshold)},updateArticleConvertSuggest:function(e){if(g.isArticleConvertSuggestAvailable(e)){if(!e.articleConvertEl){var t=(0,d.gpeByClass)("post_field_wrap",e.input),o=(0,d.geByClass1)("post_actions_btns",t);e.articleConvertEl=h.FlatButton.render({children:(0,a.getLang)("profile_convert_to_article_short"),appearance:h.FlatButtonAppearance.ACCENT_OUTLINE,size:h.FlatButtonSize.M,round:!0,className:"article_post_convert"}),o?t.insertBefore(e.articleConvertEl,o):t.appendChild(e.articleConvertEl),(0,c.removeEvent)(e.articleConvertEl),(0,c.addEvent)(e.articleConvertEl,"click",(function(){cur.postComposer=e;var t=[];(0,u.each)(cur.wallAddMedia.getMedias()||[],(function(e,o){(0,u.inArray)(o[0],["photo","video"])&&t.push(o[0]+"_"+o[1])})),(0,w.openArticleEditor)(cur.oid,0,{text:e.curValue,medias:t})}))}(0,d.show)(e.articleConvertEl)}else(0,d.re)(e.articleConvertEl),delete e.articleConvertEl},onMouseEvent:function(e,t){"blur"!=t.type?("focus"!=t.type&&"click"!=t.type||g.updateAutoComplete(e,t),"paste"==t.type&&setTimeout(g.updateAutoComplete.pbind(e,t),0)):g.hideSelectList(e)},updateAutoComplete:function(e,t){var o=e.input,r=(e.options&&e.options.getValue||window.Emoji&&Emoji.editableVal||d.val)(o),a=Math.max(r.lastIndexOf("@"),r.lastIndexOf("*")),_=!1;if(a>-1){var i=g.getCursorPosition(o),n=r.substr(0,i),l=n.match(/(^|[\s.,:\'\"«»;>\)\(]|\#[\w_\.\u0400-\u04FF]+)[@\*]([^,@\*\(\)\?\!\s\n\r \u00A0]*)$/);a=Math.max(n.lastIndexOf("@"),n.lastIndexOf("*")),l&&"."!==l[2].substr(-1)&&(_=l[2])}!1===_&&delete e.ignoredTerm,void 0!==e.ignoredTerm&&_==e.ignoredTerm&&(_=!1),e.curValue=r,e.curTerm=_,e.curPos=a,(0,d.val)(e.wddInput,_),g.toggleSelectList(e),!t||"keyup"!=t.type&&"paste"!=t.type||(e.options.onValueChange&&e.options.onValueChange(r,"keyup"!=t.type),e.addMedia&&e.addMedia.checkMessageURLs(r,"keyup"!=t.type),e.options.checkLen&&e.options.checkLen(r))},toggleSelectList:function(e){var t=e.curTerm;!1===t?g.hideSelectList(e):g.showSelectList(e,t)},hideSelectList:function(e){e.wddInput.focused=!1,WideDropdown._hideList(e.wdd);var t=e.options||{};t.onHide&&t.onHide()},showSelectList:function(e,t){function o(o){e.wddInput.focused=!0,WideDropdown.items(e.wdd.id,o||[]),WideDropdown._updateList(e.wdd,!1,t);var r=e.options||{};r.onShow&&r.onShow()}"function"==typeof cur.wallMentions&&(cur.wallMentions=cur.wallMentions()),cur.wallMentions&&"function"==typeof cur.wallMentions.then?cur.wallMentions.then((function(e){o(e)})):o(cur.wallMentions)},onItemSelect:function(e,t){if(!t)return!1;var o=t[2].replace("@",""),r=t[8]||t[1],a=e.curValue.substr(0,e.curPos),_=e.curValue.substr(e.curPos),i=!!a.match(/\#[\w_\.\u0400-\u04FF]+$/i);document.activeElement.classList.contains("_im_text")&&(/^(?:id|club)\d{1,}$/.test(o)||(i=!0));var n=e.options.poster,l=window.Emoji&&void 0!==e.input.emojiId||n;l||n?_=(0,u.clean)(_):r=(0,u.replaceEntities)(r),cur.selNum=(cur.selNum||0)+1;var s=new RegExp("^(@|\\*)"+(0,u.escapeRE)(e.curTerm)+"(?:\\s+\\((?:(.*?)\\))?\\s*)?","");return _=_.replace(s,(function(e,t,a){var _=t+o+" ";return i?_+=l||n?'<span id="tmp_sel_'+cur.selNum+'"></span>':"":(_+=(l||n?'<span id="tmp_sel_'+cur.selNum+'">':"")+"(",_+=r.replace(/[\(\)\]\[]/g,""),_+=")"+(l||n?"</span>":"")+" "),_})),i||!a||a.match(/[\.\(\)\?\!\s\n\r\'\"«» \u00A0]$/)||(_=" "+_),g.hideSelectList(e),l||n?(Emoji.val(e.input,(0,u.clean)(a)+_),Emoji.focus(e.input),Emoji.editableFocus(e.input,(0,d.ge)("tmp_sel_"+cur.selNum),!0),n&&n.checkText()):((0,d.val)(e.input,a+_),(0,d.elfocus)(e.input)),(0,u.isFunction)(e.options.onItemSelect)&&e.options.onItemSelect(t),!1},getCursorPosition:function(e){if(void 0!==e.selectionStart)return e.selectionStart;if(void 0!==window.getSelection){var t=window.getSelection();if(!t||!t.rangeCount)return 0;var o=t.getRangeAt(0),r=o.cloneRange(),a=(0,d.ce)("div");return r.selectNodeContents(e),r.setEnd(o.startContainer,o.startOffset),a.appendChild(r.cloneContents()),(window.Emoji?Emoji.editableVal:d.val)(a).replace(/\n$/,"").length}return 0},getSendParams:function(e,t,o){var r=e.addMedia||{},_=r.chosenMedia||{},i=r&&r.getMedias?r.getMedias():[],n=r.shareData||{},l=e&&e.options.media&&e.options.media.options.limit||0,s=e.input,c=cur.posterWpe&&cur.posterWpeSendParams?cur.posterWpeSendParams.text:(0,u.trim)(window.Emoji?Emoji.editableVal(s):(0,d.val)(s)),w={message:c},m=0,h=(0,d.hasClass)((0,d.gpeByClass)("post",s),"suggest");(0,p.isArray)(_)&&_.length&&i.push((0,u.clone)(_)),(0,d.setStyle)(bodyNode,{cursor:"default"});var g=(0,d.ge)("wpe_cont"),v=(0,d.geByClass1)("wpe_error",g);function E(e){v||(v=(0,d.se)('<div class="wpe_error error"><div>'),g.insertBefore(v,(0,d.domFC)(g))),v.innerHTML=e.length>60?'<div class="msg_text">'+e+"</div>":e,(0,d.isVisible)(v)||((0,b.slideDown)(v,100),(0,f.scrollToY)((0,d.getXY)(v)[1]-15),(0,b.animate)((0,d.ge)("box_layer_wrap"),{scrollTop:0}))}if(v&&(0,d.hide)(v),i.length&&(0,u.each)(i,(function(e,_){var s;if((0,p.isArray)(_)&&_.length){var b=this[0],f=this[1];if(m>=l&&"postpone"!=b)return!1;switch(b){case"poll":var g=r.pollData(o);if(!g)return w.delayed=!0,!1;(0,u.intval)(f)&&(w.poll_id=(0,u.intval)(f)),f=g.question,delete g.question,w=(0,u.extend)(w,g);break;case"copyright":var v=r.copyrightData();if(v)return void(w=(0,u.extend)(w,v));break;case"share":if(n.failed||!n.title&&(!n.images||!n.images.length)&&!n.photo_url&&!n.video)return cur.shareLastParseSubmitted&&Date.now()-cur.shareLastParseSubmitted<2e3?(w.delayed=!0,!1):void 0;if((cur.options.share||{}).button_exclusive&&n.button_text&&n.button_action){var C;i.length>1&&(C=(0,a.getLang)("global_share_too_many_attachments")),w.message.split("\n").length-1>(cur.options.share||{}).button_exclusive_max_message_newlines&&(C=(0,a.getLang)("global_share_too_many_newlines")),w.message.length>(cur.options.share||{}).button_exclusive_max_message_len&&(C=(0,a.getLang)("global_share_too_long_message"));var M=(0,u.extractUrls)(" "+w.message+" "),y=(0,u.extractUrls)(" "+n.url+" ")[0];if(y&&M.length){"/"===y.query&&(y.query=""),"www."===y.domain.substr(0,4)&&(y.domain=y.domain.substr(4));for(var P=0;P<M.length;++P){var k=M[P];if("/"===k.query&&(k.query=""),"www."===k.domain.substr(0,4)&&(k.domain=k.domain.substr(4)),y.domain!=k.domain||y.query!=k.query){C=(0,a.getLang)("global_share_too_many_links");break}}}if(C)return E(C),w.delayed=!0,!1}if(!n.title)return E((0,a.getLang)("global_share_title_required")),w.delayed=!0,!1;if(!n.url)return E((0,a.getLang)("global_share_url_required")),w.delayed=!0,!1;if(n.url=new URL(n.url).href,n.video?(f=n.video_owner_id+"_"+n.video_id,w.snippet_video=1):f=n.prometheus?n.media:n.user_id&&n.photo_id&&!n.noPhoto?n.user_id+"_"+n.photo_id:"",n.share_upload_failed&&!f)return n.share_upload_failed=0,w.delayed=!0,!1;if(n.images&&n.images.length&&!(0,p.isArray)(n.images[cur.shareShowImg])&&!o&&!f&&!n.noPhoto&&!n.video)return r.uploadShare(t),w.delayed=!0,!1;if((cur.options.share||{}).require_image&&!f)return E((0,a.getLang)("global_share_image_required")),w.delayed=!0,!1;n.initialPattern&&(0,u.trim)(c)==n.initialPattern&&(w.message=""),n.is_vk_mini_app&&(w.is_vk_mini_app=!0,w.is_photo_edit=n.isPhotoEdit,w.image_offset=cur.shareShowImg),(0,u.extend)(w,{url:n.url,module:cur.module,mode:n.mode,title:(0,u.replaceEntities)(n.title),description:(0,u.replaceEntities)(n.description),button_text:(0,u.replaceEntities)(n.button_text),button_action:n.button_action,extra:n.extra,extra_data:n.extraData,photo_url:n.video?"":(0,u.replaceEntities)(n.photo_url),placeholder_inserted:n.placeholder_inserted,open_graph_data:(n.openGraph||{}).data,open_graph_hash:(n.openGraph||{}).hash});break;case"page":n.initialPattern&&(0,u.trim)(c)==n.initialPattern&&(w.message="");break;case"postpone":return w.postpone=(0,d.val)("postpone_date"+r.lnkId),void(cur.postponedLastDate=w.postpone);case"donut_duration":return;case"mark_as_ads":return void(w.mark_as_ads=1);case"pretty_cards":if(!r.prettyCardGallery)return;if(r.prettyCardGallery.needSendData())return r.prettyCardGallery.saveCards(t,(function(e){E(e)})),w.delayed=!0,!1;f=r.prettyCardGallery.getSendData().attachVal;break;case"donut_link":w["attach"+(m+1)+"_owner_id"]=null==(s=this[5])?void 0:s.owner_id}this[3]&&(0,u.trim)(c)==this[3]&&(w.message=""),h&&this[4]&&(f+="_"+this[4]),w["attach"+(m+1)+"_type"]=b,w["attach"+(m+1)]=f,m++}})),!r.multi&&(w.postpone||(r.postponeDate&&r.postponeIsTooltip||r.postponePreview)&&(w.postpone=(0,d.val)("postpone_date"+r.lnkId),cur.postponedLastDate=w.postpone),!w.copyright&&r.copyrightData)){var C=r.copyrightData();C&&(w=(0,u.extend)(w,C))}return r.multi||w.mark_as_ads||!r.markAsAds||(w.mark_as_ads=1),w},reset:function(e){var t=e.input,o=(0,d.val)(t),r=e.addMedia,a={value:o};return window.Emoji?Emoji.val(t,""):t.innerHTML="",r&&(a.urlsCancelled=(0,u.clone)(r.urlsCancelled),r.unchooseMedia(),r.urlsCancelled=[]),(0,d.re)(e.articleConvertEl),a},restore:function(e,t){var o=e.input,r=g.reset(e);return(0,d.val)(o,t.value||""),r}};const v=g;var E=o(82452),C=o(70655),M=o(85893),y=o(81117),P=o(88420);const k=(0,o(63192).makeIcon)("Icon56ErrorOutline","error_outline_56","0 0 56 56",'<symbol viewBox="0 0 56 56" xmlns="http://www.w3.org/2000/svg" id="error_outline_56"><g fill="none" fill-rule="evenodd"><path d="M0 0h56v56H0z" /><path d="M28 4c13.255 0 24 10.745 24 24S41.255 52 28 52 4 41.255 4 28 14.745 4 28 4Zm0 3C16.402 7 7 16.402 7 28s9.402 21 21 21 21-9.402 21-21S39.598 7 28 7Zm0 27a2 2 0 1 1 0 4 2 2 0 0 1 0-4Zm0-17.5a1.5 1.5 0 0 1 1.5 1.5v11l-.007.144A1.5 1.5 0 0 1 26.5 29V18l.007-.144A1.5 1.5 0 0 1 28 16.5Z" fill="currentColor" fill-rule="nonzero" /></g></symbol>',56,56,!1,void 0);var O=function(e){var t=e.title,o=e.text,r=e.more_button_text,a=e.more_button_url,_=e.ok_button_text,i=e.onClose;return(0,M.jsxs)("div",(0,C.__assign)({className:"FakeInfoWarning__box"},{children:[(0,M.jsx)("div",(0,C.__assign)({className:"FakeInfoWarning__imageContainer"},{children:(0,M.jsx)(k,{},void 0)}),void 0),(0,M.jsx)("div",(0,C.__assign)({className:"FakeInfoWarning__title"},{children:t}),void 0),(0,M.jsx)("div",(0,C.__assign)({className:"FakeInfoWarning__text"},{children:o}),void 0),!!a&&(0,M.jsx)("a",(0,C.__assign)({href:a,target:"_blank",rel:"noopener"},{children:r}),void 0),(0,M.jsx)("div",(0,C.__assign)({className:"FakeInfoWarning__buttonWrap"},{children:(0,M.jsx)(P.default,(0,C.__assign)({onClick:i,appearance:"primary"},{children:_}),void 0)}),void 0)]}),void 0)};window.Page=i.default,window.page=i.default,window.Wall=n.default,window.wall=n.default,window.WallUpload=l.default,window.Composer=v,window._postsSendTimer||(window._postsSendTimer=window.setTimeout(i.default.postsSend,1e4));try{window.stManager.done("page.js"),(0,r.tq)().setInteractiveHandler("Wall/fake_news_info",(function(e){var t=e.payload,o=t.event,r=t.dataAttrs;null==o||o.preventDefault();var a,_=r,i=_.title,n=_.text,l=_.more_button_text,d=_.more_button_url,s=_.ok_button_text;a={title:i,text:n,more_button_text:l,more_button_url:d,ok_button_text:s},(0,y.showComponentInBox)((0,M.jsx)(O,(0,C.__assign)({},a,{onClose:function(){(0,y.destroyComponentInBox)(!0)}}),void 0),{containerClass:"FakeInfoWarning"}),window.ajax.post("al_page.php",{act:"track_fake_news_caption_clicked"})})),(0,r.tq)().setInteractiveHandler("Page/owner_new_photo",(function(e){try{var t=e.payload.dataAttrs.options,o=JSON.parse(t),r=o.ownerId;o.useNewForm?i.default.ownerAvatarUpload(r):i.default.ownerPhoto(r)}catch(e){(0,E.showErrorBox)((0,a.getLang)("global_error"))}})),(0,r.tq)().setInteractiveHandler("Page/owner_edit_photo",(function(e){try{var t=e.payload.dataAttrs.options,o=JSON.parse(t),r=o.ownerId,_=o.hash;o.useNewForm?i.default.ownerAvatarEdit(r,_):i.default.ownerCrop(r,_)}catch(e){(0,E.showErrorBox)((0,a.getLang)("global_error"))}})),(0,r.tq)().setInteractiveHandler("Page/owner_set_exist_photo",(function(e){try{var t=e.payload.dataAttrs.options,o=JSON.parse(t),r=o.photo;o.useNewForm?i.default.ownerAvatarSelect(r):(0,_.showBox)("al_page.php",{act:"owner_photo_edit",photo:r},{stat:["owner_photo.css",window.jsc("web/owner_photo.js"),"tagger.css",window.jsc("web/tagger.js")]})}catch(e){(0,E.showErrorBox)((0,a.getLang)("global_error"))}}))}catch(e){}},86699:(e,t,o)=>{o.d(t,{ReportReasonIds:()=>c,showReportForm:()=>m,afterCommentReportSubmit:()=>b});var r,a,_=o(85893),i=o(81117),n=o(87481),l=o(86067),d=o(11885),s=o(89798),p=o(48632),u=o(48838);(0,d.makeAuthAndApiGlobal)();var c,w=window.vk;function m(e,t,r,a,n){var l=(0,u.asyncComponent)((function(){return Promise.all([o.e(24509),o.e(98066),o.e(68592),o.e(29019)]).then(o.bind(o,90692))}),(function(e){return e.ReportForm})),d=(0,_.jsx)(l,{reportSource:e,reportSourceOwnerId:t,reportSourceId:r,onSubmit:a},void 0),s={onDestroy:n};(0,i.showComponentInBoxSuspense)(d,s)}function b(e,t,o){var r=function(e,t,o){switch(e){case"photo":return"#post"+t+"photo_"+o;case"video":return"#post"+t+"video_"+o+"mv";case"market":return"#post"+t+"market_"+o}}(e,t,o);if("photo"===e){var a=document.querySelector(r+" .dld");null!==a&&(a.outerHTML="")}var _=document.querySelector(r+" .reply_wrap");null!==_?(_.style.display="none",_.outerHTML+='<div class="dld">'+(0,l.getLang)("global_report_sent")+"</div>"):(0,n.debugLog)("Unable to hide report button for "+e+" comment")}(0,s.setLoginConfig)({onCaptcha:p.handleCaptcha,domain:null===(r=null==w?void 0:w.apiConfigDomains)||void 0===r?void 0:r.loginDomain}),(0,s.setApiConfig)({onCaptcha:p.handleCaptcha,domain:null===(a=null==w?void 0:w.apiConfigDomains)||void 0===a?void 0:a.apiDomain}),function(e){e[e.NotOriginalContent=28]="NotOriginalContent"}(c||(c={}))},75382:(e,t,o)=>{o.d(t,{floatingButtonCollapseAllRepliesHide:()=>_,floatingButtonCollapseAllRepliesShow:()=>i,loadRepliesLinkShow:()=>n,loadRepliesLinkIsVisible:()=>l,highlightUpdatedReply:()=>d,highlightUpdatedReplyContent:()=>s});var r=o(30104),a=o(15544),_=function(e){e instanceof HTMLElement&&e.classList.contains("replies_side")&&e.classList.add("replies_side_hidden")},i=function(e){e instanceof HTMLElement&&e.classList.contains("replies_side")&&e.classList.remove("replies_side_hidden")},n=function(e){e instanceof HTMLElement&&e.classList.contains("replies_next")&&e.classList.add("replies_next_shown")},l=function(e){return!!(e instanceof HTMLElement&&e.classList.contains("replies_next"))&&(e.classList.contains("replies_next_shown")||(0,a.isVisible)(e))},d=function(e){(0,r.triggerAnimationClass)(e,"reply_highlight_updated",3e3)},s=function(e){(0,r.triggerAnimationClass)(e,"reply_highlight_updated_content",3e3)}}},__webpack_module_cache__={},deferred,leafPrototypes,getProto,inProgress,loadStylesheet,installedCssChunks;function __webpack_require__(e){var t=__webpack_module_cache__[e];if(void 0!==t)return t.exports;var o=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e].call(o.exports,o,o.exports,__webpack_require__),o.exports}__webpack_require__.m=__webpack_modules__,deferred=[],__webpack_require__.O=(e,t,o,r)=>{if(!t){var a=1/0;for(l=0;l<deferred.length;l++){for(var[t,o,r]=deferred[l],_=!0,i=0;i<t.length;i++)(!1&r||a>=r)&&Object.keys(__webpack_require__.O).every((e=>__webpack_require__.O[e](t[i])))?t.splice(i--,1):(_=!1,r<a&&(a=r));if(_){deferred.splice(l--,1);var n=o();void 0!==n&&(e=n)}}return e}r=r||0;for(var l=deferred.length;l>0&&deferred[l-1][2]>r;l--)deferred[l]=deferred[l-1];deferred[l]=[t,o,r]},__webpack_require__.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return __webpack_require__.d(t,{a:t}),t},getProto=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,__webpack_require__.t=function(e,t){if(1&t&&(e=this(e)),8&t)return e;if("object"==typeof e&&e){if(4&t&&e.__esModule)return e;if(16&t&&"function"==typeof e.then)return e}var o=Object.create(null);__webpack_require__.r(o);var r={};leafPrototypes=leafPrototypes||[null,getProto({}),getProto([]),getProto(getProto)];for(var a=2&t&&e;"object"==typeof a&&!~leafPrototypes.indexOf(a);a=getProto(a))Object.getOwnPropertyNames(a).forEach((t=>r[t]=()=>e[t]));return r.default=()=>e,__webpack_require__.d(o,r),o},__webpack_require__.d=(e,t)=>{for(var o in t)__webpack_require__.o(t,o)&&!__webpack_require__.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},__webpack_require__.f={},__webpack_require__.e=e=>Promise.all(Object.keys(__webpack_require__.f).reduce(((t,o)=>(__webpack_require__.f[o](e,t),t)),[])),__webpack_require__.u=e=>57468===e?"SilentModeForms.dcc6b6bcab424d304a59.js":29019===e?"ReportForm.d994784c00d02669aa3d.js":55489===e?"lottie-light.d9398c3d9d22795c887a.js":void 0,__webpack_require__.miniCssF=e=>e+"."+{29019:"3c5af56c46627dc6bd48",57468:"412c69e46575927a994a"}[e]+".css",__webpack_require__.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),inProgress={},__webpack_require__.l=(e,t,o,r)=>{if(inProgress[e])inProgress[e].push(t);else{var a,_;if(void 0!==o)for(var i=document.getElementsByTagName("script"),n=0;n<i.length;n++){var l=i[n];if(l.getAttribute("src")==e||l.getAttribute("data-webpack")=="vk:"+o){a=l;break}}a||(_=!0,(a=document.createElement("script")).charset="utf-8",a.timeout=120,__webpack_require__.nc&&a.setAttribute("nonce",__webpack_require__.nc),a.setAttribute("data-webpack","vk:"+o),a.src=e),inProgress[e]=[t];var d=(t,o)=>{a.onerror=a.onload=null,clearTimeout(s);var r=inProgress[e];if(delete inProgress[e],a.parentNode&&a.parentNode.removeChild(a),r&&r.forEach((e=>e(o))),t)return t(o)},s=setTimeout(d.bind(null,void 0,{type:"timeout",target:a}),12e4);a.onerror=d.bind(null,a.onerror),a.onload=d.bind(null,a.onload),_&&document.head.appendChild(a)}},__webpack_require__.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.p="/dist/",loadStylesheet=e=>new Promise(((t,o)=>{var r=__webpack_require__.miniCssF(e),a=__webpack_require__.p+r;if(((e,t)=>{for(var o=document.getElementsByTagName("link"),r=0;r<o.length;r++){var a=(i=o[r]).getAttribute("data-href")||i.getAttribute("href");if("stylesheet"===i.rel&&(a===e||a===t))return i}var _=document.getElementsByTagName("style");for(r=0;r<_.length;r++){var i;if((a=(i=_[r]).getAttribute("data-href"))===e||a===t)return i}})(r,a))return t();((e,t,o,r)=>{var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",a.onerror=a.onload=_=>{if(a.onerror=a.onload=null,"load"===_.type)o();else{var i=_&&("load"===_.type?"missing":_.type),n=_&&_.target&&_.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=i,l.request=n,a.parentNode.removeChild(a),r(l)}},a.href=t,document.head.appendChild(a)})(e,a,t,o)})),installedCssChunks={60339:0},__webpack_require__.f.miniCss=(e,t)=>{installedCssChunks[e]?t.push(installedCssChunks[e]):0!==installedCssChunks[e]&&{29019:1,57468:1}[e]&&t.push(installedCssChunks[e]=loadStylesheet(e).then((()=>{installedCssChunks[e]=0}),(t=>{throw delete installedCssChunks[e],t})))},(()=>{var e={60339:0};__webpack_require__.f.j=(t,o)=>{var r=__webpack_require__.o(e,t)?e[t]:void 0;if(0!==r)if(r)o.push(r[2]);else{var a=new Promise(((o,a)=>r=e[t]=[o,a]));o.push(r[2]=a);var _=__webpack_require__.p+__webpack_require__.u(t),i=new Error;__webpack_require__.l(_,(o=>{if(__webpack_require__.o(e,t)&&(0!==(r=e[t])&&(e[t]=void 0),r)){var a=o&&("load"===o.type?"missing":o.type),_=o&&o.target&&o.target.src;i.message="Loading chunk "+t+" failed.\n("+a+": "+_+")",i.name="ChunkLoadError",i.type=a,i.request=_,r[1](i)}}),"chunk-"+t,t)}},__webpack_require__.O.j=t=>0===e[t];var t=(t,o)=>{var r,a,[_,i,n]=o,l=0;for(r in i)__webpack_require__.o(i,r)&&(__webpack_require__.m[r]=i[r]);if(n)var d=n(__webpack_require__);for(t&&t(o);l<_.length;l++)a=_[l],__webpack_require__.o(e,a)&&e[a]&&e[a][0](),e[_[l]]=0;return __webpack_require__.O(d)},o=self.webpackChunkvk=self.webpackChunkvk||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var __webpack_exports__=__webpack_require__.O(void 0,[76429,75514,24509,56990,98066,40885,68592,4502,59302,85820,83063],(()=>__webpack_require__(69417)));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();