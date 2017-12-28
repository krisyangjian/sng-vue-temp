let _error = {};

/**
 * 接口返回status处理
 */
const _redirectTo = ()=>{
	if(_error.response.status === 404){
		alert('接口找不到，找后端去！')
	}
}

export default {
	doError:error=>{
		_error = error || {};
		_redirectTo();
	}
}