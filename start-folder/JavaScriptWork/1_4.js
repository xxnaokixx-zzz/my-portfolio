let wantApple = 4;
let stockApple  =3;

if(wantApple <= stockApple) {
    console.log(`希望通りカートに入れます`);
}else{
    console.log(`在庫が足りません。カートに追加します`);
}

let i = 0;
while(i < stockApple) {
    console.log(`りんごをカートに追加しました`);
    i++;
}

for (let j = 1; j <= stockApple; j++) {
    console.log(`リンゴを買うのは${j}回目の処理です`);
  }  