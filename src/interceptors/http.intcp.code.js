import { Notification } from 'element-ui';

let _req = {},notif = null;

/**
 * 对接口返回的code进行统一处理
 */
const _processorCode = () => {
	try {
		let code = _req.data.code;
		//token失效，跳转到登录页面
		if(code === 1100) {
			window.localStorage.setItem('token', '');
		} else if(code !== 0) {
			if(notif){
				notif.close();
			}
			notif = Notification.error({
				title: '',
				message: '客户端请求服务异常',
				offset: 50
			})
		}
	} catch(e) {}
}

export default {
	doCode: req => {
		_req = req || {};
		_processorCode();
	}
}