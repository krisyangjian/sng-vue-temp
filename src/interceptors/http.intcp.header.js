let _req = {};

/**
 * 设置http请求headers，添加token
 */
const _setToken = () => {
	try {
		_req.headers.Authorization = 'Bearer ' + window.localStorage.getItem('token');
	} catch(e) {}

}

/**
 * 给请求的url添加随机参数，避免在IE10下本地缓存的问题
 */
const _setRParams = () => {
	try {
		let joinStr = '?r=';
		if(_req.url.indexOf('&') > -1) {
			joinStr = '&r=';
		}
		joinStr = joinStr + new Date().getTime();
		//mock模式下不添加随机参数
		if(_req.url.indexOf('http://') < 0) {
			joinStr = '';
		}
		_req.url = _req.url + joinStr;
	} catch(e) {}
}
export default {
	setHeader: req => {
		_req = req || {};
		_setToken();
		_setRParams();
	}
}