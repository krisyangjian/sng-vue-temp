import HttpUtils from '../../utils/http.utils';

const urls = {
  'list': `${globalConfig.apiPath.v1}api/auth/v1/users/list1`,
};


const Module1Srv = {
  getDataList(params = {}) {
    	return HttpUtils.get(urls.list, params);
  }
};

export { Module1Srv };
