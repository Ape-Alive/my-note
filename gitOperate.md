## git 常见问题解决
### 在远程创建仓库，用命令行克隆下来（默认拉取的是主分支master/main），如果内容都放在分支上，没有在主分支上,拉下来的内容没有，那怎么样拉取指定分支
```
git clone -b dev git@github.com:Ape-Alive/induectionNode.git或者https://github.com/Ape-AliveinduectionNod
```

### 怎么将分支上的内容合并到指定分支上（主分支master）
先切换到本地相关要合并到的分支上（master）或如果本地没有相关分支
```
git checkout -b master
```
将本地分支dev与主分支master合并
```
git merge dev
```
如果报错
error: failed to push some refs to 'github.com:Ape-Alive/induectionNode.git'
这个是因为本地分支落后于远程分支
```
git pull --rebase origin master
```
将合并的内容推送到远程仓库
```
git push origin master
```
### 将本地文件推送到远程仓库（先拉后推；先初始化本地再推）
##### 先拉后推
```
git clone git@github.com:Ape-Alive/my-note.git
```
此时拉取后默认主分支是master
保存到本地缓存(分支是master)
```
git add .
```
提交消息
```
git commit -m " **** "
```
提交到远程分支
```
git push mrigin master
```

##### 先初始化本地再推
