let arr = [];
// Save クリックイベント
$("#save").on("click", function () {
    arr = localStorage.getItem("json");// keyネーム’json’のデータを取得し、変数arrに代入する
    console.log(arr,'JSON文字列');
    let date = new Date()
    console.log(date);
    let year = date.getFullYear();
    console.log(year, '西暦');
    let month = date.getMonth();
    console.log(month+1, '月');
    let day = date.getDate();
    console.log(day, '日');
    let hour = date.getHours();
    console.log(hour, '時');
    let minute = date.getMinutes();
    console.log(minute, '分');
    let second = date.getSeconds();
    console.log(second, '秒');

    if (arr == null) {// 変数arrがnullなら
        arr = [];// arrに空の配列を代入する
    } else {
        arr = JSON.parse(arr);//arrのJSON文字列をオブジェクトに変換し、arrに代入する
    }
    console.log(arr,'オブジェクト')

    const title = $("#title").val();// id:titleの値を取得し、titleに代入する
    const value = $("#text").val();// id:textの値を取得し、valueに代入する
    arr.unshift({ key: title, value: value , year: year, month: month+1, day: day, hour: hour, minute: minute, second: second });// keyとvalue等の配列を配列arrの一番先頭に追加する
    localStorage.setItem('json', JSON.stringify(arr));// arrのオブジェクトをJSON文字列へ変換し、ローカルストレージのkeyネーム'json'へ登録する

    const html = `
    <li>
        <p>${year}年${month+1}月${day}日${hour}時${minute}分${second}秒</p>
        <p>${title}</p>
        <p>${value}</p>
        <P class="transparent">${year}</P>
        <P class="transparent">${month+1}</P>
        <P class="transparent">${day}</P>
        <P class="transparent">${hour}</P>
        <P class="transparent">${minute}</P>
        <P class="transparent">${second}</P>
        <button class="display">表示</button>
        <button class="delete">削除</button>
    </li>
    `;
    $("#list").prepend(html);
    $('#title').val('');
    $('#text').val('');
    });


// 個別メモ表示クリックイベント
$("#list").on("click", ".display", function () {// デリゲートを使用して、.display ボタンのクリックイベントを処理
    const listItem = $(this).closest("li"); // クリックされたボタンに最も近い親 <li> 要素を取得
    const title = listItem.find("p:nth-child(2)").text(); // <li> の 2番目の <p> 要素のテキストを取得
    const value = listItem.find("p:nth-child(3)").text(); // <li> の 3番目の <p> 要素のテキストを取得
    console.log(listItem, 'li要素');
    console.log(title, '表示タイトル');
    console.log(value, '表示本文');
    // 取得したタイトルとメモをフォームに設定
    $('#title').val(title);
    $('#text').val(value);
});

// 個別メモ削除クリックイベント
$('#list').on('click', '.delete', function () {
    const listItem = $(this).closest("li"); 
    listItem.remove();
    const storedData = JSON.parse(localStorage.getItem('json'));// ローカルストレージからデータを取得
    for (let i = 0; i < storedData.length; i++) {// ローカルストレージから対応するメモを削除
        if (storedData[i].key === listItem.find("p:nth-child(2)").text() &&
            storedData[i].value === listItem.find("p:nth-child(3)").text() &&
            storedData[i].year == listItem.find("p:nth-child(4)").text() &&
            storedData[i].month == listItem.find("p:nth-child(5)").text() &&
            storedData[i].day == listItem.find("p:nth-child(6)").text() &&
            storedData[i].hour == listItem.find("p:nth-child(7)").text() &&
            storedData[i].minute == listItem.find("p:nth-child(8)").text() &&
            storedData[i].second == listItem.find("p:nth-child(9)").text()) {
            storedData.splice(i, 1); // 対応するメモを削除
            break; // 削除したらループを抜ける
        }
    }
    localStorage.setItem('json', JSON.stringify(storedData));// 更新されたデータをローカルストレージに保存
});




  //2.clear クリックイベント
  $("#clear").on("click", function () {
    localStorage.clear();
    $("#list").empty();
  });


  // ページ読み込み：保存データ取得表示
  const k = JSON.parse(localStorage.getItem('json')).length;   //localstorage内に保存した配列の中にあるオブジェクトの個数を確認

  for (let i = 0; i < k; i++) {   //オブジェクトの個数分繰り返す
    const key = localStorage.key(0);
    let arr = localStorage.getItem(key);
    arr = JSON.parse(arr);
    const title = arr[i].key;// オブジェクトからタイトルを取り出す
    const memo = arr[i].value;// オブジェクトからメモを取り出す
    let year = arr[i].year;
    let month = arr[i].month;
    let day = arr[i].day;
    let hour = arr[i].hour;
    let minute = arr[i].minute;
    let second = arr[i].second;
    
       
    const html = `
    <li>
        <p>${year}年${month}月${day}日${hour}時${minute}分${second}秒</p>
        <p>${title}</p>
        <p>${memo}</p>
        <P class="transparent">${year}</P>
        <P class="transparent">${month}</P>
        <P class="transparent">${day}</P>
        <P class="transparent">${hour}</P>
        <P class="transparent">${minute}</P>
        <P class="transparent">${second}</P>
        <button class="display">表示</button>
        <button class="delete">削除</button>
    </li>
    `;
    $("#list").append(html);
    }