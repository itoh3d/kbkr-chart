
var kabu_datasets =
    [
        { label: 'itoh3d', data: [{ x: 22.9, y: 484, r: 14.4 }] },
        { label: 'musou1231', data: [{ x: 5.2, y: 318, r: 22.6 }] },
        { label: 'MUCHO84928709', data: [{ x: 185.2, y: 715, r: 8.5 }] },
        { label: 'M31hI', data: [{ x: 6.9, y: 436, r: 23.2 }] },
        { label: 'noDance_hall', data: [{ x: 4.7, y: 177, r: 17.7 }] },
        { label: 'btlr6P1YjrlTMjX', data: [{ x: 6, y: 74, r: 10.2 }] },
        { label: 'goron__chan', data: [{ x: 42, y: 846, r: 15.1 }] },
        { label: 'sistinavc', data: [{ x: 82.3, y: 2990, r: 23 }] },
        { label: 'kabusaga', data: [{ x: -2.5, y: 1, r: 1.8 }] },
        { label: 'HappyHikingDay', data: [{ x: 21, y: 43, r: 4.5 }] },


    ];



// チャート描画

var ctx = document.getElementById("myBubbleChart");
var myChart = new Chart(ctx, {
    type: 'bubble',

    data: {
        datasets: kabu_datasets
    },
    hoverRadius: 10,

    options: {
        legend: {
            display: false
        },

        maintainAspectRatio: false,

        tooltips: {
            enabled: false,


            custom: function (tooltipModel) {
                // ツールチップ要素
                var tooltipEl = document.getElementById('chartjs-tooltip');

                // 最初のレンダリング時に要素を作成する
                if (!tooltipEl) {
                    tooltipEl = document.createElement('div');
                    tooltipEl.id = 'chartjs-tooltip';
                    tooltipEl.innerHTML = "<table></table>";
                    document.body.appendChild(tooltipEl);
                }

                // ツールチップがない場合は非表示にします
                if (tooltipModel.opacity === 0) {
                    tooltipEl.style.opacity = 0;
                    return;
                }

                // キャレット(ツールチップが指し示すもの)の位置を設定する
                tooltipEl.classList.remove('above', 'below', 'no-transform');
                if (tooltipModel.yAlign) {
                    tooltipEl.classList.add(tooltipModel.yAlign);
                } else {
                    tooltipEl.classList.add('no-transform');
                }

                function getBody(bodyItem) {
                    return bodyItem.lines;
                }

                // テキストを設定する
                if (tooltipModel.body) {
                    var titleLines = tooltipModel.title || [];
                    var bodyLines = tooltipModel.body.map(getBody);
                    var innerHtml = '<thead>';

                    titleLines.forEach(function (title) {
                        innerHtml += '<tr><th>' + title + '</th></tr>';
                    });
                    innerHtml += '</thead><tbody>';

                    bodyLines.forEach(function (body, i) {

                        body[0] = body[0].replace('(', '').replace(')', '').replace(/\s+/g, "");
                        var body_content = body[0].split(':');
                        body_content[1] = body_content[1].split(',');

                        var colors = tooltipModel.labelColors[i];
                        var style = 'background:' + colors.backgroundColor;
                        style += '; border-color:' + colors.borderColor;
                        style += '; border-width: 2px';
                        var span = '<span class="chartjs-tooltip-key" style="' + style + '"></span>';
                        innerHtml += '<tr><td>' + '<a href="https://twitter.com/' + body_content[0] + '/">' + body_content[0] + '</a>' + '</td></tr>';
                        innerHtml += '<tr><td>' + '年初来パフォ：' + body_content[1][0] + ' %</td></tr>';
                        innerHtml += '<tr><td>' + '年間損益：' + body_content[1][1] + ' 万円</td></tr>';
                        var shisan = Math.round((2 * body_content[1][2]) ** 2 * 3.13 / 100) * 100;
                        if (shisan == 0) {
                            innerHtml += '<tr><td>' + '総資産：～ 100 万円</td></tr>';
                        }
                        else {
                            innerHtml += '<tr><td>' + '総資産：' + shisan + ' 万円+</td></tr>';
                        }


                    });
                    innerHtml += '</tbody>';

                    var tableRoot = tooltipEl.querySelector('table');
                    tableRoot.innerHTML = innerHtml;
                }

                // `this` はツールチップ全体です
                var position = this._chart.canvas.getBoundingClientRect();
                console.log(position);

                // スタイル設定
                tooltipEl.style.opacity = 1;
                tooltipEl.style.position = 'absolute';
                tooltipEl.style.fontFamily = tooltipModel._bodyFontFamily;
                tooltipEl.style.fontStyle = tooltipModel._bodyFontStyle;
                tooltipEl.style.padding = tooltipModel.yPadding + 'px ' + tooltipModel.xPadding + 'px';
                tooltipEl.style.caretSize = 5 + 'px';

                if (position.width > 500) {

                    console.log('position.width = ' + position.width + ', position.width > 500');
                    tooltipEl.style.fontSize = 13 + 'px';

                    if (tooltipModel.caretX < position.width / 2) {
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 80 + 'px';
                    }
                    else {
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 80 + 'px';
                    };

                }
                else {
                    console.log('position.width = ' + position.width + ', position.width < 500');
                    tooltipEl.style.fontSize = 11 + 'px';
                    if (tooltipModel.caretX < position.width / 2) {
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX + 20 + 'px';
                    }
                    else {
                        tooltipEl.style.left = position.left + window.pageXOffset + tooltipModel.caretX - 20 + 'px';
                    }
                };

                if (tooltipModel.caretY < position.height * 3 / 4) {
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY + 'px';
                }
                else {
                    tooltipEl.style.top = position.top + window.pageYOffset + tooltipModel.caretY - 100 + 'px';
                };

            },

        },

        scales: {
            xAxes: [{
                scaleLabel: {
                    display: true,
                    fontSize: 14,
                    fontFamily: "Kosugi Maru",
                    labelString: "年間利回り"
                },
                ticks: {
                    fontSize: 12,
                    fontFamily: "Kosugi Maru",
                    callback: function (value, index, values) {
                        return value + '%'
                    }
                }
            }],
            yAxes: [{
                type: 'logarithmic',
                scaleLabel: {
                    display: true,
                    fontSize: 14,
                    fontFamily: "Kosugi Maru",
                    labelString: "年間損益（絶対値）"
                },
                ticks: {
                    fontSize: 11,
                    max: 10000,
                    min: 1,
                    fontFamily: "Kosugi Maru",
                    callback: function (value, index, values) {
                        return value + '万円'
                    }
                }
            }]
        },// 軸設定終わり

        plugins: {
            colorschemes: {
                scheme: 'tableau.Blue20'
            }
        }

    },// オプション設定終わり
});

$(function () {

    $(document).on("mouseenter", "#chartjs-tooltip", function (e) {
        $('#chartjs-tooltip').css('opacity', 1);
    });
});




// クリックイベントハンドラー
//ctx.addEventListener('click', function (evt) {
//    var item = myChart.getElementAtEvent(evt);
//    if (item.length == 0) {
//        return;
//    }
//    item = item[0];
//    var index = item._datasetIndex;
//    var item_data = item._chart.config.data.datasets;
//    var item_label = item_data[index].label;
//    console.log(item_label);
//    window.open('https://twitter.com/' + item_label)
//});

