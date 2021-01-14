/* jquery.switchButton.js v1.0. Copyright (c) Olivier Lance */
!function(t){t.widget("sylightsUI.switchButton",{options:{checked:void 0,show_labels:!0,labels_placement:"both",on_label:"ON",off_label:"OFF",width:25,height:11,button_width:12,clear:!0,clear_after:null,on_callback:void 0,off_callback:void 0},_create:function(){void 0===this.options.checked&&(this.options.checked=this.element.prop("checked")),this._initLayout(),this._initEvents()},_initLayout:function(){this.element.hide(),this.off_label=t("<span>").addClass("switch-button-label"),this.on_label=t("<span>").addClass("switch-button-label"),this.button_bg=t("<div>").addClass("switch-button-background"),this.button=t("<div>").addClass("switch-button-button"),this.off_label.insertAfter(this.element),this.button_bg.insertAfter(this.off_label),this.on_label.insertAfter(this.button_bg),this.button_bg.append(this.button),this.options.clear&&(null===this.options.clear_after&&(this.options.clear_after=this.on_label),t("<div>").css({clear:"left"}).insertAfter(this.options.clear_after)),this._refresh(),this.options.checked=!this.options.checked,this._toggleSwitch()},_refresh:function(){switch(this.options.show_labels?(this.off_label.show(),this.on_label.show()):(this.off_label.hide(),this.on_label.hide()),this.options.labels_placement){case"both":this.button_bg.prev()===this.off_label&&this.button_bg.next()===this.on_label||(this.off_label.detach(),this.on_label.detach(),this.off_label.insertBefore(this.button_bg),this.on_label.insertAfter(this.button_bg),this.on_label.addClass(this.options.checked?"on":"off").removeClass(this.options.checked?"off":"on"),this.off_label.addClass(this.options.checked?"off":"on").removeClass(this.options.checked?"on":"off"));break;case"left":this.button_bg.prev()===this.on_label&&this.on_label.prev()===this.off_label||(this.off_label.detach(),this.on_label.detach(),this.off_label.insertBefore(this.button_bg),this.on_label.insertBefore(this.button_bg),this.on_label.addClass("on").removeClass("off"),this.off_label.addClass("off").removeClass("on"));break;case"right":this.button_bg.next()===this.off_label&&this.off_label.next()===this.on_label||(this.off_label.detach(),this.on_label.detach(),this.off_label.insertAfter(this.button_bg),this.on_label.insertAfter(this.off_label),this.on_label.addClass("on").removeClass("off"),this.off_label.addClass("off").removeClass("on"))}this.on_label.html(this.options.on_label),this.off_label.html(this.options.off_label),this.button_bg.width(this.options.width),this.button_bg.height(this.options.height),this.button.width(this.options.button_width),this.button.height(this.options.height)},_initEvents:function(){var t=this;this.button_bg.click(function(e){return e.preventDefault(),e.stopPropagation(),t._toggleSwitch(),!1}),this.button.click(function(e){return e.preventDefault(),e.stopPropagation(),t._toggleSwitch(),!1}),this.on_label.click(function(e){return(!t.options.checked||"both"!==t.options.labels_placement)&&(t._toggleSwitch(),!1)}),this.off_label.click(function(e){return!(!t.options.checked&&"both"===t.options.labels_placement)&&(t._toggleSwitch(),!1)})},_setOption:function(t,e){"checked"!==t?(this.options[t]=e,this._refresh()):this._setChecked(e)},_setChecked:function(t){t!==this.options.checked&&(this.options.checked=!t,this._toggleSwitch())},_toggleSwitch:function(){this.options.checked=!this.options.checked;var t="";this.options.checked?(this.element.prop("checked",!0),this.element.change(),t="+="+(this.options.width-this.options.button_width),"both"==this.options.labels_placement?(this.off_label.removeClass("on").addClass("off"),this.on_label.removeClass("off").addClass("on")):(this.off_label.hide(),this.on_label.show()),this.button_bg.addClass("checked"),"function"==typeof this.options.on_callback&&this.options.on_callback.call(this)):(this.element.prop("checked",!1),this.element.change(),t="-1px","both"==this.options.labels_placement?(this.off_label.removeClass("off").addClass("on"),this.on_label.removeClass("on").addClass("off")):(this.off_label.show(),this.on_label.hide()),this.button_bg.removeClass("checked"),"function"==typeof this.options.off_callback&&this.options.off_callback.call(this));this.button.animate({left:t},250,"easeInOutCubic")}})}(jQuery);