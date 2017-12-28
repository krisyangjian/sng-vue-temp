export default {
	install(Vue, options) {
		Vue.prototype.globalTest = () => {
			return 'globalTest is fun';
		}
		
	}
}