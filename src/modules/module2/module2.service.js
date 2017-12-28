import HttpUtils from '../../utils/http.utils';

const urls = {
  'list': `${globalConfig.apiPath.v1}api/auth/v1/users/list2`,
};


const Module2Srv = {
  getDataList(params = {}) {
    	return HttpUtils.get(urls.list, params);
  }
};

export { Module2Srv };
