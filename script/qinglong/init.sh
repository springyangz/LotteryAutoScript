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
    git pull --force
    cd .. || { echo "返回上级目录失败！"; exit 1; }
else
    echo "项目目录不存在，执行克隆操作..."
    # 优先用HTTPS（无需SSH密钥），如需SSH可替换为 $GIT_REPO_SSH
   git clone -b "$BRANCH" "$GIT_REPO_SSH"
fi

# 初始化 my_config.js 配置文件
if [ -f "$NAME/my_config.js" ]; then
    echo "my_config.js 已存在，跳过创建"
else
    if [ -f "$NAME/my_config.example.js" ]; then
        cp "$NAME/my_config.example.js" "$NAME/my_config.js"
        echo "my_config.js 已从示例文件创建"
    else
        echo "错误：未找到 my_config.example.js 示例文件"
        exit 1
    fi
fi

# 初始化 env.js 配置文件
if [ -f "$NAME/env.js" ]; then
    echo "env.js 已存在，跳过创建"
else
    if [ -f "$NAME/env.example.js" ]; then
        cp "$NAME/env.example.js" "$NAME/env.js"
        echo "env.js 已从示例文件创建"
    else
        echo "错误：未找到 env.example.js 示例文件"
        exit 1
    fi
fi

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

    # 写入脚本内容（注意路径用双引号包裹）
    cat >"$SCRIPT_NAME" <<EOF
#!/bin/env bash
cd "$(pwd)/$NAME" || { echo "切换到项目目录失败！"; exit 1; }
export NODE_ENV=production
cp ../account/env_$USERNAME.js env.js
npm run $ACTION
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

# 进入项目目录安装依赖
echo "开始安装项目依赖..."
cd "$NAME" || { echo "切换到项目目录失败！"; exit 1; }
npm i || { echo "依赖安装失败！请检查网络或npm配置"; exit 1; }

echo "====================="
echo "操作完成！"
echo "1. 请修改 $(pwd)/my_config.js 和 $(pwd)/env.js 配置文件"
echo "2. 可执行对应的快捷脚本运行相关功能"