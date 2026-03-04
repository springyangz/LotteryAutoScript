module.exports = Object.freeze({
    /**
     * ## 账号相关
     * - `COOKIE` 是必填项
     * - `NOTE` 帐号备注
     * - `NUMBER` 表示是第几个账号
     * - `CLEAR` 是否启用清理功能
     * - `ACCOUNT_UA` 账号UA, 可在浏览器控制台输入 navigator.userAgent 查看
     * 
     * ## 高级功能
     * - `ENABLE_CHAT_CAPTCHA_OCR` 开启评论验证码识别 使用方法见README
     * - `CHAT_CAPTCHA_OCR_URL` 验证码识别接口 POST `url`->`code`
     * - `ENABLE_AI_COMMENTS` 是否启用AI评论
     * 
     * ## 调试相关
     * - `LOTTERY_LOG_LEVEL` 输出日志等级 Error<Warn<Notice<Info<Debug 0<1<2<3<4
     * - `NOT_GO_LOTTERY` 关闭抽奖行为
     *
     * ## 多账号
     * - `ENABLE_MULTIPLE_ACCOUNT` 是否启用多账号
     * - `MULTIPLE_ACCOUNT_PARM` 多账号参数(JSON格式) <不推荐使用
     * 1. 将 ENABLE_MULTIPLE_ACCOUNT 的值改为true
     * 2. 将账号信息依次填写于 multiple_account_parm 中, 参考例子类推
     * - `WAIT` 表示下一个账号运行等待时间(毫秒)
     *
     * **按顺序依次执行, 防止访问频繁封禁IP**
     */
    account_parm: {
        COOKIE:
"buvid_fp=8ee14f26abe2a9db3dfaa48207878a4b; enable_web_push=DISABLE; hit-dyn-v2=1; rpdid=0zbfAHGJJS|du9uhQK1|W7r|3w1Tv8kD; CURRENT_QUALITY=80; enable_feed_channel=ENABLE; DedeUserID=3546745917147186; DedeUserID__ckMd5=a4b35ca27f931b76; header_theme_version=OPEN; theme-tip-show=SHOWED; theme-avatar-tip-show=SHOWED; buvid4=1724C539-D48A-B190-FBF8-62AD8D92C3EB21151-024111414-droVmP7IE9Flvt/wLwkynRXSoH03CK+iR1mhWi87lslYeX+xyuYR165c2u/+aBVz; CURRENT_FNVAL=2000; buvid3=20684EC1-1246-238D-0C82-730BD97C879A07824infoc; b_nut=1763387507; _uuid=110210EE3B-A681-D2DA-2AFE-F47DEC59624305079infoc; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NjQ0MjY0OTMsImlhdCI6MTc2NDE2NzIzMywicGx0IjotMX0.pHLg82KD6SZ5wzAZKBwtILf045wt5C7i90sCjidb2ns; bili_ticket_expires=1764426433; SESSDATA=9119ecb2%2C1779804306%2Cfaf22%2Ab2CjBCt5_ofAOlu93ocVVweChElX3lXSZeuj85MnzqElZ2ZocTQDAKcZVtBm2939Ku8VUSVmJ5WkhhSTNucFppcEhIWUJXOWxLRGdqM0I4MFhNQ0RFbzJyNjBkR3RGOFFqOThOaW43R1FrX3BNR29ZbHlpV3NybU96T1RYVkdTZ2lEQ2VSSmhRdWhnIIEC; bili_jct=dcd954bad2e3797a3afdb0b9a656445d; bp_t_offset_3546745917147186=1139949109940060160; b_lsid=88EA1054C_19ACFB65F82; home_feed_column=4; browser_resolution=1179-1019; sid=mxed2yiq"
        ,
        NOTE: '寻梦追梦人',
        NUMBER: 1,
        CLEAR: true,
        ACCOUNT_UA: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',

        ENABLE_CHAT_CAPTCHA_OCR: false,
        CHAT_CAPTCHA_OCR_URL: 'http://127.0.0.1:9898/ocr/url/text',
        ENABLE_AI_COMMENTS: false,

        ENABLE_MULTIPLE_ACCOUNT: false,
        MULTIPLE_ACCOUNT_PARM: '',

        LOTTERY_LOG_LEVEL: 3,
        NOT_GO_LOTTERY: ''
    },

    /**
     * 为防止环境变量过长, 请将多账号填在此处
     * 以 **大括号内容** 为模板依次复制(包含大括号),逗号分割
     *
     * ```txt
     * [
     *     {
     *     ...
     *     NUMBER: 1
     *     ...
     *     },
     *     {
     *     ...
     *     NUMBER: 2
     *     ...
     *     }
     * ]
     * ```
     */
    multiple_account_parm: [
        {
            COOKIE: '',
            NOTE: '',
            NUMBER: 1,
            CLEAR: true,
            WAIT: 60 * 1000,
            ACCOUNT_UA: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.88 Safari/537.36',
            PROXY_HOST: '',//代理ip
            PROXY_PORT: '',//代理ip端口
            PROXY_USER: '',//代理ip账号
            PROXY_PASS: '',//代理ip密码
        }
    ],

    /**
     * 推送相关参数
     */
    push_parm: {
        SCKEY: 'SCT254268TquTXWVByKKTRr9rpZFTeHp8I',
        SENDKEY: '',
        QQ_SKEY: '',
        QQ_MODE: '',
        BARK_PUSH: '',
        BARK_SOUND: '',
        PUSHDEER_URL: '',
        PUSHDEER_PUSHKEY: '',
        TG_BOT_TOKEN: '',
        TG_USER_ID: '',
        TG_PROXY_HOST: '',
        TG_PROXY_PORT: '',
        DD_BOT_TOKEN: '',
        DD_BOT_SECRET: '',
        QYWX_AM: '',
        QYWX_KEY: '',
        IGOT_PUSH_KEY: '',
        PUSH_PLUS_TOKEN: '',
        PUSH_PLUS_USER: '',
        QMSG_SOCKET: '',
        QMSG_KEY: '',
        QMSG_QQ: '',
        SMTP_HOST: '',
        SMTP_PORT: '',
        SMTP_USER: '',
        SMTP_PASS: '',
        SMTP_TO_USER: '',
        GOTIFY_URL: '',
        GOTIFY_APPKEY: '',
        FS_BOT_WEBHOOK: '',
        FS_BOT_SECRET: ''
    },

    /**
     * AI Authentication(OpenAI 兼容的 API 格式)
     * Chat completions
     * 此处填写Key, 在my_config中的ai_comments_parm中填写API地址等信息
     */
    ai_parm: {
        //apikey
        AI_API_KEY: '',
    }
});
