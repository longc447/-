const shuming = 'https://shuming.tongzhounetwork.ltd'
const caocao = 'https://caocao.tongzhounetwork.ltd'
const yunyi = 'https://chengxu.tongzhounetwork.ltd'
const Api1168 = 'https://1168.tongzhounetwork.ltd'
const tianbo = 'https://tianbo.tongzhounetwork.ltd'
const setting = {
  //天铂眼镜
  tianbo: {
    is_wholesaler: 3,
    isMustLogin: 0,
  },
  caocao: {
    // 价格保护 3是无保护 0是有保护
    is_wholesaler: 3,
    // 是否强制登陆 0不强制 1强制
    isMustLogin: 0,
    // 是否需要验证批发商 0不需要 1强制
    isPfs: 0,
    //  是否显示销量 0关闭 1显示
    isOpenVirtualSale: 1,
  },
  yunyi: {
    is_wholesaler: 0,
    isPfs: 1
  },
  s1168: {
    // 是否强制登陆 0不强制 1强制
    isMustLogin: 1,
    // 是否需要验证批发商 0不需要 1强制
    isPfs: 1
  }
}

export const ApiServer = Api1168;
export const useSetting = setting.s1168;
