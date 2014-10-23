fadeInTextsInVerticalLines
============================


テキストを縦書きでフェードイン表示させるプラグインです。

[デモページはこちら](http://yukiyamashina.github.io/fadeInTextsInVerticalLines/)

## JSの設定

jQuery本体とjquery.fadeInTextsInVerticalLines.jsを読み込んだ後、プラグインの設定をしてください。以下は設定例です。

```HTML
<script src="//ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
<script src="js/jquery.fadeInTextsInVerticalLines.js"></script>
<script>
$(document).ready(function(){
  var defaults1 = {
            lineByLine         : true,
            opacityThreshold   : 0.1,
            delaySpeed         : 100,
            fadeSpeed          : 1000,
            fontSize           : '1.5rem',
            lineHeight         : '1.8rem'
  };
  $('.fadein1').verticalTextsWithDelay(defaults1);
});
</script>
```

各パラメータは以下のような働きをします：

* lineByLine: trueで行ごとにフェードイン、falseで全体がフェードインします。
* opacityThreshold: 前の行の最後の文字のopacityがこの値を超えると次の行が表示されます。
* delaySpeed: 前の文字から次の文字を表示するまでのディレイです。
* fadeSpeed: 文字を表示させる際のフェードインの速度です。
* fontSize: remで設定してください。JS内部でhtml要素のfont-sizeは62.5%に設定しています。
* lineHeight: 文字間隔を変えることができます。


## HTML body part

上記の例の場合のHTMLのbody要素の例です。縦書き表示させるブロックにクラス名を設定し、その中の一行ずつをspan要素で囲んでください。span要素にはverticalというクラスをつけてください。

```HTML
<div class="fadein1">
  <span class="vertical">およそ千四百年前から始まったとされる日本の刺繍。</span>
  <span class="vertical">その中でも京都で発展したものを、</span>
  <span class="vertical">　-京縫-　といい、</span>
  <span class="vertical">豪華な金糸銀糸を用い、</span>
  <span class="vertical">花鳥風月などのモチーフを写実的に表現した図柄が特徴です。</span>
  <span class="vertical">そして、それに独自の技法を加えた、</span>
  <span class="vertical">　-糸縫-</span>
  <span class="vertical">ひとつひとつ、</span>
  <span class="vertical">職人たちの想いで紡がれた、</span>
  <span class="vertical">伝統工芸の美しさをご覧ください。</span>
</div>
```

## CSS

**CSSでは必ずverticalクラスにopacity:0を設定してください。**

```CSS
.vertical {
    opacity: 0;
}
```




## The MIT License
Copyright (c) 2014 Yuki Yamashina and Minorin

以下に定める条件に従い、本ソフトウェアおよび関連文書のファイル（以下「ソフトウェア」）の複製を取得するすべての人に対し、ソフトウェアを無制限に扱うことを無償で許可します。これには、ソフトウェアの複製を使用、複写、変更、結合、掲載、頒布、サブライセンス、および/または販売する権利、およびソフトウェアを提供する相手に同じことを許可する権利も無制限に含まれます。

上記の著作権表示および本許諾表示を、ソフトウェアのすべての複製または重要な部分に記載するものとします。

ソフトウェアは「現状のまま」で、明示であるか暗黙であるかを問わず、何らの保証もなく提供されます。ここでいう保証とは、商品性、特定の目的への適合性、および権利非侵害についての保証も含みますが、それに限定されるものではありません。 作者または著作権者は、契約行為、不法行為、またはそれ以外であろうと、ソフトウェアに起因または関連し、あるいはソフトウェアの使用またはその他の扱いによって生じる一切の請求、損害、その他の義務について何らの責任も負わないものとします。