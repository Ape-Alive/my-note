## git 常见问题解决
### 在远程创建仓库，用命令行克隆下来（默认拉取的是主分支master/main），如果内容都放在分支上，没有在主分支上,拉下来的内容没有，那怎么样拉取指定分支
```js
git clone -b dev git@github.com:Ape-Alive/induectionNode.git或者https://github.com/Ape-AliveinduectionNod
```
或者
```js
克隆下主分支到本地
git clone git@github.com:Ape-Alive/induectionNode.git或者https://github.com/Ape-AliveinduectionNod
创建并切换到本地分支dev上
git checkout -b dev
拉取远程dev 上的代码
git push origin dev
```
### 怎么将分支上的内容合并到指定分支上（主分支master）
先切换到本地相关要合并到的分支上（master）或如果本地没有相关分支
```js
git checkout -b master
```
将本地分支dev与主分支master合并
```js
git merge dev
```
如果报错
error: failed to push some refs to 'github.com:Ape-Alive/induectionNode.git'
这个是因为本地分支落后于远程分支
```js
git pull --rebase origin master
```
将合并的内容添加到暂存区并添加提交信息
```js
git add .
git commit -m " *** " 
```
将合并的内容推送到远程仓库

```js
git push origin master
```
### 将本地文件推送到远程仓库（先拉后推；先初始化本地再推）
##### 先拉后推
```
git clone git@github.com:Ape-Alive/my-note.git
```
此时拉取后默认主分支是master
保存到本地缓存(分支是master)
```js
git add .
```
提交消息
```js
git commit -m " **** "
```
提交到远程分支
```js
git push origin master
```

##### 先初始化本地再推
初始化本地仓库
```js
git init
```
将本地文件添加到本地仓库
```js
git add .
git commit -m "****"
```
建立本地仓库和远程仓库的联系
```js
git remote add origin git@github.com:Ape-Alive/induectionNode.git或者https://github.com/Ape-AliveinduectionNod
```
拉取远程主分支到本地
```js
git pull --rebase origin master
```

选需要推上去的远程分支
```js
git push origin master
``` 

