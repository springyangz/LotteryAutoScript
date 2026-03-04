#!/bin/env bash
set -e

# 项目名称
NAME="lottery-auto-script"
BRANCH="main"

# Gitee 仓库地址（提供SSH和HTTPS两种方式，按需切换）
GIT_REPO_SSH="git@gitee.com:springyangz/lottery-auto-script.git"
GIT_REPO_HTTPS="https://gitee.com/springyangz/lottery-auto-script.git"

# 拉取/更新项目代码
if [ -d "$NAME" ]; then
    echo "检测到项目目录已存在，执行更新操作..."
    cd "$NAME" || { echo "切换到项目目录失败！"; exit 1; }
    #git pull --force
    git fetch origin main
    git reset --hard origin/main
    cd .. || { echo "返回上级目录失败！"; exit 1; }
else
    echo "项目目录不存在，执行克隆操作..."
    # 优先用HTTPS（无需SSH密钥），如需SSH可替换为 $GIT_REPO_SSH
   git clone -b "$BRANCH" "$GIT_REPO_SSH"
fi

# 初始化 my_config.js 配置文件
if [ -f "$NAME/my_config.example.js" ]; then
    cp "$NAME/my_config.example.js" "$NAME/my_config.js"
    echo "my_config.js 已从示例文件创建"
else
    echo "错误：未找到 my_config.example.js 示例文件"
    exit 1
fi

# 初始化 env.js 配置文件
#if [ -f "$NAME/env.example.js" ]; then
#    cp "$NAME/env.example.js" "$NAME/env.js"
#    echo "env.js 已从示例文件创建"
#else
#    echo "错误：未找到 env.example.js 示例文件"
#    exit 1
#fi

# 定义创建快捷脚本的函数
function create() {
    local ACTION="$1"
    local USERNAME="$2"
    # 外层目录名，可根据需求调整
    outer_dir="account_scripts"
    # 拼接子目录名
    sub_dir="$outer_dir/$USERNAME"
    # 拼接脚本文件名
    SCRIPT_NAME="$sub_dir/${ACTION}.sh"

    # 创建外层目录（如果不存在）
    if [ ! -d "$outer_dir" ]; then
        mkdir "$outer_dir"
    fi
    # 创建子目录（如果不存在）
    if [ ! -d "$sub_dir" ]; then
        mkdir "$sub_dir"
    fi

    local task_type=$ACTION
    local account_name=$USERNAME
    local is_completed="已完成"
    #local title="任务类型: ${task_type}, 账号名: ${account_name}, 状态: ${is_completed}"
    local title="${task_type} ${is_completed}"
    local notification_text="任务执行完成，任务类型: $ACTION 账号名: $USERNAME 总运行时间: \$formatted_runtime"

    # 写入脚本内容（注意路径用双引号包裹）
    cat >"$SCRIPT_NAME" <<EOF
#!/bin/env bash
send_notification=true
if [ "\$#" -eq 1 ]; then
    if [ "\$1" == "false" ]; then
        send_notification=false
    fi
fi

start_time=\$(date +%s)
cd "/ql/data/scripts/lottery-auto-script" || { echo "切换到项目目录失败！"; exit 1; }
git pull --force
export NODE_ENV=production
cp account/env_$USERNAME.js env.js
npm run $ACTION
end_time=\$(date +%s)
runtime=\$((end_time - start_time))
hours=\$((runtime / 3600))
minutes=\$(((runtime % 3600) / 60))
seconds=\$((runtime % 60))
formatted_runtime="\$hours 小时 \$minutes 分钟 \$seconds 秒"

echo $title
echo $notification_text

if \$send_notification; then
    sckey="SCT254268TquTXWVByKKTRr9rpZFTeHp8I"
    response=\$(curl -s -w "%{http_code}" "https://sc.ftqq.com/\$sckey.send" -d "text=$title&desp=$notification_text" -o /dev/null)
    if [ "\$response" -ne 200 ]; then
        echo "Server酱通知发送失败，HTTP状态码: \$response"
    fi
else
    echo "通知功能已关闭"
fi
EOF

    # 给生成的脚本添加执行权限
    chmod +x "$SCRIPT_NAME"
    echo "快捷脚本 $SCRIPT_NAME 已创建并添加执行权限"
}

# 账号名数组
usernames=("fengzhong" "toweee" "sanshi" "yimeng" "xunmeng")

