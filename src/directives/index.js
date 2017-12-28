import Vue from 'vue';
import moment from 'moment';

Vue.directive('bgColor', {
	bind(el, binding) {
		$(el).css('background','#FF3D00');
	},
	update(el,val){
		$(el).css('background',val.value.color.bgcolor);
	},
	unbind : function(){
        //清理工作
        //例如，删除bind()添加的事件监听器
    }
});
