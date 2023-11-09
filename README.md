# 課題　 タイトル「Memo Pad改」

## デプロイ

 - https://hiroaki1976.github.io/4th_assignment_public/
 
## 紹介と使い方

  - 講義で使われたメモアプリのデザインをベースに、実際にこういう機能があったらいいなというアイディアを盛り込んで作ってみました。

## 工夫した点

  - メモが保存されると、保存した日時も一緒に記録されるようにしました。

  - 一覧では、右側に個別の表示ボタンと削除ボタンが生成され、それぞれ機能するようにしました（ここが一番大変でした）。
  
  - 一覧では、タイトルと文字数が一定の文字数以上だと、CSSで「…」と省略されるようにしました。

  - データが何もない時は、「保存データ一覧」のタイトルと「全て削除」のボタンが表示されないようにしました（ここが二番目に大変でした）。

  - タイトルと本文の入力欄をクリックすると、クリップボードに保存されるようにしました。

## 苦戦した点

  - 個別の表示ボタンと削除ボタンで、どのボタンが押されたのかを判定？させるのが一番大変でした。この過程で、on()でのデリゲートや$(this)、closest()について学ぶことができました。

  - データがない時の非表示も大変でした。この過程で、$(window).on('load',function() {});について学ぶことができました。

  - 一覧での文字数も地味に大変でした。最初は「これJSでやるのか…」と気が一瞬遠くなりましたが、CSSのtext-overflow: ellipsis;を知り、無事に解決でき良かったです。

  - 一見動くので放置していたエラーのせいで、ボタンが効かない不具合もありました。エラーを解消したら問題が解決したので、エラーは確実につぶさないとだめなんだということを学びました。

## 質問・疑問・感想など

  - [感想]今回は講義のコードをベースに自分なりにカスタマイズしていったのですが、なんかプログラミング力が付いてきた様な気がしてきました。あと、しっかり構想を練ってから作り始めたのも良かったです。ただ、他の皆さんのようなオリジナリティあふれる発想がなかなかできないのが、悩みどころです。

  - [質問]letとconstの使い分けはどのようにすればいいでしょうか？

## 参考にした web サイトなど

  - CSSで要素を上下や左右から中央寄せする7つの方法
  - https://www.granfairs.com/blog/staff/centering-by-css
  
  - 【複数行にも対応】長過ぎる文字列を省略して末尾を三点リーダー（…）にする方法いろいろ
  - https://blog.recruit.co.jp/rmp/front-end/tips-ellipsis/

  - JSONを理解してJavaScriptのstringifyとparseで操作してみよう
  - https://techplay.jp/column/611

  - JavaScriptで日付や時間の取得・計算をする方法・Dateオブジェクトやタイムスタンプの使い方
  - https://masanyon.com/javascript-date-timestamp/

  - 【jQuery入門】on()によるイベント処理の使い方まとめ！
  - https://www.sejuku.net/blog/38774#index_id8

  - jQueryで$(this)の使い方【サンプルコード有】
  - https://kinocolog.com/jquery_this/

  - 【jQuery】「$(document).ready()」と「$(window).load()」の違いを極める！［jQuery3.0以降対応］
  - https://on-ze.com/archives/1851

  - 【JavaScript】textareaの文字をクリップボードにコピーしよう!【HTML CSS】
  - https://samehack.com/javascript-textarea-copy/


