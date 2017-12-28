import HttpUtils from '../../utils/http.utils';
const urls = {
    'list': globalConfig.apiPath.v1 + 'api/auth/v1/users/list2',
}


let Module2Srv = {
	getDataList: function (params = {}){
    	return HttpUtils.get(urls.list,params);
    }
};

export {Module2Srv};
