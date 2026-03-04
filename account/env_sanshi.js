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
"buvid3=55F06193-1070-EA08-F233-799F8A535C5067390infoc; b_nut=1763388767; _uuid=D4547F64-43AF-A76F-746A-C2B36671210BA64357infoc; buvid4=97D73F42-2334-49DB-6C99-6F985C67F96D68000-025111722-9QFQgyiPkH/iH92Sc6YXzzom/kJvzcnlMytW7k6Zs2bdDBZAu7UELdges3mNx1ec; buvid_fp=3922ef6984adab49539360d8bbde2085; DedeUserID=3690974203087288; DedeUserID__ckMd5=7fe21420f175640b; theme-tip-show=SHOWED; theme-avatar-tip-show=SHOWED; rpdid=0zbfAHGJK1|15ano3iyD|1Y|3w1Vl24i; CURRENT_QUALITY=80; CURRENT_FNVAL=4048; home_feed_column=4; browser_resolution=1140-1019; SESSDATA=2a4329eb%2C1788788575%2C98b4a%2A32CjBv1RLt3fm0RhfP88zA3f-UQ7FcZO7mn5OZ1wjwK-R8lcV1DDuZh_hCH3Y1WOm_qD8SVmwyMzBqM1BLTGRGWUVqSi1BQ2JtRnUwUmpLdzQ2c29iSWVFN2pEYmd5Q0F4MmNSRTRldlh6N2c5YXZ6dG56NVFBd0l3Zko3RDBxZDVHR1k4MUtLeWRBIIEC; bili_jct=7e99f2754429385a6ee5cf1337d490cd; sid=mo6we3ih; bp_t_offset_3690974203087288=1178531209181921280; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzM0OTU3ODUsImlhdCI6MTc3MzIzNjUyNSwicGx0IjotMX0.64onMKFauulL-qtw4PNwVrxhYQFj2kdWja3BT6iN-OQ; bili_ticket_expires=1773495725; b_lsid=C9A9103D_19CDD28BF06"
        ,
        NOTE: '三石小确幸',
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
