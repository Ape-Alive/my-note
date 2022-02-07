## 安装报错
yarn create umi报错文件名、目录名或卷标语法不正确。
修改E:\frontEndSoftware\nodeEnvironment\node_global\bin目录下create-umi.cmd文件
右键create-umi.cmd 编辑 将文本改为如下，删掉前面‘%~dp0’符号，退出文件，点击属性将只读勾选
注意：安装命令不要再加npm或者yarn 直接create-umi(可以防止覆盖)
如果还是报错
将E:\frontEndSoftware\nodeEnvironment\node_global\bin目录下create-umi.cmd文件路径加入环境变量中