# 创建快捷脚本
for username in "${usernames[@]}"; do
    create start "$username"
    create check "$username"
    create clear "$username"
    create account "$username"
    #create login "$username"
done

# 创建 check_all.sh 快捷脚本
function create_check_all() {
    outer_dir="account_scripts"
    SCRIPT_NAME="$outer_dir/check_all.sh"

    local ACTION="check_all"
    local task_type=$ACTION
    local is_completed="已完成"
    local title="${task_type} ${is_completed}"
    local notification_text="任务执行完成，任务类型: $ACTION 账号名: all_account 总运行时间: \$formatted_runtime"

    cat >"$SCRIPT_NAME" <<EOF
#!/bin/env bash
cd "$(pwd)" || { echo "切换到项目目录失败！"; exit 1; }
start_time=\$(date +%s)
EOF
    for username in "${usernames[@]}"; do
        sub_dir="$outer_dir/$username"
        cat >>"$SCRIPT_NAME" <<EOF
sh $sub_dir/check.sh false
echo "等待10分钟, 以便下一个账号执行任务..."
sleep 600
EOF
    done
    cat >>"$SCRIPT_NAME" <<EOF
end_time=\$(date +%s)
runtime=\$((end_time - start_time))
hours=\$((runtime / 3600))
minutes=\$(((runtime % 3600) / 60))
seconds=\$((runtime % 60))
formatted_runtime="\$hours 小时 \$minutes 分钟 \$seconds 秒"

echo $title
echo $notification_text

sckey="\${SCKEY}"
response=\$(curl -s -w "%{http_code}" "https://sc.ftqq.com/\$sckey.send" -d "text=$title&desp=$notification_text" -o /dev/null)
if [ "\$response" -ne 200 ]; then
    echo "Server酱通知发送失败，HTTP状态码: \$response"
fi
EOF

    # 给生成的脚本添加执行权限
    chmod +x "$SCRIPT_NAME"
    echo "快捷脚本 $SCRIPT_NAME 已创建并添加执行权限"
}

create_check_all

# 创建 clear_sequence.sh 快捷脚本
function create_clear_sequence() {
    outer_dir="account_scripts"
    SCRIPT_NAME="$outer_dir/clear_sequence.sh"
    local title="clear_all"
    local notification_text="任务执行完成，任务类型: clear 账号名:\$username 总运行时间: \$formatted_runtime"


    cat >"$SCRIPT_NAME" <<EOF
#!/bin/env bash
# 获取脚本所在目录的绝对路径
script_dir=\$(realpath \$(dirname \$0))
counter_file="\$script_dir/clear_counter.txt"
if [! -f \$counter_file ]; then
    echo 0 > \$counter_file
fi
counter=\$(cat \$counter_file)
usernames=("fengzhong" "toweee" "sanshi" "yimeng" "xunmeng")
index=\$((counter % ${#usernames[@]}))
username=\${usernames[index]}
sub_dir="\$script_dir/\$username"
start_time=\$(date +%s)
\$sub_dir/clear.sh
end_time=\$(date +%s)
runtime=\$((end_time - start_time))
hours=\$((runtime / 3600))
minutes=\$(((runtime % 3600) / 60))
seconds=\$((runtime % 60))
formatted_runtime="\$hours 小时 \$minutes 分钟 \$seconds 秒"

echo $title
echo $notification_text

sckey="\${SCKEY}"
response=\$(curl -s -w "%{http_code}" "https://sc.ftqq.com/\$sckey.send" -d "text=$title&desp=$notification_text" -o /dev/null)
if [ "\$response" -ne 200 ]; then
    echo "Server酱通知发送失败，HTTP状态码: \$response"
fi

counter=\$((counter + 1))
echo \$counter > \$counter_file
EOF
    chmod +x "$SCRIPT_NAME"
    echo "快捷脚本 $SCRIPT_NAME 已创建并添加执行权限"
}

create_clear_sequence

# 进入项目目录安装依赖
echo "开始安装项目依赖..."
cd "$NAME" || { echo "切换到项目目录失败！"; exit 1; }
npm i || { echo "依赖安装失败！请检查网络或npm配置"; exit 1; }

echo "====================="
echo "操作完成！"
echo "1. 请修改 $(pwd)/my_config.js 和 $(pwd)/env.js 配置文件"
echo "2. 可执行对应的快捷脚本运行相关功能"