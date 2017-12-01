import { Get, Controller } from '@nestjs/common';

@Controller()
export class AppController {
	@Get()
	root(): any {
    let $return = {
      code: 0,
      msg: '获取数据成功',
      info: '欢迎使用米波IM在线聊天服务！'
    };
    return $return;
  }
}
