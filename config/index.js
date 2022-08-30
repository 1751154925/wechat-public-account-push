export const config = {
    /**
     * 公众号配置
     */

    // 公众号APP_ID
    APP_ID: "wxf9539476e88e9fbf",
    // 公众号APP_SECRET
    APP_SECRET: "b4c809ac3e2ea3390bb553252b280bcd",
    // 模板消息id
    TEMPLATE_ID: "c6mLyM7-qP3ei_nQXic7kmEwtnNLRfV3cBpO6eHEH7g",
    // 接收公众号消息的微信号，如果有多个，需要在[]里用英文逗号间隔，例如["wx1", "wx2"]
    USERS: ["o4fiZ6P8eEKwa6VGod8eL-uerb5g"],
     
    /**
     * 信息配置
     */

    /** 天气相关 */

    // 所在省份
    PROVINCE: "山东",
    // 所在城市
    CITY: "淄博",

    /** 重要节日相关 */

    // 重要节日，修改名字为对应需要显示的名字, data 仅填月日即可, 请严格按照示例填写
    // tpye必须填！ 只能 “生日” 和 “节日” 二选一!
    // 生日时，name填写想要展示的名字，你可以填“美丽可爱亲亲老婆”
    // 节日时，name填写相应展示的节日，你可以填“被搭讪纪念日”
    FESTIVALS: [
      {"type": "生日", "name": "王钰钰小宝", "year": "2002", "date": "02-12"},
      {"type": "节日", "name": "恋爱纪念日", "year": "2021", "date": "10-30"},
      {"type": "生日", "name": "杜龙龙小宝", "year": "2001", "date": "12-06"},
      {"type": "节日", "name": "专升本考试", "year": "2023", "date": "03-06"},
    ],
    // 限制重要节日的展示条目, 需要填写数字; 
    // 如果为3, 则仅展示“将要到达” 的3个重要节日提醒，剩下的将被忽略
    // 如果为0, 则默认展示全部
    FESTIVALS_LIMIT: 4,

    /** 日期相关 */

    // 在一起的日子，格式同上
    LOVE_DATE: "2021-10-30",
    // 结婚纪念日
    MARRY_DATE: "2021-09-10",


    /** 每日一言 */

    // 好文节选的内容类型
    // 可以填写【动画，漫画，游戏，小说，原创，网络，其他】； 随机则填写 ""
    LITERARY_PREFERENCE:[ {"我是今天杜龙龙小宝,钰钰今天也要好好努力,用心学习,一直恩爱"}]


    }

// {{date.DATA}}  
// 城市：{{city.DATA}}  
// 天气：{{weather.DATA}}  
// 最低气温: {{min_temperature.DATA}}  
// 最高气温: {{max_temperature.DATA}}  
// 今天是我们恋爱的第{{love_day.DATA}}天
// 今天是我们相识的第{{marry_day.DATA}}天
// {{birthday_message.DATA}}

// {{note_en.DATA}}  
// {{note_ch.DATA}}

// 共推送 {{success_post_num.DATA}}  人
// 成功: {{success_post_num.DATA}} | 失败: {{fail_post_num.DATA}}
// 成功用户: {{success_post_ids.DATA}}
// 失败用户: {{fail_post_ids.DATA}}
