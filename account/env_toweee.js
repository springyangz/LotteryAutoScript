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
"enable_web_push=DISABLE; DedeUserID=271804089; DedeUserID__ckMd5=c7eca9ec7d4cb3a7; CURRENT_BLACKGAP=0; enable_feed_channel=ENABLE; header_theme_version=OPEN; theme-tip-show=SHOWED; theme-avatar-tip-show=SHOWED; buvid3=862502F6-B416-E8D3-CFE9-C6A26654CE1A34701infoc; b_nut=1760105734; _uuid=7107C617E-C7103-E103B-C757-775DE710104CC229311infoc; buvid_fp=a0137c208d1262b5843dcaec874fa7a2; buvid4=CE36A1CD-2EA2-B9C7-144B-F65323A3782568933-024073113-i3EdYtUj2DlUoC1iALVumCFa/2SCRNjSudnlKYZhi8loAGW04l5WqtRdsUzUiPBA; CURRENT_QUALITY=80; rpdid=|(k|kYY)ukuJ0J'u~Ym||)YkJ; CURRENT_FNVAL=4048; home_feed_column=4; browser_resolution=1027-1023; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzUzMTIwOTMsImlhdCI6MTc3NTA1MjgzMywicGx0IjotMX0.hCB83z5TZRqJ6kMkgWGsI7LCQJC-h0Np66LhKfvLQKQ; bili_ticket_expires=1775312033; SESSDATA=f85f0497%2C1790604894%2C1a932%2A42CjDXs3Ae_tJ5Ehaxf0KCmSzNMtpm6WZQhieqO1yoNiBuofSvjlhps72Jg7bxUfFicZASVkM3Qmtfb0VFTVNtclQtYUdrMzhiUldXYU5GcmNMVlBiekV6WXR6OThXdHpKY2VnanQzM044NWxySmJERk4teEJKeV90VzQ1UmhYWm52clVwUHRjRkt3IIEC; bili_jct=a02e2935386c2b05d45d86a0546a4791; sid=639mu81l; b_lsid=EB7D64D3_19D4965B696"
        ,
        NOTE: 'toweee',
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
