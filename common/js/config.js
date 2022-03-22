/**
 * 镜片一站式采购平台
 */
const x = {
	// baseUrl: 'https://qinghe.tongzhounetwork.ltd',
	baseUrl: 'https://chengxu.tongzhounetwork.ltd',
	imgDomain: 'https://chengxu.tongzhounetwork.ltd',
	h5Domain:'https://chengxu.tongzhounetwork.ltd/h5',
	mpKey: 'D5YBZ-ZWPWU-SAFVB-BQBT4-Q2A56-LJFRH',
		//小程序appid wx0f57e059962fab6a
}
/**
 * 价格保护 3是无保护 0是有保护
 */
const is_wholesaler = 0

let param = {
	//客服地址
	webSocket: '',
	//本地端主动给服务器ping的时间, 0 则不开启 , 单位秒 
	pingInterval: 1500,  
	// 超时时间 超出时间段将重连系统 单位秒
	// timeout : 15000,
	// api安全
	apiSecurity: false,
	// 公钥
	publicKey: ``,
}
Object.assign(param, x)
export default {
	...param,
	...x,
	is_wholesaler,
}
