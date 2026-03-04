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
"buvid_fp_plain=undefined; msource=pc_web; deviceFingerprint=ff2589a426808c8ba189bc09cb6c0bb9; from=pc_show; b_timer=%7B%22ffp%22%3A%7B%22333.788.fp.risk_DB4AC95F%22%3A%22182CA77CDB6%22%2C%22333.999.fp.risk_DB4AC95F%22%3A%22182CADEC17B%22%2C%22333.851.fp.risk_DB4AC95F%22%3A%22182CA42C023%22%2C%22333.42.fp.risk_DB4AC95F%22%3A%2218156F9E118%22%2C%22333.337.fp.risk_DB4AC95F%22%3A%221829BA90A0E%22%2C%22333.967.fp.risk_DB4AC95F%22%3A%22182BFE6F119%22%2C%22444.8.fp.risk_DB4AC95F%22%3A%22182BFE6F932%22%2C%22333.905.fp.risk_DB4AC95F%22%3A%2218176384E7F%22%2C%22777.5.0.0.fp.risk_DB4AC95F%22%3A%22182BE92D634%22%2C%22444.41.fp.risk_DB4AC95F%22%3A%22182B920257B%22%2C%22888.2421.fp.risk_DB4AC95F%22%3A%22182CA761425%22%2C%22444.7.fp.risk_DB4AC95F%22%3A%2218206416CD8%22%2C%22444.55.fp.risk_DB4AC95F%22%3A%221820A60F517%22%2C%22888.67128.fp.risk_DB4AC95F%22%3A%22182072C26B2%22%2C%22333.880.fp.risk_DB4AC95F%22%3A%221822F998FB0%22%2C%22444.42.fp.risk_DB4AC95F%22%3A%2218254270B66%22%2C%22333.1193.fp.risk_DB4AC95F%22%3A%22182CADEC183%22%2C%22333.794.fp.risk_DB4AC95F%22%3A%221828CAD5378%22%2C%22333.937.fp.risk_DB4AC95F%22%3A%22182AC13CD02%22%2C%22888.2869.fp.risk_DB4AC95F%22%3A%22182BFE6F3E5%22%7D%7D; DedeUserID=393092352; DedeUserID__ckMd5=bf34343c81f1722b; enable_web_push=DISABLE; share_source_origin=COPY; bsource_origin=bing_ogv; rpdid=0zbfAHGJJU|kkN7cYFl|4iP|3w1TGKyJ; enable_feed_channel=ENABLE; timeMachine=0; CURRENT_QUALITY=80; header_theme_version=OPEN; theme-tip-show=SHOWED; theme-avatar-tip-show=SHOWED; buvid3=07C48249-DB1B-07F6-93FB-FC4A513DDB1A09243infoc; b_nut=1760537709; LIVE_BUVID=AUTO8517619776192706; PVID=1; bsource=search_bing; _uuid=5F81064AE-A781-9464-63EA-8F17D2F52B5A83061infoc; fingerprint=b26f575286895e1701607d7f20da27b6; bp_t_offset_393092352=1166329284403396608; buvid4=706E39DB-065E-90C4-697D-50E768E8F8DG91788-026022422-yi9U/pHi7/ZIm88g+tS/0RRLUK5xB4C8IRS/Ufl/1OKn/B2Ff5r1WmZPB6manFg/; buvid_fp=bc43072454a29187363c824df7d02f96; SESSDATA=9f9f1d99%2C1787497205%2Cf60a5%2A22CjC1Tdc6svCbp0rFvHIFpG8hLscChsckVVR4GJAF5UBi575Vb45mbn3jZK_4BTNQmSASVmlRX1Q5cUh0bk9XTTVYTTRlNnNubzRJWmpicUxVblpLMHhULXlwTnZSOUtEYnl4aUhFb0tWdkpDeS1hU1VqMHg3T1Jmbkw3aTJ6bkIzRlkxYkc5ZUtnIIEC; bili_jct=b34518374b2ba0fb15ed7f61884ba94f; sid=8ozawtcr; home_feed_column=5; bili_ticket=eyJhbGciOiJIUzI1NiIsImtpZCI6InMwMyIsInR5cCI6IkpXVCJ9.eyJleHAiOjE3NzI3MjA3MDEsImlhdCI6MTc3MjQ2MTQ0MSwicGx0IjotMX0.jwG_AoEX_Y0W-dknkJ42YsZju1nSpoKs207Z-qqEn3w; bili_ticket_expires=1772720641; CURRENT_FNVAL=4048; browser_resolution=2048-1026; b_lsid=016136A4_19CB95FF1E1"
        ,
        NOTE: '风中漂泊者',
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
