# ♨️♨️♨️♨️セントウツカリタイ（仮）♨️♨️♨️♨️
♨️♨️♨️♨️♨️♨️♨️銭湯好きによる、銭湯好きのための、銭湯アプリ♨️♨️♨️♨️♨️♨️♨️

# 開発環境構築手順
## Pythonセットアップ
### Python3.11.9のインストール
```pyenv install 3.11.9```
### Pythonのバージョンを切り替える。
```pyenv global 3.11.9```
### 現在のバージョン確認
```pyenv version```
## pipenvセットアップ
Pythonのパッケージ管理を行うためのツール
### インストール
```pip install pipenv```
### 環境変数の設定
```
$ echo 'export PIPENV_VENV_IN_PROJECT=true' >> ~/.zshrc
$ source ~/.zshrc
```
### パッケージのインストール
```pipenv sync --dev```


