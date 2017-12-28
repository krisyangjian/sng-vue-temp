import HttpUtils from '../../utils/http.utils';
const urls = {
    'list': globalConfig.apiPath.v1 + 'api/auth/v1/users/list1',
}


let Module1Srv = {
	getDataList: function (params = {}){
    	return HttpUtils.get(urls.list,params);
    }
};

export {Module1Srv};
